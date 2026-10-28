export type BlogPost = {
  slug: string
  title: string
  subtitle: string
  date: string
  dateDisplay: string
  readTime: string
  excerpt: string
  tag: string
}

const posts: BlogPost[] = [
  {
    slug: 'verbeterdag-ai-interviews',
    title: 'Ook de Verbeterdag verbetert zichzelf',
    subtitle: 'Met AI-voice interviews van Helpr.ai haalde de Nationale Verbeterdag het verhaal achter het cijfer op.',
    date: '2026-10-28',
    dateDisplay: '28 oktober 2026',
    readTime: '5 min lezen',
    excerpt: 'Alcedo Media en Kwaliteit in Bedrijf vervingen het evaluatieformulier van de Nationale Verbeterdag door AI-interviews. Elf concrete aanbevelingen later weten ze wat er beter kan.',
    tag: 'Case · Nationale Verbeterdag'
  }
]

export const useBlogPosts = () => {
  const all = () => [...posts].sort((a, b) => b.date.localeCompare(a.date))
  const latest = (n: number) => all().slice(0, n)
  const bySlug = (slug: string) => posts.find(p => p.slug === slug)
  return { all, latest, bySlug }
}
