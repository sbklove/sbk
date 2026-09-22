import { ProductItem, SectorItem, ProjectItem } from '../types';

export const PRODUCTS: ProductItem[] = [
  // Indoor & Outdoor Advertising LED Video Walls
  {
    id: 'lumina-micro-p12',
    name: 'LuminaPro Fine-Pitch MicroLED',
    modelCode: 'TL-MLED-12',
    category: 'indoor-outdoor',
    tagline: 'Broadcast-Grade Ultra HD MicroLED for Command Centers & Corporate Boardrooms',
    description: 'Ultra-fine pixel pitch microLED engineered with Common Cathode architecture for cold-screen operation, 1,200 nits calibrated brightness, and true DCI-P3 99% color gamut.',
    pixelPitch: 'P0.9 - P1.25 mm',
    brightness: '800 - 1,200 nits (Adjustable)',
    refreshRate: '3,840 Hz - 7,680 Hz',
    viewingAngle: '170° H / 170° V',
    ipRating: 'IP40 Front / IP30 Rear',
    serviceType: 'Full Front Magnetic',
    contrastRatio: '10,000:1 (Ultra-Black Matrix)',
    cabinetSize: '600 × 337.5 × 38 mm (Native 16:9)',
    cabinetWeight: '4.8 kg / panel',
    powerConsumption: 'Avg 135 W/m² (Common Cathode)',
    bestFor: ['Security Command Centers', 'Executive Boardrooms', 'Broadcast Studios', 'High-End Control Rooms'],
    keyFeatures: [
      'Pure Black COB (Chip-on-Board) surface protection',
      'Vacuum tool front-service module extraction in 3 seconds',
      'Dual power and signal backup redundancy',
      'HDR10+ and 16-bit grayscale precision'
    ],
    isPopular: true,
    accentColor: '#00E5FF'
  },
  {
    id: 'aegis-outdoor-p4',
    name: 'AegisShield Outdoor Billboard LED',
    modelCode: 'TL-OUT-P40',
    category: 'indoor-outdoor',
    tagline: 'High-Impact Weatherproof IP66 Commercial Billboard Display',
    description: 'Designed for extreme sun exposure and harsh environments, delivering up to 10,000 nits peak luminance with die-cast magnesium anti-corrosion cabinets and dynamic auto-dimming.',
    pixelPitch: 'P3.91 - P5.95 mm',
    brightness: '7,500 - 10,000 nits (High Ambient Daylight)',
    refreshRate: '3,840 Hz',
    viewingAngle: '160° H / 140° V',
    ipRating: 'IP66 Front / IP65 Rear',
    serviceType: 'Dual Front/Rear',
    contrastRatio: '6,500:1',
    cabinetSize: '500 × 1000 mm / 1000 × 1000 mm',
    cabinetWeight: '12.5 kg / m²',
    powerConsumption: 'Avg 210 W/m² (Smart Dimming)',
    bestFor: ['Highway Billboards', 'Stadium Perimeter Walls', 'Mall Exterior Facades', 'Transit Station Hubs'],
    keyFeatures: [
      'Industrial IP66 silicon sealed module waterproof design',
      'Operates from -40°C arctic frost to +65°C desert heat',
      'Common Cathode energy saver reduces operational power by 40%',
      'Wind-load certified hurricane resistant bracket mounting'
    ],
    isPopular: true,
    accentColor: '#00FF88'
  },
  {
    id: 'apex-indoor-p25',
    name: 'ApexPro Commercial Indoor Video Wall',
    modelCode: 'TL-IND-P25',
    category: 'indoor-outdoor',
    tagline: 'Seamless Architectural Video Wall for Shopping Malls & Flagship Retail',
    description: 'High refresh rate, bezel-less modular panels with vivid color saturation and low thermal emission. Perfect for continuous 24/7 commercial retail and airport concourses.',
    pixelPitch: 'P1.86 - P2.5 mm',
    brightness: '1,000 - 1,500 nits',
    refreshRate: '3,840 Hz',
    viewingAngle: '160° H / 160° V',
    ipRating: 'IP43 Front',
    serviceType: 'Front Maintenance',
    contrastRatio: '5,000:1',
    cabinetSize: '640 × 480 mm / 500 × 500 mm',
    cabinetWeight: '6.2 kg / panel',
    powerConsumption: 'Avg 160 W/m²',
    bestFor: ['Luxury Retail Stores', 'Hotel Lobbies', 'Conference Halls', 'Auditoriums'],
    keyFeatures: [
      'Modular magnetic front service with zero rear clearance',
      'Ultra-thin 45mm frame profile for flush wall mounting',
      'Synchronous / Asynchronous dual cloud cloud CMS integration',
      'Flicker-free camera recording support'
    ],
    accentColor: '#00E5FF'
  },

  // Interactive Smart Boards & Digital Signage
  {
    id: 'interactive-touch-smartboard',
    name: 'OmniTouch 4K Smart Board & Collaboration Hub',
    modelCode: 'TL-OMNI-86',
    category: 'smart-signage',
    tagline: '40-Point Multi-Touch Interactive All-in-One Commercial Smart Display',
    description: 'Enterprise interactive display combining 4K zero-bonding optical anti-glare glass, built-in dual OS (Android 14 + Windows OPS), wireless screen casting, and digital whiteboarding.',
    pixelPitch: '0.49 mm (4K UHD 3840×2160)',
    brightness: '500 - 650 nits (Anti-Glare 7H Hardness)',
    refreshRate: '120 Hz with <5ms Touch Latency',
    viewingAngle: '178° H / 178° V',
    ipRating: 'IP54 Front Dust Resistant',
    serviceType: 'Front Maintenance',
    contrastRatio: '4,000:1',
    cabinetSize: '65" / 75" / 86" / 98" Diagonal Sizes',
    cabinetWeight: '48 kg (75" version)',
    powerConsumption: 'Max 280 W',
    bestFor: ['Corporate Meeting Rooms', 'Medical Training Rooms', 'Higher Education Lecture Halls', 'Design Studios'],
    keyFeatures: [
      '40-point precision infrared & capacitive stylus handwriting',
      'Integrated 4K AI auto-framing camera & 8-array microphone',
      'Instant screen sharing for iOS, Android, macOS, and Windows',
      'Antibacterial AG toughened glass with shatter-proof coating'
    ],
    isPopular: true,
    accentColor: '#00E5FF'
  },
  {
    id: 'digisign-totem-kiosk',
    name: 'Vanguard Ultra-Slim Digital Signage Totem',
    modelCode: 'TL-TOT-55',
    category: 'smart-signage',
    tagline: 'Freestanding Double-Sided & Single-Sided Interactive Advertising Kiosk',
    description: 'Sleek aluminum enclosure with integrated cloud content management, remote scheduled publishing, ambient brightness sensor, and optional capacitive touch.',
    pixelPitch: '0.31 mm (Full HD & 4K options)',
    brightness: '700 - 2,500 nits (Indoor & Semi-Outdoor)',
    refreshRate: '60 Hz - 120 Hz',
    viewingAngle: '178° H / 178° V',
    ipRating: 'IP55 Vandal Resistant',
    serviceType: 'Front Maintenance',
    contrastRatio: '3,500:1',
    cabinetSize: '1950 × 750 × 70 mm (Freestanding)',
    cabinetWeight: '55 kg with heavy steel stabilizing base',
    powerConsumption: 'Avg 180 W',
    bestFor: ['Shopping Mall Wayfinding', 'Airport Terminals', 'Hotel Entrances', 'Automotive Showrooms'],
    keyFeatures: [
      'Remote centralized 4G/Wi-Fi CMS playlist management',
      'Dual-sided synchronized or split independent advertising',
      'Tempered 6mm blast-proof protection glass',
      'Built-in QR code & NFC reader expansion slots'
    ],
    accentColor: '#00FF88'
  },

  // LED Currency & Token Display Boards
  {
    id: 'currency-rate-matrix',
    name: 'FxMatrix Multi-Currency Exchange Board',
    modelCode: 'TL-FX-24',
    category: 'currency-token',
    tagline: 'Real-Time Financial Rate Matrix with Cloud API Automated Updates',
    description: 'High-contrast 7-segment and alphanumeric dot-matrix LED currency display customized for central banks, forex brokers, hotels, and bullion trading houses with sub-second API sync.',
    pixelPitch: 'P2.5 / P3.75 mm Dot Matrix & 1.0" - 2.3" Digits',
    brightness: '800 - 1,500 nits (Anti-Glare Acrylic Facade)',
    refreshRate: '1,920 Hz',
    viewingAngle: '140° H / 120° V',
    ipRating: 'IP40 Indoor Enclosure',
    serviceType: 'Front Maintenance',
    contrastRatio: '8,000:1 High Contrast Black Mask',
    cabinetSize: 'Custom 8 to 36 Currency Rows (e.g., 1200 × 900 × 50 mm)',
    cabinetWeight: '14 kg',
    powerConsumption: 'Avg 65 W',
    bestFor: ['Commercial Bank Branches', 'Foreign Exchange Bureaus', 'Airport Currency Counters', 'Gold & Commodity Dealers'],
    keyFeatures: [
      'Automated API integration with Bloomberg, Reuters & Central Bank rates',
      'Dynamic Buy / Sell spread calculation with flashing update indicators',
      'Scrolling programmable LED ticker banner for financial news',
      'Non-volatile backup memory keeps rates intact during power loss'
    ],
    isPopular: true,
    accentColor: '#00FF88'
  },
  {
    id: 'token-queue-display',
    name: 'Chronos Smart Queue & Token Matrix',
    modelCode: 'TL-QMS-08',
    category: 'currency-token',
    tagline: 'Hospital & Banking Patient/Customer Queue Management Display',
    description: 'Vivid red/green/amber high-legibility token counter boards with multi-counter voice chime, wireless queue ticket integration, and department routing graphics.',
    pixelPitch: 'P3.75 - P4.75 mm RG Tricolor LED',
    brightness: '900 nits',
    refreshRate: '1,920 Hz',
    viewingAngle: '150° H / 120° V',
    ipRating: 'IP40 Indoor',
    serviceType: 'Front Maintenance',
    contrastRatio: '6,000:1',
    cabinetSize: '650 × 200 × 40 mm (Counter) / 1000 × 600 mm (Master)',
    cabinetWeight: '4.2 kg',
    powerConsumption: 'Avg 35 W',
    bestFor: ['Hospital Outpatient Clinics', 'Government Service Centers', 'Retail Bank Teller Counters', 'Food Court Pickups'],
    keyFeatures: [
      'Multi-lingual synthetic voice chime speaker output',
      'Wireless Zigbee / Wi-Fi mesh network to counter caller pads',
      'Real-time wait time statistics and service SLA logging',
      'Configurable flashing counter numbers and arrow directions'
    ],
    accentColor: '#00E5FF'
  },

  // Transparent & Flexible LED Displays
  {
    id: 'crystal-transparent-p39',
    name: 'CrystalClear Architectural Transparent LED',
    modelCode: 'TL-CLR-39',
    category: 'transparent-flexible',
    tagline: '75% - 85% High Transparency Glass Facade & Window Display',
    description: 'Transform architectural glass and storefront windows into vivid digital canvases without blocking natural ambient daylight or indoor vision.',
    pixelPitch: 'P3.91 - P7.81 mm',
    brightness: '4,500 - 6,500 nits (Sunlight Readable)',
    refreshRate: '3,840 Hz',
    viewingAngle: '160° H / 160° V',
    ipRating: 'IP54 Indoor / Semi-Outdoor',
    serviceType: 'Front Maintenance',
    contrastRatio: '1,500:1',
    cabinetSize: '1000 × 500 × 16 mm (Ultra-Slim Strip Structure)',
    cabinetWeight: '7.5 kg / m²',
    powerConsumption: 'Avg 180 W/m²',
    bestFor: ['Luxury Storefront Windows', 'Auto Dealership Glass Facades', 'Shopping Mall Atriums', 'Airport Walkways'],
    keyFeatures: [
      'Up to 80% optical transparency preserves exterior view and sunlight',
      'Modular lightweight frame attaches directly to glass mullions',
      'High-brightness Nichia LEDs visible under direct midday sunlight',
      'Frameless edge design for seamless expansive panoramic coverage'
    ],
    isPopular: true,
    accentColor: '#00E5FF'
  },
  {
    id: 'flexform-curved-p18',
    name: 'FlexForm Soft Silicone Curved & Cylinder LED',
    modelCode: 'TL-FLX-18',
    category: 'transparent-flexible',
    tagline: 'Ultra-Flexible Bendable Panels for Cylinders, Waves & Sculptures',
    description: 'Soft silicone substrate modules that bend convex, concave, or wrap into complete 360° architectural columns without distortion or color shift.',
    pixelPitch: 'P1.56 - P2.5 mm',
    brightness: '800 - 1,400 nits',
    refreshRate: '3,840 Hz - 7,680 Hz',
    viewingAngle: '160° H / 160° V',
    ipRating: 'IP40 Indoor',
    serviceType: 'Full Front Magnetic',
    contrastRatio: '7,000:1',
    cabinetSize: '320 × 160 mm Flexible Sub-Modules',
    cabinetWeight: '380 g / module',
    powerConsumption: 'Avg 150 W/m²',
    bestFor: ['360° Column Video Walls', 'Curved Wave Auditoriums', 'Immersive Museum Tunnels', 'Luxury Brand Arches'],
    keyFeatures: [
      'Bending radius down to 140mm without degrading pixel alignment',
      'Strong neodymium magnets snap directly to curved structural steel',
      'Seamless joinery eliminates dark seams on organic bends',
      'Anti-static and flame-retardant silicone composite build'
    ],
    accentColor: '#00FF88'
  }
];

export const SECTORS: SectorItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Hospitals',
    icon: 'Activity',
    headline: 'Clinical Precision Displays & Intelligent Patient Routing',
    description: 'High-contrast medical viewing monitors, surgical auditorium fine-pitch walls, and multi-department token queue matrices engineered for 24/7 reliability and hygiene standards.',
    solutions: [
      'Zero-latency operating theater video walls (DICOM Part 14 calibrated)',
      'Digital waiting room smart queues with audio chimes and health advisories',
      'Interactive hospital wayfinding totems with wheelchair accessibility maps',
      'Anti-microbial front glass coatings resistant to chemical disinfectants'
    ],
    recommendedPitch: 'P0.9 - P1.8 Fine Pitch',
    typicalInstallation: 'Emergency triage boards, auditoriums, outpatient waiting halls',
    stats: '85+ Hospitals & Medical Centers Equipped',
    statLabel: 'Clinical Installations',
    accent: 'blue'
  },
  {
    id: 'banking',
    name: 'Banking & Finance',
    icon: 'TrendingUp',
    headline: 'Real-Time Market Tickers, Forex Boards & Trading Walls',
    description: 'Mission-critical continuous financial display networks with sub-second API synchronization to Bloomberg and central bank indices, plus VIP customer digital signage.',
    solutions: [
      'Centralized multi-currency and bullion rate matrices with live API feeds',
      'Panoramic curved LED trading room ticker tapes and macro heatmaps',
      'Secure teller counter token calling displays with dual privacy screens',
      'Corporate boardroom video walls with encrypted teleconferencing'
    ],
    recommendedPitch: 'P1.2 - P2.5 High Refresh',
    typicalInstallation: 'Trading floors, branch lobbies, forex counters, executive suites',
    stats: '120+ Financial Institutions Supported',
    statLabel: 'Branches & Exchanges',
    accent: 'green'
  },
  {
    id: 'retail',
    name: 'Retail & Shopping Malls',
    icon: 'ShoppingBag',
    headline: 'High-Conversion Storefront Displays & Immersive Pillars',
    description: 'Capture foot traffic and multiply sales conversions with sunlight-readable window displays, 80% transparent glass displays, and interactive catalog kiosks.',
    solutions: [
      'Ultra-bright transparent LED glass screens preserving window merchandise views',
      'Architectural 360° cylindrical column screens inside mall atriums',
      'Curved anamorphic 3D corner billboard screens with eye-popping realism',
      'Smart sensor integration for audience demographic-based ad switching'
    ],
    recommendedPitch: 'P1.8 - P3.9 Transparent / Curved',
    typicalInstallation: 'Storefront glass, atrium centerpiece pillars, brand popups',
    stats: '340+ Retail Stores & Flagships Deployed',
    statLabel: 'Retail Deployments',
    accent: 'blue'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Hotels',
    icon: 'Building2',
    headline: 'Panoramic Lobby Video Art, Dynamic Menus & Ballrooms',
    description: 'Elevate guest impressions from the moment they arrive. Seamless ballroom staging displays, digital concierge wayfinders, and ultra-crisp restaurant menu boards.',
    solutions: [
      'Expansive hotel lobby ambient video walls displaying generative art',
      'Grand ballroom modular stage screens with rental quick-rigging locks',
      'Restaurant digital menu boards with automated breakfast/dinner dayparting',
      'VIP lounge fine-pitch sports and entertainment viewing walls'
    ],
    recommendedPitch: 'P1.5 - P2.6 MicroLED',
    typicalInstallation: 'Grand lobbies, banquet ballrooms, rooftop lounges, reception',
    stats: '95+ Luxury Hotels & Resorts Powered',
    statLabel: 'Hospitality Venues',
    accent: 'green'
  },
  {
    id: 'transit',
    name: 'Airports & Transit Hubs',
    icon: 'Plane',
    headline: 'Mission-Critical FIDS & High-Visibility Transit Wayfinding',
    description: 'Extreme-durability, continuous 24/7 operating LED networks for Flight Information Display Systems (FIDS), train schedules, concourse billboards, and tunnel portals.',
    solutions: [
      'Ultra-high contrast FIDS departure & arrival information walls',
      'Curved concourse advertising billboards with remote cloud management',
      'Outdoor taxi-stand and bus terminal high-nits weatherproof schedule totems',
      'Redundant power supply modules for non-stop zero-blackout operation'
    ],
    recommendedPitch: 'P1.8 - P4.0 High Reliability',
    typicalInstallation: 'Main passenger terminals, baggage claim carousels, boarding gates',
    stats: '24 Transit Hubs & Terminals Modernized',
    statLabel: 'International Hubs',
    accent: 'blue'
  },
  {
    id: 'events',
    name: 'Events & Concert Staging',
    icon: 'Radio',
    headline: 'Touring Rental LED Screens & High-Refresh Broadcast Stages',
    description: 'Fast-assembly carbon fiber and magnesium touring frames, 7680Hz camera-friendly refresh rate, concave/convex curve locks, and heavy-duty flight case logistics.',
    solutions: [
      'Tour-grade rental LED panels with single-operator magnetic quick locks',
      '7,680Hz ultra-high refresh rate for broadcast camera flicker-free capture',
      'IP66 all-weather rainstorm performance for outdoor music festivals',
      'Virtual production xR and broadcast studio background video walls'
    ],
    recommendedPitch: 'P1.9 - P3.9 Rental Touring',
    typicalInstallation: 'Stadium concert stages, tech keynotes, esports arenas, broadcast studios',
    stats: '1,200+ Live Productions Supported',
    statLabel: 'Events Staged',
    accent: 'green'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-retail-flagship',
    title: 'Omnichannel Luxury Retail Digital Overhaul',
    clientSector: 'Retail & Fashion Flagships',
    location: 'Metropolis Luxury Fashion Avenue',
    displaySize: '145 m² Total LED Area across 3 Floors',
    pixelPitch: 'P1.25 MicroLED & P3.9 Transparent Glass',
    statMetric: '50+',
    statLabel: 'Retail Outlets Upgraded Nationally',
    summary: 'Turned a heritage multi-story flagship into an immersive digital retail destination. Integrated transparent window LED screens with internal curved column displays synchronized via central cloud scheduling.',
    tags: ['Retail Flagship', 'Transparent LED', 'Fine Pitch', 'Cloud CMS'],
    features: ['80% Transparency Glass Wall', '4K Ambient Pillars', 'Centralized Remote Push', '38% Energy Savings']
  },
  {
    id: 'proj-metro-transit',
    title: 'Central Metro Hub 360° Cylinder Information Wall',
    clientSector: 'Public Transportation & Transit',
    location: 'Metro Central Concourse',
    displaySize: '120 m² 360° Cylindrical Pillar Screen',
    pixelPitch: 'P1.86 FlexForm Curved Modules',
    statMetric: '1.2M',
    statLabel: 'Daily Passenger Impressions',
    summary: 'Engineered custom structural curvature to wrap around structural transit pillars. Features redundant power supplies and automated ambient daylight brightness dimming for non-stop 24/7/365 operation.',
    tags: ['Transit Hub', 'Curved LED', '24/7 Redundancy', 'Wayfinding'],
    features: ['Seamless 360° Geometry', 'Zero Blackout Dual Signal', 'Auto Brightness Sensor', 'FIDS Sync']
  },
  {
    id: 'proj-central-bank',
    title: 'National Financial Exchange Currency & Bullion Wall',
    clientSector: 'Banking & Financial Markets',
    location: 'Financial District Trading Exchange',
    displaySize: '48 m² Dual-Sided Ultra-High-Contrast Matrix',
    pixelPitch: 'P1.5 Fine Pitch + TL-FX Multi-Currency Modules',
    statMetric: '0.18s',
    statLabel: 'API Rate Refresh Latency',
    summary: 'Replaced outdated manual rate boards with sub-second automated financial display infrastructure tied directly to international exchange ticker APIs and real-time gold fixings.',
    tags: ['Banking', 'Real-Time API', 'High Grayscale', '16:9 Matrix'],
    features: ['Direct Bloomberg/Reuters Feed', 'Ultra-Black Anti-Glare Mask', 'Hot-Swappable Cards', 'Non-Volatile Memory']
  },
  {
    id: 'proj-apex-medical',
    title: 'Apex Health Center Surgical Auditorium & Queue Network',
    clientSector: 'Healthcare & Clinical Education',
    location: 'Apex University Medical Campus',
    displaySize: '8K HDR 32 m² Auditorium Wall + 42 Counter Token Boards',
    pixelPitch: 'P0.9 MicroLED (Auditorium) & Tricolor LED (Queues)',
    statMetric: '99.99%',
    statLabel: 'Clinical Tele-Surgical Uptime',
    summary: 'Delivered a DICOM-compliant 8K MicroLED wall for live remote surgical training with zero latency, accompanied by a facility-wide wireless queue routing system cutting patient wait confusion by 42%.',
    tags: ['Healthcare', '8K MicroLED', 'Queue Token Board', 'DICOM Certified'],
    features: ['DICOM Part 14 Grayscale', 'Cold Screen Tech <36°C', 'Multi-Lingual Audio Chimes', 'Vacuum Service']
  },
  {
    id: 'proj-arena-concert',
    title: 'Grand Arena 10,000 Nits Outdoor Festival Stage',
    clientSector: 'Concerts & Entertainment',
    location: 'Olympic Park Open-Air Stadium',
    displaySize: '380 m² Curved Stage Backdrop with Wing Billboards',
    pixelPitch: 'P3.91 TourLock Magnesium Cabinets',
    statMetric: '7,680Hz',
    statLabel: 'Flicker-Free Camera Refresh',
    summary: 'Delivered tour-ready rental LED panels with single-technician latching mechanisms. Resisted sudden coastal rainstorms with full IP66 submersion-grade module sealing while retaining 7,500 nits daylight punch.',
    tags: ['Concerts', 'IP66 Weatherproof', 'Rental Rigging', '7680Hz Refresh'],
    features: ['Single-Action Quick Rigging', 'IP66 Ingress Protection', '10° Convex/Concave Curve Locks', 'Ultra-Light Magnesium']
  }
];

export const CORE_FEATURES = [
  {
    id: 'pixel-pitch',
    title: 'Fine Pixel Pitch & Ultra HD Resolution',
    subtitle: 'MicroLED & COB Technology from P0.9mm to P1.8mm',
    description: 'Experience broadcast-grade clarity with zero visible pixelation even at point-blank viewing distances. Incorporates 16-bit color depth, DCI-P3 wide color spectrum, and ultra-high 7,680Hz refresh rate.',
    badge: 'P0.9 - P1.8mm UHD',
    stats: '7,680 Hz Refresh',
    metricDetail: 'Flicker-free under broadcast 4K high-speed cameras',
    icon: 'Sparkles',
    specs: [
      'True MicroLED & COB (Chip-on-Board) architecture',
      '10,000:1 ultra-deep black contrast ratio',
      'HDR10+ and Dolby Vision cinema calibration',
      '170° ultra-wide horizontal & vertical viewing angle'
    ]
  },
  {
    id: 'common-cathode',
    title: 'Energy-Saving Common Cathode Technology',
    subtitle: 'Up to 45% Lower Power Draw & Cold-Screen Thermal Efficiency',
    description: 'Unlike traditional common-anode screens that waste energy as excess heat, Common Cathode precisely separates R, G, and B diode voltage supplies (2.8V for Red, 3.8V for Green/Blue).',
    badge: '45% Power Reduction',
    stats: '< 38°C Surface Temp',
    metricDetail: 'Extends continuous LED diode lifespan to 100,000+ hours',
    icon: 'Zap',
    specs: [
      'Independent precision voltage distribution per color chip',
      'Drastically reduced operational electricity costs for billboards',
      'No noisy air-conditioning needed behind screen cabinets',
      'Prevents color degradation and premature pixel burnout'
    ]
  },
  {
    id: 'front-maintenance',
    title: 'Front Maintenance & Modular Design',
    subtitle: 'Zero Rear Access Needed — Vacuum Tool Service in Under 3 Seconds',
    description: 'Engineered for sleek wall-mount installations where rear space is impossible. Modular magnetic panels detach smoothly from the front using our specialized electric vacuum extraction tool.',
    badge: 'Vacuum Front Service',
    stats: '< 3 Seconds',
    metricDetail: 'Fastest module extraction and replacement in the industry',
    icon: 'Wrench',
    specs: [
      'Full front access for modules, receiving cards, and power units',
      'Flush architectural mounting directly on drywall or steel studs',
      'Cable-free pin connector boards eliminate internal wire clutter',
      'Hot-swappable modules during live screen operation'
    ]
  },
  {
    id: 'weatherproof-durability',
    title: 'Weatherproof & High-Durability Cabinets',
    subtitle: 'IP65 / IP66 Certified Die-Cast Magnesium Alloy Construction',
    description: 'Built like an armored vault against severe weather. Tested against torrential monsoon rains, salt spray corrosion, desert sandstorms, and extreme temperatures ranging from -40°C to +65°C.',
    badge: 'IP66 Industrial Rating',
    stats: '-40°C to +65°C',
    metricDetail: 'Anti-UV, salt-fog resistant, hurricane wind load tested',
    icon: 'ShieldCheck',
    specs: [
      'Precision CNC die-cast magnesium alloy frame (<0.05mm tolerance)',
      'Double-waterproof sealing ring on each modular chamber',
      'Anti-reflective, anti-scratch conformal coating on diode face',
      'CE, FCC, RoHS, ISO9001 and ETL safety certified'
    ]
  }
];

export const COMPANY_STATS = [
  { value: '500+', label: 'Commercial Installations', detail: 'Across 28+ countries' },
  { value: '99.98%', label: 'Mission-Critical Uptime', detail: 'Dual backup redundancy' },
  { value: '10,000+', label: 'Nits Peak Luminance', detail: 'Direct sunlight readability' },
  { value: '45%', label: 'Average Power Saved', detail: 'Via Common Cathode tech' }
];
