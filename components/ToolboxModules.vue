<template>
  <div>
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

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      <div
        v-for="module in visibleModules"
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

      <NuxtLink
        v-if="hiddenCount > 0"
        :to="localePath('product-toolbox')"
        class="group flex flex-col items-start justify-between p-4 bg-navy-500 text-white rounded-xl hover:bg-navy-600 transition-colors"
      >
        <div>
          <div class="font-display text-2xl font-bold leading-none mb-1">+{{ hiddenCount }}</div>
          <div class="text-sm font-semibold text-white/85 leading-snug">{{ $t('toolbox.viewMore') }}</div>
        </div>
        <span class="mt-3 inline-flex items-center text-sm font-semibold group-hover:translate-x-0.5 transition-transform">
          {{ $t('toolbox.viewAll') }}
          <svg class="ml-1 h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const props = withDefaults(defineProps<{ limit?: number; random?: boolean }>(), { limit: 0, random: false })

const localePath = useLocalePath()

const categories = [
  { id: 'all' },
  { id: 'co2' },
  { id: 'iso9001' },
  { id: 'iso14001' },
  { id: 'iso27001' },
  { id: 'iso42001' },
  { id: 'scl' },
  { id: 'analyses' }
]

type ModuleStatus = 'live' | 'beta' | 'soon'
interface Module { id: string; category: string; status: ModuleStatus }

const modules: Module[] = [
  // CO₂-Prestatieladder v4.0 — Trede 1
  { id: 'co2T1Interview', category: 'co2', status: 'live' },
  { id: 'co2T1Organization', category: 'co2', status: 'live' },
  { id: 'co2T1EnergyFlows', category: 'co2', status: 'live' },
  { id: 'co2T1Reduction', category: 'co2', status: 'live' },
  { id: 'co2T1Communication', category: 'co2', status: 'live' },
  { id: 'co2T1Knowledge', category: 'co2', status: 'live' },

  // CO₂-Prestatieladder v4.0 — Trede 2
  { id: 'co2T2Basics', category: 'co2', status: 'live' },
  { id: 'co2T2Energy12', category: 'co2', status: 'live' },
  { id: 'co2T2Scope3Common', category: 'co2', status: 'live' },
  { id: 'co2T2Scope3Other', category: 'co2', status: 'live' },
  { id: 'co2T2Obe', category: 'co2', status: 'live' },
  { id: 'co2T2Impact', category: 'co2', status: 'live' },
  { id: 'co2T2ValueChain', category: 'co2', status: 'live' },
  { id: 'co2T2ReductionPlan', category: 'co2', status: 'live' },
  { id: 'co2T2Communication', category: 'co2', status: 'live' },
  { id: 'co2T2Collaboration', category: 'co2', status: 'live' },

  // ISO 9001
  { id: 'iso9001Interview', category: 'iso9001', status: 'live' },
  { id: 'iso9001Intro', category: 'iso9001', status: 'live' },
  { id: 'iso9001Context', category: 'iso9001', status: 'live' },
  { id: 'iso9001Stakeholder', category: 'iso9001', status: 'live' },
  { id: 'iso9001Swot', category: 'iso9001', status: 'live' },
  { id: 'iso9001Scope', category: 'iso9001', status: 'live' },
  { id: 'iso9001Leadership', category: 'iso9001', status: 'live' },
  { id: 'iso9001Policy', category: 'iso9001', status: 'live' },
  { id: 'iso9001Roles', category: 'iso9001', status: 'live' },
  { id: 'iso9001Risks', category: 'iso9001', status: 'live' },
  { id: 'iso9001Objectives', category: 'iso9001', status: 'live' },
  { id: 'iso9001Change', category: 'iso9001', status: 'live' },
  { id: 'iso9001Resources', category: 'iso9001', status: 'live' },
  { id: 'iso9001People', category: 'iso9001', status: 'live' },
  { id: 'iso9001Competence', category: 'iso9001', status: 'live' },
  { id: 'iso9001Measuring', category: 'iso9001', status: 'live' },
  { id: 'iso9001Knowledge', category: 'iso9001', status: 'live' },
  { id: 'iso9001Communication', category: 'iso9001', status: 'live' },
  { id: 'iso9001DocControl', category: 'iso9001', status: 'live' },
  { id: 'iso9001ProcessOverview', category: 'iso9001', status: 'live' },
  { id: 'iso9001ProcessDetails', category: 'iso9001', status: 'live' },
  { id: 'iso9001Customer', category: 'iso9001', status: 'live' },
  { id: 'iso9001Design', category: 'iso9001', status: 'live' },
  { id: 'iso9001Purchasing', category: 'iso9001', status: 'live' },
  { id: 'iso9001Production', category: 'iso9001', status: 'live' },
  { id: 'iso9001Release', category: 'iso9001', status: 'live' },
  { id: 'iso9001Monitoring', category: 'iso9001', status: 'live' },
  { id: 'iso9001CustomerSatisfaction', category: 'iso9001', status: 'live' },
  { id: 'iso9001Audit', category: 'iso9001', status: 'live' },
  { id: 'iso9001Review', category: 'iso9001', status: 'live' },
  { id: 'iso9001Corrective', category: 'iso9001', status: 'live' },
  { id: 'iso9001Improvement', category: 'iso9001', status: 'live' },

  // ISO 14001
  { id: 'iso14001Organization', category: 'iso14001', status: 'live' },
  { id: 'iso14001Swot', category: 'iso14001', status: 'live' },
  { id: 'iso14001Scope', category: 'iso14001', status: 'live' },
  { id: 'iso14001Leadership', category: 'iso14001', status: 'live' },
  { id: 'iso14001Roles', category: 'iso14001', status: 'live' },
  { id: 'iso14001Aspects', category: 'iso14001', status: 'live' },
  { id: 'iso14001Significance', category: 'iso14001', status: 'live' },
  { id: 'iso14001Compliance', category: 'iso14001', status: 'live' },
  { id: 'iso14001Risks', category: 'iso14001', status: 'live' },
  { id: 'iso14001Objectives', category: 'iso14001', status: 'live' },
  { id: 'iso14001Resources', category: 'iso14001', status: 'live' },
  { id: 'iso14001Awareness', category: 'iso14001', status: 'live' },
  { id: 'iso14001Docs', category: 'iso14001', status: 'live' },
  { id: 'iso14001Operations', category: 'iso14001', status: 'live' },
  { id: 'iso14001Emergency', category: 'iso14001', status: 'live' },
  { id: 'iso14001Monitoring', category: 'iso14001', status: 'live' },
  { id: 'iso14001Audit', category: 'iso14001', status: 'live' },
  { id: 'iso14001Review', category: 'iso14001', status: 'live' },
  { id: 'iso14001Nonconformity', category: 'iso14001', status: 'live' },
  { id: 'iso14001Improvement', category: 'iso14001', status: 'live' },

  // ISO 27001
  { id: 'iso27001Interview', category: 'iso27001', status: 'live' },
  { id: 'iso27001Organization', category: 'iso27001', status: 'live' },
  { id: 'iso27001Swot', category: 'iso27001', status: 'live' },
  { id: 'iso27001Scope', category: 'iso27001', status: 'live' },
  { id: 'iso27001Leadership', category: 'iso27001', status: 'live' },
  { id: 'iso27001Roles', category: 'iso27001', status: 'live' },
  { id: 'iso27001RiskMethod', category: 'iso27001', status: 'live' },
  { id: 'iso27001Assets', category: 'iso27001', status: 'live' },
  { id: 'iso27001RiskAssessment', category: 'iso27001', status: 'live' },
  { id: 'iso27001Soa', category: 'iso27001', status: 'live' },
  { id: 'iso27001RiskTreatment', category: 'iso27001', status: 'live' },
  { id: 'iso27001Objectives', category: 'iso27001', status: 'live' },
  { id: 'iso27001Resources', category: 'iso27001', status: 'live' },
  { id: 'iso27001Awareness', category: 'iso27001', status: 'live' },
  { id: 'iso27001Docs', category: 'iso27001', status: 'live' },
  { id: 'iso27001OrgGov', category: 'iso27001', status: 'live' },
  { id: 'iso27001OrgAccess', category: 'iso27001', status: 'live' },
  { id: 'iso27001OrgSupplier', category: 'iso27001', status: 'live' },
  { id: 'iso27001OrgIncident', category: 'iso27001', status: 'live' },
  { id: 'iso27001OrgLegal', category: 'iso27001', status: 'live' },
  { id: 'iso27001People', category: 'iso27001', status: 'live' },
  { id: 'iso27001Physical', category: 'iso27001', status: 'live' },
  { id: 'iso27001TechEndpoints', category: 'iso27001', status: 'live' },
  { id: 'iso27001TechOps', category: 'iso27001', status: 'live' },
  { id: 'iso27001TechNetwork', category: 'iso27001', status: 'live' },
  { id: 'iso27001TechDev', category: 'iso27001', status: 'live' },
  { id: 'iso27001Performance', category: 'iso27001', status: 'live' },
  { id: 'iso27001Audit', category: 'iso27001', status: 'live' },
  { id: 'iso27001Review', category: 'iso27001', status: 'live' },
  { id: 'iso27001Improvement', category: 'iso27001', status: 'live' },

  // ISO 42001 — in ontwikkeling
  { id: 'iso42001Organization', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Swot', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Scope', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Leadership', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Roles', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Inventory', category: 'iso42001', status: 'beta' },
  { id: 'iso42001RiskMethod', category: 'iso42001', status: 'beta' },
  { id: 'iso42001RiskAssessment', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Impact', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Soa', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Objectives', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Development', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Operations', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Data', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Transparency', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Responsible', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Suppliers', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Competence', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Communication', category: 'iso42001', status: 'beta' },
  { id: 'iso42001OpsControl', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Monitoring', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Audit', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Review', category: 'iso42001', status: 'beta' },
  { id: 'iso42001Improvement', category: 'iso42001', status: 'beta' },

  // Safety Culture Ladder
  { id: 'sclManagement', category: 'scl', status: 'live' },
  { id: 'sclEmployee', category: 'scl', status: 'live' },

  // Losse analyses
  { id: 'analysesPestle', category: 'analyses', status: 'live' },
  { id: 'analysesRisk', category: 'analyses', status: 'live' },
  { id: 'analysesStakeholder', category: 'analyses', status: 'live' },
  { id: 'analysesSwot', category: 'analyses', status: 'live' }
]

const activeCategory = ref<string>('all')
// Stable seed for SSR/hydration; if `random` prop is set, re-roll on client mount.
const seed = ref(42)
onMounted(() => {
  if (props.random) {
    seed.value = Math.floor(Math.random() * 1_000_000)
  }
})

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
  return seededShuffle(base, seed.value)
})

// Only cap on the unfiltered "all" view; filters always show full results.
const visibleModules = computed(() => {
  if (props.limit && activeCategory.value === 'all' && filteredModules.value.length > props.limit) {
    return filteredModules.value.slice(0, props.limit - 1)
  }
  return filteredModules.value
})

const hiddenCount = computed(() =>
  filteredModules.value.length - visibleModules.value.length
)
</script>
