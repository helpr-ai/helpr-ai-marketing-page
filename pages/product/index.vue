<template>
  <div>
    <section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-br from-navy-50 via-white to-warm-bg opacity-60 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('product.overview.eyebrow') }}</p>
        <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl text-warm-ink font-bold leading-tight mb-6">
          {{ $t('product.overview.title') }}
        </h1>
        <p class="text-lg lg:text-xl text-warm-ink/70 leading-relaxed max-w-2xl mx-auto">
          {{ $t('product.overview.subtitle') }}
        </p>
      </div>
    </section>

    <section class="pb-24 lg:pb-32">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
          <NuxtLink
            :to="localePath('product-toolbox')"
            class="group relative flex flex-col p-8 lg:p-10 bg-white rounded-2xl border border-warm-border shadow-card hover:shadow-card-hover hover:border-navy-500 transition-all"
          >
            <span class="inline-flex items-center self-start px-3 py-1 rounded-full bg-navy-50 text-navy-700 text-xs font-semibold uppercase tracking-wider mb-6">
              {{ $t('product.overview.cards.toolbox.tag') }}
            </span>
            <h2 class="font-display text-3xl text-warm-ink font-bold mb-4">{{ $t('product.overview.cards.toolbox.title') }}</h2>
            <p class="text-warm-ink/70 leading-relaxed mb-8">{{ $t('product.overview.cards.toolbox.description') }}</p>
            <span class="mt-auto inline-flex items-center text-navy-500 font-semibold group-hover:translate-x-1 transition-transform">
              {{ $t('product.overview.cards.toolbox.cta') }}
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </NuxtLink>

          <NuxtLink
            :to="localePath('product-safety-culture-ladder')"
            class="group relative flex flex-col p-8 lg:p-10 bg-white rounded-2xl border border-warm-border shadow-card hover:shadow-card-hover hover:border-navy-500 transition-all"
          >
            <span class="inline-flex items-center self-start px-3 py-1 rounded-full bg-amber-50 text-gold-600 text-xs font-semibold uppercase tracking-wider mb-6">
              {{ $t('product.overview.cards.scl.tag') }}
            </span>
            <h2 class="font-display text-3xl text-warm-ink font-bold mb-4">{{ $t('product.overview.cards.scl.title') }}</h2>
            <p class="text-warm-ink/70 leading-relaxed mb-8">{{ $t('product.overview.cards.scl.description') }}</p>
            <span class="mt-auto inline-flex items-center text-navy-500 font-semibold group-hover:translate-x-1 transition-transform">
              {{ $t('product.overview.cards.scl.cta') }}
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()

useHead(() => ({
  title: t('product.overview.title') + ' · Helpr.ai'
}))
</script>
