export type BlogPost = {
  slug: string
  title: string
  subtitle: string
  date: string
  dateDisplay: string
  readTime: string
  excerpt: string
  tag: string
  heroImage?: string
  heroImageAlt?: string
  heroImageContain?: boolean
}

const posts: BlogPost[] = [
  {
    slug: 'enexis-safety-culture-ladder',
    title: 'Enexis versterkt de interne audits voor de Safety Culture Ladder met Helpr.ai',
    subtitle: 'Binnen twee tot drie weken per vestiging een representatief beeld van de veiligheidscultuur, breed én diepgaand.',
    date: '2026-11-04',
    dateDisplay: '4 november 2026',
    readTime: '4 min lezen',
    excerpt: 'Enexis is gecertificeerd op trede 4 van de Safety Culture Ladder en wil de cultuur verder versterken. Na een positieve pilot op drie vestigingen is de Helpr-methode uitgebreid naar alle vestigingen en afdelingen.',
    tag: 'Case · Safety Culture Ladder',
    heroImage: '/images/blog/enexis_logo.svg',
    heroImageAlt: 'Enexis',
    heroImageContain: true
  },
  {
    slug: 'verbeterdag-ai-interviews',
    title: 'Ook de Verbeterdag verbetert zichzelf',
    subtitle: 'Met AI-voice interviews van Helpr.ai haalde de Nationale Verbeterdag het verhaal achter het cijfer op.',
    date: '2026-10-28',
    dateDisplay: '28 oktober 2026',
    readTime: '5 min lezen',
    excerpt: 'Alcedo Media en Kwaliteit in Bedrijf vervingen het evaluatieformulier van de Nationale Verbeterdag door AI-interviews. Elf concrete aanbevelingen later weten ze wat er beter kan.',
    tag: 'Case · Nationale Verbeterdag',
    heroImage: '/images/blog/6-10-26_Nationale-Verbeterdag_Oktober-2026_Fort-Voordorp177_Coen-Koppen-Fotografie.jpeg',
    heroImageAlt: 'Nationale Verbeterdag 2026 — Fort Voordorp'
  }
]

export const useBlogPosts = () => {
  const all = () => [...posts].sort((a, b) => b.date.localeCompare(a.date))
  const latest = (n: number) => all().slice(0, n)
  const bySlug = (slug: string) => posts.find(p => p.slug === slug)
  return { all, latest, bySlug }
}
