<template>
  <article>
    <!-- HEADER -->
    <section class="relative pt-32 pb-10 lg:pt-40 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-br from-navy-50 via-white to-warm-bg opacity-60 blur-3xl"></div>
      </div>
      <div class="mx-auto max-w-3xl px-6 lg:px-8 flex flex-col gap-5">
        <NuxtLink :to="localePath('blog')" class="text-sm font-semibold text-warm-ink/60 hover:text-warm-ink inline-flex items-center gap-1 w-fit">
          ← {{ $t('blog.back') }}
        </NuxtLink>
        <p class="text-sm font-semibold uppercase tracking-wider text-navy-500">{{ post.tag }}</p>
        <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl text-warm-ink font-bold leading-[1.1]">
          {{ post.title }}
        </h1>
        <p class="font-display text-xl lg:text-2xl text-navy-500 font-semibold leading-snug">
          {{ post.subtitle }}
        </p>
        <p class="text-sm text-warm-gray">{{ post.dateDisplay }} · {{ post.readTime }}</p>
      </div>
    </section>

    <!-- LOGO CARD -->
    <section class="pb-14">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        <div class="bg-warm-bg rounded-2xl p-10 flex items-center justify-center">
          <img src="/images/blog/enexis_logo.svg" alt="Enexis" class="h-16 w-auto" />
        </div>
      </div>
    </section>

    <!-- INTRO -->
    <section class="pb-16">
      <div class="mx-auto max-w-3xl px-6 lg:px-8 flex flex-col gap-5 text-lg text-warm-ink/85 leading-relaxed">
        <p>Enexis is gecertificeerd op trede 4 van de Safety Culture Ladder (SCL) en wil de huidige veiligheidscultuur verder versterken en bestendigen. Om inzicht te krijgen in waar verdere verbeteringen mogelijk zijn, worden onder meer interne audits uitgevoerd. Het doel hiervan is niet alleen om vast te stellen op welke trede een vestiging zich bevindt, maar vooral om te begrijpen hoe veiligheidscultuur er in de dagelijkse praktijk uitziet en welke concrete verbeterkansen er zijn.</p>
        <p>De audits leveren niet alleen een score op, maar vooral het verhaal achter de score. Dat biedt houvast om per vestiging het gesprek te voeren over herkenbare situaties voor monteurs, werkvoorbereiders en teammanagers. Op basis van praktijkvoorbeelden kunnen vervolgens gerichte verbeteracties worden gekozen.</p>
      </div>
    </section>

    <!-- RESULTATEN -->
    <section class="py-16 bg-white border-y border-warm-border">
      <div class="mx-auto max-w-3xl px-6 lg:px-8 flex flex-col gap-8">
        <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight">De resultaten</h2>

        <figure class="relative bg-warm-bg rounded-2xl p-8 lg:p-10 overflow-hidden">
          <span aria-hidden="true" class="pointer-events-none absolute -top-6 -left-2 font-display text-[10rem] leading-none text-navy-500/10 select-none">„</span>
          <blockquote class="relative font-display text-xl lg:text-2xl text-warm-ink font-semibold leading-snug mb-4">
            „We zijn gestart met een pilot op drie vestigingen. Een belangrijk doel van de pilot was om te onderzoeken hoe medewerkers die dagelijks in de praktijk werkzaam zijn, de inzet van AI ervaren. De resultaten van de pilot waren zeer positief."
          </blockquote>
          <figcaption class="relative flex items-center gap-4 text-sm text-warm-ink/70">
            <img src="/images/blog/enexis_logo.svg" alt="Enexis" class="h-7 w-auto" />
            <span>Mirjam Kop, Directeur HSEQ Enexis Groep</span>
          </figcaption>
        </figure>

        <div class="flex flex-col gap-5 text-lg text-warm-ink/85 leading-relaxed">
          <p>De Helpr-methode — hoogwaardige AI-interviews voor de interne audit — maakte het mogelijk om binnen een relatief korte doorlooptijd van gemiddeld twee tot drie weken per vestiging zowel breed als diepgaand inzicht te verkrijgen in de veiligheidscultuur. Door een representatieve steekproef van zowel management als medewerkers ontstaat een betrouwbaar beeld van hoe veiligheid wordt beleefd en toegepast in de dagelijkse praktijk.</p>
          <p>De inzet van AI levert hierbij niet alleen kwalitatief sterke inzichten op, maar zorgt ook voor een aanzienlijke tijdsbesparing voor het auditteam. Hierdoor kan het auditteam minder tijd besteden aan het uitvoeren van interviews en meer tijd investeren in het valideren van de resultaten, het voeren van verdiepende gesprekken en het ondersteunen van vestigingen bij het verder versterken van hun veiligheidscultuur.</p>
          <p>Het resultaat gaat daarmee verder dan een score alleen. De rapportages maken zichtbaar wat al goed gaat en waar verbeteringen mogelijk zijn. Bijvoorbeeld waar het melden van veiligheidsincidenten vastloopt, waarom terugkoppeling op meldingen achterwege blijft of waar leidinggevenden juist een positieve invloed hebben op veilig gedrag. Hierdoor ontstaat een breder en dieper beeld van de huidige veiligheidscultuur en de verbetermogelijkheden die er binnen een vestiging bestaan.</p>
          <p>Na een positieve evaluatie van de pilot heeft Enexis de aanpak omarmd en uitgebreid naar alle vestigingen en afdelingen.</p>
        </div>
      </div>
    </section>

    <!-- HOE ZIET DIT TRAJECT ER UIT -->
    <section class="py-16 lg:py-20">
      <div class="mx-auto max-w-3xl px-6 lg:px-8 flex flex-col gap-5 text-lg text-warm-ink/85 leading-relaxed">
        <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight mb-1">Hoe ziet dit traject er in de praktijk uit?</h2>
        <p>Per vestiging verliep het proces als volgt:</p>
        <ol class="list-decimal list-outside pl-6 flex flex-col gap-4 marker:font-semibold marker:text-navy-500">
          <li v-for="step in trajectSteps" :key="step.title" class="pl-2">
            <strong class="text-warm-ink font-semibold">{{ step.title }}</strong> <span class="text-warm-ink/60">({{ step.duration }})</span>.
            <span>{{ step.body }}</span>
          </li>
        </ol>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 lg:py-24 bg-navy-500 text-white">
      <div class="mx-auto max-w-3xl px-6 lg:px-8 text-center flex flex-col gap-5 items-center">
        <h2 class="font-display text-3xl lg:text-4xl font-bold leading-tight">
          Ook meer inzicht in jouw veiligheidscultuur?
        </h2>
        <p class="text-lg text-white/85 leading-relaxed max-w-2xl">
          In twintig minuten laten we zien hoe een AI-interview werkt en wat eruit komt.
        </p>
        <NuxtLink
          :to="localePath('index') + '#cta'"
          class="inline-flex min-h-[3rem] py-3 items-center justify-center rounded-full px-7 bg-white text-navy-500 font-semibold hover:bg-warm-bg transition-colors shadow-card mt-2"
        >
          Plan een kennismaking →
        </NuxtLink>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()
const { bySlug } = useBlogPosts()
const post = bySlug('enexis-safety-culture-ladder')!

const trajectSteps = [
  {
    title: 'Voorbereiding met de HSE-coördinator',
    duration: '15-30 minuten',
    body: 'Samen bereiden we de kick-off voor. Daarnaast voert de HSE-coördinator een kort "organisatieprofiel interview" uit, om relevante context te vangen voor het vervolg.'
  },
  {
    title: 'Online kick-off',
    duration: '30 minuten',
    body: 'In een korte online sessie wordt toegelicht waarom de SCL belangrijk is, hoe het AI-interview werkt en wat er met de antwoorden gebeurt. Ook is er ruimte voor vragen.'
  },
  {
    title: 'AI-interviews',
    duration: '20-30 minuten per deelnemer',
    body: 'Deelnemers ontvangen een link naar hun persoonlijke interview en kunnen dit op een zelfgekozen moment uitvoeren. Het interview behandelt alle relevante SCL-thema\'s en vraagt waar nodig door. Hierdoor ontstaat rijke en eerlijke informatie vanuit de werkvloer.'
  },
  {
    title: 'Rapportage',
    duration: 'binnen één werkdag',
    body: 'Binnen één werkdag na afronding van de interviews levert Helpr een uitgebreid SCL-rapport op. Met scores per subthema, onderbouwingen, praktijkvoorbeelden, gedragsdoelstellingen en concrete verbeteracties.'
  }
]

useHead(() => ({
  title: `${post.title} · Helpr.ai`,
  meta: [
    { name: 'description', content: post.subtitle }
  ]
}))
</script>
