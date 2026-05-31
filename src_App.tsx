/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { X, ShieldCheck, CreditCard, Lock, Sparkles, ChevronRight, Star, Quote, ChevronLeft } from "lucide-react";
import { useState, useEffect, useCallback, useMemo } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const TRANSLATIONS: Record<string, any> = {
  fr: {
    heroTag: "EXCELLENT RESULTS",
    heroTitle: "Le meilleur",
    heroTitleItalic: "Transformateur",
    clickToPlay: "Cliquer pour lire",
    resultsTitle: "Des résultats qui parlent d'eux-mêmes",
    resultsSubtitle: "Découvrez la puissance de notre transformateur IA à travers ces créations uniques.",
    howItWorksTitle: "Comment ça marche",
    howItWorksDescr: "After purchasing the TRANSFORMER, you will have two files, one that serves as documentation and the other, which is the operating system. You will follow the documentation to use the operating system, and in just 10 minutes you will be ready to use Transformers and start creating. It's as simple as that.",
    step1: "Insérez une photo de référence",
    step2: "Insérez une vidéo de référence",
    step3: "Capture des émotions",
    step4: "Capture des mouvements",
    step5: "Assemblez le tout et votre vidéo est prête.",
    pricingTitle: "Passez à l'action",
    pricingSubtitle: "Choisissez le plan qui vous convient et commencez à transformer vos idées dès aujourd'hui.",
    planStarter: "Starter",
    planPro: "Accès à vie",
    planEnterprise: "Entreprise",
    priceStarter: "0€",
    pricePro: "47€",
    priceEnterprise: "99€",
    pricePeriod: "",
    ctaStarter: "Commencer gratuitement",
    ctaPro: "Acheter maintenant",
    ctaEnterprise: "Contacter l'équipe",
    feature1: "Générations Illimitées",
    feature2: "Qualité HD",
    feature3: "Access WorkFlow",
    feature4: "Qualité 4K Ultra",
    feature5: "Support prioritaire",
    feature6: "API & Intégrations",
    paymentTitle: "Finaliser l'achat",
    paymentSecure: "Paiement sécurisé via Stripe",
    orderSummary: "Récapitulatif de la commande",
    total: "Total",
    payNow: "Payer maintenant",
    cancel: "Annuler",
    footer: "© 2026 Transformeur IA • Paris, France"
  },
  en: {
    heroTag: "EXCELLENT RESULTS",
    heroTitle: "The best",
    heroTitleItalic: "Transformer",
    clickToPlay: "Click to play",
    resultsTitle: "Results that speak for themselves",
    resultsSubtitle: "Experience the ultimate power of our AI transformer through these real-world creations.",
    howItWorksTitle: "How it works",
    howItWorksDescr: "After purchasing the TRANSFORMER, you will have two files, one that serves as documentation and the other, which is the operating system. You will follow the documentation to use the operating system, and in just 10 minutes you will be ready to use Transformers and start creating. It's as simple as that.",
    step1: "Insert a reference photo",
    step2: "Insert a reference video",
    step3: "Capturing emotions",
    step4: "Capture the movements",
    step5: "Put it all together and your video is ready.",
    pricingTitle: "Ready to Start ?",
    pricingSubtitle: "Choose the perfect plan for your creative journey and start transforming today.",
    planStarter: "Starter",
    planPro: "Lifetime",
    planEnterprise: "Enterprise",
    priceStarter: "$0",
    pricePro: "$47",
    priceEnterprise: "$99",
    pricePeriod: "",
    ctaStarter: "Start for free",
    ctaPro: "Buy Now",
    ctaEnterprise: "Contact Sales",
    feature1: "Unlimited Generations",
    feature2: "HD Quality",
    feature3: "Access WorkFlow",
    feature4: "4K Ultra Quality",
    feature5: "Priority Support",
    feature6: "API & Integrations",
    paymentTitle: "Complete Purchase",
    paymentSecure: "Secure payment via Stripe",
    orderSummary: "Order summary",
    total: "Total",
    payNow: "Pay Now",
    cancel: "Cancel",
    footer: "© 2026 AI Transformer • Paris, France"
  },
  es: {
    heroTag: "EXCELLENT RESULTS",
    heroTitle: "El mejor",
    heroTitleItalic: "Transformador",
    clickToPlay: "Clic para reproducir",
    resultsTitle: "Resultados que hablan por sí mismos",
    resultsSubtitle: "Experimente el máximo poder de nuestro transformador de IA a través de estas creaciones.",
    howItWorksTitle: "Cómo funciona",
    howItWorksDescr: "After purchasing the TRANSFORMER, you will have two files, one that serves as documentation and the other, which is the operating system. You will follow the documentation to use the operating system, and in just 10 minutes you will be ready to use Transformers and start creating. It's as simple as that.",
    step1: "Inserte una foto de referencia",
    step2: "Inserte un video de referencia",
    step3: "Capturando emociones",
    step4: "Captura los movimientos",
    step5: "Júntalo todo y tu video estará listo.",
    pricingTitle: "¡Empieza Ahora!",
    pricingSubtitle: "Elige el plan perfecto para tu viaje creativo y empieza a transformar hoy.",
    planStarter: "Básico",
    planPro: "Acceso de por vida",
    planEnterprise: "Empresa",
    priceStarter: "0€",
    pricePro: "47€",
    priceEnterprise: "99€",
    pricePeriod: "",
    ctaStarter: "Empezar gratis",
    ctaPro: "Comprar ahora",
    ctaEnterprise: "Contactar",
    feature1: "Generaciones Ilimitadas",
    feature2: "Calidad HD",
    feature3: "Access WorkFlow",
    feature4: "Calidad 4K Ultra",
    feature5: "Soporte prioritario",
    feature6: "API e Integraciones",
    footer: "© 2026 Transformador IA • París, Francia"
  },
  it: {
    heroTag: "EXCELLENT RESULTS",
    heroTitle: "Il miglior",
    heroTitleItalic: "Trasformatore",
    clickToPlay: "Clicca per guardare",
    resultsTitle: "Risultati che parlano da soli",
    resultsSubtitle: "Scopri la potenza del nostro trasformatore IA attraverso queste creazioni reali.",
    howItWorksTitle: "Come funziona",
    howItWorksDescr: "After purchasing the TRANSFORMER, you will have two files, one that serves as documentation and the other, which is the operating system. You will follow the documentation to use the operating system, and in just 10 minutes you will be ready to use Transformers and start creating. It's as simple as that.",
    step1: "Inserisci una foto di riferimento",
    step2: "Inserisci un video di riferimento",
    step3: "Catturare le emozioni",
    step4: "Cattura i movimenti",
    step5: "Metti tutto insieme e il tuo video è pronto.",
    pricingTitle: "Pronto per Iniziare ?",
    pricingSubtitle: "Scegli il piano perfetto per il tuo viaggio creativo e inizia a trasformare oggi.",
    planStarter: "Base",
    planPro: "Accesso a vita",
    planEnterprise: "Enterprise",
    priceStarter: "0€",
    pricePro: "47€",
    priceEnterprise: "99€",
    pricePeriod: "",
    ctaStarter: "Inizia gratis",
    ctaPro: "Acquista ora",
    ctaEnterprise: "Contatta Sales",
    feature1: "Generazioni Illimitate",
    feature2: "Qualità HD",
    feature3: "Access WorkFlow",
    feature4: "Qualità 4K Ultra",
    feature5: "Supporto prioritario",
    feature6: "API & Integrazioni",
    footer: "© 2026 Trasformatore IA • Parigi, Francia"
  },
  tr: {
    heroTag: "EXCELLENT RESULTS",
    heroTitle: "En iyi",
    heroTitleItalic: "Dönüştürücü",
    clickToPlay: "Oynatmak için tıkla",
    resultsTitle: "Kendini anlatan sonuçlar",
    resultsSubtitle: "Yapay zeka dönüştürücümüzün gücünü bu gerçek dünya örnekleriyle keşfedin.",
    howItWorksTitle: "Nasıl çalışır",
    howItWorksDescr: "After purchasing the TRANSFORMER, you will have two files, one that serves as documentation and the other, which is the operating system. You will follow the documentation to use the operating system, and in just 10 minutes you will be ready to use Transformers and start creating. It's as simple as that.",
    step1: "Referans bir fotoğraf ekleyin",
    step2: "Referans bir video ekleyin",
    step3: "Duyguları yakalama",
    step4: "Hareketleri yakalayın",
    step5: "Hepsini bir araya getirin ve videonuz hazır.",
    pricingTitle: "Başlamaya Hazır mısın ?",
    pricingSubtitle: "Yaratıcı yolculuğunuz için mükemmel planı seçin ve bugün dönüştürmeye başlayın.",
    planStarter: "Başlangıç",
    planPro: "Ömür Boyu",
    planEnterprise: "Kurumsal",
    priceStarter: "0₺",
    pricePro: "470₺",
    priceEnterprise: "999₺",
    pricePeriod: "",
    ctaStarter: "Ücretsiz başla",
    ctaPro: "Şimdi Satın Al",
    ctaEnterprise: "Ekibimizle İletişime Geçin",
    feature1: "Sınırsız Üretim",
    feature2: "HD Kalitesi",
    feature3: "Access WorkFlow",
    feature4: "4K Ultra Kalite",
    feature5: "Öncelikli Destek",
    feature6: "API ve Entegrasyonlar",
    footer: "© 2026 YZ Dönüştürücü • Paris, Fransa"
  },
  pt: {
    heroTag: "EXCELLENT RESULTS",
    heroTitle: "O melhor",
    heroTitleItalic: "Transformador",
    clickToPlay: "Clique para reproduzir",
    resultsTitle: "Resultados que falam por si mesmos",
    resultsSubtitle: "Experimente o poder supremo do nosso transformador de IA através destas criações.",
    howItWorksTitle: "Como funciona",
    howItWorksDescr: "After purchasing the TRANSFORMER, you will have two files, one that serves as documentation and the other, which is the operating system. You will follow the documentation to use the operating system, and in just 10 minutes you will be ready to use Transformers and start creating. It's as simple as that.",
    step1: "Insira uma foto de referência",
    step2: "Insira um vídeo de referência",
    step3: "Capturando emoções",
    step4: "Capture os movimentos",
    step5: "Junte tudo e seu vídeo estará pronto.",
    pricingTitle: "Pronto para Começar ?",
    pricingSubtitle: "Escolha o plano perfeito para sua jornada criativa e começe a transformar hoje.",
    planStarter: "Iniciante",
    planPro: "Acesso vitalício",
    planEnterprise: "Empresa",
    priceStarter: "R$0",
    pricePro: "R$235",
    priceEnterprise: "R$499",
    pricePeriod: "",
    ctaStarter: "Começar grátis",
    ctaPro: "Comprar agora",
    ctaEnterprise: "Contactar Vendas",
    feature1: "Gerações Ilimitadas",
    feature2: "Qualidade HD",
    feature3: "Access WorkFlow",
    feature4: "Qualidade 4K Ultra",
    feature5: "Suporte Prioritário",
    feature6: "API & Integrações",
    footer: "© 2026 Transformador de IA • Paris, França"
  },
  de: {
    heroTag: "EXCELLENT RESULTS",
    heroTitle: "Der beste",
    heroTitleItalic: "Transformator",
    clickToPlay: "Klicken zum Abspielen",
    resultsTitle: "Ergebnisse, die für sich selbst sprechen",
    resultsSubtitle: "Erleben Sie die bahnbrechende Kraft unseres KI-Transformators anhand dieser Beispiele.",
    howItWorksTitle: "Wie es funktioniert",
    howItWorksDescr: "After purchasing the TRANSFORMER, you will have two files, one that serves as documentation and the other, which is the operating system. You will follow the documentation to use the operating system, and in just 10 minutes you will be ready to use Transformers and start creating. It's as simple as that.",
    step1: "Fügen Sie ein Referenzfoto ein",
    step2: "Fügen Sie ein Referenzvideo ein",
    step3: "Emotionen einfangen",
    step4: "Erfassen Sie die Bewegungen",
    step5: "Fügen Sie alles zusammen und Ihr Video ist fertig.",
    pricingTitle: "Bereit loszulegen ?",
    pricingSubtitle: "Wählen Sie den perfekten Plan für Ihre kreative Reise und beginnen Sie noch heute mit der Transformation.",
    planStarter: "Starter",
    planPro: "Lebenslanger Zugriff",
    planEnterprise: "Enterprise",
    priceStarter: "0€",
    pricePro: "47€",
    priceEnterprise: "99€",
    pricePeriod: "",
    ctaStarter: "Kostenlos starten",
    ctaPro: "Jetzt kaufen",
    ctaEnterprise: "Vertrieb kontaktieren",
    feature1: "Unbegrenzte Generationen",
    feature2: "HD-Qualität",
    feature3: "Access WorkFlow",
    feature4: "4K-Ultra-Qualität",
    feature5: "Prioritärer Support",
    feature6: "API & Integrationen",
    footer: "© 2026 KI-Transformator • Paris, Deutschland"
  },
  nl: {
    heroTag: "EXCELLENT RESULTS",
    heroTitle: "De beste",
    heroTitleItalic: "Transformator",
    clickToPlay: "Klik om te spelen",
    resultsTitle: "Resultaten die voor zichzelf spreken",
    resultsSubtitle: "Ervaar de ultieme kracht van onze AI-transformator via deze realistische creaties.",
    howItWorksTitle: "Hoe het werkt",
    howItWorksDescr: "After purchasing the TRANSFORMER, you will have two files, one that serves as documentation and the other, which is the operating system. You will follow the documentation to use the operating system, and in just 10 minutes you will be ready to use Transformers and start creating. It's as simple as that.",
    step1: "Voeg een referentiefoto in",
    step2: "Voeg een referentievideo in",
    step3: "Emoties vastleggen",
    step4: "Leg de bewegingen vast",
    step5: "Zet het allemaal samen en je video is klaar.",
    pricingTitle: "Klaar om te beginnen ?",
    pricingSubtitle: "Kies het perfecte plan voor jouw creatieve reis en begin vandaag nog met transformeren.",
    planStarter: "Starter",
    planPro: "Levenslange toegang",
    planEnterprise: "Enterprise",
    priceStarter: "0€",
    pricePro: "47€",
    priceEnterprise: "99€",
    pricePeriod: "",
    ctaStarter: "Gratis starten",
    ctaPro: "Nu kopen",
    ctaEnterprise: "Contact Sales",
    feature1: "Onbeperkte Generaties",
    feature2: "HD-kwaliteit",
    feature3: "Access WorkFlow",
    feature4: "4K-ultra-kwaliteit",
    feature5: "Prioritaire ondersteuning",
    feature6: "API & Integraties",
    footer: "© 2026 AI-Transformator • Parijs, Frankrijk"
  }
};

const VIDEOS = [
  { id: "1189233485", hash: "e3a693b871", title: "vimeo-player" },
  { id: "1189234028", title: "Vimeo Video Result 2" },
  { id: "1189232746", title: "Vimeo Video Result 3" },
];

const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', name: 'English', label: 'EN' },
  { code: 'fr', flag: '🇫🇷', name: 'Français', label: 'FR' },
  { code: 'es', flag: '🇪🇸', name: 'Español', label: 'ES' },
  { code: 'it', flag: '🇮🇹', name: 'Italiano', label: 'IT' },
  { code: 'tr', flag: '🇹🇷', name: 'Türkçe', label: 'TR' },
  { code: 'pt', flag: '🇵🇹', name: 'Português', label: 'PT' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch', label: 'DE' },
  { code: 'nl', flag: '🇳🇱', name: 'Nederlands', label: 'NL' }
];

const TESTIMONIALS_DATA: Record<string, {
  title: string;
  subtitle: string;
  items: Array<{
    author: string;
    role: string;
    content: string;
    avatar: string;
    rating: number;
    tag: string;
  }>
}> = {
  fr: {
    title: "Ce qu'en disent les créateurs",
    subtitle: "Retours d’expérience de studios et d'artistes d'élite à travers le monde.",
    items: [
      {
        author: "Alexandre M.",
        role: "Directeur de l'Innovation VFX",
        content: "Le workflow Transformer JSON est époustouflant. Notre pipeline de production est passé de plusieurs heures de rendu à quelques secondes d’exécution locale.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Vitesse Incroyable"
      },
      {
        author: "Dr. Sarah K.",
        role: "Artiste Numérique & Chercheuse",
        content: "L'installation s'est faite en exactement 8 minutes en suivant le guide PDF d'accompagnement. La précision de capture des mouvements est inégalée.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Précision Ultime"
      },
      {
        author: "Diego R.",
        role: "Technologue Créatif",
        content: "Nous avons intégré ce Transformer IA dans trois projets commerciaux d'envergure ce mois-ci. C'est l'investissement le plus rentable de l'année.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Super Rentable"
      },
      {
        author: "Elena S.",
        role: "Designer de Produits IA",
        content: "Un support incroyable et des performances irréprochables. C’est magique d'obtenir une telle fluidité d'animation en quelques clics.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Recommandé à 100%"
      }
    ]
  },
  en: {
    title: "What Creators Are Saying",
    subtitle: "Real feedback from outstanding artists, developers, and world-class studios.",
    items: [
      {
        author: "Alexandre M.",
        role: "Director of VFX Innovation",
        content: "The Transformer JSON workflow is mind-blowing. Our production pipeline went from hours of rendering to just a few seconds of local execution.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Amazing Speed"
      },
      {
        author: "Dr. Sarah K.",
        role: "Digital Artist & Researcher",
        content: "The environment setup took me exactly 8 minutes following the PDF guide. The precision of emotion and movement capturing is incredible.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Ultra Precise"
      },
      {
        author: "Diego R.",
        role: "Creative Technologist",
        content: "We've integrated this AI Transformer into three major commercial projects this month. Best ROI we have ever received.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Highest ROI"
      },
      {
        author: "Elena S.",
        role: "AI Product Designer",
        content: "Amazing support and flawless performance. It feels like absolute magic to watch assets convert in high resolution so effortlessly.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Highly Recommended"
      }
    ]
  },
  es: {
    title: "Lo que dicen los creadores",
    subtitle: "Comentarios reales de destacados artistas, desarrolladores y estudios de primer nivel.",
    items: [
      {
        author: "Alexandre M.",
        role: "Director de Innovación & VFX",
        content: "El flujo de trabajo de Transformer JSON es alucinante. Nuestro pipeline pasó de horas de renderizado a solo unos segundos de ejecución local.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Velocidad Increíble"
      },
      {
        author: "Dra. Sarah K.",
        role: "Artista Digital & Investigadora",
        content: "La configuración del entorno llevó exactamente 8 minutos siguiendo la guía PDF. La precisión de la captura de emociones y movimientos es espectacular.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Súper Preciso"
      },
      {
        author: "Diego R.",
        role: "Tecnólogo Creativo",
        content: "Hemos integrado Transformer JSON en tres proyectos comerciales de gran escala este mes. Es la mayor revolución de productividad.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Alta Rentabilidad"
      },
      {
        author: "Elena S.",
        role: "Diseñadora de Productos de IA",
        content: "Soporte excelente y rendimiento impecable. Parece magia ver cómo se procesan activos complejos en resolución ultra detallada sin esfuerzo.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Recomendado"
      }
    ]
  },
  it: {
    title: "Cosa dicono i creatori",
    subtitle: "Feedback autentici da artisti eccezionali, sviluppatori e studi internazionali.",
    items: [
      {
        author: "Alexandre M.",
        role: "Direttore dell'Innovazione VFX",
        content: "Il workflow Transformer JSON è straordinario. La nostra pipeline di creazione è passata da ore di rendering a pochi secondi di esecuzione locale.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Velocità Incredibile"
      },
      {
        author: "Dr. Sarah K.",
        role: "Artista Digitale & Ricercatrice",
        content: "La configurazione ha richiesto circa 8 minuti seguendo il manuale PDF. La fedeltà nella cattura di espressioni e movimenti è sbalorditiva.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Fedeltà Estrema"
      },
      {
        author: "Diego R.",
        role: "Tecnologo Creativo",
        content: "Abbiamo implementato questo Transformer IA in tre produzioni commerciali questo mese. Sorpassa ogni altro sistema proprietario provato.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Altissimo ROI"
      },
      {
        author: "Elena S.",
        role: "AI Product Designer",
        content: "Supporto prontissimo e prestazioni spettacolari. Sembra una magia veder caricare ed elaborare geometrie complesse così fluidamente.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Consigliatissimo"
      }
    ]
  },
  tr: {
    title: "Kullanıcılarımızın Yorumları",
    subtitle: "Dünyanın dört bir yanından seçkin sanatçıların ve yenilikçi stüdyoların gerçek deneyimleri.",
    items: [
      {
        author: "Alexandre M.",
        role: "YV & VFX İnovasyon Lideri",
        content: "Transformer JSON iş akışı tek kelimeyle baş döndürücü. Üretim bandımız saatler süren render işlemlerinden saniyeler içinde yerel yürütmeye geçti.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Kusursuz Hız"
      },
      {
        author: "Dr. Sarah K.",
        role: "Dijital Sanatçı & Araştırmacı",
        content: "PDF kılavuzunu takip ederek kurulumu tam 8 dakikada tamamladım. Mimik ve hareket yakalamadaki hassasiyet gerçekten eşsiz seviyede.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Yüksek Hassasiyet"
      },
      {
        author: "Diego R.",
        role: "Yaratıcı Teknolog",
        content: "Bu ay Transformer JSON sistemini üç büyük ticari projede kullandık. Alabileceğimiz en yüksek üretkenlik artışını ve yatırım getirisini sağladı.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Harika Verim"
      },
      {
        author: "Elena S.",
        role: "YZ Ürün Tasarımcısı",
        content: "Mükemmel destek ve pürüzsüz çalışma deneyimi. Karmaşık 3D varlıkların yüksek çözünürlükte bu kadar hızlı dönüşmesini izlemek adeta büyüleyici.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Şiddetle Tavsiye Edilir"
      }
    ]
  },
  pt: {
    title: "O Que Dizem os Especialistas",
    subtitle: "Feedback genuíno de artistas, programadores e estúdios digitais profissionais.",
    items: [
      {
        author: "Alexandre M.",
        role: "Diretor de Inovação VFX",
        content: "O workflow do Transformer JSON é brilhante. Nosso fluxo produtivo reduziu horas de processamento pesado para meros segundos localmente.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Rapidez Excepcional"
      },
      {
        author: "Dra. Sarah K.",
        role: "Artista Digital & Pesquisadora",
        content: "Consegui configurar o ambiente em exatamente 8 minutos com o guia PDF incluído. A fidelidade na captura de expressões é algo fora de série.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Alta Fidelidade"
      },
      {
        author: "Diego R.",
        role: "Tecnólogo Creativo",
        content: "Integramos o Transformer JSON em três propostas comerciais internacionais de peso neste mês. O melhor investimento para estúdios digitais.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Grande Produtividade"
      },
      {
        author: "Elena S.",
        role: "Designer de Produtos de IA",
        content: "Suporte atencioso e rendimento impecável. É quase mágico assistir a transformações tridimensionais complexas rodando instantaneamente.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "100% Recomendado"
      }
    ]
  },
  de: {
    title: "Was Kreative Berichten",
    subtitle: "Echtes Feedback von hochkarätigen Künstlern, Entwicklern und Studios weltweit.",
    items: [
      {
        author: "Alexandre M.",
        role: "Leiter Innovation & VFX",
        content: "Der Transformer-JSON-Workflow ist umwerfend. Unsere Rendering-Pipeline wurde von Stunden auf wenige Sekunden Ausführungszeit verkürzt.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Unglaubliche Geschwindigkeit"
      },
      {
        author: "Dr. Sarah K.",
        role: "Digitale Künstlerin & Forscherin",
        content: "Die Einrichtung des Systems dauerte exakt 8 Minuten dank der exzellenten PDF-Anleitung. Die Genauigkeit der Mimikerfassung ist erstklassig.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Extrem Präzise"
      },
      {
        author: "Diego R.",
        role: "Kreativer Technologe",
        content: "Wir haben Transformer JSON in drei wichtige neue kommerzielle Kampagnen integriert. Ein absolut bahnbrechendes Ergebnis und gigantischer ROI.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Enormer ROI"
      },
      {
        author: "Elena S.",
        role: "KI-Produktdesignerin",
        content: "Großartiger Kundendienst und stabilste Performance. Es grenzt an Zauberei, detailreiche Assets ohne Verzerrung oder Leistungseinbußen zu generieren.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Sehr Empfehlenswert"
      }
    ]
  },
  nl: {
    title: "Gastervaringen & Recensies",
    subtitle: "Echte reacties van toonaangevende ontwerpers, ontwikkelaars en digitale studio’s.",
    items: [
      {
        author: "Alexandre M.",
        role: "Directeur VFX Innovatie",
        content: "De Transformer-JSON workflow is ronduit verbijsterend. Onze render-pijplijn ging van uren wachten naar slechts enkele seconden lokale uitvoering.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Super Snel"
      },
      {
        author: "Dr. Sarah K.",
        role: "Digitaal Kunstenaar & Onderzoeker",
        content: "De installatie nam exact 8 minuten in beslag met behulp van de meegeleverde PDF-handleiding. De details in bewegingen zijn subliem.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Hoge Precisie"
      },
      {
        author: "Diego R.",
        role: "Creatieve Technoloog",
        content: "We hebben de Transformer JSON deze maand geïmplementeerd in 3 grote commerciële opdrachten. Dit is de beste investering van ons jaar.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Uitstekende ROI"
      },
      {
        author: "Elena S.",
        role: "AI Product Designer",
        content: "Fantastische ondersteuning en loepzuivere stabiliteit. Het voelt magisch om ingewikkelde animaties zo moeiteloos te zien compileren.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format,compress&fit=crop&fm=webp&q=75&w=80&dpr=2",
        rating: 5,
        tag: "Aanrader"
      }
    ]
  }
};

export default function App() {
  const [lang, setLang] = useState('en');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  // matchMedia: no resize listener, no extra state update jank
  const isMobile = typeof window !== "undefined"
    ? window.matchMedia("(max-width: 767px)").matches
    : false;

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

  useEffect(() => {
    // CSS variable approach: zero React re-renders on scroll (pure DOM mutation)
    const root = document.documentElement;
    const handleScroll = () => {
      const totalHeight = root.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        root.style.setProperty('--scroll-pct', `${(window.scrollY / totalHeight) * 100}%`);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // isMobile computed via matchMedia inline — no resize listener needed

  useEffect(() => {
    if (isTestimonialHovered) return;
    const items = TESTIMONIALS_DATA[lang]?.items || [];
    if (items.length <= 1) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isTestimonialHovered, lang]);

  const t = useMemo(() => TRANSLATIONS[lang], [lang]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden relative">

      {/* Reading Progress Bar — CSS var, zero React re-renders */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/[0.03] z-[100] overflow-hidden pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-emerald-500"
          style={{ width: 'var(--scroll-pct, 0%)', transition: 'width 80ms linear' }}
        />
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Animated Blobs - heavy movement animation bypassed on mobile for fluid 60fps load and scroll */}
        <motion.div 
          animate={isMobile ? {} : { 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={isMobile ? {} : { 
            x: [0, -80, 0], 
            y: [0, 100, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[35%] h-[45%] bg-blue-600/5 rounded-full blur-[100px]"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
      </div>

      <main className="relative z-10 pt-20 pb-24 px-6">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto text-center mb-8 md:mb-12">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.85] mb-8 md:mb-12 text-white">
              <span className="text-violet-100 drop-shadow-[0_0_30px_rgba(168,85,247,0.7)] [text-shadow:0_0_15px_rgba(168,85,247,0.5)]">
                {t.heroTitleItalic}
              </span>
            </h1>

          </motion.div>
        </section>




        {/* How It Works Section */}
        <section id="how-it-works" className="max-w-5xl mx-auto mb-10 md:mb-16 px-6 relative">
          <div className="text-center mb-3 md:mb-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tight mb-4 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent"
            >
              {t.howItWorksTitle}
            </motion.h2>
            <div className="h-1 w-20 bg-indigo-500/50 mx-auto rounded-full blur-[1px]" />
          </div>

          <div className="relative">
            {/* Background elements for the widget - now permanently visible */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/30 blur-[120px] pointer-events-none opacity-100 transition-opacity duration-1000" />
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-600/30 blur-[120px] pointer-events-none opacity-100 transition-opacity duration-1000" />
            
            {/* Inner sharper glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-40 h-40 bg-red-500/20 blur-[60px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-40 h-40 bg-violet-500/20 blur-[60px] pointer-events-none" />

            {/* Second Widget */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-3xl mx-auto w-full rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02] shadow-[0_0_50px_rgba(220,38,38,0.15),0_0_50px_rgba(124,58,237,0.15)] transition-shadow duration-700 flex flex-col items-center justify-start pt-6 md:pt-8 pb-8 md:pb-10 px-4 sm:px-6 md:px-8"
            >
              <div className="flex flex-col items-center justify-center gap-4 md:gap-5 relative z-10 w-full">
                <p className="text-gray-200 text-center max-w-lg leading-relaxed text-[13px] sm:text-sm md:text-base transition-colors duration-500">
                  {t.howItWorksDescr}
                </p>

                <div className="flex flex-row items-center justify-center gap-8 sm:gap-16 md:gap-20 opacity-100 transition-opacity duration-500">
                  <div className="flex flex-col items-center gap-2.5">
                     <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden group/icon">
                        <div className="absolute inset-0 bg-red-500/10 blur-xl opacity-0 group-hover/icon:opacity-100 transition-opacity" />
                        <div className="text-red-500 font-bold text-base xs:text-lg sm:text-2xl border border-red-500/50 rounded-lg px-2 py-0.5 relative z-10">PDF</div>
                     </div>
                     <span className="text-gray-400 font-medium tracking-wider text-[9px] xs:text-[10px] sm:text-sm uppercase text-center leading-tight">
                       DOCUMENTATION <br /> README
                     </span>
                  </div>
  
                  <div className="flex flex-col items-center gap-2.5">
                     <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden group/icon">
                        <div className="absolute inset-0 bg-indigo-500/10 blur-xl opacity-0 group-hover/icon:opacity-100 transition-opacity" />
                        <div className="text-indigo-400">
                          <svg className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                          </svg>
                        </div>
                     </div>
                     <span className="text-gray-400 font-medium tracking-wider text-[9px] xs:text-[10px] sm:text-sm uppercase text-center leading-tight">
                       TRANSFORMER <br /> JSON
                     </span>
                  </div>
                </div>
              </div>
              {/* Overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none" />
            </motion.div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-indigo-600/5 blur-[150px] -z-10 rounded-full pointer-events-none" />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="max-w-6xl mx-auto mb-8 md:mb-10 px-6 relative">
          <div className="text-center mb-3 md:mb-4">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tight pb-3 pt-1 px-1 -mb-1 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent"
            >
              {TESTIMONIALS_DATA[lang]?.title || TESTIMONIALS_DATA['en'].title}
            </motion.h2>
            <div className="h-1 w-20 bg-violet-500/50 mx-auto rounded-full blur-[1px] mt-4" />
          </div>

          <div 
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setIsTestimonialHovered(true)}
            onMouseLeave={() => setIsTestimonialHovered(false)}
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-violet-600/10 blur-[100px] pointer-events-none rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-indigo-600/10 blur-[60px] pointer-events-none rounded-full" />

            <div className="relative rounded-[2.5rem] bg-white/[0.01] border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.12),0_0_50px_rgba(99,102,241,0.12)] bg-[#0a0a0f]/80 p-6 sm:p-10 md:p-14 pb-4 sm:pb-6 md:pb-8 overflow-hidden">
              
              {/* Giant Background Quote icon */}
              <div className="absolute top-6 right-8 text-white/[0.015] pointer-events-none select-none">
                <Quote className="w-36 h-36 stroke-[1]" />
              </div>

              {/* Slider Content */}
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {(TESTIMONIALS_DATA[lang]?.items || TESTIMONIALS_DATA['en'].items).map((item, index) => {
                    if (index !== activeTestimonial) return null;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center text-center"
                      >
                        {/* Tag */}
                        {item.tag && (
                          <div className="mb-6 px-3.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                            {item.tag}
                          </div>
                        )}

                        {/* Rating Stars */}
                        <div className="flex items-center gap-1 mb-6">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                          ))}
                        </div>

                        {/* Main Testimonial Content */}
                        <blockquote className="text-lg sm:text-xl md:text-2xl font-light text-gray-100 leading-relaxed max-w-3xl mb-2 h-[200px] sm:h-[130px] md:h-[90px] flex items-start justify-center pt-2">
                          "{item.content}"
                        </blockquote>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8 md:mt-8 border-t border-white/5 pt-4 relative z-10">
                <button
                  onClick={() => {
                    const items = TESTIMONIALS_DATA[lang]?.items || TESTIMONIALS_DATA['en'].items;
                    setActiveTestimonial((p) => (p - 1 + items.length) % items.length);
                  }}
                  aria-label="Previous Testimonial"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all text-gray-400 hover:text-white"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Indicator Dots */}
                <div className="flex items-center gap-2">
                  {(TESTIMONIALS_DATA[lang]?.items || TESTIMONIALS_DATA['en'].items).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeTestimonial 
                          ? "w-6 bg-indigo-500" 
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => {
                    const items = TESTIMONIALS_DATA[lang]?.items || TESTIMONIALS_DATA['en'].items;
                    setActiveTestimonial((p) => (p + 1) % items.length);
                  }}
                  aria-label="Next Testimonial"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all text-gray-400 hover:text-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="max-w-7xl mx-auto mb-4 md:mb-6 px-6 relative mt-10 md:mt-12">
          <div className="text-center mb-4 md:mb-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tight pb-3 pt-1 px-1 -mb-1 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent"
            >
              {t.pricingTitle}
            </motion.h2>
            <div className="h-1 w-20 bg-indigo-500/50 mx-auto rounded-full blur-[1px]" />
          </div>

          <div className="flex justify-center">
            {/* Pro Plan - Now the Main Focus */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group p-8 md:p-10 rounded-[2.5rem] bg-emerald-600/10 border border-emerald-500/40 relative overflow-hidden flex flex-col w-full max-w-3xl transition-all duration-500 shadow-[0_0_100px_-20px_rgba(16,185,129,0.5)]"
            >
              <div className="md:flex md:items-center md:gap-12 flex-grow">
                <div className="mb-8 md:mb-0 md:shrink-0">
                  <h3 className="text-xl font-medium text-emerald-300 mb-2">{t.planPro}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black text-white leading-none">{t.pricePro}</span>
                    <span className="text-gray-500 text-lg">{t.pricePeriod}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 flex-grow mb-8 md:mb-0">
                  {[t.feature1, t.feature3, t.feature4, t.feature5].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-200">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center border border-emerald-400 shrink-0 shadow-md">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-base font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => window.location.href = "https://buy.stripe.com/bJe14nc39cmZ13acy72VG00"}
                className="w-full py-5 rounded-2xl bg-emerald-600 text-white text-lg font-black hover:bg-emerald-500 transition-all duration-300 shadow-[0_0_30px_rgba(5,150,105,0.5)] hover:scale-[1.01] active:scale-[0.99] mt-6"
              >
                {t.ctaPro}
              </button>
              
              {/* Background Glows */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/20 blur-[100px] opacity-60 pointer-events-none" />
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-500/10 blur-[100px] opacity-40 pointer-events-none" />
            </motion.div>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 py-6 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-gray-700 font-bold tracking-widest text-[10px] uppercase">
            <span>{t.footer}</span>
          </div>
        </div>
      </footer>

      {/* Payment Side Panel */}
      <AnimatePresence>
        {isPaymentOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPaymentOpen(false)}
              className="fixed inset-0 bg-black/85 z-[200] cursor-pointer"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-[#080808] border-l border-white/10 z-[201] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-8 border-b border-white/5 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-white tracking-tight leading-none mb-1">{t.paymentTitle}</h2>
                  <div className="flex items-center gap-1.5 text-emerald-500/80 text-[10px] font-mono uppercase tracking-widest">
                    <Lock className="w-3 h-3" />
                    {t.paymentSecure}
                  </div>
                </div>
                <button 
                  onClick={() => setIsPaymentOpen(false)}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-grow overflow-y-auto p-8 space-y-10">
                {/* Order Summary */}
                <div className="space-y-4">
                  <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest">{t.orderSummary}</h3>
                  <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <p className="font-bold text-white leading-none mb-1">{t.planPro}</p>
                          <p className="text-xs text-gray-500 font-mono">Unlimited Generations</p>
                        </div>
                      </div>
                      <span className="font-black text-white">{t.pricePro}</span>
                    </div>
                    
                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-gray-400 font-medium">{t.total}</span>
                      <span className="text-3xl font-black text-white">{t.pricePro}</span>
                    </div>
                  </div>
                </div>

                {/* Form Placeholder */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="raph.bred@gmail.com"
                      className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-1">Card Details</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <input 
                        type="text" 
                        placeholder="•••• •••• •••• ••••"
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-4 pl-12 text-white focus:outline-none focus:border-emerald-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder="MM / YY"
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder="CVC"
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Secure Badge */}
                <div className="flex items-center justify-center gap-3 py-6 px-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <p className="text-[11px] text-emerald-400/80 font-medium leading-tight">
                    Your payment information is encrypted and securely processed by Stripe.
                  </p>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-8 border-t border-white/5 bg-white/[0.01]">
                <button 
                  onClick={() => window.location.href = "https://buy.stripe.com/bJe14nc39cmZ13acy72VG00"}
                  className="w-full group relative overflow-hidden py-5 rounded-2xl bg-emerald-600 text-white font-black text-xl hover:bg-emerald-500 transition-all active:scale-[0.98]"
                >
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    {t.payNow}
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                  {/* Internal glow */}
                  <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
                </button>
                <button 
                  onClick={() => setIsPaymentOpen(false)}
                  className="w-full mt-4 py-3 text-gray-500 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase"
                >
                  {t.cancel}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

