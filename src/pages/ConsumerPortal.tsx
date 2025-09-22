import { useState } from "react";
import { ArrowLeft, QrCode, Search, Shield, MapPin, Award, Leaf, Calendar, User, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const ConsumerPortal = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [productData, setProductData] = useState<any>(null);

  const handleScan = () => {
    // Simulate QR code scan
    const mockProductData = {
      id: "BTH001",
      name: "Ashwagandha Capsules - Premium Quality",
      manufacturer: "Ayur Wellness Pvt Ltd",
      batchDate: "2024-01-15",
      expiryDate: "2026-01-15",
      certifications: ["Organic", "AYUSH Approved", "GMP Certified"],
      journey: [
        {
          stage: "Collection",
          location: "Rajasthan, Jaipur District",
          date: "2024-01-10",
          collector: "Ravi Kumar (Certified Collector)",
          coordinates: "26.9124, 75.7873",
          quality: "Premium Grade",
          quantity: "25.5 kg"
        },
        {
          stage: "Quality Testing",
          location: "Testing Lab, Mumbai",
          date: "2024-01-12",
          tester: "Certified Ayurvedic Laboratory",
          results: {
            moisture: "8.2%",
            pesticides: "Not Detected",
            authenticity: "DNA Verified - Withania somnifera",
            purity: "99.2%"
          }
        },
        {
          stage: "Processing",
          location: "Manufacturing Unit, Pune",
          date: "2024-01-14",
          processor: "Ayur Wellness Processing Unit",
          methods: "Standardized extraction, Encapsulation",
          standards: "GMP, ISO 22000"
        },
        {
          stage: "Packaging",
          location: "Packaging Unit, Pune",
          date: "2024-01-15",
          packager: "Ayur Wellness Packaging",
          qrGenerated: true
        }
      ],
      sustainability: {
        carbonFootprint: "2.3 kg CO2eq",
        waterUsage: "45L per kg",
        fairTrade: true,
        biodiversityImpact: "Positive - Sustainable harvesting practices"
      }
    };
    
    setProductData(mockProductData);
    toast({
      title: "Product Verified",
      description: "Authentic Ayurvedic product with complete traceability",
    });
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Enter Product Code",
        description: "Please enter a valid product or batch code",
        variant: "destructive"
      });
      return;
    }
    
    if (searchQuery.toUpperCase() === "BTH001") {
      handleScan();
    } else {
      toast({
        title: "Product Not Found",
        description: "The entered code does not match any product",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <QrCode className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold">Product Verification</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search/Scan Section */}
        <Card className="mb-8 shadow-soft">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Verify Your Ayurvedic Product</CardTitle>
            <CardDescription>
              Scan QR code or enter product code to view complete traceability information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="max-w-md mx-auto space-y-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter product/batch code (e.g., BTH001)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button onClick={handleSearch}>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">or</p>
                <Link to="/scan">
                  <Button className="bg-gradient-herbal hover:opacity-90">
                    <QrCode className="h-4 w-4 mr-2" />
                    Scan QR Code
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Information */}
        {productData && (
          <div className="space-y-6">
            {/* Product Overview */}
            <Card className="shadow-herbal">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-primary">{productData.name}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Manufactured by: {productData.manufacturer}
                    </CardDescription>
                  </div>
                  <Badge className="bg-primary/20 text-primary">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified Authentic
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Batch ID:</span>
                    <p className="font-medium">{productData.id}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Batch Date:</span>
                    <p className="font-medium">{productData.batchDate}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Expiry Date:</span>
                    <p className="font-medium">{productData.expiryDate}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <span className="text-sm text-muted-foreground">Certifications:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {productData.certifications.map((cert: string, index: number) => (
                      <Badge key={index} variant="outline" className="bg-accent/10 text-accent-foreground">
                        <Award className="h-3 w-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Supply Chain Journey */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Supply Chain Journey</CardTitle>
                <CardDescription>
                  Complete traceability from farm to your hands
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {productData.journey.map((step: any, index: number) => (
                    <div key={index} className="relative">
                      {index < productData.journey.length - 1 && (
                        <div className="absolute left-6 top-12 w-px h-full bg-border"></div>
                      )}
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-herbal rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-5 w-5 text-primary-foreground" />
                        </div>
                        
                        <div className="flex-1 pb-6">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">{step.stage}</h3>
                            <Badge variant="outline">
                              <Calendar className="h-3 w-3 mr-1" />
                              {step.date}
                            </Badge>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="flex items-center text-muted-foreground mb-1">
                                <MapPin className="h-3 w-3 mr-1" />
                                Location
                              </div>
                              <p className="font-medium">{step.location}</p>
                            </div>
                            
                            <div>
                              <div className="flex items-center text-muted-foreground mb-1">
                                <User className="h-3 w-3 mr-1" />
                                {step.collector ? 'Collector' : step.tester ? 'Tester' : step.processor ? 'Processor' : 'Handler'}
                              </div>
                              <p className="font-medium">
                                {step.collector || step.tester || step.processor || step.packager}
                              </p>
                            </div>
                          </div>
                          
                          {step.coordinates && (
                            <div className="mt-2 text-xs text-muted-foreground">
                              GPS: {step.coordinates}
                            </div>
                          )}
                          
                          {step.results && (
                            <div className="mt-3 p-3 bg-muted/50 rounded-lg">
                              <h4 className="font-medium mb-2">Test Results</h4>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                {Object.entries(step.results).map(([key, value]) => (
                                  <div key={key}>
                                    <span className="text-muted-foreground capitalize">{key}:</span>
                                    <p className="font-medium">{value as string}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sustainability Information */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2 text-primary" />
                  Sustainability & Impact
                </CardTitle>
                <CardDescription>
                  Environmental and social impact of this product
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Carbon Footprint:</span>
                      <p className="font-medium text-green-700">{productData.sustainability.carbonFootprint}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Water Usage:</span>
                      <p className="font-medium">{productData.sustainability.waterUsage}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Fair Trade:</span>
                      <p className="font-medium text-primary">
                        {productData.sustainability.fairTrade ? "Certified Fair Trade" : "Standard Trade"}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Biodiversity Impact:</span>
                      <p className="font-medium text-green-700">{productData.sustainability.biodiversityImpact}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Demo Instructions */}
        {!productData && (
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Demo Instructions</CardTitle>
              <CardDescription>
                Try the traceability system with sample data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  To see a complete product traceability example, enter the code: <strong>BTH001</strong>
                </p>
                <Button variant="outline" onClick={() => {
                  setSearchQuery("BTH001");
                  handleScan();
                }}>
                  Load Sample Product
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ConsumerPortal;