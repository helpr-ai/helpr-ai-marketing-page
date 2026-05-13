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
      <div
        v-if="fade"
        class="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-white/0 via-white/85 to-white pointer-events-none"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

withDefaults(defineProps<{ fade?: boolean }>(), { fade: false })

const categories = [
  { id: 'all' },
  { id: 'co2' },
  { id: 'iso9001' },
  { id: 'iso14001' },
  { id: 'iso27001' },
  { id: 'iso42001' },
  { id: 'scl' },
  { id: 'general' }
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
  { id: 'generalSupplier', category: 'general', status: 'beta' }
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
</script>
