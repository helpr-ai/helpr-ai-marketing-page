<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
    <!-- Header/Nav -->
    <header class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between">
        <div class="flex items-center">
          <NuxtLink :to="localePath('/')">
            <img src="~/assets/images/logos/helpr-ai-logo.svg" alt="Helpr.ai" class="h-8 w-auto" />
          </NuxtLink>
        </div>

        <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
          <NuxtLink :to="localePath('product')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('nav.product') }}</NuxtLink>
          <NuxtLink :to="localePath('programs')" class="text-indigo-600 font-semibold">{{ $t('programs.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('consultants')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('consultants.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('klanten')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('customers.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('about')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('about.nav') }}</NuxtLink>
        </nav>

        <div class="hidden md:flex items-center gap-4">
          <div class="relative">
            <button @click="showLangDropdown = !showLangDropdown" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              <span class="text-xl">{{ currentLocaleFlag }}</span>
            </button>
            <div v-if="showLangDropdown" class="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 py-2 min-w-[160px] z-50">
              <NuxtLink v-for="loc in availableLocales" :key="loc.code" :to="switchLocalePath(loc.code)" @click="showLangDropdown = false" :class="['w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors', locale === loc.code ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700']">
                <span class="text-lg">{{ loc.flag }}</span>
                <span>{{ loc.name }}</span>
              </NuxtLink>
            </div>
          </div>
          <NuxtLink :to="localePath('/') + '#demo'" class="h-11 flex items-center rounded-xl px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-medium">{{ $t('nav.demo') }}</NuxtLink>
        </div>

        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
            <Bars3Icon v-if="!showMobileMenu" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <div v-if="showMobileMenu" class="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
        <div class="px-6 py-4 space-y-4">
          <div class="space-y-2">
            <NuxtLink :to="localePath('product')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('nav.product') }}</NuxtLink>
            <NuxtLink :to="localePath('programs')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-indigo-600 font-semibold bg-indigo-50 rounded-lg">{{ $t('programs.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('consultants')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('consultants.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('klanten')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('customers.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('about')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('about.nav') }}</NuxtLink>
          </div>
          <div class="pt-2 pb-4">
            <NuxtLink :to="localePath('/') + '#demo'" @click="closeMobileMenu()" class="block w-full h-11 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-center leading-[44px]">{{ $t('nav.demo') }}</NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-36 pb-20">
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg class="absolute left-[50%] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
          <defs><pattern id="hero-pattern-programs" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse"><path d="M.5 200V.5H200" fill="none"></path></pattern></defs>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#hero-pattern-programs)"></rect>
        </svg>
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref="heroReveal.element" :class="['text-center max-w-4xl mx-auto opacity-0', { 'animate-reveal-up': heroReveal.isVisible }]">
          <div class="mb-8">
            <div class="inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
              <Square3Stack3DIcon class="mr-2 h-4 w-4" />
              {{ $t('programs.hero.badge') }}
            </div>
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            {{ $t('programs.hero.title') }}
          </h1>
          <p class="mt-8 text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {{ $t('programs.hero.description') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Available Programs -->
    <section class="py-24 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">{{ $t('programs.available.title') }}</h2>
          <p class="text-xl text-gray-600 leading-8">{{ $t('programs.available.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          <!-- ISO 9001 -->
          <NuxtLink :to="localePath('programs-iso9001')" ref="card1Reveal.element" :class="['group block opacity-0', { 'animate-reveal-up': card1Reveal.isVisible }]">
            <div class="h-full bg-white rounded-3xl shadow-xl border-2 border-blue-200 overflow-hidden hover:shadow-2xl hover:border-blue-400 transition-all duration-500 hover:scale-[1.02]">
              <div class="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white">
                <div class="flex items-center justify-between mb-4">
                  <div class="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur">
                    <ShieldCheckIcon class="h-7 w-7 text-white" />
                  </div>
                  <span class="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">{{ $t('programs.status.available') }}</span>
                </div>
                <h3 class="text-2xl font-bold">ISO 9001</h3>
                <p class="text-blue-100 mt-2">{{ $t('programs.iso9001.tagline') }}</p>
              </div>
              <div class="p-8">
                <p class="text-gray-600 leading-7 mb-6">{{ $t('programs.iso9001.description') }}</p>
                <div class="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  {{ $t('programs.learnMore') }}
                  <ArrowRightIcon class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </NuxtLink>

          <!-- CO2-Prestatieladder -->
          <NuxtLink :to="localePath('programs-co2-prestatieladder')" ref="card2Reveal.element" :class="['group block opacity-0', { 'animate-reveal-up': card2Reveal.isVisible }]">
            <div class="h-full bg-white rounded-3xl shadow-xl border-2 border-emerald-200 overflow-hidden hover:shadow-2xl hover:border-emerald-400 transition-all duration-500 hover:scale-[1.02]">
              <div class="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-white">
                <div class="flex items-center justify-between mb-4">
                  <div class="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur">
                    <GlobeEuropeAfricaIcon class="h-7 w-7 text-white" />
                  </div>
                  <span class="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">{{ $t('programs.status.available') }}</span>
                </div>
                <h3 class="text-2xl font-bold">{{ $t('programs.co2.name') }}</h3>
                <p class="text-emerald-100 mt-2">{{ $t('programs.co2.tagline') }}</p>
              </div>
              <div class="p-8">
                <p class="text-gray-600 leading-7 mb-6">{{ $t('programs.co2.description') }}</p>
                <div class="flex items-center text-emerald-600 font-medium group-hover:text-emerald-700">
                  {{ $t('programs.learnMore') }}
                  <ArrowRightIcon class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Coming Soon Section -->
        <div class="text-center max-w-4xl mx-auto mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">{{ $t('programs.comingSoon.title') }}</h2>
          <p class="text-xl text-gray-600 leading-8">{{ $t('programs.comingSoon.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <!-- ISO 27001 -->
          <NuxtLink :to="localePath('programs-iso27001')" class="group block">
            <div class="h-full bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div class="absolute top-4 right-4">
                <span class="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">{{ $t('programs.status.comingSoon') }}</span>
              </div>
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <LockClosedIcon class="h-6 w-6 text-purple-600" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">ISO 27001</h3>
              <p class="text-gray-600 text-sm mb-4">{{ $t('programs.iso27001.tagline') }}</p>
              <div class="flex items-center text-purple-600 font-medium text-sm group-hover:text-purple-700">
                {{ $t('programs.learnMore') }}
                <ArrowRightIcon class="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </NuxtLink>

          <!-- ISO 14001 -->
          <NuxtLink :to="localePath('programs-iso14001')" class="group block">
            <div class="h-full bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div class="absolute top-4 right-4">
                <span class="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">{{ $t('programs.status.comingSoon') }}</span>
              </div>
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <GlobeEuropeAfricaIcon class="h-6 w-6 text-green-600" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">ISO 14001</h3>
              <p class="text-gray-600 text-sm mb-4">{{ $t('programs.iso14001.tagline') }}</p>
              <div class="flex items-center text-green-600 font-medium text-sm group-hover:text-green-700">
                {{ $t('programs.learnMore') }}
                <ArrowRightIcon class="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </NuxtLink>

          <!-- ISO 42001 -->
          <NuxtLink :to="localePath('programs-iso42001')" class="group block">
            <div class="h-full bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div class="absolute top-4 right-4">
                <span class="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">{{ $t('programs.status.comingSoon') }}</span>
              </div>
              <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <CpuChipIcon class="h-6 w-6 text-indigo-600" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">ISO 42001</h3>
              <p class="text-gray-600 text-sm mb-4">{{ $t('programs.iso42001.tagline') }}</p>
              <div class="flex items-center text-indigo-600 font-medium text-sm group-hover:text-indigo-700">
                {{ $t('programs.learnMore') }}
                <ArrowRightIcon class="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">{{ $t('programs.cta.title') }}</h2>
        <p class="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">{{ $t('programs.cta.description') }}</p>
        <NuxtLink :to="localePath('/') + '#demo'" class="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-xl hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02]">
          {{ $t('programs.cta.button') }}
          <ArrowRightIcon class="ml-3 h-5 w-5" />
        </NuxtLink>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-10 border-t bg-white/60">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-center">
        <div class="text-sm text-slate-600">
          <div class="font-semibold text-slate-800">{{ $t('common.brand') }}</div>
          <div>{{ $t('footer.tagline') }}</div>
          <div class="mt-1">{{ $t('footer.copyright', { year: new Date().getFullYear().toString() }) }}</div>
        </div>
        <div class="flex justify-start md:justify-end gap-4 text-sm text-slate-600">
          <a href="#" class="hover:text-slate-900">{{ $t('footer.privacy') }}</a>
          <a href="#" class="hover:text-slate-900">{{ $t('footer.security') }}</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useReveal } from '~/composables/useReveal'
import {
  Square3Stack3DIcon,
  ShieldCheckIcon,
  GlobeEuropeAfricaIcon,
  LockClosedIcon,
  CpuChipIcon,
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const { createRevealElement } = useReveal()
const heroReveal = createRevealElement()
const card1Reveal = createRevealElement()
const card2Reveal = createRevealElement()

// i18n setup
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

// Language flags mapping
const localeFlags: Record<string, string> = { nl: '🇳🇱', en: '🇬🇧' }
const currentLocaleFlag = computed(() => localeFlags[locale.value] || '🌐')
const availableLocales = computed(() =>
  (locales.value as Array<{ code: string; name: string }>).map(loc => ({
    ...loc,
    flag: localeFlags[loc.code] || '🌐'
  }))
)

const showLangDropdown = ref(false)
const showMobileMenu = ref(false)

const toggleMobileMenu = () => { showMobileMenu.value = !showMobileMenu.value }
const closeMobileMenu = () => { showMobileMenu.value = false }

onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const target = event.target as HTMLElement
    if (!target.closest('.relative')) showLangDropdown.value = false
    if (!target.closest('header')) showMobileMenu.value = false
  }
  document.addEventListener('click', handleClickOutside)
  onUnmounted(() => document.removeEventListener('click', handleClickOutside))
  window.scrollTo({ top: 0, behavior: 'instant' })
})

useSeoMeta({
  title: () => locale.value === 'nl' ? 'Programma\'s | Helpr.AI' : 'Programs | Helpr.AI',
  description: () => locale.value === 'nl'
    ? 'Ontdek de certificeringsprogramma\'s die Helpr.ai ondersteunt: ISO 9001, CO2-Prestatieladder en meer.'
    : 'Discover the certification programs supported by Helpr.ai: ISO 9001, CO2 Performance Ladder and more.'
})
</script>
