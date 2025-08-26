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
      description: "Bespaar tot 90% tijd in jouw certificeringstraject. Van gesprekken tot kant-en-klare informatie voor je managementsysteem. Zowel {iso27001}ISO 27001{/iso27001} en AI certificering {iso42001}ISO 42001{/iso42001}. Geen nieuw managementsysteem nodig.",
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
        reduction: "60-90%",
        reductionLabel: "minder tijd kwijt",
        quality: "95%",
        qualityLabel: "audit-klare output",
        integration: "5 min",
        integrationLabel: "setup tijd",
        standards: "2",
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
          "Werk samen met onze partner compliance bureaus voor optimale begeleiding.",
          "Verkrijg hoogwaardige input voor de consultant door voorgestructureerde data.",
          "Bespaar kosten door efficiëntere samenwerking."
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
    consultantValue: {
      title: "De waarde voor {consultants}compliance agencies{/consultants}",
      subtitle: "Helpr.AI verandert hoe adviesbureaus werken: meer klanten, hogere kwaliteit, minder tijd.",
      efficiency: {
        title: "Efficiëntie",
        description: "Een consultant kan met Helpr.AI tot 3x meer klanten per jaar certificeren.",
        stats: {
          clients: "3x",
          clientsLabel: "meer klanten per consultant",
          time: "60-90%",
          timeLabel: "minder tijd per traject"
        }
      },
      quality: {
        title: "Kwaliteit en consistentie",
        description: "AI zorgt voor uniforme, professionele output ongeacht ervaring. Consistent hoge kwaliteit voor alle projecten.",
        benefits: [
          "Voorkomt menselijke fouten en inconsistenties",
          "Verminderde review tijd voor consultants",
        ]
      },
      assurance: {
        title: "White labeled platform",
        description: "Bied Helpr.AI aan onder jouw eigen merk met volledige controle over branding en klantervaring.",
        points: [
          "Expert-ontwikkelde templates", 
          "Aanpasbare output", 
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
      subtitle: "Benieuwd naar ons partnerprogramma, of ons white labeled platform? We praten graag door met complianceteams en ISO consultants. Laat je gegevens achter of mail ons direct.",
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
    },
    processMap: {
      badge: "Praktijkvoorbeeld",
      title: "Meer dan alleen documentatie: {processMap}procesdiagrammen{/processMap}",
      subtitle: "Helpr.AI analyseert gesprekken en genereert automatisch visuele procesdiagrammen die aansluiten bij compliance vereisten.",
      description: "Van een eenvoudig gesprek over incidentafhandeling naar een compleet procesdiagram met rollen, systemen en workflows. Perfect voor ISO 27001 documentatie.",
      features: [
        "Automatische procesherkenning uit gesprekken",
        "Visuele diagrammen met rollen en verantwoordelijkheden", 
        "Compliance-ready procesomschrijvingen",
        "Exporteerbaar naar je managementsysteem"
      ],
      imageAlt: "Voorbeeld van een automatisch gegenereerd procesdiagram voor incidentafhandeling"
    },
    applicationScope: {
      title: "Breed inzetbaar, {concrete}concreet toepasbaar{/concrete}",
      subtitle: "Van ISO 27001 tot branchespecifieke normen: Helpr.AI groeit mee met je certificeringsbehoeften.",
      current: {
        title: "Nu beschikbaar",
        description: "Direct inzetbaar voor de meest gevraagde certificeringen",
        standards: [
          {
            name: "ISO 27001",
            description: "Informatiebeveiliging"
          },
          {
            name: "ISO 42001", 
            description: "AI governance"
          }
        ]
      },
      upcoming: {
        title: "Binnenkort beschikbaar",
        description: "Uitbreiding naar veel gevraagde managementsystemen",
        standards: [
          {
            name: "ISO 9001",
            description: "Kwaliteitsmanagement"
          },
          {
            name: "ISO 14001",
            description: "Milieumanagementsystemen"
          },
          {
            name: "NEN 7510",
            description: "Informatiebeveiliging in de zorg"
          },
          {
            name: "BRL normen",
            description: "Branchespecifieke normen (bouw, installatie)"
          }
        ]
      },
      custom: {
        title: "Maatwerk mogelijk",
        description: "Heb je een eigen methode of norm die niet in de lijst staat? Geen probleem.",
        features: [
          "Zet je eigen templates in onze tool",
          "Samen met ons nieuwe standaarden toevoegen", 
          "Flexibele aanpassing aan jouw werkwijze",
          "Partner-specifieke template ontwikkeling"
        ],
        note: "Helpr.AI richt zich op managementsysteem-stijl normen. Voor pure productcertificaten is onze aanpak minder geschikt."
      }
    },
    iso27001: {
      title: "<span class='text-white font-extrabold'>ISO 27001</span> Informatiebeveiliging",
      subtitle: "Streamline je ISO 27001 certificering met AI-gestuurde interviews en gestructureerde documentatie.",
      cta: "Ontdek Helpr.AI",
      hero: {
        badge: "Informatiebeveiliging certificering",
        description: "Verkort je ISO 27001 traject van maanden naar weken met geautomatiseerde documentatie en compliance tracking."
      },
      about: {
        title: "Wat is ISO 27001?",
        description: "ISO 27001 is de internationale standaard voor informatiebeveiligingsmanagementsystemen (ISMS). Het helpt organisaties om informatie systematisch te beveiligen door risico's te identificeren, beheersen en continue te verbeteren.",
        importance: {
          title: "Waarom is ISO 27001 belangrijk?",
          items: [
            "Beschermt vertrouwelijke bedrijfsinformatie en klantgegevens",
            "Vereist voor veel klanten en partnerships in digitale sectoren",
            "Vermindert risico op datalekken en cybersecurity incidenten",
            "Vergroot vertrouwen van klanten en stakeholders",
            "Compliance met privacy wetgeving zoals AVG/GDPR"
          ]
        }
      },
      requirements: {
        title: "Certificeringsvereisten",
        subtitle: "ISO 27001 certificering vereist een uitgebreid informatiebeveiligingsmanagementsysteem",
        items: [
          {
            title: "Context van de organisatie",
            description: "Identificeer interne/externe factoren die het ISMS beïnvloeden en bepaal het toepassingsgebied"
          },
          {
            title: "Leiderschap",
            description: "Topmanagement commitment, informatiebeveiliging beleid en rollen/verantwoordelijkheden"
          },
          {
            title: "Planning",
            description: "Risicobeoordelingen, behandelingsplannen en informatiebeveiligingsdoelstellingen"
          },
          {
            title: "Ondersteuning",
            description: "Resources, competenties, bewustzijn, communicatie en gedocumenteerde informatie"
          },
          {
            title: "Uitvoering",
            description: "Implementatie van risicobehandeling en operationele procedures voor informatiebeveiliging"
          },
          {
            title: "Prestatie-evaluatie",
            description: "Monitoring, meting, interne audits en managementreview van het ISMS"
          },
          {
            title: "Verbetering",
            description: "Continue verbetering, incidentafhandeling en correctieve maatregelen"
          }
        ],
        challenges: {
          title: "Waarom is certificering zo arbeidsintensief?",
          items: [
            "Uitgebreide documentatie van alle beveiligingsprocessen en procedures",
            "Gedetailleerde risicoanalyses voor alle informatieactiva",
            "Implementatie en documentatie van 93 beveiligingsmaatregelen (Annex A)",
            "Training en bewustzijn programma's voor alle medewerkers",
            "Continue monitoring en rapportage van beveiligingsincidenten"
          ]
        }
      },
      solution: {
        title: "Hoe helpt Helpr.AI?",
        subtitle: "Van gesprekken naar kant-en-klare ISMS documentatie",
        steps: [
          {
            number: "01",
            title: "ISMS Assessment Interview",
            description: "Beantwoord vragen over je IT-omgeving, huidige beveiligingsmaatregelen en risicolandschap"
          },
          {
            number: "02", 
            title: "Automatische documentatie",
            description: "AI genereert risicoregister, beleid documenten en implementatieplannen op basis van je input"
          },
          {
            number: "03",
            title: "Annex A Controles",
            description: "Gestructureerde implementatie en documentatie van alle relevante beveiligingsmaatregelen"
          },
          {
            number: "04",
            title: "Audit voorbereiding",
            description: "Complete ISMS documentatie klaar voor interne en externe audits"
          }
        ]
      },
      additional: {
        securityManagement: {
          title: "Information Security Management",
          description: "Systematische aanpak voor het beheren van gevoelige bedrijfsinformatie en ervoor zorgen dat deze veilig blijft."
        },
        finalCta: {
          title: "Klaar om je ISO 27001 certificering te stroomlijnen?",
          description: "Transformeer je informatiebeveiliging management van maanden handmatig werk naar weken gestructureerde vooruitgang."
        }
      }
    },
    iso9001: {
      title: "{iso9001}ISO 9001{/iso9001} Kwaliteitsmanagement",
      subtitle: "Streamline je ISO 9001 certificering met AI-gestuurde interviews en gestructureerde documentatie.",
      cta: "Ontdek Helpr.AI",
      hero: {
        badge: "Kwaliteitsmanagement certificering",
        description: "Verkort je ISO 9001 traject van maanden naar weken met geautomatiseerde documentatie."
      },
      about: {
        title: "Wat is ISO 9001?",
        description: "ISO 9001 is de internationale standaard voor kwaliteitsmanagementsystemen (QMS). Het helpt organisaties om consistent hoogwaardige producten en diensten te leveren die voldoen aan klant- en regelgevingseisen.",
        importance: [
          "Verbetert klanttevredenheid door consistente kwaliteit",
          "Verhoogt operationele efficiëntie en vermindert verspilling", 
          "Creëert een cultuur van continue verbetering",
          "Vergroot marktgeloofwaardigheid en concurrentievoordeel",
          "Vereist voor veel aanbestedingen en partnerships"
        ]
      },
      requirements: {
        title: "Certificeringsvereisten",
        subtitle: "ISO 9001 certificering vereist een uitgebreid kwaliteitsmanagementsysteem",
        items: [
          {
            title: "Context van de organisatie",
            description: "Identificeer interne/externe factoren en belanghebbenden die het QMS beïnvloeden"
          },
          {
            title: "Leiderschap en betrokkenheid",
            description: "Topmanagement commitment, kwaliteitsbeleid en rollen/verantwoordelijkheden"
          },
          {
            title: "Planning",
            description: "Risico's en kansen, kwaliteitsdoelstellingen en plannen om deze te bereiken"
          },
          {
            title: "Ondersteuning", 
            description: "Resources, competenties, bewustzijn, communicatie en gedocumenteerde informatie"
          },
          {
            title: "Uitvoering",
            description: "Operationele planning, productrealisatie en controle van geleverde producten/diensten"
          },
          {
            title: "Prestatie-evaluatie",
            description: "Monitoring, meting, interne audits en managementreview"
          },
          {
            title: "Verbetering",
            description: "Continue verbetering, non-conformiteiten en correctieve maatregelen"
          }
        ],
        challenges: {
          title: "Waarom is certificering zo tijdrovend?",
          points: [
            "Uitgebreide documentatie van alle processen en procedures",
            "Training van personeel over nieuwe werkwijzen en processen", 
            "Implementatie van meetbare kwaliteitsdoelstellingen",
            "Interne audits en continue monitoring systemen opzetten",
            "Voorbereiding op externe certificeringsaudit"
          ]
        }
      },
      helprSolution: {
        title: "Hoe Helpr.AI helpt",
        subtitle: "Van traag documentatiewerk naar snelle, gestructureerde implementatie",
        benefits: [
          {
            title: "Geautomatiseerde documentatie",
            description: "AI-interviews genereren automatisch procesbeschrijvingen, werkwijzen en kwaliteitshandboeken",
            icon: "DocumentTextIcon"
          },
          {
            title: "Compliance tracking",
            description: "Real-time overzicht van voortgang per ISO 9001 vereiste en automatische gap analysis",
            icon: "CheckCircleIcon"
          },
          {
            title: "Template bibliotheek",
            description: "Templates voor alle ISO 9001 secties, aangepast aan jouw branche",
            icon: "Square3Stack3DIcon"
          },
          {
            title: "Audit voorbereiding",
            description: "Gestructureerde bewijsverzameling en audit-ready documentatie voor certificering",
            icon: "ShieldCheckIcon"
          }
        ],
        process: {
          title: "Het proces",
          steps: [
            {
              number: "01",
              title: "AI Interview",
              description: "Beantwoord vragen over je huidige processen, kwaliteitsmaatregelen en organisatiestructuur"
            },
            {
              number: "02", 
              title: "Automatische documentatie",
              description: "AI genereert kwaliteitshandboek, procesbeschrijvingen en werkwijzen op basis van je input"
            },
            {
              number: "03",
              title: "Review en aanpassing", 
              description: "Controleer en pas gegenereerde documenten aan volgens jouw specifieke behoeften"
            },
          ]
        }
      }
    },
    iso42001: {
      title: "{iso42001}ISO 42001{/iso42001} AI Management",
      subtitle: "Klaar voor de toekomst van AI governance met gestructureerde certificering en compliance tracking.",
      cta: "Ontdek Helpr.AI",
      hero: {
        badge: "AI governance certificering",
        description: "De eerste internationale standaard voor AI management systemen. Implementeer verantwoorde AI met Helpr.AI's gespecialiseerde aanpak."
      },
      about: {
        title: "Wat is ISO 42001?",
        description: "ISO 42001 is de eerste internationale standaard voor Artificial Intelligence Management Systems (AIMS). Het biedt een framework voor organisaties om AI-systemen verantwoord te ontwikkelen, implementeren en beheren.",
        aiRelevance: {
          title: "Waarom is deze standaard juist nu cruciaal?",
          points: [
            "AI-systemen beïnvloeden steeds meer bedrijfskritische processen",
            "Regeldruk neemt toe (EU AI Act, Amerikaanse AI Executive Orders)",
            "Klanten en partners vereisen transparantie in AI-gebruik",
            "Risico's van bias, privacy schendingen en onbetrouwbare output",
            "Concurrentievoordeel door vertrouwde, ethische AI-implementatie"
          ]
        },
        importance: [
          "Bouwt vertrouwen bij stakeholders in AI-systemen",
          "Vermindert juridische en reputatierisico's",
          "Zorgt voor consistente AI governance over de organisatie",
          "Faciliteert compliance met toekomstige AI-regulatie",
          "Verbetert AI-systeem prestaties en betrouwbaarheid"
        ]
      },
      requirements: {
        title: "Certificeringsvereisten",
        subtitle: "ISO 42001 vereist een uitgebreid AI management systeem met focus op risicomanagement",
        items: [
          {
            title: "AI Governance Framework",
            description: "Beleid, rollen en verantwoordelijkheden voor AI-ontwikkeling en -gebruik door de organisatie"
          },
          {
            title: "Risico Assessment",
            description: "Systematische identificatie en evaluatie van AI-risico's: bias, privacy, veiligheid, betrouwbaarheid"
          },
          {
            title: "Data Management",
            description: "Processen voor data kwaliteit, privacy, beveiliging en lifecycle management voor AI-systemen"
          },
          {
            title: "AI System Lifecycle", 
            description: "Gestructureerde ontwikkeling van ontwerp tot deployment, monitoring en decommissioning"
          },
          {
            title: "Transparantie en Explainability",
            description: "Documentatie van AI-besluitvorming en communicatie naar stakeholders"
          },
          {
            title: "Human Oversight",
            description: "Menselijke controle en interventie mogelijkheden in AI-gedreven processen"
          },
          {
            title: "Incident Management",
            description: "Procedures voor AI-gerelateerde incidenten, correctieve maatregelen en lessons learned"
          },
          {
            title: "Performance Monitoring",
            description: "Continue evaluatie van AI-systeem prestaties, accuracy en bias detectie"
          }
        ],
        challenges: {
          title: "Waarom is AI governance zo complex?",
          points: [
            "Multidisciplinaire kennis vereist: tech, legal, ethics, business",
            "Snel evoluerend regelgevingslandschap en best practices", 
            "Complexe AI-systemen met ondoorzichtige besluitvorming",
            "Organisatie-brede impact vereist cultuurverandering",
            "Balanceren van innovatie met risicomanagement",
            "Gebrek aan gestandaardiseerde tools en methodologieën"
          ]
        }
      },
      helprSolution: {
        title: "Hoe Helpr.AI helpt met AI governance",
        subtitle: "Van AI chaos naar gestructureerde governance met AI-native tools",
        aiAdvantage: {
          title: "AI begrijpt AI",
          description: "Helpr.AI gebruikt AI om AI governance te vereenvoudigen. Een unieke meta-aanpak die complexe AI concepten vertaalt naar concrete implementatiestappen."
        },
        benefits: [
          {
            title: "AI Risk Assessment",
            description: "Geautomatiseerde identificatie van AI-risico's per use case, inclusief bias detection en impact analysis",
            icon: "ExclamationTriangleIcon"
          },
          {
            title: "Governance Documentation",
            description: "AI-gegenereerde beleidsdocumenten, procedures en frameworks specifiek voor jouw AI-landschap",
            icon: "DocumentTextIcon"
          },
          {
            title: "Compliance Mapping",
            description: "Automatische mapping van je AI-systemen tegen ISO 42001 vereisten en toekomstige regulatie",
            icon: "CheckCircleIcon"
          },
          {
            title: "Stakeholder Communication",
            description: "Heldere, toegankelijke uitleg van AI-systemen voor verschillende doelgroepen (management, legal, klanten)",
            icon: "ChatBubbleLeftRightIcon"
          }
        ],
        process: {
          title: "Het AI governance proces",
          steps: [
            {
              number: "01",
              title: "AI Inventory & Assessment",
              description: "Identificeer alle AI-systemen in je organisatie en evalueer hun risico's, impact en governance behoeften"
            },
            {
              number: "02", 
              title: "Governance Framework Design",
              description: "AI genereert op maat gemaakte beleid, procedures en governance structuren gebaseerd op je specifieke AI-landschap"
            },
            {
              number: "03",
              title: "Implementation Roadmap", 
              description: "Gestructureerd implementatieplan met prioriteiten, timelines en stakeholder verantwoordelijkheden"
            },
            {
              number: "04",
              title: "Monitoring & Compliance",
              description: "Continue tracking van compliance status, performance metrics en emerging risks in je AI-ecosysteem"
            }
          ]
        }
      }
    },
    cta: {
      title: "Klaar om te ontdekken wat mogelijk is?",
      description: "Bespreek je specifieke behoefte en ontdek hoe Helpr.AI kan helpen.",
      button: "Plan een gesprek"
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
          "Collaborate with our partner compliance agencies for optimal guidance.",
          "Provide high-quality input to a consultant through pre-structured data.",
          "Save costs through more efficient collaboration."
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
    consultantValue: {
      title: "The value for {consultants}compliance agencies{/consultants}",
      subtitle: "Helpr.AI transforms how advisory firms work: more clients, higher quality, less time.",
      efficiency: {
        title: "Efficiency and Scale",
        description: "A consultant can certify up to 3x more clients per year with Helpr.AI. Going from 5 to 15 clients means a fundamental improvement of the business model.",
        stats: {
          clients: "3x",
          clientsLabel: "more clients per consultant",
          time: "60%",
          timeLabel: "less time per project"
        }
      },
      quality: {
        title: "Quality and Consistency",
        description: "AI ensures uniform, professional output regardless of experience level. Consistently high quality across all projects.",
        benefits: [
          "Prevents human errors and inconsistencies",
          "Juniors produce senior-quality output",
          "Reduced review time for senior consultants",
          "Uniform reporting across all clients"
        ]
      },
      assurance: {
        title: "White labeled platform",
        description: "Offer Helpr.AI under your own brand with full control over branding and customer experience.",
        points: [
          "Expert-developed templates",
          "Always customizable output", 
          "Human-in-the-loop review process",
          "Traceability and logging"
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
      subtitle: "Curious about our partner program or our white-labeled platform? We love to talk with compliance teams and ISO consultants. Leave your details or email us directly.",
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
    },
    processMap: {
      badge: "Real-world example",
      title: "More than just documentation: {processMap}process diagrams{/processMap}",
      subtitle: "Helpr.AI analyzes conversations and automatically generates visual process diagrams that align with compliance requirements.",
      description: "From a simple conversation about incident handling to a complete process diagram with roles, systems and workflows. Perfect for ISO 27001 documentation.",
      features: [
        "Automatic process recognition from conversations",
        "Visual diagrams with roles and responsibilities", 
        "Compliance-ready process descriptions",
        "Exportable to your management system"
      ],
      imageAlt: "Example of an automatically generated process diagram for incident handling"
    },
    applicationScope: {
      title: "Widely applicable, {concrete}concretely usable{/concrete}",
      subtitle: "From ISO 27001 to industry-specific standards: Helpr.AI grows with your certification needs.",
      current: {
        title: "Available now",
        description: "Ready to use for the most requested certifications",
        standards: [
          {
            name: "ISO 27001",
            description: "Information security"
          },
          {
            name: "ISO 42001", 
            description: "AI governance"
          }
        ]
      },
      upcoming: {
        title: "Coming soon",
        description: "Expansion to frequently requested management systems",
        standards: [
          {
            name: "ISO 9001",
            description: "Quality management"
          },
          {
            name: "ISO 14001",
            description: "Environmental management systems"
          },
          {
            name: "NEN 7510",
            description: "Information security in healthcare"
          },
          {
            name: "BRL standards (Dutch)",
            description: "Industry-specific standards (construction, installation)"
          }
        ]
      },
      custom: {
        title: "Custom solutions possible",
        description: "Have your own methodology or standard not in the list? No problem.",
        features: [
          "Build your own question templates in our tool",
          "Work with us to add new standards", 
          "Flexible adaptation to your workflow",
          "Partner-specific template development"
        ],
        note: "Helpr.AI focuses on management system-style standards. Our approach is less suitable for pure product certifications."
      }
    },
    iso27001: {
      title: "<span class='text-white font-extrabold'>ISO 27001</span> Information Security",
      subtitle: "Streamline your ISO 27001 certification with AI-driven interviews and structured documentation.",
      cta: "Discover Helpr.AI",
      hero: {
        badge: "Information security certification",
        description: "Shorten your ISO 27001 journey from months to weeks with automated documentation and compliance tracking."
      },
      about: {
        title: "What is ISO 27001?",
        description: "ISO 27001 is the international standard for information security management systems (ISMS). It helps organizations systematically protect information by identifying, controlling and continuously improving security risks.",
        importance: {
          title: "Why is ISO 27001 important?",
          items: [
            "Protects confidential business information and customer data",
            "Required by many clients and partnerships in digital sectors",
            "Reduces risk of data breaches and cybersecurity incidents",
            "Increases trust from customers and stakeholders",
            "Compliance with privacy legislation such as GDPR"
          ]
        }
      },
      requirements: {
        title: "Certification Requirements",
        subtitle: "ISO 27001 certification requires a comprehensive information security management system",
        items: [
          {
            title: "Context of the organization",
            description: "Identify internal/external factors that influence the ISMS and determine the scope of application"
          },
          {
            title: "Leadership",
            description: "Top management commitment, information security policy and roles/responsibilities"
          },
          {
            title: "Planning",
            description: "Risk assessments, treatment plans and information security objectives"
          },
          {
            title: "Support",
            description: "Resources, competencies, awareness, communication and documented information"
          },
          {
            title: "Operation",
            description: "Implementation of risk treatment and operational procedures for information security"
          },
          {
            title: "Performance evaluation",
            description: "Monitoring, measurement, internal audits and management review of the ISMS"
          },
          {
            title: "Improvement",
            description: "Continuous improvement, incident handling and corrective actions"
          }
        ],
        challenges: {
          title: "Why is certification so labor-intensive?",
          items: [
            "Extensive documentation of all security processes and procedures",
            "Detailed risk analyses for all information assets",
            "Implementation and documentation of 114 security controls (Annex A)",
            "Training and awareness programs for all employees",
            "Continuous monitoring and reporting of security incidents"
          ]
        }
      },
      solution: {
        title: "How does Helpr.AI help?",
        subtitle: "From conversations to ready-made ISMS documentation",
        steps: [
          {
            number: "01",
            title: "ISMS Assessment Interview",
            description: "Answer questions about your IT environment, current security measures and risk landscape"
          },
          {
            number: "02", 
            title: "Automatic documentation",
            description: "AI generates risk register, policy documents and implementation plans based on your input"
          },
          {
            number: "03",
            title: "Annex A Controls",
            description: "Structured implementation and documentation of all relevant security measures"
          },
          {
            number: "04",
            title: "Audit preparation",
            description: "Complete ISMS documentation ready for internal and external audits"
          }
        ]
      },
      additional: {
        securityManagement: {
          title: "Information Security Management",
          description: "Systematic approach to managing sensitive company information and ensuring it remains secure."
        },
        finalCta: {
          title: "Ready to streamline your ISO 27001 certification?",
          description: "Transform your information security management from months of manual work to weeks of structured progress."
        }
      }
    },
    iso9001: {
      title: "{iso9001}ISO 9001{/iso9001} Quality Management",
      subtitle: "Streamline your ISO 9001 certification with AI-driven interviews and structured documentation.",
      cta: "Discover Helpr.AI",
      hero: {
        badge: "Quality management certification",
        description: "Shorten your ISO 9001 journey from months to weeks with automated documentation and compliance tracking."
      },
      about: {
        title: "What is ISO 9001?",
        description: "ISO 9001 is the international standard for quality management systems (QMS). It helps organizations consistently deliver high-quality products and services that meet customer and regulatory requirements.",
        importance: [
          "Improves customer satisfaction through consistent quality",
          "Increases operational efficiency and reduces waste", 
          "Creates a culture of continuous improvement",
          "Enhances market credibility and competitive advantage",
          "Required for many tenders and partnerships"
        ]
      },
      requirements: {
        title: "Certification Requirements",
        subtitle: "ISO 9001 certification requires a comprehensive quality management system",
        items: [
          {
            title: "Context of the organization",
            description: "Identify internal/external factors and stakeholders that affect the QMS"
          },
          {
            title: "Leadership and commitment",
            description: "Top management commitment, quality policy and roles/responsibilities"
          },
          {
            title: "Planning",
            description: "Risks and opportunities, quality objectives and plans to achieve them"
          },
          {
            title: "Support", 
            description: "Resources, competencies, awareness, communication and documented information"
          },
          {
            title: "Operation",
            description: "Operational planning, product realization and control of delivered products/services"
          },
          {
            title: "Performance evaluation",
            description: "Monitoring, measurement, internal audits and management review"
          },
          {
            title: "Improvement",
            description: "Continuous improvement, non-conformities and corrective actions"
          }
        ],
        challenges: {
          title: "Why is certification so time-consuming?",
          points: [
            "Extensive documentation of all processes and procedures",
            "Training staff on new ways of working and processes", 
            "Implementation of measurable quality objectives",
            "Setting up internal audit and continuous monitoring systems",
            "Preparation for external certification audit"
          ]
        }
      },
      helprSolution: {
        title: "How Helpr.AI helps",
        subtitle: "From months of documentation work to weeks of structured implementation",
        benefits: [
          {
            title: "Automated documentation",
            description: "AI interviews automatically generate process descriptions, procedures and quality manuals",
            icon: "DocumentTextIcon"
          },
          {
            title: "Compliance tracking",
            description: "Real-time overview of progress per ISO 9001 requirement and automatic gap analysis",
            icon: "CheckCircleIcon"
          },
          {
            title: "Template library",
            description: "Pre-built templates for all ISO 9001 sections, adapted to your industry",
            icon: "Square3Stack3DIcon"
          },
          {
            title: "Audit preparation",
            description: "Structured evidence collection and audit-ready documentation for certification",
            icon: "ShieldCheckIcon"
          }
        ],
        process: {
          title: "The process",
          steps: [
            {
              number: "01",
              title: "AI Interview",
              description: "Answer questions about your current processes, quality measures and organizational structure"
            },
            {
              number: "02", 
              title: "Automatic documentation",
              description: "AI generates quality manual, process descriptions and procedures based on your input"
            },
            {
              number: "03",
              title: "Review and adjustment", 
              description: "Check and adjust generated documents according to your specific needs"
            },
            {
              number: "04",
              title: "Implementation support",
              description: "Receive guidance for training, internal audits and preparation for certification"
            }
          ]
        }
      }
    },
    iso42001: {
      title: "{iso42001}ISO 42001{/iso42001} AI Management",
      subtitle: "Navigate the future of AI governance with structured certification and compliance tracking.",
      cta: "Discover Helpr.AI",
      hero: {
        badge: "AI governance certification",
        description: "The first international standard for AI management systems. Implement responsible AI with Helpr.AI's specialized approach."
      },
      about: {
        title: "What is ISO 42001?",
        description: "ISO 42001 is the first international standard for Artificial Intelligence Management Systems (AIMS). It provides a framework for organizations to responsibly develop, implement and manage AI systems.",
        aiRelevance: {
          title: "Why is this crucial in the AI era?",
          points: [
            "AI systems increasingly impact business-critical processes",
            "Regulatory pressure is mounting (EU AI Act, US AI Executive Orders)",
            "Customers and partners demand transparency in AI usage",
            "Risks of bias, privacy violations and unreliable output",
            "Competitive advantage through trusted, ethical AI implementation"
          ]
        },
        importance: [
          "Builds stakeholder trust in AI systems",
          "Reduces legal and reputational risks",
          "Ensures consistent AI governance across the organization",
          "Facilitates compliance with future AI regulation",
          "Improves AI system performance and reliability"
        ]
      },
      requirements: {
        title: "Certification Requirements",
        subtitle: "ISO 42001 requires a comprehensive AI management system focused on risk management",
        items: [
          {
            title: "AI Governance Framework",
            description: "Policies, roles and responsibilities for AI development and use throughout the organization"
          },
          {
            title: "Risk Assessment",
            description: "Systematic identification and evaluation of AI risks: bias, privacy, security, reliability"
          },
          {
            title: "Data Management",
            description: "Processes for data quality, privacy, security and lifecycle management for AI systems"
          },
          {
            title: "AI System Lifecycle", 
            description: "Structured development from design to deployment, monitoring and decommissioning"
          },
          {
            title: "Transparency and Explainability",
            description: "Documentation of AI decision-making and communication to stakeholders"
          },
          {
            title: "Human Oversight",
            description: "Human control and intervention capabilities in AI-driven processes"
          },
          {
            title: "Incident Management",
            description: "Procedures for AI-related incidents, corrective measures and lessons learned"
          },
          {
            title: "Performance Monitoring",
            description: "Continuous evaluation of AI system performance, accuracy and bias detection"
          }
        ],
        challenges: {
          title: "Why is AI governance so complex?",
          points: [
            "Multidisciplinary knowledge required: tech, legal, ethics, business",
            "Rapidly evolving regulatory landscape and best practices", 
            "Complex AI systems with opaque decision-making",
            "Organization-wide impact requires cultural change",
            "Balancing innovation with risk management",
            "Lack of standardized tools and methodologies"
          ]
        }
      },
      helprSolution: {
        title: "How Helpr.AI helps with AI governance",
        subtitle: "From AI chaos to structured governance with AI-native tools",
        aiAdvantage: {
          title: "AI understands AI",
          description: "Helpr.AI uses AI to simplify AI governance - a unique meta-approach that translates complex AI concepts into concrete implementation steps."
        },
        benefits: [
          {
            title: "AI Risk Assessment",
            description: "Automated identification of AI risks per use case, including bias detection and impact analysis",
            icon: "ExclamationTriangleIcon"
          },
          {
            title: "Governance Documentation",
            description: "AI-generated policy documents, procedures and frameworks specific to your AI landscape",
            icon: "DocumentTextIcon"
          },
          {
            title: "Compliance Mapping",
            description: "Automatic mapping of your AI systems against ISO 42001 requirements and future regulation",
            icon: "CheckCircleIcon"
          },
          {
            title: "Stakeholder Communication",
            description: "Clear, accessible explanations of AI systems for different audiences (management, legal, customers)",
            icon: "ChatBubbleLeftRightIcon"
          }
        ],
        process: {
          title: "The AI governance process",
          steps: [
            {
              number: "01",
              title: "AI Inventory & Assessment",
              description: "Identify all AI systems in your organization and evaluate their risks, impact and governance needs"
            },
            {
              number: "02", 
              title: "Governance Framework Design",
              description: "AI generates custom-made policies, procedures and governance structures based on your specific AI landscape"
            },
            {
              number: "03",
              title: "Implementation Roadmap", 
              description: "Structured implementation plan with priorities, timelines and stakeholder responsibilities"
            },
            {
              number: "04",
              title: "Monitoring & Compliance",
              description: "Continuous tracking of compliance status, performance metrics and emerging risks in your AI ecosystem"
            }
          ]
        }
      }
    },
    cta: {
      title: "Ready to discover what's possible?",
      description: "Discuss your specific certification needs and discover how Helpr.AI can help.",
      button: "Schedule a conversation"
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