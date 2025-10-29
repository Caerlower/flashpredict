import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, Target } from "lucide-react";

// Mock data - will be replaced with real API
const leaderboardData = [
  {
    rank: 1,
    username: "CryptoWizard",
    wins: 124,
    totalEarned: 45230,
    accuracy: 78.5,
  },
  {
    rank: 2,
    username: "SportsBetPro",
    wins: 98,
    totalEarned: 38950,
    accuracy: 72.3,
  },
  {
    rank: 3,
    username: "MarketGuru",
    wins: 87,
    totalEarned: 32100,
    accuracy: 69.8,
  },
  {
    rank: 4,
    username: "FlashTrader",
    wins: 76,
    totalEarned: 28750,
    accuracy: 71.2,
  },
  {
    rank: 5,
    username: "OddsKing",
    wins: 65,
    totalEarned: 24380,
    accuracy: 68.5,
  },
  {
    rank: 6,
    username: "PredictMaster",
    wins: 58,
    totalEarned: 21900,
    accuracy: 67.1,
  },
  {
    rank: 7,
    username: "QuickBet",
    wins: 52,
    totalEarned: 19450,
    accuracy: 65.8,
  },
  {
    rank: 8,
    username: "ChainGambler",
    wins: 47,
    totalEarned: 17820,
    accuracy: 64.2,
  },
  {
    rank: 9,
    username: "LiveOracle",
    wins: 43,
    totalEarned: 16100,
    accuracy: 63.5,
  },
  {
    rank: 10,
    username: "BetSmarter",
    wins: 39,
    totalEarned: 14680,
    accuracy: 62.1,
  },
];

const Leaderboard = () => {
  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-yellow-500";
    if (rank === 2) return "text-gray-400";
    if (rank === 3) return "text-orange-600";
    return "text-muted-foreground";
  };

  const getRankIcon = (rank: number) => {
    if (rank <= 3) {
      return <Trophy className={`w-6 h-6 ${getRankColor(rank)}`} />;
    }
    return <span className="text-xl font-bold text-muted-foreground">{rank}</span>;
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary shadow-primary mb-4">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold">Leaderboard</h1>
            <p className="text-muted-foreground text-lg">Top predictors on FlashPredict</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Trophy, label: "Total Winners", value: "2,348", gradient: "gradient-primary" },
              { icon: TrendingUp, label: "Total Paid Out", value: "$1.2M", gradient: "gradient-success" },
              { icon: Target, label: "Avg Accuracy", value: "67.8%", gradient: "gradient-secondary" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="glass-card">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-${stat.gradient} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Leaderboard Table */}
          <Card className="glass-card">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Rank</th>
                      <th className="text-left p-4 text-sm font-semibold text-muted-foreground">User</th>
                      <th className="text-right p-4 text-sm font-semibold text-muted-foreground">Wins</th>
                      <th className="text-right p-4 text-sm font-semibold text-muted-foreground">Total Earned</th>
                      <th className="text-right p-4 text-sm font-semibold text-muted-foreground">Accuracy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((user, index) => (
                      <tr
                        key={user.rank}
                        className="border-b border-border/50 hover:bg-muted/20 transition-smooth"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <td className="p-4">
                          <div className="flex items-center justify-center w-10">
                            {getRankIcon(user.rank)}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                              {user.username[0]}
                            </div>
                            <span className="font-medium">{user.username}</span>
                          </div>
                        </td>
                        <td className="p-4 text-right">
                          <Badge variant="secondary">{user.wins}</Badge>
                        </td>
                        <td className="p-4 text-right">
                          <span className="font-semibold text-success">
                            ${user.totalEarned.toLocaleString()}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <span className="font-medium">{user.accuracy}%</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
