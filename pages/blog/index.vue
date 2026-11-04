<template>
  <div>
    <!-- HEADER -->
    <section class="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-br from-navy-50 via-white to-warm-bg opacity-60 blur-3xl"></div>
      </div>
      <div class="mx-auto max-w-5xl px-6 lg:px-8 flex flex-col gap-5">
        <p class="text-sm font-semibold uppercase tracking-wider text-navy-500">{{ $t('blog.index.eyebrow') }}</p>
        <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl text-warm-ink font-bold leading-[1.05] max-w-3xl">
          {{ $t('blog.index.title') }}
        </h1>
        <p class="text-xl text-warm-ink/75 leading-relaxed max-w-2xl">{{ $t('blog.index.body') }}</p>
      </div>
    </section>

    <!-- LIST -->
    <section class="pb-24 lg:pb-32">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        <div v-if="posts.length === 0" class="text-warm-ink/60">
          {{ $t('blog.index.empty') }}
        </div>
        <div v-else class="flex flex-col gap-6">
          <NuxtLink
            v-for="post in posts"
            :key="post.slug"
            :to="localePath({ name: `blog-${post.slug}` as any })"
            class="group block bg-white border border-warm-border rounded-2xl shadow-card hover:shadow-modal transition-shadow overflow-hidden grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
          >
            <div
              v-if="post.heroImage"
              :class="[
                'relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden',
                post.heroImageContain ? 'bg-warm-bg p-8 flex items-center justify-center' : ''
              ]"
            >
              <img
                :src="post.heroImage"
                :alt="post.heroImageAlt"
                :class="post.heroImageContain ? 'max-h-24 w-auto object-contain' : 'absolute inset-0 w-full h-full object-cover'"
              />
            </div>
            <div class="p-8 lg:p-10 flex flex-col gap-4">
              <div class="flex flex-wrap items-center gap-3 text-xs font-semibold">
                <span class="uppercase tracking-wider text-navy-500">{{ post.tag }}</span>
                <span class="text-warm-gray">·</span>
                <span class="text-warm-gray">{{ post.dateDisplay }}</span>
                <span class="text-warm-gray">·</span>
                <span class="text-warm-gray">{{ post.readTime }}</span>
              </div>
              <h2 class="font-display text-2xl lg:text-3xl text-warm-ink font-bold leading-tight group-hover:text-navy-500 transition-colors">
                {{ post.title }}
              </h2>
              <p class="text-lg text-warm-ink/75 leading-relaxed">{{ post.excerpt }}</p>
              <span class="text-navy-500 font-semibold mt-1 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                {{ $t('blog.readMore') }} →
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'global' })
const localePath = useLocalePath()
const { all } = useBlogPosts()
const posts = all()

useHead(() => ({
  title: t('blog.index.metaTitle'),
  meta: [
    { name: 'description', content: t('blog.index.metaDescription') }
  ]
}))
</script>
