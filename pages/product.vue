<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
    <!-- Header/Nav -->
    <header class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between">
        <div class="flex items-center">
          <NuxtLink :to="localePath('/')" class="flex items-center">
            <img
              src="~/assets/images/logos/helpr-ai-logo.svg"
              alt="Helpr.ai"
              class="h-8 w-auto"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
          <NuxtLink :to="localePath('/')" class="text-gray-700 hover:text-indigo-600 transition-colors">Home</NuxtLink>
          <button @click="scrollTo('features')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('productPage.nav.features') }}</button>
          <button @click="scrollTo('co2')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('productPage.nav.co2') }}</button>
          <button @click="scrollTo('standards')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('productPage.nav.standards') }}</button>
          <NuxtLink :to="localePath('klanten')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('customers.nav') }}</NuxtLink>
        </nav>

        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center gap-4">
          <!-- Language Switcher -->
          <div class="relative">
            <button
              @click="showLangDropdown = !showLangDropdown"
              class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span class="text-xl">{{ currentLocaleFlag }}</span>
            </button>
            <div
              v-if="showLangDropdown"
              class="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 py-2 min-w-[160px] z-50"
            >
              <NuxtLink
                v-for="loc in availableLocales"
                :key="loc.code"
                :to="switchLocalePath(loc.code)"
                @click="showLangDropdown = false"
                :class="[
                  'w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors',
                  locale === loc.code ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                ]"
              >
                <span class="text-lg">{{ loc.flag }}</span>
                <span>{{ loc.name }}</span>
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
            :to="localePath('start-traject')"
            class="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 hover:scale-[1.02]"
          >
            {{ $t('productPage.cta.button') }}
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
          <div class="mb-6">
            <span class="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/20">
              <SparklesIcon class="mr-2 h-4 w-4" />
              {{ $t('productPage.hero.badge') }}
            </span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            {{ $t('productPage.hero.title') }}
          </h1>
          <p class="text-xl sm:text-2xl text-indigo-100 leading-8 max-w-3xl mx-auto mb-12">
            {{ $t('productPage.hero.subtitle') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              :to="localePath('start-traject')"
              class="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-xl hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02]"
            >
              {{ $t('productPage.cta.button') }}
              <ArrowRightIcon class="ml-3 h-5 w-5" />
            </NuxtLink>
            <button
              @click="scrollTo('features')"
              class="inline-flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              {{ $t('productPage.hero.learnMore') }}
              <ChevronDownIcon class="ml-3 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="features" class="py-24 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ $t('productPage.howItWorks.title') }}
          </h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ $t('productPage.howItWorks.subtitle') }}
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Step 1: AI Interviews -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div class="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <ChatBubbleLeftRightIcon class="h-6 w-6 text-white" />
                </div>
                <span class="text-3xl font-bold">1</span>
              </div>
              <h3 class="text-2xl font-bold">{{ $t('productPage.howItWorks.step1.title') }}</h3>
            </div>
            <div class="p-8">
              <p class="text-gray-600 leading-7 mb-6">
                {{ $t('productPage.howItWorks.step1.description') }}
              </p>
              <div class="space-y-3">
                <div v-for="(point, index) in tm('productPage.howItWorks.step1.points')" :key="index" class="flex items-start gap-3">
                  <CheckCircleIcon class="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700 text-sm">{{ rt(point) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Structuring -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div class="bg-gradient-to-br from-purple-500 to-pink-600 p-8 text-white">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Square3Stack3DIcon class="h-6 w-6 text-white" />
                </div>
                <span class="text-3xl font-bold">2</span>
              </div>
              <h3 class="text-2xl font-bold">{{ $t('productPage.howItWorks.step2.title') }}</h3>
            </div>
            <div class="p-8">
              <p class="text-gray-600 leading-7 mb-6">
                {{ $t('productPage.howItWorks.step2.description') }}
              </p>
              <div class="space-y-3">
                <div v-for="(point, index) in tm('productPage.howItWorks.step2.points')" :key="index" class="flex items-start gap-3">
                  <CheckCircleIcon class="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700 text-sm">{{ rt(point) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3: Export -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div class="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-white">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <CloudArrowUpIcon class="h-6 w-6 text-white" />
                </div>
                <span class="text-3xl font-bold">3</span>
              </div>
              <h3 class="text-2xl font-bold">{{ $t('productPage.howItWorks.step3.title') }}</h3>
            </div>
            <div class="p-8">
              <p class="text-gray-600 leading-7 mb-6">
                {{ $t('productPage.howItWorks.step3.description') }}
              </p>
              <div class="space-y-3">
                <div v-for="(point, index) in tm('productPage.howItWorks.step3.points')" :key="index" class="flex items-start gap-3">
                  <CheckCircleIcon class="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700 text-sm">{{ rt(point) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CO2-Prestatieladder Section -->
    <section id="co2" class="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <div class="mb-6">
            <span class="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
              <GlobeEuropeAfricaIcon class="mr-2 h-4 w-4" />
              {{ $t('productPage.co2.badge') }}
            </span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ $t('productPage.co2.title') }}
          </h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ $t('productPage.co2.subtitle') }}
          </p>
        </div>

        <!-- What is CO2-Prestatieladder -->
        <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden mb-12">
          <div class="grid lg:grid-cols-2">
            <div class="p-8 lg:p-12">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ $t('productPage.co2.what.title') }}</h3>
              <p class="text-gray-600 leading-7 mb-6">
                {{ $t('productPage.co2.what.description') }}
              </p>
              <div class="space-y-4">
                <div v-for="(point, index) in tm('productPage.co2.what.points')" :key="index" class="flex items-start gap-3">
                  <CheckCircleIcon class="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700">{{ rt(point) }}</span>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 lg:p-12 text-white flex flex-col justify-center">
              <div class="space-y-6">
                <div class="text-center">
                  <div class="text-5xl font-bold mb-2">8.000+</div>
                  <div class="text-emerald-100">{{ $t('productPage.co2.stats.organizations') }}</div>
                </div>
                <div class="text-center">
                  <div class="text-5xl font-bold mb-2">300+</div>
                  <div class="text-emerald-100">{{ $t('productPage.co2.stats.authorities') }}</div>
                </div>
                <div class="text-center">
                  <div class="text-5xl font-bold mb-2">2x</div>
                  <div class="text-emerald-100">{{ $t('productPage.co2.stats.reduction') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Levels/Steps -->
        <div class="mb-12">
          <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">{{ $t('productPage.co2.levels.title') }}</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <span class="text-xl font-bold text-emerald-600">1</span>
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2">{{ $t('productPage.co2.levels.step1.title') }}</h4>
              <p class="text-gray-600 text-sm leading-6">{{ $t('productPage.co2.levels.step1.description') }}</p>
            </div>
            <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <span class="text-xl font-bold text-emerald-600">2</span>
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2">{{ $t('productPage.co2.levels.step2.title') }}</h4>
              <p class="text-gray-600 text-sm leading-6">{{ $t('productPage.co2.levels.step2.description') }}</p>
            </div>
            <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <span class="text-xl font-bold text-emerald-600">3</span>
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2">{{ $t('productPage.co2.levels.step3.title') }}</h4>
              <p class="text-gray-600 text-sm leading-6">{{ $t('productPage.co2.levels.step3.description') }}</p>
            </div>
          </div>
        </div>

        <!-- How Helpr.ai Helps -->
        <div class="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 rounded-3xl p-8 lg:p-12 text-white">
          <div class="text-center max-w-3xl mx-auto mb-12">
            <h3 class="text-3xl font-bold mb-4">{{ $t('productPage.co2.howWeHelp.title') }}</h3>
            <p class="text-indigo-100 text-lg">{{ $t('productPage.co2.howWeHelp.subtitle') }}</p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(benefit, index) in tm('productPage.co2.howWeHelp.benefits')" :key="index" class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <CheckCircleIcon class="h-8 w-8 text-emerald-400 mb-4" />
              <p class="text-white font-medium">{{ rt(benefit) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Standards Section -->
    <section id="standards" class="py-24 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ $t('productPage.standards.title') }}
          </h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ $t('productPage.standards.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- ISO 9001 -->
          <div class="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 p-6 relative">
            <div class="absolute top-4 right-4">
              <span class="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                {{ $t('productPage.standards.available') }}
              </span>
            </div>
            <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheckIcon class="h-6 w-6 text-emerald-600" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">ISO 9001</h3>
            <p class="text-gray-600 text-sm">{{ $t('productPage.standards.iso9001') }}</p>
          </div>

          <!-- CO2-Prestatieladder -->
          <div class="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 p-6 relative">
            <div class="absolute top-4 right-4">
              <span class="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                {{ $t('productPage.standards.available') }}
              </span>
            </div>
            <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <GlobeEuropeAfricaIcon class="h-6 w-6 text-emerald-600" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ locale === 'nl' ? 'CO2-Prestatieladder' : 'CO2 Performance Ladder' }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('productPage.standards.co2') }}</p>
          </div>

          <!-- ISO 27001 -->
          <div class="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-6 relative">
            <div class="absolute top-4 right-4">
              <span class="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                {{ $t('productPage.standards.coming') }}
              </span>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <LockClosedIcon class="h-6 w-6 text-blue-600" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">ISO 27001</h3>
            <p class="text-gray-600 text-sm">{{ $t('productPage.standards.iso27001') }}</p>
          </div>

          <!-- ISO 14001 -->
          <div class="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-6 relative">
            <div class="absolute top-4 right-4">
              <span class="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                {{ $t('productPage.standards.coming') }}
              </span>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <GlobeEuropeAfricaIcon class="h-6 w-6 text-blue-600" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">ISO 14001</h3>
            <p class="text-gray-600 text-sm">{{ $t('productPage.standards.iso14001') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl sm:text-5xl font-bold text-white mb-6">
          {{ $t('productPage.cta.title') }}
        </h2>
        <p class="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
          {{ $t('productPage.cta.description') }}
        </p>

        <NuxtLink
          :to="localePath('start-traject')"
          class="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-xl hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02]"
        >
          {{ $t('productPage.cta.button') }}
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
          <NuxtLink :to="localePath('/')" class="hover:text-slate-900">Home</NuxtLink>
          <NuxtLink :to="localePath('klanten')" class="hover:text-slate-900">{{ $t('customers.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('partners')" class="hover:text-slate-900">{{ $t('partners.nav') }}</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  SparklesIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChatBubbleLeftRightIcon,
  Square3Stack3DIcon,
  CloudArrowUpIcon,
  CheckCircleIcon,
  GlobeEuropeAfricaIcon,
  ShieldCheckIcon,
  LockClosedIcon
} from '@heroicons/vue/24/outline'

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    const headerHeight = 96
    const elementPosition = el.offsetTop - headerHeight
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

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

// SEO
useHead({
  title: computed(() => locale.value === 'nl'
    ? 'Product | Helpr.AI'
    : 'Product | Helpr.AI'),
  meta: [
    {
      name: 'description',
      content: computed(() => locale.value === 'nl'
        ? 'Ontdek hoe Helpr.ai certificeringstrajecten vereenvoudigt voor ISO 9001 en de CO2-Prestatieladder met AI-gestuurde interviews.'
        : 'Discover how Helpr.ai simplifies certification processes for ISO 9001 and the CO2 Performance Ladder with AI-powered interviews.')
    }
  ]
})
</script>
