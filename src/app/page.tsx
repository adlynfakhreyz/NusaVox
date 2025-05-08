"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { OverallDashboard } from "@/components/ui/overall-dashboard";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/policies?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-background/80 to-background via-background/95">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/80 to-foreground/50">
            Welcome to NusaVox
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-muted-foreground">
            Your trusted platform for accessing and understanding Indonesian public policies
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for policies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-xl bg-input text-input-foreground text-lg focus:outline-none focus:ring-2 focus:ring-ring border border-border"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-muted/20 backdrop-blur-sm">
        <OverallDashboard></OverallDashboard>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NusaVox</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Comprehensive Database', 'Easy Search', 'Real-time Updates'].map((feature) => (
              <div key={feature} className="text-center p-6 rounded-xl border border-border bg-card hover:bg-card/80 transition-all">
                <h3 className="text-xl font-semibold mb-4">{feature}</h3>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Start Exploring Policies Today</h2>
          <p className="mb-8 text-muted-foreground">Join thousands of users who trust NusaVox for policy information</p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/80 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
