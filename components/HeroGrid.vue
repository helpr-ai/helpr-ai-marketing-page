<template>
  <PhotoGrid
    :photos="photos"
    :cols="8"
    :rows="5"
    :is-present="isPresent"
    single-flip
    magnify-on-flip
  />
</template>

<script setup lang="ts">
const { locale } = useI18n({ useScope: 'global' })

const photoModules = import.meta.glob(
  '~/assets/images/hero-tiles/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, query: '?url', import: 'default' }
)

const translations: Record<string, { nl: string; en: string }> = {
  assets: { nl: 'Bedrijfsmiddelen', en: 'Assets' },
  audit: { nl: 'Audit', en: 'Audit' },
  context: { nl: 'Context', en: 'Context' },
  controls: { nl: 'Beheersmaatregelen', en: 'Controls' },
  customer_satisfaction: { nl: 'Klanttevredenheid', en: 'Customer satisfaction' },
  environmental_impact: { nl: 'Milieu-impact', en: 'Environmental impact' },
  external_stakeholders: { nl: 'Externe stakeholders', en: 'External stakeholders' },
  hazard: { nl: 'Gevaar', en: 'Hazard' },
  internal_stakeholders: { nl: 'Interne stakeholders', en: 'Internal stakeholders' },
  internal_issues: { nl: 'Interne kwesties', en: 'Internal issues' },
  external_issues: { nl: 'Externe kwesties', en: 'External issues' },
  knowledge: { nl: 'Kennis', en: 'Knowledge' },
  kpi: { nl: 'KPI', en: 'KPI' },
  objective: { nl: 'Doelstelling', en: 'Objective' },
  opportunity: { nl: 'Kans', en: 'Opportunity' },
  process: { nl: 'Proces', en: 'Process' },
  risk: { nl: 'Risico', en: 'Risk' },
  threat: { nl: 'Bedreiging', en: 'Threat' },
  // Common future terms — translated upfront so adding a matching file gives a proper label
  policy: { nl: 'Beleid', en: 'Policy' },
  procedure: { nl: 'Procedure', en: 'Procedure' },
  documentation: { nl: 'Documentatie', en: 'Documentation' },
  training: { nl: 'Training', en: 'Training' },
  compliance: { nl: 'Naleving', en: 'Compliance' },
  nonconformity: { nl: 'Afwijking', en: 'Nonconformity' },
  improvement: { nl: 'Verbetering', en: 'Improvement' },
  corrective_action: { nl: 'Corrigerende maatregel', en: 'Corrective action' },
  management_review: { nl: 'Management review', en: 'Management review' },
  scope: { nl: 'Scope', en: 'Scope' },
  leadership: { nl: 'Leiderschap', en: 'Leadership' },
  competence: { nl: 'Competentie', en: 'Competence' },
  competencies: { nl: 'Competenties', en: 'Competencies' },
  communication: { nl: 'Communicatie', en: 'Communication' },
  information_security: { nl: 'Informatiebeveiliging', en: 'Information security' }
}

const titleCase = (s: string) =>
  s.replace(/_/g, ' ').replace(/\b\p{L}/gu, c => c.toUpperCase())

const lang = (locale.value === 'en' ? 'en' : 'nl') as 'nl' | 'en'

const photos = Object.entries(photoModules).map(([path, url]) => {
  const file = path.split('/').pop() ?? ''
  const key = file.replace(/\.[^.]+$/, '').toLowerCase()
  const entry = translations[key]
  const label = entry?.[lang] ?? titleCase(key)
  return { url: url as string, label }
})

// Arrow shape: solid 6-wide block, then column of 3 (vertically centered), then 1 (centered)
const isPresent = (col: number, row: number) => {
  if (col < 6) return true
  if (col === 6) return row >= 1 && row <= 3
  if (col === 7) return row === 2
  return false
}
</script>
