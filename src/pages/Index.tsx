import { ArrowRight, Shield, MapPin, Leaf, Users, QrCode, BarChart3, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-herbs-blockchain.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">AyurTrace</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/collector" className="text-muted-foreground hover:text-primary transition-colors">
              Collectors
            </Link>
            <Link to="/manufacturer" className="text-muted-foreground hover:text-primary transition-colors">
              Manufacturers
            </Link>
            <Link to="/consumer" className="text-muted-foreground hover:text-primary transition-colors">
              Consumers
            </Link>
            <Link to="/admin" className="text-muted-foreground hover:text-primary transition-colors">
              Admin
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-herbal text-primary-foreground py-24 overflow-hidden">
        {/* Dark/green gradient overlay to keep headings readable */}
        <div className="absolute inset-0 bg-gradient-forest opacity-90"></div>
        {/* Background image from assets; lower opacity keeps UI text visible */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary-glow/20 text-primary-foreground border-primary-glow/30">
              Smart India Hackathon 2025
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Blockchain-Powered
              <br />
              <span className="text-accent">Ayurvedic Herb</span>
              <br />
              Traceability
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              From farm to formulation - ensuring authenticity, sustainability, and transparency 
              in the Ayurvedic supply chain through immutable blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consumer">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                  Scan Product QR <QrCode className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/collector">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                  Start Collecting <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Supply Chain Visibility</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track every step from collection to consumer with our comprehensive blockchain solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-soft hover:shadow-herbal transition-all duration-500 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-herbal rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Geo-Tagged Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  GPS-enabled recording of harvest location, collector identity, and environmental conditions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-herbal transition-all duration-500 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-earth rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Blockchain Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Immutable record keeping with smart contracts enforcing quality and sustainability standards
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-herbal transition-all duration-500 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <QrCode className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Consumer Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  QR code scanning reveals complete product journey with lab certificates and farmer profiles
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-herbal transition-all duration-500 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-forest rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Analytics & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real-time dashboards and automated reporting for regulatory compliance and sustainability metrics
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stakeholder Access */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Access Your Portal</h2>
            <p className="text-xl text-muted-foreground">
              Different interfaces for each stakeholder in the supply chain
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/collector">
              <Card className="hover:shadow-herbal transition-all duration-300 group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-herbal rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle>Farmer/Collector Portal</CardTitle>
                  <CardDescription>Record collection, GPS tracking, quality metrics</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full group-hover:bg-primary/90">
                    Access Portal <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/manufacturer">
              <Card className="hover:shadow-herbal transition-all duration-300 group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-earth rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle>Manufacturer Portal</CardTitle>
                  <CardDescription>Processing, testing, batch management</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full group-hover:bg-primary/90">
                    Access Portal <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link to="/consumer">
              <Card className="hover:shadow-herbal transition-all duration-300 group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                    <QrCode className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle>Consumer Portal</CardTitle>
                  <CardDescription>QR scanning, product verification</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full group-hover:bg-primary/90">
                    Scan Product <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">AyurTrace</span>
            </div>
            <p className="text-muted-foreground ml-auto">
              © 2025 Smart India Hackathon - Ministry of AYUSH Blockchain Solution
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;