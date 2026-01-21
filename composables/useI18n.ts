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
      demo: "Demo aanvragen"
    },
    hero: {
      badge: "ISO & CO2-Prestatieladder vereenvoudigd",
      title: "{aiInterviews}Sneller. Nauwkeuriger. Voordeliger.{/aiInterviews}",
      description: "Gegevensverzameling en -verwerking voor ISO en de CO2-Prestatieladder, zonder de chaos. Helpr.ai zet gestructureerde gesprekken om in audit-klare compliance output, zodat organisaties en consultants minder tijd besteden aan herhaalwerk en meer aan waardecreatie.",
      tagline: "Nu beschikbaar voor {iso9001}ISO 9001{/iso9001}",
      cta: "Vraag een demo aan",
      ctaSecondary: "Bekijk hoe het werkt"
    },
    tagline: {
      title: "Van gesprek naar certificering.",
      subtitle: "Bij ISO-certificeringen en de CO2-Prestatieladder ligt de complexiteit meestal niet in de inhoud, maar in de dataverzameling. Helpr.ai vereenvoudigt dit proces en zorgt voor snellere, betrouwbaardere en kosteneffectievere certificering via gestructureerde interviews.",
      cta: "Ervaar het zelf"
    },
    value: {
      title: "Wat levert {helpr}Helpr.ai{/helpr} op?",
      subtitle: "Certificering die werkt voor zowel organisaties als consultants.",
      card1: {
        title: "Sneller",
        description: "Minder interviewrondes nodig. Snellere omzetting naar documentatie. Geen eindeloze herhaling van dezelfde vragen."
      },
      card2: {
        title: "Nauwkeuriger",
        description: "Extra interviews zijn eenvoudig uit te voeren. Minder tijdsdruk leidt tot betere antwoorden. Consistente, traceerbare output."
      },
      card3: {
        title: "Voordeliger",
        description: "Minder consultanturen besteed aan herhaling. Minder herwerk nodig. Lagere totale certificeringskosten."
      },
      stats: {
        reduction: "~50%",
        reductionLabel: "Tijdsbesparing",
        quality: "100%",
        qualityLabel: "Audit-klare output",
        integration: "5 min",
        integrationLabel: "Setup tijd",
        standards: "1",
        standardsLabel: "ISO standaard"
      },
      timeRemark: "In pilotprojecten bereiken organisaties doorgaans tot ~50% tijdsbesparing op gegevensverzameling en documentatie."
    },
    grant: {
      badge: "Erkend door ElevenLabs",
      title: "Wij hebben een ElevenLabs Grant ontvangen. Een erkenning van onze innovatieve aanpak in compliance."
    },
    common: {
      beta: "Beta",
      live: "Live",
      brand: "Helpr.AI",
      iso9001: "ISO 9001",
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
        "Ondersteunt ISO 9001, met ISO 27001 en ISO 42001 binnenkort beschikbaar."
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
        title: "Voor organisaties",
        subtitle: "MKB met ~30-250 medewerkers",
        challengesTitle: "Veelvoorkomende uitdagingen:",
        challenges: [
          "Certificering voelt zwaar en tijdrovend",
          "Medewerkers worden herhaaldelijk geïnterviewd",
          "Onzekerheid over gereedheid en kwaliteit"
        ],
        benefitsTitle: "Helpr.ai helpt door:",
        benefits: [
          "Interviews te structureren",
          "De interne werkdruk te verminderen",
          "Sneller en met vertrouwen audit-klaar te zijn"
        ],
        closing: "Certificering in de helft van de tijd, met duidelijkheid en controle."
      },
      consultants: {
        title: "Voor ISO & compliance consultants",
        challengesTitle: "Veelvoorkomende uitdagingen:",
        challenges: [
          "Repetitieve interviews",
          "Inconsistente inputkwaliteit",
          "Druk op tijd en marges"
        ],
        benefitsTitle: "Helpr.ai stelt je in staat om:",
        benefits: [
          "Sneller gegevens te verzamelen",
          "Consistentie en kwaliteit te verbeteren",
          "Te focussen op analyse en advieswerk"
        ],
        closing: "Minder herhaling. Meer waarde per opdracht."
      }
    },
    consultantValue: {
      title: "De waarde voor {consultants}compliance agencies{/consultants}",
      subtitle: "Helpr.AI verandert hoe adviesbureaus werken: meer klanten, hogere kwaliteit, minder tijd.",
      efficiency: {
        title: "Efficiëntie",
        description: "Transformeer je business model: van weken documentatiework naar dagen resultaat. Helpr.AI automatiseert de tijdrovende taken zodat consultants zich kunnen richten op strategisch advies en klantrelaties.",
        stats: {
          time: "60%",
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
          "Aanpasbare output",
          "Volledige branding controle"
        ]
      }
    },
    working: {
      title: "Hoe het {werkt}werkt{/werkt}",
      subtitle: "Drie stappen. Met maximale efficiëntie van gesprek naar certificering.",
      step1: {
        title: "AI Interview",
        description: "Stuur een uitnodiging naar de relevante medewerkers. Onze AI stelt de juiste vragen op basis van jouw bedrijfscontext.",
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
          title: "Uit te breiden naar meer normen",
          description: "Start met ISO 9001 en breid uit naar ISO 27001, ISO 42001, ISO 14001 en meer."
        }
      }
    },
    demo: {
      badge: "Probeer Helpr.ai",
      title: "ISO of de CO2-Prestatieladder stroomlijnen?",
      subtitle: "Vraag een demo aan en ontdek hoe Helpr.ai gegevensverzameling fundamenteel eenvoudiger maakt. Zonder extra druk op je team of consultants.",
      benefits: {
        walkthrough: {
          title: "Live walkthrough",
          description: "Ervaar zelf hoe AI-interviews werken in de praktijk"
        },
        examples: {
          title: "Audit-klare voorbeelden",
          description: "Bekijk concrete output voor ISO 9001"
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
        submit: "Vraag demo aan",
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
          answer: "We starten met ISO 9001. Binnenkort breiden we uit naar ISO 27001 en ISO 42001. Op de planning staan ook ISO 14001 en andere normen."
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
            name: "ISO 9001",
            description: "Kwaliteitsmanagement"
          },
          {
            name: "CO₂-Prestatieladder",
            description: "Duurzaamheid & CO₂-reductie"
          }
        ]
      },
      upcoming: {
        title: "Binnenkort beschikbaar",
        description: "Uitbreiding naar veel gevraagde managementsystemen",
        standards: [
          {
            name: "ISO 27001",
            description: "Informatiebeveiliging"
          },
          {
            name: "ISO 42001",
            description: "AI governance"
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
          "Samen met ons nieuwe standaarden toevoegen",
          "Flexibele aanpassing aan jouw werkwijze",
          "Partner-specifieke configuratie"
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
    },
    partner: {
      nav: "Voor partners",
      hero: {
        title: "Partnerprogramma Helpr.ai",
        subtitle: "Schaal certificeringstrajecten zonder in te leveren op kwaliteit.",
        intro: "Het partnerprogramma van Helpr.ai is ontwikkeld voor consultancybureaus die hun trajecten efficienter en grondiger willen uitvoeren."
      },
      whyPartners: {
        title: "Waarom Helpr.ai met partners werkt",
        intro: "Certificering is mensenwerk. Technologie versnelt, maar vervangt niet. Helpr.ai kiest bewust voor een partnergedreven model.",
        points: [
          "Partners blijven inhoudelijk verantwoordelijk",
          "Helpr.ai neemt repeterend werk weg",
          "Samen leveren we trajecten van hoge kwaliteit"
        ],
        conclusion: "Met Helpr.ai kunnen partners hun trajecten aanzienlijk efficienter uitvoeren, terwijl de inhoudelijke diepgang en kwaliteit behouden blijft of zelfs toeneemt."
      },
      whatHelprDoes: {
        title: "Wat Helpr.ai doet voor partners",
        points: [
          "Gestructureerde interviewsets per norm",
          "Vastleggen van kennis uit gesprekken",
          "Automatische generatie van audit-ready documentatie",
          "Consistente werkwijze over klanten heen",
          "Herbruikbare data en formats"
        ]
      },
      whatPartnersDo: {
        title: "Wat partners doen",
        points: [
          "Inhoudelijke begeleiding van klanten",
          "Interpretatie van normen",
          "Validatie van output",
          "Auditvoorbereiding",
          "Advies en besluitvorming"
        ]
      },
      forWhom: {
        title: "Voor wie is dit partnerprogramma?",
        suitable: {
          title: "Geschikt voor",
          points: [
            "ISO-consultancybureaus",
            "Duurzaamheids- en CO2-specialisten",
            "Kwaliteit & compliance adviseurs"
          ]
        },
        notSuitable: {
          title: "Niet geschikt voor",
          points: [
            "Tool-resellers",
            "Partijen zonder inhoudelijke begeleiding",
            "Doe-het-zelf certificering"
          ]
        }
      },
      program: {
        title: "Wat partners krijgen",
        points: [
          "Toegang tot het Helpr.ai platform",
          "Ondersteuning bij adoptie",
          "Doorontwikkeling in co-creatie",
          "Consistente en schaalbare werkwijze"
        ]
      },
      cta: {
        title: "Interesse in partnership?",
        description: "Neem contact met ons op om te verkennen of een partnership past bij jouw bureau.",
        button: "Interesse in partnership"
      }
    },
    customers: {
      nav: "Voor klanten",
      hero: {
        title: "Samen met onze partners: certificering goed geregeld",
        subtitle: "Helpr.ai werkt samen met ervaren consultancypartners om certificeringstrajecten slimmer, sneller en consistenter te laten verlopen, zonder in te leveren op kwaliteit.",
        intro: "Certificering draait niet alleen om normen en documenten, maar om context, keuzes en richting kiezen. Daarom combineren we bij Helpr.ai technologie met inhoudelijke begeleiding door gespecialiseerde partners."
      },
      howItWorks: {
        title: "Hoe werkt dit voor jou als organisatie?",
        intro: "Als klant werk je bij Helpr.ai altijd samen met een erkende consultancypartner. Helpr.ai levert de software die dataverzameling en documentatie structureert. Onze partners begeleiden het traject inhoudelijk en zorgen dat alles klopt richting audit.",
        points: [
          "Een geintegreerd traject",
          "Geen losse tooling",
          "Geen self-service certificering"
        ]
      },
      roles: {
        title: "Heldere rolverdeling, een gezamenlijk resultaat",
        helpr: {
          title: "Helpr.ai",
          points: [
            "Gestructureerde interviews om kennis op te halen",
            "Automatische vertaling naar audit-ready documentatie",
            "Consistente formats en herbruikbare output",
            "Minder handwerk en minder herhaling"
          ]
        },
        partner: {
          title: "Onze partners",
          points: [
            "Inhoudelijke interpretatie van normen",
            "Begeleiding bij keuzes en prioriteiten",
            "Validatie en kwaliteitscontrole",
            "Begeleiding richting audit"
          ]
        },
        result: {
          title: "Het resultaat voor jou als klant",
          description: "Een efficient en grondig certificeringstraject van hoge kwaliteit, met minder doorlooptijd, minder administratieve last, en tegen een scherpere prijs dan traditionele trajecten."
        }
      },
      alwaysPartner: {
        title: "Altijd begeleiding via een partner",
        intro: "Helpr.ai wordt nooit 'los' ingezet. Ook wanneer je Helpr.ai direct benadert, werken we altijd via een van onze partners.",
        conclusion: "Helpr.ai is het platform. Onze partners zijn jouw adviseur."
      },
      partners: {
        title: "Onze partners",
        intro: "We werken samen met ervaren consultancypartners die jouw certificeringstraject begeleiden.",
        coning: {
          name: "Coning Adviesgroep",
          description: "Specialist in kwaliteitsmanagement en ISO-certificeringen voor MKB en grotere organisaties.",
          expertise: "CO2-Prestatieladder, ISO 9001, ISO 14001"
        },
        certificeringsadvies: {
          name: "Certificeringsadvies Nederland",
          description: "Expert in certificeringstrajecten met focus op pragmatische implementatie en duurzame resultaten.",
          expertise: "ISO 9001, ISO 27001"
        },
        startButton: "Start traject"
      },
      cta: {
        title: "Wil je weten welke partner het beste past bij jouw organisatie?",
        description: "Neem contact op en we helpen je aan de juiste partner voor jouw certificeringstraject.",
        button: "Start jouw certificeringstraject"
      }
    },
    startForm: {
      badge: "Start je traject",
      title: "Start je certificeringstraject",
      subtitle: "Vul het formulier in en we koppelen je aan de juiste consultancypartner voor jouw organisatie.",
      formTitle: "Aanvraagformulier",
      formSubtitle: "We nemen binnen 1 werkdag contact op",
      form: {
        name: "Naam",
        namePlaceholder: "Jouw volledige naam",
        email: "E-mailadres",
        emailPlaceholder: "jouw@email.nl",
        phone: "Telefoonnummer",
        phonePlaceholder: "+31 6 12345678",
        company: "Organisatie",
        companyPlaceholder: "Naam van je organisatie",
        certification: "Gewenste certificering",
        certificationPlaceholder: "Selecteer een certificering",
        message: "Toelichting",
        messagePlaceholder: "Vertel ons meer over je situatie, doelen of vragen...",
        submit: "Verstuur aanvraag",
        privacy: "Door dit formulier te versturen ga je akkoord met ons privacybeleid."
      },
      benefits: {
        fast: {
          title: "Snelle reactie",
          description: "Binnen 1 werkdag nemen we contact op"
        },
        partner: {
          title: "Juiste partner",
          description: "We koppelen je aan een passende consultant"
        },
        quality: {
          title: "Kwaliteitsgarantie",
          description: "Ervaren partners met bewezen track record"
        }
      }
    },
    productPage: {
      nav: {
        features: "Functies",
        co2: "CO2-Prestatieladder",
        standards: "Standaarden"
      },
      hero: {
        badge: "AI-gestuurde certificering",
        title: "Van gesprek naar certificering",
        subtitle: "Helpr.ai vereenvoudigt certificeringstrajecten door AI-gestuurde interviews om te zetten in audit-ready documentatie. Sneller, nauwkeuriger en voordeliger.",
        learnMore: "Meer informatie"
      },
      howItWorks: {
        title: "Hoe werkt Helpr.ai?",
        subtitle: "Drie eenvoudige stappen van interview naar certificering-ready documentatie.",
        step1: {
          title: "AI Interview",
          description: "Onze AI-consultant voert gestructureerde interviews met de juiste medewerkers in je organisatie.",
          points: [
            "Spraakgestuurde interviews in natuurlijke taal",
            "Automatische follow-up vragen voor diepgang",
            "Flexibel in te plannen per medewerker",
            "Geen voorbereiding nodig"
          ]
        },
        step2: {
          title: "Automatisch structureren",
          description: "De verzamelde informatie wordt automatisch gestructureerd volgens de vereisten van de certificeringsnorm.",
          points: [
            "Mapping naar normhoofdstukken",
            "Identificatie van gaps en ontbrekende informatie",
            "Consistentiecontrole over alle interviews",
            "Real-time voortgangsinzicht"
          ]
        },
        step3: {
          title: "Export naar documentatie",
          description: "Genereer audit-ready documentatie die direct in je managementsysteem past.",
          points: [
            "Export naar Word, PDF of direct naar SharePoint",
            "Klaar voor review door consultant",
            "Voldoet aan audit-eisen",
            "Eenvoudig te updaten bij wijzigingen"
          ]
        }
      },
      co2: {
        badge: "Duurzaamheidscertificering",
        title: "CO2-Prestatieladder certificering",
        subtitle: "De CO2-Prestatieladder is het belangrijkste instrument voor duurzaam inkopen in Nederland. Helpr.ai maakt certificering eenvoudiger en effectiever.",
        what: {
          title: "Wat is de CO2-Prestatieladder?",
          description: "De CO2-Prestatieladder is een certificeringssysteem dat organisaties stimuleert om CO2-uitstoot te verminderen. Het wordt erkend door de OESO, IPCC en het World Economic Forum als best practice voor duurzaam inkopen.",
          points: [
            "Gunningsvoordeel bij aanbestedingen tot 10% fictieve korting",
            "Erkend door 300+ overheden en publieke opdrachtgevers",
            "Gecertificeerde organisaties reduceren CO2 twee keer zo snel",
            "75% van certificaathouders zijn MKB-bedrijven",
            "Uitbreiding naar Frankrijk, Duitsland, Ierland, Portugal en UK"
          ]
        },
        stats: {
          organizations: "gecertificeerde organisaties",
          authorities: "deelnemende overheden",
          reduction: "snellere CO2-reductie"
        },
        levels: {
          title: "De drie treden (versie 4.0, 2025)",
          step1: {
            title: "Trede 1: Interne operaties",
            description: "Focus op energiebesparing en Scope 1 & 2 emissies binnen de eigen organisatie. Vergelijkbaar met het voormalige niveau 3."
          },
          step2: {
            title: "Trede 2: Waardeketen",
            description: "Aanpak van emissies uit kernactiviteiten. Vereist een Klimaattransitieplan. Vergelijkbaar met het voormalige niveau 5."
          },
          step3: {
            title: "Trede 3: Net Zero 2050",
            description: "Streven naar net-zero emissies over alle scopes. Vereist een kwantitatief Klimaattransitieplan voor Scope 1, 2, 3 en buiten-grens emissies."
          }
        },
        howWeHelp: {
          title: "Hoe Helpr.ai helpt bij CO2-Prestatieladder",
          subtitle: "Wij vereenvoudigen het verzamelen van de benodigde informatie voor certificering.",
          benefits: [
            "Gestructureerde interviews voor footprint-gegevens",
            "Automatische mapping naar ladder-eisen",
            "Ondersteuning bij ketenanalyses",
            "Voortgangsrapportages voor audits"
          ]
        }
      },
      standards: {
        title: "Ondersteunde standaarden",
        subtitle: "Helpr.ai ondersteunt meerdere certificeringsnormen en breidt continu uit.",
        available: "Beschikbaar",
        coming: "Binnenkort",
        iso9001: "Kwaliteitsmanagementsysteem voor consistente producten en diensten.",
        co2: "Certificering voor CO2-reductie en duurzaam ondernemen.",
        iso27001: "Informatiebeveiliging en bescherming van gevoelige data.",
        iso14001: "Milieumanagementsysteem voor duurzame bedrijfsvoering."
      },
      cta: {
        title: "Klaar om te starten?",
        description: "Begin vandaag nog met je certificeringstraject. Wij koppelen je aan de juiste partner.",
        button: "Start je traject"
      }
    },
    about: {
      nav: "Over ons",
      hero: {
        badge: "Maak kennis met ons team",
        titleHighlight: "For the love of",
        titleRest: "Applied AI",
        description: "Bij Helpr.ai overbruggen we de kloof tussen complexe bedrijfsvraagstukken en de kracht van toegepaste AI. Wij geloven dat technologie het meest waardevol is wanneer het de mens ontlast van repetitief basiswerk, zodat expertise weer de ruimte krijgt."
      },
      mission: {
        title: "Onze missie",
        quote: "We capture what people say and turn it into what auditors need.",
        description: "Het verzamelen van de juiste informatie binnen een organisatie is vaak een hoofdpijndossier: data zit verspreid over verschillende mensen, afdelingen en documenten. Helpr.ai automatiseert dit proces door middel van gestructureerde AI-interviews. Wij luisteren, extraheren de essentie en zetten gesprekken om in gestructureerde, audit-ready documentatie."
      },
      team: {
        title: "Het Team",
        subtitle: "Samen werken we aan de toekomst van compliance automatisering.",
        jorien: {
          name: "Jorien Knevel",
          role: "The Human side of change",
          description: "Jorien richt zich op de menselijke kant van technologische transitie. Met haar ervaring zorgt zij ervoor dat de implementatie van AI niet alleen technisch klopt, maar ook daadwerkelijk landt binnen de organisatie."
        },
        jaap: {
          name: "Jaap Koelewijn",
          role: "AI Impact builder",
          description: "Jaap is de drijvende kracht achter het bouwen van oplossingen die direct resultaat leveren. Hij vertaalt complexe visies naar praktische AI-toepassingen die de dagelijkse praktijk van consultants en klanten verbeteren."
        },
        erik: {
          name: "Erik Methorst",
          role: "AI & Data Specialist",
          description: "Erik is de expert op het gebied van de onderliggende data en techniek. Hij zorgt ervoor dat de AI-interviews leiden tot consistente, herhaalbare en technisch hoogwaardige output waar auditors op kunnen bouwen."
        }
      },
      cta: {
        title: "Klaar voor de volgende stap?",
        description: "Helpr.ai vervangt de consultant niet, maar automatiseert het voorwerk zodat jij sneller en slimmer kunt werken.",
        button: "Vraag een demo aan",
        secondaryButton: "Bekijk het product"
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
      demo: "Request demo"
    },
    hero: {
      badge: "ISO & CO2 Performance Ladder simplified",
      title: "{aiInterviews}Faster. More accurate. More affordable.{/aiInterviews}",
      description: "Data collection and processing for ISO and the CO2 Performance Ladder, without the chaos. Helpr.ai turns structured conversations into audit-ready compliance output, so organizations and consultants spend less time repeating work and more time creating value.",
      tagline: "Now available for {iso9001}ISO 9001{/iso9001}",
      cta: "Request a demo",
      ctaSecondary: "See how it works"
    },
    tagline: {
      title: "From conversation to certification.",
      subtitle: "ISO certifications and the CO2 Performance Ladder rarely fail due to content. They fail due to inefficient data collection. Helpr.ai streamlines this process, making certification faster, more reliable and more cost-effective through structured interviews instead of fragmented documents.",
      cta: "Experience it yourself"
    },
    value: {
      title: "What does {helpr}Helpr.ai{/helpr} deliver?",
      subtitle: "Certification that works for both organizations and consultants.",
      card1: {
        title: "Faster",
        description: "Fewer interview rounds needed. Faster conversion to documentation. No endless repetition of the same questions."
      },
      card2: {
        title: "More accurate",
        description: "Additional interviews are easy to run. Less time pressure leads to better answers. Consistent, traceable output."
      },
      card3: {
        title: "More affordable",
        description: "Fewer consultant hours spent on repetition. Less rework needed. Lower total certification costs."
      },
      stats: {
        reduction: "~50%",
        reductionLabel: "Time savings",
        quality: "100%",
        qualityLabel: "Audit-ready output",
        integration: "5 min",
        integrationLabel: "Setup time",
        standards: "1",
        standardsLabel: "ISO standard"
      },
      timeRemark: "In pilot projects, organizations typically achieve up to ~50% time savings on data collection and documentation."
    },
    grant: {
      badge: "Recognized by ElevenLabs",
      title: "We have received an ElevenLabs Grant. A recognition of our innovative approach in compliance."
    },
    common: {
      beta: "Beta",
      live: "Live",
      brand: "Helpr.AI",
      iso9001: "ISO 9001",
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
        "Supports ISO 9001, with ISO 27001 and ISO 42001 coming soon."
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
        title: "For organizations",
        subtitle: "SMEs with ~30-250 employees",
        challengesTitle: "Common challenges:",
        challenges: [
          "Certification feels heavy and time-consuming",
          "Employees are repeatedly interviewed",
          "Uncertainty about readiness and quality"
        ],
        benefitsTitle: "Helpr.ai helps by:",
        benefits: [
          "Structuring interviews",
          "Reducing internal workload",
          "Reaching audit readiness faster and with confidence"
        ],
        closing: "Certification in half the time, with clarity and control."
      },
      consultants: {
        title: "For ISO & compliance consultants",
        challengesTitle: "Common challenges:",
        challenges: [
          "Repetitive interviews",
          "Inconsistent input quality",
          "Pressure on time and margins"
        ],
        benefitsTitle: "Helpr.ai enables you to:",
        benefits: [
          "Collect data faster",
          "Improve consistency and quality",
          "Focus on analysis and advisory work"
        ],
        closing: "Less repetition. More value per engagement."
      }
    },
    consultantValue: {
      title: "The value for {consultants}compliance agencies{/consultants}",
      subtitle: "Helpr.AI transforms how advisory firms work: more clients, higher quality, less time.",
      efficiency: {
        title: "Efficiency and Scale",
        description: "Transform your business model: from weeks of documentation work to days of results. Helpr.AI automates time-consuming tasks so consultants can focus on strategic advice and client relationships.",
        stats: {
          time: "60%",
          timeLabel: "less time per project"
        }
      },
      quality: {
        title: "Quality and Consistency",
        description: "AI ensures uniform, professional output regardless of experience level. Consistently high quality across all projects.",
        benefits: [
          "Prevents human errors and inconsistencies",
          "Reduced review time for consultants",
        ]
      },
      assurance: {
        title: "White labeled platform",
        description: "Offer Helpr.AI under your own brand with full control over branding and customer experience.",
        points: [
          "Customizable output",
          "Full branding control"
        ]
      }
    },
    working: {
      title: "How it {werkt}works{/werkt}",
      subtitle: "Three steps. With maximum efficiency from conversation to certification.",
      step1: {
        title: "AI Interview",
        description: "Send an invitation to the relevant employees. Our AI asks the right questions based on your business context.",
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
          title: "Expandable to more standards",
          description: "Start with ISO 9001 and expand to ISO 27001, ISO 42001, ISO 14001 and more."
        }
      }
    },
    demo: {
      badge: "Try Helpr.ai",
      title: "Looking to streamline ISO or the CO2 Performance Ladder?",
      subtitle: "Request a demo and see how Helpr.ai makes data collection fundamentally simpler. Without increasing pressure on your team or consultants.",
      benefits: {
        walkthrough: {
          title: "Live walkthrough",
          description: "Experience how AI interviews work in practice"
        },
        examples: {
          title: "Audit-ready examples",
          description: "View concrete output for ISO 9001"
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
        submit: "Request demo",
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
          answer: "We start with ISO 9001. Soon we will expand to ISO 27001 and ISO 42001. Also on the roadmap are ISO 14001 and other standards."
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
            name: "ISO 9001",
            description: "Quality management"
          },
          {
            name: "CO₂ Performance Ladder",
            description: "Sustainability & CO₂ reduction"
          }
        ]
      },
      upcoming: {
        title: "Coming soon",
        description: "Expansion to frequently requested management systems",
        standards: [
          {
            name: "ISO 27001",
            description: "Information security"
          },
          {
            name: "ISO 42001",
            description: "AI governance"
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
          "Work with us to add new standards",
          "Flexible adaptation to your workflow",
          "Partner-specific configuration"
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
    },
    partner: {
      nav: "For partners",
      hero: {
        title: "Helpr.ai Partner Program",
        subtitle: "Scale certification projects without compromising on quality.",
        intro: "The Helpr.ai partner program is designed for consultancy firms looking to execute their projects more efficiently and thoroughly."
      },
      whyPartners: {
        title: "Why Helpr.ai works with partners",
        intro: "Certification is people work. Technology accelerates, but doesn't replace. Helpr.ai consciously chooses a partner-driven model.",
        points: [
          "Partners remain substantively responsible",
          "Helpr.ai removes repetitive work",
          "Together we deliver high-quality projects"
        ],
        conclusion: "With Helpr.ai, partners can execute their projects significantly more efficiently, while maintaining or even increasing substantive depth and quality."
      },
      whatHelprDoes: {
        title: "What Helpr.ai does for partners",
        points: [
          "Structured interview sets per standard",
          "Capturing knowledge from conversations",
          "Automatic generation of audit-ready documentation",
          "Consistent methodology across clients",
          "Reusable data and formats"
        ]
      },
      whatPartnersDo: {
        title: "What partners do",
        points: [
          "Substantive guidance of clients",
          "Interpretation of standards",
          "Validation of output",
          "Audit preparation",
          "Advice and decision-making"
        ]
      },
      forWhom: {
        title: "Who is this partner program for?",
        suitable: {
          title: "Suitable for",
          points: [
            "ISO consultancy firms",
            "Sustainability and CO2 specialists",
            "Quality & compliance advisors"
          ]
        },
        notSuitable: {
          title: "Not suitable for",
          points: [
            "Tool resellers",
            "Parties without substantive guidance",
            "DIY certification"
          ]
        }
      },
      program: {
        title: "What partners receive",
        points: [
          "Access to the Helpr.ai platform",
          "Support with adoption",
          "Co-creation in development",
          "Consistent and scalable methodology"
        ]
      },
      cta: {
        title: "Interested in partnership?",
        description: "Contact us to explore whether a partnership fits your firm.",
        button: "Interested in partnership"
      }
    },
    customers: {
      nav: "For customers",
      hero: {
        title: "Together with our partners: certification done right",
        subtitle: "Helpr.ai works with experienced consultancy partners to make certification projects smarter, faster and more consistent, without compromising on quality.",
        intro: "Certification is not just about standards and documents, but about context, choices and direction. That's why at Helpr.ai we combine technology with substantive guidance from specialized partners."
      },
      howItWorks: {
        title: "How does this work for your organization?",
        intro: "As a customer at Helpr.ai, you always work together with a certified consultancy partner. Helpr.ai provides the software that structures data collection and documentation. Our partners guide the project substantively and ensure everything is correct for the audit.",
        points: [
          "One integrated project",
          "No loose tooling",
          "No self-service certification"
        ]
      },
      roles: {
        title: "Clear role division, one shared result",
        helpr: {
          title: "Helpr.ai",
          points: [
            "Structured interviews to capture knowledge",
            "Automatic translation to audit-ready documentation",
            "Consistent formats and reusable output",
            "Less manual work and less repetition"
          ]
        },
        partner: {
          title: "Our partners",
          points: [
            "Substantive interpretation of standards",
            "Guidance on choices and priorities",
            "Validation and quality control",
            "Guidance towards audit"
          ]
        },
        result: {
          title: "The result for you as a customer",
          description: "An efficient and thorough high-quality certification project, with less lead time, less administrative burden, and at a sharper price than traditional projects."
        }
      },
      alwaysPartner: {
        title: "Always guidance through a partner",
        intro: "Helpr.ai is never used 'standalone'. Even when you contact Helpr.ai directly, we always work through one of our partners.",
        conclusion: "Helpr.ai is the platform. Our partners are your advisor."
      },
      partners: {
        title: "Our partners",
        intro: "We work with experienced consultancy partners who guide your certification project.",
        coning: {
          name: "Coning Adviesgroep",
          description: "Specialist in quality management and ISO certifications for SMEs and larger organizations.",
          expertise: "CO2 Performance Ladder, ISO 9001, ISO 14001"
        },
        certificeringsadvies: {
          name: "Certificeringsadvies Nederland",
          description: "Expert in certification projects with focus on pragmatic implementation and sustainable results.",
          expertise: "ISO 9001, ISO 27001"
        },
        startButton: "Start project"
      },
      cta: {
        title: "Want to know which partner best fits your organization?",
        description: "Contact us and we'll help you find the right partner for your certification project.",
        button: "Start your certification project"
      }
    },
    startForm: {
      badge: "Start your project",
      title: "Start your certification project",
      subtitle: "Fill in the form and we will connect you with the right consultancy partner for your organization.",
      formTitle: "Request form",
      formSubtitle: "We will contact you within 1 business day",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email address",
        emailPlaceholder: "your@email.com",
        phone: "Phone number",
        phonePlaceholder: "+31 6 12345678",
        company: "Organization",
        companyPlaceholder: "Name of your organization",
        certification: "Desired certification",
        certificationPlaceholder: "Select a certification",
        message: "Additional information",
        messagePlaceholder: "Tell us more about your situation, goals or questions...",
        submit: "Submit request",
        privacy: "By submitting this form you agree to our privacy policy."
      },
      benefits: {
        fast: {
          title: "Quick response",
          description: "We will contact you within 1 business day"
        },
        partner: {
          title: "Right partner",
          description: "We connect you with a suitable consultant"
        },
        quality: {
          title: "Quality guarantee",
          description: "Experienced partners with proven track record"
        }
      }
    },
    productPage: {
      nav: {
        features: "Features",
        co2: "CO2 Performance Ladder",
        standards: "Standards"
      },
      hero: {
        badge: "AI-powered certification",
        title: "From conversation to certification",
        subtitle: "Helpr.ai simplifies certification processes by converting AI-powered interviews into audit-ready documentation. Faster, more accurate, and more affordable.",
        learnMore: "Learn more"
      },
      howItWorks: {
        title: "How does Helpr.ai work?",
        subtitle: "Three simple steps from interview to certification-ready documentation.",
        step1: {
          title: "AI Interview",
          description: "Our AI consultant conducts structured interviews with the right employees in your organization.",
          points: [
            "Voice-driven interviews in natural language",
            "Automatic follow-up questions for depth",
            "Flexible scheduling per employee",
            "No preparation needed"
          ]
        },
        step2: {
          title: "Automatic structuring",
          description: "The collected information is automatically structured according to the certification standard requirements.",
          points: [
            "Mapping to standard chapters",
            "Identification of gaps and missing information",
            "Consistency check across all interviews",
            "Real-time progress insight"
          ]
        },
        step3: {
          title: "Export to documentation",
          description: "Generate audit-ready documentation that fits directly into your management system.",
          points: [
            "Export to Word, PDF or directly to SharePoint",
            "Ready for consultant review",
            "Meets audit requirements",
            "Easy to update when changes occur"
          ]
        }
      },
      co2: {
        badge: "Sustainability certification",
        title: "CO2 Performance Ladder certification",
        subtitle: "The CO2 Performance Ladder is the leading instrument for sustainable procurement in the Netherlands. Helpr.ai makes certification simpler and more effective.",
        what: {
          title: "What is the CO2 Performance Ladder?",
          description: "The CO2 Performance Ladder is a certification system that encourages organizations to reduce CO2 emissions. It is recognized by the OECD, IPCC, and World Economic Forum as a best practice for sustainable procurement.",
          points: [
            "Award advantage in tenders up to 10% fictitious discount",
            "Recognized by 300+ governments and public contracting authorities",
            "Certified organizations reduce CO2 twice as fast",
            "75% of certificate holders are SMEs",
            "Expanding to France, Germany, Ireland, Portugal and UK"
          ]
        },
        stats: {
          organizations: "certified organizations",
          authorities: "participating authorities",
          reduction: "faster CO2 reduction"
        },
        levels: {
          title: "The three steps (version 4.0, 2025)",
          step1: {
            title: "Step 1: Internal operations",
            description: "Focus on energy savings and Scope 1 & 2 emissions within the organization. Comparable to former Level 3."
          },
          step2: {
            title: "Step 2: Value chain",
            description: "Addressing emissions from core activities. Requires a Climate Transition Plan. Comparable to former Level 5."
          },
          step3: {
            title: "Step 3: Net Zero 2050",
            description: "Achieving net-zero emissions across all scopes. Requires a quantitative Climate Transition Plan for Scope 1, 2, 3 and outside-boundary emissions."
          }
        },
        howWeHelp: {
          title: "How Helpr.ai helps with CO2 Performance Ladder",
          subtitle: "We simplify collecting the required information for certification.",
          benefits: [
            "Structured interviews for footprint data",
            "Automatic mapping to ladder requirements",
            "Support for chain analyses",
            "Progress reports for audits"
          ]
        }
      },
      standards: {
        title: "Supported standards",
        subtitle: "Helpr.ai supports multiple certification standards and is continuously expanding.",
        available: "Available",
        coming: "Coming soon",
        iso9001: "Quality management system for consistent products and services.",
        co2: "Certification for CO2 reduction and sustainable business.",
        iso27001: "Information security and protection of sensitive data.",
        iso14001: "Environmental management system for sustainable operations."
      },
      cta: {
        title: "Ready to get started?",
        description: "Start your certification journey today. We will connect you with the right partner.",
        button: "Start your project"
      }
    },
    about: {
      nav: "About Us",
      hero: {
        badge: "Meet our team",
        titleHighlight: "For the love of",
        titleRest: "Applied AI",
        description: "At Helpr.ai, we bridge the gap between complex business challenges and the power of applied AI. We believe technology is most valuable when it relieves people from repetitive basic work, giving expertise the space it deserves."
      },
      mission: {
        title: "Our Mission",
        quote: "We capture what people say and turn it into what auditors need.",
        description: "Collecting the right information within an organization is often a headache: data is scattered across different people, departments, and documents. Helpr.ai automates this process through structured AI interviews. We listen, extract the essence, and transform conversations into structured, audit-ready documentation."
      },
      team: {
        title: "The Team",
        subtitle: "Together we work on the future of compliance automation.",
        jorien: {
          name: "Jorien Knevel",
          role: "The Human side of change",
          description: "Jorien focuses on the human side of technological transition. With her experience, she ensures that AI implementation is not only technically sound but also truly lands within the organization."
        },
        jaap: {
          name: "Jaap Koelewijn",
          role: "AI Impact builder",
          description: "Jaap is the driving force behind building solutions that deliver immediate results. He translates complex visions into practical AI applications that improve the daily practice of consultants and clients."
        },
        erik: {
          name: "Erik Methorst",
          role: "AI & Data Specialist",
          description: "Erik is the expert in underlying data and technology. He ensures that AI interviews lead to consistent, repeatable, and technically high-quality output that auditors can build upon."
        }
      },
      cta: {
        title: "Ready for the next step?",
        description: "Helpr.ai doesn't replace the consultant, but automates the groundwork so you can work faster and smarter.",
        button: "Request a demo",
        secondaryButton: "View the product"
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