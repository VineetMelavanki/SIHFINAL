import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { blockchain } from "@/lib/blockchain";

interface BlockchainStatusProps {
  compact?: boolean;
}

const BlockchainStatus = ({ compact = false }: BlockchainStatusProps) => {
  const [stats, setStats] = useState({
    totalTransactions: 0,
    verifiedTransactions: 0,
    blockHeight: 0,
    networkHealth: "healthy"
  });

  useEffect(() => {
    const updateStats = () => {
      setStats(blockchain.getNetworkStats());
    };
    
    updateStats();
    const interval = setInterval(updateStats, 5000);
    
    return () => clearInterval(interval);
  }, []);

  if (compact) {
    return (
      <div className="flex items-center space-x-2">
        <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">
          <CheckCircle className="h-3 w-3 mr-1" />
          Network Healthy
        </Badge>
        <span className="text-xs text-muted-foreground">
          Block #{stats.blockHeight.toLocaleString()}
        </span>
      </div>
    );
  }

  return (
    <Card className="shadow-soft">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-medium">Blockchain Status</h4>
          <Badge className={
            stats.networkHealth === "healthy" 
              ? "bg-green-100 text-green-800" 
              : "bg-red-100 text-red-800"
          }>
            {stats.networkHealth === "healthy" ? (
              <CheckCircle className="h-3 w-3 mr-1" />
            ) : (
              <AlertTriangle className="h-3 w-3 mr-1" />
            )}
            {stats.networkHealth}
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Block Height:</span>
            <p className="font-medium">{stats.blockHeight.toLocaleString()}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Total Transactions:</span>
            <p className="font-medium">{stats.totalTransactions}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Verified:</span>
            <p className="font-medium text-green-600">{stats.verifiedTransactions}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Success Rate:</span>
            <p className="font-medium">
              {stats.totalTransactions > 0 
                ? Math.round((stats.verifiedTransactions / stats.totalTransactions) * 100)
                : 100}%
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlockchainStatus;