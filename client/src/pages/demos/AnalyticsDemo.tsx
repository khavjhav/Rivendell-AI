import { useState } from "react";
import { DemoLayout } from "@/components/demo/DemoLayout";
import type { DemoSidebarConfig } from "@/components/demo/DemoSidebar";
import { StatCard } from "@/components/demo/StatCard";
import { DemoDataTable, type DataTableColumn } from "@/components/demo/DemoDataTable";
import {
  analyticsStats,
  trafficData,
  trafficSources,
  topPages,
  geoData,
  alerts,
  dataSources,
  type TopPage,
  type GeoData,
  type AlertItem,
  type DataSource,
} from "@/data/demo/analytics-data";
import {
  LayoutDashboard,
  FileBarChart,
  Database,
  Bell,
  Layout,
  Settings,
  Eye,
  BarChart3,
  Target,
  PoundSterling,
  TrendingUp,
  ShoppingCart,
  Users,
  AlertTriangle,
  Activity,
  Info,
  Wifi,
  WifiOff,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// ---------------------------------------------------------------------------
// Sidebar Configuration
// ---------------------------------------------------------------------------

const sidebarConfig: DemoSidebarConfig = {
  groups: [
    {
      label: "Main",
      items: [
        { label: "Dashboard", icon: LayoutDashboard, page: "dashboard" },
        { label: "Reports", icon: FileBarChart, page: "reports" },
        { label: "Data Sources", icon: Database, page: "data-sources" },
        { label: "Alerts", icon: Bell, page: "alerts", badge: "5" },
      ],
    },
    {
      label: "Settings",
      items: [
        { label: "Custom Views", icon: Layout, page: "custom-views" },
        { label: "Settings", icon: Settings, page: "settings" },
      ],
    },
  ],
  user: { name: "Sarah Chen", email: "sarah@analytics.demo", initials: "SC" },
};

// ---------------------------------------------------------------------------
// Chart Configs
// ---------------------------------------------------------------------------

const trafficChartConfig: ChartConfig = {
  visitors: { label: "Visitors", color: "hsl(var(--chart-1))" },
};

const pieChartConfig: ChartConfig = {
  direct: { label: "Direct", color: "hsl(221, 83%, 53%)" },
  organic: { label: "Organic", color: "hsl(142, 71%, 45%)" },
  social: { label: "Social", color: "hsl(262, 83%, 58%)" },
  referral: { label: "Referral", color: "hsl(24, 95%, 53%)" },
  email: { label: "Email", color: "hsl(346, 77%, 50%)" },
};

// ---------------------------------------------------------------------------
// Breadcrumb helpers
// ---------------------------------------------------------------------------

const pageTitles: Record<string, string> = {
  dashboard: "Dashboard",
  reports: "Reports",
  "data-sources": "Data Sources",
  alerts: "Alerts",
  "custom-views": "Custom Views",
  settings: "Settings",
};

// ---------------------------------------------------------------------------
// Table column definitions
// ---------------------------------------------------------------------------

const topPagesColumns: DataTableColumn<TopPage>[] = [
  { key: "title", header: "Page" },
  {
    key: "views",
    header: "Views",
    className: "text-right",
    render: (row) => row.views.toLocaleString(),
  },
  {
    key: "uniqueViews",
    header: "Uniques",
    className: "text-right",
    render: (row) => row.uniqueViews.toLocaleString(),
  },
  { key: "bounceRate", header: "Bounce", className: "text-right" },
];

const geoColumns: DataTableColumn<GeoData>[] = [
  { key: "country", header: "Country" },
  {
    key: "visitors",
    header: "Visitors",
    className: "text-right",
    render: (row) => row.visitors.toLocaleString(),
  },
  { key: "percentage", header: "%", className: "text-right" },
];

// ---------------------------------------------------------------------------
// Sub-page Components
// ---------------------------------------------------------------------------

function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title={analyticsStats.visitors.label}
          value={analyticsStats.visitors.value}
          change={analyticsStats.visitors.change}
          changeType={analyticsStats.visitors.changeType}
          icon={Eye}
        />
        <StatCard
          title={analyticsStats.pageViews.label}
          value={analyticsStats.pageViews.value}
          change={analyticsStats.pageViews.change}
          changeType={analyticsStats.pageViews.changeType}
          icon={BarChart3}
        />
        <StatCard
          title={analyticsStats.conversionRate.label}
          value={analyticsStats.conversionRate.value}
          change={analyticsStats.conversionRate.change}
          changeType={analyticsStats.conversionRate.changeType}
          icon={Target}
        />
        <StatCard
          title={analyticsStats.revenue.label}
          value={analyticsStats.revenue.value}
          change={analyticsStats.revenue.change}
          changeType={analyticsStats.revenue.changeType}
          icon={PoundSterling}
        />
      </div>

      {/* Traffic Area Chart — full width */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Visitor Traffic — Last 14 Days</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={trafficChartConfig} className="h-[300px] w-full">
            <AreaChart data={trafficData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="fillVisitors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="visitors"
                stroke="hsl(var(--chart-1))"
                fill="url(#fillVisitors)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Two-column: Pie chart + Top Pages */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        {/* Traffic Sources — Donut / Pie */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-base">Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <ChartContainer config={pieChartConfig} className="h-[250px] w-full">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Pie
                  data={trafficSources}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                >
                  {trafficSources.map((source) => (
                    <Cell key={source.name} fill={source.color} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 text-sm">
              {trafficSources.map((source) => (
                <div key={source.name} className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: source.color }}
                  />
                  <span className="text-muted-foreground">{source.name}</span>
                  <span className="font-medium ml-auto">{source.percentage}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Pages */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-base">Top Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <DemoDataTable<TopPage> columns={topPagesColumns} data={topPages} />
          </CardContent>
        </Card>
      </div>

      {/* Real-time visitors + Geo breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        {/* Real-time card */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-base">Real-Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-2xl font-bold">247</span>
              <span className="text-muted-foreground text-sm">active now</span>
            </div>
          </CardContent>
        </Card>

        {/* Geographic breakdown */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-base">Geographic Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <DemoDataTable<GeoData> columns={geoColumns} data={geoData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------

function ReportsPage() {
  const reports = [
    {
      icon: Users,
      title: "Acquisition Report",
      description:
        "Analyse where your visitors are coming from — channels, campaigns, and referrers.",
    },
    {
      icon: Activity,
      title: "Behavior Report",
      description:
        "Understand how users interact with your site — page flow, scroll depth, and click maps.",
    },
    {
      icon: Target,
      title: "Conversions Report",
      description:
        "Track goal completions, funnel drop-off, and conversion attribution by source.",
    },
    {
      icon: PoundSterling,
      title: "Revenue Report",
      description:
        "Review revenue trends, average order value, and lifetime value segmentation.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {reports.map((report) => (
        <Card key={report.title} className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-5 flex gap-4 items-start">
            <div className="h-10 w-10 rounded-lg bg-muted/50 flex items-center justify-center shrink-0">
              <report.icon className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <p className="font-semibold text-sm">{report.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{report.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------

function DataSourcesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {dataSources.map((ds: DataSource) => (
        <Card key={ds.name}>
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {ds.status === "connected" ? (
                  <Wifi className="h-4 w-4 text-emerald-500" />
                ) : (
                  <WifiOff className="h-4 w-4 text-red-500" />
                )}
                <span className="font-semibold text-sm">{ds.name}</span>
              </div>
              <Badge
                variant={ds.status === "connected" ? "default" : "destructive"}
                className={
                  ds.status === "connected"
                    ? "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-0"
                    : ""
                }
              >
                {ds.status}
              </Badge>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Last synced: {ds.lastSync}</p>
              <p>Records: {ds.records.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------

function AlertsPage() {
  const severityVariant = (severity: AlertItem["severity"]) => {
    switch (severity) {
      case "critical":
        return "destructive";
      case "warning":
        return "default";
      case "info":
      default:
        return "secondary";
    }
  };

  const typeIcon = (type: AlertItem["type"]) => {
    switch (type) {
      case "anomaly":
        return <AlertTriangle className="h-4 w-4" />;
      case "threshold":
        return <Activity className="h-4 w-4" />;
      case "trend":
        return <TrendingUp className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-3">
      {alerts.map((alert: AlertItem) => (
        <Card key={alert.id}>
          <CardContent className="p-4 flex items-start gap-4">
            <div className="h-9 w-9 rounded-lg bg-muted/50 flex items-center justify-center shrink-0 text-muted-foreground">
              {typeIcon(alert.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant={severityVariant(alert.severity)}>{alert.severity}</Badge>
                <span className="text-xs text-muted-foreground capitalize">{alert.type}</span>
              </div>
              <p className="text-sm">{alert.message}</p>
              <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Placeholder pages
// ---------------------------------------------------------------------------

function PlaceholderPage({ title }: { title: string }) {
  return (
    <Card>
      <CardContent className="p-10 flex flex-col items-center justify-center text-center">
        <Info className="h-10 w-10 text-muted-foreground mb-4" />
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground mt-1">
          This section is not part of the demo and is shown as a placeholder.
        </p>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function AnalyticsDemo() {
  const [activePage, setActivePage] = useState("dashboard");

  const breadcrumbs = [
    { label: "Analytics" },
    { label: pageTitles[activePage] ?? activePage },
  ];

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardPage />;
      case "reports":
        return <ReportsPage />;
      case "data-sources":
        return <DataSourcesPage />;
      case "alerts":
        return <AlertsPage />;
      case "custom-views":
        return <PlaceholderPage title="Custom Views" />;
      case "settings":
        return <PlaceholderPage title="Settings" />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <DemoLayout
      config={sidebarConfig}
      activePage={activePage}
      onNavigate={setActivePage}
      breadcrumbs={breadcrumbs}
      productName="Analytics"
      accentColor="#6366f1"
    >
      {renderPage()}
    </DemoLayout>
  );
}
