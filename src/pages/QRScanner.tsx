import { useState, useEffect } from "react";
import { ArrowLeft, Camera, QrCode, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";

const QRScanner = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);

  const startScanning = () => {
    setIsScanning(true);
    
    // Simulate QR code scanning after 3 seconds
    setTimeout(() => {
      const mockQRResult = "BTH001"; // Simulate scanned QR code
      setScanResult(mockQRResult);
      setIsScanning(false);
      
      toast({
        title: "QR Code Scanned Successfully",
        description: "Redirecting to product information...",
      });
      
      // Redirect to consumer portal with scanned result
      setTimeout(() => {
        navigate("/consumer");
      }, 1500);
    }, 3000);
  };

  const stopScanning = () => {
    setIsScanning(false);
    setScanResult(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/consumer">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <QrCode className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold">QR Code Scanner</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card className="shadow-herbal">
            <CardHeader className="text-center">
              <CardTitle>Scan Product QR Code</CardTitle>
              <CardDescription>
                Point your camera at the QR code on your Ayurvedic product
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Camera Preview Area */}
              <div className="relative">
                <div className="aspect-square bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center overflow-hidden">
                  {!isScanning && !scanResult && (
                    <div className="text-center">
                      <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Camera preview will appear here</p>
                    </div>
                  )}
                  
                  {isScanning && (
                    <div className="text-center animate-pulse">
                      <div className="relative">
                        <QrCode className="h-24 w-24 text-primary mx-auto mb-4" />
                        <div className="absolute inset-0 border-2 border-primary rounded-lg animate-ping"></div>
                      </div>
                      <p className="text-primary font-medium">Scanning QR Code...</p>
                      <div className="w-full bg-muted-foreground/20 rounded-full h-2 mt-4">
                        <div className="bg-primary h-2 rounded-full animate-pulse w-3/4"></div>
                      </div>
                    </div>
                  )}
                  
                  {scanResult && (
                    <div className="text-center">
                      <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <p className="text-green-600 font-medium">QR Code Detected!</p>
                      <p className="text-sm text-muted-foreground mt-2">Code: {scanResult}</p>
                    </div>
                  )}
                </div>
                
                {/* Scanning overlay */}
                {isScanning && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-48 h-48 border-4 border-primary rounded-lg opacity-80">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Control Buttons */}
              <div className="space-y-3">
                {!isScanning && !scanResult && (
                  <Button 
                    className="w-full bg-gradient-herbal hover:opacity-90"
                    onClick={startScanning}
                  >
                    <Camera className="h-4 w-4 mr-2" />
                    Start Scanning
                  </Button>
                )}
                
                {isScanning && (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={stopScanning}
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Stop Scanning
                  </Button>
                )}
                
                {scanResult && (
                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-gradient-herbal hover:opacity-90"
                      onClick={() => navigate("/consumer")}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      View Product Details
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        setScanResult(null);
                        setIsScanning(false);
                      }}
                    >
                      Scan Another Code
                    </Button>
                  </div>
                )}
              </div>
              
              {/* Instructions */}
              <div className="text-center text-sm text-muted-foreground space-y-2">
                <p>• Hold your device steady</p>
                <p>• Ensure good lighting</p>
                <p>• QR code should be clearly visible</p>
                <p>• Allow camera permissions when prompted</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Demo Note */}
          <Card className="mt-6 shadow-soft">
            <CardContent className="p-4 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Demo Mode:</strong> This will simulate scanning and redirect to sample product data
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;