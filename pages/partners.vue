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
          <NuxtLink :to="localePath('klanten')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('customers.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('partners')" class="text-indigo-600 font-semibold">{{ $t('partners.nav') }}</NuxtLink>
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

          <NuxtLink :to="localePath('/') + '#demo'" class="h-11 flex items-center rounded-xl px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-medium">{{ $t('nav.demo') }}</NuxtLink>
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
            <NuxtLink :to="localePath('klanten')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('customers.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('partners')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-indigo-600 font-semibold bg-indigo-50 rounded-lg">{{ $t('partners.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('about')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('about.nav') }}</NuxtLink>
          </div>

          <div class="pt-2 pb-4 border-b border-gray-100">
            <NuxtLink
              :to="localePath('/') + '#demo'"
              @click="closeMobileMenu()"
              class="block w-full h-11 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg font-medium text-center leading-[44px]"
            >
              {{ $t('nav.demo') }}
            </NuxtLink>
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
    <section class="relative overflow-hidden pt-36 pb-20">
      <!-- Background decorations -->
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg class="absolute left-[50%] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="hero-pattern-partners" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#hero-pattern-partners)"></rect>
        </svg>
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref="heroReveal.element"
          :class="[
            'text-center max-w-4xl mx-auto opacity-0',
            { 'animate-reveal-up': heroReveal.isVisible }
          ]"
        >
          <div class="mb-8">
            <div class="inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
              <UsersIcon class="mr-2 h-4 w-4" />
              {{ $t('partners.hero.badge') }}
            </div>
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            {{ $t('partners.hero.title') }}
          </h1>
          <p class="mt-8 text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {{ $t('partners.hero.description') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Partners Showcase -->
    <section id="partners" class="py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
            {{ $t('partners.showcase.title') }}
          </h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ $t('partners.showcase.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Certificeringsadvies Nederland -->
          <div
            ref="partner1Reveal.element"
            :class="[
              'group opacity-0',
              { 'animate-reveal-up': partner1Reveal.isVisible }
            ]"
          >
            <a
              href="https://certificeringsadvies.nl"
              target="_blank"
              rel="noopener"
              class="block bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div class="p-8 flex flex-col items-center text-center">
                <div class="bg-gray-50 rounded-2xl p-6 mb-6 group-hover:bg-indigo-50 transition-colors">
                  <img
                    src="~/assets/images/logos/certificeringsadvies_nederland_logo.svg"
                    alt="Certificeringsadvies Nederland"
                    class="h-16 w-auto"
                  />
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Certificeringsadvies Nederland</h3>
                <p class="text-gray-600 leading-7 mb-4">
                  {{ $t('partners.showcase.partner1.description') }}
                </p>
                <div class="flex flex-wrap gap-2 justify-center">
                  <span class="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">ISO 9001</span>
                  <span class="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">ISO 27001</span>
                  <span class="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">ISO 14001</span>
                </div>
                <div class="mt-6 flex items-center text-indigo-600 font-medium group-hover:text-indigo-700">
                  {{ $t('partners.showcase.visitWebsite') }}
                  <ArrowTopRightOnSquareIcon class="ml-2 h-4 w-4" />
                </div>
              </div>
            </a>
          </div>

          <!-- Coning Adviesgroep -->
          <div
            ref="partner2Reveal.element"
            :class="[
              'group opacity-0',
              { 'animate-reveal-up': partner2Reveal.isVisible }
            ]"
          >
            <a
              href="https://coningadviesgroep.nl"
              target="_blank"
              rel="noopener"
              class="block bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div class="p-8 flex flex-col items-center text-center">
                <div class="bg-gray-50 rounded-2xl p-6 mb-6 group-hover:bg-indigo-50 transition-colors">
                  <img
                    src="~/assets/images/logos/coning_logo.png"
                    alt="Coning Adviesgroep"
                    class="h-16 w-auto"
                  />
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Coning Adviesgroep</h3>
                <p class="text-gray-600 leading-7 mb-4">
                  {{ $t('partners.showcase.partner2.description') }}
                </p>
                <div class="flex flex-wrap gap-2 justify-center">
                  <span class="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">CO₂-Prestatieladder</span>
                  <span class="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">{{ $t('partners.showcase.sustainability') }}</span>
                </div>
                <div class="mt-6 flex items-center text-indigo-600 font-medium group-hover:text-indigo-700">
                  {{ $t('partners.showcase.visitWebsite') }}
                  <ArrowTopRightOnSquareIcon class="ml-2 h-4 w-4" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- How We Work Together -->
    <section class="py-24 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
            {{ $t('partners.collaboration.title') }}
          </h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ $t('partners.collaboration.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- What Helpr.ai Does -->
          <div
            ref="collab1Reveal.element"
            :class="[
              'opacity-0',
              { 'animate-reveal-left': collab1Reveal.isVisible }
            ]"
          >
            <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden h-full">
              <div class="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <CpuChipIcon class="h-6 w-6 text-white" />
                  </div>
                  <h3 class="text-xl font-bold">{{ $t('partners.collaboration.helpr.title') }}</h3>
                </div>
              </div>
              <div class="p-6">
                <div class="space-y-4">
                  <div
                    v-for="(point, index) in tm('partners.collaboration.helpr.points')"
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

          <!-- What Partners Do -->
          <div
            ref="collab2Reveal.element"
            :class="[
              'opacity-0',
              { 'animate-reveal-right': collab2Reveal.isVisible }
            ]"
          >
            <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden h-full">
              <div class="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <UsersIcon class="h-6 w-6 text-white" />
                  </div>
                  <h3 class="text-xl font-bold">{{ $t('partners.collaboration.partners.title') }}</h3>
                </div>
              </div>
              <div class="p-6">
                <div class="space-y-4">
                  <div
                    v-for="(point, index) in tm('partners.collaboration.partners.points')"
                    :key="index"
                    class="flex items-start gap-3"
                  >
                    <CheckCircleIcon class="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span class="text-gray-700 leading-7">{{ rt(point) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Become a Partner CTA -->
    <section id="contact" class="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 relative overflow-hidden scroll-mt-24">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref="ctaReveal.element"
          :class="[
            'text-center max-w-3xl mx-auto opacity-0',
            { 'animate-reveal-scale': ctaReveal.isVisible }
          ]"
        >
          <div class="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-6">
            <HandshakeIcon class="h-8 w-8 text-white" />
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
            {{ $t('partners.cta.title') }}
          </h2>
          <p class="text-xl text-indigo-100 leading-8 mb-10">
            {{ $t('partners.cta.description') }}
          </p>

          <a
            href="mailto:partnership@helpr.ai"
            class="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transition-all duration-200 hover:scale-[1.02]"
          >
            {{ $t('partners.cta.button') }}
            <ArrowRightIcon class="ml-3 h-5 w-5" />
          </a>
          <p class="mt-6 text-indigo-200 text-sm">
            {{ $t('partners.cta.email') }}: partnership@helpr.ai
          </p>
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
  UsersIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  CpuChipIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

// Custom handshake icon component
const HandshakeIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267L8.16 15.09m0 0l-2.51-2.225.568 9.47-5.227-7.917 3.287.672zM12 5.432l-3.75 6.75h7.5L12 5.432z" /></svg>`
}

// Reveal animation setup
const { createRevealElement } = useReveal()
const heroReveal = createRevealElement()
const partner1Reveal = createRevealElement()
const partner2Reveal = createRevealElement()
const collab1Reveal = createRevealElement()
const collab2Reveal = createRevealElement()
const ctaReveal = createRevealElement()

// i18n setup
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

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}

// Close dropdown and mobile menu when clicking outside
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

// Ensure page starts at top on mount
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
})

// SEO
useHead({
  title: computed(() => locale.value === 'nl'
    ? 'Onze Partners | Helpr.AI'
    : 'Our Partners | Helpr.AI'),
  meta: [
    {
      name: 'description',
      content: computed(() => locale.value === 'nl'
        ? 'Ontdek de consultancybureaus waarmee Helpr.ai samenwerkt voor ISO- en CO2-prestatieladder certificeringen.'
        : 'Discover the consultancies that work with Helpr.ai for ISO and CO2 performance ladder certifications.')
    }
  ]
})
</script>
