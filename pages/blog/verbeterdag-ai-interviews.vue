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

    <!-- HERO IMAGE -->
    <section class="pb-14">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        <img
          src="~/assets/images/blog/6-10-26_Nationale-Verbeterdag_Oktober-2026_Fort-Voordorp177_Coen-Koppen-Fotografie.jpeg"
          alt="Nationale Verbeterdag 2026 — Fort Voordorp"
          class="w-full aspect-[16/9] object-cover rounded-2xl shadow-card"
        />
        <p class="mt-3 text-xs text-warm-gray">Foto's: Coen Koppen Fotografie — Nationale Verbeterdag 2026, Fort Voordorp</p>
      </div>
    </section>

    <!-- INTRO -->
    <section class="pb-16">
      <div class="mx-auto max-w-3xl px-6 lg:px-8 flex flex-col gap-5 text-lg text-warm-ink/85 leading-relaxed">
        <p>Wie een dag organiseert over continu verbeteren, wil zelf ook weten wat er beter kan. Daarom koos de Nationale Verbeterdag na de editie van 6 oktober 2026 in Fort Voordorp voor een nieuwe aanpak: geen evaluatieformulier met vinkjes, maar een echt gesprek met bezoekers. Dat gesprek werd gevoerd door de AI-interviewer van Helpr.ai.</p>
        <p>Het resultaat is niet alleen een cijfer, maar het verhaal erachter. Wat maakt de dag waardevol? Waar willen bezoekers meer van? En wat staat er op hun wensenlijst voor de volgende editie?</p>
      </div>
    </section>

    <!-- STATS -->
    <section class="pb-16">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        <div class="bg-warm-ink text-white rounded-2xl p-8 lg:p-12 flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <p class="text-xs font-semibold uppercase tracking-wider text-navy-300">Kerncijfers · AI-feedbackgesprekken Nationale Verbeterdag</p>
            <p class="font-display text-3xl lg:text-5xl text-white font-bold leading-tight">
              In totaal <span class="text-navy-300">466 inzichten</span> door de AI-feedbackgesprekken over de Nationale Verbeterdag.
            </p>
          </div>
          <dl class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-white/15">
            <div class="flex flex-col gap-1.5">
              <dt class="font-display text-4xl text-navy-300 font-bold leading-none tabular-nums">187</dt>
              <dd class="text-sm text-white/80">complimenten (wat goed ging)</dd>
            </div>
            <div class="flex flex-col gap-1.5">
              <dt class="font-display text-4xl text-navy-300 font-bold leading-none tabular-nums">117</dt>
              <dd class="text-sm text-white/80">verbeterpunten, waarvan 92 direct uitvoerbaar</dd>
            </div>
            <div class="flex flex-col gap-1.5">
              <dt class="font-display text-4xl text-navy-300 font-bold leading-none tabular-nums">103</dt>
              <dd class="text-sm text-white/80">reacties op sessies</dd>
            </div>
            <div class="flex flex-col gap-1.5">
              <dt class="font-display text-4xl text-navy-300 font-bold leading-none tabular-nums">59</dt>
              <dd class="text-sm text-white/80">ideeën voor de volgende editie</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- QUOTE 1 -->
    <section class="pb-16">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        <figure class="relative bg-white rounded-2xl p-10 lg:p-12 shadow-card overflow-hidden">
          <span aria-hidden="true" class="pointer-events-none absolute -top-6 -left-2 font-display text-[10rem] leading-none text-navy-500/10 select-none">„</span>
          <blockquote class="relative font-display text-xl lg:text-2xl text-warm-ink font-semibold leading-snug mb-4">
            „Het feedbackrapport is uitstekend en zeer werkbaar voor ons. Het doorvragen door AI is zeer waardevol en niet te benaderen als je een schriftelijke vragenlijst stuurt. Enquêteren 2.0!"
          </blockquote>
          <figcaption class="relative text-sm text-warm-ink/70">Hugo van der Horst, Alcedo Media</figcaption>
        </figure>
      </div>
    </section>

    <!-- VAN FORMULIER NAAR GESPREK -->
    <section class="py-16 bg-white border-y border-warm-border">
      <div class="mx-auto max-w-3xl px-6 lg:px-8 flex flex-col gap-6">
        <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight">Van formulier naar gesprek</h2>
        <p class="text-lg text-warm-ink/85 leading-relaxed">Een evaluatieformulier vertelt hoe hoog het cijfer is, maar zelden het waarom. Juist dat wilden Alcedo Media en Kwaliteit in Bedrijf, de organisatoren van de Verbeterdag, weten. Helpr.ai was partner van deze editie en zette daarvoor haar AI-interviews in.</p>
        <ol class="flex flex-col gap-6 mt-2 counter-reset-blog">
          <li v-for="(step, i) in formulierSteps" :key="step.title" class="flex gap-5">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-navy-500 text-white font-display font-bold flex items-center justify-center">{{ i + 1 }}</div>
            <div class="flex flex-col gap-1.5">
              <h3 class="font-display text-xl text-warm-ink font-bold">{{ step.title }}</h3>
              <p class="text-warm-ink/80 leading-relaxed">{{ step.body }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- WAT MAAKT AI-VOICE INTERVIEW BETER -->
    <section class="py-16 lg:py-20">
      <div class="mx-auto max-w-3xl px-6 lg:px-8 flex flex-col gap-6">
        <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight">Wat maakt een AI-voice interview beter?</h2>
        <p class="text-lg text-warm-ink/85 leading-relaxed">Bij een AI-voice interview voeren deelnemers op een natuurlijke manier een gesprek, op hun telefoon of laptop en op een moment dat het hen uitkomt. Er zijn geen beperkende antwoordopties: iedereen vertelt het verhaal in eigen woorden, desgewenst in de eigen taal. De interviewer denkt mee, vat samen en checkt of hij het goed begrepen heeft, zodat ook een warrig verhaal helder op papier komt. Bij een vaag antwoord of een opvallend cijfer vraagt hij door, maar hij houdt zich aan de gesprekslijn, zodat de uitkomsten vergelijkbaar blijven. Zo krijgt elk gesprek de diepgang van een interview, terwijl alle deelnemers tegelijk kunnen meedoen en de organisatie geen gesprekken hoeft te plannen of uit te werken.</p>
      </div>
    </section>

    <!-- MID IMAGE -->
    <section class="pb-16">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <img
          src="~/assets/images/blog/6-10-26_Nationale-Verbeterdag_Oktober-2026_Fort-Voordorp101_Coen-Koppen-Fotografie.jpg"
          alt="Nationale Verbeterdag 2026 — Fort Voordorp"
          class="w-full aspect-[3/2] object-cover rounded-2xl shadow-card"
        />
      </div>
    </section>

    <!-- WAT ER ACHTER HET CIJFER ZIT -->
    <section class="py-16 bg-white border-y border-warm-border">
      <div class="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col gap-8">
        <div class="max-w-3xl flex flex-col gap-4">
          <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight">Wat er achter het cijfer zit</h2>
          <p class="text-lg text-warm-ink/85 leading-relaxed">De gesprekken lieten zien wat een formulier nooit had opgehaald. Vier inzichten springen eruit.</p>
        </div>
        <div class="grid sm:grid-cols-2 gap-5">
          <div v-for="(insight, i) in insights" :key="insight.title" class="bg-warm-bg rounded-2xl p-6 flex flex-col gap-2">
            <div class="w-9 h-9 rounded-full bg-navy-500 text-white font-display font-bold flex items-center justify-center text-sm">{{ i + 1 }}</div>
            <h3 class="font-display text-xl text-warm-ink font-bold leading-snug">{{ insight.title }}</h3>
            <p class="text-warm-ink/80 leading-relaxed">{{ insight.body }}</p>
          </div>
        </div>
        <p class="text-lg text-warm-ink/85 leading-relaxed max-w-3xl">
          Alles samen leverde de organisatoren een rapport op met <strong class="text-warm-ink font-semibold">elf concrete aanbevelingen</strong> om de volgende editie nog sterker te maken, de meeste met weinig inspanning uit te voeren.
        </p>
      </div>
    </section>

    <!-- QUOTE 2 -->
    <section class="py-16">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        <figure class="relative bg-white rounded-2xl p-10 lg:p-12 shadow-card overflow-hidden">
          <span aria-hidden="true" class="pointer-events-none absolute -top-6 -left-2 font-display text-[10rem] leading-none text-navy-500/10 select-none">„</span>
          <blockquote class="relative font-display text-xl lg:text-2xl text-warm-ink font-semibold leading-snug mb-4">
            „Hiermee kun je met veel mensen een diepte-interview houden. Daar kom je verder mee dan met een gemiddelde vragenlijst."
          </blockquote>
          <figcaption class="relative text-sm text-warm-ink/70">Bezoeker en geënquêteerde van de Nationale Verbeterdag</figcaption>
        </figure>
      </div>
    </section>

    <!-- OOK ONZE AANPAK KAN BETER -->
    <section class="py-16 bg-white border-y border-warm-border">
      <div class="mx-auto max-w-3xl px-6 lg:px-8 flex flex-col gap-6">
        <h2 class="font-display text-3xl lg:text-4xl text-warm-ink font-bold leading-tight">Ook onze aanpak kan beter</h2>
        <p class="text-lg text-warm-ink/85 leading-relaxed">Een case over verbeteren is pas compleet als we ook naar onszelf kijken. Wie meedeed, was enthousiast. Bij een volgende editie willen we dat nog veel meer bezoekers die ervaring krijgen. Daarom gaan we de volgende dingen verbeteren:</p>
        <ol class="flex flex-col gap-5 mt-1">
          <li v-for="(item, i) in improvements" :key="item.title" class="flex gap-5">
            <div class="flex-shrink-0 w-9 h-9 rounded-full bg-warm-bg border border-warm-border text-warm-ink font-display font-bold flex items-center justify-center text-sm">{{ i + 1 }}</div>
            <div class="flex flex-col gap-1">
              <h3 class="font-display text-lg text-warm-ink font-bold">{{ item.title }}</h3>
              <p class="text-warm-ink/80 leading-relaxed">{{ item.body }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- OVER -->
    <section class="py-16">
      <div class="mx-auto max-w-3xl px-6 lg:px-8 flex flex-col gap-5">
        <h2 class="font-display text-2xl lg:text-3xl text-warm-ink font-bold leading-tight">Over de Nationale Verbeterdag en Helpr.ai</h2>
        <p class="text-warm-ink/80 leading-relaxed">
          <strong class="text-warm-ink">Nationale Verbeterdag.</strong>
          De Nationale Verbeterdag brengt kwaliteitsprofessionals samen voor kennissessies, workshops en een netwerkmarkt. De dag wordt georganiseerd door Alcedo Media en Kwaliteit in Bedrijf.
        </p>
        <p class="text-warm-ink/80 leading-relaxed">
          <strong class="text-warm-ink">Helpr.ai.</strong>
          Helpr.ai haalt kennis en ervaringen van mensen op met AI-interviews en zet die om in bruikbare inzichten. Organisaties zetten het onder meer in voor evaluaties, de Safety Culture Ladder, de RI&amp;E en ISO-trajecten. Meer weten of zelf ervaren hoe zo'n gesprek voelt?
          <NuxtLink :to="localePath('index')" class="text-navy-500 font-semibold hover:text-navy-600">Kijk op helpr.ai →</NuxtLink>
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 lg:py-24 bg-navy-500 text-white">
      <div class="mx-auto max-w-3xl px-6 lg:px-8 text-center flex flex-col gap-5 items-center">
        <h2 class="font-display text-3xl lg:text-4xl font-bold leading-tight">
          Zelf ervaren wat een AI-interview oplevert?
        </h2>
        <p class="text-lg text-white/85 leading-relaxed max-w-2xl">
          In twintig minuten laten we zien hoe een interview werkt en wat eruit komt.
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
const post = bySlug('verbeterdag-ai-interviews')!

const formulierSteps = [
  {
    title: 'Een uitnodiging na afloop.',
    body: 'Bezoekers kregen per mail een link naar een kort gesprek, te voeren op telefoon of laptop, op een moment dat hen uitkwam.'
  },
  {
    title: 'Gewoon vertellen.',
    body: 'Bezoekers vertelden in eigen woorden, taal en snelheid hoe ze de dag hadden ervaren.'
  },
  {
    title: 'Doorvragen waar het ertoe doet.',
    body: 'De AI-voice interviewer vroeg door op elk antwoord: waarom dit cijfer, wat maakte het goed, welke sessie precies? Hij kende alle 24 sessies van het programma en koppelde 93 van de 103 sessievermeldingen al tijdens het gesprek aan de juiste sessie.'
  },
  {
    title: 'Direct bruikbare uitkomsten.',
    body: 'Helpr.ai bundelde alle gesprekken tot een geanonimiseerd rapport met inzichten en aanbevelingen, plus de volledige data om zelf verder mee te werken.'
  }
]

const insights = [
  {
    title: 'De basis staat als een huis.',
    body: 'Twee derde van de bezoekers noemde uit zichzelf de organisatie, meer dan de helft de locatie en de helft de catering. Niet omdat ernaar gevraagd werd, maar omdat ze het kwijt wilden. Ook de app en de ontvangst aan de balie kregen spontaan lof.'
  },
  {
    title: 'Interactie maakt het verschil.',
    body: 'De hoogst gewaardeerde sessies waren workshops waarin bezoekers zelf aan de slag gingen. Precies daar willen bezoekers meer van: oefenen, praktijkcasussen bespreken en met vakgenoten in gesprek gaan.'
  },
  {
    title: 'Bezoekers denken mee over de volgende editie.',
    body: 'Samen kwamen ze met 59 ideeën. AI in het kwaliteitsvak is het meest gevraagde onderwerp, daarnaast gedrag en psychologie van verbeteren en kwaliteitscultuur in de praktijk. Ook sprekers boden aan mee te denken over het programma.'
  },
  {
    title: 'Een blik op het vakgebied.',
    body: 'De gesprekken laten ook zien wat er speelt onder kwaliteitsprofessionals: de verschuiving van controleren en terugkijken naar preventief en vooruit denken, en kwaliteitscultuur als groeiend thema met de nieuwe ISO 9001.'
  }
]

const improvements = [
  {
    title: 'Bezoekers meenemen in de nieuwe vorm.',
    body: 'Vooraf beter uitleggen wat een AI-interview is, hoe lang het duurt en wat er met de antwoorden gebeurt.'
  },
  {
    title: 'De drempel verlagen.',
    body: 'Eén klik vanuit de uitnodiging naar het gesprek, met een duidelijke tijdsindicatie.'
  },
  {
    title: 'Een uitnodiging die bij het event past.',
    body: 'In de huisstijl van de Nationale Verbeterdag en met een herkenbare link, zodat bezoekers zonder aarzelen doorklikken.'
  }
]

useHead(() => ({
  title: `${post.title} · Helpr.ai`,
  meta: [
    { name: 'description', content: post.subtitle }
  ]
}))
</script>
