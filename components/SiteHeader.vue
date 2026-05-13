<template>
  <header
    :class="[
      'fixed top-0 w-full z-50 transition-colors duration-200',
      scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-warm-border shadow-sm'
        : 'bg-transparent'
    ]"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
      <NuxtLink :to="localePath('index')" class="flex items-center" aria-label="Helpr.ai">
        <img
          src="~/assets/images/logos/helpr-ai-logo_ai_transparant_vector.svg"
          alt="Helpr.ai"
          class="h-8 w-auto"
        />
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-8 text-sm font-semibold">
        <NuxtLink :to="localePath('product')" class="text-warm-ink/70 hover:text-warm-ink transition-colors">{{ $t('nav.products') }}</NuxtLink>
        <a :href="sectionHref('how')" class="text-warm-ink/70 hover:text-warm-ink transition-colors">{{ $t('nav.how') }}</a>
        <a :href="sectionHref('audience')" class="text-warm-ink/70 hover:text-warm-ink transition-colors">{{ $t('nav.audience') }}</a>
        <NuxtLink :to="localePath('about')" class="text-warm-ink/70 hover:text-warm-ink transition-colors">{{ $t('nav.about') }}</NuxtLink>
      </nav>

      <div class="hidden md:flex items-center gap-3">
        <div class="relative">
          <button
            @click.stop="showLangDropdown = !showLangDropdown"
            class="flex items-center gap-1 px-2 py-1.5 rounded-md hover:bg-warm-bg transition-colors text-sm font-semibold text-warm-ink/70"
            aria-label="Language"
          >
            <span>{{ currentLocaleFlag }}</span>
            <span class="uppercase">{{ locale }}</span>
          </button>
          <div
            v-if="showLangDropdown"
            class="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-card border border-warm-border py-1 min-w-[140px]"
          >
            <NuxtLink
              v-for="loc in availableLocales"
              :key="loc.code"
              :to="switchLocalePath(loc.code)"
              @click="showLangDropdown = false"
              :class="[
                'flex items-center gap-2 px-3 py-2 text-sm hover:bg-warm-bg transition-colors',
                locale === loc.code ? 'text-navy-500 font-semibold' : 'text-warm-ink'
              ]"
            >
              <span>{{ loc.flag }}</span>
              <span>{{ loc.name }}</span>
            </NuxtLink>
          </div>
        </div>

        <a
          :href="sectionHref('cta')"
          class="inline-flex h-10 items-center rounded-full px-5 bg-navy-500 text-white text-sm font-semibold hover:bg-navy-600 transition-colors"
        >
          {{ $t('nav.cta') }}
        </a>
      </div>

      <button
        @click="showMobileMenu = !showMobileMenu"
        class="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-warm-ink hover:bg-warm-bg transition-colors"
        :aria-label="showMobileMenu ? 'Close menu' : 'Open menu'"
      >
        <Bars3Icon v-if="!showMobileMenu" class="h-6 w-6" />
        <XMarkIcon v-else class="h-6 w-6" />
      </button>
    </div>

    <div
      v-if="showMobileMenu"
      class="md:hidden absolute top-full left-0 right-0 bg-white border-b border-warm-border shadow-lg"
    >
      <div class="px-6 py-4 space-y-1">
        <NuxtLink :to="localePath('product')" @click="showMobileMenu = false" class="block px-3 py-3 text-warm-ink hover:bg-warm-bg rounded-md font-semibold">{{ $t('nav.products') }}</NuxtLink>
        <a :href="sectionHref('how')" @click="showMobileMenu = false" class="block px-3 py-3 text-warm-ink hover:bg-warm-bg rounded-md font-semibold">{{ $t('nav.how') }}</a>
        <a :href="sectionHref('audience')" @click="showMobileMenu = false" class="block px-3 py-3 text-warm-ink hover:bg-warm-bg rounded-md font-semibold">{{ $t('nav.audience') }}</a>
        <NuxtLink :to="localePath('about')" @click="showMobileMenu = false" class="block px-3 py-3 text-warm-ink hover:bg-warm-bg rounded-md font-semibold">{{ $t('nav.about') }}</NuxtLink>

        <a
          :href="sectionHref('cta')"
          @click="showMobileMenu = false"
          class="block mt-3 h-11 rounded-full px-5 bg-navy-500 text-white text-sm font-semibold leading-[44px] text-center"
        >
          {{ $t('nav.cta') }}
        </a>

        <div class="pt-3 mt-3 border-t border-warm-border">
          <div class="text-xs uppercase tracking-wide text-warm-gray font-semibold mb-2 px-3">Language</div>
          <div class="flex gap-2 px-3">
            <NuxtLink
              v-for="loc in availableLocales"
              :key="loc.code"
              :to="switchLocalePath(loc.code)"
              @click="showMobileMenu = false"
              :class="[
                'flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors',
                locale === loc.code ? 'bg-warm-bg text-navy-500 font-semibold' : 'text-warm-ink hover:bg-warm-bg'
              ]"
            >
              <span>{{ loc.flag }}</span>
              <span>{{ loc.name }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const { locale, locales } = useI18n()
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
const scrolled = ref(false)

const route = useRoute()
const homePath = computed(() => localePath('index'))
const sectionHref = (id: string) => {
  // On home page use bare hash so smooth-scroll works without re-navigation;
  // on other pages prepend the localized home path so the link navigates back.
  return route.path === homePath.value || route.path === homePath.value + '/'
    ? `#${id}`
    : `${homePath.value}#${id}`
}

const onScroll = () => { scrolled.value = window.scrollY > 8 }
const onClickOutside = (event: Event) => {
  const t = event.target as HTMLElement
  if (!t.closest('[aria-label="Language"]') && !t.closest('.relative')) {
    showLangDropdown.value = false
  }
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onClickOutside)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onClickOutside)
})
</script>
