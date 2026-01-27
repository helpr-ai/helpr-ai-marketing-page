<template>
  <div class="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
    <!-- Header/Nav -->
    <header class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between">
        <div class="flex items-center">
          <NuxtLink :to="localePath('/')" class="flex items-center">
            <img
              src="~/assets/images/logos/helpr-ai-logo.svg"
              alt="Helpr.ai"
              class="h-8 w-auto"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
          <NuxtLink :to="localePath('/')" class="text-gray-700 hover:text-emerald-600 transition-colors">Home</NuxtLink>
          <NuxtLink :to="localePath('klanten')" class="text-gray-700 hover:text-emerald-600 transition-colors">{{ $t('customers.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('partners')" class="text-gray-700 hover:text-emerald-600 transition-colors">{{ $t('partners.nav') }}</NuxtLink>
        </nav>

        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center gap-4">
          <!-- Language Switcher -->
          <div class="relative">
            <button
              @click="showLangDropdown = !showLangDropdown"
              class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span class="text-xl">{{ currentLocaleFlag }}</span>
            </button>
            <div
              v-if="showLangDropdown"
              class="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 py-2 min-w-[160px] z-50"
            >
              <NuxtLink
                v-for="loc in availableLocales"
                :key="loc.code"
                :to="switchLocalePath(loc.code)"
                @click="showLangDropdown = false"
                :class="[
                  'w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors',
                  locale === loc.code ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700'
                ]"
              >
                <span class="text-lg">{{ loc.flag }}</span>
                <span>{{ loc.name }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Form Section -->
    <section class="pt-32 pb-20">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-12">
          <div class="mb-6">
            <span class="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
              <RocketLaunchIcon class="mr-2 h-4 w-4" />
              {{ $t('startForm.badge') }}
            </span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ $t('startForm.title') }}
          </h1>
          <p class="text-xl text-gray-600 leading-8 max-w-2xl mx-auto">
            {{ $t('startForm.subtitle') }}
          </p>
        </div>

        <!-- Form Card -->
        <div class="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          <div class="px-8 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <DocumentTextIcon class="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 class="text-xl font-bold">{{ $t('startForm.formTitle') }}</h2>
                <p class="text-emerald-100 text-sm">{{ $t('startForm.formSubtitle') }}</p>
              </div>
            </div>
          </div>

          <form action="https://api.web3forms.com/submit" method="POST" class="p-8 space-y-6">
            <input type="hidden" name="access_key" value="5a88dd82-d433-4aed-aff0-7edd637ce315">
            <input type="hidden" name="redirect" :value="successUrl">
            <input type="hidden" name="subject" value="Nieuw Start Traject verzoek - Helpr.ai">
            <input type="hidden" name="from_name" value="Helpr.ai Start Traject">

            <!-- Name -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('startForm.form.name') }} *</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                :placeholder="$t('startForm.form.namePlaceholder')"
                class="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:ring-0 transition-colors"
              />
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('startForm.form.email') }} *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                :placeholder="$t('startForm.form.emailPlaceholder')"
                class="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:ring-0 transition-colors"
              />
            </div>

            <!-- Phone -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('startForm.form.phone') }}</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                :placeholder="$t('startForm.form.phonePlaceholder')"
                class="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:ring-0 transition-colors"
              />
            </div>

            <!-- Company -->
            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('startForm.form.company') }} *</label>
              <input
                id="company"
                name="company"
                type="text"
                required
                :placeholder="$t('startForm.form.companyPlaceholder')"
                class="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:ring-0 transition-colors"
              />
            </div>

            <!-- Certification Type -->
            <div>
              <label for="certification" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('startForm.form.certification') }} *</label>
              <select
                id="certification"
                name="certification"
                required
                class="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-gray-900 focus:border-emerald-500 focus:ring-0 transition-colors bg-white"
              >
                <option value="" disabled selected>{{ $t('startForm.form.certificationPlaceholder') }}</option>
                <option value="ISO 9001">ISO 9001</option>
                <option value="ISO 27001">ISO 27001</option>
                <option value="ISO 14001">ISO 14001</option>
                <option value="CO2-Prestatieladder">{{ locale === 'nl' ? 'CO2-Prestatieladder' : 'CO2 Performance Ladder' }}</option>
                <option value="Anders">{{ locale === 'nl' ? 'Anders' : 'Other' }}</option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('startForm.form.message') }}</label>
              <textarea
                id="message"
                name="message"
                :placeholder="$t('startForm.form.messagePlaceholder')"
                rows="4"
                class="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:ring-0 transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full h-14 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              {{ $t('startForm.form.submit') }}
            </button>

            <!-- Privacy Note -->
            <p class="text-xs text-gray-500 text-center">
              {{ $t('startForm.form.privacy') }}
            </p>
          </form>
        </div>

        <!-- Benefits -->
        <div class="mt-12 grid sm:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ClockIcon class="h-6 w-6 text-emerald-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ $t('startForm.benefits.fast.title') }}</h3>
            <p class="text-sm text-gray-600">{{ $t('startForm.benefits.fast.description') }}</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <UsersIcon class="h-6 w-6 text-emerald-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ $t('startForm.benefits.partner.title') }}</h3>
            <p class="text-sm text-gray-600">{{ $t('startForm.benefits.partner.description') }}</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon class="h-6 w-6 text-emerald-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ $t('startForm.benefits.quality.title') }}</h3>
            <p class="text-sm text-gray-600">{{ $t('startForm.benefits.quality.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-10 border-t bg-white/60">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-center">
        <div class="text-sm text-slate-600">
          <div class="font-semibold text-slate-800">{{ $t('common.brand') }}</div>
          <div>{{ $t('footer.tagline') }}</div>
          <div class="mt-1">{{ $t('footer.copyright', { year: new Date().getFullYear().toString() }) }}</div>
        </div>
        <div class="flex justify-start md:justify-end gap-4 text-sm text-slate-600">
          <NuxtLink :to="localePath('/')" class="hover:text-slate-900">Home</NuxtLink>
          <NuxtLink :to="localePath('klanten')" class="hover:text-slate-900">{{ $t('customers.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('partners')" class="hover:text-slate-900">{{ $t('partners.nav') }}</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  RocketLaunchIcon,
  DocumentTextIcon,
  ClockIcon,
  UsersIcon,
  ShieldCheckIcon
} from '@heroicons/vue/24/outline'

// i18n setup
const { t, locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const localeFlags: Record<string, string> = { nl: '🇳🇱', en: '🇬🇧' }
const currentLocaleFlag = computed(() => localeFlags[locale.value] || '🌐')
const availableLocales = computed(() =>
  (locales.value as Array<{ code: string; name: string }>).map(loc => ({
    ...loc,
    flag: localeFlags[loc.code] || '🌐'
  }))
)

const showLangDropdown = ref(false)

// Success URL for form redirect
const successUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}${localePath('success')}`
  }
  return '/success'
})

// SEO
useHead({
  title: computed(() => locale.value === 'nl'
    ? 'Start traject | Helpr.AI'
    : 'Start project | Helpr.AI'),
  meta: [
    {
      name: 'description',
      content: computed(() => locale.value === 'nl'
        ? 'Start je certificeringstraject met Helpr.ai. Vul het formulier in en we koppelen je aan de juiste partner.'
        : 'Start your certification project with Helpr.ai. Fill in the form and we will connect you with the right partner.')
    }
  ]
})
</script>
