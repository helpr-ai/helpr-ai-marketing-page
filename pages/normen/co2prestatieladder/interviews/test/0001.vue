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
            CO2-Prestatieladder Interview
          </h1>
          <p class="text-gray-600">
            Test interview sessie
          </p>
        </div>

        <!-- ElevenLabs ConvAI Widget -->
        <div class="flex justify-center">
          <elevenlabs-convai agent-id="agent_2501kf0knt1ffd9b7fpbavmhzgtm"></elevenlabs-convai>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// Load ElevenLabs ConvAI widget script
useHead({
  title: 'CO2-Prestatieladder Interview | Helpr.AI',
  script: [
    {
      src: 'https://unpkg.com/@elevenlabs/convai-widget-embed',
      async: true,
      type: 'text/javascript'
    }
  ]
})
</script>
