import { useState } from "react";
import { ArrowLeft, MapPin, Camera, Plus, CheckCircle, Clock, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { EXAMPLE_COLLECTIONS, COLLECTOR_PROFILES, QUALITY_GRADES, HARVEST_SEASONS } from "@/data/farmer-examples";

const CollectorDashboard = () => {
  const { toast } = useToast();
  const [isRecording, setIsRecording] = useState(false);
  const [collections, setCollections] = useState(EXAMPLE_COLLECTIONS.slice(0, 8)); // Show recent collections
  const [selectedCollector] = useState(COLLECTOR_PROFILES[0]); // Current logged-in collector

  const [newCollection, setNewCollection] = useState({
    species: "",
    quantity: "",
    quality: "",
    notes: ""
  });

  const handleSubmitCollection = () => {
    if (!newCollection.species || !newCollection.quantity) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate GPS location capture
    const mockLocation = selectedCollector.location;
    const mockCoordinates = collections[0]?.coordinates || "18.5204, 73.8567";
    
    const record = {
      id: `COL${Date.now().toString().slice(-3)}`,
      species: newCollection.species,
      location: mockLocation,
      state: selectedCollector.location.split(', ')[1] || "Maharashtra",
      coordinates: mockCoordinates,
      quantity: parseFloat(newCollection.quantity),
      quality: newCollection.quality,
      timestamp: new Date().toLocaleString(),
      status: "pending" as const,
      collectorInfo: selectedCollector,
      environmentalData: {
        weather: "Clear, optimal harvesting conditions",
        temperature: "24°C",
        humidity: "45%",
        harvestMethod: "Traditional hand-picking method"
      },
      qualityMetrics: {
        appearance: "Fresh, healthy specimens",
        aroma: "Characteristic herbal fragrance",
        contaminants: "Visual inspection: none detected"
      },
      sustainabilityNotes: [
        "Sustainable harvesting practices followed",
        "Traditional knowledge applied",
        "Ecosystem preservation prioritized"
      ],
      blockchainHash: `0x${Math.random().toString(16).slice(2, 66)}`,
      paymentStatus: "pending" as const,
      pricePerKg: 300
    };

    setCollections([record, ...collections.slice(0, 9)]); // Keep only 10 most recent
    setNewCollection({ species: "", quantity: "", quality: "", notes: "" });
    setIsRecording(false);
    
    toast({
      title: "Collection Recorded",
      description: "Your collection has been added to the blockchain",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified": return "bg-primary/20 text-primary";
      case "processed": return "bg-accent/20 text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
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
              <Leaf className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold">Collector Dashboard</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Collector Profile Summary */}
        <div className="mb-8">
          <Card className="shadow-herbal">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Welcome, {selectedCollector.name}</CardTitle>
                  <CardDescription>{selectedCollector.location} • {selectedCollector.experience} experience</CardDescription>
                </div>
                <div className="text-right">
                  <Badge className="bg-primary/20 text-primary mb-2">
                    {selectedCollector.certification}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {selectedCollector.cooperative}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <span className="text-sm text-muted-foreground">Total Collections:</span>
                  <p className="text-xl font-bold text-primary">{selectedCollector.totalCollections}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Average Quality:</span>
                  <p className="text-xl font-bold text-accent">{selectedCollector.averageQuality}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Sustainability Score:</span>
                  <p className="text-xl font-bold text-green-600">{selectedCollector.sustainabilityScore}%</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Specializations:</span>
                  <p className="text-sm font-medium">{selectedCollector.specializations.join(", ")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Collection Form */}
          <div className="lg:col-span-1">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  New Collection
                </CardTitle>
                <CardDescription>
                  Record a new herb collection with GPS tracking
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="species">Herb Species *</Label>
                  <Select value={newCollection.species} onValueChange={(value) => 
                    setNewCollection({...newCollection, species: value})
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select herb species" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(HARVEST_SEASONS).map((herb) => (
                        <SelectItem key={herb} value={herb}>
                          {herb} - {HARVEST_SEASONS[herb as keyof typeof HARVEST_SEASONS]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity (kg) *</Label>
                  <Input
                    id="quantity"
                    type="number"
                    step="0.1"
                    placeholder="25.5"
                    value={newCollection.quantity}
                    onChange={(e) => setNewCollection({...newCollection, quantity: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quality">Quality Grade</Label>
                  <Select value={newCollection.quality} onValueChange={(value) => 
                    setNewCollection({...newCollection, quality: value})
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select quality" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(QUALITY_GRADES).map(([grade, info]) => (
                        <SelectItem key={grade} value={grade}>
                          {grade} - {info.description}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Collection Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Weather conditions, harvest notes..."
                    value={newCollection.notes}
                    onChange={(e) => setNewCollection({...newCollection, notes: e.target.value})}
                  />
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1" onClick={() => setIsRecording(true)}>
                    <MapPin className="h-4 w-4 mr-2" />
                    Get GPS Location
                  </Button>
                  <Button variant="outline">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>

                {isRecording && (
                  <div className="p-4 bg-muted rounded-lg space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Location: {selectedCollector.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Coordinates: {collections[0]?.coordinates || "18.5204, 73.8567"}</span>
                    </div>
                    <div className="text-xs text-green-600">
                      ✓ GPS signal strong • ✓ Location verified • ✓ Weather conditions recorded
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full bg-gradient-herbal hover:opacity-90" 
                  onClick={handleSubmitCollection}
                  disabled={!newCollection.species || !newCollection.quantity}
                >
                  Record Collection
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Collection History */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Collection History</CardTitle>
                <CardDescription>
                  Your recorded collections and their blockchain status
                </CardDescription>
              </CardHeader>
              <CardContent>
                  <div className="space-y-4">
                  {collections.map((collection) => (
                    <div key={collection.id} className="p-4 border rounded-lg hover:shadow-soft transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{collection.species}</h3>
                          <p className="text-sm text-muted-foreground">ID: {collection.id}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(collection.status)}>
                            {collection.status === "verified" && <CheckCircle className="h-3 w-3 mr-1" />}
                            {collection.status.charAt(0).toUpperCase() + collection.status.slice(1)}
                          </Badge>
                          {collection.paymentStatus && (
                            <Badge variant="outline" className={
                              collection.paymentStatus === "completed" ? "text-green-600" : 
                              collection.paymentStatus === "processed" ? "text-yellow-600" : "text-gray-600"
                            }>
                              ₹{collection.pricePerKg}/kg
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                        <div>
                          <span className="text-muted-foreground">Quantity:</span>
                          <p className="font-medium">{collection.quantity} kg</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Quality:</span>
                          <p className="font-medium">{collection.quality}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Location:</span>
                          <p className="font-medium">{collection.location}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Timestamp:</span>
                          <p className="font-medium">{collection.timestamp}</p>
                        </div>
                      </div>

                      {collection.environmentalData && (
                        <div className="p-3 bg-muted/50 rounded-lg mb-3">
                          <h4 className="font-medium text-sm mb-2">Environmental Conditions</h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                            <div>
                              <span className="text-muted-foreground">Weather:</span>
                              <p>{collection.environmentalData.weather}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Temperature:</span>
                              <p>{collection.environmentalData.temperature}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Humidity:</span>
                              <p>{collection.environmentalData.humidity}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {collection.sustainabilityNotes && collection.sustainabilityNotes.length > 0 && (
                        <div className="mb-3">
                          <h4 className="font-medium text-sm mb-2 text-green-700">Sustainability Practices</h4>
                          <div className="flex flex-wrap gap-1">
                            {collection.sustainabilityNotes.slice(0, 2).map((note, index) => (
                              <Badge key={index} variant="outline" className="text-xs bg-green-50 text-green-700">
                                {note}
                              </Badge>
                            ))}
                            {collection.sustainabilityNotes.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{collection.sustainabilityNotes.length - 2} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {collection.coordinates}
                        </div>
                        {collection.blockchainHash && (
                          <div className="text-xs text-muted-foreground">
                            Hash: {collection.blockchainHash.slice(0, 10)}...
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectorDashboard;