<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
    <!-- Header/Nav -->
    <header class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between">
        <div class="flex items-center">
          <NuxtLink :to="localePath('/')">
            <img
              src="~/assets/images/logos/helpr-ai-logo.svg"
              alt="Helpr.ai"
              class="h-8 w-auto"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
          <NuxtLink :to="localePath('product')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('nav.product') }}</NuxtLink>
          <NuxtLink :to="localePath('consultants')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('consultants.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('organisaties')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('customers.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('prijzen')" class="text-indigo-600 font-semibold">{{ $t('pricing.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('about')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('about.nav') }}</NuxtLink>
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

          <NuxtLink :to="localePath('/') + '#contact'" class="hidden sm:inline-flex h-11 items-center rounded-xl px-5 text-gray-700 hover:bg-gray-100 transition-colors font-medium">{{ $t('nav.contact') }}</NuxtLink>
          <button @click="scrollTo('cta')" class="h-11 flex items-center rounded-xl px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-medium">{{ $t('orgPricing.hero.cta') }}</button>
        </div>

        <!-- Mobile Hamburger Menu -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            type="button"
          >
            <Bars3Icon v-if="!showMobileMenu" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div
        v-if="showMobileMenu"
        class="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40"
      >
        <div class="px-6 py-4 space-y-4">
          <div class="space-y-2">
            <NuxtLink :to="localePath('product')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('nav.product') }}</NuxtLink>
            <NuxtLink :to="localePath('consultants')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('consultants.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('organisaties')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('customers.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('prijzen')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-indigo-600 font-semibold bg-indigo-50 rounded-lg">{{ $t('pricing.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('about')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('about.nav') }}</NuxtLink>
          </div>

          <div class="pt-2 pb-4 border-b border-gray-100">
            <button
              @click="scrollTo('cta'); closeMobileMenu()"
              class="block w-full h-11 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg font-medium"
            >
              {{ $t('orgPricing.hero.cta') }}
            </button>
          </div>

          <div>
            <div class="text-sm font-medium text-gray-500 mb-3">Language</div>
            <div class="flex gap-3">
              <NuxtLink
                v-for="loc in availableLocales"
                :key="loc.code"
                :to="switchLocalePath(loc.code)"
                @click="showMobileMenu = false"
                :class="[
                  'flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors',
                  locale === loc.code
                    ? 'bg-indigo-50 text-indigo-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                ]"
              >
                <span class="text-lg">{{ loc.flag }}</span>
                <span>{{ loc.name }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-36 pb-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <svg class="absolute left-[50%] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-white/5 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="hero-pattern-org-pricing" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#hero-pattern-org-pricing)"></rect>
        </svg>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div
          ref="heroReveal.element"
          :class="[
            'text-center max-w-4xl mx-auto opacity-0',
            { 'animate-reveal-up': heroReveal.isVisible }
          ]"
        >
          <div class="mb-8">
            <div class="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-indigo-200 ring-1 ring-inset ring-white/20">
              <BuildingOffice2Icon class="mr-2 h-4 w-4" />
              {{ $t('orgPricing.hero.badge') }}
            </div>
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            {{ $t('orgPricing.hero.titlePart1') }}
            <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{{ $t('orgPricing.hero.titleHighlight') }}</span>
            {{ $t('orgPricing.hero.titlePart2') }}
          </h1>
          <p class="mt-8 text-xl sm:text-2xl text-indigo-100 leading-relaxed max-w-3xl mx-auto">
            {{ $t('orgPricing.hero.description') }}
          </p>
          <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              @click="scrollTo('cta')"
              class="group inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-900 transition-all duration-200 hover:scale-[1.02]"
            >
              {{ $t('orgPricing.hero.cta') }}
              <ArrowRightIcon class="ml-3 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              @click="scrollTo('plan')"
              class="inline-flex items-center justify-center rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 transition-all duration-200"
            >
              {{ $t('orgPricing.hero.ctaSecondary') }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Card Section -->
    <section id="plan" class="py-24 scroll-mt-24">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div
          ref="planReveal.element"
          :class="[
            'opacity-0',
            { 'animate-reveal-up': planReveal.isVisible }
          ]"
        >
          <div class="bg-white rounded-3xl shadow-2xl border-2 border-indigo-200 overflow-hidden">
            <div class="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 sm:p-12 text-white text-center">
              <h2 class="text-3xl sm:text-4xl font-bold mb-2">{{ $t('orgPricing.hero.titleHighlight') }}</h2>
              <div class="mt-6">
                <div class="text-5xl sm:text-6xl font-extrabold">{{ $t('orgPricing.plan.price') }}</div>
                <div class="text-indigo-200 mt-2 text-lg">{{ $t('orgPricing.plan.priceSub') }}</div>
              </div>
            </div>
            <div class="p-8 sm:p-12">
              <ul class="space-y-5">
                <li v-for="(feature, index) in tm('orgPricing.plan.features')" :key="index" class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mt-0.5">
                    <CheckCircleIcon class="h-5 w-5 text-indigo-600" />
                  </div>
                  <span class="text-gray-700 text-lg leading-relaxed">{{ rt(feature) }}</span>
                </li>
              </ul>
              <div class="mt-10">
                <button
                  @click="scrollTo('cta')"
                  class="w-full h-14 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all duration-200 hover:scale-[1.02] shadow-lg"
                >
                  {{ $t('orgPricing.hero.cta') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Supported Norms Section -->
    <section class="py-16 bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref="normsReveal.element"
          :class="[
            'text-center opacity-0',
            { 'animate-reveal-up': normsReveal.isVisible }
          ]"
        >
          <h2 class="text-2xl font-bold text-gray-900 mb-8">{{ $t('orgPricing.norms.title') }}</h2>
          <div class="flex flex-wrap justify-center gap-3">
            <span
              v-for="(norm, index) in tm('orgPricing.norms.items')"
              :key="index"
              :class="[
                'px-5 py-2.5 rounded-xl text-sm font-medium border transition-colors',
                index === 4
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300'
              ]"
            >
              {{ rt(norm) }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Cross-link to Adviesbureaus -->
    <section class="py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref="crossLinkReveal.element"
          :class="[
            'bg-gradient-to-br from-slate-50 to-indigo-50 rounded-3xl p-8 lg:p-12 text-center opacity-0',
            { 'animate-reveal-scale': crossLinkReveal.isVisible }
          ]"
        >
          <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ $t('orgPricing.crossLink.title') }}</h3>
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">{{ $t('orgPricing.crossLink.description') }}</p>
          <NuxtLink
            :to="localePath('prijzen')"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            {{ $t('orgPricing.crossLink.cta') }}
            <ArrowRightIcon class="h-5 w-5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden scroll-mt-24">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div class="px-8 py-12 sm:px-12 lg:px-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
            <div class="mx-auto max-w-3xl">
              <div class="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-6">
                <RocketLaunchIcon class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-3xl sm:text-4xl font-bold mb-4">
                {{ $t('orgPricing.cta.title') }}
              </h3>
              <p class="text-xl text-indigo-100 leading-8">
                {{ $t('orgPricing.cta.subtitle') }}
              </p>
            </div>
          </div>

          <div class="px-8 py-12 sm:px-12 lg:px-16">
            <form action="https://api.web3forms.com/submit" method="POST" class="max-w-xl mx-auto space-y-6">
              <input type="hidden" name="access_key" value="5a88dd82-d433-4aed-aff0-7edd637ce315">
              <input type="hidden" name="redirect" :value="successUrl">
              <input type="hidden" name="subject" value="Versnellingstraject aanvraag - Helpr.ai Organisaties">
              <input type="hidden" name="from_name" value="Helpr.ai Organization Pricing Page">

              <div>
                <label for="cta-name" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('orgPricing.cta.form.name') }} *</label>
                <input
                  id="cta-name"
                  name="name"
                  type="text"
                  required
                  :placeholder="$t('orgPricing.cta.form.namePlaceholder')"
                  class="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-0 transition-colors"
                />
              </div>

              <div>
                <label for="cta-email" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('orgPricing.cta.form.email') }} *</label>
                <input
                  id="cta-email"
                  name="email"
                  required
                  type="email"
                  :placeholder="$t('orgPricing.cta.form.emailPlaceholder')"
                  class="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-0 transition-colors"
                />
              </div>

              <div>
                <label for="cta-company" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('orgPricing.cta.form.company') }} *</label>
                <input
                  id="cta-company"
                  name="company"
                  type="text"
                  required
                  :placeholder="$t('orgPricing.cta.form.companyPlaceholder')"
                  class="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-0 transition-colors"
                />
              </div>

              <div>
                <label for="cta-message" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('orgPricing.cta.form.message') }}</label>
                <textarea
                  id="cta-message"
                  name="message"
                  :placeholder="$t('orgPricing.cta.form.messagePlaceholder')"
                  rows="4"
                  class="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-0 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all duration-200 hover:scale-[1.02] shadow-lg"
              >
                {{ $t('orgPricing.cta.form.submit') }}
              </button>

              <p class="text-xs text-gray-500 text-center">
                {{ $t('orgPricing.cta.form.privacy') }}
              </p>
            </form>
          </div>
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
          <a href="#" class="hover:text-slate-900">{{ $t('footer.privacy') }}</a>
          <a href="#" class="hover:text-slate-900">{{ $t('footer.security') }}</a>
          <a href="#" class="hover:text-slate-900 flex items-center gap-2">
            {{ $t('footer.status') }}
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useReveal } from '~/composables/useReveal'
import {
  RocketLaunchIcon,
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
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

const { createRevealElement } = useReveal()
const heroReveal = createRevealElement()
const planReveal = createRevealElement()
const normsReveal = createRevealElement()
const crossLinkReveal = createRevealElement()

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

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}

const successUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}${localePath('success')}`
  }
  return localePath('success')
})

onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const target = event.target as HTMLElement
    if (!target.closest('.relative')) {
      showLangDropdown.value = false
    }
    if (!target.closest('header')) {
      showMobileMenu.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
})
</script>
