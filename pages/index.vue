<template>
  <div>
    <!-- HERO -->
    <section id="top" class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-br from-navy-50 via-white to-warm-bg opacity-60 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <p class="text-sm font-semibold uppercase tracking-wider text-navy-500 mb-5">{{ $t('home.hero.eyebrow') }}</p>
        <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-warm-ink font-bold max-w-5xl mb-6">
          {{ $t('home.hero.title') }}
        </h1>
        <p class="font-display text-2xl lg:text-4xl text-navy-500 font-bold leading-tight max-w-4xl mb-8">
          {{ $t('home.hero.payoff') }}
        </p>
        <div class="max-w-3xl text-xl text-warm-ink/75 leading-relaxed space-y-1">
          <p>{{ $t('home.hero.body1') }}</p>
          <p>{{ $t('home.hero.body2') }}</p>
        </div>
      </div>
    </section>

    <!-- TWO PRODUCTS -->
    <section class="pb-24 lg:pb-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-6 lg:gap-8">

          <!-- SCL card -->
          <article id="scl" class="bg-white border border-warm-border rounded-2xl shadow-card p-10 flex flex-col gap-6 scroll-mt-24">
            <div class="w-12 h-12 rounded-xl bg-navy-500/10 flex items-center justify-center">
              <svg class="w-7 h-7 text-navy-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 21V3" /><path d="M17 21V3" /><path d="M7 7h10" /><path d="M7 12h10" /><path d="M7 17h10" /></svg>
            </div>
            <h2 class="font-display text-4xl text-warm-ink font-bold leading-tight">{{ $t('home.products.scl.title') }}</h2>
            <p class="text-xl text-warm-ink font-medium leading-snug">{{ $t('home.products.scl.lead') }}</p>
            <p class="text-warm-ink/75 leading-relaxed">{{ $t('home.products.scl.body') }}</p>
            <ul class="flex flex-col gap-3 text-warm-ink/80">
              <li v-for="b in ['b1', 'b2', 'b3']" :key="b" class="flex gap-3">
                <span class="text-navy-500 font-bold flex-shrink-0">—</span>
                <span>{{ $t(`home.products.scl.${b}`) }}</span>
              </li>
            </ul>
            <div class="flex items-start gap-3 bg-warm-bg rounded-xl p-4">
              <svg class="w-5 h-5 flex-shrink-0 text-navy-500 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></svg>
              <span class="text-sm text-warm-ink/80">{{ $t('home.products.scl.proof') }}</span>
            </div>
            <div class="mt-auto flex flex-col gap-5 pt-2">
              <p class="text-sm text-warm-gray">{{ $t('home.products.scl.price') }}</p>
              <div class="flex flex-wrap gap-3">
                <NuxtLink
                  :to="localePath('certificering-safety-culture-ladder')"
                  class="inline-flex min-h-[2.75rem] py-2.5 items-center justify-center rounded-full px-6 bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors"
                >{{ $t('home.products.scl.cta') }}</NuxtLink>
                <a
                  href="#ervaar"
                  class="inline-flex min-h-[2.75rem] py-2.5 items-center justify-center rounded-full px-6 bg-white border border-warm-border text-warm-ink font-semibold hover:bg-warm-bg transition-colors"
                >{{ $t('home.products.experience') }}</a>
              </div>
            </div>
          </article>

          <!-- RIE card -->
          <article id="rie" class="bg-white border border-warm-border rounded-2xl shadow-card p-10 flex flex-col gap-6 scroll-mt-24">
            <div class="w-12 h-12 rounded-xl bg-navy-500/10 flex items-center justify-center">
              <svg class="w-7 h-7 text-navy-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1z" /><path d="M8 5H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2" /><path d="M9 12l2 2 4-4" /><path d="M9 17h6" /></svg>
            </div>
            <h2 class="font-display text-4xl text-warm-ink font-bold leading-tight">{{ $t('home.products.rie.title') }}</h2>
            <p class="text-xl text-warm-ink font-medium leading-snug">{{ $t('home.products.rie.lead') }}</p>
            <p class="text-warm-ink/75 leading-relaxed">{{ $t('home.products.rie.body') }}</p>
            <ul class="flex flex-col gap-3 text-warm-ink/80">
              <li v-for="b in ['b1', 'b2', 'b3']" :key="b" class="flex gap-3">
                <span class="text-navy-500 font-bold flex-shrink-0">—</span>
                <span>{{ $t(`home.products.rie.${b}`) }}</span>
              </li>
            </ul>
            <div class="flex items-start gap-3 bg-warm-bg rounded-xl p-4">
              <svg class="w-5 h-5 flex-shrink-0 text-navy-500 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v6c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>
              <span class="text-sm text-warm-ink/80">{{ $t('home.products.rie.proof') }}</span>
            </div>
            <div class="mt-auto flex flex-col gap-5 pt-2">
              <p class="text-sm text-warm-gray">{{ $t('home.products.rie.price') }}</p>
              <div class="flex flex-wrap gap-3">
                <NuxtLink
                  :to="localePath('rie')"
                  class="inline-flex min-h-[2.75rem] py-2.5 items-center justify-center rounded-full px-6 bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors"
                >{{ $t('home.products.rie.cta') }}</NuxtLink>
                <a
                  href="#ervaar"
                  class="inline-flex min-h-[2.75rem] py-2.5 items-center justify-center rounded-full px-6 bg-white border border-warm-border text-warm-ink font-semibold hover:bg-warm-bg transition-colors"
                >{{ $t('home.products.experience') }}</a>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- WHAT'S POSSIBLE NOW -->
    <section class="py-24 lg:py-32 bg-white border-y border-warm-border">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-12">
        <div class="max-w-4xl flex flex-col gap-5">
          <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight">
            {{ $t('home.possible.title') }}
          </h2>
          <p class="text-xl text-warm-ink/75 leading-relaxed">{{ $t('home.possible.body') }}</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="f in featureKeys" :key="f" class="border-t-2 border-navy-500 pt-5 flex flex-col gap-2">
            <h3 class="font-display text-xl text-warm-ink font-bold">{{ $t(`home.possible.features.${f}.title`) }}</h3>
            <p class="text-warm-ink/75 leading-relaxed">{{ $t(`home.possible.features.${f}.body`) }}</p>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <p class="font-display text-2xl text-warm-ink font-bold">{{ $t('home.possible.quotesHeading') }}</p>
          <div class="grid md:grid-cols-3 gap-5">
            <figure v-for="q in quoteKeys" :key="q" class="bg-warm-bg rounded-2xl p-7 flex flex-col gap-4">
              <div class="text-xs font-bold uppercase tracking-wider text-navy-500">{{ $t(`home.possible.quotes.${q}.tag`) }}</div>
              <blockquote class="font-display text-xl text-warm-ink font-semibold leading-snug">{{ $t(`home.possible.quotes.${q}.body`) }}</blockquote>
              <figcaption class="text-sm text-warm-gray">{{ $t(`home.possible.quotes.${q}.caption`) }}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- BIG QUOTE -->
    <section class="py-28 lg:py-32 bg-warm-bg">
      <div class="mx-auto max-w-5xl px-6 lg:px-8 flex flex-col items-center gap-6 text-center">
        <svg class="w-10 h-8 text-navy-500" viewBox="0 0 40 32" fill="currentColor" aria-hidden="true"><path d="M0 32V19C0 8 6 1.5 16 0l2 4.5C11.5 6.5 8.5 10.5 8.5 16H16v16H0zm22 0V19c0-11 6-17.5 16-19l2 4.5c-6.5 2-9.5 6-9.5 11.5H38v16H22z" /></svg>
        <p class="font-display text-4xl lg:text-6xl text-warm-ink font-bold leading-tight">
          {{ $t('home.bigQuote.lead') }} <span class="text-navy-500">{{ $t('home.bigQuote.accent') }}</span>
        </p>
      </div>
    </section>

    <!-- ERVAAR HET ZELF -->
    <section id="ervaar" class="py-24 lg:py-32 bg-warm-ink text-white scroll-mt-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div class="flex flex-col gap-5">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-300 mb-1">{{ $t('home.experience.eyebrow') }}</p>
          <h2 class="font-display text-3xl lg:text-5xl text-white font-bold leading-tight">
            {{ $t('home.experience.title') }}
          </h2>
          <p class="font-display text-2xl text-navy-300 font-bold leading-snug">{{ $t('home.experience.payoff') }}</p>
          <p class="text-lg text-white/80 leading-relaxed">{{ $t('home.experience.body') }}</p>

          <div class="flex items-center gap-4 bg-white/5 rounded-full py-2.5 pl-2.5 pr-5 max-w-md mt-2">
            <button
              type="button"
              aria-label="Fragment afspelen"
              class="w-12 h-12 rounded-full bg-navy-500 flex items-center justify-center flex-shrink-0 hover:bg-navy-600 transition-colors"
            >
              <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z" /></svg>
            </button>
            <div class="flex-grow h-1 bg-white/15 rounded-full">
              <div class="w-[30%] h-1 bg-navy-300 rounded-full"></div>
            </div>
            <span class="text-sm text-white/70">0:30</span>
          </div>

          <a href="#cta" class="text-white font-semibold hover:text-navy-300 transition-colors mt-2">
            {{ $t('home.experience.cta') }} →
          </a>
        </div>

        <div class="flex flex-col gap-4">
          <div role="tablist" aria-label="Kies een voorbeeld" class="flex gap-2 bg-white/5 rounded-full p-1.5 self-start">
            <button
              type="button"
              role="tab"
              :aria-selected="activeDialog === 'scl'"
              @click="activeDialog = 'scl'"
              :class="[
                'text-sm font-semibold rounded-full px-5 py-2.5 transition-colors',
                activeDialog === 'scl' ? 'bg-white text-warm-ink' : 'text-white/75 hover:text-white'
              ]"
            >{{ $t('home.experience.tabScl') }}</button>
            <button
              type="button"
              role="tab"
              :aria-selected="activeDialog === 'rie'"
              @click="activeDialog = 'rie'"
              :class="[
                'text-sm font-semibold rounded-full px-5 py-2.5 transition-colors',
                activeDialog === 'rie' ? 'bg-white text-warm-ink' : 'text-white/75 hover:text-white'
              ]"
            >{{ $t('home.experience.tabRie') }}</button>
          </div>
          <div class="bg-white/5 rounded-2xl p-8 lg:p-9 flex flex-col gap-5 text-lg leading-snug">
            <template v-if="activeDialog === 'scl'">
              <div class="flex flex-col gap-1">
                <span class="text-xs font-bold uppercase tracking-wider text-navy-300">{{ $t('home.experience.roleAi') }}</span>
                <span class="text-white">{{ $t('home.experience.dialogScl.q1') }}</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-xs font-bold uppercase tracking-wider text-white/50">{{ $t('home.experience.roleWorker') }}</span>
                <span class="text-white/85">{{ $t('home.experience.dialogScl.a1') }}</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-xs font-bold uppercase tracking-wider text-navy-300">{{ $t('home.experience.roleAi') }}</span>
                <span class="text-white">{{ $t('home.experience.dialogScl.q2') }}</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-xs font-bold uppercase tracking-wider text-white/50">{{ $t('home.experience.roleWorker') }}</span>
                <span class="text-white/85">{{ $t('home.experience.dialogScl.a2') }}</span>
              </div>
            </template>
            <template v-else>
              <div class="flex flex-col gap-1">
                <span class="text-xs font-bold uppercase tracking-wider text-navy-300">{{ $t('home.experience.roleAi') }}</span>
                <span class="text-white">{{ $t('home.experience.dialogRie.q1') }}</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-xs font-bold uppercase tracking-wider text-white/50">{{ $t('home.experience.roleWorker') }}</span>
                <span class="text-white/85">{{ $t('home.experience.dialogRie.a1') }}</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-xs font-bold uppercase tracking-wider text-navy-300">{{ $t('home.experience.roleAi') }}</span>
                <span class="text-white">{{ $t('home.experience.dialogRie.q2') }}</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-xs font-bold uppercase tracking-wider text-white/50">{{ $t('home.experience.roleWorker') }}</span>
                <span class="text-white/85">{{ $t('home.experience.dialogRie.a2') }}</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-xs font-bold uppercase tracking-wider text-navy-300">{{ $t('home.experience.roleAi') }}</span>
                <span class="text-white">{{ $t('home.experience.dialogRie.q3') }}</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-xs font-bold uppercase tracking-wider text-white/50">{{ $t('home.experience.roleWorker') }}</span>
                <span class="text-white/85">{{ $t('home.experience.dialogRie.a3') }}</span>
              </div>
            </template>
            <p class="text-xs text-white/50">{{ $t('home.experience.exampleNote') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CASE: ENEXIS -->
    <section id="cases" class="py-24 lg:py-32 bg-white border-y border-warm-border scroll-mt-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-start">
        <div class="flex flex-col gap-5">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500">{{ $t('home.case.eyebrow') }}</p>
          <h2 class="font-display text-3xl lg:text-5xl text-warm-ink font-bold leading-tight">
            {{ $t('home.case.title') }}
          </h2>
          <p class="text-lg text-warm-ink/75 leading-relaxed">{{ $t('home.case.body') }}</p>

          <div class="flex flex-col gap-3 mt-2">
            <p class="font-bold text-warm-ink">{{ $t('home.case.resultsLabel') }}</p>
            <ul class="flex flex-col gap-3 text-warm-ink/80">
              <li v-for="r in ['r1','r2','r3','r4']" :key="r" class="flex gap-3">
                <span class="text-navy-500 font-bold flex-shrink-0">—</span>
                <span>{{ $t(`home.case.${r}`) }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <figure class="bg-warm-bg rounded-2xl p-8 flex flex-col gap-4">
            <blockquote class="font-display text-2xl text-warm-ink font-semibold leading-snug">{{ $t('home.case.quote') }}</blockquote>
            <figcaption class="text-sm text-warm-gray">{{ $t('home.case.quoteCite') }}</figcaption>
          </figure>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-warm-bg rounded-2xl p-6 flex flex-col gap-1.5">
              <span class="font-display text-4xl text-navy-500 font-bold leading-none">{{ $t('home.case.stat1Value') }}</span>
              <span class="text-sm text-warm-ink/75">{{ $t('home.case.stat1Label') }}</span>
            </div>
            <div class="bg-warm-bg rounded-2xl p-6 flex flex-col gap-1.5">
              <span class="font-display text-4xl text-navy-500 font-bold leading-none">{{ $t('home.case.stat2Value') }}</span>
              <span class="text-sm text-warm-ink/75">{{ $t('home.case.stat2Label') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- KLANTEN + PARTNERS -->
    <section class="py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div class="flex flex-col gap-10">
          <div class="flex flex-col gap-5">
            <p class="text-xs font-semibold uppercase tracking-wider text-warm-gray">{{ $t('home.partners.clientsLabel') }}</p>
            <div class="flex flex-wrap items-center gap-x-10 gap-y-6">
              <a href="https://enexis.nl" target="_blank" rel="noopener noreferrer" aria-label="Enexis">
                <img src="~/assets/images/logos/enexis_logo.svg" alt="Enexis" class="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              </a>
              <a href="https://buskerbv.nl" target="_blank" rel="noopener noreferrer" aria-label="Busker BV">
                <img src="~/assets/images/logos/busker_logo.svg" alt="Busker BV" class="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              </a>
              <div class="bg-warm-ink rounded-lg px-4 py-2.5 opacity-80 hover:opacity-100 transition-opacity">
                <img src="~/assets/images/logos/alcedo-logo.png" alt="Alcedo" class="h-7 w-auto" />
              </div>
              <div class="bg-warm-ink rounded-lg px-4 py-2.5 opacity-80 hover:opacity-100 transition-opacity">
                <img src="~/assets/images/logos/hoolwerfheiwerken_logo.svg" alt="Hoolwerf Heiwerken" class="h-7 w-auto" />
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-5">
            <p class="text-xs font-semibold uppercase tracking-wider text-warm-gray">{{ $t('home.partners.partnersLabel') }}</p>
            <div class="flex flex-wrap items-center gap-x-10 gap-y-6">
              <a href="https://www.vanhouten.nl/" target="_blank" rel="noopener noreferrer" aria-label="Van Houten en Partners">
                <img src="~/assets/images/logos/logo_van_houten_en_partners.svg" alt="Van Houten en Partners" class="h-9 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              </a>
              <a href="https://coningadviesgroep.nl" target="_blank" rel="noopener noreferrer" aria-label="Coning Adviesgroep">
                <img src="~/assets/images/logos/coning_logo.png" alt="Coning Adviesgroep" class="h-9 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              </a>
              <img src="~/assets/images/logos/improcon.svg" alt="Improcon" class="h-9 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="~/assets/images/logos/kwaliteit_in_bedrijf.webp" alt="Kwaliteit in Bedrijf" class="h-9 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <a href="https://certificeringsadvies.nl" target="_blank" rel="noopener noreferrer" aria-label="Certificeringsadvies Nederland">
                <img src="~/assets/images/logos/certificeringsadvies_nederland_logo.svg" alt="Certificeringsadvies Nederland" class="h-9 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              </a>
            </div>
          </div>

        </div>

        <div class="flex flex-col gap-5">
          <figure class="bg-white border border-warm-border rounded-2xl p-8 flex flex-col gap-4">
            <blockquote class="font-display text-2xl text-warm-ink font-semibold leading-snug">{{ $t('home.partners.t1Body') }}</blockquote>
            <figcaption class="text-sm text-warm-gray">{{ $t('home.partners.t1Cite') }}</figcaption>
          </figure>
          <figure class="bg-white border border-warm-border rounded-2xl p-8 flex flex-col gap-4">
            <blockquote class="font-display text-2xl text-warm-ink font-semibold leading-snug">{{ $t('home.partners.t2Body') }}</blockquote>
            <figcaption class="text-sm text-warm-gray">{{ $t('home.partners.t2Cite') }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- VERTROUWEN -->
    <section id="vertrouwen" class="pb-24 lg:pb-32 scroll-mt-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="bg-white border border-warm-border rounded-2xl p-10 flex flex-col gap-8">
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            <div class="flex flex-col gap-2">
              <svg class="w-6 h-6 text-navy-500 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
              <p class="font-bold text-warm-ink">{{ $t('home.trust.dpaTitle') }}</p>
              <p class="text-sm text-warm-ink/75">{{ $t('home.trust.dpaBody') }}</p>
            </div>
            <div class="flex flex-col gap-2">
              <svg class="w-6 h-6 text-navy-500 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="9" r="3" /><circle cx="17" cy="11" r="2.5" /><path d="M3 20c0-3 3-5 6-5s6 2 6 5" /><path d="M15 20c0-2 1-3.5 3-3.5s3 1.5 3 3.5" /></svg>
              <p class="font-bold text-warm-ink">{{ $t('home.trust.anonTitle') }}</p>
              <p class="text-sm text-warm-ink/75">{{ $t('home.trust.anonBody') }}</p>
            </div>
            <div class="flex flex-col gap-2">
              <svg class="w-6 h-6 text-navy-500 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M5.5 5.5l13 13" /></svg>
              <p class="font-bold text-warm-ink">{{ $t('home.trust.notrainTitle') }}</p>
              <p class="text-sm text-warm-ink/75">{{ $t('home.trust.notrainBody') }}</p>
            </div>
            <div class="flex flex-col gap-2">
              <svg class="w-6 h-6 text-navy-500 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8" /><path d="M12 16v4" /></svg>
              <p class="font-bold text-warm-ink">{{ $t('home.trust.securityTitle') }}</p>
              <p class="text-sm text-warm-ink/75">{{ $t('home.trust.securityBody') }}</p>
            </div>
          </div>
          <div class="h-px bg-warm-border"></div>
          <p class="text-sm text-warm-ink/75">{{ $t('home.trust.experts') }}</p>
        </div>
      </div>
    </section>

    <!-- CTA FORM -->
    <section id="cta" class="py-24 lg:py-32 bg-navy-500 text-white scroll-mt-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div class="flex flex-col gap-5">
          <h2 class="font-display text-3xl lg:text-5xl text-white font-bold leading-tight">
            {{ $t('home.contact.title') }}
          </h2>
          <p class="text-lg text-white/85 leading-relaxed">{{ $t('home.contact.body') }}</p>
          <ul class="flex flex-col gap-2.5 text-white/90 mt-2">
            <li v-for="b in ['b1','b2','b3']" :key="b" class="flex gap-3">
              <span class="font-bold flex-shrink-0">✓</span>
              <span>{{ $t(`home.contact.${b}`) }}</span>
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
          <input type="hidden" name="subject" value="Helpr.ai · kennismaking aanvraag" />
          <input type="hidden" name="from_name" value="Helpr.ai website" />
          <input type="hidden" name="request_type" value="home_contact" />
          <input type="checkbox" name="botcheck" class="hidden" tabindex="-1" autocomplete="off" />

          <label class="flex flex-col gap-1.5 text-sm font-semibold">
            {{ $t('home.contact.nameLabel') }}
            <input v-model="form.name" name="name" type="text" required class="font-normal px-3.5 py-3 border border-warm-border rounded-xl bg-white focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors" />
          </label>
          <label class="flex flex-col gap-1.5 text-sm font-semibold">
            {{ $t('home.contact.orgLabel') }}
            <input v-model="form.organisation" name="organisation" type="text" required class="font-normal px-3.5 py-3 border border-warm-border rounded-xl bg-white focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors" />
          </label>
          <label class="flex flex-col gap-1.5 text-sm font-semibold">
            {{ $t('home.contact.emailLabel') }}
            <input v-model="form.email" name="email" type="email" required class="font-normal px-3.5 py-3 border border-warm-border rounded-xl bg-white focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors" />
          </label>
          <label class="flex flex-col gap-1.5 text-sm font-semibold">
            {{ $t('home.contact.topicLabel') }}
            <select v-model="form.topic" name="topic" class="font-normal px-3.5 py-3 border border-warm-border rounded-xl bg-white focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors">
              <option value="scl">{{ $t('home.contact.topicScl') }}</option>
              <option value="rie">{{ $t('home.contact.topicRie') }}</option>
              <option value="both">{{ $t('home.contact.topicBoth') }}</option>
            </select>
          </label>
          <button
            type="submit"
            :disabled="submitting || submitted"
            class="self-start inline-flex items-center justify-center rounded-full px-7 py-3.5 bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors disabled:opacity-60"
          >
            <span v-if="submitting">{{ $t('home.contact.submitting') }}</span>
            <span v-else-if="submitted">{{ $t('home.contact.submitted') }}</span>
            <span v-else>{{ $t('home.contact.submit') }}</span>
          </button>
          <p v-if="submitError" class="text-sm text-red-600">{{ $t('home.contact.error') }}</p>
          <p v-else class="text-sm text-warm-gray">{{ $t('home.contact.disclaimer') }}</p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { t } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()

const featureKeys = ['wide', 'rich', 'fast', 'control'] as const
const quoteKeys = ['q1', 'q2', 'q3'] as const

const activeDialog = ref<'scl' | 'rie'>('scl')

useHead(() => ({
  title: t('home.meta.title'),
  meta: [
    { name: 'description', content: t('home.meta.description') }
  ]
}))

const form = ref({ name: '', organisation: '', email: '', topic: 'scl' })
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
