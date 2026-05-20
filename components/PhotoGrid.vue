<template>
  <div class="photo-grid" :style="gridStyle" aria-hidden="true">
    <div
      v-for="tile in tiles"
      :key="tile.id"
      class="tile-slot"
      :class="{ 'is-empty': !tile.present, 'magnify-on-flip': magnifyOnFlip }"
      @mouseenter="tile.hovered = true"
      @mouseleave="tile.hovered = false"
    >
      <div class="tile-scale">
        <div class="tile" :class="{ flipped: tile.flipped }">
          <div
            class="face front"
            :style="tile.photo ? { backgroundImage: `url(${tile.photo.url})` } : null"
          >
            <div v-if="tile.photo" class="front-overlay"></div>
            <div v-if="tile.photo?.label" class="label-wrap">
              <span class="label label-front">{{ tile.photo.label }}</span>
            </div>
          </div>
          <div
            class="face back"
            :style="tile.photo ? { backgroundImage: `url(${tile.photo.url})` } : null"
          >
            <div v-if="tile.photo?.label" class="label-wrap label-wrap-back">
              <span class="label label-back">{{ tile.photo.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

interface PhotoEntry { url: string; label?: string }
type PhotoInput = string | PhotoEntry

const props = withDefaults(defineProps<{
  photos: PhotoInput[]
  cols: number
  rows: number
  isPresent?: (col: number, row: number) => boolean
  frontColor?: string
  backColor?: string
  singleFlip?: boolean
  magnifyOnFlip?: boolean
}>(), {
  isPresent: () => () => true,
  frontColor: '#d9d6d1',
  backColor: '#c4c0b8',
  singleFlip: false,
  magnifyOnFlip: false
})

const normalizedPhotos = computed<PhotoEntry[]>(() =>
  props.photos.map(p => typeof p === 'string' ? { url: p } : p)
)

interface Tile {
  id: number
  col: number
  row: number
  present: boolean
  flipped: boolean
  hovered: boolean
  photo: PhotoEntry | null
}

const buildTiles = (): Tile[] => {
  const slots: { r: number; c: number; present: boolean }[] = []
  for (let r = 0; r < props.rows; r++) {
    for (let c = 0; c < props.cols; c++) {
      slots.push({ r, c, present: props.isPresent(c, r) })
    }
  }

  const presentCount = slots.filter(s => s.present).length
  const photoList = normalizedPhotos.value

  // Photo deck: every unique photo at least once, then fill the rest with random picks, then shuffle.
  const deck: (PhotoEntry | null)[] = []
  if (photoList.length === 0) {
    for (let i = 0; i < presentCount; i++) deck.push(null)
  } else {
    deck.push(...photoList)
    while (deck.length < presentCount) {
      deck.push(photoList[Math.floor(Math.random() * photoList.length)])
    }
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[deck[i], deck[j]] = [deck[j], deck[i]]
    }
  }

  let deckIdx = 0
  return slots.map((s, idx) => ({
    id: idx,
    col: s.c,
    row: s.r,
    present: s.present,
    flipped: false,
    hovered: false,
    photo: s.present ? (deck[deckIdx++] ?? null) : null
  }))
}

const tiles = ref<Tile[]>(buildTiles())

// Scale factor for the magnified state. 3x when magnifyOnFlip, otherwise 1.5x on hover.
const scaleFactor = computed(() => props.magnifyOnFlip ? 3 : 1.5)
const inversePercent = computed(() => 100 / scaleFactor.value)
const offsetPercent = computed(() => (100 - inversePercent.value) / 2)

const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
  gridTemplateRows: `repeat(${props.rows}, 1fr)`,
  aspectRatio: `${props.cols} / ${props.rows}`,
  '--front-color': props.frontColor,
  '--back-color': props.backColor,
  '--scale-factor': scaleFactor.value.toString(),
  '--inverse-scale': (1 / scaleFactor.value).toString(),
  '--render-size': `${scaleFactor.value * 100}%`,
  '--render-offset': `-${offsetPercent.value}%`
}))

const timers = new Set<ReturnType<typeof setTimeout>>()
let interval: ReturnType<typeof setInterval> | null = null

const flipBatch = () => {
  const candidates = tiles.value.filter(t => t.present && !t.flipped)
  if (!candidates.length) return
  const max = props.singleFlip ? 1 : Math.min(2 + Math.floor(Math.random() * 2), candidates.length)
  const chosen: Tile[] = []
  while (chosen.length < max && candidates.length) {
    const idx = Math.floor(Math.random() * candidates.length)
    chosen.push(candidates.splice(idx, 1)[0])
  }
  chosen.forEach((tile, i) => {
    const flipDelay = i * 220
    const showFor = props.singleFlip
      ? 3800 + Math.random() * 1600
      : 3200 + Math.random() * 2400
    const flipIn = setTimeout(() => {
      tile.flipped = true
      scheduleFlipBack(tile, showFor)
      timers.delete(flipIn)
    }, flipDelay)
    timers.add(flipIn)
  })
}

const scheduleFlipBack = (tile: Tile, delay: number) => {
  const t = setTimeout(() => {
    timers.delete(t)
    if (tile.hovered) {
      scheduleFlipBack(tile, 400)
    } else {
      tile.flipped = false
    }
  }, delay)
  timers.add(t)
}

onMounted(() => {
  const cycle = props.singleFlip ? 4500 : 2600
  const kickoff = setTimeout(flipBatch, 700)
  timers.add(kickoff)
  interval = setInterval(flipBatch, cycle)
})

onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
  timers.forEach(t => clearTimeout(t))
  timers.clear()
})
</script>

<style scoped>
.photo-grid {
  display: grid;
  width: 100%;
  gap: 10px;
  perspective: 1400px;
}

.tile-slot {
  width: 100%;
  height: 100%;
  position: relative;
}

.tile-slot.is-empty {
  visibility: hidden;
}

/* Render the tile at a multiple of natural size and scale it down to fit the cell.
   When flipped/hovered, scale to 1 (= natural rendered size) so the photo stays sharp. */
.tile-scale {
  position: absolute;
  top: var(--render-offset);
  left: var(--render-offset);
  width: var(--render-size);
  height: var(--render-size);
  transform-style: preserve-3d;
  transform: scale(var(--inverse-scale));
  transform-origin: center;
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.tile {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.tile.flipped {
  transform: rotateX(180deg);
}

/* magnifyOnFlip: flip alone triggers the scale-up */
.tile-slot.magnify-on-flip:has(.tile.flipped) {
  z-index: 10;
}
.tile-slot.magnify-on-flip:has(.tile.flipped) .tile-scale {
  transform: scale(1);
}
.tile-slot.magnify-on-flip:has(.tile.flipped) .face.back {
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(0, 0, 0, 0.08);
}

/* default mode: hover required to scale up a flipped tile */
.tile-slot:not(.magnify-on-flip):hover:has(.tile.flipped) {
  z-index: 10;
}
.tile-slot:not(.magnify-on-flip):hover:has(.tile.flipped) .tile-scale {
  transform: scale(1);
}
.tile-slot:not(.magnify-on-flip):hover:has(.tile.flipped) .face.back {
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}

.face {
  position: absolute;
  inset: 0;
  border-radius: 6px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;
}

.face.front {
  background-color: var(--front-color);
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.front-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
}

.face.back {
  transform: rotateX(180deg);
  background-color: var(--back-color);
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 6px 14px rgba(0, 0, 0, 0.08);
}

.label-wrap {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8%;
  text-align: center;
}

.label-wrap-back {
  align-items: flex-end;
}

.label {
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.005em;
  overflow-wrap: break-word;
  hyphens: auto;
  -webkit-hyphens: auto;
  max-width: 100%;
}

.label-front {
  color: white;
  font-size: 28px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
}

.label-back {
  color: #111;
  font-size: 18px;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.55);
}
</style>
