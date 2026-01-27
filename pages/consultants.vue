<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
    <!-- Header/Nav -->
    <header class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between">
        <div class="flex items-center">
          <NuxtLink :to="localePath('/')">
            <img
              src="~/assets/images/logos/helpr-ai-logo.svg"
              alt="Helpr.ai"
              class="h-8 w-auto"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
          <NuxtLink :to="localePath('product')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('nav.product') }}</NuxtLink>
          <NuxtLink :to="localePath('consultants')" class="text-indigo-600 font-semibold">{{ $t('consultants.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('klanten')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('customers.nav') }}</NuxtLink>
          <NuxtLink :to="localePath('partners')" class="text-gray-700 hover:text-indigo-600 transition-colors">{{ $t('partners.nav') }}</NuxtLink>
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

          <NuxtLink :to="localePath('/') + '#contact'" class="hidden sm:inline-flex h-11 items-center rounded-xl px-5 text-gray-700 hover:bg-gray-100 transition-colors font-medium">{{ $t('nav.contact') }}</NuxtLink>
          <button @click="scrollTo('cta')" class="h-11 flex items-center rounded-xl px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-medium">{{ $t('consultants.hero.cta') }}</button>
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
          <div class="space-y-2">
            <NuxtLink :to="localePath('product')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('nav.product') }}</NuxtLink>
            <NuxtLink :to="localePath('consultants')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-indigo-600 font-semibold bg-indigo-50 rounded-lg">{{ $t('consultants.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('klanten')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('customers.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('partners')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('partners.nav') }}</NuxtLink>
            <NuxtLink :to="localePath('about')" @click="closeMobileMenu()" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">{{ $t('about.nav') }}</NuxtLink>
          </div>

          <div class="pt-2 pb-4 border-b border-gray-100">
            <button
              @click="scrollTo('cta'); closeMobileMenu()"
              class="block w-full h-11 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg font-medium"
            >
              {{ $t('consultants.hero.cta') }}
            </button>
          </div>

          <div>
            <div class="text-sm font-medium text-gray-500 mb-3">Language</div>
            <div class="flex gap-3">
              <NuxtLink
                v-for="loc in availableLocales"
                :key="loc.code"
                :to="switchLocalePath(loc.code)"
                @click="showMobileMenu = false"
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

    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-36 pb-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
      <!-- Background decorations -->
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <svg class="absolute left-[50%] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-white/5 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="hero-pattern-consultants" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#hero-pattern-consultants)"></rect>
        </svg>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div
          ref="heroReveal.element"
          :class="[
            'text-center max-w-4xl mx-auto opacity-0',
            { 'animate-reveal-up': heroReveal.isVisible }
          ]"
        >
          <div class="mb-8">
            <div class="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-indigo-200 ring-1 ring-inset ring-white/20">
              <RocketLaunchIcon class="mr-2 h-4 w-4" />
              {{ $t('consultants.hero.badge') }}
            </div>
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            {{ $t('consultants.hero.titlePart1') }}
            <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{{ $t('consultants.hero.titleHighlight') }}</span>
            {{ $t('consultants.hero.titlePart2') }}
          </h1>
          <p class="mt-8 text-xl sm:text-2xl text-indigo-100 leading-relaxed max-w-3xl mx-auto">
            {{ $t('consultants.hero.description') }}
          </p>
          <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              @click="scrollTo('cta')"
              class="group inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-900 transition-all duration-200 hover:scale-[1.02]"
            >
              {{ $t('consultants.hero.cta') }}
              <ArrowRightIcon class="ml-3 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              @click="scrollTo('pillars')"
              class="inline-flex items-center justify-center rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 transition-all duration-200"
            >
              {{ $t('consultants.hero.ctaSecondary') }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Section - How Consultants Use the Platform -->
    <section id="product" class="py-24 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-16">
          <div class="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 mb-6">
            <CpuChipIcon class="mr-2 h-4 w-4" />
            {{ $t('consultants.product.badge') }}
          </div>
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ $t('consultants.product.title') }}
          </h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ $t('consultants.product.subtitle') }}
          </p>
        </div>

        <!-- How It Works Grid -->
        <div class="grid lg:grid-cols-3 gap-8 mb-16">
          <!-- Step 1: Invite -->
          <div
            ref="productStep1Reveal.element"
            :class="[
              'opacity-0',
              { 'animate-reveal-up': productStep1Reveal.isVisible }
            ]"
          >
            <div class="relative bg-white rounded-3xl shadow-xl border border-gray-200 p-8 h-full">
              <div class="absolute -top-4 left-8 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">1</div>
              <div class="pt-4">
                <div class="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                  <PaperAirplaneIcon class="h-7 w-7 text-indigo-600" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('consultants.product.step1.title') }}</h3>
                <p class="text-gray-600 leading-7">{{ $t('consultants.product.step1.description') }}</p>
              </div>
            </div>
          </div>

          <!-- Step 2: AI Interview -->
          <div
            ref="productStep2Reveal.element"
            :class="[
              'opacity-0 lg:mt-8',
              { 'animate-reveal-up': productStep2Reveal.isVisible }
            ]"
          >
            <div class="relative bg-white rounded-3xl shadow-xl border border-gray-200 p-8 h-full">
              <div class="absolute -top-4 left-8 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">2</div>
              <div class="pt-4">
                <div class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <MicrophoneIcon class="h-7 w-7 text-purple-600" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('consultants.product.step2.title') }}</h3>
                <p class="text-gray-600 leading-7">{{ $t('consultants.product.step2.description') }}</p>
              </div>
            </div>
          </div>

          <!-- Step 3: Review & Export -->
          <div
            ref="productStep3Reveal.element"
            :class="[
              'opacity-0',
              { 'animate-reveal-up': productStep3Reveal.isVisible }
            ]"
          >
            <div class="relative bg-white rounded-3xl shadow-xl border border-gray-200 p-8 h-full">
              <div class="absolute -top-4 left-8 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">3</div>
              <div class="pt-4">
                <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <DocumentCheckIcon class="h-7 w-7 text-emerald-600" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('consultants.product.step3.title') }}</h3>
                <p class="text-gray-600 leading-7">{{ $t('consultants.product.step3.description') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Features List -->
        <div
          ref="productFeaturesReveal.element"
          :class="[
            'bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12 opacity-0',
            { 'animate-reveal-scale': productFeaturesReveal.isVisible }
          ]"
        >
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(feature, index) in tm('consultants.product.features')" :key="index" class="flex items-start gap-3">
              <CheckCircleIcon class="h-6 w-6 text-indigo-600 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700 font-medium">{{ rt(feature) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Three Pillars Section -->
    <section id="pillars" class="py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-20">
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ $t('consultants.pillars.title') }}
          </h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ $t('consultants.pillars.subtitle') }}
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Pillar 1: Value Based Pricing -->
          <div
            ref="pillar1Reveal.element"
            :class="[
              'group opacity-0',
              { 'animate-reveal-up': pillar1Reveal.isVisible }
            ]"
          >
            <div class="h-full bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div class="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-white">
                <div class="flex items-center justify-between mb-4">
                  <div class="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur">
                    <CurrencyEuroIcon class="h-7 w-7 text-white" />
                  </div>
                  <span class="text-emerald-200 text-sm font-medium">01</span>
                </div>
                <h3 class="text-2xl font-bold mb-2">{{ $t('consultants.pillars.pillar1.title') }}</h3>
              </div>
              <div class="p-8">
                <p class="text-gray-600 leading-7">
                  {{ $t('consultants.pillars.pillar1.description') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Pillar 2: AI-driven Certification -->
          <div
            ref="pillar2Reveal.element"
            :class="[
              'group lg:mt-8 opacity-0',
              { 'animate-reveal-up': pillar2Reveal.isVisible }
            ]"
          >
            <div class="h-full bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div class="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-white">
                <div class="flex items-center justify-between mb-4">
                  <div class="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur">
                    <CpuChipIcon class="h-7 w-7 text-white" />
                  </div>
                  <span class="text-indigo-200 text-sm font-medium">02</span>
                </div>
                <h3 class="text-2xl font-bold mb-2">{{ $t('consultants.pillars.pillar2.title') }}</h3>
              </div>
              <div class="p-8">
                <p class="text-gray-600 leading-7">
                  {{ $t('consultants.pillars.pillar2.description') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Pillar 3: Consultant as Expert -->
          <div
            ref="pillar3Reveal.element"
            :class="[
              'group opacity-0',
              { 'animate-reveal-up': pillar3Reveal.isVisible }
            ]"
          >
            <div class="h-full bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div class="bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-white">
                <div class="flex items-center justify-between mb-4">
                  <div class="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur">
                    <AcademicCapIcon class="h-7 w-7 text-white" />
                  </div>
                  <span class="text-amber-200 text-sm font-medium">03</span>
                </div>
                <h3 class="text-2xl font-bold mb-2">{{ $t('consultants.pillars.pillar3.title') }}</h3>
              </div>
              <div class="p-8">
                <p class="text-gray-600 leading-7">
                  {{ $t('consultants.pillars.pillar3.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3-Day Program Timeline -->
    <section id="program" class="py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto mb-20">
          <div class="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 mb-6">
            <CalendarDaysIcon class="mr-2 h-4 w-4" />
            {{ $t('consultants.program.badge') }}
          </div>
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {{ $t('consultants.program.title') }}
          </h2>
          <p class="text-xl text-gray-600 leading-8">
            {{ $t('consultants.program.subtitle') }}
          </p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Connecting line (desktop) -->
          <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 -translate-y-1/2"></div>

          <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <!-- Day 1 -->
            <div
              ref="day1Reveal.element"
              :class="[
                'relative opacity-0',
                { 'animate-reveal-up': day1Reveal.isVisible }
              ]"
            >
              <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500">
                <!-- Day indicator -->
                <div class="relative bg-gradient-to-r from-indigo-600 to-indigo-700 p-6 text-white">
                  <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-indigo-600 flex items-center justify-center shadow-lg z-10">
                    <span class="text-indigo-600 font-bold text-lg">1</span>
                  </div>
                  <div class="text-center pb-4">
                    <span class="text-indigo-200 text-sm font-medium uppercase tracking-wide">{{ $t('consultants.program.dayLabel') }} 1</span>
                    <h3 class="text-xl font-bold mt-1">{{ $t('consultants.program.day1.title') }}</h3>
                  </div>
                </div>
                <div class="p-8 pt-12">
                  <p class="text-gray-600 leading-7 mb-6">
                    {{ $t('consultants.program.day1.description') }}
                  </p>
                  <ul class="space-y-3">
                    <li v-for="(item, index) in tm('consultants.program.day1.items')" :key="index" class="flex items-start gap-3">
                      <CheckCircleIcon class="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span class="text-gray-700 text-sm">{{ rt(item) }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Day 2 -->
            <div
              ref="day2Reveal.element"
              :class="[
                'relative lg:mt-16 opacity-0',
                { 'animate-reveal-up': day2Reveal.isVisible }
              ]"
            >
              <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div class="relative bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
                  <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-purple-600 flex items-center justify-center shadow-lg z-10">
                    <span class="text-purple-600 font-bold text-lg">2</span>
                  </div>
                  <div class="text-center pb-4">
                    <span class="text-purple-200 text-sm font-medium uppercase tracking-wide">{{ $t('consultants.program.dayLabel') }} 2</span>
                    <h3 class="text-xl font-bold mt-1">{{ $t('consultants.program.day2.title') }}</h3>
                  </div>
                </div>
                <div class="p-8 pt-12">
                  <p class="text-gray-600 leading-7 mb-6">
                    {{ $t('consultants.program.day2.description') }}
                  </p>
                  <ul class="space-y-3">
                    <li v-for="(item, index) in tm('consultants.program.day2.items')" :key="index" class="flex items-start gap-3">
                      <CheckCircleIcon class="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span class="text-gray-700 text-sm">{{ rt(item) }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Day 3 -->
            <div
              ref="day3Reveal.element"
              :class="[
                'relative opacity-0',
                { 'animate-reveal-up': day3Reveal.isVisible }
              ]"
            >
              <div class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div class="relative bg-gradient-to-r from-pink-600 to-rose-600 p-6 text-white">
                  <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-pink-600 flex items-center justify-center shadow-lg z-10">
                    <span class="text-pink-600 font-bold text-lg">3</span>
                  </div>
                  <div class="text-center pb-4">
                    <span class="text-pink-200 text-sm font-medium uppercase tracking-wide">{{ $t('consultants.program.dayLabel') }} 3</span>
                    <h3 class="text-xl font-bold mt-1">{{ $t('consultants.program.day3.title') }}</h3>
                  </div>
                </div>
                <div class="p-8 pt-12">
                  <p class="text-gray-600 leading-7 mb-6">
                    {{ $t('consultants.program.day3.description') }}
                  </p>
                  <ul class="space-y-3">
                    <li v-for="(item, index) in tm('consultants.program.day3.items')" :key="index" class="flex items-start gap-3">
                      <CheckCircleIcon class="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span class="text-gray-700 text-sm">{{ rt(item) }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Helpr.ai Section -->
    <section class="py-24 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref="whyReveal.element"
            :class="[
              'opacity-0',
              { 'animate-reveal-left': whyReveal.isVisible }
            ]"
          >
            <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              {{ $t('consultants.why.title') }}
            </h2>
            <p class="text-xl text-gray-600 leading-8 mb-8">
              {{ $t('consultants.why.description') }}
            </p>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BoltIcon class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('consultants.why.point1.title') }}</h3>
                  <p class="text-gray-600">{{ $t('consultants.why.point1.description') }}</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <UserGroupIcon class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('consultants.why.point2.title') }}</h3>
                  <p class="text-gray-600">{{ $t('consultants.why.point2.description') }}</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <ChartBarIcon class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">{{ $t('consultants.why.point3.title') }}</h3>
                  <p class="text-gray-600">{{ $t('consultants.why.point3.description') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Visual element -->
          <div
            ref="visualReveal.element"
            :class="[
              'relative opacity-0',
              { 'animate-reveal-right': visualReveal.isVisible }
            ]"
          >
            <div class="relative bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 lg:p-12">
              <!-- Floating decorations -->
              <div class="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
              <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>

              <div class="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div class="text-center mb-8">
                  <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4 shadow-lg">
                    <SparklesIcon class="h-8 w-8 text-white" />
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900">{{ $t('consultants.why.visual.title') }}</h3>
                </div>

                <div class="space-y-4">
                  <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span class="text-gray-700 font-medium">{{ $t('consultants.why.visual.clients') }}</span>
                    <span class="text-indigo-600 font-bold text-xl">3-5x</span>
                  </div>
                  <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span class="text-gray-700 font-medium">{{ $t('consultants.why.visual.time') }}</span>
                    <span class="text-emerald-600 font-bold text-xl">-60%</span>
                  </div>
                  <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span class="text-gray-700 font-medium">{{ $t('consultants.why.visual.quality') }}</span>
                    <span class="text-amber-600 font-bold text-xl">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden scroll-mt-24">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div class="px-8 py-12 sm:px-12 lg:px-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
            <div class="mx-auto max-w-3xl">
              <div class="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-6">
                <RocketLaunchIcon class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-3xl sm:text-4xl font-bold mb-4">
                {{ $t('consultants.cta.title') }}
              </h3>
              <p class="text-xl text-indigo-100 leading-8">
                {{ $t('consultants.cta.subtitle') }}
              </p>
            </div>
          </div>

          <div class="px-8 py-12 sm:px-12 lg:px-16">
            <form action="https://api.web3forms.com/submit" method="POST" class="max-w-xl mx-auto space-y-6">
              <input type="hidden" name="access_key" value="5a88dd82-d433-4aed-aff0-7edd637ce315">
              <input type="hidden" name="redirect" :value="successUrl">
              <input type="hidden" name="subject" value="Nieuw transformatie sessie verzoek - Helpr.ai Consultants">
              <input type="hidden" name="from_name" value="Helpr.ai Consultants Page">

              <div>
                <label for="cta-name" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('consultants.cta.form.name') }} *</label>
                <input
                  id="cta-name"
                  name="name"
                  type="text"
                  required
                  :placeholder="$t('consultants.cta.form.namePlaceholder')"
                  class="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-0 transition-colors"
                />
              </div>

              <div>
                <label for="cta-email" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('consultants.cta.form.email') }} *</label>
                <input
                  id="cta-email"
                  name="email"
                  required
                  type="email"
                  :placeholder="$t('consultants.cta.form.emailPlaceholder')"
                  class="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-0 transition-colors"
                />
              </div>

              <div>
                <label for="cta-company" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('consultants.cta.form.company') }} *</label>
                <input
                  id="cta-company"
                  name="company"
                  type="text"
                  required
                  :placeholder="$t('consultants.cta.form.companyPlaceholder')"
                  class="w-full h-12 rounded-xl border-2 border-gray-200 px-4 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-0 transition-colors"
                />
              </div>

              <div>
                <label for="cta-message" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('consultants.cta.form.message') }}</label>
                <textarea
                  id="cta-message"
                  name="message"
                  :placeholder="$t('consultants.cta.form.messagePlaceholder')"
                  rows="4"
                  class="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-0 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all duration-200 hover:scale-[1.02] shadow-lg"
              >
                {{ $t('consultants.cta.form.submit') }}
              </button>

              <p class="text-xs text-gray-500 text-center">
                {{ $t('consultants.cta.form.privacy') }}
              </p>
            </form>
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
  RocketLaunchIcon,
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
  CurrencyEuroIcon,
  CpuChipIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  BoltIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
  PaperAirplaneIcon,
  MicrophoneIcon,
  DocumentCheckIcon,
} from '@heroicons/vue/24/outline'

// Scroll function
const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    const headerHeight = 96
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
const productStep1Reveal = createRevealElement()
const productStep2Reveal = createRevealElement()
const productStep3Reveal = createRevealElement()
const productFeaturesReveal = createRevealElement()
const pillar1Reveal = createRevealElement()
const pillar2Reveal = createRevealElement()
const pillar3Reveal = createRevealElement()
const day1Reveal = createRevealElement()
const day2Reveal = createRevealElement()
const day3Reveal = createRevealElement()
const whyReveal = createRevealElement()
const visualReveal = createRevealElement()

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

// Success URL for form redirects
const successUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}${localePath('success')}`
  }
  return localePath('success')
})

// Close dropdown and mobile menu when clicking outside
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const target = event.target as HTMLElement

    if (!target.closest('.relative')) {
      showLangDropdown.value = false
    }

    if (!target.closest('header')) {
      showMobileMenu.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})

// Ensure page starts at top on mount
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
})
</script>
