<template>
  <div>
    <section class="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-br from-navy-50 via-white to-warm-bg opacity-60 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        <div class="text-center mb-12">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('sample.eyebrow') }}</p>
          <h1 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight mb-6">
            {{ $t('sample.title') }}
          </h1>
          <p class="text-lg text-warm-ink/70 leading-relaxed">
            {{ $t('sample.subtitle') }}
          </p>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          @submit.prevent="onSubmit"
          class="grid sm:grid-cols-2 gap-4 p-8 bg-white rounded-2xl shadow-card border border-warm-border"
        >
          <input type="hidden" name="access_key" value="5a88dd82-d433-4aed-aff0-7edd637ce315" />
          <input type="hidden" name="subject" value="Helpr.ai · voorbeeldrapport aangevraagd" />
          <input type="hidden" name="from_name" value="Helpr.ai website" />
          <input type="hidden" name="request_type" value="sample_report" />
          <input type="hidden" name="report_type" value="stakeholderanalyse" />
          <input type="checkbox" name="botcheck" class="hidden" tabindex="-1" autocomplete="off" />

          <div class="sm:col-span-2">
            <label for="sample-company" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('sample.form.companyLabel') }}</label>
            <input
              id="sample-company"
              v-model="form.company"
              name="company"
              type="text"
              required
              :placeholder="$t('sample.form.companyPlaceholder')"
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            />
          </div>
          <div>
            <label for="sample-name" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('sample.form.nameLabel') }}</label>
            <input
              id="sample-name"
              v-model="form.name"
              name="name"
              type="text"
              required
              :placeholder="$t('sample.form.namePlaceholder')"
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            />
          </div>
          <div>
            <label for="sample-email" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('sample.form.emailLabel') }}</label>
            <input
              id="sample-email"
              v-model="form.email"
              name="email"
              type="email"
              required
              :placeholder="$t('sample.form.emailPlaceholder')"
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            />
          </div>
          <div class="sm:col-span-2">
            <button
              type="submit"
              :disabled="submitting || submitted"
              class="w-full h-12 rounded-full bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors disabled:opacity-60"
            >
              <span v-if="submitting">{{ $t('sample.form.submitting') }}</span>
              <span v-else-if="submitted">{{ $t('sample.form.submitted') }}</span>
              <span v-else>{{ $t('sample.form.submit') }}</span>
            </button>
          </div>
          <p v-if="submitError" class="sm:col-span-2 text-sm text-red-600 text-center">{{ $t('sample.form.error') }}</p>
          <p v-else class="sm:col-span-2 text-xs text-warm-gray text-center">{{ $t('sample.form.disclaimer') }}</p>
        </form>

        <div class="text-center mt-10">
          <NuxtLink
            :to="localePath('index')"
            class="text-sm font-semibold text-warm-ink/60 hover:text-warm-ink transition-colors inline-flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            {{ $t('sample.back') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const localePath = useLocalePath()
const { t } = useI18n()

useHead(() => ({
  title: t('sample.title') + ' · Helpr.ai'
}))

const form = ref({ name: '', email: '', company: '' })
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
