<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { locale, locales } = useI18n({ useScope: 'global' })

interface LocaleEntry { code: string; iso?: string }
const currentIso = computed(() => {
  const entry = (locales.value as LocaleEntry[]).find(l => l.code === locale.value)
  return entry?.iso ?? locale.value
})

useHead(() => ({
  htmlAttrs: {
    lang: currentIso.value
  }
}))
</script>
