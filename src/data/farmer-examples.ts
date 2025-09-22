// Comprehensive example data for farmer/collector portal
// Representing diverse Ayurvedic herb collection across India

export interface CollectionRecord {
  id: string;
  species: string;
  location: string;
  state: string;
  coordinates: string;
  quantity: number;
  quality: string;
  timestamp: string;
  status: "pending" | "verified" | "processed" | "shipped";
  collectorInfo: {
    name: string;
    id: string;
    certification: string;
    experience: string;
    cooperative?: string;
  };
  environmentalData: {
    weather: string;
    temperature: string;
    humidity: string;
    soilPH?: number;
    harvestMethod: string;
  };
  qualityMetrics: {
    moisture?: number;
    activeCompounds?: string;
    appearance: string;
    aroma: string;
    contaminants: string;
  };
  sustainabilityNotes: string[];
  images?: string[];
  blockchainHash: string;
  paymentStatus: "pending" | "processed" | "completed";
  pricePerKg: number;
}

export const EXAMPLE_COLLECTIONS: CollectionRecord[] = [
  {
    id: "ASH001",
    species: "Ashwagandha",
    location: "Nagaur District, Rajasthan",
    state: "Rajasthan",
    coordinates: "27.1917, 73.7343",
    quantity: 25.5,
    quality: "Premium",
    timestamp: "2024-01-15 09:30",
    status: "verified",
    collectorInfo: {
      name: "Ravi Kumar",
      id: "COL-2847",
      certification: "Organic Collection License",
      experience: "12 years",
      cooperative: "Rajasthan Organic Farmers Cooperative"
    },
    environmentalData: {
      weather: "Clear, sunny morning",
      temperature: "24°C",
      humidity: "45%",
      soilPH: 6.8,
      harvestMethod: "Hand-picked at sunrise, roots carefully extracted"
    },
    qualityMetrics: {
      moisture: 8.2,
      activeCompounds: "Withanolides: 3.2%",
      appearance: "Healthy, unblemished roots",
      aroma: "Characteristic earthy smell",
      contaminants: "None detected"
    },
    sustainabilityNotes: [
      "Left 25% of plants for natural regeneration",
      "Harvested only mature plants (10+ months)",
      "Used traditional tools to preserve root system",
      "Collected during optimal lunar phase"
    ],
    blockchainHash: "0x7f9a8b3c2d1e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5",
    paymentStatus: "completed",
    pricePerKg: 450
  },
  {
    id: "TUL002",
    species: "Tulsi",
    location: "Lucknow, Uttar Pradesh", 
    state: "Uttar Pradesh",
    coordinates: "26.8467, 80.9462",
    quantity: 18.2,
    quality: "Good",
    timestamp: "2024-01-14 14:20",
    status: "processed",
    collectorInfo: {
      name: "Priya Sharma",
      id: "COL-1923",
      certification: "Sacred Plant Collection Permit",
      experience: "8 years",
      cooperative: "UP Women Farmers Alliance"
    },
    environmentalData: {
      weather: "Partly cloudy, light breeze",
      temperature: "28°C",
      humidity: "65%",
      harvestMethod: "Morning collection of fresh leaves and flowers"
    },
    qualityMetrics: {
      moisture: 11.5,
      activeCompounds: "Eugenol: 1.8%",
      appearance: "Fresh green leaves, no yellowing",
      aroma: "Strong, pleasant herbal fragrance",
      contaminants: "None detected"
    },
    sustainabilityNotes: [
      "Rotational harvesting from different plants",
      "Allowed plants to flower for seed production",
      "Used only mature leaves, preserved growing tips",
      "Maintained traditional sacred grove practices"
    ],
    blockchainHash: "0x8g0a9b4c3d2e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6",
    paymentStatus: "processed",
    pricePerKg: 280
  },
  {
    id: "TUR003",
    species: "Turmeric",
    location: "Erode District, Tamil Nadu",
    state: "Tamil Nadu", 
    coordinates: "11.3410, 77.7172",
    quantity: 45.8,
    quality: "Premium",
    timestamp: "2024-01-12 07:15",
    status: "verified",
    collectorInfo: {
      name: "Murugan Krishnan",
      id: "COL-3456",
      certification: "Spice Board Organic Certificate",
      experience: "15 years",
      cooperative: "Tamil Nadu Turmeric Producers Association"
    },
    environmentalData: {
      weather: "High humidity, post-monsoon conditions",
      temperature: "26°C",
      humidity: "78%",
      soilPH: 6.2,
      harvestMethod: "Traditional rhizome harvesting after 8 months"
    },
    qualityMetrics: {
      moisture: 7.8,
      activeCompounds: "Curcumin: 4.2%",
      appearance: "Bright orange rhizomes, firm texture",
      aroma: "Strong, spicy, characteristic turmeric smell",
      contaminants: "Aflatoxin levels within safe limits"
    },
    sustainabilityNotes: [
      "Crop rotation with legumes practiced",
      "Organic farming methods used",
      "Rainwater harvesting implemented",
      "Seed rhizomes preserved for next season"
    ],
    blockchainHash: "0x9h1b0c5d4e3f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7",
    paymentStatus: "completed",
    pricePerKg: 320
  },
  {
    id: "NEM004",
    species: "Neem",
    location: "Khargone District, Madhya Pradesh",
    state: "Madhya Pradesh",
    coordinates: "21.8234, 75.6102",
    quantity: 32.1,
    quality: "Standard",
    timestamp: "2024-01-10 16:45",
    status: "verified",
    collectorInfo: {
      name: "Ramesh Patel",
      id: "COL-4789",
      certification: "Forest Produce Collection License",
      experience: "20 years",
      cooperative: "MP Tribal Collectors Union"
    },
    environmentalData: {
      weather: "Dry, clear weather",
      temperature: "31°C",
      humidity: "35%",
      harvestMethod: "Sustainable leaf collection from mature trees"
    },
    qualityMetrics: {
      moisture: 9.5,
      activeCompounds: "Azadirachtin: 1200 ppm",
      appearance: "Mature green leaves, minimal damage",
      aroma: "Bitter, characteristic neem odor",
      contaminants: "None detected"
    },
    sustainabilityNotes: [
      "Maximum 30% leaf harvest per tree",
      "Trees allowed recovery period",
      "Seeds collected for oil extraction",
      "Traditional tribal knowledge applied"
    ],
    blockchainHash: "0xa2b1c6d5e4f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b",
    paymentStatus: "processed",
    pricePerKg: 180
  },
  {
    id: "BRA005",
    species: "Brahmi",
    location: "Alappuzha Backwaters, Kerala",
    state: "Kerala",
    coordinates: "9.5916, 76.3197",
    quantity: 12.3,
    quality: "Premium",
    timestamp: "2024-01-08 11:30",
    status: "verified",
    collectorInfo: {
      name: "Lakshmi Menon",
      id: "COL-5432",
      certification: "Wetland Collection Permit",
      experience: "10 years",
      cooperative: "Kerala Backwater Herb Collectors"
    },
    environmentalData: {
      weather: "High humidity, overcast",
      temperature: "29°C",
      humidity: "85%",
      harvestMethod: "Careful collection from natural wetland habitat"
    },
    qualityMetrics: {
      moisture: 7.2,
      activeCompounds: "Bacosides: 22%",
      appearance: "Fresh, succulent leaves and stems",
      aroma: "Mild, pleasant herbal scent",
      contaminants: "Heavy metals within safe limits"
    },
    sustainabilityNotes: [
      "Wetland ecosystem preservation priority",
      "Rotational collection areas maintained",
      "Root systems left intact",
      "Natural habitat restoration practiced"
    ],
    blockchainHash: "0xb3c2d7e6f5g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c",
    paymentStatus: "completed",
    pricePerKg: 520
  },
  {
    id: "GUD006",
    species: "Guduchi",
    location: "Chitrakoot, Uttar Pradesh",
    state: "Uttar Pradesh",
    coordinates: "25.2000, 80.8500",
    quantity: 28.7,
    quality: "Good",
    timestamp: "2024-01-06 08:20",
    status: "processed",
    collectorInfo: {
      name: "Suresh Gupta",
      id: "COL-6789",
      certification: "Wild Collection License",
      experience: "18 years",
      cooperative: "Bundelkhand Medicinal Plant Collective"
    },
    environmentalData: {
      weather: "Cool morning, clear sky",
      temperature: "22°C",
      humidity: "60%",
      harvestMethod: "Sustainable stem cutting from climbing vines"
    },
    qualityMetrics: {
      moisture: 11.8,
      activeCompounds: "Tinosporin present",
      appearance: "Healthy stems, no fungal infection",
      aroma: "Characteristic bitter smell",
      contaminants: "None detected"
    },
    sustainabilityNotes: [
      "Only mature stem sections harvested",
      "Support trees preserved",
      "Natural regeneration zones maintained",
      "Traditional Ayurvedic collection timing followed"
    ],
    blockchainHash: "0xc4d3e8f7g6h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d",
    paymentStatus: "pending",
    pricePerKg: 380
  },
  {
    id: "ASH007",
    species: "Ashwagandha",
    location: "Mandsaur District, Madhya Pradesh",
    state: "Madhya Pradesh",
    coordinates: "24.0734, 75.0691",
    quantity: 41.2,
    quality: "Premium",
    timestamp: "2024-01-05 06:00",
    status: "shipped",
    collectorInfo: {
      name: "Kailash Sharma",
      id: "COL-7890",
      certification: "Organic Cultivation Certificate",
      experience: "22 years",
      cooperative: "MP Progressive Farmers Group"
    },
    environmentalData: {
      weather: "Crisp winter morning",
      temperature: "18°C",
      humidity: "55%",
      soilPH: 7.1,
      harvestMethod: "Mechanized harvesting with care for root integrity"
    },
    qualityMetrics: {
      moisture: 6.8,
      activeCompounds: "Withanolides: 3.8% (exceptional quality)",
      appearance: "Large, healthy roots with minimal breakage",
      aroma: "Strong, earthy, premium grade",
      contaminants: "Pesticide residue: Not detected"
    },
    sustainabilityNotes: [
      "Organic certification maintained for 5+ years",
      "Integrated pest management practiced",
      "Water conservation through drip irrigation",
      "Fair trade premium paid to collectors"
    ],
    blockchainHash: "0xd5e4f9g8h7i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e",
    paymentStatus: "completed",
    pricePerKg: 480
  },
  {
    id: "TUL008",
    species: "Tulsi",
    location: "Vrindavan, Uttar Pradesh",
    state: "Uttar Pradesh",
    coordinates: "27.5809, 77.7008",
    quantity: 15.6,
    quality: "Premium",
    timestamp: "2024-01-03 07:45",
    status: "verified",
    collectorInfo: {
      name: "Radha Devi",
      id: "COL-8901",
      certification: "Sacred Grove Collection Permit",
      experience: "25 years",
      cooperative: "Vrindavan Temple Herb Collectors"
    },
    environmentalData: {
      weather: "Peaceful morning, light fog",
      temperature: "20°C",
      humidity: "70%",
      harvestMethod: "Traditional reverent collection with prayers"
    },
    qualityMetrics: {
      moisture: 10.2,
      activeCompounds: "Eugenol: 2.1% (high quality)",
      appearance: "Sacred variety with intense green color",
      aroma: "Exceptionally fragrant, spiritual quality",
      contaminants: "Pure, no contamination"
    },
    sustainabilityNotes: [
      "Sacred grove conservation practiced",
      "Traditional spiritual harvesting methods",
      "Community-based sustainable management",
      "Seed preservation for future generations"
    ],
    blockchainHash: "0xe6f5g0h9i8j7k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f",
    paymentStatus: "completed",
    pricePerKg: 350
  },
  {
    id: "TUR009",
    species: "Turmeric",
    location: "Sangli District, Maharashtra",
    state: "Maharashtra",
    coordinates: "16.8524, 74.5815",
    quantity: 52.4,
    quality: "Good",
    timestamp: "2024-01-02 09:15",
    status: "pending",
    collectorInfo: {
      name: "Ganesh Patil",
      id: "COL-9012",
      certification: "Maharashtra Spice Growers License",
      experience: "14 years",
      cooperative: "Western Maharashtra Turmeric Association"
    },
    environmentalData: {
      weather: "Post-harvest season, dry conditions",
      temperature: "27°C",
      humidity: "50%",
      soilPH: 6.5,
      harvestMethod: "Traditional bullock-assisted harvesting"
    },
    qualityMetrics: {
      moisture: 8.5,
      activeCompounds: "Curcumin: 3.5%",
      appearance: "Medium-sized rhizomes, good color",
      aroma: "Good spicy aroma, slightly less intense",
      contaminants: "Within acceptable limits"
    },
    sustainabilityNotes: [
      "Inter-cropping with sugarcane practiced",
      "Organic manure used exclusively",
      "Traditional processing methods maintained",
      "Farmer Producer Organization member"
    ],
    blockchainHash: "0xf7g6h1i0j9k8l7m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g",
    paymentStatus: "pending",
    pricePerKg: 295
  },
  {
    id: "NEM010",
    species: "Neem",
    location: "Anantapur District, Andhra Pradesh",
    state: "Andhra Pradesh", 
    coordinates: "14.6819, 77.6006",
    quantity: 38.9,
    quality: "Good",
    timestamp: "2023-12-28 15:30",
    status: "verified",
    collectorInfo: {
      name: "Venkatesh Reddy",
      id: "COL-0123",
      certification: "AP Medicinal Plants Collection License",
      experience: "16 years",
      cooperative: "Andhra Neem Producers Collective"
    },
    environmentalData: {
      weather: "Hot, dry climate typical of region",
      temperature: "33°C",
      humidity: "40%",
      harvestMethod: "Selective leaf harvesting during optimal time"
    },
    qualityMetrics: {
      moisture: 8.9,
      activeCompounds: "Azadirachtin: 1450 ppm (good quality)",
      appearance: "Mature leaves, slight browning edges",
      aroma: "Strong bitter smell, characteristic",
      contaminants: "Dust levels acceptable after cleaning"
    },
    sustainabilityNotes: [
      "Drought-resistant farming practices",
      "Minimal water usage cultivation",
      "Tree health monitoring implemented",
      "Community forest management model"
    ],
    blockchainHash: "0xg8h7i2j1k0l9m8n7o3p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0g1h",
    paymentStatus: "completed",
    pricePerKg: 190
  }
];

export const COLLECTOR_PROFILES = [
  {
    id: "COL-2847",
    name: "Ravi Kumar",
    location: "Nagaur, Rajasthan",
    specializations: ["Ashwagandha", "Desert herbs"],
    experience: "12 years",
    certification: "Organic Collection License",
    cooperative: "Rajasthan Organic Farmers Cooperative",
    totalCollections: 847,
    averageQuality: "Premium",
    sustainabilityScore: 94,
    languages: ["Hindi", "Rajasthani", "Basic English"]
  },
  {
    id: "COL-1923", 
    name: "Priya Sharma",
    location: "Lucknow, Uttar Pradesh",
    specializations: ["Tulsi", "Sacred plants"],
    experience: "8 years",
    certification: "Sacred Plant Collection Permit",
    cooperative: "UP Women Farmers Alliance",
    totalCollections: 523,
    averageQuality: "Good",
    sustainabilityScore: 89,
    languages: ["Hindi", "Urdu", "English"]
  },
  {
    id: "COL-3456",
    name: "Murugan Krishnan", 
    location: "Erode, Tamil Nadu",
    specializations: ["Turmeric", "Spice crops"],
    experience: "15 years",
    certification: "Spice Board Organic Certificate",
    cooperative: "Tamil Nadu Turmeric Producers Association",
    totalCollections: 1204,
    averageQuality: "Premium",
    sustainabilityScore: 96,
    languages: ["Tamil", "Telugu", "English"]
  }
];

export const QUALITY_GRADES = {
  "Premium": {
    description: "Highest quality, meets all AYUSH standards",
    priceMultiplier: 1.3,
    requirements: ["Moisture < 8%", "No contaminants", "Optimal active compounds"]
  },
  "Good": {
    description: "Good quality, suitable for most applications",
    priceMultiplier: 1.1,
    requirements: ["Moisture < 10%", "Minimal contaminants", "Good active compounds"]
  },
  "Standard": {
    description: "Standard quality, meets basic requirements",
    priceMultiplier: 1.0,
    requirements: ["Moisture < 12%", "Within contamination limits", "Acceptable compounds"]
  }
};

export const HARVEST_SEASONS = {
  "Ashwagandha": "October to February",
  "Tulsi": "Year-round (best in dry season)",
  "Turmeric": "January to March", 
  "Neem": "Leaves: Year-round, Seeds: May-August",
  "Brahmi": "March to May, September to November",
  "Guduchi": "November to February"
};

export const REGIONAL_PRICING = {
  "Rajasthan": { premium: 0.1, note: "Premium for desert-grown herbs" },
  "Kerala": { premium: 0.15, note: "High quality tropical herbs" },
  "Tamil Nadu": { premium: 0.05, note: "Traditional spice region" },
  "Uttar Pradesh": { premium: 0.0, note: "Standard pricing" },
  "Madhya Pradesh": { premium: 0.08, note: "Organic farming regions" },
  "Maharashtra": { premium: 0.03, note: "Good agricultural practices" },
  "Andhra Pradesh": { premium: 0.02, note: "Emerging medicinal plant hub" }
};

export const SUSTAINABILITY_PRACTICES = [
  "Organic farming methods",
  "Water conservation techniques", 
  "Crop rotation practices",
  "Integrated pest management",
  "Fair trade principles",
  "Community forest management",
  "Traditional knowledge preservation",
  "Biodiversity conservation",
  "Soil health maintenance",
  "Climate-smart agriculture"
];