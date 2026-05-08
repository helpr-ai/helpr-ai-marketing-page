<template>
  <div>
    <!-- HERO -->
    <section class="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-br from-navy-50 via-white to-warm-bg opacity-60 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div class="lg:col-span-6">
            <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-warm-ink font-bold">
              {{ $t('hero.titleA') }}<br />
              <span class="text-navy-500">{{ $t('hero.titleB') }}</span>
            </h1>

            <p class="mt-8 text-xl lg:text-2xl text-warm-ink/70 leading-relaxed max-w-2xl">
              {{ $t('hero.subtitle') }}
            </p>

            <div class="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#cta"
                class="inline-flex min-h-[3rem] py-3 items-center justify-center rounded-full px-7 bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors shadow-card text-center"
              >
                <span>{{ $t('hero.ctaPrimary') }}</span>
                <svg class="ml-2 h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a
                href="#how"
                class="inline-flex min-h-[3rem] py-3 items-center justify-center rounded-full px-7 bg-white border border-warm-border text-warm-ink font-semibold hover:bg-warm-bg transition-colors text-center"
              >
                {{ $t('hero.ctaSecondary') }}
              </a>
            </div>
          </div>

          <div class="lg:col-span-6 hidden lg:block">
            <ClientOnly>
              <HeroGrid />
            </ClientOnly>
          </div>
        </div>
      </div>
    </section>

    <!-- PARTNERS STRIP -->
    <section class="py-16 border-y border-warm-border bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <p class="text-center text-xs font-semibold uppercase tracking-wider text-warm-gray mb-10">
          {{ $t('partners.heading') }}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-20">
          <a href="https://coningadviesgroep.nl" target="_blank" rel="noopener noreferrer" aria-label="Coning Adviesgroep">
            <img src="~/assets/images/logos/coning_logo.png" alt="Coning" class="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          </a>
          <a href="https://www.teamkikk.nl/" target="_blank" rel="noopener noreferrer" aria-label="Team Kikk">
            <img src="~/assets/images/logos/logo_team_kikk.png" alt="Team Kikk" class="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          </a>
          <a href="https://www.vanhouten.nl/" target="_blank" rel="noopener noreferrer" aria-label="Van Houten en Partners">
            <img src="~/assets/images/logos/logo_van_houten_en_partners.svg" alt="Van Houten en Partners" class="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          </a>
          <a href="https://certificeringsadvies.nl" target="_blank" rel="noopener noreferrer" aria-label="Certificeringsadvies Nederland">
            <img src="~/assets/images/logos/certificeringsadvies_nederland_logo.svg" alt="Certificeringsadvies Nederland" class="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
          </a>
        </div>
      </div>
    </section>

    <!-- PAIN -->
    <section class="py-24 lg:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-16 items-center">
          <div class="lg:col-span-7">
            <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('pain.eyebrow') }}</p>
            <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight mb-8">
              {{ $t('pain.title') }}
            </h2>
            <p class="text-lg text-warm-ink/70 leading-relaxed mb-6">
              {{ $t('pain.body1') }}
            </p>
            <p class="text-lg text-warm-ink/70 leading-relaxed">
              {{ $t('pain.body2') }}
            </p>
          </div>
          <div class="lg:col-span-5">
            <div class="relative rounded-2xl bg-warm-bg border border-warm-border shadow-card overflow-hidden">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dmh4ubixs&public_id=Helpr_website_explainer_v4_-_with_logo_csti3q"
                style="aspect-ratio: 640 / 360;"
                class="w-full h-auto block"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowfullscreen
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE: AI INTERVIEWS -->
    <section id="core" class="py-24 lg:py-32 bg-warm-ink text-white scroll-mt-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr] gap-8 lg:gap-12 lg:items-stretch">
          <svg
            viewBox="0 0 64 80"
            preserveAspectRatio="xMidYMid meet"
            class="lg:self-stretch w-24 h-32 lg:w-auto lg:h-auto text-navy-500"
            style="aspect-ratio: 64 / 80;"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <rect x="22" y="6" width="20" height="38" rx="10" fill="currentColor" fill-opacity="0.18" />
            <rect x="22" y="6" width="20" height="38" rx="10" />
            <line x1="28" y1="18" x2="36" y2="18" stroke-opacity="0.55" />
            <line x1="28" y1="25" x2="36" y2="25" stroke-opacity="0.55" />
            <line x1="28" y1="32" x2="36" y2="32" stroke-opacity="0.55" />
            <path d="M14 32c0 9.94 8.06 18 18 18s18-8.06 18-18" />
            <line x1="32" y1="50" x2="32" y2="62" />
            <line x1="24" y1="62" x2="40" y2="62" />
          </svg>

          <div>
            <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('core.eyebrow') }}</p>
            <h2 class="font-display text-3xl lg:text-4xl text-white font-bold leading-tight mb-5">
              {{ $t('core.title') }}
            </h2>
            <p class="text-base lg:text-lg text-white/70 leading-relaxed">
              {{ $t('core.body') }}
            </p>
          </div>

          <ul class="space-y-5 lg:space-y-6">
            <li
              v-for="f in coreFeatures"
              :key="f"
              class="flex items-start gap-3"
            >
              <svg viewBox="0 0 9 5" fill="currentColor" class="flex-shrink-0 w-7 h-auto text-navy-500 mt-1.5" aria-hidden="true">
                <path d="M0 0 L6 0 L9 2.5 L6 5 L0 5 Z" />
              </svg>
              <div>
                <h3 class="font-display text-base font-bold text-white mb-1">{{ $t(`core.features.${f}.title`) }}</h3>
                <p class="text-sm text-white/65 leading-snug">{{ $t(`core.features.${f}.body`) }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- PROMISE -->
    <section class="py-24 lg:py-32 bg-warm-bg">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl mb-20">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('promise.eyebrow') }}</p>
          <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight mb-8">
            {{ $t('promise.title') }}
          </h2>
          <p class="text-xl text-warm-ink/70 leading-relaxed">
            {{ $t('promise.body') }}
          </p>
        </div>

        <div class="space-y-4 max-w-4xl mx-auto">
          <div
            v-for="pillar in promisePillars"
            :key="pillar"
            class="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 p-8 bg-white rounded-2xl border border-warm-border shadow-card"
          >
            <div class="lg:w-1/2">
              <h3 class="font-display text-2xl text-warm-ink font-bold mb-2">{{ $t(`promise.pillars.${pillar}.title`) }}</h3>
              <p class="text-warm-ink/70 leading-relaxed">{{ $t(`promise.pillars.${pillar}.body`) }}</p>
            </div>
            <div class="lg:w-1/2 flex lg:justify-center">
              <PillarViz :kind="pillar" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AUDIENCE -->
    <section id="audience" class="py-24 lg:py-32 bg-navy-500 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="text-sm font-semibold uppercase tracking-wider text-amber-300 mb-4">{{ $t('audience.eyebrow') }}</p>
          <h2 class="font-display text-4xl lg:text-5xl text-white font-bold leading-tight">
            {{ $t('audience.title') }}
          </h2>
        </div>

        <div class="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div class="lg:aspect-square p-8 bg-white rounded-2xl border border-warm-border shadow-card flex flex-col">
            <div class="inline-flex items-center self-start px-3 py-1 rounded-full bg-navy-50 text-navy-700 text-xs font-semibold uppercase tracking-wider">
              {{ $t('audience.experienced.tag') }}
            </div>
            <h3 class="font-display text-2xl text-warm-ink font-bold mt-5 mb-3">{{ $t('audience.experienced.title') }}</h3>
            <p class="text-warm-ink/70 leading-relaxed">{{ $t('audience.experienced.body') }}</p>
            <p class="text-warm-ink font-semibold italic mt-auto pt-4">{{ $t('audience.experienced.quote') }}</p>
          </div>

          <div class="aspect-square">
            <img
              src="~/assets/images/senior_junior.jpg"
              alt="Senior en junior adviseur rug aan rug"
              class="w-full h-full object-cover rounded-2xl shadow-card"
            />
          </div>

          <div class="lg:aspect-square p-8 bg-white rounded-2xl border border-warm-border shadow-card flex flex-col">
            <div class="inline-flex items-center self-start px-3 py-1 rounded-full bg-amber-50 text-gold-600 text-xs font-semibold uppercase tracking-wider">
              {{ $t('audience.junior.tag') }}
            </div>
            <h3 class="font-display text-2xl text-warm-ink font-bold mt-5 mb-3">{{ $t('audience.junior.title') }}</h3>
            <p class="text-warm-ink/70 leading-relaxed">{{ $t('audience.junior.body') }}</p>
            <p class="text-warm-ink font-semibold italic mt-auto pt-4">{{ $t('audience.junior.quote') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- USE CASE: BREDE INZETBAARHEID -->
    <section class="py-24 lg:py-32 bg-warm-bg">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        <div class="text-center mb-12">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('usecase.eyebrow') }}</p>
          <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight mb-6">
            {{ $t('usecase.title') }}
          </h2>
          <p class="text-lg text-warm-ink/70 leading-relaxed max-w-2xl mx-auto">
            {{ $t('usecase.body') }}
          </p>
        </div>

        <figure class="bg-white rounded-2xl border border-warm-border shadow-card p-8 lg:p-10">
          <svg class="w-10 h-10 text-navy-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.583 17.321C8.553 16.227 8 15 8 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C18.553 16.227 18 15 18 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
          <blockquote class="font-display text-xl lg:text-2xl text-warm-ink leading-snug mb-6">
            {{ $t('usecase.quote.text') }}
          </blockquote>
          <figcaption class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-navy-500 text-white flex items-center justify-center font-semibold text-sm">
              FB
            </div>
            <div>
              <div class="font-semibold text-warm-ink">{{ $t('usecase.quote.author') }}</div>
              <div class="text-sm text-warm-ink/60">{{ $t('usecase.quote.role') }}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- INDUSTRIES: BREAK SECTION -->
    <section class="py-20 lg:py-24 bg-warm-ink text-white overflow-hidden">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl mb-12 lg:mb-16">
          <p class="text-sm font-semibold uppercase tracking-wider text-amber-300 mb-4">{{ $t('industries.eyebrow') }}</p>
          <h2 class="font-display text-4xl lg:text-5xl text-white font-bold leading-tight mb-6">
            {{ $t('industries.title') }}
          </h2>
          <p class="text-lg text-white/70 leading-relaxed">
            {{ $t('industries.body') }}
          </p>
        </div>

        <ClientOnly>
          <IndustryGrid />
        </ClientOnly>
      </div>
    </section>

    <!-- TOOLBOX -->
    <section id="toolbox" class="py-24 lg:py-32 bg-white scroll-mt-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl mb-12">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('toolbox.eyebrow') }}</p>
          <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight mb-6">
            {{ $t('toolbox.title') }}
          </h2>
          <p class="text-lg text-warm-ink/70 leading-relaxed">
            {{ $t('toolbox.subtitle') }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2 mb-10">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'px-4 py-2 rounded-full text-sm font-semibold transition-colors border',
              activeCategory === cat.id
                ? 'bg-navy-500 text-white border-navy-500'
                : 'bg-white text-warm-ink/70 border-warm-border hover:border-navy-500 hover:text-warm-ink'
            ]"
          >
            {{ $t(`toolbox.categories.${cat.id}`) }}
            <span class="ml-1.5 text-xs opacity-60">{{ cat.id === 'all' ? modules.length : modules.filter(m => m.category === cat.id).length }}</span>
          </button>
        </div>

        <div class="relative">
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <div
              v-for="module in filteredModules"
              :key="module.id"
              class="group p-4 bg-white rounded-xl border border-warm-border hover:shadow-card-hover hover:border-navy-500 transition-all cursor-default"
            >
              <div class="flex items-start justify-between gap-2 mb-2">
                <span class="text-[10px] font-semibold uppercase tracking-wider text-warm-gray truncate">{{ $t(`toolbox.categories.${module.category}`) }}</span>
                <span
                  v-if="module.status === 'live'"
                  class="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200 flex-shrink-0"
                >Live</span>
                <span
                  v-else-if="module.status === 'beta'"
                  class="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-amber-50 text-gold-600 border border-amber-200 flex-shrink-0"
                >Beta</span>
                <span
                  v-else
                  class="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-warm-bg text-warm-gray border border-warm-border flex-shrink-0"
                >{{ $t('toolbox.soon') }}</span>
              </div>
              <h3 class="text-sm font-semibold text-warm-ink leading-snug break-words [overflow-wrap:anywhere]">{{ $t(`toolbox.modules.${module.id}`) }}</h3>
            </div>
          </div>
          <div class="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-white/0 via-white/85 to-white pointer-events-none"></div>
        </div>

        <p class="mt-14 text-center text-lg lg:text-xl text-warm-ink/80 max-w-3xl mx-auto leading-relaxed">
          <span class="font-display font-bold text-warm-ink">{{ $t('toolbox.growthTitle') }}</span>
          {{ $t('toolbox.growthBody') }}
        </p>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section id="how" class="py-24 lg:py-32 bg-navy-500 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center mb-16">
          <p class="text-sm font-semibold uppercase tracking-wider text-amber-300 mb-4">{{ $t('how.eyebrow') }}</p>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight whitespace-nowrap">
            {{ $t('how.title') }}
          </h2>
        </div>

        <div class="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div v-for="(step, i) in howSteps" :key="step" class="relative">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-white text-navy-500 font-display font-bold text-xl mb-4">{{ i + 1 }}</div>
            <h3 class="font-display text-xl text-white font-bold mb-2">{{ $t(`how.steps.${step}.title`) }}</h3>
            <p class="text-white/80 leading-relaxed">{{ $t(`how.steps.${step}.body`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- OUTPUT -->
    <section id="output" class="py-24 lg:py-32 bg-warm-bg scroll-mt-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <div class="lg:col-span-5 flex flex-col">
            <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('output.eyebrow') }}</p>
            <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight mb-6">
              {{ $t('output.title') }}
            </h2>
            <p class="text-lg text-warm-ink/70 leading-relaxed mb-10">
              {{ $t('output.body') }}
            </p>

            <ul class="space-y-5 mb-10">
              <li
                v-for="f in outputFeatures"
                :key="f"
                class="flex items-start gap-3"
              >
                <svg viewBox="0 0 9 5" fill="currentColor" class="flex-shrink-0 w-7 h-auto text-navy-500 mt-1.5" aria-hidden="true">
                  <path d="M0 0 L6 0 L9 2.5 L6 5 L0 5 Z" />
                </svg>
                <div>
                  <h3 class="font-display text-base font-bold text-warm-ink mb-1">{{ $t(`output.features.${f}.title`) }}</h3>
                  <p class="text-sm text-warm-ink/70 leading-snug">{{ $t(`output.features.${f}.body`) }}</p>
                </div>
              </li>
            </ul>

            <NuxtLink
              :to="localePath('sample')"
              class="inline-flex h-12 items-center justify-center self-start rounded-full px-7 bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors shadow-card"
            >
              {{ $t('output.ctaButton') }}
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
            </NuxtLink>
          </div>

          <div class="lg:col-span-7 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-sm h-full">
              <div class="absolute -inset-2 bg-gradient-to-br from-navy-500/15 via-warm-bg to-navy-700/10 rounded-3xl blur-2xl"></div>
              <div class="relative h-full bg-white rounded-xl shadow-card-hover border border-warm-border overflow-hidden">
                <div class="h-full flex flex-col p-6">
                  <!-- Header with logos -->
                  <div class="flex justify-between items-start pb-5 border-b border-warm-border">
                    <div class="flex items-center gap-2 text-warm-ink">
                      <div class="w-7 h-7 rounded bg-navy-500"></div>
                      <span class="font-display font-bold text-sm">Adviesbureau XYZ</span>
                    </div>
                    <div class="flex items-center gap-2 text-warm-gray">
                      <span class="text-xs font-semibold">In samenwerking met</span>
                      <div class="w-7 h-7 rounded bg-warm-ink/80"></div>
                    </div>
                  </div>

                  <!-- Doc title -->
                  <div class="mt-6">
                    <p class="text-xs font-semibold uppercase tracking-wider text-warm-gray mb-2">Stakeholderanalyse · ISO 9001</p>
                    <h3 class="font-display text-xl lg:text-2xl text-warm-ink font-bold leading-tight">Klant B.V.</h3>
                    <p class="text-xs text-warm-gray mt-1">Versie 1.0 · Mei 2026</p>
                  </div>

                  <!-- Section: Belanghebbenden -->
                  <div class="mt-6">
                    <h4 class="font-display text-sm font-bold text-warm-ink mb-3">1. Belanghebbenden</h4>
                    <div class="space-y-2.5">
                      <div class="flex items-center gap-3">
                        <div class="w-1.5 h-1.5 rounded-full bg-navy-500"></div>
                        <div class="h-1.5 bg-warm-border rounded flex-1"></div>
                      </div>
                      <div class="flex items-center gap-3">
                        <div class="w-1.5 h-1.5 rounded-full bg-navy-500"></div>
                        <div class="h-1.5 bg-warm-border rounded flex-1"></div>
                      </div>
                      <div class="flex items-center gap-3">
                        <div class="w-1.5 h-1.5 rounded-full bg-navy-500"></div>
                        <div class="h-1.5 bg-warm-border rounded flex-1"></div>
                      </div>
                    </div>
                  </div>

                  <!-- Section: Verwachtingen -->
                  <div class="mt-6">
                    <h4 class="font-display text-sm font-bold text-warm-ink mb-3">2. Verwachtingen & eisen</h4>
                    <div class="space-y-1.5">
                      <div class="h-1.5 bg-warm-border/70 rounded w-full"></div>
                      <div class="h-1.5 bg-warm-border/70 rounded w-11/12"></div>
                      <div class="h-1.5 bg-warm-border/70 rounded w-10/12"></div>
                      <div class="h-1.5 bg-warm-border/70 rounded w-9/12"></div>
                    </div>
                  </div>

                  <!-- Section: Bewijs -->
                  <div class="mt-6">
                    <h4 class="font-display text-sm font-bold text-warm-ink mb-3">3. Bewijslast</h4>
                    <div class="grid grid-cols-2 gap-2">
                      <div class="p-2 bg-warm-bg rounded border border-warm-border">
                        <div class="h-1.5 bg-warm-border rounded w-2/3 mb-1.5"></div>
                        <div class="h-1 bg-navy-500/40 rounded w-1/2"></div>
                      </div>
                      <div class="p-2 bg-warm-bg rounded border border-warm-border">
                        <div class="h-1.5 bg-warm-border rounded w-2/3 mb-1.5"></div>
                        <div class="h-1 bg-navy-500/40 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>

                  <!-- Footer -->
                  <div class="mt-auto pt-4 border-t border-warm-border flex justify-between text-[10px] text-warm-gray">
                    <span>Audit-klaar · Helpr.ai</span>
                    <span>Pagina 1 van 14</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DATA OUTPUT -->
    <section id="data" class="py-24 lg:py-32 bg-white scroll-mt-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div class="lg:col-span-7 order-last lg:order-first">
            <div class="relative">
              <div class="absolute -inset-2 bg-gradient-to-br from-navy-500/10 via-warm-bg to-navy-700/10 rounded-3xl blur-2xl"></div>
              <div class="relative bg-white rounded-xl shadow-card-hover border border-warm-border p-5 sm:p-7 lg:p-8 overflow-hidden">
                <div class="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-warm-border">
                  <div class="flex items-center gap-2 min-w-0">
                    <span class="relative flex h-2 w-2 flex-shrink-0">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span class="text-xs font-semibold uppercase tracking-wider text-warm-gray">{{ $t('data.modelTitle') }}</span>
                  </div>
                  <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-gold-600 border border-amber-200 flex-shrink-0">
                    {{ $t('data.soonTag') }}
                  </span>
                </div>

                <div class="font-mono text-xs sm:text-sm space-y-2.5 [overflow-wrap:anywhere]">
                  <div class="text-warm-ink"><span class="text-navy-500 mr-1.5">▾</span>sessions</div>
                  <div class="pl-4 sm:pl-6 space-y-1.5">
                    <div class="text-warm-ink/75"><span class="text-warm-gray mr-1.5">▸</span>interview <span class="text-navy-500/60 ml-2 text-[10px] sm:text-xs">"sa-2026-05"</span></div>
                    <div class="text-warm-ink/75"><span class="text-warm-gray mr-1.5">▸</span>module <span class="text-navy-500/60 ml-2 text-[10px] sm:text-xs">"stakeholderanalyse"</span></div>
                  </div>

                  <div class="text-warm-ink"><span class="text-navy-500 mr-1.5">▾</span>claims</div>
                  <div class="pl-4 sm:pl-6 space-y-1.5">
                    <div class="text-warm-ink/75"><span class="text-warm-gray mr-1.5">▸</span>statement</div>
                    <div class="text-warm-ink/75"><span class="text-warm-gray mr-1.5">▸</span>source <span class="text-navy-500/60 ml-2 text-[10px] sm:text-xs">→ interview_4m23s</span></div>
                    <div class="text-warm-ink/75"><span class="text-warm-gray mr-1.5">▸</span>verified <span class="text-green-600 ml-2 text-[10px] sm:text-xs">true</span></div>
                  </div>

                  <div class="text-warm-ink"><span class="text-navy-500 mr-1.5">▾</span>compliance_map</div>
                  <div class="pl-4 sm:pl-6 space-y-1.5">
                    <div class="text-warm-ink/75"><span class="text-warm-gray mr-1.5">▸</span>norm <span class="text-navy-500/60 ml-2 text-[10px] sm:text-xs">"ISO 9001"</span></div>
                    <div class="text-warm-ink/75"><span class="text-warm-gray mr-1.5">▸</span>section <span class="text-navy-500/60 ml-2 text-[10px] sm:text-xs">"§ 4.1"</span></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="lg:col-span-5">
            <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('data.eyebrow') }}</p>
            <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight mb-6">
              {{ $t('data.title') }}
            </h2>
            <p class="text-lg text-warm-ink/70 leading-relaxed mb-10">
              {{ $t('data.body') }}
            </p>

            <ul class="space-y-5">
              <li
                v-for="f in dataFeatures"
                :key="f"
                class="flex items-start gap-3"
              >
                <svg viewBox="0 0 9 5" fill="currentColor" class="flex-shrink-0 w-7 h-auto text-navy-500 mt-1.5" aria-hidden="true">
                  <path d="M0 0 L6 0 L9 2.5 L6 5 L0 5 Z" />
                </svg>
                <div>
                  <h3 class="font-display text-base font-bold text-warm-ink mb-1">{{ $t(`data.features.${f}.title`) }}</h3>
                  <p class="text-sm text-warm-ink/70 leading-snug">{{ $t(`data.features.${f}.body`) }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ELEVENLABS GRANT -->
    <section class="py-12 lg:py-14 bg-warm-bg">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
          <TrophyIcon class="flex-shrink-0 w-12 h-12 text-amber-500" aria-hidden="true" />
          <a
            href="https://elevenlabs.io/text-to-speech"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-shrink-0"
            :aria-label="$t('grant.linkLabel')"
          >
            <img
              src="https://eleven-public-cdn.elevenlabs.io/payloadcms/pwsc4vchsqt-ElevenLabsGrants.webp"
              alt="ElevenLabs Grants"
              class="w-48 h-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>
          <p class="text-sm lg:text-base text-warm-ink/70 leading-relaxed">
            {{ $t('grant.title') }}
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="cta" class="py-24 lg:py-32 bg-warm-ink relative overflow-hidden scroll-mt-24">
      <div class="absolute inset-0 -z-0">
        <div class="absolute top-0 right-0 w-[40rem] h-[40rem] bg-navy-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-navy-700/20 rounded-full blur-3xl"></div>
      </div>

      <div class="relative mx-auto max-w-4xl px-6 lg:px-8">
        <div class="text-center mb-12">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-4">{{ $t('cta.eyebrow') }}</p>
          <h2 class="font-display text-4xl lg:text-6xl text-white font-bold leading-tight mb-6">
            {{ $t('cta.title') }}
          </h2>
          <p class="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            {{ $t('cta.subtitle') }}
          </p>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          @submit.prevent="onSubmit"
          class="grid sm:grid-cols-2 gap-4 p-8 bg-white rounded-2xl shadow-modal"
        >
          <input type="hidden" name="access_key" value="5a88dd82-d433-4aed-aff0-7edd637ce315" />
          <input type="hidden" name="subject" value="Helpr.ai · stakeholderanalyse aanvraag" />
          <input type="hidden" name="from_name" value="Helpr.ai website" />
          <input type="checkbox" name="botcheck" class="hidden" tabindex="-1" autocomplete="off" />

          <div class="sm:col-span-2">
            <label for="cta-company" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('cta.form.companyLabel') }}</label>
            <input
              id="cta-company"
              v-model="form.company"
              name="company"
              type="text"
              required
              :placeholder="$t('cta.form.companyPlaceholder')"
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            />
          </div>
          <div>
            <label for="cta-name" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('cta.form.nameLabel') }}</label>
            <input
              id="cta-name"
              v-model="form.name"
              name="name"
              type="text"
              required
              :placeholder="$t('cta.form.namePlaceholder')"
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            />
          </div>
          <div>
            <label for="cta-email" class="block text-sm font-semibold text-warm-ink mb-2">{{ $t('cta.form.emailLabel') }}</label>
            <input
              id="cta-email"
              v-model="form.email"
              name="email"
              type="email"
              required
              :placeholder="$t('cta.form.emailPlaceholder')"
              class="w-full h-11 px-4 rounded-md border border-warm-border bg-white text-warm-ink placeholder:text-warm-gray focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors"
            />
          </div>
          <div class="sm:col-span-2">
            <button
              type="submit"
              :disabled="submitting || submitted"
              class="w-full h-12 rounded-full bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors disabled:opacity-60"
            >
              <span v-if="submitting">…</span>
              <span v-else-if="submitted">{{ $t('cta.form.submitted') }}</span>
              <span v-else>{{ $t('cta.form.submit') }}</span>
            </button>
          </div>
          <p v-if="submitError" class="sm:col-span-2 text-sm text-red-600 text-center">{{ $t('cta.form.error') }}</p>
          <p v-else class="sm:col-span-2 text-xs text-warm-gray text-center">{{ $t('cta.form.disclaimer') }}</p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { TrophyIcon } from '@heroicons/vue/24/solid'

const localePath = useLocalePath()

useHead({
  title: 'Helpr.ai · Toolbox voor certificerend Nederland'
})

const categories = [
  { id: 'all' },
  { id: 'co2' },
  { id: 'iso9001' },
  { id: 'iso14001' },
  { id: 'iso27001' },
  { id: 'iso42001' },
  { id: 'scl' },
  { id: 'general' },
]

type ModuleStatus = 'live' | 'beta' | 'soon'
interface Module { id: string; category: string; status: ModuleStatus }

const modules: Module[] = [
  { id: 'co2EnergyInventory', category: 'co2', status: 'live' },
  { id: 'co2Scope', category: 'co2', status: 'live' },
  { id: 'co2Reduction', category: 'co2', status: 'live' },
  { id: 'co2Sector', category: 'co2', status: 'beta' },
  { id: 'co2Stakeholder', category: 'co2', status: 'live' },
  { id: 'co2Communication', category: 'co2', status: 'beta' },

  { id: 'iso9001Stakeholder', category: 'iso9001', status: 'live' },
  { id: 'iso9001Process', category: 'iso9001', status: 'live' },
  { id: 'iso9001Risk', category: 'iso9001', status: 'live' },
  { id: 'iso9001Kpi', category: 'iso9001', status: 'beta' },
  { id: 'iso9001Document', category: 'iso9001', status: 'beta' },
  { id: 'iso9001InternalAudit', category: 'iso9001', status: 'soon' },

  { id: 'iso14001Aspects', category: 'iso14001', status: 'beta' },
  { id: 'iso14001Legal', category: 'iso14001', status: 'beta' },
  { id: 'iso14001Lifecycle', category: 'iso14001', status: 'soon' },
  { id: 'iso14001Emergency', category: 'iso14001', status: 'soon' },

  { id: 'iso27001Assets', category: 'iso27001', status: 'beta' },
  { id: 'iso27001Risk', category: 'iso27001', status: 'beta' },
  { id: 'iso27001Soa', category: 'iso27001', status: 'soon' },
  { id: 'iso27001Annex', category: 'iso27001', status: 'soon' },
  { id: 'iso27001Incident', category: 'iso27001', status: 'soon' },
  { id: 'iso27001Bcp', category: 'iso27001', status: 'soon' },

  { id: 'iso42001UseCases', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Risk', category: 'iso42001', status: 'soon' },
  { id: 'iso42001Governance', category: 'iso42001', status: 'soon' },
  { id: 'iso42001Bias', category: 'iso42001', status: 'soon' },

  { id: 'sclMeasurement', category: 'scl', status: 'soon' },
  { id: 'sclBehavior', category: 'scl', status: 'soon' },
  { id: 'sclLeadership', category: 'scl', status: 'soon' },

  { id: 'generalReview', category: 'general', status: 'live' },
  { id: 'generalAuditUpdate', category: 'general', status: 'live' },
  { id: 'generalCustomer', category: 'general', status: 'beta' },
  { id: 'generalSupplier', category: 'general', status: 'beta' },
]

const activeCategory = ref<string>('all')
const seededShuffle = <T,>(arr: T[], seed: number): T[] => {
  const out = [...arr]
  let s = seed
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280
    const j = Math.floor((s / 233280) * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

const filteredModules = computed(() => {
  const base = activeCategory.value === 'all'
    ? modules
    : modules.filter(m => m.category === activeCategory.value)
  return seededShuffle(base, 42)
})

const promisePillars = ['cherrypick', 'fullTrack', 'initial', 'updates'] as const
const coreFeatures = ['voice', 'followup', 'domain', 'flexible'] as const
const howSteps = ['select', 'invite', 'collect', 'export'] as const
const dataFeatures = ['model', 'api', 'searchable'] as const
const outputFeatures = ['editable', 'evidence', 'structure'] as const

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
