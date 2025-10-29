import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, TrendingUp } from "lucide-react";
import { LiveIndicator } from "./LiveIndicator";

interface MarketCardProps {
  id: string;
  question: string;
  category: string;
  yesOdds: number;
  noOdds: number;
  participants: number;
  timeRemaining: string;
  totalPool: number;
  isLive: boolean;
}

export const MarketCard = ({
  id,
  question,
  category,
  yesOdds,
  noOdds,
  participants,
  timeRemaining,
  totalPool,
  isLive,
}: MarketCardProps) => {
  return (
    <Link to={`/market/${id}`}>
      <Card className="glass-card hover:shadow-primary transition-smooth cursor-pointer group">
        <CardHeader className="space-y-3">
          <div className="flex items-start justify-between">
            <Badge variant="outline" className="bg-muted/50">
              {category}
            </Badge>
            {isLive && <LiveIndicator />}
          </div>
          <h3 className="text-lg font-semibold group-hover:text-primary transition-smooth">
            {question}
          </h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-success/10 border border-success/20">
              <div className="text-xs text-muted-foreground mb-1">Yes</div>
              <div className="text-2xl font-bold text-success">{yesOdds.toFixed(2)}x</div>
            </div>
            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
              <div className="text-xs text-muted-foreground mb-1">No</div>
              <div className="text-2xl font-bold text-destructive">{noOdds.toFixed(2)}x</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{participants} bets</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{timeRemaining}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <span className="text-sm text-muted-foreground">Total Pool</span>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="font-semibold">${totalPool.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
