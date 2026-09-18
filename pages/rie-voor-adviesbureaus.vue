<template>
  <div>
    <!-- HERO -->
    <section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-br from-navy-50 via-white to-warm-bg opacity-60 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div class="lg:col-span-7">
            <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('rieAdvies.hero.eyebrow') }}</p>
            <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl text-warm-ink font-bold leading-[1.05] mb-5">
              {{ $t('rieAdvies.hero.title') }}
            </h1>
            <p class="text-xl lg:text-2xl text-navy-500 font-display font-semibold leading-snug mb-6">
              {{ $t('rieAdvies.hero.payoff') }}
            </p>
            <p class="text-base lg:text-lg text-warm-ink/70 leading-relaxed mb-10">
              {{ $t('rieAdvies.hero.body') }}
            </p>
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#cta"
                class="inline-flex min-h-[3rem] py-3 items-center justify-center rounded-full px-7 bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors shadow-card"
              >
                {{ $t('rieAdvies.hero.ctaPrimary') }}
                <svg class="ml-2 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a
                href="#screenshots"
                class="inline-flex min-h-[3rem] py-3 items-center justify-center rounded-full px-7 bg-white border border-warm-border text-warm-ink font-semibold hover:bg-warm-bg transition-colors"
              >
                {{ $t('rieAdvies.hero.ctaSecondary') }}
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="rounded-2xl bg-white border border-warm-border shadow-card p-6 lg:p-8">
              <p class="text-xs font-semibold uppercase tracking-wider text-warm-gray mb-3">{{ $t('rieAdvies.hero.sidebox.eyebrow') }}</p>
              <p class="font-display text-3xl text-warm-ink font-bold mb-3">{{ $t('rieAdvies.hero.sidebox.value') }}</p>
              <p class="text-sm text-warm-ink/70 leading-relaxed mb-5">{{ $t('rieAdvies.hero.sidebox.detail') }}</p>
              <div class="pt-4 border-t border-warm-border">
                <p class="font-display text-2xl text-navy-500 font-bold">{{ $t('rieAdvies.hero.sidebox.price') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PARTNERS -->
    <section class="py-16 bg-white border-y border-warm-border">
      <div class="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <p class="text-center text-xs font-semibold uppercase tracking-wider text-warm-gray mb-10">
          {{ $t('rieAdvies.partners.label') }}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-16">
          <a href="https://www.vanhouten.nl/" target="_blank" rel="noopener noreferrer" aria-label="Van Houten en Partners">
            <img src="~/assets/images/logos/logo_van_houten_en_partners.svg" alt="Van Houten en Partners" class="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          </a>
          <div class="h-10 flex items-center px-4 rounded-md border-2 border-dashed border-warm-border text-xs font-semibold text-warm-gray" aria-label="Improcon">
            Improcon
          </div>
          <a href="https://coningadviesgroep.nl" target="_blank" rel="noopener noreferrer" aria-label="Coning Adviesgroep">
            <img src="~/assets/images/logos/coning_logo.png" alt="Coning Adviesgroep" class="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          </a>
          <a href="https://certificeringsadvies.nl" target="_blank" rel="noopener noreferrer" aria-label="Certificeringsadvies Nederland">
            <img src="~/assets/images/logos/certificeringsadvies_nederland_logo.svg" alt="Certificeringsadvies Nederland" class="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          </a>
        </div>
      </div>
    </section>

    <!-- DIFFERENT -->
    <section class="py-20 lg:py-28 bg-warm-ink text-white">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="mb-14 max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('rieAdvies.different.eyebrow') }}</p>
          <h2 class="font-display text-3xl lg:text-4xl text-white font-bold leading-tight mb-6">
            {{ $t('rieAdvies.different.title') }}
          </h2>
          <div class="space-y-5 text-lg text-white/80 leading-relaxed">
            <p>{{ $t('rieAdvies.different.body1') }}</p>
            <p>{{ $t('rieAdvies.different.body2') }}</p>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="b in differentBlocks"
            :key="b"
            class="p-6 bg-white/5 rounded-2xl border border-white/10"
          >
            <h3 class="font-display text-lg text-white font-bold mb-2">{{ $t(`rieAdvies.different.blocks.${b}.title`) }}</h3>
            <p class="text-sm text-white/75 leading-relaxed">{{ $t(`rieAdvies.different.blocks.${b}.body`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTROL -->
    <section class="py-20 lg:py-28">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="mb-14 max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('rieAdvies.control.eyebrow') }}</p>
          <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-6">
            {{ $t('rieAdvies.control.title') }}
          </h2>
          <p class="text-lg lg:text-xl text-warm-ink/80 leading-relaxed">
            {{ $t('rieAdvies.control.body') }}
          </p>
        </div>
      </div>
    </section>

    <!-- SCREENSHOTS -->
    <section id="screenshots" class="py-20 lg:py-28 bg-warm-bg scroll-mt-24">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="s in screenshotItems" :key="s" class="flex flex-col">
            <div class="aspect-[4/3] rounded-xl border-2 border-dashed border-warm-border bg-white flex items-center justify-center p-6 mb-4">
              <p class="text-xs font-semibold uppercase tracking-wider text-warm-gray text-center">{{ $t(`rieAdvies.screenshots.items.${s}.placeholder`) }}</p>
            </div>
            <h3 class="font-display text-lg text-warm-ink font-bold">{{ $t(`rieAdvies.screenshots.items.${s}.title`) }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- TRAJECT -->
    <section class="py-20 lg:py-28">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="mb-14 max-w-3xl">
          <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-6">
            {{ $t('rieAdvies.traject.title') }}
          </h2>
          <p class="text-lg text-warm-ink/70 leading-relaxed">
            {{ $t('rieAdvies.traject.intro') }}
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(s, i) in trajectSteps"
            :key="s"
            class="p-6 bg-white rounded-2xl border border-warm-border shadow-card"
          >
            <div class="flex items-center justify-center w-11 h-11 rounded-full bg-warm-ink text-white font-display font-bold text-lg mb-4">{{ i + 1 }}</div>
            <h3 class="font-display text-lg text-warm-ink font-bold mb-2">{{ $t(`rieAdvies.traject.steps.${s}.title`) }}</h3>
            <p class="text-sm text-warm-ink/70 leading-relaxed">{{ $t(`rieAdvies.traject.steps.${s}.body`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- BUY / FOMO -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 class="font-display text-3xl lg:text-5xl text-navy-500 font-bold leading-tight mb-8">
          {{ $t('rieAdvies.buy.title') }}
        </h2>
        <p class="text-lg lg:text-xl text-warm-ink/80 leading-relaxed mb-10">
          {{ $t('rieAdvies.buy.body') }}
        </p>
        <a
          href="#cta"
          class="inline-flex min-h-[3rem] py-3 items-center justify-center rounded-full px-7 bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors shadow-card"
        >
          {{ $t('rieAdvies.buy.cta') }}
          <svg class="ml-2 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </a>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 lg:py-28 bg-warm-bg">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('rieAdvies.faq.eyebrow') }}</p>
        <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-12">
          {{ $t('rieAdvies.faq.title') }}
        </h2>
        <div class="space-y-8">
          <div v-for="item in faqItems" :key="item" class="border-b border-warm-border pb-8 last:border-b-0">
            <h3 class="font-display text-xl lg:text-2xl text-warm-ink font-bold mb-3">{{ $t(`rieAdvies.faq.items.${item}.q`) }}</h3>
            <p class="text-base lg:text-lg text-warm-ink/75 leading-relaxed">{{ $t(`rieAdvies.faq.items.${item}.a`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="cta" class="py-24 lg:py-32 bg-warm-ink scroll-mt-24">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="font-display text-3xl lg:text-4xl text-white font-bold leading-tight mb-4">
            {{ $t('rieAdvies.cta.title') }}
          </h2>
          <p class="text-lg text-white/70 leading-relaxed">
            {{ $t('rieAdvies.cta.body') }}
          </p>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          @submit.prevent="onSubmit"
          class="grid sm:grid-cols-2 gap-4 p-8 bg-white rounded-2xl shadow-modal"
        >
          <input type="hidden" name="access_key" value="5a88dd82-d433-4aed-aff0-7edd637ce315" />
          <input type="hidden" name="subject" value="Helpr.ai · RI&E demo adviesbureau" />
          <input type="hidden" name="from_name" value="Helpr.ai website" />
          <input type="hidden" name="request_type" value="rie_advies_demo" />
          <input type="checkbox" name="botcheck" class="hidden" tabindex="-1" autocomplete="off" />

          <div class="sm:col-span-2">
            <label for="ria-company" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('rieAdvies.cta.form.companyLabel') }}</label>
            <input
              id="ria-company"
              v-model="form.company"
              name="company"
              type="text"
              required
              :placeholder="$t('rieAdvies.cta.form.companyPlaceholder')"
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            />
          </div>
          <div>
            <label for="ria-name" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('rieAdvies.cta.form.nameLabel') }}</label>
            <input
              id="ria-name"
              v-model="form.name"
              name="name"
              type="text"
              required
              :placeholder="$t('rieAdvies.cta.form.namePlaceholder')"
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            />
          </div>
          <div>
            <label for="ria-email" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('rieAdvies.cta.form.emailLabel') }}</label>
            <input
              id="ria-email"
              v-model="form.email"
              name="email"
              type="email"
              required
              :placeholder="$t('rieAdvies.cta.form.emailPlaceholder')"
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            />
          </div>
          <div class="sm:col-span-2">
            <label for="ria-role" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('rieAdvies.cta.form.roleLabel') }}</label>
            <input
              id="ria-role"
              v-model="form.role"
              name="role"
              type="text"
              :placeholder="$t('rieAdvies.cta.form.rolePlaceholder')"
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            />
          </div>
          <div class="sm:col-span-2">
            <label for="ria-message" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('rieAdvies.cta.form.messageLabel') }}</label>
            <textarea
              id="ria-message"
              v-model="form.message"
              name="message"
              rows="3"
              :placeholder="$t('rieAdvies.cta.form.messagePlaceholder')"
              class="w-full px-4 py-3 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors resize-none"
            ></textarea>
          </div>
          <div class="sm:col-span-2">
            <button
              type="submit"
              :disabled="submitting || submitted"
              class="w-full min-h-[3rem] py-3 rounded-full bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors disabled:opacity-60"
            >
              <span v-if="submitting">{{ $t('rieAdvies.cta.form.submitting') }}</span>
              <span v-else-if="submitted">{{ $t('rieAdvies.cta.form.submitted') }}</span>
              <span v-else>{{ $t('rieAdvies.cta.form.submit') }}</span>
            </button>
          </div>
          <p v-if="submitError" class="sm:col-span-2 text-sm text-red-600 text-center">{{ $t('rieAdvies.cta.form.error') }}</p>
          <p v-else class="sm:col-span-2 text-xs text-warm-gray text-center">{{ $t('rieAdvies.cta.form.disclaimer') }}</p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const { t } = useI18n({ useScope: 'global' })

const differentBlocks = ['right', 'cause', 'round', 'label'] as const
const screenshotItems = ['dossier', 'inventory', 'plan'] as const
const trajectSteps = ['intake', 'interviews', 'round'] as const
const faqItems = ['solo', 'staffel', 'expert', 'ownership', 'training', 'lockin'] as const

const faqJsonLd = computed(() => JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(k => ({
    '@type': 'Question',
    name: t(`rieAdvies.faq.items.${k}.q`),
    acceptedAnswer: { '@type': 'Answer', text: t(`rieAdvies.faq.items.${k}.a`) }
  }))
}))

useHead(() => ({
  title: t('rieAdvies.meta.title'),
  meta: [
    { name: 'description', content: t('rieAdvies.meta.description') }
  ],
  script: [
    { type: 'application/ld+json', innerHTML: faqJsonLd.value }
  ]
}))

const form = ref({ name: '', email: '', company: '', role: '', message: '' })
const submitted = ref(false)
const submitting = ref(false)
const submitError = ref(false)

const onSubmit = async (e: Event) => {
  const target = e.target as HTMLFormElement
  submitting.value = true
  submitError.value = false
  try {
    const data = new FormData(target)
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data
    })
    const json = await res.json().catch(() => null)
    if (res.ok && json?.success) {
      submitted.value = true
    } else {
      submitError.value = true
    }
  } catch {
    submitError.value = true
  } finally {
    submitting.value = false
  }
}
</script>
