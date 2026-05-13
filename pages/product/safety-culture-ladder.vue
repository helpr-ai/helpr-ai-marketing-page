<template>
  <div>
    <!-- HERO -->
    <section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-br from-navy-50 via-white to-warm-bg opacity-60 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <NuxtLink
          :to="localePath('product')"
          class="inline-flex items-center text-sm font-semibold text-warm-ink/60 hover:text-warm-ink transition-colors mb-8 gap-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          {{ $t('product.scl.back') }}
        </NuxtLink>

        <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div class="lg:col-span-7">
            <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('product.scl.eyebrow') }}</p>
            <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl text-warm-ink font-bold leading-tight mb-6">
              {{ $t('product.scl.title') }}
            </h1>
            <p class="text-lg lg:text-xl text-warm-ink/70 leading-relaxed">
              {{ $t('product.scl.subtitle') }}
            </p>
          </div>
          <div class="lg:col-span-5">
            <img
              src="~/assets/images/scl.png"
              alt="Safety Culture Ladder"
              class="w-full h-auto rounded-2xl shadow-card border border-warm-border"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- WAT IS DE SCL -->
    <section class="py-16 lg:py-20">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-6">
          {{ $t('product.scl.what.title') }}
        </h2>
        <p class="text-lg text-warm-ink/80 leading-relaxed">
          {{ $t('product.scl.what.body') }}
        </p>
      </div>
    </section>

    <!-- VOOR WIE -->
    <section class="py-16 lg:py-20 bg-warm-bg">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-6">
          {{ $t('product.scl.who.title') }}
        </h2>
        <p class="text-lg text-warm-ink/80 leading-relaxed">
          {{ $t('product.scl.who.body') }}
        </p>
      </div>
    </section>

    <!-- WAAROM MET HELPR -->
    <section class="py-16 lg:py-20">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-8">
          {{ $t('product.scl.why.title') }}
        </h2>
        <div class="space-y-5 text-lg text-warm-ink/80 leading-relaxed">
          <p class="font-semibold text-warm-ink">{{ $t('product.scl.why.body1') }}</p>
          <p>{{ $t('product.scl.why.body2') }}</p>
          <p>{{ $t('product.scl.why.body3') }}</p>
          <p>{{ $t('product.scl.why.body4') }}</p>
        </div>
      </div>
    </section>

    <!-- HOE WERKT HET -->
    <section class="py-16 lg:py-20 bg-warm-ink text-white">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 class="font-display text-3xl lg:text-4xl text-white font-bold leading-tight mb-6">
          {{ $t('product.scl.how.title') }}
        </h2>
        <p class="text-lg text-white/80 leading-relaxed mb-10">
          {{ $t('product.scl.how.intro') }}
        </p>
        <p class="font-display text-xl text-white font-bold mb-6">
          {{ $t('product.scl.how.subhead') }}
        </p>

        <div class="space-y-6">
          <div
            v-for="f in features"
            :key="f"
            class="flex items-start gap-4"
          >
            <svg viewBox="0 0 9 5" fill="currentColor" class="flex-shrink-0 w-8 h-auto text-navy-500 mt-2" aria-hidden="true">
              <path d="M0 0 L6 0 L9 2.5 L6 5 L0 5 Z" />
            </svg>
            <div>
              <h3 class="font-display text-xl text-white font-bold mb-2">{{ $t(`product.scl.how.features.${f}.title`) }}</h3>
              <p class="text-white/75 leading-relaxed">{{ $t(`product.scl.how.features.${f}.body`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DOSSIER -->
    <section class="py-16 lg:py-20">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <p class="text-lg text-warm-ink/80 leading-relaxed">
          {{ $t('product.scl.dossier.body') }}
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 lg:py-24 bg-navy-500 text-white">
      <div class="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 class="font-display text-3xl lg:text-4xl text-white font-bold leading-tight mb-10">
          {{ $t('product.scl.cta.title') }}
        </h2>
        <a
          href="mailto:hello@helpr.ai?subject=Safety%20Culture%20Ladder"
          class="inline-flex min-h-[3rem] py-3 items-center justify-center rounded-full px-7 bg-white text-navy-500 font-semibold hover:bg-warm-bg transition-colors shadow-card"
        >
          {{ $t('product.scl.cta.button') }}
          <svg class="ml-2 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()

useHead(() => ({
  title: t('product.scl.title') + ' · Helpr.ai'
}))

const features = ['context', 'probe', 'safe', 'scale'] as const
</script>
