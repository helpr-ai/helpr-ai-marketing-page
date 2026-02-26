<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
    <!-- Header/Nav -->
    <header class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between">
        <div class="flex items-center">
          <img
            src="~/assets/images/logos/helpr-ai-logo.svg"
            alt="Helpr.ai"
            class="h-8 w-auto"
          />
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
          <NuxtLink :to="localePath('product')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('nav.product') }}</NuxtLink>
          <NuxtLink :to="localePath('consultants')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('consultants.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('organisaties')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('customers.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('prijzen')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('pricing.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('about')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('about.nav') }}</NuxtLink>
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
                  locale === loc.code ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                ]"
              >
                <span class="text-lg">{{ loc.flag }}</span>
                <span>{{ loc.name }}</span>
              </NuxtLink>
            </div>
          </div>

          <button class="hidden sm:inline-flex h-11 items-center rounded-xl px-5 text-gray-700 hover:bg-gray-100 transition-colors font-medium" @click="scrollTo('contact')">{{ $t('nav.contact') }}</button>
          <button class="h-11 items-center rounded-xl px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-medium" @click="scrollTo('demo')">{{ $t('nav.demo') }}</button>
        </div>

        <!-- Mobile Hamburger Menu -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            type="button"
          >
            <Bars3Icon v-if="!showMobileMenu" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div
        v-if="showMobileMenu"
        class="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40"
      >
        <div class="px-6 py-4 space-y-4">
          <!-- Mobile Navigation Links -->
          <div class="space-y-2">
            <NuxtLink :to="localePath('product')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('nav.product') }}</NuxtLink>
            <NuxtLink :to="localePath('consultants')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('consultants.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('organisaties')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('customers.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('prijzen')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('pricing.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('about')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('about.nav') }}</NuxtLink>
          </div>

          <!-- Mobile CTA Button -->
          <div class="pt-2 pb-4 border-b border-gray-100">
            <button
              @click="scrollTo('demo'); closeMobileMenu()"
              class="w-full h-11 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg font-medium"
            >
              {{ $t('nav.demo') }}
            </button>
          </div>

          <!-- Mobile Language Switcher -->
          <div>
            <div class="text-sm font-medium text-gray-500 mb-3">Language</div>
            <div class="flex gap-3">
              <NuxtLink
                v-for="loc in availableLocales"
                :key="loc.code"
                :to="switchLocalePath(loc.code)"
                @click="closeMobileMenu()"
                :class="[
                  'flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors',
                  locale === loc.code
                    ? 'bg-indigo-50 text-indigo-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
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

    <!-- Hero -->
    <section class="relative overflow-hidden pt-36 pb-20">
      <!-- Background decorations -->
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg class="absolute left-[50%] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="hero-pattern" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path d="m-1 0 1 1V0h-1z" stroke="none"></path>
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#hero-pattern)"></rect>
        </svg>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref="heroReveal.element"
            :class="[
              'max-w-2xl opacity-0',
              { 'animate-reveal-up': heroReveal.isVisible }
            ]"
          >
            <div class="mb-8">
              <div class="inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
                <SparklesIcon class="mr-2 h-4 w-4" />
                {{ $t('hero.badge') }}
              </div>
            </div>
            <h1 class="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]" v-html="$t('hero.title', { aiInterviews: '<span class=&quot;bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent&quot;>', aiInterviewsEnd: '</span>' })"></h1>
            <p class="mt-8 text-xl text-gray-600 leading-8 max-w-xl" v-html="$t('hero.description', { iso9001: '<a href=\'' + iso9001Path + '\' class=&quot;font-semibold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer&quot;>', iso9001End: '</a>', iso27001: '<a href=\'' + iso27001Path + '\' class=&quot;font-semibold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer&quot;>', iso27001End: '</a>', iso42001: '<a href=\'' + iso42001Path + '\' class=&quot;font-semibold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer&quot;>', iso42001End: '</a>' })"></p>
            <div class="mt-10 flex flex-col sm:flex-row gap-4">
              <button class="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-all duration-200 hover:scale-[1.02]" @click="scrollTo('demo')">
                {{ $t('hero.cta') }}
                <ArrowRightIcon class="ml-3 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button class="inline-flex items-center justify-center rounded-2xl border-2 border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 hover:border-indigo-300 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-all duration-200" @click="scrollTo('werking')">
                <PlayCircleIcon class="mr-3 h-5 w-5" />
                {{ $t('hero.ctaSecondary') }}
              </button>
            </div>
            <div class="mt-8 flex items-center gap-4 text-sm text-gray-600">
              <div class="flex items-center gap-2">
                <ShieldCheckIcon class="h-5 w-5 text-green-500" />
                <span class="font-medium" v-html="$t('hero.tagline', { iso9001: '<a href=\'' + iso9001Path + '\' class=&quot;text-indigo-600 hover:text-indigo-800 transition-colors&quot;>', iso9001End: '</a>', co2: '<a href=\'' + co2Path + '\' class=&quot;text-indigo-600 hover:text-indigo-800 transition-colors&quot;>', co2End: '</a>' })"></span>
              </div>
            </div>
          </div>

          <div class="relative lg:ml-auto">
            <!-- Floating background elements -->
            <div class="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div class="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

            <div class="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="flex gap-1.5">
                      <div class="w-3 h-3 rounded-full bg-red-400"></div>
                      <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div class="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <span class="text-sm font-medium text-gray-600">{{ $t('product.dashboardTitle') }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">{{ $t('common.live') }}</span>
                  </div>
                </div>
              </div>
              <div class="p-6 space-y-4">
                <div class="flex items-center gap-3 mb-4 flex-wrap">
                  <NuxtLink :to="localePath('product')" class="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 hover:bg-emerald-200 transition-colors cursor-pointer">{{ $t('common.iso9001') }}</NuxtLink>
                  <NuxtLink :to="localePath('product') + '#co2'" class="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 hover:bg-emerald-200 transition-colors cursor-pointer">CO<sub>2</sub>-Prestatieladder</NuxtLink>
                  <span class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">{{ $t('common.iso27001') }} (soon)</span>
                  <span class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">{{ $t('common.iso42001') }} (soon)</span>
                </div>

                <div class="space-y-3">
                  <div class="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-4">
                    <div class="flex items-center gap-3 mb-2">
                      <div class="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <ChatBubbleLeftRightIcon class="h-4 w-4 text-white" />
                      </div>
                      <div class="font-semibold text-blue-900">{{ $t('product.aiInterviews') }}</div>
                      <div class="ml-auto">
                        <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <p class="text-sm text-blue-700">{{ $t('product.aiInterviewsDesc') }}</p>
                  </div>

                  <div class="rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 p-4">
                    <div class="flex items-center gap-3 mb-2">
                      <div class="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <Square3Stack3DIcon class="h-4 w-4 text-white" />
                      </div>
                      <div class="font-semibold text-purple-900">{{ $t('product.structuring') }}</div>
                      <div class="ml-auto">
                        <CheckCircleIcon class="w-5 h-5 text-green-500" />
                      </div>
                    </div>
                    <p class="text-sm text-purple-700">{{ $t('product.structuringDesc') }}</p>
                  </div>

                  <div class="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-4">
                    <div class="flex items-center gap-3 mb-2">
                      <div class="flex-shrink-0 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                        <CloudArrowUpIcon class="h-4 w-4 text-white" />
                      </div>
                      <div class="font-semibold text-green-900">{{ $t('product.exportReady') }}</div>
                      <div class="ml-auto">
                        <CheckCircleIcon class="w-5 h-5 text-green-500" />
                      </div>
                    </div>
                    <p class="text-sm text-green-700">{{ $t('product.exportDesc') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tagline Section -->
    <section class="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900 relative overflow-hidden">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
      <div class="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref="taglineReveal.element"
          :class="[
            'max-w-4xl mx-auto opacity-0',
            { 'animate-reveal-scale': taglineReveal.isVisible }
          ]"
        >
          <!-- Icon -->
          <div class="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-8 shadow-2xl">
            <ChatBubbleLeftRightIcon class="h-10 w-10 text-white" />
          </div>

          <!-- Main tagline -->
          <h2 class="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            {{ $t('tagline.title') }}
          </h2>

          <!-- Supporting text -->
          <p class="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            {{ $t('tagline.subtitle') }}
          </p>

          <!-- Visual flow indicators -->
          <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div class="flex flex-col items-center space-y-4">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <ChatBubbleLeftRightIcon class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-lg font-semibold text-white">{{ $t('flowSteps.conversation.title') }}</h3>
              <p class="text-gray-400 text-center text-sm">{{ $t('flowSteps.conversation.description') }}</p>
            </div>

            <!-- Arrow -->
            <div class="hidden md:flex items-center justify-center">
              <ArrowRightIcon class="h-12 w-12 text-white drop-shadow-lg animate-slide-arrow" stroke-width="3" />
            </div>

            <div class="flex flex-col items-center space-y-4">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                <ShieldCheckIcon class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-lg font-semibold text-white">{{ $t('flowSteps.certification.title') }}</h3>
              <p class="text-gray-400 text-center text-sm">{{ $t('flowSteps.certification.description') }}</p>
            </div>
          </div>

          <!-- CTA -->
          <div class="mt-16">
            <button
              @click="scrollTo('demo')"
              class="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-5 text-lg font-semibold text-white shadow-2xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition-all duration-300 hover:scale-105"
            >
              {{ $t('tagline.cta') }}
              <ArrowRightIcon class="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Props -->
    <section id="waarde" class="py-24 bg-gray-50 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-20">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6" v-html="$t('value.title', { helpr: '<span class=&quot;bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold&quot;>', helprEnd: '</span>' })"></h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ $t('value.subtitle') }}
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <div
            ref="valueCard1Reveal.element"
            :class="[
              'group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-indigo-300 opacity-0',
              { 'animate-reveal-left': valueCard1Reveal.isVisible }
            ]"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative p-8">
              <div class="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <RocketLaunchIcon class="h-7 w-7 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {{ $t('value.card1.title') }}
              </h3>
              <p class="text-gray-600 leading-7">
                {{ $t('value.card1.description') }}
              </p>
            </div>
          </div>

          <div
            ref="valueCard2Reveal.element"
            :class="[
              'group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-indigo-300 opacity-0',
              { 'animate-reveal-up': valueCard2Reveal.isVisible }
            ]"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative p-8">
              <div class="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <CogIcon class="h-7 w-7 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                {{ $t('value.card2.title') }}
              </h3>
              <p class="text-gray-600 leading-7">
                {{ $t('value.card2.description') }}
              </p>
            </div>
          </div>

          <div
            ref="valueCard3Reveal.element"
            :class="[
              'group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-indigo-300 opacity-0',
              { 'animate-reveal-right': valueCard3Reveal.isVisible }
            ]"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative p-8">
              <div class="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <StarIcon class="h-7 w-7 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                {{ $t('value.card3.title') }}
              </h3>
              <p class="text-gray-600 leading-7">
                {{ $t('value.card3.description') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="mt-20 grid grid-cols-3 lg:grid-cols-3 gap-8 text-center">
          <div class="space-y-2">
            <div class="text-3xl font-bold text-indigo-600">{{ $t('value.stats.reduction') }}</div>
            <div class="text-sm text-gray-600 font-medium">{{ $t('value.stats.reductionLabel') }}</div>
          </div>
          <div class="space-y-2">
            <div class="text-3xl font-bold text-emerald-600">{{ $t('value.stats.integration') }}</div>
            <div class="text-sm text-gray-600 font-medium">{{ $t('value.stats.integrationLabel') }}</div>
          </div>
          <div class="space-y-2">
            <div class="text-3xl font-bold text-amber-600">{{ $t('value.stats.standards') }}</div>
            <div class="text-sm text-gray-600 font-medium">{{ $t('value.stats.standardsLabel') }}</div>
          </div>
        </div>

        <!-- Time Remark -->
        <div class="mt-8 text-center max-w-4xl mx-auto">
          <p class="text-sm text-gray-500 leading-relaxed" v-html="$t('value.timeRemark')"></p>
        </div>
      </div>
    </section>

    <!-- ElevenLabs Grant Section -->
    <section class="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
          <div class="mb-8">
            <span class="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 mb-6">
              <StarIcon class="mr-2 h-4 w-4" />
              {{ $t('grant.badge') }}
            </span>
          </div>

          <div class="flex items-center justify-center mb-8">
            <TrophyIcon class="h-32 w-32 text-yellow-500 mr-8" />
            <h2 class="text-3xl sm:text-4xl tracking-tight text-gray-600">
              {{ $t('grant.title') }}
            </h2>
          </div>

          <!-- ElevenLabs Grant Image -->
          <div class="flex justify-center">
            <a href="https://elevenlabs.io/text-to-speech">
              <img src="https://eleven-public-cdn.elevenlabs.io/payloadcms/pwsc4vchsqt-ElevenLabsGrants.webp" alt="Text to Speech" style="width:250px">
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section 1: Dragon -->
    <section class="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>
      <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl mb-8 shadow-2xl shadow-emerald-500/30">
          <SparklesIcon class="h-8 w-8 text-white" />
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
          {{ $t('quotes.dragon.title') }}
        </h2>
        <p class="text-xl text-emerald-100 leading-relaxed max-w-2xl mx-auto italic">
          "{{ $t('quotes.dragon.description') }}"
        </p>
      </div>
    </section>

    <!-- Voor wie -->
    <section id="voorwie" class="py-14 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-center">{{ $t('target.title') }}</h2>
        <div class="mt-10 grid md:grid-cols-2 gap-8">
          <!-- Consultants -->
          <div class="rounded-2xl border bg-white overflow-hidden">
            <div class="p-4 border-b flex items-center gap-2 text-lg font-semibold bg-indigo-50">
              <UsersIcon class="h-5 w-5 text-indigo-600"/>
              {{ $t('target.consultants.title') }}
            </div>
            <div class="p-6">
              <!-- Challenges -->
              <div class="mb-6">
                <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">{{ $t('target.consultants.challengesTitle') }}</h4>
                <div class="space-y-2">
                  <div v-for="(challenge, index) in tm('target.consultants.challenges')" :key="'c-challenge-'+index" class="flex items-start gap-2 text-gray-600">
                    <span class="text-red-400 mt-0.5">•</span>
                    <span>{{ rt(challenge) }}</span>
                  </div>
                </div>
              </div>
              <!-- Benefits -->
              <div class="mb-6">
                <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">{{ $t('target.consultants.benefitsTitle') }}</h4>
                <div class="space-y-2">
                  <div v-for="(benefit, index) in tm('target.consultants.benefits')" :key="'c-benefit-'+index" class="flex items-start gap-2 text-gray-700">
                    <CheckCircleIcon class="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/>
                    <span>{{ rt(benefit) }}</span>
                  </div>
                </div>
              </div>
              <!-- Closing -->
              <div class="pt-4 border-t">
                <p class="text-indigo-600 font-semibold">{{ $t('target.consultants.closing') }}</p>
              </div>
            </div>
          </div>
          <!-- Companies -->
          <div class="rounded-2xl border bg-white overflow-hidden">
            <div class="p-4 border-b flex items-center gap-2 text-lg font-semibold bg-emerald-50">
              <BuildingOffice2Icon class="h-5 w-5 text-emerald-600"/>
              {{ $t('target.companies.title') }}
            </div>
            <div class="p-6">
              <!-- Challenges -->
              <div class="mb-6">
                <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">{{ $t('target.companies.challengesTitle') }}</h4>
                <div class="space-y-2">
                  <div v-for="(challenge, index) in tm('target.companies.challenges')" :key="'o-challenge-'+index" class="flex items-start gap-2 text-gray-600">
                    <span class="text-red-400 mt-0.5">•</span>
                    <span>{{ rt(challenge) }}</span>
                  </div>
                </div>
              </div>
              <!-- Benefits -->
              <div class="mb-6">
                <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">{{ $t('target.companies.benefitsTitle') }}</h4>
                <div class="space-y-2">
                  <div v-for="(benefit, index) in tm('target.companies.benefits')" :key="'o-benefit-'+index" class="flex items-start gap-2 text-gray-700">
                    <CheckCircleIcon class="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/>
                    <span>{{ rt(benefit) }}</span>
                  </div>
                </div>
              </div>
              <!-- Closing -->
              <div class="pt-4 border-t">
                <p class="text-emerald-600 font-semibold">{{ $t('target.companies.closing') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Consultant Value Proposition -->
    <section class="py-24 bg-gradient-to-b from-indigo-50/30 to-purple-50/30 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-gradient-to-r from-blue-50/40 to-indigo-50/40"></div>
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl -z-10"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl -z-10"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center max-w-4xl mx-auto mb-20">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6" v-html="$t('consultantValue.title', { consultants: '<span class=&quot;bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold&quot;>', consultantsEnd: '</span>' })"></h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ $t('consultantValue.subtitle') }}
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-16">

          <!-- Quality Card -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <div class="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 text-white">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-2xl font-bold">{{ $t('consultantValue.quality.title') }}</h3>
                <AcademicCapIcon class="h-8 w-8 opacity-80" />
              </div>
              <p class="text-purple-100 leading-7">
                {{ $t('consultantValue.quality.description') }}
              </p>
            </div>
            <div class="p-8">
              <div class="space-y-4">
                <div
                  v-for="(benefit, index) in tm('consultantValue.quality.benefits')"
                  :key="index"
                  class="flex items-start gap-3"
                >
                  <CheckCircleIcon class="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700 text-sm leading-6">{{ rt(benefit) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Efficiency Card -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <div class="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-2xl font-bold">{{ $t('consultantValue.efficiency.title') }}</h3>
                <ScaleIcon class="h-8 w-8 opacity-80" />
              </div>
              <p class="text-blue-100 leading-7">
                {{ $t('consultantValue.efficiency.description') }}
              </p>
            </div>
            <div class="p-8">
              <div class="grid grid-cols-1 gap-6">
                <div class="text-center">
                  <div class="text-3xl font-bold text-indigo-600 mb-2">{{ $t('consultantValue.efficiency.stats.time') }}</div>
                  <div class="text-sm text-gray-600 font-medium">{{ $t('consultantValue.efficiency.stats.timeLabel') }}</div>
                </div>
              </div>
            </div>
          </div>


          <!-- Assurance Card -->
          <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <div class="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-white">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-2xl font-bold">{{ $t('consultantValue.assurance.title') }}</h3>
                <ShieldCheckIcon class="h-8 w-8 opacity-80" />
              </div>
              <p class="text-indigo-100 leading-7">
                {{ $t('consultantValue.assurance.description') }}
              </p>
            </div>
            <div class="p-8">
              <div class="space-y-4">
                <div
                  v-for="(point, index) in tm('consultantValue.assurance.points')"
                  :key="index"
                  class="flex items-start gap-3"
                >
                  <CheckCircleIcon class="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700 text-sm leading-6">{{ rt(point) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center">
          <button
            @click="scrollTo('demo')"
            class="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-all duration-200 hover:scale-[1.02]"
          >
            {{ $t('tagline.cta') }}
            <ArrowRightIcon class="ml-3 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>

    <!-- Quote Section 2: Comfort -->
    <section class="py-16 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 border-y border-amber-100">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div class="flex-shrink-0">
            <div class="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl shadow-amber-200">
              <svg class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
          </div>
          <div class="text-center md:text-left">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {{ $t('quotes.comfort.title') }}
            </h2>
            <p class="text-lg text-amber-800 leading-relaxed italic">
              "{{ $t('quotes.comfort.description') }}"
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Werking -->
    <section id="werking" class="py-24 bg-gradient-to-b from-white to-indigo-50/30 scroll-mt-24 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-50/20 to-purple-50/20"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center max-w-4xl mx-auto mb-20">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6" v-html="$t('working.title', { werkt: '<span class=&quot;bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold&quot;>', werktEnd: '</span>' })"></h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ $t('working.subtitle') }}
          </p>
        </div>

        <!-- Animated Process Flow -->
        <div class="relative">
          <!-- Connecting line -->
          <div class="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 rounded-full"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 rounded-full animate-pulse scale-y-150"></div>
          </div>

          <!-- Process Steps -->
          <div class="grid lg:grid-cols-3 gap-12 lg:gap-8">
            <!-- Step 1: Interview -->
            <div
              ref="workStep1Reveal.element"
              :class="[
                'group relative opacity-0',
                { 'animate-reveal-up': workStep1Reveal.isVisible }
              ]"
            >
              <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <!-- Animated header -->
                <div class="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white overflow-hidden">
                  <div class="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full animate-spin-slow"></div>
                  <div class="absolute -bottom-10 -left-10 w-24 h-24 bg-white/5 rounded-full animate-bounce-slow"></div>

                  <div class="relative">
                    <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur">
                      <ChatBubbleLeftRightIcon class="h-8 w-8 text-white" />
                    </div>
                    <div class="flex items-center gap-3 mb-2">
                      <span class="text-3xl font-bold">1</span>
                      <div class="h-px bg-white/30 flex-1"></div>
                    </div>
                    <h3 class="text-2xl font-bold">{{ $t('working.step1.title') }}</h3>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-8">
                  <p class="text-gray-600 leading-7 mb-6">
                    {{ $t('working.step1.description') }}
                  </p>

                  <!-- Animated demo -->
                  <div class="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <div class="space-y-3">
                      <div class="flex items-center gap-3">
                        <div class="w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                        <div class="text-sm text-gray-600">{{ $t('working.step1.demo.question') }}</div>
                      </div>
                      <div class="flex items-center gap-3">
                        <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                        <div class="text-sm text-gray-600">{{ $t('working.step1.demo.answer') }}</div>
                      </div>
                      <div class="flex items-center gap-3">
                        <div class="w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
                        <div class="text-sm text-gray-600">{{ $t('working.step1.demo.capture') }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 2: Structure -->
            <div
              ref="workStep2Reveal.element"
              :class="[
                'group relative lg:mt-12 opacity-0',
                { 'animate-reveal-up': workStep2Reveal.isVisible }
              ]"
            >
              <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <!-- Animated header -->
                <div class="relative bg-gradient-to-br from-purple-500 to-pink-600 p-8 text-white overflow-hidden">
                  <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-blob"></div>
                  <div class="absolute -bottom-5 -left-5 w-28 h-28 bg-white/10 rounded-full animate-float"></div>

                  <div class="relative">
                    <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur">
                      <SparklesIcon class="h-8 w-8 text-white" />
                    </div>
                    <div class="flex items-center gap-3 mb-2">
                      <span class="text-3xl font-bold">2</span>
                      <div class="h-px bg-white/30 flex-1"></div>
                    </div>
                    <h3 class="text-2xl font-bold">{{ $t('working.step2.title') }}</h3>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-8">
                  <p class="text-gray-600 leading-7 mb-6">
                    {{ $t('working.step2.description') }}
                  </p>

                  <!-- Animated demo -->
                  <div class="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <div class="space-y-2">
                      <div class="flex items-center justify-between">
                        <span class="text-xs text-gray-500">{{ $t('working.step2.categories.policy') }}</span>
                        <div class="w-20 bg-purple-200 h-2 rounded animate-pulse"></div>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-xs text-gray-500">{{ $t('working.step2.categories.risk') }}</span>
                        <div class="w-16 bg-pink-200 h-2 rounded animate-pulse animation-delay-200"></div>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-xs text-gray-500">{{ $t('working.step2.categories.controls') }}</span>
                        <div class="w-24 bg-indigo-200 h-2 rounded animate-pulse animation-delay-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 3: Export -->
            <div
              ref="workStep3Reveal.element"
              :class="[
                'group relative opacity-0',
                { 'animate-reveal-up': workStep3Reveal.isVisible }
              ]"
            >
              <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <!-- Animated header -->
                <div class="relative bg-gradient-to-br from-green-500 to-emerald-600 p-8 text-white overflow-hidden">
                  <div class="absolute -top-8 -right-8 w-36 h-36 bg-white/5 rounded-full animate-spin-reverse"></div>
                  <div class="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>

                  <div class="relative">
                    <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur">
                      <CloudArrowUpIcon class="h-8 w-8 text-white" />
                    </div>
                    <div class="flex items-center gap-3 mb-2">
                      <span class="text-3xl font-bold">3</span>
                      <div class="h-px bg-white/30 flex-1"></div>
                    </div>
                    <h3 class="text-2xl font-bold">{{ $t('working.step3.title') }}</h3>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-8">
                  <p class="text-gray-600 leading-7 mb-6">
                    {{ $t('working.step3.description') }}
                  </p>

                  <!-- Animated demo -->
                  <div class="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <div class="grid grid-cols-3 gap-2">
                      <div class="text-center">
                        <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-1 mx-auto">
                          <DocumentTextIcon class="h-4 w-4 text-green-600" />
                        </div>
                        <span class="text-xs text-gray-500">{{ $t('working.step3.platforms.sharepoint') }}</span>
                      </div>
                      <div class="text-center">
                        <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-1 mx-auto">
                          <DocumentTextIcon class="h-4 w-4 text-blue-600" />
                        </div>
                        <span class="text-xs text-gray-500">{{ $t('working.step3.platforms.confluence') }}</span>
                      </div>
                      <div class="text-center">
                        <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-1 mx-auto">
                          <DocumentTextIcon class="h-4 w-4 text-purple-600" />
                        </div>
                        <span class="text-xs text-gray-500">{{ $t('working.step3.platforms.custom') }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Features -->
        <div class="mt-24 grid md:grid-cols-2 gap-8">
          <div class="group bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <LockClosedIcon class="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('working.features.security.title') }}</h3>
                <p class="text-gray-600 leading-7">
                  {{ $t('working.features.security.description') }}
                </p>
              </div>
            </div>
          </div>

          <div class="group bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <BookOpenIcon class="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('working.features.templates.title') }}</h3>
                <p class="text-gray-600 leading-7">
                  {{ $t('working.features.templates.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Map Showcase -->
    <section class="py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-50/20 to-purple-50/20"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <div class="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 mb-6">
            <SparklesIcon class="mr-2 h-4 w-4" />
            {{ $t('processMap.badge') }}
          </div>
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6" v-html="$t('processMap.title', { processMap: '<span class=&quot;bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold&quot;>', processMapEnd: '</span>' })"></h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ $t('processMap.subtitle') }}
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Process Map Image -->
          <div
            ref="processMapLeftReveal.element"
            :class="[
              'group relative opacity-0',
              { 'animate-reveal-left': processMapLeftReveal.isVisible }
            ]"
          >
            <div class="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden p-4 group-hover:shadow-3xl transition-all duration-500">
              <img
                src="~/assets/images/process_map.png"
                :alt="$t('processMap.imageAlt')"
                class="w-full h-auto rounded-lg"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>

            <!-- Floating elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 blur-xl -z-10"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl -z-10"></div>
          </div>

          <!-- Content -->
          <div
            ref="processMapRightReveal.element"
            :class="[
              'opacity-0',
              { 'animate-reveal-right': processMapRightReveal.isVisible }
            ]"
          >
            <p class="text-lg text-gray-600 leading-8 mb-8">
              {{ $t('processMap.description') }}
            </p>

            <!-- Features List -->
            <div class="space-y-4">
              <div
                v-for="(feature, index) in tm('processMap.features')"
                :key="index"
                class="flex items-start gap-4"
              >
                <div class="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mt-1">
                  <CheckCircleIcon class="h-4 w-4 text-white" />
                </div>
                <span class="text-gray-700 leading-7">{{ rt(feature) }}</span>
              </div>
            </div>

            <!-- CTA -->
            <div class="mt-10">
              <button
                @click="scrollTo('demo')"
                class="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-all duration-200 hover:scale-[1.02]"
              >
                {{ $t('tagline.cta') }}
                <ArrowRightIcon class="ml-3 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section 3: Strategic Partner -->
    <section class="py-20 bg-white relative">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div class="relative grid lg:grid-cols-5 gap-8 items-center">
            <div class="lg:col-span-3">
              <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
                {{ $t('quotes.strategic.title') }}
              </h2>
              <p class="text-xl text-indigo-100 leading-relaxed italic">
                "{{ $t('quotes.strategic.description') }}"
              </p>
            </div>
            <div class="lg:col-span-2 flex justify-center lg:justify-end">
              <div class="relative">
                <div class="w-32 h-32 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center">
                  <RocketLaunchIcon class="h-16 w-16 text-white" />
                </div>
                <div class="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
                  <ArrowRightIcon class="h-4 w-4 text-amber-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Scope -->
    <section class="py-24 bg-white relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center max-w-4xl mx-auto mb-20">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6" v-html="$t('applicationScope.title', { concrete: '<span class=&quot;bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-bold&quot;>', concreteEnd: '</span>' })"></h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ $t('applicationScope.subtitle') }}
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-16">
          <!-- Current Standards -->
          <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-200 p-8">
            <div class="mb-6">
              <div class="flex items-center gap-5 mb-3">
                <div class="w-12 h-12 bg-emerald-500 rounded flex items-center justify-center flex-shrink-0">
                  <CheckCircleIcon class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-2xl font-bold text-gray-900">{{ $t('applicationScope.current.title') }}</h3>
              </div>
              <p class="text-gray-600 text-sm">{{ $t('applicationScope.current.description') }}</p>
            </div>

            <div class="space-y-4">
              <div
                v-for="(standard, index) in tm('applicationScope.current.standards')"
                :key="index"
                class="bg-white rounded-xl p-4 border border-emerald-100 hover:border-emerald-200 transition-colors"
              >
                <div class="font-semibold text-gray-900 mb-2">
                  <NuxtLink
                    v-if="getStandardLink(rt(standard.name))"
                    :to="getStandardLink(rt(standard.name))"
                    class="hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    {{ rt(standard.name) }}
                  </NuxtLink>
                  <span v-else>{{ rt(standard.name) }}</span>
                </div>
                <div class="text-sm text-gray-600 leading-6">{{ rt(standard.description) }}</div>
              </div>
            </div>
          </div>

          <!-- Upcoming Standards -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-200 p-8">
            <div class="mb-6">
              <div class="flex items-center gap-5 mb-3">
                <div class="w-12 h-12 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
                  <RocketLaunchIcon class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-2xl font-bold text-gray-900">{{ $t('applicationScope.upcoming.title') }}</h3>
              </div>
              <p class="text-gray-600 text-sm">{{ $t('applicationScope.upcoming.description') }}</p>
            </div>

            <div class="space-y-3">
              <div
                v-for="(standard, index) in tm('applicationScope.upcoming.standards')"
                :key="index"
                class="bg-white rounded-lg p-3 border border-blue-100"
              >
                <div class="font-semibold text-gray-900 text-sm">
                  <NuxtLink
                    v-if="getStandardLink(rt(standard.name))"
                    :to="getStandardLink(rt(standard.name))"
                    class="hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {{ rt(standard.name) }}
                  </NuxtLink>
                  <span v-else>{{ rt(standard.name) }}</span>
                </div>
                <div class="text-xs text-gray-600">{{ rt(standard.description) }}</div>
              </div>
            </div>
          </div>

          <!-- Custom Solutions -->
          <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl border border-purple-200 p-8">
            <div class="mb-6">
              <div class="flex items-center gap-5 mb-3">
                <div class="w-12 h-12 bg-purple-500 rounded flex items-center justify-center flex-shrink-0">
                  <CogIcon class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-2xl font-bold text-gray-900">{{ $t('applicationScope.custom.title') }}</h3>
              </div>
              <p class="text-gray-600 text-sm">{{ $t('applicationScope.custom.description') }}</p>
            </div>

            <div class="space-y-4 mb-6">
              <div
                v-for="(feature, index) in tm('applicationScope.custom.features')"
                :key="index"
                class="flex items-start gap-3"
              >
                <CheckCircleIcon class="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700 text-sm leading-6">{{ rt(feature) }}</span>
              </div>
            </div>

            <!-- Note about limitations -->
            <div class="bg-purple-100 rounded-lg p-4 border border-purple-200">
              <div class="flex items-start gap-3">
                <LightBulbIcon class="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <p class="text-purple-800 text-sm leading-6">
                  {{ $t('applicationScope.custom.note') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-12 text-center text-white">
          <h3 class="text-3xl font-bold mb-4">{{ $t('cta.title') }}</h3>
          <p class="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            {{ $t('cta.description') }}
          </p>
          <button
            @click="scrollTo('demo')"
            class="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600 transition-all duration-200 hover:scale-[1.02]"
          >
            {{ $t('cta.button') }}
            <ArrowRightIcon class="ml-3 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>

    <!-- Demo CTA -->
    <section id="demo" class="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden scroll-mt-24">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div class="px-8 py-12 sm:px-12 lg:px-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
            <div class="mx-auto max-w-3xl">
              <div class="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-6">
                <SparklesIcon class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-3xl sm:text-4xl font-bold mb-4">
                {{ $t('demo.title') }}
              </h3>
              <p class="text-xl text-indigo-100 leading-8">
                {{ $t('demo.subtitle') }}
              </p>
            </div>
          </div>

          <div class="px-8 py-12 sm:px-12 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-8">
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <PlayCircleIcon class="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">{{ $t('demo.benefits.walkthrough.title') }}</h4>
                    <p class="text-gray-600">{{ $t('demo.benefits.walkthrough.description') }}</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <DocumentTextIcon class="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">{{ $t('demo.benefits.examples.title') }}</h4>
                    <p class="text-gray-600">{{ $t('demo.benefits.examples.description') }}</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <LightBulbIcon class="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">{{ $t('demo.benefits.advice.title') }}</h4>
                    <p class="text-gray-600">{{ $t('demo.benefits.advice.description') }}</p>
                  </div>
                </div>
              </div>

              <div class="bg-gray-50 rounded-2xl p-6">
                <div class="flex items-center gap-3 text-sm text-gray-600">
                  <ShieldCheckIcon class="h-5 w-5 text-green-500" />
                  <span class="font-medium">{{ $t('demo.guarantee') }}</span>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-2xl p-8">
              <form action="https://api.web3forms.com/submit" method="POST" class="space-y-6">
                <input type="hidden" name="access_key" value="5a88dd82-d433-4aed-aff0-7edd637ce315">
                <input type="hidden" name="redirect" :value="successUrl">
                <input type="hidden" name="subject" value="Nieuw demo verzoek - Helpr.ai">
                <input type="hidden" name="from_name" value="Helpr.ai Marketing Page">
                <div>
                  <label for="demo-name" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('demo.form.name') }} *</label>
                  <input
                    id="demo-name"
                    name="name"
                    type="text"
                    required
                    :placeholder="$t('demo.form.namePlaceholder')"
                    class="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-0 transition-colors"
                  />
                </div>

                <div>
                  <label for="demo-email" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('demo.form.email') }} *</label>
                  <input
                    id="demo-email"
                    name="email"
                    required
                    type="email"
                    :placeholder="$t('demo.form.emailPlaceholder')"
                    class="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-0 transition-colors"
                  />
                </div>

                <div>
                  <label for="demo-company" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('demo.form.company') }}</label>
                  <input
                    id="demo-company"
                    name="company"
                    type="text"
                    :placeholder="$t('demo.form.companyPlaceholder')"
                    class="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-0 transition-colors"
                  />
                </div>

                <div>
                  <label for="demo-note" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('demo.form.questions') }}</label>
                  <textarea
                    id="demo-note"
                    name="message"
                    :placeholder="$t('demo.form.questionsPlaceholder')"
                    rows="4"
                    class="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-0 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all duration-200 hover:scale-[1.02] shadow-lg"
                >
                  {{ $t('demo.form.submit') }}
                </button>

                <p class="text-xs text-gray-500 text-center">
                  {{ $t('demo.form.privacy.text') }}
                  <a class="text-indigo-600 hover:underline" href="#">{{ $t('demo.form.privacy.link') }}</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-14 bg-white scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold tracking-tight">{{ $t('faq.title') }}</h2>
        </div>
        <div class="mt-10 grid md:grid-cols-2 gap-4">
          <div
            v-for="(faq, index) in tm('faq.questions')"
            :key="index"
            class="rounded-2xl border"
          >
            <div class="p-4 border-b flex items-center gap-2 text-lg font-semibold">
              <MagnifyingGlassPlusIcon class="h-5 w-5"/> {{ rt(faq.question) }}
            </div>
            <div class="p-4 text-slate-600">{{ rt(faq.answer) }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-14 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl border bg-white p-6 sm:p-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-2xl font-semibold tracking-tight">{{ $t('contact.title') }}</h3>
            <p class="mt-2 text-slate-600 max-w-prose">{{ $t('contact.subtitle') }}</p>
            <div class="mt-4 text-sm text-slate-700 space-y-1">
              <div class="flex items-center gap-2"><ShieldCheckIcon class="h-5 w-5"/> {{ $t('contact.partnership') }}</div>
              <div class="flex items-center gap-2"><DocumentTextIcon class="h-5 w-5"/> {{ $t('contact.onepager') }}</div>
            </div>
          </div>
          <form action="https://api.web3forms.com/submit" method="POST" class="grid gap-3">
            <input type="hidden" name="access_key" value="5a88dd82-d433-4aed-aff0-7edd637ce315">
            <input type="hidden" name="redirect" :value="successUrl">
            <input type="hidden" name="subject" value="Nieuw contactformulier bericht - Helpr.ai">
            <input type="hidden" name="from_name" value="Helpr.ai Marketing Page">
            <input name="name" type="text" required :placeholder="$t('contact.form.name')" class="h-11 rounded-xl border px-3" />
            <input name="email" required type="email" :placeholder="$t('contact.form.email')" class="h-11 rounded-xl border px-3" />
            <textarea name="message" :placeholder="$t('contact.form.message')" class="min-h-[96px] rounded-xl border px-3 py-2"></textarea>
            <button type="submit" class="h-11 rounded-2xl bg-slate-900 text-white hover:bg-slate-800">{{ $t('contact.form.submit') }}</button>
          </form>
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
          <a href="#" class="hover:text-slate-900">{{ $t('footer.privacy') }}</a>
          <a href="#" class="hover:text-slate-900">{{ $t('footer.security') }}</a>
          <a href="#" class="hover:text-slate-900 flex items-center gap-2">
            {{ $t('footer.status') }}
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useReveal } from '~/composables/useReveal'
import {
  ShieldCheckIcon,
  DocumentTextIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CloudArrowUpIcon,
  Square3Stack3DIcon,
  BuildingOffice2Icon,
  UsersIcon,
  BookOpenIcon,
  LockClosedIcon,
  MagnifyingGlassPlusIcon,
  PlayCircleIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  CogIcon,
  StarIcon,
  TrophyIcon,
  Bars3Icon,
  XMarkIcon,
  ScaleIcon,
  AcademicCapIcon,
} from '@heroicons/vue/24/outline'

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    const headerHeight = 96 // Approximate header height with py-6 padding
    const elementPosition = el.offsetTop - headerHeight
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

// Reveal animation setup
const { createRevealElement } = useReveal()
const heroReveal = createRevealElement()
const taglineReveal = createRevealElement()
const valueCard1Reveal = createRevealElement()
const valueCard2Reveal = createRevealElement()
const valueCard3Reveal = createRevealElement()
const workStep1Reveal = createRevealElement()
const workStep2Reveal = createRevealElement()
const workStep3Reveal = createRevealElement()
const processMapLeftReveal = createRevealElement()
const processMapRightReveal = createRevealElement()

// i18n setup
const { t, rt, locale, locales, tm } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

// Language flags mapping
const localeFlags: Record<string, string> = { nl: '🇳🇱', en: '🇬🇧' }
const currentLocaleFlag = computed(() => localeFlags[locale.value] || '🌐')
const availableLocales = computed(() =>
  (locales.value as Array<{ code: string; name: string }>).map(loc => ({
    ...loc,
    flag: localeFlags[loc.code] || '🌐'
  }))
)

const showLangDropdown = ref(false)
const showMobileMenu = ref(false)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}

// Computed paths for v-html usage (v-html cannot render Vue components)
const iso9001Path = computed(() => localePath('programs-iso9001'))
const iso27001Path = computed(() => localePath('programs-iso27001'))
const iso42001Path = computed(() => localePath('programs-iso42001'))
const co2Path = computed(() => localePath('programs-co2-prestatieladder'))

// Success URL for form redirects
const successUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}${localePath('success')}`
  }
  return localePath('success')
})

// Helper function to get link for standards
const getStandardLink = (standardName: string) => {
  const linkMap: Record<string, string> = {
    'ISO 27001': 'programs-iso27001',
    'ISO 42001': 'programs-iso42001',
    'ISO 9001': 'programs-iso9001',
    'CO₂-Prestatieladder': 'programs-co2-prestatieladder',
    'CO₂ Performance Ladder': 'programs-co2-prestatieladder'
  }
  const routeName = linkMap[standardName]
  return routeName ? localePath(routeName) : null
}

// Close dropdown and mobile menu when clicking outside
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const target = event.target as HTMLElement

    // Close language dropdown if clicking outside of language switcher
    if (!target.closest('.relative')) {
      showLangDropdown.value = false
    }

    // Close mobile menu if clicking outside of header
    if (!target.closest('header')) {
      showMobileMenu.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})

// Forms now use Web3forms - no client-side handlers needed

// Ensure page starts at top on mount
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
})
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-slide-arrow {
  animation: slide-arrow 3s ease-in-out infinite;
}

@keyframes slide-arrow {
  0%, 100% {
    transform: translateX(-8px);
  }
  50% {
    transform: translateX(8px);
  }
}
</style>

<style>
/* Global styles for scroll behavior */
html {
  scroll-padding-top: 6rem; /* Account for fixed header */
}

/* Ensure page starts at top on load */
body {
  scroll-behavior: smooth;
}
</style>
