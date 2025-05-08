"use client"

export function OverallDashboard() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Policy Dashboard</h2>
      <div className="bg-card/30 backdrop-blur-md rounded-xl border border-border shadow-lg p-6 min-h-[400px]">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Stats Cards */}
            {['Total Policies', 'Active Policies', 'Recent Updates'].map((stat) => (
              <div key={stat} className="bg-background/50 p-4 rounded-lg border border-border">
                <h3 className="text-sm font-medium text-muted-foreground">{stat}</h3>
                <p className="text-2xl font-bold">0</p>
              </div>
            ))}
          </div>
          
          {/* Chart Placeholder */}
          <div className="flex-1 bg-background/50 p-4 rounded-lg border border-border min-h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">Dashboard Chart Preview</p>
          </div>
        </div>
      </div>
    </div>
  );
}