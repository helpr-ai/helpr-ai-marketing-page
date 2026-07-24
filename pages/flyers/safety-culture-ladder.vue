<template>
  <div class="flyer-page bg-warm-ink min-h-screen py-10 px-4 print:p-0 print:bg-white print:min-h-0">
    <div class="mx-auto max-w-[110mm] print:max-w-none flex flex-col items-center gap-10 print:gap-0">
      <!-- ============ FRONT ============ -->
      <section class="flyer-side bg-warm-bg shadow-2xl print:shadow-none overflow-hidden relative">
        <!-- Top: logo + deadline pill -->
        <div class="flex items-start justify-between px-6 pt-6">
          <img
            src="~/assets/images/logos/helpr-ai-logo_ai_transparant_vector.svg"
            alt="Helpr.ai"
            class="h-8 w-auto"
          />
          <span class="text-[9px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-amber-100 text-gold-600 border border-amber-200">
            Verplicht vanaf 1 juli 2026
          </span>
        </div>

        <!-- Hero block -->
        <div class="px-6 mt-5">
          <p class="font-display text-[12px] font-bold uppercase tracking-wider text-navy-500 mb-2 leading-tight">Hét certificaat dat grote opdrachtgevers vereisen</p>
          <h1 class="font-display text-[32px] leading-[1.02] text-warm-ink font-bold tracking-tight">
            Safety Culture<br />Ladder
          </h1>
          <p class="font-display text-[15px] text-warm-ink/75 leading-snug mt-3">
            Volledig ontzorgd.<br />
            Snel, efficiënt, minimale moeite.
          </p>
          <p class="text-[10.5px] text-warm-ink/65 leading-snug mt-2.5">
            Goedkoper dan SCL Light.
          </p>
        </div>

        <!-- Photo -->
        <div class="px-6 mt-4">
          <div class="aspect-[5/3] w-full overflow-hidden rounded-lg border border-warm-border">
            <img
              src="~/assets/images/scl.png"
              alt="Safety Culture Ladder"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Selling points -->
        <div class="px-6 mt-4 space-y-2">
          <div v-for="pt in sellingPoints" :key="pt.title" class="flex items-start gap-2">
            <svg viewBox="0 0 9 5" fill="currentColor" class="flex-shrink-0 w-3 h-auto text-navy-500 mt-[5px]">
              <path d="M0 0 L6 0 L9 2.5 L6 5 L0 5 Z" />
            </svg>
            <div>
              <p class="font-display text-[12px] font-bold text-warm-ink leading-tight">{{ pt.title }}</p>
              <p class="text-[10px] text-warm-ink/65 leading-snug">{{ pt.body }}</p>
            </div>
          </div>
        </div>

        <!-- Price callout -->
        <div class="px-6 mt-4">
          <div class="flex items-start gap-3">
            <svg viewBox="0 0 9 5" fill="currentColor" class="flex-shrink-0 w-9 h-auto text-navy-500 mt-2">
              <path d="M0 0 L6 0 L9 2.5 L6 5 L0 5 Z" />
            </svg>
            <div>
              <p class="font-display text-[36px] text-navy-500 font-bold leading-none">€1499</p>
              <p class="text-[10px] text-warm-ink/65 mt-1">vanaf Trede 3 · andere treden en certificeringen op de website</p>
            </div>
          </div>
        </div>

        <!-- Bottom hook + URL -->
        <div class="absolute left-0 right-0 bottom-0 px-6 pb-5 pt-3 bg-navy-500 text-white">
          <div class="flex items-end justify-between gap-3">
            <div>
              <p class="font-display text-[13px] font-bold leading-tight">
                Vandaag aanmelden,<br />vandaag aan de slag.
              </p>
              <p class="text-[11px] text-white/75 mt-1.5 font-mono">helpr.ai/certificering</p>
            </div>
            <img
              src="~/assets/images/logos/helpr-ai-logo_ai_transparant_vector.svg"
              alt="Helpr.ai"
              class="h-4 w-auto brightness-0 invert opacity-90 flex-shrink-0"
            />
          </div>
        </div>
      </section>

      <!-- ============ BACK ============ -->
      <section class="flyer-side bg-warm-bg shadow-2xl print:shadow-none overflow-hidden relative">
        <!-- Top intro: wat is SCL -->
        <div class="px-6 pt-6">
          <p class="text-[10px] font-semibold uppercase tracking-wider text-navy-500 mb-2">Wat is de Safety Culture Ladder?</p>
          <p class="text-[10.5px] text-warm-ink/80 leading-snug">
            De Safety Culture Ladder meet hoe veiligheid écht is ingebed in je organisatie. Niet de regels op papier, maar het gedrag op de werkvloer. <span class="font-semibold text-warm-ink">Vanaf 1 juli 2026 is Trede 3 verplicht</span> voor aanbestedingen in bouw en infra: geen Trede 3, geen aanbesteding. Het traject raakt elke laag van je bedrijf, daarom werk je met een <span class="font-semibold text-warm-ink">gekwalificeerde SCL-adviseur</span> die de regie houdt en de kwaliteit bewaakt. Wij combineren die expertise met onze expertise van AI om je goedkoper en sneller klaar te stomen voor de audit.
          </p>
        </div>

        <!-- AI interviews -->
        <div class="px-6 mt-4 py-4 border-y border-warm-border">
          <p class="text-[10px] font-semibold uppercase tracking-wider text-navy-500 mb-2">Onze AI-interviews</p>
          <p class="text-[10.5px] text-warm-ink/80 leading-snug">
            Onze AI voert <span class="font-semibold text-warm-ink">natuurlijke gesprekken</span> met management en medewerkers, op een moment dat het hen uitkomt. Slechts <span class="font-semibold text-warm-ink">15 tot 20 minuten per persoon</span> en <span class="font-semibold text-warm-ink">anoniem</span>. Geen vragenlijsten met onbegrijpelijke teksten. Je collega's zijn er minimaal tijd aan kwijt, en jij krijgt een eerlijk en volledig beeld van je veiligheidscultuur.
          </p>
        </div>

        <!-- 6 stappen -->
        <div class="px-6 mt-4">
          <p class="text-[10px] font-semibold uppercase tracking-wider text-navy-500 mb-1">Het traject in 6 stappen</p>
          <p class="text-[10px] text-warm-ink/65 mb-2 leading-snug">Wij analyseren, adviseren en sturen. De verbeteringen — training en implementatie — voer je zelf door.</p>
          <ol class="space-y-1">
            <li v-for="(step, i) in steps" :key="step" class="relative flex items-center gap-2.5">
              <div class="relative flex-shrink-0">
                <span class="inline-flex w-[18px] h-[18px] rounded-full bg-navy-500 text-white text-[10px] font-display font-bold tabular-nums items-center justify-center leading-none pt-[0.5px]">{{ i + 1 }}</span>
                <span v-if="i < steps.length - 1" class="absolute left-1/2 -translate-x-1/2 top-full w-px h-1 bg-warm-border" aria-hidden="true"></span>
              </div>
              <span class="text-[10.5px] text-warm-ink/85 leading-snug">{{ step }}</span>
            </li>
          </ol>
        </div>

        <!-- Bold CTA block -->
        <div class="mx-6 mt-5 bg-warm-ink text-white rounded-lg px-5 py-3.5 flex items-center justify-between gap-4">
          <div>
            <p class="text-[10px] font-semibold uppercase tracking-wider text-amber-300 mb-1">Begin vandaag</p>
            <p class="font-display text-[19px] font-bold leading-tight">Veiliger werken,<br />meer opdrachten.</p>
            <p class="text-[10.5px] text-white/80 leading-snug mt-2">
              Een veilige cultuur is voor iedereen beter. Aanmelden in 5 minuten.
            </p>
          </div>
          <svg
            viewBox="0 0 24 24"
            class="flex-shrink-0 w-14 h-14 text-amber-300"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2 L4 5 v7 c0 5 3.5 8.5 8 10 c4.5-1.5 8-5 8-10 V5 L12 2z" />
            <path d="M8.5 12.5 L11 15 L15.5 9.5" />
          </svg>
        </div>

        <!-- Bottom CTA + logo -->
        <div class="absolute left-0 right-0 bottom-0 px-6 pb-5 pt-3 bg-navy-500 text-white">
          <div class="flex items-end justify-between gap-3">
            <div>
              <p class="text-[9px] font-semibold uppercase tracking-wider text-amber-300 mb-0.5">Meld je aan</p>
              <p class="font-display text-[14px] font-bold leading-tight">helpr.ai/<wbr />certificering</p>
              <p class="text-[9px] text-white/65 mt-1">info{{ '@' }}helpr.ai</p>
            </div>
            <img
              src="~/assets/images/logos/helpr-ai-logo_ai_transparant_vector.svg"
              alt="Helpr.ai"
              class="h-4 w-auto brightness-0 invert opacity-90 flex-shrink-0"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

useHead({
  title: 'Flyer · Safety Culture Ladder · Helpr.ai',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

const sellingPoints = [
  {
    title: 'Volledig ontzorgd',
    body: 'Een gekwalificeerde SCL-adviseur stuurt het analysetraject van intake tot audit. Implementatie en training voer je zelf door.'
  },
  {
    title: 'Snel en efficiënt',
    body: 'Aanmelden en gelijk aan de slag. Geen wachten op planningen.'
  },
  {
    title: 'Minimale moeite voor je team',
    body: '15 tot 20 minuten per medewerker, wanneer het hen uitkomt.'
  }
]

const steps = [
  'Online intake met adviseur',
  'Nulmeting via AI-interviews',
  'Tredebepaling',
  'Gap-analyse',
  'Eindrapport inclusief actiepunten',
  'Adviesgesprek en auditvoorbereiding met adviseur'
]

</script>

<style scoped>
.flyer-side {
  width: 99mm;
  height: 210mm;
  flex-shrink: 0;
}

@media print {
  .flyer-page {
    padding: 0 !important;
    background: white !important;
  }
  .flyer-side {
    box-shadow: none !important;
    page-break-after: always;
    break-after: page;
  }
  .flyer-side:last-child {
    page-break-after: auto;
    break-after: auto;
  }
}

@page {
  size: 99mm 210mm;
  margin: 0;
}
</style>
