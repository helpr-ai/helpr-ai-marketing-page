<template>
  <div class="flex items-center" aria-hidden="true">
    <!-- Cherrypick: 2 rows × 5 squares, random one lights cherry-purple -->
    <div v-if="kind === 'cherrypick'" class="grid grid-cols-5 gap-2">
      <div
        v-for="i in 10"
        :key="i"
        :class="[
          'w-9 h-9 rounded-md transition-all duration-500',
          i - 1 === active
            ? 'bg-[#86198f] scale-110'
            : 'bg-warm-border'
        ]"
      ></div>
    </div>

    <!-- Full track: squares with arrows, navy highlight sweeps through -->
    <div v-else-if="kind === 'fullTrack'" class="flex items-center gap-2">
      <template v-for="i in 4" :key="i">
        <div
          :class="[
            'w-8 h-8 rounded-md transition-all duration-500',
            i - 1 <= active ? 'bg-navy-500' : 'bg-warm-border'
          ]"
        ></div>
        <svg
          v-if="i < 4"
          class="w-3 h-3 transition-colors duration-500"
          :class="i - 1 < active ? 'text-navy-500' : 'text-warm-border'"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 16 16"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </template>
    </div>

    <!-- Initial: 5 green squares appear one by one -->
    <div v-else-if="kind === 'initial'" class="flex gap-2">
      <div
        v-for="i in 5"
        :key="i"
        :class="[
          'w-9 h-9 rounded-md transition-all duration-500',
          i - 1 < active
            ? 'bg-[#057642] opacity-100 scale-100'
            : 'bg-warm-border opacity-50 scale-90'
        ]"
      ></div>
    </div>

    <!-- Updates: 5 distinct colors, brighten in random order, reset when full -->
    <div v-else-if="kind === 'updates'" class="flex gap-2">
      <div
        v-for="(color, i) in updateColors"
        :key="i"
        class="w-9 h-9 rounded-md transition-colors duration-700"
        :style="{ backgroundColor: updatesBright[i] ? color.bright : color.pastel }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{ kind: 'cherrypick' | 'fullTrack' | 'initial' | 'updates' }>()

const active = ref(0)

const updateColors = [
  { bright: '#0A66C2', pastel: 'rgba(10, 102, 194, 0.20)' },
  { bright: '#057642', pastel: 'rgba(5, 118, 66, 0.20)' },
  { bright: '#915907', pastel: 'rgba(145, 89, 7, 0.20)' },
  { bright: '#CC1016', pastel: 'rgba(204, 16, 22, 0.20)' },
  { bright: '#86198f', pastel: 'rgba(134, 25, 143, 0.20)' }
]

const updatesBright = ref<boolean[]>([false, false, false, false, false])
const updatesOrder = ref<number[]>([])
let updatesIdx = 0

const shuffle = (arr: number[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const seedUpdates = () => {
  updatesOrder.value = shuffle([0, 1, 2, 3, 4])
  updatesIdx = 0
}

if (props.kind === 'updates') seedUpdates()

const cadenceFor = (k: string) => {
  if (k === 'cherrypick') return 1300
  if (k === 'fullTrack') return 950
  if (k === 'initial') return 600
  if (k === 'updates') return 700
  return 1000
}

let interval: ReturnType<typeof setInterval> | null = null

const tick = () => {
  if (props.kind === 'cherrypick') {
    let next = active.value
    while (next === active.value) next = Math.floor(Math.random() * 10)
    active.value = next
  } else if (props.kind === 'fullTrack') {
    active.value = active.value >= 3 ? 0 : active.value + 1
  } else if (props.kind === 'initial') {
    active.value = active.value >= 6 ? 0 : active.value + 1
  } else if (props.kind === 'updates') {
    if (updatesIdx >= updatesOrder.value.length) {
      updatesBright.value = [false, false, false, false, false]
      seedUpdates()
    } else {
      const idx = updatesOrder.value[updatesIdx]
      updatesBright.value[idx] = true
      updatesIdx++
    }
  }
}

onMounted(() => {
  interval = setInterval(tick, cadenceFor(props.kind))
})
onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
})
</script>
