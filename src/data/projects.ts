export interface FeatureSection {
  title: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  /** Company / context the app was created in, e.g. "FikraTech" */
  company: string;
  period?: string;
  /** Short one-liner shown on the project card */
  tagline: string;
  /** Slightly longer summary shown under the title on the detail page */
  summary: string;
  tech: string[];
  /** Path to the square app logo, or null to fall back to a gradient tile */
  logo: string | null;
  gradient?: string;
  images: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  githubUrl?: string;
  /** Full description paragraphs (split on blank lines) */
  overview: string;
  /** Optional structured feature breakdown */
  featureSections?: FeatureSection[];
}

export const projects: Project[] = [
  {
    slug: 'hawelli',
    title: 'Hawelli',
    category: 'Digital Wallet',
    company: 'FikraTech',
    period: '',
    tagline:
      'Large-scale digital wallet super-app with QR/NFC payments, IBAN transfers, multi-wallet management, and full eKYC onboarding.',
    summary:
      'A large-scale fintech super-app built on Clean Architecture across 40+ feature modules and 110+ screens — delivering QR/NFC payments, IBAN transfers, multi-wallet management, eFawateercom bill payment, and full eKYC onboarding for both consumers and businesses.',
    tech: ['Flutter', 'Dart', 'BLoC/Cubit', 'Clean Architecture', 'GetIt', 'AutoRoute', 'NFC', 'Firebase'],
    logo: '/logos/hawelli.png',
    images: [
      '/hawelli/Hawelli (1).png',
      '/hawelli/Hawelli (2).png',
      '/hawelli/Hawelli (3).png',
      '/hawelli/Hawelli (4).png',
      '/hawelli/Hawelli (5).png',
      '/hawelli/Hawelli (6).png',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.fikratech.hawelli.business',
    overview:
      'Hawelli is a full digital-wallet and fintech platform shipping as both a consumer app and a dedicated business variant. It spans the entire money lifecycle — onboarding and eKYC, multi-wallet management, P2P and merchant payments over QR and NFC, bills, vouchers, loans, donations, and cash-in/cash-out through ATM and agent channels.\n\nThe app is engineered on Clean Architecture across 40+ feature modules and ~110 routed screens (~2,000 Dart files), with bank-grade security: RSA-2048 request signing, AES-GCM encrypted storage, certificate pinning, biometric/OTP authentication, and root/jailbreak detection.',
    featureSections: [
      {
        title: 'Digital Wallet Core',
        items: [
          'Multi-wallet management — create, switch, group, and set a default wallet',
          'Real-time balance, wallet carousel home, and quick-access shortcuts',
          'Transaction history with filters, pagination, and status tracking',
          'Financial insights dashboard with revenue/expense charts for business users',
          'Server-driven fees and limits per service',
        ],
      },
      {
        title: 'Payments & Money Movement',
        items: [
          'P2P transfers via mobile number, alias, beneficiaries, or payment codes',
          'Transfers between own wallets, including bulk multi-source → single destination',
          'QR payments — scan-to-pay, scan-to-collect, and QR generation on receipts',
          'NFC tap-to-pay / tap-to-collect with HCE support on receipts',
          'Money requests — send, receive, approve, or reject pending transactions',
          'Cash-in / cash-out via ATM and agent channels, plus gateway top-up (Moamalat, Tadawul)',
          'CliQ / IBAN integration and a policy-driven payment engine (OTP, PIN, fees per wallet policy)',
        ],
      },
      {
        title: 'Bills, Commerce & Financial Services',
        items: [
          'eFawateercom bill payment — categories, inquiry, pay, history, and "My Bills"',
          'E-vouchers marketplace with providers, categories, and quick purchase',
          'Loan repayment with paid-loans history',
          'Donations to charities with donation history',
          'Purchase and merchant tracking, offers carousel, and a merchants directory',
        ],
      },
      {
        title: 'Account, Identity & Onboarding',
        items: [
          'Full consumer and business registration journeys with digital signature',
          'eKYC integration with document scanning and a status lifecycle (in progress → review → approved/rejected)',
          'Login with username/mobile, biometric unlock, and PIN verification',
          'Safe-login OTP on new or suspicious devices and force/optional update flows',
          'Alias, beneficiary, device-session, and profile management',
        ],
      },
      {
        title: 'Business & Merchant',
        items: [
          'Dedicated Hawelli Business app variant with corporate onboarding and login',
          'Corporate profile with authorized persons',
          'Geo-location management for business branches via Google Maps',
          'Merchant payment collection over QR, NFC, OTP, invoice, and payment codes',
          'ESC/POS thermal receipt printing for vouchers and transactions',
        ],
      },
      {
        title: 'Discovery & Support',
        items: [
          'POI map of nearest branches and services on Google Maps',
          'Contact-us with branch locator, in-app FAQ, and notifications center',
          'Privacy/terms PDF viewer and push notifications with deep-link navigation',
          'Arabic/English with full RTL support',
        ],
      },
      {
        title: 'Architecture & Scale',
        items: [
          'Clean Architecture across 40+ feature modules (presentation → domain → data → di)',
          '~110 routed screens and ~2,000 Dart files',
          'Reusable BLoC/Cubit boilerplate (UseCaseCubit, PaginationUseCaseCubit, ResponseWidget)',
          'Dependency injection with GetIt + Injectable and typed AutoRoute navigation with auth guards',
          'fpdart Either<Failure, T> error handling and codegen (Freezed, AutoMappr, theme_tailor)',
        ],
      },
      {
        title: 'Security',
        items: [
          'RSA-2048 request signing and certificate pinning per environment',
          'AES-GCM encrypted secure storage for tokens and keys',
          'Biometric login with per-wallet confirmation and biometric-change detection (auto logout)',
          'Wallet PIN with policy enforcement and hashing',
          'Root/jailbreak & debug detection, screenshot blocking, and app-switcher privacy',
          'Token-refresh interceptor with queued retry on 401',
        ],
      },
      {
        title: 'Integrations & DevOps',
        items: [
          'Firebase (Messaging, Crashlytics) and Shorebird over-the-air updates',
          'Google Maps, NFC (flutter_nfc_kit), ESC/POS printers, and the Moamalat gateway',
          'Syncfusion charts, PDF viewer, signature pad, and a KYC document scanner',
          '8 build flavors — Consumer + Business × Dev / QA / Staging / Production',
          'Android, iOS, Windows, and Linux targets with Dio + Hive caching and ObjectBox storage',
        ],
      },
    ],
  },
  {
    slug: 'dinarak',
    title: 'Dinarak',
    category: 'E-Wallet App',
    company: 'FikraTech',
    period: '',
    tagline:
      'Secure digital wallet for Android & iOS with money transfers, bill payments, and QR merchant payments.',
    summary:
      'A secure digital wallet for Android and iOS covering wallet operations end-to-end — money transfers, bill payments, ATM withdrawals, and QR merchant payments — built on reusable BLoC/Cubit infrastructure.',
    tech: ['Flutter', 'Dart', 'Firebase', 'BLoC/Cubit', 'REST API'],
    logo: '/logos/dinarak.png',
    images: [
      '/dinarak/Dinarak (1).png',
      '/dinarak/Dinarak (2).png',
      '/dinarak/Dinarak (3).png',
      '/dinarak/Dinarak (4).png',
      '/dinarak/Dinarak (5).png',
      '/dinarak/Dinarak (6).png',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.dinarak.fikratech.customer',
    appStoreUrl: 'https://apps.apple.com/us/app/dinarak/id6743640847',
    overview:
      'Dinarak is a consumer e-wallet delivering core wallet operations: money transfers, bill payments, ATM withdrawals, and QR-based merchant payments. It integrates eFAWATEERCOM and banking APIs on top of a reusable BLoC/Cubit infrastructure with generic pagination and unified error handling, and contributed to a major redesign, performance improvements, and security enhancements.',
  },
  {
    slug: 'sahab',
    title: 'Sahab',
    category: 'Exchange & Remittance',
    company: 'FikraTech',
    period: '',
    tagline:
      'Exchange-rate dashboards, international transfers, and transaction tracking with map-based branch discovery.',
    summary:
      'A remittance and currency-exchange app delivering live exchange-rate dashboards, international transfers, and transaction tracking, with map-based branch and ATM discovery.',
    tech: ['Flutter', 'Dart', 'BLoC/Cubit', 'Google Maps', 'REST API'],
    logo: '/logos/sahab.png',
    images: [
      '/sahab/Sahab (1).png',
      '/sahab/Sahab (2).png',
      '/sahab/Sahab (3).png',
      '/sahab/Sahab (4).png',
      '/sahab/Sahab (5).png',
      '/sahab/Sahab (6).png',
    ],
    overview:
      'Sahab focuses on cross-border money movement and currency exchange. It surfaces live exchange-rate dashboards powered by currency APIs, supports international transfers, and lets users track the full lifecycle of every transaction. Map-based discovery helps users locate the nearest branches and ATMs.',
  },
  {
    slug: 'livo',
    title: 'Livo',
    category: 'Streaming App',
    company: 'Rand LLC',
    period: '',
    tagline:
      'Streaming app for movies, series, live TV, and sports with an advanced adaptive HLS video player.',
    summary:
      'A streaming app for movies, series, live TV, and sports featuring an advanced HLS video player with fullscreen, picture-in-picture, subtitles, and adaptive quality, plus phone-OTP authentication.',
    tech: ['Flutter', 'Dart', 'HLS', 'GoRouter', 'GetIt', 'BLoC'],
    logo: '/logos/livo.png',
    images: [
      '/livo/Livo (1).png',
      '/livo/Livo (2).png',
      '/livo/Livo (3).png',
      '/livo/Livo (4).png',
      '/livo/Livo (5).png',
      '/livo/Livo (6).png',
    ],
    overview:
      'Livo is a video-streaming platform spanning movies, series, live TV, and sports. Its centerpiece is an advanced HLS video player supporting fullscreen, picture-in-picture, subtitles, and adaptive quality switching. Authentication uses phone-OTP with token refresh, and the app is wired together with GoRouter navigation and GetIt dependency injection on a Clean Architecture foundation.',
  },
  {
    slug: 'doremi',
    title: 'DoReMi',
    category: 'Music Streaming',
    company: 'Rand LLC',
    period: '',
    tagline:
      'Music, podcast, and radio app with background audio, offline-first downloads, and a subscription system.',
    summary:
      'A music, podcast, and radio app with background audio playback, offline-first SQLite downloads, deep linking, and a subscription/monetization system — which doubled the user base within six months.',
    tech: ['Flutter', 'Dart', 'just_audio', 'SQLite', 'BLoC', 'Firebase'],
    logo: '/logos/doremi.png',
    images: [
      '/doremi/Doremi (1).png',
      '/doremi/Doremi (2).png',
      '/doremi/Doremi (3).png',
      '/doremi/Doremi (4).png',
      '/doremi/Doremi (5).png',
      '/doremi/Doremi (6).png',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=site.rand.doremi.prod',
    overview:
      'DoReMi is a music, podcast, and radio app built around continuous background audio (just_audio / audio_service) and an offline-first experience with SQLite downloads. It supports deep linking, FCM-driven routing, and a full subscription and monetization system. The product doubled its user base within six months of release.',
  },
  {
    slug: 'emaniyat',
    title: 'Emaniyat',
    category: 'Islamic Lifestyle',
    company: 'Rand LLC',
    period: '',
    tagline:
      'Islamic lifestyle app with a 604-page Mushaf reader, prayer times, Qibla compass, and a digital library.',
    summary:
      'An Islamic lifestyle app featuring a 604-page Mushaf reader with multi-reciter ayah-level audio, prayer times, a Qibla compass, a digital library, and location-based notifications.',
    tech: ['Flutter', 'Dart', 'BLoC', 'Audio Streaming', 'Geolocation'],
    logo: '/logos/emaniyat.png',
    images: [
      '/emaniyat/Emaniyat (1).png',
      '/emaniyat/Emaniyat (2).png',
      '/emaniyat/Emaniyat (3).png',
      '/emaniyat/Emaniyat (4).png',
      '/emaniyat/Emaniyat (5).png',
      '/emaniyat/Emaniyat (6).png',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=site.rand.emaniyat.prod',
    overview:
      'Emaniyat is an Islamic lifestyle companion combining a Quran reader, prayer times, a Qibla compass, and a digital library. It ships a full 604-page Mushaf reader with multi-reciter, ayah-level audio streaming, location-based prayer and reminder notifications, and subscription flows.',
  },
  {
    slug: 'taverna',
    title: 'Taverna',
    category: 'Food Delivery App',
    company: 'Doodles Agency',
    period: '',
    tagline:
      'Product marketplace with rich ad postings, account-to-store conversion, and in-app text & voice chat.',
    summary:
      'A product-marketplace app supporting rich ad postings (images, video, categories, pricing, geolocation) with account-to-store conversion, in-app text and voice chat, and social sharing — attracting 300+ listings within the launch month.',
    tech: ['Flutter', 'GetX', 'REST API', 'Google Maps'],
    logo: '/logos/taverna.png',
    gradient: 'from-red-500 to-red-400',
    images: [
      '/taverna/Taverna (1).png',
      '/taverna/Taverna (2).png',
      '/taverna/Taverna (3).png',
      '/taverna/Taverna (4).png',
    ],
    overview:
      'QuickSale is a product-marketplace app enabling rich ad postings with images, video, categories, pricing, and geolocation. Sellers can convert a personal account into a store, while buyers and sellers communicate through in-app text and voice chat plus social sharing. The platform attracted 300+ listings within its launch month.',
  },
  {
    slug: 'quicksale',
    title: 'QuickSale',
    category: 'Marketplace App',
    company: 'Freelance Project',
    period: '',
    tagline:
      'Product marketplace with rich ad postings, account-to-store conversion, and in-app text & voice chat.',
    summary:
      'A product-marketplace app supporting rich ad postings (images, video, categories, pricing, geolocation) with account-to-store conversion, in-app text and voice chat, and social sharing — attracting 300+ listings within the launch month.',
    tech: ['Flutter', 'GetX', 'REST API', 'Google Maps'],
    logo: '/logos/quick-sale.png',
    images: [
      '/quick-sale/Quick Sale (1).png',
      '/quick-sale/Quick Sale (2).png',
      '/quick-sale/Quick Sale (3).png',
      '/quick-sale/Quick Sale (4).png',
      '/quick-sale/Quick Sale (5).png',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mahairi.quicksale',
    appStoreUrl: 'https://apps.apple.com/us/app/quick-sale/id6753071419',
    overview:
      'QuickSale is a product-marketplace app enabling rich ad postings with images, video, categories, pricing, and geolocation. Sellers can convert a personal account into a store, while buyers and sellers communicate through in-app text and voice chat plus social sharing. The platform attracted 300+ listings within its launch month.',
  },
  {
    slug: 'goalatho',
    title: 'Goalatho',
    category: 'Sports Booking',
    company: 'Personal Project',
    period: '',
    tagline:
      'Paired consumer & business apps for sports-venue booking with Google Maps discovery and a bilingual UI.',
    summary:
      'Paired consumer and business Flutter apps for a sports-venue booking platform, sharing a modular architecture and delivering end-to-end booking, Google Maps venue discovery, push notifications, and a bilingual (English/Arabic) UI.',
    tech: ['Flutter', 'Dart', 'BLoC', 'Google Maps', 'Firebase', 'JWT'],
    logo: '/logos/goalatho.png',
    images: [
      '/goalatho/Goalatho (1).png',
      '/goalatho/Goalatho (2).png',
      '/goalatho/Goalatho (3).png',
      '/goalatho/Goalatho (4).png',
      '/goalatho/Goalatho (5).png',
      '/goalatho/Goalatho (6).png',
    ],
    overview:
      'Goalatho is a sports-venue booking platform delivered as paired consumer and business apps that share a modular architecture. It supports end-to-end booking — search, slot availability, status tracking, and cancellation — alongside Google Maps venue discovery, FCM push with deep-link navigation, secure JWT storage, and a fully bilingual (English/Arabic) interface.',
  },
  {
    slug: 'trucklink',
    title: 'TruckLink',
    category: 'Logistics Platform',
    company: 'Graduation Project',
    period: '',
    tagline:
      'Logistics marketplace with shipment posting, real-time tracking, carrier verification, and an admin dashboard.',
    summary:
      'A logistics marketplace with shipment posting, real-time Google Maps tracking, carrier verification, and offer management — plus driver workflows (live tracking, order updates, invoicing) and an admin dashboard for approvals and analytics.',
    tech: ['Flutter', 'Google Maps', 'Firebase', 'BLoC'],
    logo: '/logos/trucklink.png',
    images: [
      '/trucklink/TruckLink (1).png',
      '/trucklink/TruckLink (2).png',
      '/trucklink/TruckLink (3).png',
    ],
    overview:
      'TruckLink is a logistics marketplace connecting shippers and carriers. Shippers post shipments and manage offers while tracking trips and revenue; carriers go through verification and get dedicated driver workflows with live Google Maps tracking, order updates, and invoicing. An admin dashboard handles approvals and analytics across the platform.',
  },
  {
    slug: 'lights-out',
    title: 'Lights Out',
    category: 'Puzzle Game',
    company: 'Educational Project',
    period: '',
    tagline:
      'Flutter puzzle game modeling gameplay as state-space search with six classic search algorithms.',
    summary:
      'A Flutter puzzle game that models gameplay as a state-space search problem, implementing six search algorithms (BFS, DFS, UCS, A*, Hill Climbing) with admissible heuristics, step-by-step solution playback, and complexity metrics.',
    tech: ['Flutter', 'Dart', 'GetX', 'Algorithms'],
    logo: '/logos/lights-out.png',
    images: [
      '/lights-out/Lights-out.jpg',
      '/lights-out/Lights-out (2).jpg',
      '/lights-out/Lights-out (3).jpg',
    ],
    githubUrl: 'https://github.com/Bassam-Jawish/Lights_out',
    overview:
      'Lights Out is a Flutter puzzle game that treats each board configuration as a node in a state-space search. It implements six search algorithms — BFS, DFS, UCS, A*, and Hill Climbing — with admissible heuristics, then visualizes step-by-step solution playback and reports complexity metrics for each strategy. State is managed reactively with GetX behind a clean model/controller/view separation.',
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
