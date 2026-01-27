<template>
  <div class="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
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
          <NuxtLink :to="localePath('programs')" class="text-emerald-600 font-semibold">{{ $t('programs.nav') }}</NuxtLink>
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
              <NuxtLink v-for="loc in availableLocales" :key="loc.code" :to="switchLocalePath(loc.code)" @click="showLangDropdown = false" :class="['w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors', locale === loc.code ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700']">
                <span class="text-lg">{{ loc.flag }}</span>
                <span>{{ loc.name }}</span>
              </NuxtLink>
            </div>
          </div>
          <NuxtLink :to="localePath('/') + '#demo'" class="h-11 flex items-center rounded-xl px-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl font-medium">{{ $t('nav.demo') }}</NuxtLink>
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
            <NuxtLink :to="localePath('programs')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-emerald-600 font-semibold bg-emerald-50 rounded-lg">{{ $t('programs.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('consultants')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('consultants.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('klanten')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('customers.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('about')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('about.nav') }}</NuxtLink>
          </div>
          <div class="pt-2 pb-4">
            <NuxtLink :to="localePath('/') + '#demo'" @click="closeMobileMenu()" class="block w-full h-11 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium text-center leading-[44px]">{{ $t('nav.demo') }}</NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-36 pb-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800">
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref="heroReveal.element" :class="['text-center max-w-4xl mx-auto opacity-0', { 'animate-reveal-up': heroReveal.isVisible }]">
          <NuxtLink :to="localePath('programs')" class="inline-flex items-center text-emerald-100 hover:text-white mb-6 transition-colors">
            <ArrowLeftIcon class="h-4 w-4 mr-2" />
            {{ $t('programs.backToPrograms') }}
          </NuxtLink>

          <div class="mb-8">
            <div class="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/20">
              <GlobeEuropeAfricaIcon class="mr-2 h-4 w-4" />
              {{ $t('co2Page.hero.badge') }}
            </div>
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            {{ $t('co2Page.hero.title') }}
          </h1>
          <p class="mt-8 text-xl sm:text-2xl text-emerald-100 leading-relaxed max-w-3xl mx-auto">
            {{ $t('co2Page.hero.description') }}
          </p>
          <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink :to="localePath('/') + '#demo'" class="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-xl hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02]">
              {{ $t('co2Page.cta.primary') }}
              <ArrowRightIcon class="ml-3 h-5 w-5" />
            </NuxtLink>
            <button @click="scrollTo('about')" class="inline-flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white border border-white/20 hover:bg-white/20 transition-all duration-200">
              {{ $t('co2Page.cta.secondary') }}
              <ChevronDownIcon class="ml-3 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="py-12 bg-white border-b border-gray-200">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-emerald-600">8.000+</div>
            <div class="text-gray-600 mt-1">{{ $t('co2Page.stats.organizations') }}</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-emerald-600">300+</div>
            <div class="text-gray-600 mt-1">{{ $t('co2Page.stats.authorities') }}</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-emerald-600">2x</div>
            <div class="text-gray-600 mt-1">{{ $t('co2Page.stats.reduction') }}</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-emerald-600">10%</div>
            <div class="text-gray-600 mt-1">{{ $t('co2Page.stats.discount') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About CO2-Prestatieladder -->
    <section id="about" class="py-24 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref="aboutReveal.element" :class="['opacity-0', { 'animate-reveal-up': aboutReveal.isVisible }]">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">{{ $t('co2Page.about.title') }}</h2>
              <p class="text-xl text-gray-600 leading-8 mb-8">{{ $t('co2Page.about.description') }}</p>
              <div class="space-y-4">
                <div v-for="(point, index) in tm('co2Page.about.points')" :key="index" class="flex items-start gap-3">
                  <CheckCircleIcon class="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700">{{ rt(point) }}</span>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 lg:p-12 text-white">
              <h3 class="text-2xl font-bold mb-6">{{ $t('co2Page.about.recognition.title') }}</h3>
              <div class="space-y-4">
                <div v-for="(org, index) in tm('co2Page.about.recognition.organizations')" :key="index" class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <CheckBadgeIcon class="h-5 w-5 text-white" />
                  </div>
                  <span class="text-emerald-50">{{ rt(org) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Three Steps -->
    <section class="py-24 bg-gray-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">{{ $t('co2Page.levels.title') }}</h2>
          <p class="text-xl text-gray-600 leading-8">{{ $t('co2Page.levels.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div ref="level1Reveal.element" :class="['bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden opacity-0', { 'animate-reveal-up': level1Reveal.isVisible }]">
            <div class="bg-gradient-to-br from-emerald-400 to-emerald-500 p-6 text-white">
              <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <span class="text-2xl font-bold">1</span>
                </div>
              </div>
              <h3 class="text-xl font-bold">{{ $t('co2Page.levels.step1.title') }}</h3>
            </div>
            <div class="p-6">
              <p class="text-gray-600 leading-7 mb-4">{{ $t('co2Page.levels.step1.description') }}</p>
              <div class="space-y-2">
                <div v-for="(point, index) in tm('co2Page.levels.step1.points')" :key="index" class="flex items-start gap-2">
                  <CheckCircleIcon class="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700 text-sm">{{ rt(point) }}</span>
                </div>
              </div>
            </div>
          </div>

          <div ref="level2Reveal.element" :class="['bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden opacity-0', { 'animate-reveal-up': level2Reveal.isVisible }]">
            <div class="bg-gradient-to-br from-emerald-500 to-teal-500 p-6 text-white">
              <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <span class="text-2xl font-bold">2</span>
                </div>
              </div>
              <h3 class="text-xl font-bold">{{ $t('co2Page.levels.step2.title') }}</h3>
            </div>
            <div class="p-6">
              <p class="text-gray-600 leading-7 mb-4">{{ $t('co2Page.levels.step2.description') }}</p>
              <div class="space-y-2">
                <div v-for="(point, index) in tm('co2Page.levels.step2.points')" :key="index" class="flex items-start gap-2">
                  <CheckCircleIcon class="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700 text-sm">{{ rt(point) }}</span>
                </div>
              </div>
            </div>
          </div>

          <div ref="level3Reveal.element" :class="['bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden opacity-0', { 'animate-reveal-up': level3Reveal.isVisible }]">
            <div class="bg-gradient-to-br from-teal-500 to-teal-600 p-6 text-white">
              <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <span class="text-2xl font-bold">3</span>
                </div>
              </div>
              <h3 class="text-xl font-bold">{{ $t('co2Page.levels.step3.title') }}</h3>
            </div>
            <div class="p-6">
              <p class="text-gray-600 leading-7 mb-4">{{ $t('co2Page.levels.step3.description') }}</p>
              <div class="space-y-2">
                <div v-for="(point, index) in tm('co2Page.levels.step3.points')" :key="index" class="flex items-start gap-2">
                  <CheckCircleIcon class="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700 text-sm">{{ rt(point) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How Helpr.ai Helps -->
    <section class="py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">{{ $t('co2Page.howWeHelp.title') }}</h2>
          <p class="text-xl text-gray-600 leading-8">{{ $t('co2Page.howWeHelp.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div v-for="(benefit, index) in tm('co2Page.howWeHelp.benefits')" :key="index" class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <CheckCircleIcon class="h-6 w-6 text-emerald-600" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ rt(benefit.title) }}</h3>
            <p class="text-gray-600 text-sm">{{ rt(benefit.description) }}</p>
          </div>
        </div>

        <!-- Process Steps -->
        <div class="bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 rounded-3xl p-8 lg:p-12 text-white">
          <h3 class="text-2xl font-bold mb-8 text-center">{{ $t('co2Page.process.title') }}</h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ChatBubbleLeftRightIcon class="h-8 w-8 text-white" />
              </div>
              <div class="text-3xl font-bold mb-2">01</div>
              <h4 class="text-lg font-semibold mb-2">{{ $t('co2Page.process.step1.title') }}</h4>
              <p class="text-emerald-100 text-sm">{{ $t('co2Page.process.step1.description') }}</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Square3Stack3DIcon class="h-8 w-8 text-white" />
              </div>
              <div class="text-3xl font-bold mb-2">02</div>
              <h4 class="text-lg font-semibold mb-2">{{ $t('co2Page.process.step2.title') }}</h4>
              <p class="text-emerald-100 text-sm">{{ $t('co2Page.process.step2.description') }}</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DocumentCheckIcon class="h-8 w-8 text-white" />
              </div>
              <div class="text-3xl font-bold mb-2">03</div>
              <h4 class="text-lg font-semibold mb-2">{{ $t('co2Page.process.step3.title') }}</h4>
              <p class="text-emerald-100 text-sm">{{ $t('co2Page.process.step3.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">{{ $t('co2Page.finalCta.title') }}</h2>
        <p class="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">{{ $t('co2Page.finalCta.description') }}</p>
        <NuxtLink :to="localePath('/') + '#demo'" class="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-xl hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02]">
          {{ $t('co2Page.finalCta.button') }}
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
import { useReveal } from '~/composables/useReveal'
import {
  GlobeEuropeAfricaIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  CheckBadgeIcon,
  ChatBubbleLeftRightIcon,
  Square3Stack3DIcon,
  DocumentCheckIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const { createRevealElement } = useReveal()
const heroReveal = createRevealElement()
const aboutReveal = createRevealElement()
const level1Reveal = createRevealElement()
const level2Reveal = createRevealElement()
const level3Reveal = createRevealElement()

// i18n setup
const { t, rt, locale, locales, tm } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

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

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    const headerHeight = 96
    const elementPosition = el.offsetTop - headerHeight
    window.scrollTo({ top: elementPosition, behavior: 'smooth' })
  }
}

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
  title: computed(() => locale.value === 'nl' ? 'CO2-Prestatieladder | Helpr.AI' : 'CO2 Performance Ladder | Helpr.AI'),
  meta: [{ name: 'description', content: computed(() => locale.value === 'nl'
    ? 'Vereenvoudig je CO2-Prestatieladder certificering met Helpr.ai. AI-gestuurde interviews voor snellere en nauwkeurigere dataverzameling.'
    : 'Simplify your CO2 Performance Ladder certification with Helpr.ai. AI-powered interviews for faster and more accurate data collection.') }]
})
</script>
