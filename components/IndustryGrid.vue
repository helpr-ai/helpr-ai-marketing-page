<template>
  <div>
    <div class="hidden lg:block">
      <PhotoGrid
        :photos="photos"
        :cols="12"
        :rows="2"
        front-color="#3a3a3a"
        back-color="#2b2b2b"
      />
    </div>
    <div class="lg:hidden max-w-[16rem] mx-auto">
      <PhotoGrid
        :photos="photos"
        :cols="2"
        :rows="4"
        front-color="#3a3a3a"
        back-color="#2b2b2b"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const photoModules = import.meta.glob(
  '~/assets/images/industry-tiles/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, query: '?url', import: 'default' }
)
const photos = Object.values(photoModules) as string[]
</script>
