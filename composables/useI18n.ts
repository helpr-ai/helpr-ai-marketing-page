import { ref, computed, onMounted, readonly } from 'vue'

interface TranslationMessages {
  [key: string]: any
}

interface LanguageConfig {
  code: string
  name: string
  flag: string
}

const languages: LanguageConfig[] = [
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
]

// Embedded translations
const translations = {
  nl: {
    nav: {
      product: "Product",
      value: "Waarde",
      howItWorks: "Werking",
      whoItsFor: "Voor wie",
      faq: "FAQ",
      contact: "Contact",
      demo: "Plan demo"
    },
    hero: {
      badge: "AI-powered compliance made simple",
      title: "Sneller gecertificeerd met {aiInterviews}AI‑gestuurde interviews{/aiInterviews}",
      description: "Helpr zet gesprekken direct om in relevante managementsysteem informatie, zoals {iso27001}ISO 27001{/iso27001} en AI certificering {iso42001}ISO 42001{/iso42001}. Geen nieuw managementsysteem nodig.",
      tagline: "Minder gedoe, meer tijd voor wat echt telt",
      cta: "Plan een live demo",
      ctaSecondary: "Bekijk hoe het werkt"
    },
    tagline: {
      title: "From conversation to certification.",
      subtitle: "Transformeer gesprekken naar professionele, audit-klare compliance documentatie.",
      cta: "Ervaar het zelf"
    },
    value: {
      title: "Waarom {helpr}Helpr.AI{/helpr} ?",
      subtitle: "De snelste en meest laagdrempelige manier om je compliance documentatie op orde te krijgen.",
      card1: {
        title: "Snelle workflow",
        description: "Verkort weken aan workshops en notities tot enkele interviews wanneer het jou uitkomt. Minder handwerk, meer voortgang met AI-gestuurde gesprekken."
      },
      card2: {
        title: "Geen nieuw systeem nodig",
        description: "Werkt naadloos met je bestaande tooling en werkwijze. Exporteer in de structuur zoals je gewend bent."
      },
      card3: {
        title: "Audit-klare kwaliteit",
        description: "Uniforme structuur en professionele taal, direct bruikbaar voor audits en certificeringen zoals ISO 27001 en ISO 42001."
      },
      stats: {
        reduction: "88%",
        reductionLabel: "minder tijd kwijt",
        quality: "100%",
        qualityLabel: "audit-klare output",
        integration: "5 min",
        integrationLabel: "setup tijd",
        standards: "50+",
        standardsLabel: "ISO standaarden"
      }
    },
    grant: {
      badge: "Erkend door ElevenLabs",
      title: "Wij hebben een ElevenLabs Grant ontvangen. Een erkenning van onze innovatieve aanpak in compliance."
    },
    common: {
      beta: "Beta",
      live: "Live",
      brand: "Helpr.AI",
      iso27001: "ISO 27001",
      iso42001: "ISO 42001"
    },
    product: {
      title: "De tool in het kort",
      dashboardTitle: "Helpr.AI Dashboard",
      aiInterviews: "AI Interview",
      aiInterviewsDesc: "Word geïnterviewd door een AI-based consultant",
      structuring: "Structureren", 
      structuringDesc: "Automatisch omzetten naar relevante informatie",
      exportReady: "Export Ready",
      exportDesc: "Direct integreren in je bestaande managementsysteem",
      features: [
        "Templates per norm: ISO 27001, ISO 42001 (en uitbreidbaar)."
      ],
      categories: {
        policy: "Beleid & Context",
        policyDesc: "Scope, belanghebbenden, rolverdeling, risicokaders",
        risk: "Risicobeoordeling",
        riskDesc: "Methodiek, risico‑register, maatregelenmap",
        controls: "Controls (Annex A)",
        controlsDesc: "Bewijsverzameling, verantwoordelijken, status"
      }
    },
    target: {
      title: "Voor wie is Helpr.AI?",
      companies: {
        title: "Bedrijven (MKB en Enterprise)",
        benefits: [
          "Sneller richting certificering met minder afhankelijkheid van externe consultants.",
          "Consistente documentatie.",
          "Werkt met je bestaande managementsysteem en documentatieproces."
        ]
      },
      consultants: {
        title: "Compliance bureaus",
        benefits: [
          "Versnelt trajecten en verhoogt kwaliteit van input.",
          "Uniforme output helpt bij audit‑readiness en rapportage.", 
          "Samenwerkings‑ en partnerprogramma beschikbaar."
        ]
      }
    },
    working: {
      title: "Hoe het {werkt}werkt{/werkt}",
      subtitle: "Drie stappen. Met maximale efficiëntie van gesprek naar certificering.",
      step1: {
        title: "AI Interview",
        description: "Stuur een uitnodiging naar de relevante medewerkers. Onze AI stelt de juiste vragen op basis van je templates en bedrijfscontext.",
        demo: {
          question: "AI stelt vraag over ISO 27001...",
          answer: "Medewerker antwoordt op natuurlijke wijze",
          capture: "Context wordt vastgelegd"
        }
      },
      step2: {
        title: "AI Structurering", 
        description: "Interviews worden automatisch omgezet in uniforme, audit‑klare documentatie met professionele structuur.",
        categories: {
          policy: "Beleid & Context",
          risk: "Risicobeoordeling", 
          controls: "Controls (Annex A)"
        }
      },
      step3: {
        title: "Export & Integratie",
        description: "Exporteer naar je bestaande managementsysteem of documentatieproces en ga direct door met implementeren. Klaar voor gebruik.",
        platforms: {
          sharepoint: "SharePoint",
          confluence: "Confluence", 
          custom: "Custom"
        }
      },
      features: {
        security: {
          title: "Security‑First aanpak",
          description: "Privacy en informatiebeveiliging staan voorop. We beperken dataretentie en zorgen voor duidelijke logging & traceerbaarheid."
        },
        templates: {
          title: "Uit te breiden met eigen templates", 
          description: "Start met ISO 27001 & ISO 42001 en breid uit met o.a. ISO9001 en ISO14001. Templates en klantcontext zijn aanpasbaar."
        }
      }
    },
    demo: {
      badge: "Probeer Helpr.AI",
      title: "Ontdek de kracht van Helpr.AI",
      subtitle: "Zie in 20 minuten hoe Helpr.AI jouw certificeringstraject versnelt en vereenvoudigt",
      benefits: {
        walkthrough: {
          title: "Live walkthrough",
          description: "Ervaar zelf hoe AI-interviews werken met echte templates"
        },
        examples: {
          title: "Audit-klare voorbeelden",
          description: "Bekijk concrete output voor ISO 27001 en ISO 42001"
        },
        advice: {
          title: "Persoonlijk advies",
          description: "Bespreek jouw specifieke compliance-uitdagingen"  
        }
      },
      guarantee: "Geen verplichtingen • Privacy gegarandeerd • 20 minuten",
      form: {
        name: "Naam",
        namePlaceholder: "Je naam",
        email: "E-mailadres", 
        emailPlaceholder: "naam@bedrijf.nl",
        company: "Bedrijf",
        companyPlaceholder: "Bedrijfsnaam",
        questions: "Specifieke vragen (optioneel)",
        questionsPlaceholder: "Waar wil je op focussen tijdens de demo?",
        submit: "Plan gratis demo",
        required: "*",
        privacy: {
          text: "Door te verzenden ga je akkoord met onze",
          link: "privacyverklaring"
        }
      }
    },
    faq: {
      title: "Veelgestelde vragen",
      questions: [
        {
          question: "Is Helpr.AI een managementsysteem?",
          answer: "Nee. Helpr.AI werkt aanvullend op bestaande systemen. Wij verzamelen en structureren de informatie; jij gebruikt de output in je eigen managementsysteem of documentatieproces."
        },
        {
          question: "Welke normen worden ondersteund?",
          answer: "We starten met ISO 27001 en ISO 42001. Maar we breiden normensets continu uit. Op de planning staan o.a. ISO9001 en ISO14001."
        },
        {
          question: "Is er begeleiding nodig?",
          answer: "De tool werkt intuïtief en we bieden ook onboarding aan. Zo haal je snel waarde uit de interviews en output."
        },
        {
          question: "Hoe zit het met security & privacy?",
          answer: "Minimale dataretentie, duidelijke logging, en heldere afspraken. Neem contact op voor onze security-factsheet."
        }
      ]
    },
    contact: {
      title: "Vragen of interesse in partnership?",
      subtitle: "We praten graag door met compliance‑teams en ISO‑consultants. Laat je gegevens achter of mail ons direct.",
      partnership: "partnership@helpr.ai",
      onepager: "One‑pager op aanvraag",
      form: {
        name: "Naam",
        email: "E‑mail", 
        message: "Waarover wil je in gesprek?",
        submit: "Neem contact op"
      }
    },
    footer: {
      tagline: "\"From conversation to certification.\"",
      copyright: "© {year} Helpr.AI // Alle rechten voorbehouden.",
      privacy: "Privacy",
      security: "Beveiliging", 
      status: "Status"
    },
    success: {
      title: "Bedankt voor je bericht!",
      message: "We hebben je aanvraag ontvangen en nemen binnen 24 uur contact met je op.",
      responseTime: "Reactietijd: binnen 24 uur",
      backButton: "Terug naar website"
    },
    flowSteps: {
      conversation: {
        title: "Conversation",
        description: "Natuurlijk aanvoelende interviews door AI-based consultants"
      },
      certification: {
        title: "Certification", 
        description: "Audit-klare documentatie voor compliance"
      }
    }
  },
  en: {
    nav: {
      product: "Product",
      value: "Value",
      howItWorks: "How it works",
      whoItsFor: "Who it's for",
      faq: "FAQ",
      contact: "Contact",
      demo: "Book demo"
    },
    hero: {
      badge: "AI-powered compliance made simple",
      title: "Get certified faster with {aiInterviews}AI‑driven interviews{/aiInterviews}",
      description: "Helpr.AI turns conversations directly into structured compliance data — ready for {iso27001}ISO 27001{/iso27001}, {iso42001}ISO 42001{/iso42001} and audits. No new management system needed.",
      tagline: "Less hassle, more time for what matters",
      cta: "Schedule a live demo",
      ctaSecondary: "See how it works"
    },
    tagline: {
      title: "From conversation to certification.",
      subtitle: "Transform unstructured conversations into professional, audit-ready compliance documentation.",
      cta: "Experience it yourself"
    },
    value: {
      title: "Why {helpr}Helpr.AI{/helpr}?",
      subtitle: "The fastest and most accessible way to get your compliance documentation in order.",
      card1: {
        title: "Crazy fast workflow",
        description: "Reduce weeks of workshops and notes to a few interviews whenever it suits you. Less manual work, more progress with AI-driven conversations."
      },
      card2: {
        title: "No new system needed",
        description: "Works seamlessly with your existing tooling and workflow. Export and document exactly as you're used to."
      },
      card3: {
        title: "Audit-ready quality",
        description: "Uniform structure and professional language, directly usable for audits and certifications like ISO 27001 and ISO 42001."
      },
      stats: {
        reduction: "88%",
        reductionLabel: "Time saving",
        quality: "100%",
        qualityLabel: "Audit-ready output",
        integration: "5 min",
        integrationLabel: "Setup time",
        standards: "50+",
        standardsLabel: "ISO standards"
      }
    },
    grant: {
      badge: "Recognized by ElevenLabs",
      title: "We have received an ElevenLabs Grant. A recognition of our innovative approach in compliance."
    },
    common: {
      beta: "Beta",
      live: "Live",
      brand: "Helpr.AI",
      iso27001: "ISO 27001",
      iso42001: "ISO 42001"
    },
    product: {
      title: "Product overview",
      dashboardTitle: "Helpr.AI Dashboard",
      aiInterviews: "AI Interview",
      aiInterviewsDesc: "Get interviewed by an AI-based consultant",
      structuring: "Structuring", 
      structuringDesc: "Convert instantly to audit-ready documentation",
      exportReady: "Export Ready",
      exportDesc: "Directly integrate into your existing management system",
      features: [
        "Templates per standard: ISO 27001, ISO 42001 (and expandable)."
      ],
      categories: {
        policy: "Policy & Context",
        policyDesc: "Scope, stakeholders, roles, risk frameworks",
        risk: "Risk Assessment",
        riskDesc: "Methodology, risk register, control mapping",
        controls: "Controls (Annex A)",
        controlsDesc: "Evidence collection, responsibilities, status"
      }
    },
    target: {
      title: "Who is Helpr.AI for?",
      companies: {
        title: "Companies (SME and Enterprise)",
        benefits: [
          "Faster path to certification with less dependency on external consultants.",
          "Consistent documentation and clear ownership.",
          "Works with your existing management system and documentation process."
        ]
      },
      consultants: {
        title: "Compliance agencies",
        benefits: [
          "Accelerate trajectories and improve input quality.",
          "Uniform output helps with audit readiness and reporting.", 
          "Collaboration and partner program available."
        ]
      }
    },
    working: {
      title: "How it {werkt}works{/werkt}",
      subtitle: "Three steps. With maximum efficiency from conversation to certification.",
      step1: {
        title: "AI Interview",
        description: "Send an invitation to the relevant employees. Our AI asks the right questions based on your templates and business context.",
        demo: {
          question: "AI asks question about ISO 27001...",
          answer: "Expert responds naturally",
          capture: "Context being captured"
        }
      },
      step2: {
        title: "AI Structuring", 
        description: "Interviews are automatically converted into uniform, audit-ready documentation with professional structure.",
        categories: {
          policy: "Policy & Context",
          risk: "Risk Assessment", 
          controls: "Controls (Annex A)"
        }
      },
      step3: {
        title: "Export & Integration",
        description: "Export to your existing management system or documentation process and continue directly with implementation. Ready to use.",
        platforms: {
          sharepoint: "SharePoint",
          confluence: "Confluence", 
          custom: "Custom"
        }
      },
      features: {
        security: {
          title: "Security-First Approach",
          description: "Privacy and information security come first. We limit data retention and ensure clear logging & traceability."
        },
        templates: {
          title: "Expandable Templates", 
          description: "Start with ISO 27001 & ISO 42001 and expand with standards like ISO9001 and ISO14001. Templates and client context are customizable."
        }
      }
    },
    demo: {
      badge: "Try Helpr.AI",
      title: "Discover the power of Helpr.AI",
      subtitle: "See in 20 minutes how Helpr.AI accelerates and simplifies your certification process",
      benefits: {
        walkthrough: {
          title: "Live walkthrough",
          description: "Experience how AI interviews work with real templates"
        },
        examples: {
          title: "Audit-ready examples",
          description: "View concrete output for ISO 27001 and ISO 42001"
        },
        advice: {
          title: "Personal advice",
          description: "Discuss your specific compliance challenges"  
        }
      },
      guarantee: "No obligations • Privacy guaranteed • 20 minutes",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email address", 
        emailPlaceholder: "name@company.com",
        company: "Company",
        companyPlaceholder: "Company name",
        questions: "Specific questions (optional)",
        questionsPlaceholder: "What would you like to focus on during the demo?",
        submit: "Schedule free demo",
        required: "*",
        privacy: {
          text: "By submitting you agree to our",
          link: "privacy policy"
        }
      }
    },
    faq: {
      title: "Frequently asked questions",
      questions: [
        {
          question: "Is Helpr.AI a management system?",
          answer: "No. Helpr.AI works complementary to existing systems. We collect and structure the information; you use the output in your own management system or documentation process."
        },
        {
          question: "Which standards are supported?",
          answer: "We start with ISO 27001 and ISO 42001. But we continuously expand our standard sets. On the roadmap are standards like ISO9001 and ISO14001."
        },
        {
          question: "Is guidance needed?",
          answer: "The tool works intuitively and we offer onboarding. This way you quickly get value from the interviews and output."
        },
        {
          question: "What about security & privacy?",
          answer: "Minimal data retention, clear logging, and transparent agreements. Contact us for our security factsheet."
        }
      ]
    },
    contact: {
      title: "Questions or interested in partnership?",
      subtitle: "We love to talk with compliance teams and ISO consultants. Leave your details or email us directly.",
      partnership: "partnership@helpr.ai",
      onepager: "One-pager on request",
      form: {
        name: "Name",
        email: "Email", 
        message: "What would you like to talk about?",
        submit: "Get in touch"
      }
    },
    footer: {
      tagline: "\"From conversation to certification.\"",
      copyright: "© {year} Helpr.AI // All rights reserved.",
      privacy: "Privacy",
      security: "Security", 
      status: "Status"
    },
    success: {
      title: "Thank you for your message!",
      message: "We have received your request and will contact you within 24 hours.",
      responseTime: "Response time: within 24 hours",
      backButton: "Back to website"
    },
    flowSteps: {
      conversation: {
        title: "Conversation",
        description: "Natural interviews by AI-based consultants"
      },
      certification: {
        title: "Certification", 
        description: "Audit-ready documentation for compliance"
      }
    }
  }
}

export const useI18n = () => {
  const currentLocale = ref<string>('en')
  const messages = ref<Record<string, TranslationMessages>>(translations)

  // Detect browser language
  const detectBrowserLanguage = (): string => {
    if (typeof window === 'undefined') return 'en'
    
    const browserLang = navigator.language.toLowerCase()
    
    // Check for exact matches first (nl, en)
    if (languages.find(lang => lang.code === browserLang)) {
      return browserLang
    }
    
    // Check for language prefix matches (nl-NL -> nl, en-US -> en)
    const langPrefix = browserLang.split('-')[0]
    if (languages.find(lang => lang.code === langPrefix)) {
      return langPrefix
    }
    
    // Default to English for unsupported languages
    return 'en'
  }

  // Initialize locale from browser or localStorage
  const initializeLocale = () => {
    if (typeof window === 'undefined') return
    
    const savedLocale = localStorage.getItem('helpr-locale')
    if (savedLocale && languages.find(lang => lang.code === savedLocale)) {
      currentLocale.value = savedLocale
    } else {
      currentLocale.value = detectBrowserLanguage()
    }
  }

  // Set locale and save to localStorage
  const setLocale = (locale: string) => {
    if (languages.find(lang => lang.code === locale)) {
      currentLocale.value = locale
      if (typeof window !== 'undefined') {
        localStorage.setItem('helpr-locale', locale)
      }
    }
  }

  // Get nested translation by key
  const getTranslation = (key: string, params?: Record<string, string>): string => {
    const keys = key.split('.')
    let value: any = messages.value[currentLocale.value] || {}
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    if (typeof value !== 'string') {
      console.warn(`Translation not found for key: ${key} in locale: ${currentLocale.value}`)
      return key
    }
    
    // Replace parameters
    if (params) {
      let result = value
      for (const [param, replacement] of Object.entries(params)) {
        result = result.replace(new RegExp(`{${param}}`, 'g'), replacement)
      }
      return result
    }
    
    return value
  }

  // Translation function with HTML support
  const t = (key: string, params?: Record<string, string>): string => {
    return getTranslation(key, params)
  }

  // Get raw translation data (for arrays and objects)
  const getRaw = (key: string): any => {
    const keys = key.split('.')
    let value: any = messages.value[currentLocale.value] || {}
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value
  }

  // Get current language config
  const getCurrentLanguage = computed(() => {
    return languages.find(lang => lang.code === currentLocale.value) || languages[0]
  })

  // Initialize on mount
  onMounted(() => {
    initializeLocale()
  })

  return {
    currentLocale: readonly(currentLocale),
    languages,
    setLocale,
    t,
    getRaw,
    getCurrentLanguage,
    messages: readonly(messages)
  }
}