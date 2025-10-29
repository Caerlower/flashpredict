import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { MarketCard } from "@/components/MarketCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus } from "lucide-react";

// Mock data - will be replaced with real API
const mockMarkets = [
  {
    id: "1",
    question: "Will the next goal be scored within 3 minutes?",
    category: "Sports",
    yesOdds: 1.65,
    noOdds: 2.20,
    participants: 156,
    timeRemaining: "2m 34s",
    totalPool: 12500,
    isLive: true,
  },
  {
    id: "2",
    question: "Will Bitcoin reach $48,000 in the next hour?",
    category: "Crypto",
    yesOdds: 2.10,
    noOdds: 1.75,
    participants: 234,
    timeRemaining: "45m 12s",
    totalPool: 28400,
    isLive: true,
  },
  {
    id: "3",
    question: "Will the stock market close positive today?",
    category: "Finance",
    yesOdds: 1.45,
    noOdds: 2.85,
    participants: 89,
    timeRemaining: "3h 22m",
    totalPool: 8900,
    isLive: false,
  },
  {
    id: "4",
    question: "Will there be a penalty in this match?",
    category: "Sports",
    yesOdds: 3.20,
    noOdds: 1.35,
    participants: 312,
    timeRemaining: "38m 45s",
    totalPool: 45200,
    isLive: true,
  },
  {
    id: "5",
    question: "Will ETH/USD close above $2,600 today?",
    category: "Crypto",
    yesOdds: 1.80,
    noOdds: 2.05,
    participants: 178,
    timeRemaining: "6h 15m",
    totalPool: 19800,
    isLive: false,
  },
  {
    id: "6",
    question: "Will the next corner kick be scored?",
    category: "Sports",
    yesOdds: 4.50,
    noOdds: 1.20,
    participants: 421,
    timeRemaining: "12m 08s",
    totalPool: 67300,
    isLive: true,
  },
];

const Markets = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMarkets = mockMarkets.filter((market) => {
    const matchesCategory = selectedCategory === "all" || market.category.toLowerCase() === selectedCategory;
    const matchesSearch = market.question.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        <div className="space-y-8 animate-fade-in">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Live Markets</h1>
              <p className="text-muted-foreground">Real-time prediction markets with instant settlement</p>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90 shadow-primary">
              <Plus className="w-4 h-4 mr-2" />
              Create Market
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search markets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
              <TabsList className="grid w-full md:w-auto grid-cols-4 bg-card">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="sports">Sports</TabsTrigger>
                <TabsTrigger value="crypto">Crypto</TabsTrigger>
                <TabsTrigger value="finance">Finance</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Markets Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMarkets.map((market, index) => (
              <div
                key={market.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <MarketCard {...market} />
              </div>
            ))}
          </div>

          {filteredMarkets.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No markets found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Markets;
