<template>
  <div class="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
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
          <NuxtLink :to="localePath('product')" class="text-gray-700 hover:text-emerald-600 transition-colors">{{ $t('nav.product') }}</NuxtLink>
          <NuxtLink :to="localePath('consultants')" class="text-gray-700 hover:text-emerald-600 transition-colors">{{ $t('consultants.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('organisaties')" class="text-emerald-600 font-semibold">{{ $t('customers.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('prijzen')" class="text-gray-700 hover:text-emerald-600 transition-colors">{{ $t('pricing.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('about')" class="text-gray-700 hover:text-emerald-600 transition-colors">{{ $t('about.nav') }}</NuxtLink>
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
                  locale === loc.code ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700'
                ]"
              >
                <span class="text-lg">{{ loc.flag }}</span>
                <span>{{ loc.name }}</span>
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
            :to="localePath('start-traject')"
            class="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 transition-all duration-200 hover:scale-[1.02]"
          >
            {{ $t('customers.cta.button') }}
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
          <div class="mb-6">
            <span class="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/20">
              <BuildingOffice2Icon class="mr-2 h-4 w-4" />
              {{ $t('customers.nav') }}
            </span>
          </div>

          <!-- Partner Logos -->
          <div class="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <div class="bg-white rounded-2xl px-5 py-3 shadow-lg">
              <img
                src="~/assets/images/logos/helpr-ai-logo.svg"
                alt="Helpr.ai"
                class="h-8 w-auto"
              />
            </div>
            <span class="text-white/60 text-2xl">+</span>
            <div class="bg-white rounded-2xl px-4 py-3 shadow-lg">
              <img
                src="~/assets/images/logos/certificeringsadvies_nederland_logo.svg"
                alt="Certificeringsadvies Nederland"
                class="h-8 w-auto"
              />
            </div>
            <div class="bg-white rounded-2xl px-4 py-3 shadow-lg">
              <img
                src="~/assets/images/logos/coning_logo.png"
                alt="Coning Adviesgroep"
                class="h-10 w-auto"
              />
            </div>
            <div class="bg-white rounded-2xl px-4 py-3 shadow-lg">
              <img
                src="~/assets/images/logos/logo_van_houten_en_partners.svg"
                alt="Van Houten & Partners"
                class="h-8 w-auto"
              />
            </div>
            <div class="bg-white rounded-2xl px-4 py-3 shadow-lg">
              <img
                src="~/assets/images/logos/logo_team_kikk.png"
                alt="Team Kikk"
                class="h-8 w-auto"
              />
            </div>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            {{ $t('customers.hero.title') }}
          </h1>
          <p class="text-xl sm:text-2xl text-emerald-100 leading-8 max-w-3xl mx-auto mb-8">
            {{ $t('customers.hero.subtitle') }}
          </p>
          <p class="text-lg text-emerald-200 leading-8 max-w-3xl mx-auto mb-12">
            {{ $t('customers.hero.intro') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              :to="localePath('start-traject')"
              class="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600 transition-all duration-200 hover:scale-[1.02]"
            >
              {{ $t('customers.cta.button') }}
              <ArrowRightIcon class="ml-3 h-5 w-5" />
            </NuxtLink>
            <button
              @click="scrollTo('how')"
              class="inline-flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white border border-white/20 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600 transition-all duration-200"
            >
              {{ locale === 'nl' ? 'Meer weten' : 'Learn more' }}
              <ChevronDownIcon class="ml-3 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how" class="py-24 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ $t('customers.howItWorks.title') }}
          </h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ $t('customers.howItWorks.intro') }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div
            v-for="(point, index) in tm('customers.howItWorks.points')"
            :key="index"
            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center"
          >
            <div class="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircleIcon class="h-6 w-6 text-white" />
            </div>
            <p class="text-gray-900 font-semibold text-lg">{{ rt(point) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Roles Section -->
    <section id="roles" class="py-24 bg-gray-50 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ $t('customers.roles.title') }}
          </h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 mb-12">
          <!-- Helpr.ai Role -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div class="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <CpuChipIcon class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-2xl font-bold">{{ $t('customers.roles.helpr.title') }}</h3>
              </div>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div
                  v-for="(point, index) in tm('customers.roles.helpr.points')"
                  :key="index"
                  class="flex items-start gap-3"
                >
                  <CheckCircleIcon class="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700 leading-7">{{ rt(point) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Partner Role -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div class="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <UsersIcon class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-2xl font-bold">{{ $t('customers.roles.partner.title') }}</h3>
              </div>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div
                  v-for="(point, index) in tm('customers.roles.partner.points')"
                  :key="index"
                  class="flex items-start gap-3"
                >
                  <CheckCircleIcon class="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700 leading-7">{{ rt(point) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Result for customer -->
        <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12 border border-emerald-200">
          <div class="text-center max-w-3xl mx-auto">
            <div class="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <SparklesIcon class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('customers.roles.result.title') }}</h3>
            <p class="text-lg text-gray-700 leading-8">
              {{ $t('customers.roles.result.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Always Partner Section -->
    <section class="py-24 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12 border border-amber-200">
          <div class="text-center max-w-3xl mx-auto">
            <div class="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheckIcon class="h-8 w-8 text-white" />
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {{ $t('customers.alwaysPartner.title') }}
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              {{ $t('customers.alwaysPartner.intro') }}
            </p>
            <p class="text-xl text-gray-900 font-semibold">
              {{ $t('customers.alwaysPartner.conclusion') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Highlight Section -->
    <section class="py-24 scroll-mt-24">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-3xl shadow-2xl overflow-hidden">
          <div class="p-8 sm:p-12 text-center">
            <div class="mb-6">
              <span class="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-indigo-200 ring-1 ring-inset ring-white/20">
                <CurrencyEuroIcon class="mr-2 h-4 w-4" />
                {{ $t('orgPricing.hero.badge') }}
              </span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
              {{ $t('orgPricing.hero.titlePart1') }} <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{{ $t('orgPricing.hero.titleHighlight') }}</span>
            </h2>
            <div class="mt-6 mb-4">
              <span class="text-5xl sm:text-6xl font-extrabold text-white">{{ $t('orgPricing.plan.price') }}</span>
              <span class="text-indigo-200 text-lg ml-2">{{ $t('orgPricing.plan.priceSub') }}</span>
            </div>
            <p class="text-lg text-indigo-100 max-w-2xl mx-auto mb-8">
              {{ $t('orgPricing.hero.description') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink
                :to="localePath('organisaties-prijzen')"
                class="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-xl hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02]"
              >
                {{ $t('orgPricing.hero.ctaSecondary') }}
                <ArrowRightIcon class="ml-3 h-5 w-5" />
              </NuxtLink>
              <NuxtLink
                :to="localePath('start-traject')"
                class="inline-flex items-center justify-center rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 transition-all duration-200"
              >
                {{ $t('orgPricing.hero.cta') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section id="partners" class="py-24 bg-gray-50 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ $t('customers.partners.title') }}
          </h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ $t('customers.partners.intro') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Coning -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div class="p-8">
              <div class="flex items-center justify-center mb-6 h-20">
                <img
                  src="~/assets/images/logos/coning_logo.png"
                  alt="Coning Adviesgroep"
                  class="h-16 w-auto"
                />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2 text-center">{{ $t('customers.partners.coning.name') }}</h3>
              <p class="text-gray-600 mb-4 text-center">{{ $t('customers.partners.coning.description') }}</p>
              <p class="text-sm text-emerald-600 font-medium text-center mb-6">{{ $t('customers.partners.coning.expertise') }}</p>
              <NuxtLink
                :to="localePath('start-traject')"
                class="w-full inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700 transition-all"
              >
                {{ $t('customers.partners.startButton') }}
                <ArrowRightIcon class="ml-2 h-4 w-4" />
              </NuxtLink>
            </div>
          </div>

          <!-- Certificeringsadvies -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div class="p-8">
              <div class="flex items-center justify-center mb-6 h-20">
                <img
                  src="~/assets/images/logos/certificeringsadvies_nederland_logo.svg"
                  alt="Certificeringsadvies Nederland"
                  class="h-12 w-auto"
                />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2 text-center">{{ $t('customers.partners.certificeringsadvies.name') }}</h3>
              <p class="text-gray-600 mb-4 text-center">{{ $t('customers.partners.certificeringsadvies.description') }}</p>
              <p class="text-sm text-emerald-600 font-medium text-center mb-6">{{ $t('customers.partners.certificeringsadvies.expertise') }}</p>
              <NuxtLink
                :to="localePath('start-traject')"
                class="w-full inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700 transition-all"
              >
                {{ $t('customers.partners.startButton') }}
                <ArrowRightIcon class="ml-2 h-4 w-4" />
              </NuxtLink>
            </div>
          </div>

          <!-- Van Houten & Partners -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div class="p-8">
              <div class="flex items-center justify-center mb-6 h-20">
                <img
                  src="~/assets/images/logos/logo_van_houten_en_partners.svg"
                  alt="Van Houten & Partners"
                  class="h-12 w-auto"
                />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2 text-center">{{ $t('customers.partners.vanhouten.name') }}</h3>
              <p class="text-gray-600 mb-4 text-center">{{ $t('customers.partners.vanhouten.description') }}</p>
              <p class="text-sm text-emerald-600 font-medium text-center mb-6">{{ $t('customers.partners.vanhouten.expertise') }}</p>
              <NuxtLink
                :to="localePath('start-traject')"
                class="w-full inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700 transition-all"
              >
                {{ $t('customers.partners.startButton') }}
                <ArrowRightIcon class="ml-2 h-4 w-4" />
              </NuxtLink>
            </div>
          </div>

          <!-- Team Kikk -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div class="p-8">
              <div class="flex items-center justify-center mb-6 h-20">
                <img
                  src="~/assets/images/logos/logo_team_kikk.png"
                  alt="Team Kikk"
                  class="h-12 w-auto"
                />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2 text-center">{{ $t('customers.partners.teamkikk.name') }}</h3>
              <p class="text-gray-600 mb-4 text-center">{{ $t('customers.partners.teamkikk.description') }}</p>
              <p class="text-sm text-emerald-600 font-medium text-center mb-6">{{ $t('customers.partners.teamkikk.expertise') }}</p>
              <NuxtLink
                :to="localePath('start-traject')"
                class="w-full inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700 transition-all"
              >
                {{ $t('customers.partners.startButton') }}
                <ArrowRightIcon class="ml-2 h-4 w-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 relative overflow-hidden scroll-mt-24">
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl sm:text-5xl font-bold text-white mb-6">
          {{ $t('customers.cta.title') }}
        </h2>
        <p class="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
          {{ $t('customers.cta.description') }}
        </p>

        <NuxtLink
          :to="localePath('start-traject')"
          class="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600 transition-all duration-200 hover:scale-[1.02]"
        >
          {{ $t('customers.cta.button') }}
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
          <NuxtLink :to="localePath('/')" class="hover:text-slate-900">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink :to="localePath('partners')" class="hover:text-slate-900">{{ $t('partners.nav') }}</NuxtLink>
          <a href="#" class="hover:text-slate-900">{{ $t('footer.privacy') }}</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  CheckCircleIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  UsersIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  BuildingOffice2Icon,
  SparklesIcon,
  CurrencyEuroIcon
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

onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const target = event.target as HTMLElement
    if (!target.closest('.relative')) showLangDropdown.value = false
  }
  document.addEventListener('click', handleClickOutside)
  onUnmounted(() => document.removeEventListener('click', handleClickOutside))
})

// SEO
useSeoMeta({
  title: () => locale.value === 'nl'
    ? 'Organisaties | Helpr.AI'
    : 'Organizations | Helpr.AI',
  description: () => locale.value === 'nl'
    ? 'Start je certificeringstraject met Helpr.ai en een ervaren consultancypartner. Samen zorgen we voor een efficient en grondig traject.'
    : 'Start your certification project with Helpr.ai and an experienced consultancy partner. Together we ensure an efficient and thorough project.'
})
</script>
