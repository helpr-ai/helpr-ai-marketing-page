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
            <li><NuxtLink :to="localePath('product')" class="hover:text-white transition-colors">{{ $t('nav.products') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('product-toolbox')" class="hover:text-white transition-colors">{{ $t('product.toolbox.eyebrow') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('product-safety-culture-ladder')" class="hover:text-white transition-colors">{{ $t('product.scl.title') }}</NuxtLink></li>
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
        <div class="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/company/helpr-ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Helpr.ai on LinkedIn"
            class="text-white/50 hover:text-white transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <p class="text-sm flex items-center gap-1.5">
            <span aria-hidden="true">🇳🇱</span>
            <span class="text-white/50">{{ $t('footer.tagline2') }}</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const year = new Date().getFullYear().toString()
</script>
