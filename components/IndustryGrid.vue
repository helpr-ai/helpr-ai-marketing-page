<template>
  <PhotoGrid
    :photos="photos"
    :cols="12"
    :rows="2"
    front-color="#3a3a3a"
    back-color="#2b2b2b"
  />
</template>

<script setup lang="ts">
const photoModules = import.meta.glob(
  '~/assets/images/industry-tiles/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, query: '?url', import: 'default' }
)
const photos = Object.values(photoModules) as string[]
</script>
