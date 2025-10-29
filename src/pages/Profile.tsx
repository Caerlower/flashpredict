import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, TrendingUp, Target, Wallet, CheckCircle, XCircle } from "lucide-react";

// Mock data - will be replaced with real API
const profileData = {
  address: "0x742d...8a9f",
  totalBets: 45,
  wins: 28,
  losses: 17,
  winRate: 62.2,
  totalEarned: 8450,
  totalSpent: 4200,
  netProfit: 4250,
  rank: 156,
  badges: ["Early Adopter", "10 Wins", "High Roller"],
};

const recentBets = [
  {
    id: 1,
    question: "Will BTC reach $48K?",
    outcome: "YES",
    result: "won",
    amount: 100,
    payout: 165,
    date: "2 hours ago",
  },
  {
    id: 2,
    question: "Next goal in 3 mins?",
    outcome: "NO",
    result: "won",
    amount: 50,
    payout: 110,
    date: "5 hours ago",
  },
  {
    id: 3,
    question: "Stock market positive?",
    outcome: "YES",
    result: "lost",
    amount: 75,
    payout: 0,
    date: "1 day ago",
  },
  {
    id: 4,
    question: "Will ETH reach $2,600?",
    outcome: "NO",
    result: "won",
    amount: 120,
    payout: 246,
    date: "2 days ago",
  },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
          {/* Profile Header */}
          <Card className="glass-card">
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-white text-3xl font-bold shadow-primary">
                    {profileData.address[2]}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h1 className="text-2xl font-bold">{profileData.address}</h1>
                      <Badge variant="secondary">Rank #{profileData.rank}</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{profileData.totalBets} bets placed</span>
                      <span>•</span>
                      <span>{profileData.winRate}% win rate</span>
                    </div>
                  </div>
                </div>
                <Button className="bg-gradient-primary hover:opacity-90 shadow-primary">
                  <Wallet className="w-4 h-4 mr-2" />
                  Connected
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: TrendingUp, label: "Net Profit", value: `$${profileData.netProfit.toLocaleString()}`, color: "success" },
              { icon: Target, label: "Win Rate", value: `${profileData.winRate}%`, color: "primary" },
              { icon: Trophy, label: "Total Wins", value: profileData.wins, color: "warning" },
              { icon: CheckCircle, label: "Total Earned", value: `$${profileData.totalEarned.toLocaleString()}`, color: "secondary" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon className={`w-5 h-5 text-${stat.color}`} />
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Bets */}
            <Card className="lg:col-span-2 glass-card">
              <CardHeader>
                <CardTitle>Recent Bets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentBets.map((bet) => (
                  <div
                    key={bet.id}
                    className="p-4 rounded-lg border border-border/50 hover:bg-muted/20 transition-smooth"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{bet.question}</h4>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Badge variant={bet.outcome === "YES" ? "default" : "secondary"} className="text-xs">
                            {bet.outcome}
                          </Badge>
                          <span>•</span>
                          <span>{bet.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {bet.result === "won" ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : (
                          <XCircle className="w-5 h-5 text-destructive" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-border/30">
                      <span className="text-sm text-muted-foreground">Bet: ${bet.amount}</span>
                      {bet.result === "won" ? (
                        <span className="text-sm font-semibold text-success">
                          +${bet.payout - bet.amount}
                        </span>
                      ) : (
                        <span className="text-sm font-semibold text-destructive">
                          -${bet.amount}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Badges & Achievements */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Badges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profileData.badges.map((badge, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-gradient-primary/10 border border-primary/20 flex items-center space-x-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-primary">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">{badge}</div>
                      <div className="text-xs text-muted-foreground">Achievement unlocked</div>
                    </div>
                  </div>
                ))}

                <Button variant="outline" className="w-full mt-4">
                  View All Achievements
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
