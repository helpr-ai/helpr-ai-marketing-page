<template>
  <div class="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
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
          <NuxtLink :to="localePath('product')" class="text-gray-700 hover:text-amber-600 transition-colors">{{ $t('nav.product') }}</NuxtLink>
          <NuxtLink :to="localePath('consultants')" class="text-gray-700 hover:text-amber-600 transition-colors">{{ $t('consultants.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('klanten')" class="text-gray-700 hover:text-amber-600 transition-colors">{{ $t('customers.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('partners')" class="text-gray-700 hover:text-amber-600 transition-colors">{{ $t('partners.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('about')" class="text-amber-600 font-semibold">{{ $t('about.nav') }}</NuxtLink>
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
                  locale === loc.code ? 'bg-amber-50 text-amber-600' : 'text-gray-700'
                ]"
              >
                <span class="text-lg">{{ loc.flag }}</span>
                <span>{{ loc.name }}</span>
              </NuxtLink>
            </div>
          </div>

          <NuxtLink :to="localePath('/') + '#contact'" class="hidden sm:inline-flex h-11 items-center rounded-xl px-5 text-gray-700 hover:bg-gray-100 transition-colors font-medium">{{ $t('nav.contact') }}</NuxtLink>
          <NuxtLink :to="localePath('/') + '#demo'" class="h-11 flex items-center rounded-xl px-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl font-medium">{{ $t('nav.demo') }}</NuxtLink>
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
          <!-- Mobile Navigation Links -->
          <div class="space-y-2">
            <NuxtLink :to="localePath('product')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('nav.product') }}</NuxtLink>
            <NuxtLink :to="localePath('consultants')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('consultants.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('klanten')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('customers.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('partners')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('partners.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('about')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-amber-600 font-semibold bg-amber-50 rounded-lg">{{ $t('about.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('/') + '#contact'" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('nav.contact') }}</NuxtLink>
          </div>

          <!-- Mobile CTA Button -->
          <div class="pt-2 pb-4 border-b border-gray-100">
            <NuxtLink
              :to="localePath('/') + '#demo'"
              @click="closeMobileMenu()"
              class="block w-full h-11 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg font-medium text-center leading-[44px]"
            >
              {{ $t('nav.demo') }}
            </NuxtLink>
          </div>

          <!-- Mobile Language Switcher -->
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
                    ? 'bg-amber-50 text-amber-600 font-medium'
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
    <section class="relative overflow-hidden pt-36 pb-24">
      <!-- Background decorations -->
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg class="absolute left-[50%] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-amber-200/50 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="hero-pattern-about" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#hero-pattern-about)"></rect>
        </svg>
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-400/20 to-rose-400/20 rounded-full blur-3xl"></div>
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
            <div class="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 ring-1 ring-inset ring-amber-200">
              <HeartIcon class="mr-2 h-4 w-4" />
              {{ $t('about.hero.badge') }}
            </div>
          </div>
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            <span class="bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent">{{ $t('about.hero.titleHighlight') }}</span>
            <br />
            {{ $t('about.hero.titleRest') }}
          </h1>
          <p class="mt-8 text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {{ $t('about.hero.description') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-amber-900 relative overflow-hidden">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 bg-gradient-to-r from-amber-600/5 to-orange-600/5"></div>
      <div class="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-orange-400/10 to-rose-400/10 rounded-full blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref="missionReveal.element"
          :class="[
            'text-center max-w-4xl mx-auto opacity-0',
            { 'animate-reveal-scale': missionReveal.isVisible }
          ]"
        >
          <!-- Icon -->
          <div class="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mx-auto mb-8 shadow-2xl">
            <RocketLaunchIcon class="h-10 w-10 text-white" />
          </div>

          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-8">
            {{ $t('about.mission.title') }}
          </h2>

          <!-- Quote -->
          <blockquote class="relative">
            <div class="absolute -top-6 -left-4 text-8xl text-amber-500/20 font-serif">"</div>
            <p class="text-2xl sm:text-3xl lg:text-4xl text-amber-100 font-medium italic leading-relaxed">
              {{ $t('about.mission.quote') }}
            </p>
            <div class="absolute -bottom-6 -right-4 text-8xl text-amber-500/20 font-serif rotate-180">"</div>
          </blockquote>

          <p class="mt-12 text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {{ $t('about.mission.description') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section id="team" class="py-24 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-20">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ $t('about.team.title') }}
          </h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ $t('about.team.subtitle') }}
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- Jorien -->
          <div
            ref="teamCard1Reveal.element"
            :class="[
              'group opacity-0',
              { 'animate-reveal-up': teamCard1Reveal.isVisible }
            ]"
          >
            <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <!-- Photo -->
              <div class="relative aspect-[4/5] bg-gradient-to-br from-rose-100 via-pink-50 to-amber-100 overflow-hidden">
                <img
                  src="~/assets/images/photos/jorien.jpg"
                  alt="Jorien Knevel"
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <!-- Decorative overlay on hover -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Content -->
              <div class="p-8">
                <div class="mb-4">
                  <h3 class="text-2xl font-bold text-gray-900">{{ $t('about.team.jorien.name') }}</h3>
                  <p class="text-amber-600 font-semibold">{{ $t('about.team.jorien.role') }}</p>
                </div>
                <p class="text-gray-600 leading-7">
                  {{ $t('about.team.jorien.description') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Jaap -->
          <div
            ref="teamCard2Reveal.element"
            :class="[
              'group lg:mt-12 opacity-0',
              { 'animate-reveal-up': teamCard2Reveal.isVisible }
            ]"
          >
            <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <!-- Photo -->
              <div class="relative aspect-[4/5] bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 overflow-hidden">
                <img
                  src="~/assets/images/photos/jaap.png"
                  alt="Jaap Koelewijn"
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <!-- Decorative overlay on hover -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Content -->
              <div class="p-8">
                <div class="mb-4">
                  <h3 class="text-2xl font-bold text-gray-900">{{ $t('about.team.jaap.name') }}</h3>
                  <p class="text-amber-600 font-semibold">{{ $t('about.team.jaap.role') }}</p>
                </div>
                <p class="text-gray-600 leading-7">
                  {{ $t('about.team.jaap.description') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Erik -->
          <div
            ref="teamCard3Reveal.element"
            :class="[
              'group opacity-0',
              { 'animate-reveal-up': teamCard3Reveal.isVisible }
            ]"
          >
            <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <!-- Photo -->
              <div class="relative aspect-[4/5] bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 overflow-hidden">
                <img
                  src="~/assets/images/photos/erik.png"
                  alt="Erik Methorst"
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <!-- Decorative overlay on hover -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Content -->
              <div class="p-8">
                <div class="mb-4">
                  <h3 class="text-2xl font-bold text-gray-900">{{ $t('about.team.erik.name') }}</h3>
                  <p class="text-amber-600 font-semibold">{{ $t('about.team.erik.role') }}</p>
                </div>
                <p class="text-gray-600 leading-7">
                  {{ $t('about.team.erik.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-rose-600/20"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref="ctaReveal.element"
          :class="[
            'text-center max-w-4xl mx-auto opacity-0',
            { 'animate-reveal-scale': ctaReveal.isVisible }
          ]"
        >
          <h2 class="text-4xl sm:text-5xl font-bold text-white mb-6">
            {{ $t('about.cta.title') }}
          </h2>
          <p class="text-xl sm:text-2xl text-amber-100 leading-relaxed mb-12 max-w-3xl mx-auto">
            {{ $t('about.cta.description') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              :to="localePath('/') + '#demo'"
              class="group inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-amber-600 shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-600 transition-all duration-200 hover:scale-[1.02]"
            >
              {{ $t('about.cta.button') }}
              <ArrowRightIcon class="ml-3 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            </NuxtLink>
            <NuxtLink
              :to="localePath('product')"
              class="inline-flex items-center justify-center rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-600 transition-all duration-200"
            >
              {{ $t('about.cta.secondaryButton') }}
            </NuxtLink>
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
  HeartIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

// Reveal animation setup
const { createRevealElement } = useReveal()
const heroReveal = createRevealElement()
const missionReveal = createRevealElement()
const teamCard1Reveal = createRevealElement()
const teamCard2Reveal = createRevealElement()
const teamCard3Reveal = createRevealElement()
const ctaReveal = createRevealElement()

// i18n setup
const { t, locale, locales } = useI18n()
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

    // Close language dropdown if clicking outside of language switcher
    if (!target.closest('.relative')) {
      showLangDropdown.value = false
    }

    // Close mobile menu if clicking outside of header
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
</script>
