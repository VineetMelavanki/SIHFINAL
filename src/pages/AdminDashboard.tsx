import { useState } from "react";
import { ArrowLeft, BarChart3, Users, Package, Shield, TrendingUp, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [networkStats] = useState({
    totalNodes: 127,
    activeCollectors: 89,
    manufacturers: 23,
    consumers: 15420,
    totalTransactions: 45678,
    verifiedBatches: 3456,
    sustainabilityScore: 87
  });

  const [recentActivity] = useState([
    {
      id: "TXN-001",
      type: "Collection",
      actor: "Ravi Kumar",
      location: "Rajasthan",
      timestamp: "2024-01-16 14:30",
      status: "verified"
    },
    {
      id: "TXN-002",
      type: "Testing",
      actor: "AyurTest Labs",
      location: "Mumbai",
      timestamp: "2024-01-16 13:45",
      status: "verified"
    },
    {
      id: "TXN-003",
      type: "Processing",
      actor: "Ayur Wellness",
      location: "Pune",
      timestamp: "2024-01-16 12:20",
      status: "pending"
    },
    {
      id: "TXN-004",
      type: "Distribution",
      actor: "MedPlus Network",
      location: "Bangalore",
      timestamp: "2024-01-16 11:15",
      status: "verified"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified": return <CheckCircle className="h-3 w-3" />;
      case "pending": return <Clock className="h-3 w-3" />;
      default: return <AlertTriangle className="h-3 w-3" />;
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
              <Shield className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Network Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Network Nodes</p>
                  <p className="text-2xl font-bold">{networkStats.totalNodes}</p>
                  <p className="text-xs text-green-600">+12 this week</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Transactions</p>
                  <p className="text-2xl font-bold">{networkStats.totalTransactions.toLocaleString()}</p>
                  <p className="text-xs text-green-600">+3.2% from last month</p>
                </div>
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Verified Batches</p>
                  <p className="text-2xl font-bold">{networkStats.verifiedBatches.toLocaleString()}</p>
                  <p className="text-xs text-green-600">98.5% success rate</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Sustainability Score</p>
                  <p className="text-2xl font-bold">{networkStats.sustainabilityScore}%</p>
                  <Progress value={networkStats.sustainabilityScore} className="mt-2" />
                </div>
                <TrendingUp className="h-8 w-8 text-primary-glow" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Network Overview</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Stakeholder Distribution */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Stakeholder Distribution</CardTitle>
                  <CardDescription>
                    Active participants in the blockchain network
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Collectors/Farmers</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={70} className="w-20" />
                      <span className="text-sm font-medium">{networkStats.activeCollectors}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Manufacturers</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={18} className="w-20" />
                      <span className="text-sm font-medium">{networkStats.manufacturers}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Testing Labs</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={8} className="w-20" />
                      <span className="text-sm font-medium">15</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Distributors</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={4} className="w-20" />
                      <span className="text-sm font-medium">8</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Network Health */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Network Health</CardTitle>
                  <CardDescription>
                    Real-time blockchain network status
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Block Height</span>
                    <span className="text-sm font-medium">847,293</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Average Block Time</span>
                    <span className="text-sm font-medium">2.3 seconds</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Network Throughput</span>
                    <span className="text-sm font-medium">450 TPS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Consensus Participation</span>
                    <span className="text-sm font-medium">99.7%</span>
                  </div>
                  <div className="pt-4 border-t">
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Network Healthy
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="activity" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Recent Blockchain Activity</CardTitle>
                <CardDescription>
                  Latest transactions and events on the network
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-soft transition-shadow">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-herbal rounded-full flex items-center justify-center">
                          <Package className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-medium">{activity.type} Event</h4>
                          <p className="text-sm text-muted-foreground">
                            {activity.actor} • {activity.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-muted-foreground">{activity.timestamp}</span>
                        <Badge className={getStatusColor(activity.status)}>
                          {getStatusIcon(activity.status)}
                          <span className="ml-1 capitalize">{activity.status}</span>
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="compliance">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Regulatory Compliance Dashboard</CardTitle>
                <CardDescription>
                  AYUSH Ministry and export compliance monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-medium">AYUSH Compliance</h4>
                    <Progress value={94} />
                    <p className="text-xs text-muted-foreground">94% compliance rate</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">GMP Standards</h4>
                    <Progress value={98} />
                    <p className="text-xs text-muted-foreground">98% compliance rate</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Export Certification</h4>
                    <Progress value={89} />
                    <p className="text-xs text-muted-foreground">89% compliance rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Supply Chain Analytics</CardTitle>
                <CardDescription>
                  Comprehensive insights and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
                  <p className="text-muted-foreground">
                    Detailed charts, trends, and predictive analytics would be displayed here
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

export default AdminDashboard;