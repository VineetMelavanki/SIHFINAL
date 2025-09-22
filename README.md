# AyurTrace - Blockchain Herbal Traceability System

## Smart India Hackathon 2024 - Ministry of AYUSH

A comprehensive blockchain-based botanical traceability system for Ayurvedic herbs, ensuring authenticity, sustainability, and transparency from farm to consumer.

## 🌿 Project Overview

**Problem Statement**: Develop a blockchain-based system for botanical traceability of Ayurvedic herbs, including geo-tagging from the point of collection (farmers/wild collectors) to the final Ayurvedic formulation label.

**Solution**: AyurTrace provides end-to-end traceability using permissioned blockchain technology, IoT integration, and consumer-facing transparency features.

## 🚀 Key Features

### 1. End-to-End Traceability Tailored for Ayurveda
- Complete supply chain visibility from collection to consumer
- Herb-specific quality parameters and sustainability guidelines
- Integration with AYUSH Ministry compliance standards

### 2. Local Language + Low-Tech Accessibility
- SMS-over-blockchain gateway for rural collectors
- Multi-language support (Hindi, regional languages)
- Offline data capture with synchronization

### 3. Integration with IoT and AI Verification
- GPS-enabled mobile apps for geo-tagged collection
- AI-powered species identification and quality assessment
- IoT sensors for environmental monitoring

### 4. Regulatory and Export Compliance
- Automated compliance reporting for AYUSH standards
- GMP and ISO 22000 integration
- Export certification automation

### 5. Sustainability and Biodiversity Tracking
- Conservation compliance monitoring
- Fair trade certification integration
- Environmental impact assessment

### 6. Modular & Interoperable Architecture
- RESTful APIs for third-party integrations
- FHIR-style metadata for standardized exchange
- Plugin architecture for ERP systems

### 7. Consumer-Facing Transparency + Education
- QR code scanning for complete product history
- Interactive maps showing herb origin
- Educational content about Ayurvedic practices

## 🏗️ System Architecture

### Blockchain Infrastructure
- **Permissioned Network**: Hyperledger Fabric (simulated)
- **Smart Contracts**: Sustainability and quality enforcement
- **Consensus**: PBFT for enterprise reliability
- **Nodes**: Farmers, processors, labs, manufacturers, distributors

### Technology Stack
- **Frontend**: React + TypeScript + Tailwind CSS
- **Routing**: React Router for multi-stakeholder interfaces
- **State Management**: React Query for server state
- **UI Components**: shadcn/ui with custom design system
- **Blockchain**: Mock implementation (production would use Hyperledger Fabric)

## 📱 User Interfaces

### 1. Collector/Farmer Dashboard
- GPS-enabled herb collection recording
- Quality assessment tools
- Sustainability compliance checking
- Local language support

### 2. Manufacturer Portal
- Batch processing management
- Quality testing integration
- QR code generation
- Compliance reporting

### 3. Consumer Portal
- QR code scanning
- Complete traceability viewing
- Product authentication
- Educational content

### 4. Admin Dashboard
- Network monitoring
- Compliance oversight
- Analytics and reporting
- System health monitoring

## 🔧 Technical Implementation

### Blockchain Features
```typescript
// Smart Contract Validation Example
validateTransaction(type: "collection", data: {
  coordinates: "26.9124, 75.7873",
  species: "Withania somnifera", 
  quantity: 25.5,
  quality: "Premium"
});
```

### Supply Chain Events
1. **Collection Event**: GPS coordinates, collector ID, species, quantity
2. **Transport Event**: Temperature monitoring, custody transfer
3. **Testing Event**: Lab results, quality certificates
4. **Processing Event**: Manufacturing details, batch formation
5. **Packaging Event**: QR code generation, labeling
6. **Distribution Event**: Supply chain completion

### Data Standards
- **FHIR-style Metadata**: Standardized healthcare data exchange
- **GPS Coordinates**: Precise location tracking
- **DNA Barcoding**: Species authentication
- **Quality Parameters**: AYUSH-compliant testing

## 🌱 Supported Herbs

The system includes comprehensive data for major Ayurvedic herbs:

- **Ashwagandha** (Withania somnifera)
- **Tulsi** (Ocimum tenuiflorum) 
- **Turmeric** (Curcuma longa)
- **Neem** (Azadirachta indica)
- **Brahmi** (Bacopa monnieri)
- **Guduchi** (Tinospora cordifolia)

Each herb profile includes:
- Scientific classification and common names
- Optimal growing conditions and harvest seasons
- Quality parameters and active compounds
- Sustainability guidelines
- Regional availability data

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern web browser
- Internet connection for external APIs

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd ayurtrace

# Install dependencies
npm install

# Start development server
npm run dev
```

### Demo Usage
1. **Visit Homepage**: Overview of the system
2. **Collector Portal**: Record new herb collections (try GPS simulation)
3. **Manufacturer Portal**: Process batches and generate QR codes
4. **Consumer Portal**: Scan QR codes (use "BTH001" for demo)
5. **Admin Dashboard**: Monitor network statistics

## 🔐 Security & Compliance

### Blockchain Security
- Immutable transaction records
- Cryptographic hash verification
- Multi-signature validation
- Permissioned network access

### Data Privacy
- GDPR compliance for personal data
- Encrypted sensitive information
- Role-based access control
- Audit trails for all actions

### Regulatory Compliance
- AYUSH Ministry guidelines adherence
- GMP and ISO 22000 standards
- Export certification automation
- Biodiversity conservation tracking

## 📊 Analytics & Reporting

### Supply Chain Metrics
- End-to-end traceability completion rates
- Quality test pass/fail statistics
- Sustainability compliance scores
- Geographic distribution analysis

### Network Statistics
- Transaction throughput and latency
- Node participation rates
- Smart contract execution metrics
- Consumer engagement analytics

## 🌍 Impact & Benefits

### For Farmers/Collectors
- Fair pricing through verified quality
- Direct market access
- Sustainability incentives
- Digital identity and reputation

### For Manufacturers
- Quality assurance and compliance
- Supply chain transparency
- Brand protection
- Regulatory compliance automation

### For Consumers
- Product authenticity verification
- Complete supply chain visibility
- Safety and quality assurance
- Educational herb information

### For Regulators
- Real-time compliance monitoring
- Automated reporting systems
- Fraud detection and prevention
- Biodiversity conservation tracking

## 🔮 Future Enhancements

1. **AI Integration**: Machine learning for quality prediction
2. **IoT Expansion**: More sensor types and real-time monitoring
3. **Mobile Apps**: Native iOS/Android applications
4. **Payment Integration**: Cryptocurrency payments for farmers
5. **International Expansion**: Multi-country compliance support

## 📝 License

This project is developed for Smart India Hackathon 2024 - Ministry of AYUSH challenge.

## 🤝 Team & Acknowledgments

Developed for Smart India Hackathon 2024, addressing the critical need for transparency and authenticity in the Ayurvedic herbal supply chain.

---

**Note**: This is a proof-of-concept implementation. Production deployment would require additional security measures, regulatory approvals, and integration with actual blockchain infrastructure.