<template>
  <div>
    <!-- HERO -->
    <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-br from-navy-50 via-white to-warm-bg opacity-60 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-warm-border text-xs font-semibold text-warm-ink/70 mb-8">
          <span class="w-2 h-2 rounded-full bg-navy-500"></span>
          {{ $t('about.hero.badge') }}
        </div>
        <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl text-warm-ink font-bold leading-[1.05] mb-8">
          {{ $t('about.hero.titleA') }}<br />
          <span class="text-navy-500">{{ $t('about.hero.titleB') }}</span>
        </h1>
        <p class="text-xl text-warm-ink/70 leading-relaxed max-w-2xl mx-auto">
          {{ $t('about.hero.description') }}
        </p>
      </div>
    </section>

    <!-- MISSION -->
    <section class="py-24 bg-warm-ink text-white">
      <div class="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-6">{{ $t('about.mission.eyebrow') }}</p>
        <h2 class="font-display text-3xl lg:text-4xl text-white font-bold mb-12">
          {{ $t('about.mission.title') }}
        </h2>

        <blockquote class="font-display text-3xl lg:text-4xl text-white leading-snug italic mb-10">
          &ldquo;{{ $t('about.mission.quote') }}&rdquo;
        </blockquote>

        <p class="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          {{ $t('about.mission.description') }}
        </p>
      </div>
    </section>

    <!-- TEAM -->
    <section class="py-24 lg:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('about.team.eyebrow') }}</p>
          <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight mb-6">
            {{ $t('about.team.title') }}
          </h2>
          <p class="text-lg text-warm-ink/70 leading-relaxed">
            {{ $t('about.team.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
          <article
            v-for="member in team"
            :key="member.key"
            class="bg-white rounded-2xl border border-warm-border shadow-card overflow-hidden hover:shadow-card-hover transition-shadow"
          >
            <div class="aspect-[4/5] bg-warm-bg overflow-hidden">
              <img :src="member.photo" :alt="member.name" class="w-full h-full object-cover" />
            </div>
            <div class="p-7">
              <h3 class="font-display text-2xl text-warm-ink font-bold">{{ member.name }}</h3>
              <p class="text-navy-500 font-semibold mb-4">{{ $t(`about.team.${member.key}.role`) }}</p>
              <p class="text-warm-ink/70 leading-relaxed">{{ $t(`about.team.${member.key}.description`) }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 lg:py-32 bg-warm-bg">
      <div class="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight mb-6">
          {{ $t('about.cta.title') }}
        </h2>
        <p class="text-xl text-warm-ink/70 leading-relaxed mb-10 max-w-2xl mx-auto">
          {{ $t('about.cta.description') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('index') + '#cta'"
            class="inline-flex h-12 items-center justify-center rounded-full px-7 bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors shadow-card"
          >
            {{ $t('about.cta.button') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('index') + '#toolbox'"
            class="inline-flex h-12 items-center justify-center rounded-full px-7 bg-white border border-warm-border text-warm-ink font-semibold hover:bg-warm-bg transition-colors"
          >
            {{ $t('about.cta.secondaryButton') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import jorienPhoto from '~/assets/images/photos/jorien.jpg'
import jaapPhoto from '~/assets/images/photos/jaap.png'
import erikPhoto from '~/assets/images/photos/erik.png'

const localePath = useLocalePath()
const { t } = useI18n()

useHead(() => ({
  title: t('about.hero.titleA') + ' · Helpr.ai'
}))

const team = [
  { key: 'jorien', name: 'Jorien Knevel', photo: jorienPhoto },
  { key: 'jaap', name: 'Jaap Koelewijn', photo: jaapPhoto },
  { key: 'erik', name: 'Erik Methorst', photo: erikPhoto },
]
</script>
