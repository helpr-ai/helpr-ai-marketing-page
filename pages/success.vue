<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center px-4">
    <div class="max-w-md w-full">
      <div class="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden text-center p-8">
        <!-- Success Icon -->
        <div class="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-6 shadow-2xl">
          <CheckCircleIcon class="h-10 w-10 text-white" />
        </div>
        
        <!-- Success Message -->
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          {{ t('success.title') }}
        </h1>
        
        <p class="text-xl text-gray-600 mb-8 leading-relaxed">
          {{ t('success.message') }}
        </p>
        
        <!-- Response Time -->
        <div class="bg-gray-50 rounded-2xl p-4 mb-8">
          <div class="flex items-center justify-center gap-3 text-sm text-gray-600">
            <ClockIcon class="h-5 w-5 text-indigo-500" />
            <span class="font-medium">{{ t('success.responseTime') }}</span>
          </div>
        </div>
        
        <!-- Back Button -->
        <button 
          @click="goHome" 
          class="w-full inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all duration-200 hover:scale-[1.02]"
        >
          <ArrowLeftIcon class="mr-3 h-5 w-5" />
          {{ t('success.backButton') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon, ClockIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'

// I18n setup
const { t, locale } = useI18n()
const localePath = useLocalePath()

// Navigation
const router = useRouter()
const goHome = () => {
  router.push(localePath('/'))
}

// Set page title
useHead({
  title: computed(() => locale.value === 'nl' ? 'Bedankt - Helpr.ai' : 'Thank you - Helpr.ai')
})
</script>