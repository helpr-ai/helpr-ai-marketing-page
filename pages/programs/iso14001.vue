<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
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
          <NuxtLink :to="localePath('programs')" class="text-green-600 font-semibold">{{ $t('programs.nav') }}</NuxtLink>
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
              <NuxtLink v-for="loc in availableLocales" :key="loc.code" :to="switchLocalePath(loc.code)" :class="['w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors', locale === loc.code ? 'bg-green-50 text-green-600' : 'text-gray-700']">
                <span class="text-lg">{{ loc.flag }}</span>
                <span>{{ loc.name }}</span>
              </NuxtLink>
            </div>
          </div>
          <NuxtLink :to="localePath('/') + '#demo'" class="h-11 flex items-center rounded-xl px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl font-medium">{{ $t('nav.demo') }}</NuxtLink>
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
            <NuxtLink :to="localePath('programs')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-green-600 font-semibold bg-green-50 rounded-lg">{{ $t('programs.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('consultants')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('consultants.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('klanten')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('customers.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('about')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('about.nav') }}</NuxtLink>
          </div>
          <div class="pt-2 pb-4">
            <NuxtLink :to="localePath('/') + '#demo'" @click="closeMobileMenu()" class="block w-full h-11 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium text-center leading-[44px]">{{ $t('nav.demo') }}</NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-36 pb-20 bg-gradient-to-br from-green-600 via-emerald-600 to-green-800">
      <div class="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
          <NuxtLink :to="localePath('programs')" class="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors">
            <ArrowLeftIcon class="h-4 w-4 mr-2" />
            {{ $t('programs.backToPrograms') }}
          </NuxtLink>

          <div class="mb-8">
            <div class="inline-flex items-center rounded-full bg-amber-400/90 px-4 py-2 text-sm font-medium text-amber-900">
              <ClockIcon class="mr-2 h-4 w-4" />
              {{ $t('comingSoon.badge') }}
            </div>
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            ISO 14001
          </h1>
          <p class="mt-4 text-xl text-green-100">{{ $t('programs.iso14001.tagline') }}</p>
          <p class="mt-8 text-xl sm:text-2xl text-green-100 leading-relaxed max-w-3xl mx-auto">
            {{ $t('iso14001Coming.hero.description') }}
          </p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">{{ $t('iso14001Coming.about.title') }}</h2>
            <p class="text-xl text-gray-600 leading-8 mb-8">{{ $t('iso14001Coming.about.description') }}</p>
            <div class="space-y-4">
              <div v-for="(point, index) in tm('iso14001Coming.about.points')" :key="index" class="flex items-start gap-3">
                <CheckCircleIcon class="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700">{{ rt(point) }}</span>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white">
            <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <GlobeEuropeAfricaIcon class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ $t('iso14001Coming.about.helprTitle') }}</h3>
            <p class="text-green-100 leading-7">{{ $t('iso14001Coming.about.helprDescription') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Notify Section -->
    <section class="py-24 bg-gray-50">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 lg:p-12">
          <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BellIcon class="h-8 w-8 text-green-600" />
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{{ $t('comingSoon.notify.title') }}</h2>
          <p class="text-gray-600 mb-8">{{ $t('comingSoon.notify.description') }}</p>
          <NuxtLink :to="localePath('/') + '#demo'" class="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 hover:scale-[1.02]">
            {{ $t('comingSoon.notify.button') }}
            <ArrowRightIcon class="ml-3 h-5 w-5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Available Now Section -->
    <section class="py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">{{ $t('comingSoon.available.title') }}</h2>
          <p class="text-xl text-gray-600 leading-8">{{ $t('comingSoon.available.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <NuxtLink :to="localePath('programs-iso9001')" class="group block">
            <div class="h-full bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-6 hover:shadow-xl hover:border-blue-400 transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <ShieldCheckIcon class="h-6 w-6 text-blue-600" />
                </div>
                <span class="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">{{ $t('programs.status.available') }}</span>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">ISO 9001</h3>
              <p class="text-gray-600 text-sm mb-4">{{ $t('programs.iso9001.tagline') }}</p>
              <div class="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                {{ $t('programs.learnMore') }}
                <ArrowRightIcon class="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </NuxtLink>

          <NuxtLink :to="localePath('programs-co2-prestatieladder')" class="group block">
            <div class="h-full bg-white rounded-2xl shadow-lg border-2 border-emerald-200 p-6 hover:shadow-xl hover:border-emerald-400 transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <GlobeEuropeAfricaIcon class="h-6 w-6 text-emerald-600" />
                </div>
                <span class="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">{{ $t('programs.status.available') }}</span>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('programs.co2.name') }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ $t('programs.co2.tagline') }}</p>
              <div class="flex items-center text-emerald-600 font-medium text-sm group-hover:text-emerald-700">
                {{ $t('programs.learnMore') }}
                <ArrowRightIcon class="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </NuxtLink>
        </div>
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
          <NuxtLink :to="localePath('programs')" class="hover:text-slate-900">{{ $t('programs.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('klanten')" class="hover:text-slate-900">{{ $t('customers.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('partners')" class="hover:text-slate-900">{{ $t('partners.nav') }}</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  GlobeEuropeAfricaIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ClockIcon,
  CheckCircleIcon,
  BellIcon,
  ShieldCheckIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const { t, rt, locale, locales, tm } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const localeFlags: Record<string, string> = { nl: '\u{1F1F3}\u{1F1F1}', en: '\u{1F1EC}\u{1F1E7}' }
const currentLocaleFlag = computed(() => localeFlags[locale.value] || '\u{1F310}')
const availableLocales = computed(() =>
  (locales.value as Array<{ code: string; name: string }>).map(loc => ({
    ...loc,
    flag: localeFlags[loc.code] || '\u{1F310}'
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

useHead({
  title: computed(() => locale.value === 'nl' ? 'ISO 14001 (Binnenkort) | Helpr.AI' : 'ISO 14001 (Coming Soon) | Helpr.AI'),
  meta: [{ name: 'description', content: computed(() => locale.value === 'nl'
    ? 'ISO 14001 milieumanagementsysteem certificering komt binnenkort naar Helpr.ai. Meld je aan voor early access.'
    : 'ISO 14001 environmental management system certification is coming soon to Helpr.ai. Sign up for early access.') }]
})
</script>
