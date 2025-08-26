<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
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
          <nuxt-link to="/" class="text-gray-700 hover:text-purple-600 transition-colors">Home</nuxt-link>
          <button @click="scrollTo('about')" class="text-gray-700 hover:text-purple-600 transition-colors">About ISO 42001</button>
          <button @click="scrollTo('requirements')" class="text-gray-700 hover:text-purple-600 transition-colors">Requirements</button>
          <button @click="scrollTo('solution')" class="text-gray-700 hover:text-purple-600 transition-colors">AI Governance</button>
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
                  currentLocale === lang.code ? 'bg-purple-50 text-purple-600' : 'text-gray-700'
                ]"
              >
                <span class="text-lg">{{ lang.flag }}</span>
                <span>{{ lang.name }}</span>
              </button>
            </div>
          </div>
          
          <nuxt-link 
            to="/"
            class="inline-flex items-center justify-center rounded-2xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transition-all duration-200 hover:scale-[1.02]"
          >
            {{ t('iso42001.cta') }}
          </nuxt-link>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-600 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="mb-6">
            <span class="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/20">
              <SparklesIcon class="mr-2 h-4 w-4" />
              {{ t('iso42001.hero.badge') }}
            </span>
          </div>
          
          <!-- Large AI/ISO 42001 Icon -->
          <div class="flex items-center justify-center mb-8">
            <div class="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20 relative">
              <div class="text-center relative">
                <div class="text-3xl font-bold text-white mb-1">ISO</div>
                <div class="text-2xl font-bold text-white mb-1">42001</div>

              </div>
            </div>
          </div>

          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6" v-html="t('iso42001.title', { iso42001: '<span class=&quot;bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent&quot;>', '/iso42001': '</span>' })"></h1>
          <p class="text-xl sm:text-2xl text-purple-100 leading-8 max-w-4xl mx-auto mb-10">
            {{ t('iso42001.subtitle') }}
          </p>
          <p class="text-lg text-purple-200 leading-8 max-w-3xl mx-auto mb-12">
            {{ t('iso42001.hero.description') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <nuxt-link 
              to="/"
              class="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 transition-all duration-200 hover:scale-[1.02]"
            >
              {{ t('iso42001.cta') }}
              <ArrowRightIcon class="ml-3 h-5 w-5" />
            </nuxt-link>
            <button 
              @click="scrollTo('about')"
              class="inline-flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white border border-white/20 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 transition-all duration-200"
            >
              Learn More
              <ChevronDownIcon class="ml-3 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- About ISO 42001 -->
    <section id="about" class="py-24 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ t('iso42001.about.title') }}
          </h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ t('iso42001.about.description') }}
          </p>
        </div>

        <!-- AI Relevance Spotlight -->
        <div class="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 lg:p-12 text-white mb-16">
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CpuChipIcon class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-3xl font-bold mb-4">{{ t('iso42001.about.aiRelevance.title') }}</h3>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <div 
              v-for="(point, index) in getRaw('iso42001.about.aiRelevance.points')" 
              :key="index"
              class="flex items-start gap-4"
            >
              <div class="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                <ExclamationTriangleIcon class="h-5 w-5 text-white" />
              </div>
              <p class="text-emerald-100 leading-7">{{ point }}</p>
            </div>
          </div>
        </div>

        <!-- Why it Matters -->
        <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 lg:p-12">
          <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Why ISO 42001 Matters</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="(point, index) in getRaw('iso42001.about.importance')" 
              :key="index"
              class="flex items-start gap-4"
            >
              <div class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircleIcon class="h-5 w-5 text-white" />
              </div>
              <p class="text-gray-700 leading-7">{{ point }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Requirements -->
    <section id="requirements" class="py-24 bg-gray-50 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ t('iso42001.requirements.title') }}
          </h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ t('iso42001.requirements.subtitle') }}
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 mb-16">
          <div 
            v-for="(item, index) in getRaw('iso42001.requirements.items')" 
            :key="index"
            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <CpuChipIcon class="h-6 w-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900">{{ item.title }}</h3>
            </div>
            <p class="text-gray-600 leading-7">{{ item.description }}</p>
          </div>
        </div>

        <!-- Challenges -->
        <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 lg:p-12 border border-red-100">
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ExclamationTriangleIcon class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ t('iso42001.requirements.challenges.title') }}</h3>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <div 
              v-for="(challenge, index) in getRaw('iso42001.requirements.challenges.points')" 
              :key="index"
              class="flex items-start gap-4"
            >
              <div class="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <CpuChipIcon class="h-5 w-5 text-white" />
              </div>
              <p class="text-gray-700 leading-7">{{ challenge }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Helpr.AI Solution -->
    <section id="solution" class="py-24 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ t('iso42001.helprSolution.title') }}
          </h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ t('iso42001.helprSolution.subtitle') }}
          </p>
        </div>

        <!-- AI Advantage Callout -->
        <div class="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white mb-16 text-center">
          <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
            <SparklesIcon class="h-10 w-10 text-white" />
          </div>
          <h3 class="text-3xl font-bold mb-4">{{ t('iso42001.helprSolution.aiAdvantage.title') }}</h3>
          <p class="text-xl text-purple-100 leading-8 max-w-3xl mx-auto">
            {{ t('iso42001.helprSolution.aiAdvantage.description') }}
          </p>
        </div>

        <!-- Benefits -->
        <div class="grid lg:grid-cols-2 gap-8 mb-20">
          <div 
            v-for="(benefit, index) in getRaw('iso42001.helprSolution.benefits')" 
            :key="index"
            class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <component :is="getIconComponent(benefit.icon)" class="h-6 w-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">{{ benefit.title }}</h3>
            </div>
            <p class="text-gray-600 leading-7 text-lg">{{ benefit.description }}</p>
          </div>
        </div>

        <!-- Process -->
        <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 lg:p-12">
          <h3 class="text-3xl font-bold text-gray-900 mb-12 text-center">{{ t('iso42001.helprSolution.process.title') }}</h3>
          <div class="grid lg:grid-cols-2 gap-8">
            <div 
              v-for="(step, index) in getRaw('iso42001.helprSolution.process.steps')" 
              :key="index"
              class="relative"
            >
              <div class="flex items-start gap-6">
                <div class="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  {{ step.number }}
                </div>
                <div>
                  <h4 class="text-xl font-bold text-gray-900 mb-3">{{ step.title }}</h4>
                  <p class="text-gray-600 leading-7">{{ step.description }}</p>
                </div>
              </div>
              <!-- Connector line for desktop -->
              <div v-if="index < 3" class="hidden lg:block absolute top-8 left-8 w-0.5 h-20 bg-purple-200 transform translate-y-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-600 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"></div>
      
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to master AI governance?
        </h2>
        <p class="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
          {{ currentLocale === 'nl' ? 'Ontdek hoe Helpr.AI jouw ISO 42001 AI governance traject kan versnellen en vereenvoudigen.' : 'Discover how Helpr.AI can accelerate and simplify your ISO 42001 AI governance journey.' }}
        </p>
        
        <nuxt-link 
          to="/"
          class="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 transition-all duration-200 hover:scale-[1.02]"
        >
          {{ t('iso42001.cta') }}
          <ArrowRightIcon class="ml-3 h-5 w-5" />
        </nuxt-link>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-10 border-t bg-white/60">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-center">
        <div class="text-sm text-slate-600">
          <div class="font-semibold text-slate-800">Helpr.AI</div>
          <div>"From conversation to certification."</div>
          <div class="mt-1">© {{ new Date().getFullYear() }} Helpr.AI // All rights reserved.</div>
        </div>
        <div class="flex justify-start md:justify-end gap-4 text-sm text-slate-600">
          <nuxt-link to="/" class="hover:text-slate-900">Home</nuxt-link>
          <a href="#" class="hover:text-slate-900">Privacy</a>
          <a href="#" class="hover:text-slate-900">Security</a>
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
  ArrowRightIcon,
  ChevronDownIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  CpuChipIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/vue/24/outline'

// Icon component mapping
const iconComponents = {
  ExclamationTriangleIcon,
  DocumentTextIcon,
  CheckCircleIcon, 
  ChatBubbleLeftRightIcon
}

const getIconComponent = (iconName: string) => {
  return iconComponents[iconName as keyof typeof iconComponents] || CheckCircleIcon
}

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
  title: 'ISO 42001 AI Management Systems | Helpr.AI',
  meta: [
    { name: 'description', content: 'Navigate AI governance with ISO 42001 certification. AI-driven compliance tracking and structured AI management systems implementation.' }
  ]
})
</script>