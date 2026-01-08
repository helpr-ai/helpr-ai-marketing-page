<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
    <!-- Header/Nav -->
    <header class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between">
        <div class="flex items-center">
          <nuxt-link to="/" class="flex items-center">
            <img
              src="~/assets/images/logos/helpr-ai-logo.svg"
              alt="Helpr.ai"
              class="h-8 w-auto"
            />
          </nuxt-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
          <nuxt-link to="/" class="text-gray-700 hover:text-indigo-600 transition-colors">Home</nuxt-link>
          <button @click="scrollTo('why')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ currentLocale === 'nl' ? 'Waarom partners' : 'Why partners' }}</button>
          <button @click="scrollTo('what')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ currentLocale === 'nl' ? 'Wat we bieden' : 'What we offer' }}</button>
          <button @click="scrollTo('forwhom')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ currentLocale === 'nl' ? 'Voor wie' : 'For whom' }}</button>
        </nav>

        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center gap-4">
          <!-- Language Switcher -->
          <div class="relative">
            <button
              @click="showLangDropdown = !showLangDropdown"
              class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span class="text-xl">{{ getCurrentLanguage.flag }}</span>
            </button>
            <div
              v-if="showLangDropdown"
              class="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 py-2 min-w-[160px] z-50"
            >
              <button
                v-for="lang in languages"
                :key="lang.code"
                @click="changeLang(lang.code)"
                :class="[
                  'w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors',
                  currentLocale === lang.code ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                ]"
              >
                <span class="text-lg">{{ lang.flag }}</span>
                <span>{{ lang.name }}</span>
              </button>
            </div>
          </div>

          <button
            @click="scrollTo('cta')"
            class="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-all duration-200 hover:scale-[1.02]"
          >
            {{ t('partner.cta.button') }}
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
          <div class="mb-6">
            <span class="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/20">
              <UsersIcon class="mr-2 h-4 w-4" />
              {{ t('partner.nav') }}
            </span>
          </div>

          <!-- Current Partner Logos -->
          <div class="flex items-center justify-center gap-6 mb-8">
            <span class="text-white/60 text-sm">{{ currentLocale === 'nl' ? 'Huidige partners:' : 'Current partners:' }}</span>
            <a href="https://certificeringsadvies.nl" target="_blank" rel="noopener" class="bg-white rounded-2xl px-4 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <img
                src="~/assets/images/logos/certificeringsadvies_nederland_logo.svg"
                alt="Certificeringsadvies Nederland"
                class="h-8 w-auto"
              />
            </a>
            <a href="https://coningadviesgroep.nl" target="_blank" rel="noopener" class="bg-white rounded-2xl px-4 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <img
                src="~/assets/images/logos/coning_logo.png"
                alt="Coning Adviesgroep"
                class="h-10 w-auto"
              />
            </a>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            {{ t('partner.hero.title') }}
          </h1>
          <p class="text-xl sm:text-2xl text-indigo-100 leading-8 max-w-3xl mx-auto mb-8">
            {{ t('partner.hero.subtitle') }}
          </p>
          <p class="text-lg text-indigo-200 leading-8 max-w-3xl mx-auto mb-12">
            {{ t('partner.hero.intro') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              @click="scrollTo('cta')"
              class="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transition-all duration-200 hover:scale-[1.02]"
            >
              {{ t('partner.cta.button') }}
              <ArrowRightIcon class="ml-3 h-5 w-5" />
            </button>
            <button
              @click="scrollTo('why')"
              class="inline-flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white border border-white/20 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transition-all duration-200"
            >
              {{ currentLocale === 'nl' ? 'Meer weten' : 'Learn more' }}
              <ChevronDownIcon class="ml-3 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Partners Section -->
    <section id="why" class="py-24 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ t('partner.whyPartners.title') }}
          </h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ t('partner.whyPartners.intro') }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div
            v-for="(point, index) in getRaw('partner.whyPartners.points')"
            :key="index"
            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
          >
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircleIcon class="h-5 w-5 text-white" />
              </div>
              <p class="text-gray-700 leading-7 font-medium">{{ point }}</p>
            </div>
          </div>
        </div>

        <div class="text-center">
          <p class="text-xl text-gray-900 font-semibold max-w-3xl mx-auto">
            {{ t('partner.whyPartners.conclusion') }}
          </p>
        </div>
      </div>
    </section>

    <!-- What We Do Section -->
    <section id="what" class="py-24 bg-gray-50 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- What Helpr.ai Does -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div class="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <CpuChipIcon class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-2xl font-bold">{{ t('partner.whatHelprDoes.title') }}</h3>
              </div>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div
                  v-for="(point, index) in getRaw('partner.whatHelprDoes.points')"
                  :key="index"
                  class="flex items-start gap-3"
                >
                  <CheckCircleIcon class="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700 leading-7">{{ point }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- What Partners Do -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div class="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <UsersIcon class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-2xl font-bold">{{ t('partner.whatPartnersDo.title') }}</h3>
              </div>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div
                  v-for="(point, index) in getRaw('partner.whatPartnersDo.points')"
                  :key="index"
                  class="flex items-start gap-3"
                >
                  <CheckCircleIcon class="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700 leading-7">{{ point }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- For Whom Section -->
    <section id="forwhom" class="py-24 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ t('partner.forWhom.title') }}
          </h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Suitable For -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <CheckCircleIcon class="h-6 w-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">{{ t('partner.forWhom.suitable.title') }}</h3>
            </div>
            <div class="space-y-3">
              <div
                v-for="(point, index) in getRaw('partner.forWhom.suitable.points')"
                :key="index"
                class="flex items-start gap-3"
              >
                <CheckCircleIcon class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700 leading-7">{{ point }}</span>
              </div>
            </div>
          </div>

          <!-- Not Suitable For -->
          <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <XCircleIcon class="h-6 w-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">{{ t('partner.forWhom.notSuitable.title') }}</h3>
            </div>
            <div class="space-y-3">
              <div
                v-for="(point, index) in getRaw('partner.forWhom.notSuitable.points')"
                :key="index"
                class="flex items-start gap-3"
              >
                <XCircleIcon class="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700 leading-7">{{ point }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What Partners Get Section -->
    <section class="py-24 bg-gray-50 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ t('partner.program.title') }}
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div
            v-for="(point, index) in getRaw('partner.program.points')"
            :key="index"
            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center"
          >
            <div class="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircleIcon class="h-6 w-6 text-white" />
            </div>
            <p class="text-gray-900 font-medium">{{ point }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden scroll-mt-24">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl sm:text-5xl font-bold text-white mb-6">
          {{ t('partner.cta.title') }}
        </h2>
        <p class="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
          {{ t('partner.cta.description') }}
        </p>

        <a
          href="mailto:partnership@helpr.ai"
          class="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transition-all duration-200 hover:scale-[1.02]"
        >
          {{ t('partner.cta.button') }}
          <ArrowRightIcon class="ml-3 h-5 w-5" />
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-10 border-t bg-white/60">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-center">
        <div class="text-sm text-slate-600">
          <div class="font-semibold text-slate-800">Helpr.AI</div>
          <div>"From conversation to certification."</div>
          <div class="mt-1">&copy; {{ new Date().getFullYear() }} Helpr.AI // All rights reserved.</div>
        </div>
        <div class="flex justify-start md:justify-end gap-4 text-sm text-slate-600">
          <nuxt-link to="/" class="hover:text-slate-900">Home</nuxt-link>
          <nuxt-link to="/klanten" class="hover:text-slate-900">{{ t('customers.nav') }}</nuxt-link>
          <a href="#" class="hover:text-slate-900">Privacy</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from '~/composables/useI18n'
import {
  CheckCircleIcon,
  XCircleIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  UsersIcon,
  CpuChipIcon
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

// I18n setup
const { currentLocale, languages, setLocale, t, getRaw, getCurrentLanguage } = useI18n()
const showLangDropdown = ref(false)

const changeLang = (locale: string) => {
  setLocale(locale)
  showLangDropdown.value = false
}

// SEO
useHead({
  title: computed(() => currentLocale.value === 'nl'
    ? 'Partnerprogramma | Helpr.AI'
    : 'Partner Program | Helpr.AI'),
  meta: [
    {
      name: 'description',
      content: computed(() => currentLocale.value === 'nl'
        ? 'Word partner van Helpr.ai. Schaal certificeringstrajecten zonder in te leveren op kwaliteit.'
        : 'Become a Helpr.ai partner. Scale certification projects without compromising on quality.')
    }
  ]
})
</script>
