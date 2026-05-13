<template>
  <div>
    <section class="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-br from-navy-50 via-white to-warm-bg opacity-60 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        <NuxtLink
          :to="localePath('product')"
          class="inline-flex items-center text-sm font-semibold text-warm-ink/60 hover:text-warm-ink transition-colors mb-8 gap-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          {{ $t('product.toolbox.back') }}
        </NuxtLink>

        <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('product.toolbox.eyebrow') }}</p>
        <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl text-warm-ink font-bold leading-tight mb-6">
          {{ $t('product.toolbox.title') }}
        </h1>
        <p class="text-lg lg:text-xl text-warm-ink/70 leading-relaxed max-w-3xl">
          {{ $t('product.toolbox.subtitle') }}
        </p>
      </div>
    </section>

    <section class="py-12 lg:py-16 bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <ToolboxModules />
      </div>
    </section>

    <section class="py-20 lg:py-24 bg-warm-bg">
      <div class="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <p class="font-display text-2xl lg:text-3xl text-warm-ink font-bold mb-6">
          {{ $t('toolbox.growthTitle') }}
        </p>
        <p class="text-lg text-warm-ink/70 leading-relaxed mb-10">
          {{ $t('toolbox.growthBody') }}
        </p>
        <NuxtLink
          :to="localePath('sample')"
          class="inline-flex min-h-[3rem] py-3 items-center justify-center rounded-full px-7 bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors shadow-card"
        >
          {{ $t('product.toolbox.cta') }}
          <svg class="ml-2 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()

useHead(() => ({
  title: t('product.toolbox.title') + ' · Helpr.ai'
}))
</script>
