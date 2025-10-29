import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Shield, Users, ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-pulse-glow" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="animate-fade-in space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span>Powered by Linera Microchains</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Real-Time, AI-Curated
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Prediction Markets
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bet on live events with instant settlement. Experience the future of prediction markets on Linera blockchain.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/markets">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-primary text-lg px-8 py-6">
                  Explore Markets
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/leaderboard">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
                  <TrendingUp className="mr-2 w-5 h-5" />
                  View Leaderboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why FlashPredict?</h2>
            <p className="text-muted-foreground text-lg">The most advanced prediction market platform</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Powered by Linera microchains for instant transaction finality and real-time market updates.",
              },
              {
                icon: Shield,
                title: "Secure & Transparent",
                description: "On-chain verification ensures fairness. Every bet is recorded and verifiable on the blockchain.",
              },
              {
                icon: Users,
                title: "AI-Curated Markets",
                description: "Our AI agent automatically creates markets around trending live events, ensuring fresh opportunities.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-8 rounded-2xl hover:shadow-primary transition-smooth group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-primary group-hover:animate-pulse-glow">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Markets", value: "1,234" },
              { label: "Total Volume", value: "$12.4M" },
              { label: "Users", value: "45.2K" },
              { label: "Avg. Settlement", value: "2.3s" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Start Predicting?
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect your Linera wallet and join thousands of users earning on accurate predictions.
            </p>
            <Link to="/markets">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-primary text-lg px-12 py-6">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
