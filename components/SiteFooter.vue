<template>
  <footer class="bg-warm-ink text-white">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-12 gap-12">
        <div class="md:col-span-5">
          <img src="~/assets/images/logos/helpr-ai-logo_ai_transparant_vector.svg" alt="Helpr.ai" class="h-8 w-auto mb-6 brightness-0 invert" />
          <p class="text-white/70 leading-relaxed max-w-sm">{{ $t('footer.tagline') }}</p>
        </div>

        <div class="md:col-span-3">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">{{ $t('footer.product') }}</h3>
          <ul class="space-y-3 text-white/80">
            <li><a href="/#toolbox" class="hover:text-white transition-colors">{{ $t('nav.toolbox') }}</a></li>
            <li><a href="/#how" class="hover:text-white transition-colors">{{ $t('nav.how') }}</a></li>
            <li><a href="/#audience" class="hover:text-white transition-colors">{{ $t('nav.audience') }}</a></li>
          </ul>
        </div>

        <div class="md:col-span-2">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">{{ $t('footer.company') }}</h3>
          <ul class="space-y-3 text-white/80">
            <li><NuxtLink :to="localePath('about')" class="hover:text-white transition-colors">{{ $t('nav.about') }}</NuxtLink></li>
            <li><a href="mailto:hello@helpr.ai" class="hover:text-white transition-colors">{{ $t('footer.contact') }}</a></li>
          </ul>
        </div>

        <div class="md:col-span-2">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">{{ $t('footer.legal') }}</h3>
          <ul class="space-y-3 text-white/80">
            <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.privacy') }}</a></li>
            <li><a href="#" class="hover:text-white transition-colors">{{ $t('footer.terms') }}</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p class="text-sm text-white/50">{{ $t('footer.copyright', { year: year }) }}</p>
        <p class="text-sm flex items-center gap-1.5">
          <span aria-hidden="true">🇳🇱</span>
          <span class="text-white/50">{{ $t('footer.tagline2') }}</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const year = new Date().getFullYear().toString()
</script>
