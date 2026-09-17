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
            <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('rie.hero.eyebrow') }}</p>
            <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl text-warm-ink font-bold leading-[1.05] mb-6">
              {{ $t('rie.hero.title') }}
            </h1>
            <p class="text-base lg:text-lg text-warm-ink/70 leading-relaxed mb-10">
              {{ $t('rie.hero.body') }}
            </p>
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#cta"
                class="inline-flex min-h-[3rem] py-3 items-center justify-center rounded-full px-7 bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors shadow-card"
              >
                {{ $t('rie.hero.ctaPrimary') }}
                <svg class="ml-2 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a
                href="#screenshots"
                class="inline-flex min-h-[3rem] py-3 items-center justify-center rounded-full px-7 bg-white border border-warm-border text-warm-ink font-semibold hover:bg-warm-bg transition-colors"
              >
                {{ $t('rie.hero.ctaSecondary') }}
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="rounded-2xl bg-white border border-warm-border shadow-card p-6 lg:p-8">
              <p class="text-xs font-semibold uppercase tracking-wider text-warm-gray mb-4">{{ $t('rie.hero.advisor.eyebrow') }}</p>
              <div class="flex items-center gap-4 mb-4">
                <div class="w-14 h-14 flex-shrink-0 rounded-full bg-warm-bg border border-warm-border flex items-center justify-center text-warm-gray">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div>
                  <p class="font-display text-lg text-warm-ink font-bold leading-tight">{{ $t('rie.hero.advisor.name') }}</p>
                  <p class="text-sm text-warm-ink/70">{{ $t('rie.hero.advisor.role') }}</p>
                </div>
              </div>
              <p class="text-sm text-warm-ink/70 leading-relaxed mb-5">{{ $t('rie.hero.advisor.body') }}</p>
              <div class="pt-4 border-t border-warm-border flex items-center gap-2 text-sm text-warm-ink/80 font-semibold">
                <svg class="w-4 h-4 text-navy-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {{ $t('rie.hero.advisor.leadTime') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STRIP -->
    <section class="py-8 lg:py-10 bg-warm-bg border-y border-warm-border">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <ul class="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 text-sm text-warm-ink/80">
          <li v-for="i in ['item1', 'item2', 'item3', 'item4']" :key="i" class="flex items-start gap-2">
            <svg class="w-4 h-4 flex-shrink-0 text-navy-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
            <span>{{ $t(`rie.strip.${i}`) }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- PARTNERS -->
    <section class="py-14 lg:py-16 bg-white border-b border-warm-border">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <p class="text-center text-xs font-semibold uppercase tracking-wider text-warm-gray mb-8">
          {{ $t('rie.partners.label') }}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-6">
          <div
            v-for="n in 4"
            :key="n"
            class="w-40 h-16 rounded-md border-2 border-dashed border-warm-border bg-warm-bg flex items-center justify-center text-xs font-semibold text-warm-gray"
          >
            {{ $t('rie.partners.placeholder') }}
          </div>
        </div>
      </div>
    </section>

    <!-- HOW -->
    <section class="py-20 lg:py-28 bg-warm-bg">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="mb-14 max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('rie.how.eyebrow') }}</p>
          <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-6">
            {{ $t('rie.how.title') }}
          </h2>
          <p class="text-lg text-warm-ink/70 leading-relaxed">
            {{ $t('rie.how.body') }}
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div
            v-for="b in howBlocks"
            :key="b"
            class="p-6 bg-white rounded-2xl border border-warm-border shadow-card"
          >
            <h3 class="font-display text-lg text-warm-ink font-bold mb-2">{{ $t(`rie.how.blocks.${b}.title`) }}</h3>
            <p class="text-sm text-warm-ink/70 leading-relaxed">{{ $t(`rie.how.blocks.${b}.body`) }}</p>
          </div>
        </div>
        <blockquote class="max-w-3xl mx-auto p-8 bg-white rounded-2xl border-l-4 border-navy-500 shadow-card">
          <p class="text-lg lg:text-xl text-warm-ink font-display leading-snug mb-4">{{ $t('rie.how.quote.body') }}</p>
          <footer class="text-sm text-warm-ink/60 italic">{{ $t('rie.how.quote.caption') }}</footer>
        </blockquote>
      </div>
    </section>

    <!-- CHOICE -->
    <section class="py-20 lg:py-28 bg-warm-ink text-white">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 class="font-display text-3xl lg:text-4xl text-white font-bold leading-tight mb-8">
          {{ $t('rie.choice.title') }}
        </h2>
        <div class="space-y-5 text-lg text-white/80 leading-relaxed mb-12">
          <p>{{ $t('rie.choice.body1') }}</p>
          <p>{{ $t('rie.choice.body2') }}</p>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="b in choiceBlocks"
            :key="b"
            class="p-6 bg-white/5 rounded-2xl border border-white/10"
          >
            <h3 class="font-display text-lg text-white font-bold mb-2">{{ $t(`rie.choice.blocks.${b}.title`) }}</h3>
            <p class="text-sm text-white/75 leading-relaxed">{{ $t(`rie.choice.blocks.${b}.body`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- BENEFITS -->
    <section class="py-20 lg:py-28">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-14 max-w-3xl">
          {{ $t('rie.benefits.title') }}
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(b, i) in benefitItems"
            :key="b"
            class="p-8 bg-white rounded-2xl border border-warm-border shadow-card"
          >
            <div class="flex items-center justify-center w-11 h-11 rounded-full bg-navy-500 text-white font-display font-bold text-lg mb-5">{{ i + 1 }}</div>
            <h3 class="font-display text-xl text-warm-ink font-bold mb-3">{{ $t(`rie.benefits.items.${b}.title`) }}</h3>
            <p class="text-warm-ink/70 leading-relaxed">{{ $t(`rie.benefits.items.${b}.body`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SCREENSHOTS -->
    <section id="screenshots" class="py-20 lg:py-28 bg-warm-bg scroll-mt-24">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="mb-14 max-w-3xl">
          <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-6">
            {{ $t('rie.screenshots.title') }}
          </h2>
          <p class="text-lg text-warm-ink/70 leading-relaxed">
            {{ $t('rie.screenshots.intro') }}
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="s in screenshotItems" :key="s" class="flex flex-col">
            <div class="aspect-[4/3] rounded-xl border-2 border-dashed border-warm-border bg-white flex items-center justify-center p-6 mb-4">
              <p class="text-xs font-semibold uppercase tracking-wider text-warm-gray text-center">{{ $t(`rie.screenshots.items.${s}.placeholder`) }}</p>
            </div>
            <h3 class="font-display text-lg text-warm-ink font-bold mb-2">{{ $t(`rie.screenshots.items.${s}.title`) }}</h3>
            <p class="text-sm text-warm-ink/70 leading-relaxed">{{ $t(`rie.screenshots.items.${s}.body`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- EFFORT -->
    <section class="py-20 lg:py-28">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="mb-14 max-w-3xl">
          <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-6">
            {{ $t('rie.effort.title') }}
          </h2>
          <p class="text-lg text-warm-ink/70 leading-relaxed">
            {{ $t('rie.effort.intro') }}
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div
            v-for="(s, i) in effortSteps"
            :key="s"
            class="p-6 bg-white rounded-2xl border border-warm-border shadow-card"
          >
            <div class="flex items-center justify-center w-11 h-11 rounded-full bg-warm-ink text-white font-display font-bold text-lg mb-4">{{ i + 1 }}</div>
            <h3 class="font-display text-lg text-warm-ink font-bold mb-2">{{ $t(`rie.effort.steps.${s}.title`) }}</h3>
            <p class="text-sm text-warm-ink/70 leading-relaxed">{{ $t(`rie.effort.steps.${s}.body`) }}</p>
          </div>
        </div>
        <div class="p-8 bg-warm-bg rounded-2xl border border-warm-border">
          <div class="mb-5">
            <h3 class="font-display text-xl text-warm-ink font-bold mb-1">{{ $t('rie.effort.asks.title') }}</h3>
            <p class="text-sm text-warm-ink/60 italic">{{ $t('rie.effort.asks.subtitle') }}</p>
          </div>
          <ul class="space-y-3">
            <li v-for="a in askItems" :key="a" class="flex items-start gap-3 text-warm-ink/80">
              <svg class="w-5 h-5 flex-shrink-0 text-navy-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>{{ $t(`rie.effort.asks.items.${a}`) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <section class="py-20 lg:py-28 bg-warm-bg">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="mb-14 max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('rie.pricing.eyebrow') }}</p>
          <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-6">
            {{ $t('rie.pricing.title') }}
          </h2>
          <p class="text-lg text-warm-ink/70 leading-relaxed">
            {{ $t('rie.pricing.intro') }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-10">
          <div
            v-for="row in pricingRows"
            :key="row"
            :class="[
              'p-8 bg-white rounded-2xl border shadow-card flex flex-col',
              row === 'medium' ? 'border-navy-500 ring-1 ring-navy-500' : 'border-warm-border'
            ]"
          >
            <div class="flex items-center gap-2 mb-4">
              <span class="text-sm font-semibold text-warm-ink">{{ $t(`rie.pricing.rows.${row}.size`) }}</span>
              <span
                v-if="row === 'medium'"
                class="inline-flex items-center px-2 py-0.5 rounded-full bg-navy-50 text-navy-700 text-xs font-semibold uppercase tracking-wider"
              >{{ $t('rie.pricing.rows.medium.badge') }}</span>
            </div>
            <p class="font-display text-4xl text-navy-500 font-bold mb-5">{{ $t(`rie.pricing.rows.${row}.price`) }}</p>
            <p class="text-warm-ink/70 leading-relaxed">{{ $t(`rie.pricing.rows.${row}.includes`) }}</p>
          </div>
        </div>

        <div class="max-w-3xl">
          <ul class="space-y-3 mb-6">
            <li v-for="e in ['round', 'site', 'update']" :key="e" class="flex items-start gap-3 text-warm-ink/80">
              <svg class="w-5 h-5 flex-shrink-0 text-navy-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l4 2" /><circle cx="12" cy="12" r="9" stroke-width="2" fill="none"/></svg>
              <span>{{ $t(`rie.pricing.extras.${e}`) }}</span>
            </li>
          </ul>
          <p class="text-sm text-warm-ink/80 font-semibold mb-6 pb-6 border-b border-warm-border">{{ $t('rie.pricing.extras.comparison') }}</p>
          <p class="text-xs text-warm-gray leading-relaxed">{{ $t('rie.pricing.footnote') }}</p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 lg:py-28">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('rie.faq.eyebrow') }}</p>
        <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-12">
          {{ $t('rie.faq.title') }}
        </h2>
        <div class="space-y-8">
          <div v-for="item in faqItems" :key="item" class="border-b border-warm-border pb-8 last:border-b-0">
            <h3 class="font-display text-xl lg:text-2xl text-warm-ink font-bold mb-3">{{ $t(`rie.faq.items.${item}.q`) }}</h3>
            <p class="text-base lg:text-lg text-warm-ink/75 leading-relaxed">{{ $t(`rie.faq.items.${item}.a`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="cta" class="py-24 lg:py-32 bg-warm-bg scroll-mt-24">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        <div class="text-center mb-12">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('rie.cta.eyebrow') }}</p>
          <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-4">
            {{ $t('rie.cta.title') }}
          </h2>
          <p class="text-lg text-warm-ink/70 leading-relaxed mb-3">
            {{ $t('rie.cta.body') }}
          </p>
          <p class="text-sm text-warm-ink/60">{{ $t('rie.cta.phone') }}</p>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          @submit.prevent="onSubmit"
          class="grid sm:grid-cols-2 gap-4 p-8 bg-white rounded-2xl shadow-card border border-warm-border"
        >
          <input type="hidden" name="access_key" value="5a88dd82-d433-4aed-aff0-7edd637ce315" />
          <input type="hidden" name="subject" value="Helpr.ai · RI&E aanvraag" />
          <input type="hidden" name="from_name" value="Helpr.ai website" />
          <input type="hidden" name="request_type" value="rie_signup" />
          <input type="checkbox" name="botcheck" class="hidden" tabindex="-1" autocomplete="off" />

          <div class="sm:col-span-2">
            <label for="rie-company" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('rie.cta.form.companyLabel') }}</label>
            <input
              id="rie-company"
              v-model="form.company"
              name="company"
              type="text"
              required
              :placeholder="$t('rie.cta.form.companyPlaceholder')"
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            />
          </div>
          <div>
            <label for="rie-name" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('rie.cta.form.nameLabel') }}</label>
            <input
              id="rie-name"
              v-model="form.name"
              name="name"
              type="text"
              required
              :placeholder="$t('rie.cta.form.namePlaceholder')"
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            />
          </div>
          <div>
            <label for="rie-email" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('rie.cta.form.emailLabel') }}</label>
            <input
              id="rie-email"
              v-model="form.email"
              name="email"
              type="email"
              required
              :placeholder="$t('rie.cta.form.emailPlaceholder')"
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            />
          </div>
          <div class="sm:col-span-2">
            <label for="rie-size" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('rie.cta.form.sizeLabel') }}</label>
            <select
              id="rie-size"
              v-model="form.size"
              name="organisation_size"
              required
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            >
              <option value="small">{{ $t('rie.cta.form.sizeOptionSmall') }}</option>
              <option value="medium">{{ $t('rie.cta.form.sizeOptionMedium') }}</option>
              <option value="large">{{ $t('rie.cta.form.sizeOptionLarge') }}</option>
              <option value="other">{{ $t('rie.cta.form.sizeOptionOther') }}</option>
            </select>
          </div>
          <div class="sm:col-span-2">
            <label for="rie-message" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('rie.cta.form.messageLabel') }}</label>
            <textarea
              id="rie-message"
              v-model="form.message"
              name="message"
              rows="3"
              :placeholder="$t('rie.cta.form.messagePlaceholder')"
              class="w-full px-4 py-3 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors resize-none"
            ></textarea>
          </div>
          <div class="sm:col-span-2">
            <button
              type="submit"
              :disabled="submitting || submitted"
              class="w-full min-h-[3rem] py-3 rounded-full bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors disabled:opacity-60"
            >
              <span v-if="submitting">{{ $t('rie.cta.form.submitting') }}</span>
              <span v-else-if="submitted">{{ $t('rie.cta.form.submitted') }}</span>
              <span v-else>{{ $t('rie.cta.form.submit') }}</span>
            </button>
          </div>
          <p v-if="submitError" class="sm:col-span-2 text-sm text-red-600 text-center">{{ $t('rie.cta.form.error') }}</p>
          <p v-else class="sm:col-span-2 text-xs text-warm-gray text-center">{{ $t('rie.cta.form.disclaimer') }}</p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const { t } = useI18n({ useScope: 'global' })

const howBlocks = ['tailored', 'right', 'language'] as const
const choiceBlocks = ['built', 'done'] as const
const benefitItems = ['complete', 'plan', 'reviewed'] as const
const screenshotItems = ['interview', 'inventory', 'plan'] as const
const effortSteps = ['intake', 'interviews', 'round'] as const
const askItems = ['call', 'participants', 'duration', 'docs'] as const
const pricingRows = ['small', 'medium', 'large'] as const
const faqItems = ['responsible', 'privacy', 'language', 'time', 'who', 'data', 'multisite'] as const

const faqJsonLd = computed(() => JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(k => ({
    '@type': 'Question',
    name: t(`rie.faq.items.${k}.q`),
    acceptedAnswer: { '@type': 'Answer', text: t(`rie.faq.items.${k}.a`) }
  }))
}))

useHead(() => ({
  title: t('rie.meta.title'),
  meta: [
    { name: 'description', content: t('rie.meta.description') }
  ],
  script: [
    { type: 'application/ld+json', innerHTML: faqJsonLd.value }
  ]
}))

const form = ref({ name: '', email: '', company: '', size: 'medium', message: '' })
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
