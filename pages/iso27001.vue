<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
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
          <nuxt-link to="/" class="text-gray-700 hover:text-emerald-600 transition-colors">Home</nuxt-link>
          <button @click="scrollTo('about')" class="text-gray-700 hover:text-emerald-600 transition-colors">About ISO 27001</button>
          <button @click="scrollTo('requirements')" class="text-gray-700 hover:text-emerald-600 transition-colors">Requirements</button>
          <button @click="scrollTo('solution')" class="text-gray-700 hover:text-emerald-600 transition-colors">How We Help</button>
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
                  currentLocale === lang.code ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700'
                ]"
              >
                <span class="text-lg">{{ lang.flag }}</span>
                <span>{{ lang.name }}</span>
              </button>
            </div>
          </div>
          
          <nuxt-link 
            to="/" 
            style="background-color: #059669 !important;"
            class="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all duration-200 hover:scale-[1.02]"
            @mouseenter="$event.target.style.backgroundColor = '#047857'"
            @mouseleave="$event.target.style.backgroundColor = '#059669'"
          >
            {{ t('iso27001.cta') }}
          </nuxt-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button 
            @click="showMobileMenu = !showMobileMenu"
            class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600"
          >
            <Bars3Icon class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="showMobileMenu"
        class="md:hidden bg-white border-t border-gray-200 shadow-lg"
      >
        <div class="px-6 py-4 space-y-4">
          <nuxt-link to="/" @click="showMobileMenu = false" class="block text-gray-700 hover:text-emerald-600 transition-colors">Home</nuxt-link>
          <button @click="scrollTo('about'); showMobileMenu = false" class="block text-left text-gray-700 hover:text-emerald-600 transition-colors w-full">About ISO 27001</button>
          <button @click="scrollTo('requirements'); showMobileMenu = false" class="block text-left text-gray-700 hover:text-emerald-600 transition-colors w-full">Requirements</button>
          <button @click="scrollTo('solution'); showMobileMenu = false" class="block text-left text-gray-700 hover:text-emerald-600 transition-colors w-full">How We Help</button>
          
          <div class="border-t pt-4">
            <div class="flex items-center gap-4 mb-4">
              <button
                v-for="lang in languages"
                :key="lang.code"
                @click="changeLang(lang.code)"
                :class="[
                  'flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors',
                  currentLocale === lang.code ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700 hover:bg-gray-100'
                ]"
              >
                <span class="text-lg">{{ lang.flag }}</span>
                <span>{{ lang.name }}</span>
              </button>
            </div>
            
            <nuxt-link 
              to="/" 
              @click="showMobileMenu = false"
              style="background-color: #059669 !important;"
              class="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm w-full"
              @mouseenter="$event.target.style.backgroundColor = '#047857'"
              @mouseleave="$event.target.style.backgroundColor = '#059669'"
            >
              {{ t('iso27001.cta') }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 bg-gradient-to-br from-emerald-600 via-green-700 to-teal-800 text-white relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full blur-3xl -z-10"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-3xl -z-10"></div>
      
      <div class="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
        <div class="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium mb-8">
          <ShieldCheckIcon class="h-5 w-5" />
          {{ t('iso27001.hero.badge') }}
        </div>
        
        <!-- Large Icon -->
        <div class="mb-8 flex justify-center">
          <div class="w-32 h-32 bg-white/20 rounded-3xl flex items-center justify-center">
            <ShieldCheckIcon class="h-16 w-16 text-white" />
          </div>
        </div>
        
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" v-html="t('iso27001.title')"></h1>
        <p class="text-xl md:text-2xl text-emerald-100 mb-8 max-w-4xl mx-auto leading-relaxed">{{ t('iso27001.subtitle') }}</p>
        <p class="text-lg text-emerald-200 mb-12 max-w-3xl mx-auto">{{ t('iso27001.hero.description') }}</p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <nuxt-link 
            to="/"
            class="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600 transition-all duration-200 hover:scale-[1.02]"
          >
            {{ t('iso27001.cta') }}
            <ArrowRightIcon class="ml-3 h-5 w-5" />
          </nuxt-link>
        </div>
      </div>
    </section>

    <!-- About ISO 27001 Section -->
    <section id="about" class="py-24 bg-white scroll-mt-24">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{{ t('iso27001.about.title') }}</h2>
          <p class="text-xl text-gray-600 leading-relaxed mb-12">{{ t('iso27001.about.description') }}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ t('iso27001.about.importance.title') }}</h3>
            <div class="space-y-4">
              <div 
                v-for="(point, index) in getRaw('iso27001.about.importance.items')" 
                :key="index"
                class="flex items-start gap-4"
              >
                <div class="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                  <CheckIcon class="h-4 w-4 text-emerald-600" />
                </div>
                <p class="text-gray-700 leading-relaxed">{{ point }}</p>
              </div>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border border-emerald-100">
            <div class="text-center">
              <div class="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <LockClosedIcon class="h-10 w-10 text-white" />
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-4">{{ t('iso27001.additional.securityManagement.title') }}</h4>
              <p class="text-gray-600">{{ t('iso27001.additional.securityManagement.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Requirements Section -->
    <section id="requirements" class="py-24 bg-gradient-to-br from-gray-50 to-emerald-50 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{{ t('iso27001.requirements.title') }}</h2>
          <p class="text-xl text-gray-600 leading-relaxed">{{ t('iso27001.requirements.subtitle') }}</p>
        </div>

        <!-- Requirements Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div 
            v-for="(item, index) in getRaw('iso27001.requirements.items')" 
            :key="index"
            class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
          >
            <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
              <component :is="getRequirementIcon(index)" class="h-6 w-6 text-emerald-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ item.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>

        <!-- Why is it so labor-intensive? -->
        <div class="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <div class="text-center mb-12">
            <div class="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ExclamationTriangleIcon class="h-8 w-8 text-amber-600" />
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-6">{{ t('iso27001.requirements.challenges.title') }}</h3>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div 
              v-for="(challenge, index) in getRaw('iso27001.requirements.challenges.items')" 
              :key="index"
              class="flex items-start gap-4"
            >
              <div class="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mt-1">
                <span class="text-emerald-700 font-bold text-sm">{{ index + 1 }}</span>
              </div>
              <p class="text-gray-700 leading-relaxed">{{ challenge }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section id="solution" class="py-24 bg-white scroll-mt-24">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{{ t('iso27001.solution.title') }}</h2>
          <p class="text-xl text-gray-600 leading-relaxed">{{ t('iso27001.solution.subtitle') }}</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <div 
            v-for="(step, index) in getRaw('iso27001.solution.steps')" 
            :key="index"
            class="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border border-emerald-100 hover:shadow-lg transition-all duration-200"
          >
            <div class="flex items-start gap-6">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold">
                  {{ step.number }}
                </div>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-4">{{ step.title }}</h3>
                <p class="text-gray-700 leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-16 text-center">
          <div class="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-12 text-white">
            <h3 class="text-3xl font-bold mb-6">{{ t('iso27001.additional.finalCta.title') }}</h3>
            <p class="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              {{ t('iso27001.additional.finalCta.description') }}
            </p>
            <nuxt-link 
              to="/"
              class="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600 transition-all duration-200 hover:scale-[1.02]"
            >
              {{ t('iso27001.cta') }}
              <ArrowRightIcon class="ml-3 h-5 w-5" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from '~/composables/useI18n'
import { 
  ArrowRightIcon, 
  Bars3Icon,
  ShieldCheckIcon,
  CheckIcon,
  LockClosedIcon,
  ExclamationTriangleIcon,
  BuildingOfficeIcon,
  UsersIcon,
  DocumentTextIcon,
  CogIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  ArrowPathIcon
} from '@heroicons/vue/24/outline'

// Internationalization
const { t, getRaw, currentLocale, languages, setLocale, getCurrentLanguage } = useI18n()

// Reactive state
const showLangDropdown = ref(false)
const showMobileMenu = ref(false)

// SEO and Meta
useHead({
  title: () => t('iso27001.title'),
  meta: [
    {
      name: 'description',
      content: () => t('iso27001.subtitle')
    },
    {
      property: 'og:title',
      content: () => t('iso27001.title')
    },
    {
      property: 'og:description',
      content: () => t('iso27001.subtitle')
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})

// Methods
const changeLang = (locale: string) => {
  setLocale(locale)
  showLangDropdown.value = false
}

const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    const headerOffset = 100
    const elementPosition = element.offsetTop
    const offsetPosition = elementPosition - headerOffset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const getRequirementIcon = (index: number) => {
  const icons = [
    BuildingOfficeIcon,
    UsersIcon,
    DocumentTextIcon,
    CogIcon,
    ChartBarIcon,
    MagnifyingGlassIcon,
    ArrowPathIcon
  ]
  return icons[index] || DocumentTextIcon
}

// Close dropdowns when clicking outside
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const target = event.target as HTMLElement
    if (!target.closest('.relative')) {
      showLangDropdown.value = false
    }
  }
  
  document.addEventListener('click', handleClickOutside)
  
  return () => {
    document.removeEventListener('click', handleClickOutside)
  }
})
</script>