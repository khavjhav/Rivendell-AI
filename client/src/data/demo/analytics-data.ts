// Analytics Dashboard Demo — Mock Data
// All data is fictional and for demonstration purposes only.

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

export interface AnalyticsStat {
  label: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
}

export interface TrafficDataPoint {
  date: string;
  visitors: number;
  pageViews: number;
}

export interface TrafficSource {
  name: string;
  value: number;
  percentage: string;
  color: string;
}

export interface TopPage {
  path: string;
  title: string;
  views: number;
  uniqueViews: number;
  avgTimeOnPage: string;
  bounceRate: string;
}

export interface GeoData {
  country: string;
  visitors: number;
  percentage: string;
}

export interface AlertItem {
  id: string;
  type: "anomaly" | "threshold" | "trend";
  message: string;
  severity: "info" | "warning" | "critical";
  time: string;
}

export interface DataSource {
  name: string;
  status: "connected" | "disconnected";
  lastSync: string;
  records: number;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const analyticsStats: Record<string, AnalyticsStat> = {
  visitors: {
    label: "Visitors",
    value: "12,847",
    change: "+14.2% from last month",
    changeType: "positive",
  },
  pageViews: {
    label: "Page Views",
    value: "48,295",
    change: "+8.1% from last month",
    changeType: "positive",
  },
  conversionRate: {
    label: "Conversion Rate",
    value: "3.2%",
    change: "-0.4% from last month",
    changeType: "negative",
  },
  revenue: {
    label: "Revenue",
    value: "£24,580",
    change: "+22.5% from last month",
    changeType: "positive",
  },
};

export const trafficData: TrafficDataPoint[] = [
  { date: "Jan 1", visitors: 482, pageViews: 1820 },
  { date: "Jan 2", visitors: 531, pageViews: 2010 },
  { date: "Jan 3", visitors: 617, pageViews: 2340 },
  { date: "Jan 4", visitors: 592, pageViews: 2180 },
  { date: "Jan 5", visitors: 445, pageViews: 1650 },
  { date: "Jan 6", visitors: 412, pageViews: 1540 },
  { date: "Jan 7", visitors: 678, pageViews: 2590 },
  { date: "Jan 8", visitors: 715, pageViews: 2780 },
  { date: "Jan 9", visitors: 743, pageViews: 2850 },
  { date: "Jan 10", visitors: 694, pageViews: 2620 },
  { date: "Jan 11", visitors: 756, pageViews: 2910 },
  { date: "Jan 12", visitors: 523, pageViews: 1980 },
  { date: "Jan 13", visitors: 489, pageViews: 1760 },
  { date: "Jan 14", visitors: 801, pageViews: 2970 },
];

export const trafficSources: TrafficSource[] = [
  { name: "Direct", value: 35, percentage: "35%", color: "hsl(221, 83%, 53%)" },
  { name: "Organic", value: 28, percentage: "28%", color: "hsl(142, 71%, 45%)" },
  { name: "Social", value: 18, percentage: "18%", color: "hsl(262, 83%, 58%)" },
  { name: "Referral", value: 12, percentage: "12%", color: "hsl(24, 95%, 53%)" },
  { name: "Email", value: 7, percentage: "7%", color: "hsl(346, 77%, 50%)" },
];

export const topPages: TopPage[] = [
  {
    path: "/",
    title: "Homepage",
    views: 8432,
    uniqueViews: 6218,
    avgTimeOnPage: "1m 24s",
    bounceRate: "42.3%",
  },
  {
    path: "/pricing",
    title: "Pricing",
    views: 5217,
    uniqueViews: 4103,
    avgTimeOnPage: "2m 38s",
    bounceRate: "28.1%",
  },
  {
    path: "/blog",
    title: "Blog",
    views: 4890,
    uniqueViews: 3542,
    avgTimeOnPage: "3m 12s",
    bounceRate: "35.7%",
  },
  {
    path: "/features",
    title: "Features",
    views: 3764,
    uniqueViews: 2891,
    avgTimeOnPage: "2m 05s",
    bounceRate: "31.4%",
  },
  {
    path: "/about",
    title: "About Us",
    views: 2953,
    uniqueViews: 2340,
    avgTimeOnPage: "1m 47s",
    bounceRate: "44.8%",
  },
  {
    path: "/docs",
    title: "Documentation",
    views: 2641,
    uniqueViews: 1987,
    avgTimeOnPage: "4m 33s",
    bounceRate: "22.6%",
  },
  {
    path: "/contact",
    title: "Contact",
    views: 1829,
    uniqueViews: 1524,
    avgTimeOnPage: "1m 10s",
    bounceRate: "51.2%",
  },
  {
    path: "/careers",
    title: "Careers",
    views: 1204,
    uniqueViews: 978,
    avgTimeOnPage: "2m 52s",
    bounceRate: "38.9%",
  },
];

export const geoData: GeoData[] = [
  { country: "United Kingdom", visitors: 4621, percentage: "36.0%" },
  { country: "United States", visitors: 3084, percentage: "24.0%" },
  { country: "Germany", visitors: 1670, percentage: "13.0%" },
  { country: "France", visitors: 1156, percentage: "9.0%" },
  { country: "Netherlands", visitors: 899, percentage: "7.0%" },
  { country: "Ireland", visitors: 771, percentage: "6.0%" },
];

export const alerts: AlertItem[] = [
  {
    id: "alert-1",
    type: "anomaly",
    message: "Unusual spike in traffic from Brazil detected — 340% above the daily average.",
    severity: "warning",
    time: "12 minutes ago",
  },
  {
    id: "alert-2",
    type: "threshold",
    message: "Bounce rate on /pricing exceeded the 40% threshold (currently 43.1%).",
    severity: "critical",
    time: "1 hour ago",
  },
  {
    id: "alert-3",
    type: "trend",
    message: "Organic traffic has increased steadily for 7 consecutive days.",
    severity: "info",
    time: "3 hours ago",
  },
  {
    id: "alert-4",
    type: "anomaly",
    message: "Server response time spiked to 2.4s on /api/checkout between 14:00–14:15 UTC.",
    severity: "critical",
    time: "5 hours ago",
  },
  {
    id: "alert-5",
    type: "threshold",
    message: "Monthly page-view target of 50,000 is 96% complete with 8 days remaining.",
    severity: "info",
    time: "1 day ago",
  },
];

export const dataSources: DataSource[] = [
  {
    name: "Google Analytics",
    status: "connected",
    lastSync: "2 minutes ago",
    records: 148293,
  },
  {
    name: "Stripe",
    status: "connected",
    lastSync: "15 minutes ago",
    records: 8742,
  },
  {
    name: "Mailchimp",
    status: "connected",
    lastSync: "1 hour ago",
    records: 24510,
  },
  {
    name: "HubSpot",
    status: "disconnected",
    lastSync: "3 days ago",
    records: 5230,
  },
  {
    name: "Shopify",
    status: "connected",
    lastSync: "30 minutes ago",
    records: 31045,
  },
];
