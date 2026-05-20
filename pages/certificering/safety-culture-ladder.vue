<template>
  <div>
    <!-- HERO -->
    <section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-br from-navy-50 via-white to-warm-bg opacity-60 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div class="lg:col-span-7">
            <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('scl.eyebrow') }}</p>
            <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl text-warm-ink font-bold leading-[1.05] mb-6">
              <i18n-t keypath="scl.title" tag="span">
                <template #price><span class="text-navy-500">{{ $t('scl.price') }}</span></template>
              </i18n-t>
            </h1>
            <p class="text-xl lg:text-2xl text-warm-ink/80 font-semibold leading-snug mb-6">
              {{ $t('scl.subtitle') }}
            </p>
            <p class="text-base lg:text-lg text-warm-ink/70 leading-relaxed mb-10">
              <i18n-t keypath="scl.intro" tag="span">
                <template #deadline>
                  <a
                    href="https://gc-veiligheid.nl/actueel/item/naar-trede-3-safety-culture-ladder-per-1-juli-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-semibold text-warm-ink underline decoration-navy-500/40 hover:decoration-navy-500 underline-offset-2"
                  >{{ $t('scl.deadline') }}</a>
                </template>
                <template #oldPrice><span class="font-semibold text-warm-ink">{{ $t('scl.oldPrice') }}</span></template>
              </i18n-t>
            </p>
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#cta"
                class="inline-flex min-h-[3rem] py-3 items-center justify-center rounded-full px-7 bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors shadow-card"
              >
                {{ $t('scl.ctaPrimary') }}
                <svg class="ml-2 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <span class="text-sm font-semibold text-warm-ink/70">{{ $t('scl.today') }}</span>
            </div>
          </div>
          <div class="lg:col-span-5">
            <img
              src="~/assets/images/scl.png"
              :alt="$t('scl.photoAlt')"
              class="w-full h-auto rounded-2xl shadow-card border border-warm-border"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- DE DRUK -->
    <section class="py-20 lg:py-28 bg-warm-bg">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('scl.pain.eyebrow') }}</p>
        <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-8">
          {{ $t('scl.pain.title') }}
        </h2>
        <div class="space-y-5 text-lg text-warm-ink/80 leading-relaxed">
          <p>{{ $t('scl.pain.body1') }}</p>
          <p>{{ $t('scl.pain.body2') }}</p>
        </div>
      </div>
    </section>

    <!-- WAAROM €499 -->
    <section class="py-20 lg:py-28 bg-warm-ink text-white">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('scl.why.eyebrow') }}</p>
        <h2 class="font-display text-3xl lg:text-4xl text-white font-bold leading-tight mb-8">
          {{ $t('scl.why.title') }}
        </h2>
        <p class="text-lg lg:text-xl text-white/80 leading-relaxed">
          {{ $t('scl.why.body') }}
        </p>
      </div>
    </section>

    <!-- VOLLEDIG ONTZORGD -->
    <section class="py-20 lg:py-28">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('scl.support.eyebrow') }}</p>
        <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-8">
          {{ $t('scl.support.title') }}
        </h2>
        <p class="text-lg lg:text-xl text-warm-ink/80 leading-relaxed">
          {{ $t('scl.support.body') }}
        </p>
      </div>
    </section>

    <!-- HOE HET WERKT -->
    <section class="py-20 lg:py-28">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="mb-14 max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('scl.how.eyebrow') }}</p>
          <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight">
            {{ $t('scl.how.title') }}
          </h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, i) in howSteps" :key="step">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-warm-ink text-white font-display font-bold text-xl mb-4">{{ i + 1 }}</div>
            <h3 class="font-display text-xl text-warm-ink font-bold mb-2">{{ $t(`scl.how.steps.${step}.title`) }}</h3>
            <p class="text-warm-ink/70 leading-relaxed">{{ $t(`scl.how.steps.${step}.body`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TREDEN -->
    <section class="py-20 lg:py-28 bg-warm-bg">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="mb-14 max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('scl.levels.eyebrow') }}</p>
          <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-6">
            {{ $t('scl.levels.title') }}
          </h2>
          <p class="text-lg text-warm-ink/70 leading-relaxed">
            {{ $t('scl.levels.intro') }}
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="lvl in ['level3', 'level4', 'level5']"
            :key="lvl"
            :class="[
              'p-8 bg-white rounded-2xl border shadow-card flex flex-col',
              lvl === 'level3' ? 'border-navy-500 ring-1 ring-navy-500' : 'border-warm-border'
            ]"
          >
            <span
              :class="[
                'inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5',
                lvl === 'level3' ? 'bg-navy-50 text-navy-700' : 'bg-warm-bg text-warm-gray'
              ]"
            >
              {{ $t(`scl.levels.${lvl}.tag`) }}
            </span>
            <h3 class="font-display text-2xl text-warm-ink font-bold mb-3">{{ $t(`scl.levels.${lvl}.title`) }}</h3>
            <p class="text-warm-ink/70 leading-relaxed">{{ $t(`scl.levels.${lvl}.body`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- WAT JE KRIJGT -->
    <section class="py-20 lg:py-28">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-10">
          {{ $t('scl.deliverables.title') }}
        </h2>
        <ul class="space-y-5">
          <li
            v-for="item in deliverables"
            :key="item"
            class="flex items-start gap-4"
          >
            <svg viewBox="0 0 9 5" fill="currentColor" class="flex-shrink-0 w-7 h-auto text-navy-500 mt-2" aria-hidden="true">
              <path d="M0 0 L6 0 L9 2.5 L6 5 L0 5 Z" />
            </svg>
            <span class="text-lg text-warm-ink/80 leading-relaxed">{{ $t(`scl.deliverables.items.${item}`) }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- GUARANTEE -->
    <section class="py-16 lg:py-20 bg-navy-500 text-white">
      <div class="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 class="font-display text-2xl lg:text-3xl text-white font-bold leading-tight mb-3">
          {{ $t('scl.guarantee.title') }}
        </h2>
        <p class="text-lg text-white/85 leading-relaxed">
          {{ $t('scl.guarantee.body') }}
        </p>
      </div>
    </section>

    <!-- CTA FORM -->
    <section id="cta" class="py-24 lg:py-32 bg-warm-bg scroll-mt-24">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        <div class="text-center mb-12">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('scl.cta.eyebrow') }}</p>
          <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-4">
            {{ $t('scl.cta.title') }}
          </h2>
          <p class="text-lg text-warm-ink/70 leading-relaxed">
            {{ $t('scl.cta.subtitle') }}
          </p>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          @submit.prevent="onSubmit"
          class="grid sm:grid-cols-2 gap-4 p-8 bg-white rounded-2xl shadow-card border border-warm-border"
        >
          <input type="hidden" name="access_key" value="5a88dd82-d433-4aed-aff0-7edd637ce315" />
          <input type="hidden" name="subject" value="Helpr.ai · SCL Original aanmelding" />
          <input type="hidden" name="from_name" value="Helpr.ai website" />
          <input type="hidden" name="request_type" value="scl_signup" />
          <input type="checkbox" name="botcheck" class="hidden" tabindex="-1" autocomplete="off" />

          <div class="sm:col-span-2">
            <label for="scl-company" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('scl.cta.form.companyLabel') }}</label>
            <input
              id="scl-company"
              v-model="form.company"
              name="company"
              type="text"
              required
              :placeholder="$t('scl.cta.form.companyPlaceholder')"
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            />
          </div>
          <div>
            <label for="scl-name" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('scl.cta.form.nameLabel') }}</label>
            <input
              id="scl-name"
              v-model="form.name"
              name="name"
              type="text"
              required
              :placeholder="$t('scl.cta.form.namePlaceholder')"
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            />
          </div>
          <div>
            <label for="scl-email" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('scl.cta.form.emailLabel') }}</label>
            <input
              id="scl-email"
              v-model="form.email"
              name="email"
              type="email"
              required
              :placeholder="$t('scl.cta.form.emailPlaceholder')"
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            />
          </div>
          <div class="sm:col-span-2">
            <label for="scl-level" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('scl.cta.form.levelLabel') }}</label>
            <select
              id="scl-level"
              v-model="form.targetLevel"
              name="target_level"
              required
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            >
              <option value="3">{{ $t('scl.cta.form.levelOption3') }}</option>
              <option value="4">{{ $t('scl.cta.form.levelOption4') }}</option>
              <option value="5">{{ $t('scl.cta.form.levelOption5') }}</option>
            </select>
          </div>
          <div class="sm:col-span-2">
            <label for="scl-message" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('scl.cta.form.messageLabel') }}</label>
            <textarea
              id="scl-message"
              v-model="form.message"
              name="message"
              rows="3"
              :placeholder="$t('scl.cta.form.messagePlaceholder')"
              class="w-full px-4 py-3 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors resize-none"
            ></textarea>
          </div>
          <div class="sm:col-span-2">
            <button
              type="submit"
              :disabled="submitting || submitted"
              class="w-full min-h-[3rem] py-3 rounded-full bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors disabled:opacity-60"
            >
              <span v-if="submitting">{{ $t('scl.cta.form.submitting') }}</span>
              <span v-else-if="submitted">{{ $t('scl.cta.form.submitted') }}</span>
              <span v-else>{{ $t('scl.cta.form.submit') }}</span>
            </button>
          </div>
          <p v-if="submitError" class="sm:col-span-2 text-sm text-red-600 text-center">{{ $t('scl.cta.form.error') }}</p>
          <p v-else class="sm:col-span-2 text-xs text-warm-gray text-center">{{ $t('scl.cta.form.disclaimer') }}</p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { t } = useI18n()

useHead(() => ({
  title: 'SCL-certificering voor ' + t('scl.price') + ' · Helpr.ai',
  meta: [
    { name: 'description', content: t('scl.intro', { oldPrice: t('scl.oldPrice') }) }
  ]
}))

const howSteps = ['request', 'interviews', 'dossier', 'audit'] as const
const deliverables = ['dossier', 'interviews', 'subthemes', 'growth', 'support'] as const

const form = ref({ name: '', email: '', company: '', targetLevel: '3', message: '' })
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
