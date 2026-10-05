<template>
  <div>
    <!-- HERO -->
    <section id="top" class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-br from-navy-50 via-white to-warm-bg opacity-60 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col gap-6">
        <p class="text-sm font-semibold uppercase tracking-wider text-navy-500">{{ $t('rie.hero.eyebrow') }}</p>
        <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl text-warm-ink font-bold leading-[1.04] max-w-4xl">
          {{ $t('rie.hero.title') }}
        </h1>
        <p class="text-xl text-warm-ink/75 leading-relaxed max-w-3xl">
          {{ $t('rie.hero.body') }}
        </p>
        <div class="flex flex-wrap items-center gap-3 mt-2">
          <a
            href="#cta"
            class="inline-flex min-h-[3rem] py-3 items-center justify-center rounded-full px-7 bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors shadow-card"
          >
            {{ $t('rie.hero.ctaPrimary') }}
          </a>
          <NuxtLink
            :to="localePath('index')"
            class="inline-flex min-h-[3rem] py-3 items-center justify-center rounded-full px-7 bg-white border border-warm-border text-warm-ink font-semibold hover:bg-warm-bg transition-colors"
          >
            {{ $t('rie.hero.ctaSecondary') }}
          </NuxtLink>
        </div>

        <ul class="mt-5 pt-6 border-t border-warm-border grid sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-3.5 text-sm font-semibold">
          <li v-for="b in ['b1', 'b2', 'b3', 'b4']" :key="b" class="flex items-center gap-2.5">
            <svg class="w-5 h-5 flex-shrink-0 text-navy-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></svg>
            <span>{{ $t(`rie.hero.bullets.${b}`) }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- BANNER -->
    <section class="pb-24 lg:pb-32">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="bg-navy-500 text-white rounded-2xl p-10">
          <p class="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            {{ $t('rie.banner') }}
          </p>
        </div>
      </div>
    </section>

    <!-- COMPARE -->
    <section class="py-24 lg:py-28 bg-white border-y border-warm-border">
      <div class="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col gap-11">
        <div class="max-w-3xl flex flex-col gap-4">
          <h2 class="font-display text-3xl lg:text-5xl text-warm-ink font-bold leading-tight">
            {{ $t('rie.compare.title') }}
          </h2>
          <p class="text-lg text-warm-ink/75 leading-relaxed">{{ $t('rie.compare.body') }}</p>
        </div>

        <div class="grid sm:grid-cols-3 gap-6">
          <div v-for="s in statKeys" :key="s" class="bg-warm-bg rounded-2xl p-7 flex flex-col gap-2">
            <span class="font-display text-5xl text-navy-500 font-bold leading-none tabular-nums">{{ $t(`rie.compare.${s}Value`) }}</span>
            <span class="text-warm-ink/80">{{ $t(`rie.compare.${s}Label`) }}</span>
          </div>
        </div>
        <p class="text-xs text-warm-gray -mt-6">{{ $t('rie.compare.source') }}</p>

        <div class="overflow-x-auto border border-warm-border rounded-2xl">
          <table class="w-full min-w-[640px] border-collapse text-base">
            <thead>
              <tr class="bg-warm-bg text-left">
                <th scope="col" class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-warm-gray w-[22%]"></th>
                <th scope="col" class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-warm-gray w-[36%]">{{ $t('rie.compare.colVragenlijst') }}</th>
                <th scope="col" class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-navy-500 w-[42%]">{{ $t('rie.compare.colHelpr') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in rowKeys" :key="row" class="border-t border-warm-border">
                <th scope="row" class="px-5 py-4 text-left font-bold text-warm-ink">{{ $t(`rie.compare.row${row}Label`) }}</th>
                <td class="px-5 py-4 text-warm-ink/70">{{ $t(`rie.compare.row${row}A`) }}</td>
                <td class="px-5 py-4 font-semibold text-warm-ink">{{ $t(`rie.compare.row${row}B`) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure class="bg-warm-bg rounded-2xl p-8 grid sm:grid-cols-2 gap-8 items-center">
          <div class="flex flex-col gap-3">
            <div class="text-xs font-bold uppercase tracking-wider text-navy-500">{{ $t('rie.compare.findingTag') }}</div>
            <blockquote class="font-display text-2xl text-warm-ink font-semibold leading-snug">{{ $t('rie.compare.findingQuote') }}</blockquote>
            <figcaption class="text-sm text-warm-gray">{{ $t('rie.compare.findingCaption') }}</figcaption>
          </div>
          <dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 text-sm">
            <dt class="text-warm-gray">{{ $t('rie.compare.metaRiskLabel') }}</dt>
            <dd class="text-warm-ink">{{ $t('rie.compare.metaRiskValue') }}</dd>
            <dt class="text-warm-gray">{{ $t('rie.compare.metaCauseLabel') }}</dt>
            <dd class="text-warm-ink">{{ $t('rie.compare.metaCauseValue') }}</dd>
            <dt class="text-warm-gray">{{ $t('rie.compare.metaMeasureLabel') }}</dt>
            <dd class="text-warm-ink">{{ $t('rie.compare.metaMeasureValue') }}</dd>
          </dl>
        </figure>
      </div>
    </section>

    <!-- REGIE -->
    <section class="py-24 lg:py-28">
      <div class="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col gap-10">
        <h2 class="font-display text-3xl lg:text-5xl text-warm-ink font-bold leading-tight max-w-3xl">
          {{ $t('rie.regie.title') }}
        </h2>
        <div class="grid sm:grid-cols-2 gap-6">
          <div class="bg-white border border-warm-border rounded-2xl p-7 flex flex-col gap-2.5">
            <div class="text-xs font-bold uppercase tracking-wider text-navy-500">{{ $t('rie.regie.scopeWhen') }}</div>
            <div class="font-display text-2xl text-warm-ink font-bold">{{ $t('rie.regie.scopeTitle') }}</div>
            <p class="text-warm-ink/75 leading-relaxed">{{ $t('rie.regie.scopeBody') }}</p>
          </div>
          <div class="bg-white border border-warm-border rounded-2xl p-7 flex flex-col gap-2.5">
            <div class="text-xs font-bold uppercase tracking-wider text-navy-500">{{ $t('rie.regie.verifyWhen') }}</div>
            <div class="font-display text-2xl text-warm-ink font-bold">{{ $t('rie.regie.verifyTitle') }}</div>
            <p class="text-warm-ink/75 leading-relaxed">{{ $t('rie.regie.verifyBody') }}</p>
          </div>
        </div>
        <p class="text-sm text-warm-ink/75">
          <strong class="text-warm-ink">{{ $t('rie.regie.expertsLead') }}</strong>
          {{ $t('rie.regie.expertsBody') }}
        </p>
      </div>
    </section>

    <!-- CTA FORM -->
    <section id="cta" class="py-24 lg:py-28 bg-navy-500 text-white scroll-mt-24">
      <div class="mx-auto max-w-6xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div class="flex flex-col gap-4">
          <h2 class="font-display text-3xl lg:text-5xl text-white font-bold leading-tight">
            {{ $t('rie.cta.title') }}
          </h2>
          <p class="text-lg text-white/85 leading-relaxed">{{ $t('rie.cta.body') }}</p>
          <ul class="flex flex-col gap-2.5 text-white/90 mt-2">
            <li v-for="b in ['b1','b2','b3']" :key="b" class="flex gap-3">
              <span class="font-bold flex-shrink-0">✓</span>
              <span>{{ $t(`rie.cta.${b}`) }}</span>
            </li>
          </ul>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          @submit.prevent="onSubmit"
          class="bg-white text-warm-ink rounded-2xl p-8 flex flex-col gap-4"
        >
          <input type="hidden" name="access_key" value="5a88dd82-d433-4aed-aff0-7edd637ce315" />
          <input type="hidden" name="subject" value="Helpr.ai · RI&E demo aanvraag" />
          <input type="hidden" name="from_name" value="Helpr.ai website" />
          <input type="hidden" name="request_type" value="rie_demo" />
          <input type="checkbox" name="botcheck" class="hidden" tabindex="-1" autocomplete="off" />

          <label class="flex flex-col gap-1.5 text-sm font-semibold">
            {{ $t('rie.cta.form.nameLabel') }}
            <input v-model="form.name" name="name" type="text" required class="font-normal px-3.5 py-3 border border-warm-border rounded-xl bg-white focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors" />
          </label>
          <label class="flex flex-col gap-1.5 text-sm font-semibold">
            {{ $t('rie.cta.form.orgLabel') }}
            <input v-model="form.organisation" name="organisation" type="text" required class="font-normal px-3.5 py-3 border border-warm-border rounded-xl bg-white focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors" />
          </label>
          <label class="flex flex-col gap-1.5 text-sm font-semibold">
            {{ $t('rie.cta.form.emailLabel') }}
            <input v-model="form.email" name="email" type="email" required class="font-normal px-3.5 py-3 border border-warm-border rounded-xl bg-white focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors" />
          </label>
          <label class="flex flex-col gap-1.5 text-sm font-semibold">
            {{ $t('rie.cta.form.roleLabel') }}
            <select v-model="form.role" name="role" class="font-normal px-3.5 py-3 border border-warm-border rounded-xl bg-white focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors">
              <option value="kam">{{ $t('rie.cta.form.roleKam') }}</option>
              <option value="internal">{{ $t('rie.cta.form.roleInternal') }}</option>
              <option value="preventive">{{ $t('rie.cta.form.rolePreventive') }}</option>
            </select>
          </label>
          <button
            type="submit"
            :disabled="submitting || submitted"
            class="self-start inline-flex items-center justify-center rounded-full px-7 py-3.5 bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors disabled:opacity-60"
          >
            <span v-if="submitting">{{ $t('rie.cta.form.submitting') }}</span>
            <span v-else-if="submitted">{{ $t('rie.cta.form.submitted') }}</span>
            <span v-else>{{ $t('rie.cta.form.submit') }}</span>
          </button>
          <p v-if="submitError" class="text-sm text-red-600">{{ $t('rie.cta.form.error') }}</p>
          <p v-else class="text-sm text-warm-gray">{{ $t('rie.cta.form.disclaimer') }}</p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { t } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()

const statKeys = ['s1', 's2', 's3'] as const
const rowKeys = ['Who', 'Probe', 'Report', 'Round', 'Language'] as const

useHead(() => ({
  title: t('rie.meta.title'),
  meta: [
    { name: 'description', content: t('rie.meta.description') }
  ]
}))

const form = ref({ name: '', organisation: '', email: '', role: 'kam' })
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
