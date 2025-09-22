import { useState, useEffect } from "react";
import { ArrowLeft, MapPin, Calendar, User, Package, TestTube, Award, Leaf, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link, useParams } from "react-router-dom";

interface TraceabilityEvent {
  id: string;
  type: "collection" | "transport" | "testing" | "processing" | "packaging" | "distribution";
  timestamp: string;
  location: string;
  coordinates?: string;
  actor: string;
  description: string;
  metadata: Record<string, any>;
  blockchainHash: string;
  verified: boolean;
}

const TraceabilityView = () => {
  const { batchId } = useParams();
  const [events, setEvents] = useState<TraceabilityEvent[]>([]);
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Mock blockchain data for the batch
    const mockEvents: TraceabilityEvent[] = [
      {
        id: "evt_001",
        type: "collection",
        timestamp: "2024-01-10T09:30:00Z",
        location: "Rajasthan, Jaipur District - Organic Farm #247",
        coordinates: "26.9124, 75.7873",
        actor: "Ravi Kumar (Certified Collector ID: COL-2847)",
        description: "Initial collection of Ashwagandha roots from certified organic farm",
        metadata: {
          species: "Withania somnifera",
          quantity: "25.5 kg",
          quality: "Premium Grade A",
          weather: "Clear, 24°C, Humidity 45%",
          soilPH: "6.8",
          harvestMethod: "Hand-picked at sunrise",
          certifications: ["Organic", "Fair Trade"]
        },
        blockchainHash: "0x7f9a8b3c2d1e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5",
        verified: true
      },
      {
        id: "evt_002",
        type: "transport",
        timestamp: "2024-01-10T14:15:00Z",
        location: "Transport Hub, Jaipur",
        actor: "GreenLogistics Pvt Ltd (License: TRP-8291)",
        description: "Temperature-controlled transport to testing facility",
        metadata: {
          vehicle: "Refrigerated Truck REF-2847",
          temperature: "18-20°C maintained",
          humidity: "40-50% RH",
          duration: "4.5 hours",
          seals: ["SEAL-001", "SEAL-002"]
        },
        blockchainHash: "0x8g0a9b4c3d2e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6",
        verified: true
      },
      {
        id: "evt_003",
        type: "testing",
        timestamp: "2024-01-12T11:00:00Z",
        location: "Certified Ayurvedic Testing Laboratory, Mumbai",
        actor: "AyurTest Labs (NABL Accredited LAB-4569)",
        description: "Comprehensive quality and authenticity testing completed",
        metadata: {
          tests: {
            moisture: "8.2% (Passed - <10%)",
            pesticides: "Not Detected (Passed)",
            heavyMetals: "Within limits (Passed)",
            dnaBarcode: "Confirmed - Withania somnifera (Passed)",
            activeCompounds: "Withanolides: 3.2% (Premium Grade)",
            microbial: "Within limits (Passed)"
          },
          testingStandard: "AYUSH Guidelines 2021",
          certificateNo: "AYT-2024-0847",
          analyst: "Dr. Priya Sharma, PhD Pharmacognosy"
        },
        blockchainHash: "0x9h1b0c5d4e3f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7",
        verified: true
      },
      {
        id: "evt_004",
        type: "processing",
        timestamp: "2024-01-14T08:30:00Z",
        location: "Ayur Wellness Processing Unit, Pune",
        actor: "Ayur Wellness Manufacturing (GMP License: MFG-7429)",
        description: "Standardized extraction and capsule formulation",
        metadata: {
          processSteps: [
            "Cleaning and grading",
            "Controlled drying at 45°C",
            "Fine grinding (80 mesh)",
            "Standardized extraction",
            "Encapsulation (500mg per capsule)"
          ],
          standards: ["GMP", "ISO 22000", "HACCP"],
          batchSize: "1000 capsules",
          qualityCheck: "Passed - All parameters within specification",
          supervisor: "Raj Patel, Production Manager"
        },
        blockchainHash: "0xa2b1c6d5e4f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b",
        verified: true
      },
      {
        id: "evt_005",
        type: "packaging",
        timestamp: "2024-01-15T16:20:00Z",
        location: "Packaging Department, Pune",
        actor: "Ayur Wellness Packaging Team",
        description: "Final packaging with blockchain QR code generation",
        metadata: {
          packagingMaterial: "Recyclable PET bottles with desiccant",
          labelInfo: "Complete ingredient list, AYUSH license, batch details",
          qrCode: "Generated - Links to this traceability record",
          expiryDate: "January 2026 (24 months shelf life)",
          barcodes: ["8901234567890", "QR-BTH001-2024"],
          packagingDate: "2024-01-15"
        },
        blockchainHash: "0xb3c2d7e6f5g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c",
        verified: true
      },
      {
        id: "evt_006",
        type: "distribution",
        timestamp: "2024-01-16T10:00:00Z",
        location: "Distribution Center, Mumbai",
        actor: "Ayur Distribution Network",
        description: "Product distributed to retail network",
        metadata: {
          distributor: "MedPlus Health Services",
          distributionLicense: "DIST-3847",
          storageConditions: "Cool, dry place (<25°C, <60% RH)",
          retailers: 12,
          cities: ["Mumbai", "Pune", "Delhi", "Bangalore"],
          trackingNumbers: ["AWD2024010001", "AWD2024010002"]
        },
        blockchainHash: "0xc4d3e8f7g6h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d",
        verified: true
      }
    ];

    setEvents(mockEvents);
  }, [batchId]);

  const toggleEventExpansion = (eventId: string) => {
    const newExpanded = new Set(expandedEvents);
    if (newExpanded.has(eventId)) {
      newExpanded.delete(eventId);
    } else {
      newExpanded.add(eventId);
    }
    setExpandedEvents(newExpanded);
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "collection": return <Leaf className="h-5 w-5" />;
      case "transport": return <Package className="h-5 w-5" />;
      case "testing": return <TestTube className="h-5 w-5" />;
      case "processing": return <Award className="h-5 w-5" />;
      case "packaging": return <Package className="h-5 w-5" />;
      case "distribution": return <MapPin className="h-5 w-5" />;
      default: return <Calendar className="h-5 w-5" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "collection": return "bg-green-100 text-green-800 border-green-200";
      case "transport": return "bg-blue-100 text-blue-800 border-blue-200";
      case "testing": return "bg-purple-100 text-purple-800 border-purple-200";
      case "processing": return "bg-orange-100 text-orange-800 border-orange-200";
      case "packaging": return "bg-indigo-100 text-indigo-800 border-indigo-200";
      case "distribution": return "bg-pink-100 text-pink-800 border-pink-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/manufacturer">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Blockchain Traceability</h1>
                <p className="text-muted-foreground">Batch ID: {batchId}</p>
              </div>
            </div>
            <Badge className="bg-primary/20 text-primary">
              {events.length} Verified Events
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Summary Card */}
        <Card className="mb-8 shadow-herbal">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="h-6 w-6 mr-2 text-primary" />
              Ashwagandha Capsules - Premium Quality
            </CardTitle>
            <CardDescription>
              Complete blockchain-verified supply chain journey from farm to consumer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <span className="text-sm text-muted-foreground">Origin:</span>
                <p className="font-medium">Rajasthan, India</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Collection Date:</span>
                <p className="font-medium">January 10, 2024</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Total Events:</span>
                <p className="font-medium">{events.length}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Status:</span>
                <p className="font-medium text-green-600">All Verified ✓</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Supply Chain Timeline</CardTitle>
            <CardDescription>
              Chronological sequence of all blockchain-recorded events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={event.id} className="relative">
                  {/* Timeline Line */}
                  {index < events.length - 1 && (
                    <div className="absolute left-8 top-16 w-px h-full bg-border z-0"></div>
                  )}
                  
                  <Collapsible>
                    <div className="flex items-start space-x-4">
                      {/* Event Icon */}
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getEventColor(event.type)} border-2 z-10`}>
                        {getEventIcon(event.type)}
                      </div>
                      
                      {/* Event Content */}
                      <div className="flex-1">
                        <CollapsibleTrigger
                          className="w-full text-left hover:bg-muted/50 p-4 rounded-lg border transition-colors"
                          onClick={() => toggleEventExpansion(event.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-lg capitalize">{event.type.replace('_', ' ')}</h3>
                              <p className="text-muted-foreground">{event.description}</p>
                              <div className="flex items-center space-x-4 mt-2 text-sm">
                                <div className="flex items-center">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {new Date(event.timestamp).toLocaleString()}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {event.location}
                                </div>
                                <div className="flex items-center">
                                  <User className="h-3 w-3 mr-1" />
                                  {event.actor.split('(')[0].trim()}
                                </div>
                              </div>
                            </div>
                            {expandedEvents.has(event.id) ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </div>
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent className="mt-4">
                          <div className="p-4 bg-muted/30 rounded-lg space-y-4">
                            {/* Actor Details */}
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <span className="text-sm font-medium text-muted-foreground">Responsible Party:</span>
                                <p className="text-sm">{event.actor}</p>
                              </div>
                              {event.coordinates && (
                                <div>
                                  <span className="text-sm font-medium text-muted-foreground">GPS Coordinates:</span>
                                  <p className="text-sm font-mono">{event.coordinates}</p>
                                </div>
                              )}
                            </div>
                            
                            {/* Metadata */}
                            <div>
                              <span className="text-sm font-medium text-muted-foreground">Event Details:</span>
                              <div className="mt-2 space-y-2">
                                {Object.entries(event.metadata).map(([key, value]) => (
                                  <div key={key} className="text-sm">
                                    <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                    <span className="ml-2">
                                      {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Blockchain Hash */}
                            <div>
                              <span className="text-sm font-medium text-muted-foreground">Blockchain Hash:</span>
                              <p className="text-xs font-mono bg-background p-2 rounded border mt-1 break-all">
                                {event.blockchainHash}
                              </p>
                            </div>
                            
                            {/* Verification Status */}
                            <div className="flex items-center justify-between pt-2 border-t">
                              <Badge className={event.verified ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                                {event.verified ? "✓ Verified on Blockchain" : "⚠ Pending Verification"}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                Event ID: {event.id}
                              </span>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </div>
                    </div>
                  </Collapsible>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TraceabilityView;