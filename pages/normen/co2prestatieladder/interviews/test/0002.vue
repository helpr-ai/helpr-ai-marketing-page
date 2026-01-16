<template>
  <div class="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
    <!-- Header -->
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
        <div class="text-sm text-gray-500">
          CO2-Prestatieladder Interview
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="pt-32 pb-20">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-3xl font-bold text-gray-900 mb-4">
            Energiestromen
          </h1>
          <p class="text-gray-600">
            CO₂-Prestatieladder Interview
          </p>
        </div>

        <!-- ElevenLabs ConvAI Widget -->
        <div class="flex justify-center">
          <elevenlabs-convai agent-id="agent_5701kf336nz1fcntan5kxp4v32a0"></elevenlabs-convai>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Load ElevenLabs widget on client-side only
onMounted(async () => {
  await import('@elevenlabs/convai-widget-embed')
})

useHead({
  title: 'Energiestromen | CO₂-Prestatieladder | Helpr.AI'
})
</script>
