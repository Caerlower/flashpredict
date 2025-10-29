import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LiveIndicator } from "@/components/LiveIndicator";
import { ArrowLeft, TrendingUp, Users, Clock, DollarSign } from "lucide-react";
import { toast } from "sonner";

const MarketDetails = () => {
  const { id } = useParams();
  const [betAmount, setBetAmount] = useState("");
  const [selectedOutcome, setSelectedOutcome] = useState<"yes" | "no" | null>(null);

  // Mock data - will be replaced with real API
  const market = {
    id: id || "1",
    question: "Will the next goal be scored within 3 minutes?",
    description: "Live football match prediction market. Outcome resolves automatically based on official match data feed.",
    category: "Sports",
    yesOdds: 1.65,
    noOdds: 2.20,
    participants: 156,
    timeRemaining: "2m 34s",
    totalPool: 12500,
    yesPool: 7500,
    noPool: 5000,
    isLive: true,
    eventSource: "ESPN Live Feed",
    createdBy: "AI Agent",
  };

  const yesPercentage = (market.yesPool / market.totalPool) * 100;
  const noPercentage = (market.noPool / market.totalPool) * 100;

  const handlePlaceBet = () => {
    if (!selectedOutcome || !betAmount || parseFloat(betAmount) <= 0) {
      toast.error("Please select an outcome and enter a valid amount");
      return;
    }

    toast.success("Bet placed successfully!", {
      description: `You bet $${betAmount} on ${selectedOutcome.toUpperCase()}`,
    });
    
    setBetAmount("");
    setSelectedOutcome(null);
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
          {/* Back Button */}
          <Link to="/markets">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Markets
            </Button>
          </Link>

          {/* Market Header */}
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className="bg-muted/50">
                  {market.category}
                </Badge>
                {market.isLive && <LiveIndicator />}
              </div>
              <h1 className="text-3xl font-bold mb-4">{market.question}</h1>
              <p className="text-muted-foreground">{market.description}</p>
            </CardHeader>
          </Card>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Betting Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Odds Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <Card
                  className={`cursor-pointer transition-smooth ${
                    selectedOutcome === "yes"
                      ? "ring-2 ring-success shadow-glow"
                      : "glass-card hover:shadow-primary"
                  }`}
                  onClick={() => setSelectedOutcome("yes")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">YES</h3>
                      <div className="text-3xl font-bold text-success">{market.yesOdds.toFixed(2)}x</div>
                    </div>
                    <Progress value={yesPercentage} className="h-2 mb-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${market.yesPool.toLocaleString()} pool</span>
                      <span>{yesPercentage.toFixed(1)}%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className={`cursor-pointer transition-smooth ${
                    selectedOutcome === "no"
                      ? "ring-2 ring-destructive shadow-glow"
                      : "glass-card hover:shadow-primary"
                  }`}
                  onClick={() => setSelectedOutcome("no")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">NO</h3>
                      <div className="text-3xl font-bold text-destructive">{market.noOdds.toFixed(2)}x</div>
                    </div>
                    <Progress value={noPercentage} className="h-2 mb-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${market.noPool.toLocaleString()} pool</span>
                      <span>{noPercentage.toFixed(1)}%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Bet Input */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Place Your Bet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Amount</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="number"
                        placeholder="0.00"
                        value={betAmount}
                        onChange={(e) => setBetAmount(e.target.value)}
                        className="pl-10 bg-background text-lg"
                      />
                    </div>
                  </div>

                  {selectedOutcome && betAmount && parseFloat(betAmount) > 0 && (
                    <div className="p-4 rounded-lg bg-muted/30 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Potential Return</span>
                        <span className="font-semibold">
                          ${(parseFloat(betAmount) * (selectedOutcome === "yes" ? market.yesOdds : market.noOdds)).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Potential Profit</span>
                        <span className="font-semibold text-success">
                          +${((parseFloat(betAmount) * (selectedOutcome === "yes" ? market.yesOdds : market.noOdds)) - parseFloat(betAmount)).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  )}

                  <Button
                    className="w-full bg-gradient-primary hover:opacity-90 shadow-primary text-lg py-6"
                    onClick={handlePlaceBet}
                    disabled={!selectedOutcome || !betAmount}
                  >
                    Place Bet
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Market Info */}
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Market Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Time Remaining</span>
                    </div>
                    <span className="font-semibold">{market.timeRemaining}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Participants</span>
                    </div>
                    <span className="font-semibold">{market.participants}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm">Total Pool</span>
                    </div>
                    <span className="font-semibold">${market.totalPool.toLocaleString()}</span>
                  </div>

                  <div className="pt-4 border-t border-border/50 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Event Source</span>
                      <span className="font-medium">{market.eventSource}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Created By</span>
                      <Badge variant="secondary">{market.createdBy}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card bg-gradient-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How It Works</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Choose YES or NO</li>
                    <li>• Enter bet amount</li>
                    <li>• Sign with Linera wallet</li>
                    <li>• Instant on-chain settlement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDetails;
