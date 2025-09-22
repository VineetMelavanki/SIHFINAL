import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Leaf } from "lucide-react";
import { HerbInfo } from "@/lib/herbs-data";

interface HerbCardProps {
  herb: HerbInfo;
  compact?: boolean;
}

const HerbCard = ({ herb, compact = false }: HerbCardProps) => {
  if (compact) {
    return (
      <div className="flex items-center space-x-3 p-3 border rounded-lg hover:shadow-soft transition-shadow">
        <div className="w-10 h-10 bg-gradient-herbal rounded-full flex items-center justify-center">
          <Leaf className="h-5 w-5 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium">{herb.name}</h4>
          <p className="text-sm text-muted-foreground">{herb.scientificName}</p>
        </div>
        <Badge variant="outline" className="text-xs">
          {herb.harvestingSeason.split(' ')[0]}
        </Badge>
      </div>
    );
  }

  return (
    <Card className="shadow-soft hover:shadow-herbal transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{herb.name}</CardTitle>
            <CardDescription className="italic">{herb.scientificName}</CardDescription>
          </div>
          <div className="w-12 h-12 bg-gradient-herbal rounded-full flex items-center justify-center">
            <Leaf className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {herb.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            <span>Harvest: {herb.harvestingSeason}</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{herb.majorRegions.slice(0, 2).join(', ')}</span>
            {herb.majorRegions.length > 2 && <span> +{herb.majorRegions.length - 2} more</span>}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {herb.primaryUses.slice(0, 2).map((use, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {use}
            </Badge>
          ))}
          {herb.primaryUses.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{herb.primaryUses.length - 2} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default HerbCard;