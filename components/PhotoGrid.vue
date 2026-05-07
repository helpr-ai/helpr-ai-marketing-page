<template>
  <div class="photo-grid" :style="gridStyle" aria-hidden="true">
    <div
      v-for="tile in tiles"
      :key="tile.id"
      class="tile-slot"
      :class="{ 'is-empty': !tile.present }"
      @mouseenter="tile.hovered = true"
      @mouseleave="tile.hovered = false"
    >
      <div class="tile-scale">
        <div class="tile" :class="{ flipped: tile.flipped }">
          <div class="face front"></div>
          <div
            class="face back"
            :style="tile.photo ? { backgroundImage: `url(${tile.photo})` } : null"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
  photos: string[]
  cols: number
  rows: number
  isPresent?: (col: number, row: number) => boolean
  frontColor?: string
  backColor?: string
}>(), {
  isPresent: () => () => true,
  frontColor: '#d9d6d1',
  backColor: '#c4c0b8'
})

interface Tile {
  id: number
  col: number
  row: number
  present: boolean
  flipped: boolean
  hovered: boolean
  photo: string
}

const pickPhoto = () =>
  props.photos.length ? props.photos[Math.floor(Math.random() * props.photos.length)] : ''

const buildTiles = (): Tile[] => {
  const out: Tile[] = []
  for (let r = 0; r < props.rows; r++) {
    for (let c = 0; c < props.cols; c++) {
      out.push({
        id: r * props.cols + c,
        col: c,
        row: r,
        present: props.isPresent(c, r),
        flipped: false,
        hovered: false,
        photo: pickPhoto()
      })
    }
  }
  return out
}

const tiles = ref<Tile[]>(buildTiles())

const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
  gridTemplateRows: `repeat(${props.rows}, 1fr)`,
  aspectRatio: `${props.cols} / ${props.rows}`,
  '--front-color': props.frontColor,
  '--back-color': props.backColor
}))

const timers = new Set<ReturnType<typeof setTimeout>>()
let interval: ReturnType<typeof setInterval> | null = null

const flipBatch = () => {
  const candidates = tiles.value.filter(t => t.present && !t.flipped)
  if (!candidates.length) return
  const count = Math.min(2 + Math.floor(Math.random() * 2), candidates.length)
  const chosen: Tile[] = []
  while (chosen.length < count && candidates.length) {
    const idx = Math.floor(Math.random() * candidates.length)
    chosen.push(candidates.splice(idx, 1)[0])
  }
  chosen.forEach((tile, i) => {
    const flipDelay = i * 220
    const showFor = 3200 + Math.random() * 2400
    const flipIn = setTimeout(() => {
      tile.photo = pickPhoto()
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
  const kickoff = setTimeout(flipBatch, 700)
  timers.add(kickoff)
  interval = setInterval(flipBatch, 2600)
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

.tile-scale {
  position: absolute;
  top: -25%;
  left: -25%;
  width: 150%;
  height: 150%;
  transform-style: preserve-3d;
  transform: scale(0.6667);
  transform-origin: center;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.tile-slot:hover:has(.tile.flipped) {
  z-index: 10;
}

.tile-slot:hover:has(.tile.flipped) .tile-scale {
  transform: scale(1);
}

.tile-slot:hover:has(.tile.flipped) .face.back {
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(0, 0, 0, 0.08);
  cursor: pointer;
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

.face {
  position: absolute;
  inset: 0;
  border-radius: 6px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.face.front {
  background: var(--front-color);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.face.back {
  transform: rotateX(180deg);
  background-color: var(--back-color);
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 6px 14px rgba(0, 0, 0, 0.08);
}
</style>
