import { useState } from "react";
import { ArrowLeft, Package, CheckCircle, Clock, AlertTriangle, BarChart3, Leaf, Users, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface BatchRecord {
  id: string;
  product: string;
  herbs: string[];
  quantity: number;
  status: "processing" | "testing" | "quality_approved" | "packaged" | "shipped";
  qrGenerated: boolean;
  progress: number;
  testResults?: {
    moisture: number;
    pesticides: string;
    authenticity: string;
  };
}

const ManufacturerDashboard = () => {
  const { toast } = useToast();
  const [batches, setBatches] = useState<BatchRecord[]>([
    {
      id: "BTH001",
      product: "Ashwagandha Capsules",
      herbs: ["Ashwagandha", "Organic Fillers"],
      quantity: 1000,
      status: "quality_approved",
      qrGenerated: true,
      progress: 85,
      testResults: {
        moisture: 8.2,
        pesticides: "Not Detected",
        authenticity: "Verified"
      }
    },
    {
      id: "BTH002",
      product: "Immunity Booster Powder",
      herbs: ["Tulsi", "Turmeric", "Neem"],
      quantity: 500,
      status: "testing",
      qrGenerated: false,
      progress: 60
    },
    {
      id: "BTH003",
      product: "Stress Relief Tablets",
      herbs: ["Brahmi", "Ashwagandha"],
      quantity: 750,
      status: "processing",
      qrGenerated: false,
      progress: 30
    }
  ]);

  const generateQRCode = (batchId: string) => {
    setBatches(batches.map(batch => 
      batch.id === batchId 
        ? { ...batch, qrGenerated: true, status: "packaged", progress: Math.min(batch.progress + 20, 100) }
        : batch
    ));
    
    toast({
      title: "QR Code Generated",
      description: `Unique QR code created for batch ${batchId}`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "quality_approved": return "bg-primary/20 text-primary";
      case "packaged": return "bg-accent/20 text-accent-foreground";
      case "shipped": return "bg-green-100 text-green-800";
      case "testing": return "bg-yellow-100 text-yellow-800";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "quality_approved": return <CheckCircle className="h-4 w-4" />;
      case "packaged": return <Package className="h-4 w-4" />;
      case "shipped": return <Truck className="h-4 w-4" />;
      case "testing": return <Clock className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
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
              <Package className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold">Manufacturer Dashboard</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Batches</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Package className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">QR Codes Generated</p>
                  <p className="text-2xl font-bold">1,847</p>
                </div>
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Herb Sources</p>
                  <p className="text-2xl font-bold">45</p>
                </div>
                <Users className="h-8 w-8 text-primary-glow" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Quality Pass Rate</p>
                  <p className="text-2xl font-bold">98.5%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="batches" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="batches">Batch Management</TabsTrigger>
            <TabsTrigger value="testing">Quality Testing</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="batches" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Current Batches</CardTitle>
                <CardDescription>
                  Monitor and manage your production batches through the supply chain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {batches.map((batch) => (
                    <div key={batch.id} className="p-6 border rounded-lg hover:shadow-soft transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{batch.product}</h3>
                          <p className="text-sm text-muted-foreground">Batch ID: {batch.id}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {batch.herbs.map((herb, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                <Leaf className="h-3 w-3 mr-1" />
                                {herb}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(batch.status)}>
                            {getStatusIcon(batch.status)}
                            <span className="ml-1 capitalize">{batch.status.replace('_', ' ')}</span>
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <span className="text-sm text-muted-foreground">Quantity:</span>
                          <p className="font-medium">{batch.quantity} units</p>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Progress:</span>
                          <Progress value={batch.progress} className="mt-1" />
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">QR Status:</span>
                          <p className="font-medium">{batch.qrGenerated ? "Generated" : "Pending"}</p>
                        </div>
                      </div>

                      {batch.testResults && (
                        <div className="p-4 bg-muted/50 rounded-lg mb-4">
                          <h4 className="font-medium mb-2">Test Results</h4>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Moisture:</span>
                              <p className="font-medium">{batch.testResults.moisture}%</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Pesticides:</span>
                              <p className="font-medium">{batch.testResults.pesticides}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Authenticity:</span>
                              <p className="font-medium">{batch.testResults.authenticity}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex space-x-2">
                        <Link to={`/trace/${batch.id}`}>
                          <Button variant="outline" size="sm">
                            View Traceability
                          </Button>
                        </Link>
                        {!batch.qrGenerated && batch.status === "quality_approved" && (
                          <Button 
                            size="sm" 
                            onClick={() => generateQRCode(batch.id)}
                            className="bg-gradient-herbal hover:opacity-90"
                          >
                            Generate QR Code
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="testing">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Quality Testing Dashboard</CardTitle>
                <CardDescription>
                  Monitor laboratory testing and quality assurance processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Testing Interface</h3>
                  <p className="text-muted-foreground">
                    Laboratory integration for automated test result recording
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Production Analytics</CardTitle>
                <CardDescription>
                  Supply chain insights and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
                  <p className="text-muted-foreground">
                    Real-time production metrics and blockchain analytics
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ManufacturerDashboard;