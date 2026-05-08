<template>
  <div>
    <div class="hidden lg:block">
      <PhotoGrid
        :photos="photos"
        :cols="8"
        :rows="5"
        :is-present="isPresent"
      />
    </div>
    <div class="lg:hidden max-w-[16rem] mx-auto">
      <PhotoGrid
        :photos="photos"
        :cols="2"
        :rows="4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const photoModules = import.meta.glob(
  '~/assets/images/hero-tiles/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, query: '?url', import: 'default' }
)
const photos = Object.values(photoModules) as string[]

// Arrow shape: solid 6-wide block, then column of 3 (vertically centered), then 1 (centered)
const isPresent = (col: number, row: number) => {
  if (col < 6) return true
  if (col === 6) return row >= 1 && row <= 3
  if (col === 7) return row === 2
  return false
}
</script>
