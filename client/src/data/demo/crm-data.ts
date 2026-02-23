// CRM Dashboard Demo — Mock Data
// All data is fictional and for demonstration purposes only.

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

export interface CrmStat {
  label: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
}

export interface Contact {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: "lead" | "prospect" | "customer" | "churned";
  lastContact: string;
  dealValue: number;
}

export interface Deal {
  id: string;
  name: string;
  company: string;
  value: number;
  stage:
    | "qualification"
    | "proposal"
    | "negotiation"
    | "closed-won"
    | "closed-lost";
  probability: number;
  owner: string;
  closeDate: string;
}

export interface Activity {
  id: string;
  type: "email" | "call" | "meeting" | "note";
  description: string;
  contact: string;
  time: string;
}

export interface Task {
  id: string;
  title: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
  assignee: string;
  completed: boolean;
}

export interface PipelineStage {
  name: string;
  deals: number;
  value: string;
}

export interface RevenueMonth {
  month: string;
  revenue: number;
  target: number;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const crmStats: Record<string, CrmStat> = {
  totalContacts: {
    label: "Total Contacts",
    value: "2,847",
    change: "+12.5% from last month",
    changeType: "positive",
  },
  openDeals: {
    label: "Open Deals",
    value: "34",
    change: "+3 new this week",
    changeType: "positive",
  },
  revenueThisMonth: {
    label: "Revenue This Month",
    value: "£128,400",
    change: "+18.2% from last month",
    changeType: "positive",
  },
  conversionRate: {
    label: "Conversion Rate",
    value: "24%",
    change: "-1.8% from last month",
    changeType: "negative",
  },
};

export const contacts: Contact[] = [
  {
    id: "c-001",
    name: "James Whitfield",
    company: "Meridian Tech",
    email: "james@meridiantech.co.uk",
    phone: "+44 20 7946 0123",
    status: "customer",
    lastContact: "2026-02-20",
    dealValue: 45000,
  },
  {
    id: "c-002",
    name: "Sophie Chen",
    company: "Aether Studios",
    email: "sophie.chen@aetherstudios.com",
    phone: "+44 20 7946 0456",
    status: "prospect",
    lastContact: "2026-02-19",
    dealValue: 28000,
  },
  {
    id: "c-003",
    name: "Oliver Barrett",
    company: "Nexus Financial",
    email: "o.barrett@nexusfin.co.uk",
    phone: "+44 20 7946 0789",
    status: "lead",
    lastContact: "2026-02-18",
    dealValue: 12000,
  },
  {
    id: "c-004",
    name: "Amara Osei",
    company: "Pulse Digital",
    email: "amara@pulsedigital.io",
    phone: "+44 20 7946 1012",
    status: "customer",
    lastContact: "2026-02-21",
    dealValue: 67000,
  },
  {
    id: "c-005",
    name: "Daniel Russo",
    company: "ClearPath Logistics",
    email: "d.russo@clearpath.com",
    phone: "+44 20 7946 1345",
    status: "prospect",
    lastContact: "2026-02-17",
    dealValue: 34000,
  },
  {
    id: "c-006",
    name: "Emily Saunders",
    company: "Greenline Energy",
    email: "emily.s@greenline.co.uk",
    phone: "+44 20 7946 1678",
    status: "churned",
    lastContact: "2026-01-15",
    dealValue: 0,
  },
  {
    id: "c-007",
    name: "Raj Patel",
    company: "Summit Consulting",
    email: "raj.patel@summitconsulting.com",
    phone: "+44 20 7946 1901",
    status: "customer",
    lastContact: "2026-02-22",
    dealValue: 89000,
  },
  {
    id: "c-008",
    name: "Fiona Gallagher",
    company: "Anchor Media",
    email: "fiona@anchormedia.co.uk",
    phone: "+44 20 7946 2234",
    status: "lead",
    lastContact: "2026-02-16",
    dealValue: 15000,
  },
  {
    id: "c-009",
    name: "Marcus Lind",
    company: "Evercore Systems",
    email: "m.lind@evercore.io",
    phone: "+44 20 7946 2567",
    status: "prospect",
    lastContact: "2026-02-14",
    dealValue: 52000,
  },
  {
    id: "c-010",
    name: "Hannah Brooks",
    company: "Prism Healthcare",
    email: "hannah.b@prismhc.co.uk",
    phone: "+44 20 7946 2890",
    status: "churned",
    lastContact: "2025-12-20",
    dealValue: 0,
  },
];

export const deals: Deal[] = [
  {
    id: "d-001",
    name: "Enterprise Platform Licence",
    company: "Meridian Tech",
    value: 45000,
    stage: "negotiation",
    probability: 75,
    owner: "Emma Roberts",
    closeDate: "2026-03-15",
  },
  {
    id: "d-002",
    name: "Creative Suite Subscription",
    company: "Aether Studios",
    value: 28000,
    stage: "proposal",
    probability: 50,
    owner: "Tom Bradley",
    closeDate: "2026-03-28",
  },
  {
    id: "d-003",
    name: "Financial Analytics Module",
    company: "Nexus Financial",
    value: 12000,
    stage: "qualification",
    probability: 20,
    owner: "Emma Roberts",
    closeDate: "2026-04-10",
  },
  {
    id: "d-004",
    name: "Digital Transformation Package",
    company: "Pulse Digital",
    value: 67000,
    stage: "closed-won",
    probability: 100,
    owner: "Sarah Kim",
    closeDate: "2026-02-10",
  },
  {
    id: "d-005",
    name: "Logistics Automation Suite",
    company: "ClearPath Logistics",
    value: 34000,
    stage: "proposal",
    probability: 45,
    owner: "Tom Bradley",
    closeDate: "2026-04-01",
  },
  {
    id: "d-006",
    name: "Consulting Retainer Agreement",
    company: "Summit Consulting",
    value: 89000,
    stage: "negotiation",
    probability: 80,
    owner: "Emma Roberts",
    closeDate: "2026-03-05",
  },
  {
    id: "d-007",
    name: "Media Analytics Dashboard",
    company: "Anchor Media",
    value: 15000,
    stage: "qualification",
    probability: 15,
    owner: "Sarah Kim",
    closeDate: "2026-04-20",
  },
  {
    id: "d-008",
    name: "Healthcare Data Platform",
    company: "Prism Healthcare",
    value: 52000,
    stage: "closed-lost",
    probability: 0,
    owner: "Tom Bradley",
    closeDate: "2026-01-30",
  },
];

export const activities: Activity[] = [
  {
    id: "a-001",
    type: "email",
    description: "Sent proposal follow-up to Sophie Chen",
    contact: "Sophie Chen",
    time: "2 hours ago",
  },
  {
    id: "a-002",
    type: "call",
    description: "Discovery call with Oliver Barrett — 30 min",
    contact: "Oliver Barrett",
    time: "3 hours ago",
  },
  {
    id: "a-003",
    type: "meeting",
    description: "Quarterly review with Raj Patel",
    contact: "Raj Patel",
    time: "5 hours ago",
  },
  {
    id: "a-004",
    type: "note",
    description: "Updated deal notes for Meridian Tech negotiation",
    contact: "James Whitfield",
    time: "6 hours ago",
  },
  {
    id: "a-005",
    type: "email",
    description: "Sent pricing breakdown to Daniel Russo",
    contact: "Daniel Russo",
    time: "8 hours ago",
  },
  {
    id: "a-006",
    type: "call",
    description: "Cold call with Fiona Gallagher — qualified lead",
    contact: "Fiona Gallagher",
    time: "1 day ago",
  },
  {
    id: "a-007",
    type: "meeting",
    description: "Product demo for ClearPath Logistics team",
    contact: "Daniel Russo",
    time: "1 day ago",
  },
  {
    id: "a-008",
    type: "email",
    description: "Sent contract draft to Summit Consulting",
    contact: "Raj Patel",
    time: "2 days ago",
  },
  {
    id: "a-009",
    type: "note",
    description: "Logged churn reason for Hannah Brooks — budget constraints",
    contact: "Hannah Brooks",
    time: "3 days ago",
  },
  {
    id: "a-010",
    type: "call",
    description: "Follow-up call with Marcus Lind on Evercore proposal",
    contact: "Marcus Lind",
    time: "3 days ago",
  },
];

export const tasks: Task[] = [
  {
    id: "t-001",
    title: "Prepare proposal for Aether Studios",
    dueDate: "2026-02-22",
    priority: "high",
    assignee: "Emma Roberts",
    completed: false,
  },
  {
    id: "t-002",
    title: "Follow up with Nexus Financial lead",
    dueDate: "2026-02-23",
    priority: "medium",
    assignee: "Emma Roberts",
    completed: false,
  },
  {
    id: "t-003",
    title: "Send revised contract to Summit Consulting",
    dueDate: "2026-02-22",
    priority: "high",
    assignee: "Tom Bradley",
    completed: false,
  },
  {
    id: "t-004",
    title: "Schedule product demo for Anchor Media",
    dueDate: "2026-02-24",
    priority: "low",
    assignee: "Sarah Kim",
    completed: true,
  },
  {
    id: "t-005",
    title: "Update CRM records for Q1 pipeline",
    dueDate: "2026-02-25",
    priority: "medium",
    assignee: "Emma Roberts",
    completed: false,
  },
  {
    id: "t-006",
    title: "Review and approve ClearPath deal terms",
    dueDate: "2026-02-21",
    priority: "high",
    assignee: "Tom Bradley",
    completed: true,
  },
  {
    id: "t-007",
    title: "Call Marcus Lind to discuss Evercore timeline",
    dueDate: "2026-02-23",
    priority: "medium",
    assignee: "Sarah Kim",
    completed: false,
  },
  {
    id: "t-008",
    title: "Prepare monthly sales report for leadership",
    dueDate: "2026-02-28",
    priority: "low",
    assignee: "Emma Roberts",
    completed: false,
  },
];

export const pipelineStages: PipelineStage[] = [
  { name: "Qualification", deals: 12, value: "£145,000" },
  { name: "Proposal", deals: 8, value: "£210,000" },
  { name: "Negotiation", deals: 6, value: "£180,000" },
  { name: "Closed Won", deals: 5, value: "£320,000" },
  { name: "Closed Lost", deals: 3, value: "£95,000" },
];

export const monthlyRevenue: RevenueMonth[] = [
  { month: "Sep", revenue: 82000, target: 90000 },
  { month: "Oct", revenue: 95000, target: 95000 },
  { month: "Nov", revenue: 108000, target: 100000 },
  { month: "Dec", revenue: 91000, target: 105000 },
  { month: "Jan", revenue: 118000, target: 110000 },
  { month: "Feb", revenue: 128400, target: 115000 },
];
