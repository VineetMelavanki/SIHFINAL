// Comprehensive Ayurvedic herbs database for the traceability system

export interface HerbInfo {
  id: string;
  name: string;
  scientificName: string;
  commonNames: string[];
  description: string;
  primaryUses: string[];
  harvestingSeason: string;
  optimalConditions: {
    soilType: string;
    climate: string;
    altitude: string;
    rainfall: string;
  };
  qualityParameters: {
    activeCompounds: string[];
    moistureLimit: number;
    shelfLife: string;
  };
  sustainabilityGuidelines: string[];
  majorRegions: string[];
}

export const AYURVEDIC_HERBS: HerbInfo[] = [
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    commonNames: ["Winter Cherry", "Indian Ginseng", "Asgandh"],
    description: "A renowned adaptogenic herb used for stress relief, energy enhancement, and overall vitality in Ayurvedic medicine.",
    primaryUses: [
      "Stress and anxiety management",
      "Energy and stamina enhancement", 
      "Immune system support",
      "Sleep quality improvement",
      "Cognitive function support"
    ],
    harvestingSeason: "October to February",
    optimalConditions: {
      soilType: "Well-drained sandy loam with pH 6.5-8.0",
      climate: "Dry tropical and subtropical regions",
      altitude: "0-1500 meters above sea level",
      rainfall: "500-750mm annually"
    },
    qualityParameters: {
      activeCompounds: ["Withanolides (min 2.5%)", "Alkaloids", "Saponins"],
      moistureLimit: 10,
      shelfLife: "24 months when properly stored"
    },
    sustainabilityGuidelines: [
      "Harvest only mature plants (8-10 months old)",
      "Leave 20% of plants for natural regeneration",
      "Rotate cultivation areas every 2-3 years",
      "Use organic farming practices"
    ],
    majorRegions: ["Rajasthan", "Gujarat", "Madhya Pradesh", "Haryana", "Punjab"]
  },
  {
    id: "tulsi",
    name: "Tulsi",
    scientificName: "Ocimum tenuiflorum",
    commonNames: ["Holy Basil", "Sacred Basil", "Tulasi"],
    description: "Sacred herb in Hindu tradition, widely used for respiratory health, immunity, and spiritual purification.",
    primaryUses: [
      "Respiratory health support",
      "Immune system strengthening",
      "Stress reduction",
      "Anti-inflammatory properties",
      "Spiritual and mental clarity"
    ],
    harvestingSeason: "Year-round, best harvested in morning",
    optimalConditions: {
      soilType: "Rich, well-drained loamy soil with pH 6.0-7.5",
      climate: "Warm, humid tropical climate",
      altitude: "0-2000 meters above sea level", 
      rainfall: "1000-1500mm annually"
    },
    qualityParameters: {
      activeCompounds: ["Eugenol", "Ursolic acid", "Essential oils"],
      moistureLimit: 12,
      shelfLife: "18 months when properly dried and stored"
    },
    sustainabilityGuidelines: [
      "Harvest leaves without damaging the plant structure",
      "Allow plants to flower for seed production",
      "Practice companion planting",
      "Use rainwater harvesting for irrigation"
    ],
    majorRegions: ["Uttar Pradesh", "Bihar", "West Bengal", "Odisha", "Tamil Nadu"]
  },
  {
    id: "turmeric",
    name: "Turmeric",
    scientificName: "Curcuma longa",
    commonNames: ["Haldi", "Golden Spice", "Indian Saffron"],
    description: "Golden-yellow rhizome celebrated for its anti-inflammatory, antioxidant, and healing properties.",
    primaryUses: [
      "Anti-inflammatory support",
      "Digestive health",
      "Skin health and wound healing",
      "Liver detoxification",
      "Joint health support"
    ],
    harvestingSeason: "January to March (8-9 months after planting)",
    optimalConditions: {
      soilType: "Well-drained sandy loam with high organic matter, pH 5.5-7.5",
      climate: "Warm, humid tropical climate",
      altitude: "0-1200 meters above sea level",
      rainfall: "1000-2000mm annually"
    },
    qualityParameters: {
      activeCompounds: ["Curcumin (min 3%)", "Essential oils", "Turmerones"],
      moistureLimit: 8,
      shelfLife: "36 months when properly processed and stored"
    },
    sustainabilityGuidelines: [
      "Use disease-free seed rhizomes",
      "Practice crop rotation with legumes",
      "Harvest at optimal maturity for maximum curcumin",
      "Implement water-efficient irrigation"
    ],
    majorRegions: ["Andhra Pradesh", "Telangana", "Tamil Nadu", "Karnataka", "Kerala"]
  },
  {
    id: "neem",
    name: "Neem",
    scientificName: "Azadirachta indica",
    commonNames: ["Margosa Tree", "Indian Lilac", "Nimba"],
    description: "Versatile medicinal tree with powerful antimicrobial, antiviral, and pest-repelling properties.",
    primaryUses: [
      "Skin health and acne treatment",
      "Natural pest control",
      "Oral health support",
      "Blood purification",
      "Immune system support"
    ],
    harvestingSeason: "Leaves: Year-round; Seeds: May-August",
    optimalConditions: {
      soilType: "Well-drained soils, tolerates poor soils, pH 6.2-7.0",
      climate: "Tropical and subtropical, drought-tolerant",
      altitude: "0-1500 meters above sea level",
      rainfall: "400-1200mm annually"
    },
    qualityParameters: {
      activeCompounds: ["Azadirachtin", "Nimbin", "Quercetin"],
      moistureLimit: 10,
      shelfLife: "12-18 months for leaves, 24 months for seeds"
    },
    sustainabilityGuidelines: [
      "Sustainable leaf harvesting without over-stripping",
      "Protect mature seed-bearing trees",
      "Promote natural regeneration",
      "Use fallen leaves and fruits"
    ],
    majorRegions: ["Rajasthan", "Gujarat", "Madhya Pradesh", "Uttar Pradesh", "Karnataka"]
  },
  {
    id: "brahmi",
    name: "Brahmi",
    scientificName: "Bacopa monnieri",
    commonNames: ["Water Hyssop", "Thyme-leaved Gratiola", "Mandukaparni"],
    description: "Aquatic herb renowned for cognitive enhancement, memory support, and nervous system health.",
    primaryUses: [
      "Memory and cognitive enhancement",
      "Anxiety and stress reduction",
      "Learning ability improvement",
      "Nervous system support",
      "Mental clarity and focus"
    ],
    harvestingSeason: "March to May and September to November",
    optimalConditions: {
      soilType: "Moist, muddy soil near water bodies, pH 6.0-8.0",
      climate: "Tropical and subtropical wetlands",
      altitude: "0-1000 meters above sea level",
      rainfall: "High humidity and water availability essential"
    },
    qualityParameters: {
      activeCompounds: ["Bacosides (min 20%)", "Alkaloids", "Saponins"],
      moistureLimit: 8,
      shelfLife: "24 months when properly dried"
    },
    sustainabilityGuidelines: [
      "Harvest aerial parts leaving roots intact",
      "Maintain wetland ecosystems",
      "Practice rotational harvesting",
      "Avoid over-collection from wild populations"
    ],
    majorRegions: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh", "West Bengal"]
  },
  {
    id: "guduchi",
    name: "Guduchi",
    scientificName: "Tinospora cordifolia",
    commonNames: ["Giloy", "Amrita", "Heart-leaved Moonseed"],
    description: "Climbing shrub known as 'Amrita' (nectar of immortality) for its remarkable immune-boosting properties.",
    primaryUses: [
      "Immune system enhancement",
      "Fever and infection management",
      "Liver health support",
      "Anti-inflammatory properties",
      "General health tonic"
    ],
    harvestingSeason: "November to February (stem collection)",
    optimalConditions: {
      soilType: "Well-drained, fertile soil with organic matter, pH 6.0-7.5",
      climate: "Tropical and subtropical regions",
      altitude: "0-1000 meters above sea level",
      rainfall: "750-1500mm annually"
    },
    qualityParameters: {
      activeCompounds: ["Tinosporin", "Berberine", "Alkaloids", "Glycosides"],
      moistureLimit: 12,
      shelfLife: "18 months when properly processed"
    },
    sustainabilityGuidelines: [
      "Harvest mature stems leaving young growth",
      "Maintain climbing support trees",
      "Practice selective cutting for regeneration",
      "Protect root systems during collection"
    ],
    majorRegions: ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan", "Maharashtra"]
  }
];

export const getHerbById = (id: string): HerbInfo | undefined => {
  return AYURVEDIC_HERBS.find(herb => herb.id === id);
};

export const getHerbsByRegion = (region: string): HerbInfo[] => {
  return AYURVEDIC_HERBS.filter(herb => 
    herb.majorRegions.some(r => r.toLowerCase().includes(region.toLowerCase()))
  );
};

export const getHerbsBySeason = (season: string): HerbInfo[] => {
  return AYURVEDIC_HERBS.filter(herb => 
    herb.harvestingSeason.toLowerCase().includes(season.toLowerCase())
  );
};

export const validateHerbQuality = (herbId: string, testResults: any): { valid: boolean; issues: string[] } => {
  const herb = getHerbById(herbId);
  if (!herb) return { valid: false, issues: ["Unknown herb species"] };
  
  const issues: string[] = [];
  
  if (testResults.moisture > herb.qualityParameters.moistureLimit) {
    issues.push(`Moisture content ${testResults.moisture}% exceeds limit of ${herb.qualityParameters.moistureLimit}%`);
  }
  
  // Add more validation logic based on herb-specific parameters
  
  return {
    valid: issues.length === 0,
    issues
  };
};