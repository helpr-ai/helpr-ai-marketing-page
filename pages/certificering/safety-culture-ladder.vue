<template>
  <div>
    <!-- HERO -->
    <section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-br from-navy-50 via-white to-warm-bg opacity-60 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div class="flex flex-col gap-6">
            <p class="text-sm font-semibold uppercase tracking-wider text-navy-500">{{ $t('scl.hero.eyebrow') }}</p>
            <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl text-warm-ink font-bold leading-[1.02]">
              {{ $t('scl.hero.title') }}
            </h1>
            <p class="text-lg text-warm-ink/75 leading-relaxed max-w-xl">{{ $t('scl.hero.body') }}</p>
            <div class="flex flex-wrap gap-3 mt-2">
              <a href="#tryit" class="inline-flex min-h-[3rem] py-3 items-center justify-center rounded-full px-7 bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors shadow-card">
                {{ $t('scl.hero.ctaPrimary') }}
              </a>
              <a href="#cta" class="inline-flex min-h-[3rem] py-3 items-center justify-center rounded-full px-7 bg-white border border-warm-border text-warm-ink font-semibold hover:bg-warm-bg transition-colors">
                {{ $t('scl.hero.ctaSecondary') }}
              </a>
            </div>
            <p class="text-sm text-warm-ink/70 mt-1">{{ $t('scl.hero.proof') }}</p>
          </div>

          <!-- Audio clip card -->
          <a
            :href="$t('scl.hero.youtubeUrl')"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-warm-ink text-white rounded-2xl p-6 lg:p-8 flex flex-col gap-5 hover:bg-warm-ink/90 transition-colors"
          >
            <div class="flex items-center justify-between text-sm">
              <span class="text-white/70">{{ $t('scl.hero.clipLabel') }}</span>
              <span class="text-navy-300 font-semibold group-hover:translate-x-0.5 transition-transform">{{ $t('scl.hero.clipPlatform') }} →</span>
            </div>
            <div class="flex items-center gap-4">
              <svg viewBox="0 0 200 48" class="flex-1 h-10" aria-hidden="true">
                <g fill="currentColor" class="text-navy-300">
                  <rect x="0" y="18" width="3" height="12" rx="1.5"/>
                  <rect x="6" y="14" width="3" height="20" rx="1.5"/>
                  <rect x="12" y="8" width="3" height="32" rx="1.5"/>
                  <rect x="18" y="12" width="3" height="24" rx="1.5"/>
                  <rect x="24" y="6" width="3" height="36" rx="1.5"/>
                  <rect x="30" y="16" width="3" height="16" rx="1.5"/>
                  <rect x="36" y="10" width="3" height="28" rx="1.5"/>
                  <rect x="42" y="18" width="3" height="12" rx="1.5"/>
                  <rect x="48" y="4" width="3" height="40" rx="1.5"/>
                  <rect x="54" y="14" width="3" height="20" rx="1.5"/>
                  <rect x="60" y="8" width="3" height="32" rx="1.5"/>
                  <rect x="66" y="16" width="3" height="16" rx="1.5"/>
                  <rect x="72" y="12" width="3" height="24" rx="1.5"/>
                </g>
                <circle cx="100" cy="24" r="18" fill="#0A66C2"/>
                <path d="M94 15l12 9-12 9z" fill="white"/>
                <g fill="currentColor" class="text-white/25">
                  <rect x="130" y="14" width="3" height="20" rx="1.5"/>
                  <rect x="136" y="18" width="3" height="12" rx="1.5"/>
                  <rect x="142" y="10" width="3" height="28" rx="1.5"/>
                  <rect x="148" y="16" width="3" height="16" rx="1.5"/>
                  <rect x="154" y="8" width="3" height="32" rx="1.5"/>
                  <rect x="160" y="14" width="3" height="20" rx="1.5"/>
                  <rect x="166" y="18" width="3" height="12" rx="1.5"/>
                  <rect x="172" y="12" width="3" height="24" rx="1.5"/>
                  <rect x="178" y="16" width="3" height="16" rx="1.5"/>
                  <rect x="184" y="20" width="3" height="8" rx="1.5"/>
                  <rect x="190" y="18" width="3" height="12" rx="1.5"/>
                  <rect x="196" y="20" width="3" height="8" rx="1.5"/>
                </g>
              </svg>
            </div>
            <div class="flex flex-col gap-2">
              <p class="font-display text-xl text-white font-semibold leading-snug">{{ $t('scl.hero.clipQuestion') }}</p>
              <p class="text-white/80">{{ $t('scl.hero.clipAnswer') }}</p>
            </div>
            <p class="text-xs text-white/50 mt-1">{{ $t('scl.hero.clipCaption') }}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- STATS STRIP -->
    <!-- F07/F08: cijferrij uitgezet tot nieuwe cijfers geleverd worden. Flip SHOW_STATS = true wanneer de cijfers en bijbehorende locale-keys weer kloppen. -->
    <section class="bg-white border-y border-warm-border py-14 lg:py-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-10">
        <div class="flex flex-wrap items-center gap-x-14 gap-y-8">
          <img src="/images/blog/enexis_logo.svg" alt="Enexis" class="h-9 w-auto opacity-90" />
          <img src="~/assets/images/logos/busker_logo.svg" alt="Busker BV" class="h-7 w-auto opacity-90" />
          <div class="bg-warm-ink rounded-lg px-4 py-2.5">
            <img src="~/assets/images/logos/hoolwerfheiwerken_logo.svg" alt="Hoolwerf Heiwerken" class="h-7 w-auto" />
          </div>
          <img src="~/assets/images/logos/certificeringsadvies_nederland_logo.svg" alt="Certificeringsadvies Nederland" class="h-9 w-auto opacity-90" />
          <img src="~/assets/images/logos/coning_logo.png" alt="Coning Adviesgroep" class="h-9 w-auto opacity-90" />
          <img src="~/assets/images/logos/vink_logo.svg" alt="Vink" class="h-9 w-auto opacity-90" />
        </div>
        <template v-if="SHOW_STATS">
          <div class="h-px bg-warm-border"></div>
          <div class="grid sm:grid-cols-3 gap-10">
            <div v-for="s in statKeys" :key="s" class="flex flex-col gap-2">
              <p class="font-display text-5xl lg:text-6xl text-warm-ink font-bold leading-none">
                <span v-if="s === 's1'">
                  3 <span class="text-navy-500">→</span> 17
                </span>
                <span v-else>{{ $t(`scl.stats.${s}Value`) }}</span>
              </p>
              <p class="text-warm-ink/75 max-w-xs">{{ $t(`scl.stats.${s}Label`) }}</p>
            </div>
          </div>
          <p class="text-xs text-warm-gray">{{ $t('scl.stats.source') }}</p>
        </template>
      </div>
    </section>

    <!-- COMPARE -->
    <section class="py-24 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-12">
        <div class="grid lg:grid-cols-2 gap-10 items-start">
          <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight">
            {{ $t('scl.compare.titleLine1') }}<br />
            {{ $t('scl.compare.titleLine2') }}
          </h2>
          <p class="text-lg text-warm-ink/75 leading-relaxed">{{ $t('scl.compare.body') }}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <!-- Vragenlijst card -->
          <div class="bg-white border border-warm-border rounded-2xl p-8 flex flex-col gap-6">
            <p class="text-xs font-bold uppercase tracking-wider text-navy-500">{{ $t('scl.compare.questionnaireTag') }}</p>
            <p class="font-display text-xl text-warm-ink font-semibold leading-snug">{{ $t('scl.compare.questionnaireQuestion') }}</p>
            <div class="flex items-center justify-between gap-2 mt-auto pt-2">
              <div class="w-4 h-4 rounded-full border-2 border-warm-border"></div>
              <div class="w-4 h-4 rounded-full border-2 border-warm-border"></div>
              <div class="w-4 h-4 rounded-full border-2 border-warm-border"></div>
              <div class="w-4 h-4 rounded-full bg-warm-ink border-2 border-warm-ink"></div>
              <div class="w-4 h-4 rounded-full border-2 border-warm-border"></div>
            </div>
            <div class="flex items-center justify-between text-xs text-warm-ink/70">
              <span>{{ $t('scl.compare.questionnaireMin') }}</span>
              <span>{{ $t('scl.compare.questionnaireMax') }}</span>
            </div>
            <p class="pt-5 border-t border-warm-border text-sm text-warm-ink/70">{{ $t('scl.compare.questionnaireOutcome') }}</p>
          </div>

          <!-- Gesprek card -->
          <div class="bg-warm-ink text-white rounded-2xl p-8 flex flex-col gap-4">
            <p class="text-xs font-bold uppercase tracking-wider text-navy-300">{{ $t('scl.compare.dialogTag') }}</p>
            <div class="flex flex-col gap-3">
              <div class="self-start bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                <p class="text-sm text-white">{{ $t('scl.compare.dialogQ1') }}</p>
              </div>
              <div class="self-end bg-white text-warm-ink rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                <p class="text-sm">{{ $t('scl.compare.dialogA1') }}</p>
              </div>
              <div class="self-start bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                <p class="text-sm text-white">{{ $t('scl.compare.dialogQ2') }}</p>
              </div>
              <div class="self-end bg-white text-warm-ink rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                <p class="text-sm">{{ $t('scl.compare.dialogA2') }}</p>
              </div>
            </div>
            <p class="pt-5 mt-auto border-t border-white/15 text-sm text-white/70">{{ $t('scl.compare.dialogOutcome') }}</p>
          </div>
        </div>

        <blockquote class="font-display text-xl lg:text-2xl text-warm-ink font-semibold leading-snug max-w-4xl">
          {{ $t('scl.compare.quote2') }}
        </blockquote>
      </div>
    </section>

    <!-- TRYIT -->
    <section id="tryit" class="py-24 lg:py-28 bg-navy-500 text-white scroll-mt-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div class="flex flex-col gap-5">
          <h2 class="font-display text-4xl lg:text-5xl font-bold leading-tight">{{ $t('scl.tryit.title') }}</h2>
          <p class="text-lg text-white/85 leading-relaxed">{{ $t('scl.tryit.body') }}</p>
          <a href="#" class="inline-flex items-center gap-2 text-white font-semibold hover:text-navy-300 mt-2 w-fit">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>
            {{ $t('scl.tryit.videoLink') }}
          </a>
        </div>
        <!--
          F16 TODO: wanneer Erik de NEN-contextinterview-URL aanlevert, vervang dit formulier
          door een directe link (of redirect na submit) naar dat interview. Voorlopig blijft dit
          een e-mail-opt-in via web3forms zodat aanvragen binnenkomen.
        -->
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          @submit.prevent="onTryit"
          class="bg-white text-warm-ink rounded-2xl p-7 flex flex-col gap-4"
        >
          <input type="hidden" name="access_key" value="5a88dd82-d433-4aed-aff0-7edd637ce315" />
          <input type="hidden" name="subject" value="Helpr.ai · SCL proefinterview aanvraag" />
          <input type="hidden" name="from_name" value="Helpr.ai website" />
          <input type="hidden" name="request_type" value="scl_tryit" />
          <input type="checkbox" name="botcheck" class="hidden" tabindex="-1" autocomplete="off" />
          <p class="font-display text-xl text-warm-ink font-bold">{{ $t('scl.tryit.formTitle') }}</p>
          <label class="flex flex-col gap-1.5 text-sm font-semibold">
            {{ $t('scl.tryit.emailLabel') }}
            <input v-model="tryitEmail" name="email" type="email" required :placeholder="$t('scl.tryit.emailPlaceholder')" class="font-normal px-3.5 py-3 border border-warm-border rounded-xl bg-white focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 transition-colors" />
          </label>
          <button
            type="submit"
            :disabled="tryitSubmitting || tryitSubmitted"
            class="rounded-full px-6 py-3.5 bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors disabled:opacity-60"
          >
            <span v-if="tryitSubmitting">{{ $t('scl.tryit.submitting') }}</span>
            <span v-else-if="tryitSubmitted">{{ $t('scl.tryit.submitted') }}</span>
            <span v-else>{{ $t('scl.tryit.submit') }}</span>
          </button>
          <p v-if="tryitError" class="text-xs text-red-600">{{ $t('scl.tryit.error') }}</p>
          <p v-else class="text-xs text-warm-gray flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3"/></svg>
            {{ $t('scl.tryit.micNote') }}
          </p>
        </form>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="py-24 lg:py-28 bg-white border-y border-warm-border">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-12">
        <div class="max-w-3xl flex flex-col gap-4">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500">{{ $t('scl.howItWorks.eyebrow') }}</p>
          <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight">{{ $t('scl.howItWorks.title') }}</h2>
        </div>
        <div class="relative">
          <div class="hidden md:block absolute top-5 left-5 right-5 h-px bg-warm-border"></div>
          <div class="grid md:grid-cols-5 gap-8 md:gap-5 relative">
            <div v-for="(step, i) in howSteps" :key="step" class="flex flex-col gap-3">
              <div class="w-10 h-10 rounded-full bg-warm-ink text-white font-display font-bold text-sm flex items-center justify-center relative z-10">{{ i + 1 }}</div>
              <p class="font-display text-lg text-warm-ink font-bold">{{ $t(`scl.howItWorks.${step}.title`) }}</p>
              <p class="text-sm text-warm-ink/75 leading-relaxed">{{ $t(`scl.howItWorks.${step}.body`) }}</p>
              <p v-if="$t(`scl.howItWorks.${step}.duration`)" class="text-sm font-semibold text-navy-500">{{ $t(`scl.howItWorks.${step}.duration`) }}</p>
            </div>
          </div>
        </div>
        <p class="font-semibold text-warm-ink">{{ $t('scl.howItWorks.footnote') }}</p>
      </div>
    </section>

    <!-- REPORT -->
    <section class="py-24 lg:py-28 bg-warm-bg">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div class="flex flex-col gap-6">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500">{{ $t('scl.report.eyebrow') }}</p>
          <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight">{{ $t('scl.report.title') }}</h2>
          <dl class="flex flex-col gap-5 mt-2">
            <div v-for="item in reportItems" :key="item" class="flex flex-col gap-1">
              <dt class="font-semibold text-warm-ink">{{ $t(`scl.report.${item}.title`) }}</dt>
              <dd class="text-warm-ink/75">{{ $t(`scl.report.${item}.body`) }}</dd>
            </div>
          </dl>
          <a href="#tryit" class="inline-flex items-center justify-center rounded-full px-6 py-3 border border-warm-border bg-white text-warm-ink font-semibold hover:bg-warm-bg transition-colors w-fit mt-2">
            {{ $t('scl.report.cta') }}
          </a>
        </div>

        <!-- Mock report -->
        <div class="bg-white rounded-2xl shadow-card p-6 lg:p-8 flex flex-col gap-5">
          <div class="flex items-start justify-between gap-3">
            <div>
              <p class="font-display text-xl text-warm-ink font-bold">{{ $t('scl.report.mockTitle') }}</p>
              <p class="text-sm text-warm-ink/70">{{ $t('scl.report.mockSubtitle') }}</p>
            </div>
            <span class="text-xs font-semibold bg-amber-100 text-amber-800 rounded-full px-3 py-1">{{ $t('scl.report.mockBadge') }}</span>
          </div>
          <div class="h-px bg-warm-border"></div>
          <div class="flex flex-col gap-1">
            <p class="text-xs font-bold uppercase tracking-wider text-warm-gray">{{ $t('scl.report.mockSummaryLabel') }}</p>
            <p class="text-sm text-warm-ink leading-relaxed">{{ $t('scl.report.mockSummary') }}</p>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <p class="text-xs font-bold uppercase tracking-wider text-warm-gray">{{ $t('scl.report.mockIndicationLabel') }}</p>
              <div class="flex items-center gap-3 text-xs">
                <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>{{ $t('scl.report.mockLegendManagement') }}</span>
                <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-navy-500"></span>{{ $t('scl.report.mockLegendEmployees') }}</span>
              </div>
            </div>
            <div class="grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-x-3 text-xs">
              <p class="text-warm-gray">{{ $t('scl.report.mockTrede') }}</p>
              <div class="grid grid-cols-5 text-warm-gray text-center">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
              </div>
            </div>
            <div v-for="row in themeRows" :key="row.key" class="grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-x-3 items-center">
              <p class="text-sm text-warm-ink" :class="{ 'font-semibold': row.key === 'Leren' }">{{ $t(`scl.report.mockGroup${row.key}`) }}</p>
              <div class="relative h-6">
                <div class="absolute inset-y-1/2 left-0 right-0 h-px bg-warm-border/60 -translate-y-1/2"></div>
                <div class="absolute inset-y-1/2 h-0.5 bg-navy-500/30 -translate-y-1/2" :style="`left: ${row.minPct}%; right: ${100 - row.maxPct}%`"></div>
                <div class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-navy-500" :style="`left: ${row.employees}%`"></div>
                <div class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-500" :style="`left: ${row.management}%`"></div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-1 mt-1">
            <p class="text-xs font-bold uppercase tracking-wider text-warm-gray">{{ $t('scl.report.mockQuoteLabel') }}</p>
            <p class="font-display text-base text-warm-ink font-semibold leading-snug">{{ $t('scl.report.mockQuote') }}</p>
          </div>
          <div class="grid sm:grid-cols-2 gap-5 pt-3 border-t border-warm-border">
            <div class="flex flex-col gap-1">
              <p class="text-xs font-bold uppercase tracking-wider text-warm-gray">{{ $t('scl.report.mockGapLabel') }}</p>
              <p class="text-sm text-warm-ink/80 leading-relaxed">{{ $t('scl.report.mockGap') }}</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-xs font-bold uppercase tracking-wider text-warm-gray">{{ $t('scl.report.mockActionLabel') }}</p>
              <p class="text-sm text-warm-ink/80 leading-relaxed">{{ $t('scl.report.mockAction') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROLE -->
    <section class="py-24 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-10">
        <div class="max-w-3xl flex flex-col gap-4">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500">{{ $t('scl.role.eyebrow') }}</p>
          <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight">
            {{ $t('scl.role.titleLine1') }}<br />
            {{ $t('scl.role.titleLine2') }}
          </h2>
        </div>
        <div class="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4">
          <div class="bg-navy-500 text-white rounded-2xl p-6 flex flex-col gap-2.5">
            <p class="text-xs font-bold uppercase tracking-wider text-navy-300">{{ $t('scl.role.helprLabel') }}</p>
            <p class="font-display text-xl font-bold">{{ $t('scl.role.helprTitle') }}</p>
            <p class="text-sm text-white/85 leading-relaxed">{{ $t('scl.role.helprBody') }}</p>
          </div>
          <div class="hidden md:flex items-center justify-center text-warm-gray">→</div>
          <div class="bg-white border border-warm-border rounded-2xl p-6 flex flex-col gap-2.5">
            <p class="text-xs font-bold uppercase tracking-wider text-warm-gray">{{ $t('scl.role.verifyLabel') }}</p>
            <p class="font-display text-xl text-warm-ink font-bold">{{ $t('scl.role.verifyTitle') }}</p>
            <p class="text-sm text-warm-ink/75 leading-relaxed">{{ $t('scl.role.verifyBody') }}</p>
          </div>
          <div class="hidden md:flex items-center justify-center text-warm-gray">→</div>
          <div class="bg-warm-ink text-white rounded-2xl p-6 flex flex-col gap-2.5">
            <p class="text-xs font-bold uppercase tracking-wider text-navy-300">{{ $t('scl.role.auditLabel') }}</p>
            <p class="font-display text-xl font-bold">{{ $t('scl.role.auditTitle') }}</p>
            <p class="text-sm text-white/85 leading-relaxed">{{ $t('scl.role.auditBody') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PRODUCTS TABLE -->
    <section class="py-24 lg:py-28 bg-warm-bg">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-10">
        <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight">{{ $t('scl.products.title') }}</h2>
        <div class="overflow-x-auto bg-white rounded-2xl border border-warm-border shadow-card">
          <table class="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr class="bg-warm-bg text-left">
                <th class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-warm-gray">{{ $t('scl.products.colProduct') }}</th>
                <th class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-warm-gray">{{ $t('scl.products.colOutcome') }}</th>
                <th class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-warm-gray">{{ $t('scl.products.colAudit') }}</th>
                <th class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-warm-gray">{{ $t('scl.products.colQuestionnaire') }}</th>
                <th class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-warm-gray">{{ $t('scl.products.colRole') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in productRows" :key="row.key" class="border-t border-warm-border align-top">
                <td class="px-5 py-5">
                  <p class="font-bold text-warm-ink">{{ $t(`scl.products.${row.key}Name`) }}</p>
                  <p v-if="row.hasSub" class="text-xs text-warm-ink/60 mt-1">{{ $t(`scl.products.${row.key}NameSub`) }}</p>
                </td>
                <td class="px-5 py-5 text-warm-ink/80">{{ $t(`scl.products.${row.key}Outcome`) }}</td>
                <td class="px-5 py-5 text-warm-ink/80">{{ $t(`scl.products.${row.key}Audit`) }}</td>
                <td class="px-5 py-5 text-warm-ink/80">{{ $t(`scl.products.${row.key}Questionnaire`) }}</td>
                <td class="px-5 py-5">
                  <span v-if="row.core" class="inline-flex items-center px-2 py-0.5 rounded-full bg-navy-500 text-white text-xs font-semibold uppercase tracking-wider mb-1.5">{{ $t('scl.products.coreTag') }}</span>
                  <p class="text-warm-ink/80">{{ $t(`scl.products.${row.key}Role`) }}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-warm-ink/70 max-w-3xl">{{ $t('scl.products.note') }}</p>
      </div>
    </section>

    <!-- TRUST -->
    <section class="py-24 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-10">
        <div class="max-w-3xl flex flex-col gap-4">
          <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight">{{ $t('scl.trust.title') }}</h2>
          <p class="text-lg text-warm-ink/75 leading-relaxed">{{ $t('scl.trust.body') }}</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-5 border-t border-warm-border">
          <div v-for="item in trustItems" :key="item" class="flex flex-col gap-2">
            <p class="font-display text-xl text-warm-ink font-bold">{{ $t(`scl.trust.${item}Title`) }}</p>
            <p class="text-warm-ink/75 leading-relaxed">{{ $t(`scl.trust.${item}Body`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FLOOR / WERKVLOER -->
    <section class="py-24 lg:py-28 bg-warm-bg">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-10">
        <div class="max-w-3xl flex flex-col gap-4">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500">{{ $t('scl.floor.eyebrow') }}</p>
          <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight">{{ $t('scl.floor.title') }}</h2>
          <p class="text-lg text-warm-ink/80 leading-relaxed">{{ $t('scl.floor.body1') }}</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-5 border-t border-warm-border">
          <div v-for="item in floorItems" :key="item" class="flex flex-col gap-2">
            <p class="font-display text-xl text-warm-ink font-bold">{{ $t(`scl.floor.items.${item}.title`) }}</p>
            <p class="text-warm-ink/75 leading-relaxed">{{ $t(`scl.floor.items.${item}.body`) }}</p>
          </div>
        </div>
        <p class="text-lg text-warm-ink/80 leading-relaxed max-w-3xl">{{ $t('scl.floor.body2') }}</p>
        <div class="bg-white rounded-2xl p-6 lg:p-8 shadow-card flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 max-w-3xl">
          <p class="font-display text-5xl lg:text-6xl text-navy-500 font-bold leading-none flex-shrink-0">{{ $t('scl.floor.statValue') }}</p>
          <p class="text-warm-ink/80">{{ $t('scl.floor.statLabel') }}</p>
        </div>
      </div>
    </section>

    <!-- CASE ENEXIS -->
    <section class="py-24 lg:py-28 bg-warm-ink text-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14">
        <div class="flex flex-col gap-6">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-300">{{ $t('scl.case.eyebrow') }}</p>
          <blockquote class="font-display text-2xl lg:text-4xl text-white font-bold leading-snug">{{ $t('scl.case.quote') }}</blockquote>
          <div class="flex items-center gap-4 mt-2">
            <img src="/images/blog/enexis_logo.svg" alt="Enexis" class="h-10 w-auto" />
            <div>
              <p class="font-semibold text-white">{{ $t('scl.case.cite') }}</p>
              <p class="text-sm text-white/70">{{ $t('scl.case.citeRole') }}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-1.5">
            <p class="text-xs font-bold uppercase tracking-wider text-white/60">{{ $t('scl.case.situationLabel') }}</p>
            <p class="text-white/85 leading-relaxed">{{ $t('scl.case.situation') }}</p>
          </div>
          <div class="flex flex-col gap-1.5">
            <p class="text-xs font-bold uppercase tracking-wider text-white/60">{{ $t('scl.case.resultLabel') }}</p>
            <p class="text-white/85 leading-relaxed">{{ $t('scl.case.result') }}</p>
          </div>
          <NuxtLink
            :to="localePath({ name: 'blog-enexis-safety-culture-ladder' as any })"
            class="inline-flex items-center justify-center rounded-full px-5 py-2.5 border border-white/25 text-white font-semibold hover:bg-white/10 transition-colors w-fit mt-2"
          >
            {{ $t('scl.case.cta') }} →
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- PRICE -->
    <section class="py-24 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div class="flex flex-col gap-5">
          <p class="text-sm font-semibold uppercase tracking-wider text-navy-500">{{ $t('scl.price.eyebrow') }}</p>
          <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight">{{ $t('scl.price.title') }}</h2>
          <p class="text-lg text-warm-ink/75 leading-relaxed">{{ $t('scl.price.body') }}</p>
        </div>
        <div class="bg-white rounded-2xl border border-warm-border shadow-card p-8 flex flex-col gap-5">
          <div class="flex flex-col gap-1">
            <p class="font-display text-5xl lg:text-6xl text-warm-ink font-bold leading-none">{{ $t('scl.price.amount') }}</p>
            <p class="text-warm-ink/75">{{ $t('scl.price.unit') }}</p>
          </div>
          <ul class="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            <li v-for="i in ['inc1', 'inc2', 'inc3', 'inc4']" :key="i" class="flex items-center gap-2 text-warm-ink/85">
              <svg class="w-4 h-4 text-navy-500 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
              <span>{{ $t(`scl.price.${i}`) }}</span>
            </li>
          </ul>
          <div class="flex flex-col gap-2 pt-4 border-t border-warm-border text-sm">
            <div class="flex justify-between items-baseline">
              <span class="text-warm-ink/80">{{ $t('scl.price.extraLabel') }}</span>
              <span class="font-semibold text-warm-ink">{{ $t('scl.price.extraValue') }}</span>
            </div>
            <div class="flex justify-between items-baseline">
              <span class="text-warm-ink/80">{{ $t('scl.price.pilotLabel') }}</span>
              <span class="font-semibold text-warm-ink">{{ $t('scl.price.pilotValue') }}</span>
            </div>
          </div>
          <div class="flex items-center gap-4 pt-2">
            <a href="#cta" class="inline-flex items-center justify-center rounded-full px-6 py-3 bg-navy-500 text-white font-semibold hover:bg-navy-600 transition-colors">{{ $t('scl.price.cta') }}</a>
            <span class="text-xs text-warm-gray">{{ $t('scl.price.vat') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PRIVACY -->
    <section class="py-20 bg-white border-y border-warm-border">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-8">
        <h2 class="font-display text-2xl lg:text-3xl text-warm-ink font-bold">{{ $t('scl.privacy.title') }}</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="item in privacyItems" :key="item" class="flex flex-col gap-2">
            <p class="font-bold text-warm-ink">{{ $t(`scl.privacy.${item}Title`) }}</p>
            <p class="text-sm text-warm-ink/75">{{ $t(`scl.privacy.${item}Body`) }}</p>
          </div>
        </div>
        <a href="mailto:info@helpr.ai?subject=Vraag%20over%20privacy" class="text-navy-500 font-semibold hover:text-navy-600 w-fit">{{ $t('scl.privacy.link') }} →</a>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24 lg:py-28 bg-warm-bg">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-10 lg:gap-14 items-start">
        <h2 class="font-display text-4xl lg:text-5xl text-warm-ink font-bold leading-tight">{{ $t('scl.faq.title') }}</h2>
        <div class="flex flex-col">
          <details v-for="item in faqItems" :key="item" class="group border-t border-warm-border last:border-b py-5">
            <summary class="flex justify-between items-start gap-4 cursor-pointer list-none">
              <span class="font-display text-lg text-warm-ink font-semibold">{{ $t(`scl.faq.items.${item}.q`) }}</span>
              <svg class="w-5 h-5 flex-shrink-0 text-warm-gray transition-transform group-open:rotate-180 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <p class="mt-3 text-warm-ink/80 leading-relaxed">{{ $t(`scl.faq.items.${item}.a`) }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="cta" class="py-24 lg:py-28 bg-navy-500 text-white scroll-mt-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div class="flex flex-col gap-5">
          <h2 class="font-display text-4xl lg:text-5xl font-bold leading-tight">{{ $t('scl.cta.title') }}</h2>
          <div class="flex flex-wrap gap-3 mt-2">
            <a href="#tryit" class="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white text-navy-500 font-semibold hover:bg-warm-bg transition-colors">{{ $t('scl.cta.ctaPrimary') }}</a>
            <a href="mailto:info@helpr.ai?subject=Plan%20een%20gesprek" class="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">{{ $t('scl.cta.ctaSecondary') }}</a>
          </div>
        </div>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="bg-white text-warm-ink rounded-2xl p-6 flex flex-col gap-3">
            <div class="w-14 h-14 rounded-full bg-warm-bg border border-warm-border flex items-center justify-center text-warm-gray">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
            <div>
              <p class="font-bold text-warm-ink">{{ $t('scl.cta.jaapName') }}</p>
              <p class="text-sm text-warm-ink/70">{{ $t('scl.cta.jaapRole') }}</p>
            </div>
            <div class="flex flex-col gap-1 text-sm">
              <a :href="$t('scl.cta.jaapPhoneHref')" class="text-navy-500 font-semibold hover:text-navy-600">{{ $t('scl.cta.jaapPhone') }}</a>
              <a :href="$t('scl.cta.jaapEmailHref')" class="text-navy-500 font-semibold hover:text-navy-600">{{ $t('scl.cta.jaapEmail') }}</a>
            </div>
          </div>
          <div class="bg-white text-warm-ink rounded-2xl p-6 flex flex-col gap-3">
            <div class="w-14 h-14 rounded-full bg-warm-bg border border-warm-border flex items-center justify-center text-warm-gray">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
            <div>
              <p class="font-bold text-warm-ink">{{ $t('scl.cta.jorienName') }}</p>
              <p class="text-sm text-warm-ink/70">{{ $t('scl.cta.jorienRole') }}</p>
            </div>
            <div class="flex flex-col gap-1 text-sm">
              <a :href="$t('scl.cta.jorienPhoneHref')" class="text-navy-500 font-semibold hover:text-navy-600">{{ $t('scl.cta.jorienPhone') }}</a>
              <a :href="$t('scl.cta.jorienEmailHref')" class="text-navy-500 font-semibold hover:text-navy-600">{{ $t('scl.cta.jorienEmail') }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const { t } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()

// F08: zet op true zodra Jaap nieuwe cijfers aanlevert en de scl.stats-keys zijn bijgewerkt.
const SHOW_STATS = false

const statKeys = ['s1', 's2', 's3'] as const
const howSteps = ['context', 'kickoff', 'interviews', 'report', 'improve'] as const
const reportItems = ['summary', 'indication', 'diff', 'examples', 'gap', 'actions'] as const
const trustItems = ['sample', 'scoring', 'lang', 'control'] as const
const floorItems = ['language', 'languages', 'moment', 'examples'] as const
const privacyItems = ['voice', 'access', 'training', 'dpa'] as const
const faqItems = ['what', 'replaceAudit', 'whichProduct', 'timePerPerson', 'sample', 'indication', 'reading', 'accessibility', 'limits', 'methodHistory', 'voiceStored', 'managerSee', 'dpa'] as const

const productRows = [
  { key: 'original', core: true, hasSub: false },
  { key: 'scl', core: true, hasSub: false },
  { key: 'light', core: false, hasSub: false },
  { key: 'lightSmall', core: false, hasSub: true },
  { key: 'self', core: false, hasSub: false }
] as const

// Positions on the 1-5 trede scale, as percentages (0% = trede 1, 100% = trede 5).
// 4 segments of 25% each; trede 1 = 0, trede 2 = 25, trede 3 = 50, trede 4 = 75, trede 5 = 100.
const themeRows = [
  { key: 'Beleid', management: 80, employees: 70, minPct: 70, maxPct: 80 },
  { key: 'Kennis', management: 70, employees: 73, minPct: 70, maxPct: 73 },
  { key: 'Processen', management: 78, employees: 70, minPct: 70, maxPct: 78 },
  { key: 'Samenwerken', management: 50, employees: 40, minPct: 40, maxPct: 50 },
  { key: 'Leren', management: 80, employees: 48, minPct: 48, maxPct: 80 }
]

const faqJsonLd = computed(() => JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(k => ({
    '@type': 'Question',
    name: t(`scl.faq.items.${k}.q`),
    acceptedAnswer: { '@type': 'Answer', text: t(`scl.faq.items.${k}.a`) }
  }))
}))

useHead(() => ({
  title: t('scl.meta.title'),
  meta: [
    { name: 'description', content: t('scl.meta.description') }
  ],
  script: [
    { type: 'application/ld+json', innerHTML: faqJsonLd.value }
  ]
}))

const tryitEmail = ref('')
const tryitSubmitted = ref(false)
const tryitSubmitting = ref(false)
const tryitError = ref(false)

const onTryit = async (e: Event) => {
  const target = e.target as HTMLFormElement
  tryitSubmitting.value = true
  tryitError.value = false
  try {
    const data = new FormData(target)
    const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
    const json = await res.json().catch(() => null)
    if (res.ok && json?.success) tryitSubmitted.value = true
    else tryitError.value = true
  } catch {
    tryitError.value = true
  } finally {
    tryitSubmitting.value = false
  }
}
</script>
