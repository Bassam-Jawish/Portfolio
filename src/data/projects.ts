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
    category: 'Digital Wallet',
    company: 'FikraTech',
    period: '',
    tagline:
      'Production Flutter fintech wallet for Jordan with eKYC, CliQ instant payments, eFawateercom bills, QR pay, and prepaid cards.',
    summary:
      'A production-grade digital wallet for the Jordan market — 36 Clean Architecture feature modules and ~1,740 Dart files — delivering eKYC onboarding, CliQ instant payments, eFawateercom bill pay, QR merchant payments, prepaid card lifecycle, and bank-grade security across Android, iOS, Windows, and Linux.',
    tech: ['Flutter', 'Dart', 'BLoC/Cubit', 'Clean Architecture', 'GetIt', 'AutoRoute', 'ObjectBox', 'Firebase', 'IDWise'],
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
      'Dinarak is a production digital-wallet and fintech app for the Jordan market, shipping as a single Flutter codebase for Android, iOS, Windows, and Linux. It covers the full money lifecycle — regulated eKYC onboarding, wallet management, CliQ instant payments, eFawateercom bills, QR merchant payments, prepaid cards, cash-in/cash-out, loans, and donations.\n\nThe app is engineered on Clean Architecture across 36 feature modules and ~80 routed screens (~1,740 Dart files), with bank-grade security: RSA-2048 request signing, SSL certificate pinning, biometric login, root/jailbreak detection, and encrypted credential storage.',
    featureSections: [
      {
        title: 'Digital Wallet Core',
        items: [
          'Real-time wallet balance, account overview, and default-account selection',
          'Transaction history with filters, details, and receipt-style views',
          'Fees & limits transparency per service',
          'Cash-in and cash-out flows via ATM and agent channels',
          'Loan viewing, details, and repayment',
        ],
      },
      {
        title: 'CliQ Instant Payments',
        items: [
          'Send money via alias, phone number, or IBAN',
          'Request money and return money for received transfers',
          'Pending transaction management and approval flows',
          'Beneficiary management with contact picker integration',
          'CliQ alias CRUD and PIN-verified payment confirmation',
        ],
      },
      {
        title: 'Bills, QR & Merchant Payments',
        items: [
          'eFawateercom — inquiry, verification, pay, saved/unpaid bills, and history',
          'Multi-service billing with dynamic service options and lookups',
          'QR merchant payments via camera scan, purpose selection, and status tracking',
          'Manual payments to merchants and participants',
          'Merchant network browsing, service selection, and donations',
        ],
      },
      {
        title: 'Prepaid Card Lifecycle',
        items: [
          'View and manage multiple customer cards',
          'Issue new cards with branch pickup, or link existing physical cards',
          'Activation, freeze/unfreeze, PIN/CVC settings, and spending limits',
          'Latest card transactions on the card screen with flip-card UI',
        ],
      },
      {
        title: 'Account, Identity & Onboarding',
        items: [
          'Multi-step registration with IDWise eKYC — ID scan, selfie/liveness, journey resume',
          'Registration status tracking and PIN/password creation with validation',
          'Phone + password login, biometric unlock, first-login identity spot-check',
          'Safe-login on new devices, OTP for sensitive ops, and forget-password flow',
          'Device-session management with remote terminate, plus route guards',
        ],
      },
      {
        title: 'Discovery & Support',
        items: [
          'Google Maps POI locator for branches and agents with clustering and dark map styling',
          'Offline-capable POI list sync via ObjectBox, plus filter/search and geolocation',
          'In-app notifications, offers, FAQ, contact-us, and privacy/terms PDF viewer',
          'Arabic/English with full RTL support',
        ],
      },
      {
        title: 'Architecture & Scale',
        items: [
          'Clean Architecture across 36 feature modules (presentation → domain → data)',
          '~80 routed screens and ~1,740 Dart files',
          'BLoC/Cubit state management with GetIt DI per feature',
          'Typed AutoRoute navigation with LoggedIn and FirstTime guards',
          'fpdart Either<Failure, T> error handling and codegen (Freezed, AutoMappr, theme_tailor)',
        ],
      },
      {
        title: 'Security',
        items: [
          'RSA-2048 digital signatures on API requests (PointyCastle)',
          'SSL certificate pinning per environment (dev / staging / prod)',
          'Root/jailbreak detection at splash, screenshot blocking, and app-switcher privacy',
          'Biometric login with biometric-change detection and secure credential storage',
          'Device fingerprinting via UDID and reusable PIN verification across sensitive flows',
        ],
      },
      {
        title: 'Integrations & DevOps',
        items: [
          'Firebase Analytics & Crashlytics, Shorebird over-the-air updates',
          'IDWise eKYC, Google Maps, Syncfusion PDF, and local biometric auth',
          'Dio with interceptors, Hive API cache, ObjectBox, and flutter_secure_storage',
          '4 build flavors — Dev / QA / Staging / Production via Flavorizr',
          'Android, iOS, Windows, and Linux targets from a single codebase',
        ],
      },
    ],
  },
  {
    slug: 'sahab',
    title: 'Sahab',
    category: 'Exchange & Remittance',
    company: 'FikraTech',
    period: '',
    tagline:
      'Remittance and currency-exchange app with live rate dashboards, international transfers, and map-based branch discovery.',
    summary:
      'A remittance and currency-exchange app delivering live exchange-rate dashboards powered by currency APIs, international transfers with full transaction lifecycle tracking, and Google Maps-based branch and ATM discovery.',
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
      'Cross-platform streaming app for movies, series, live TV, and sports with an adaptive HLS player and bilingual AR/EN UX.',
    summary:
      'A cross-platform streaming app covering movies, series, live TV, sports, and clips — built on Clean Architecture with BLoC, phone-OTP auth, an HLS video player (fullscreen, PiP, subtitles, quality selection), and bilingual Arabic/English support.',
    tech: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'GoRouter', 'GetIt', 'Retrofit', 'Dio', 'HLS'],
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
      'Livo is a cross-platform streaming mobile app covering movies, series, live TV, sports, and short clips. It delivers tab-based navigation with deep-linked detail flows, explore/search across content types, and a production-grade HLS video player with fullscreen, picture-in-picture, subtitles, quality selection, and playback-speed controls.\n\nThe codebase follows Clean Architecture per feature module — data, domain, and presentation layers — with BLoC/Cubit state management, repository and use-case patterns, Either<Failure, T> error handling (dartz), and dependency injection via GetIt. REST APIs are integrated through Retrofit + Dio with auth interceptors, automatic token refresh on 401, secure storage, and centralized failure mapping.',
    featureSections: [
      {
        title: 'Streaming & Content',
        items: [
          'Movies, series, live TV, sports, and clips with tab-based shell navigation',
          'Deep-linked detail flows for each content type',
          'Carousel banners, marquee text, and read-more descriptions',
          'Kids mode for family-friendly browsing',
          'Mock data sources alongside remote APIs for development and demos',
        ],
      },
      {
        title: 'Video Player',
        items: [
          'HLS/network video player with adaptive streaming',
          'Fullscreen playback and picture-in-picture support',
          'Subtitles, quality selection, and playback-speed controls',
          'Download manager scaffold (flutter_downloader + isolate callback) for offline media',
        ],
      },
      {
        title: 'Explore & Search',
        items: [
          'Debounced search with multi-type results',
          'Filter bottom sheet — tags, sort, year, and rating',
          'Cached network images for performant poster/thumbnail loading',
        ],
      },
      {
        title: 'Authentication & Profile',
        items: [
          'Phone OTP authentication — register, verify, login, reset/change password',
          'Secure token storage with automatic refresh-token retry on 401',
          'Profile management with image crop and upload',
          'Help center, contact flows, and account deletion',
          'Localized form validation and password strength indicator in AR/EN',
        ],
      },
      {
        title: 'Architecture & Reliability',
        items: [
          'Clean Architecture with feature modules, repositories, and use cases',
          'BLoC/Cubit state management with GetIt dependency injection',
          'GoRouter shell navigation with auth guards and nested library routes',
          'Retrofit + Dio REST layer with code generation (build_runner)',
          'Global error handling, remote error logging, and connectivity checks',
          'Responsive layouts (ScreenUtil), skeleton loaders, and asset codegen (flutter_gen)',
          'Environment config via .env and bilingual AR/EN localization with RTL support',
        ],
      },
    ],
  },
  {
    slug: 'doremi',
    title: 'DoReMi',
    category: 'Music Streaming',
    company: 'Rand LLC',
    period: '',
    tagline:
      'Cross-platform music streaming app for music, podcasts, radio, and video with offline downloads and premium subscriptions.',
    summary:
      'A cross-platform music streaming app serving music, podcasts, radio, and video — built with Clean Architecture across 15+ feature modules and 100+ domain use cases, background audio playback, offline-first SQLite downloads, deep linking, and a full subscription system that doubled the user base within six months.',
    tech: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'GoRouter', 'GetIt', 'Retrofit', 'just_audio', 'SQLite', 'Firebase'],
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
      'DoReMi is a cross-platform music streaming app serving music, podcasts, radio, and video from a single Flutter codebase for Android and iOS. It ships bilingual (English/Arabic) support with full RTL layout, light/dark themes, and responsive UI — and doubled its user base within six months of release.\n\nThe app is engineered on Clean Architecture with 15+ feature modules and 100+ use cases separating business logic from UI, BLoC state management, dependency injection with GetIt, and functional error handling via dartz (Either/Failure pattern). The REST API layer uses Retrofit + Dio with code generation, session/auth interceptors, and environment-based configuration.',
    featureSections: [
      {
        title: 'Music & Content',
        items: [
          'Music, podcasts, radio, and video streaming from a unified library',
          'GoRouter shell navigation — Home, Search, Library, and Premium tabs',
          'Lyrics display and rich media browsing across content types',
          'Cached network images and shimmer/skeleton loading states',
        ],
      },
      {
        title: 'Audio Playback',
        items: [
          'Background audio with just_audio and audio_service',
          'Queue management with shuffle, repeat, and system media controls',
          'Mini player and continuous playback across app navigation',
          'Video playback via flick_video_player and video_player',
        ],
      },
      {
        title: 'Offline & Downloads',
        items: [
          'Offline-first download system with SQLite persistence for metadata',
          'Background downloads for songs, videos, and podcast episodes',
          'Download progress tracking and offline playback when content is saved',
        ],
      },
      {
        title: 'Subscriptions & Monetization',
        items: [
          'Premium subscription flows — bundles, trials, promo codes, and auto-renewal',
          'Ad-supported free tier alongside premium gating',
          'VPN detection for geo/licensing compliance (optional enforcement)',
        ],
      },
      {
        title: 'Deep Linking & Notifications',
        items: [
          'Android App Links — playlists, albums, artists, and songs open directly in-app',
          'Cold-start deep link handling — splash → home → target content',
          'Firebase Cloud Messaging with push notification deep-link routing',
        ],
      },
      {
        title: 'Architecture & Engineering',
        items: [
          'Clean Architecture — 15+ feature modules with data / domain / presentation layers',
          '100+ use cases, BLoC state management, and GetIt dependency injection',
          'Type-safe REST API with Retrofit + Dio and build_runner code generation',
          'Secure storage for sensitive data + SharedPreferences for app state',
          'Environment-based config (.env via flutter_dotenv) and session interceptors',
          'Unit tests for BLoCs (bloc_test, mocktail), integration tests, and widget tests',
        ],
      },
    ],
  },
  {
    slug: 'emaniyat',
    title: 'Emaniyat',
    category: 'Islamic Lifestyle',
    company: 'Rand LLC',
    period: '',
    tagline:
      'Full-featured Islamic lifestyle app with prayer times, Quran reader, digital library, and bilingual AR/EN support.',
    summary:
      'A full-featured Islamic lifestyle app (Flutter, iOS & Android) with prayer times and adhan notifications, a 604-page Mushaf reader with multi-reciter audio, azkar/duas, Qibla compass, Hijri calendar, zakat calculator, a PDF digital library with offline downloads, and Paymera subscription payments.',
    tech: ['Flutter', 'Dart', 'GetX', 'GetIt', 'just_audio', 'Firebase', 'Geolocation'],
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
      'Emaniyat is a full-featured Islamic lifestyle mobile app built in Flutter for iOS and Android. It combines daily worship tools — prayer times, adhan notifications, azkar, duas, and a digital tasbih — with a complete Quran reading experience, Islamic utilities, and a digital library of books, all in a bilingual Arabic/English interface with RTL-first design.\n\nThe app is architected as 20+ modular feature modules (auth, quran, azan, library, subscription, etc.) with GetX state management, GetIt dependency injection, and a Dio REST client with token refresh and centralized error handling. It integrates Firebase push notifications, background file downloads, timezone-aware local notification scheduling, and Paymera payment gateway for subscription flows.',
    featureSections: [
      {
        title: 'Prayer & Worship',
        items: [
          'Prayer times dashboard — live countdown, daily schedule, and city-based times from backend API',
          'Adhan notifications — scheduled local notifications per prayer with customizable sounds',
          'Pre-prayer reminders with configurable minutes and multi-day scheduling (premium flow)',
          'Dedicated Azan tab with full prayer list and toggle controls for adhan and reminders',
        ],
      },
      {
        title: 'Holy Quran',
        items: [
          'Full 604-page Mushaf reader with Uthmanic Hafs typography and adjustable font size',
          'Audio recitation — multiple reciters, ayah-by-ayah or full-surah playback with mini player',
          'Offline audio — download surahs by reciter with progress tracking',
          'Ayah search across translations, Arabic tafsir (Jalalayn), and bookmark/favorite sync',
          'Navigation — jump to surah, juz, or page',
        ],
      },
      {
        title: 'Dhikr & Spirituality',
        items: [
          'Azkar & duas — categorized supplications from API with favorites synced to backend',
          'Zikr counter with per-dhikr repetition tracking on detail screens',
          'Digital Tasbih (Masbaha) — custom dhikr text, target count, haptic feedback, persisted state',
          '99 Names of Allah — browse names with detail views',
        ],
      },
      {
        title: 'Islamic Tools',
        items: [
          'Qibla compass — real-time direction using device sensors + GPS, distance to Kaaba',
          'Hijri/Gregorian calendar toggle with Islamic events loaded from API',
          'Zakat calculator — multi-currency/asset inputs (SYP, USD, gold) with conversion rates',
        ],
      },
      {
        title: 'Digital Library',
        items: [
          'Islamic book library — categories, paginated listings, and book details',
          'In-app PDF reader (Syncfusion) with reading progress synced to backend',
          'Background book-part downloads with system notifications and offline access',
          'Favorite books saved in user profile',
        ],
      },
      {
        title: 'Account & Subscriptions',
        items: [
          'Authentication — register, login, OTP verification, password reset, and account deletion',
          'User profile — name, city, subscription status, downloads, and favorites hub',
          'Premium bundles from backend with promo codes, auto-renewal, and cancellation',
          'Paymera payment gateway via WebView + deep-link callback',
          'Multi-step onboarding flow for first-time users',
        ],
      },
      {
        title: 'Architecture & Platform',
        items: [
          'Modular GetX + GetIt architecture with 20+ feature modules',
          'Dio REST client with token refresh, LRU file-bytes cache, and secure JWT storage',
          'Firebase Core + FCM with background message handler and deep-link routing',
          'Background downloads (background_downloader) and background audio (just_audio + audio_service)',
          'Timezone-aware local notifications, connectivity awareness, and app update checks',
          'Custom Arabic typography, ARB-based i18n, dark/light themes, and responsive UI (ScreenUtil)',
        ],
      },
    ],
  },
  {
    slug: 'taverna',
    title: 'Taverna',
    category: 'Food Delivery App',
    company: 'Doodles Agency',
    period: '',
    tagline:
      'Cross-platform food delivery app for GCC/MENA markets with restaurant discovery, maps-based address selection, and secure auth.',
    summary:
      'A cross-platform food delivery app in Flutter targeting GCC/MENA markets — featuring restaurant discovery, category filtering, Google Maps delivery flow with GPS and geocoding, secure auth token storage, and Clean Architecture with BLoC, GetIt DI, and Retrofit/Dio REST integration.',
    tech: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'GoRouter', 'GetIt', 'Retrofit', 'Google Maps'],
    logo: '/logos/taverna.png',
    gradient: 'from-red-500 to-red-400',
    images: [
      '/taverna/Taverna (1).png',
      '/taverna/Taverna (2).png',
      '/taverna/Taverna (3).png',
      '/taverna/Taverna (4).png',
    ],
    overview:
      'Taverna is a cross-platform food delivery app built in Flutter for Android and iOS, targeting GCC and MENA markets. It enables users to discover restaurants, browse categories, and manage delivery addresses through an integrated Google Maps flow with GPS location, drag-to-pin geocoding, and address search.\n\nThe codebase follows Clean Architecture (Domain / Data / Presentation) with BLoC state management, GetIt dependency injection, and type-safe REST API integration via Retrofit + Dio. Navigation uses GoRouter with a persistent bottom-tab shell across modular features — auth, home, categories, map, and addresses — with secure token storage, offline-aware network checks, and responsive UI built with ScreenUtil.',
    featureSections: [
      {
        title: 'Restaurant Discovery',
        items: [
          'Home feed with carousel banners and horizontal restaurant/category scrollers',
          'Category filtering and restaurant browsing',
          'Custom design system — theme, colors, typography, and SVG assets',
          'Responsive layouts with ScreenUtil across screen sizes',
        ],
      },
      {
        title: 'Maps & Delivery Addresses',
        items: [
          'Google Maps delivery flow with GPS location and drag-to-pin geocoding',
          'Address search via Google Geocoding API',
          'Geolocator integration for device location',
          'Modular map and address management features',
        ],
      },
      {
        title: 'Authentication & Onboarding',
        items: [
          'User login and registration via REST API',
          'Country selection with SharedPreferences persistence',
          'Secure token storage with flutter_secure_storage',
          'Form validation and international phone/nationality inputs',
        ],
      },
      {
        title: 'Architecture & Engineering',
        items: [
          'Clean Architecture with Repository pattern and Use Cases',
          'BLoC with Equatable states and custom BlocObserver',
          'GetIt service locator with modular DI registration',
          'Retrofit + Dio with connectivity checks and typed Failure classes',
          'GoRouter declarative navigation with persistent bottom-tab shell',
          'DataState wrapper for server/network error mapping',
        ],
      },
    ],
  },
  {
    slug: 'quicksale',
    title: 'QuickSale',
    category: 'Marketplace App',
    company: 'Freelance Project',
    period: '',
    tagline:
      'Full-featured classifieds marketplace with ads, stores, real-time chat, reels, and bilingual AR/EN support.',
    summary:
      'A full-featured classifieds marketplace app in Flutter with ads, stores, real-time Pusher chat, reels, and job/CV flows — featuring a multi-step ad creation wizard, dual user/store account modes, Firebase push notifications with deep linking, and bilingual Arabic/English RTL/LTR experience across 40+ screens.',
    tech: ['Flutter', 'GetX', 'Pusher', 'Firebase', 'Google Maps', 'Crashlytics'],
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
      'QuickSale is a full-featured classifieds marketplace app built in Flutter, enabling users to browse and post ads, manage stores, chat in real time, share reels, and apply for jobs — all in a bilingual Arabic/English experience with full RTL/LTR support. The platform attracted 300+ listings within its launch month.\n\nThe app follows a layered architecture — presentation (UI + GetX controllers) → data (repos, DTOs, models) → core (services, config) — with repository pattern, GetX dependency injection, and Dio HTTP client with multipart uploads for images, videos, and chat attachments. It integrates Firebase (FCM push notifications, Crashlytics), Pusher for real-time messaging, and deep linking for ads, stores, users, and chat conversations.',
    featureSections: [
      {
        title: 'Marketplace & Ads',
        items: [
          'Multi-step ad creation wizard with dynamic category filters and map-based location',
          'Rich ad postings — images, video, categories, pricing, and geolocation',
          'Dual user/store account modes with account-to-store conversion',
          'Reviews, follow system, blocking, and reporting for trust & safety',
          'Job/CV flows with document attachments',
          'Guest mode with login prompts when authentication is required',
        ],
      },
      {
        title: 'Real-time Chat',
        items: [
          'Pusher-powered messaging with text, images, video, and voice messages',
          'In-app notification center with typed notifications',
          'Deep links route directly to ads, stores, users, and chat conversations',
        ],
      },
      {
        title: 'Media Handling',
        items: [
          'Image picker, cropper, and reorderable gallery for ad listings',
          'Video player, thumbnail generation, trimming, and compression for reels',
          'Cached network images/videos and shimmer skeleton loaders',
          'File picker for documents (CV attachments, account files)',
        ],
      },
      {
        title: 'Maps & Location',
        items: [
          'Google Maps integration for ad/store location selection',
          'Geolocator & geocoding for device location',
          'Hierarchical location filtering — country → city → area',
        ],
      },
      {
        title: 'Notifications & Engagement',
        items: [
          'Firebase Cloud Messaging — foreground, background, and terminated states',
          'Local notifications with bilingual title/body fallback',
          'Deep linking via app_links for ads, stores, users, and chats',
        ],
      },
      {
        title: 'Architecture & Production',
        items: [
          'Layered architecture with repos, DTOs, and paginated API models across 40+ screens',
          'GetX state management with centralized routing and navigation manager',
          'Dio HTTP client with logging, token auth, and structured error handling',
          'Local caching with GetStorage (auth, language, account mode)',
          'Firebase Crashlytics, Facebook App Events with iOS ATT compliance',
          'Environment config (.env), asset codegen (flutter_gen), and in-app update prompts',
        ],
      },
    ],
  },
  {
    slug: 'goalatho',
    title: 'Goalatho',
    category: 'Sports Booking',
    company: 'Personal Project',
    period: '',
    tagline:
      'Sports booking app to discover nearby football pitches, check real-time slot availability, and manage reservations.',
    summary:
      'A Flutter sports booking app enabling users to discover nearby football pitches, check real-time slot availability, and manage reservations end-to-end — with phone OTP auth, Firebase push notifications, Google Maps venue discovery, an offline tournament bracket system, and bilingual Arabic/English support.',
    tech: ['Flutter', 'Dart', 'GetX', 'GetIt', 'Google Maps', 'Firebase', 'JWT'],
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
      'Goalatho is a Flutter sports booking app for iOS and Android that enables users to discover nearby football pitches, check real-time slot availability, and manage reservations end-to-end. It delivers location-aware pitch discovery using GPS, Google Maps, and backend-driven home feeds (trending, nearby, and new venues).\n\nThe app is built on a modular GetX architecture with feature modules (auth, home, search, bookings, teams, etc.), GetIt + GetX dependency injection, and a Dio API layer with pagination, filtering, sorting, and centralized error handling. It ships bilingual Arabic/English support with RTL layout, theme switching, and locale-aware API headers.',
    featureSections: [
      {
        title: 'Venue Discovery & Booking',
        items: [
          'Discover nearby football pitches with GPS and Google Maps integration',
          'Real-time slot availability and end-to-end reservation management',
          'Backend-driven home feeds — trending, nearby, and new venues',
          'Debounced search, pull-to-refresh, and pagination across listings',
          'Booking status tracking and cancellation flows',
        ],
      },
      {
        title: 'Authentication',
        items: [
          'Phone registration with OTP verification and password reset',
          'Secure JWT token storage with flutter_secure_storage',
          'Session-aware navigation and automatic logout on invalid tokens',
        ],
      },
      {
        title: 'Notifications',
        items: [
          'Firebase Cloud Messaging with foreground/background handling',
          'Local scheduled booking reminders',
          'Type-based deep navigation from push notification payloads',
        ],
      },
      {
        title: 'Tournament System',
        items: [
          'Offline tournament bracket system with knockout generation',
          'Team and logo management with local persistence',
          'Championship data stored locally for offline access',
        ],
      },
      {
        title: 'Architecture & Platform',
        items: [
          'Feature-based modular GetX architecture with GetIt DI',
          'Dio API client with auth tokens, request logging, and version/language headers',
          'Firebase Core + Messaging with background message handlers',
          'SharedPreferences + secure storage for app state and credentials',
          'Skeleton loading, Lottie animations, and responsive design (ScreenUtil)',
          'Environment config via dotenv, flutter_gen assets, and app version checking',
        ],
      },
    ],
  },
  {
    slug: 'trucklink',
    title: 'TruckLink',
    category: 'Logistics Platform',
    company: 'Graduation Project',
    period: '',
    tagline:
      'Logistics marketplace connecting shippers and carriers with real-time tracking, verification, and admin analytics.',
    summary:
      'A logistics marketplace with shipment posting, real-time Google Maps tracking, carrier verification, and offer management — plus dedicated driver workflows (live tracking, order updates, invoicing) and an admin dashboard for approvals and analytics.',
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
      'AI-powered Flutter puzzle game implementing six classic search algorithms on the Lights Out state-space problem.',
    summary:
      'An interactive mobile implementation of the classic Lights Out puzzle extended with artificial intelligence search algorithms — BFS, DFS, UCS, A*, and Hill Climbing — featuring custom heuristics, animated AI solution playback, customizable grid sizes, and performance metrics.',
    tech: ['Flutter', 'Dart', 'GetX', 'AI Algorithms', 'Graph Search'],
    logo: '/logos/lights-out.png',
    images: [
      '/lights-out/Lights-out.jpg',
      '/lights-out/Lights-out (2).jpg',
      '/lights-out/Lights-out (3).jpg',
    ],
    githubUrl: 'https://github.com/Bassam-Jawish/Lights_out',
    overview:
      'Lights Out is an interactive mobile implementation of the classic Lights Out puzzle, extended with a suite of artificial intelligence search algorithms. The project demonstrates translating a real-world puzzle into a formal search problem: each board configuration is a state, each tap is a transition, and the goal is reaching the all-off state.\n\nThe app implements BFS, DFS (iterative and recursive), UCS, A*, and Hill Climbing with path reconstruction, visited-state pruning, and multiple custom heuristic functions for informed search. It is architected with GetX and MVC for clean separation between game logic, AI solvers, and UI — featuring animated AI solution playback, customizable grid sizes, and performance metrics (moves, time, complexity stats).',
    featureSections: [
      {
        title: 'Game & Puzzle Mechanics',
        items: [
          '2D boolean grid modeled as state-space search states with deep copy',
          'Each board configuration is a node; each tap is an edge in the search graph',
          'Custom setup dialog for board dimensions with dynamic grid UI',
          'Move counter and timer tracking player and AI performance',
          'Portrait-only orientation lock with transparent status bar',
        ],
      },
      {
        title: 'AI Search Algorithms',
        items: [
          'Breadth-First Search (BFS) for optimal shortest-path solutions',
          'Depth-First Search — both iterative and recursive variants',
          'Uniform Cost Search (UCS) for cost-weighted pathfinding',
          'A* with admissible heuristics for informed optimal search',
          'Hill Climbing with custom heuristic functions',
          'Priority queues, stacks, and queues for different search strategies',
          'Visited-state pruning and path reconstruction for all algorithms',
        ],
      },
      {
        title: 'UI/UX',
        items: [
          'Animated particle background on the home screen',
          'Gradient effects for on/off lights with blinking fade animation on win',
          'Animated AI solution playback — watch algorithms solve puzzles step by step',
          'Material Design 3 theming and modern UI components',
        ],
      },
      {
        title: 'Architecture',
        items: [
          'GetX for reactive state management (Obx, Rx) and navigation',
          'MVC-style structure — model/ (state, node), controller/ (logic + algorithms), view/ (UI)',
          'Clean separation between game logic, AI solvers, and presentation layer',
        ],
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
