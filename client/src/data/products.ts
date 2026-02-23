import {
  Package,
  Users,
  UtensilsCrossed,
  UserCog,
  CalendarCheck,
  ShoppingCart,
  KanbanSquare,
  BarChart3,
  HeartPulse,
  MessageSquareText,
  Building2,
  Scale,
  Receipt,
  ShieldCheck,
  MapPin,
  Leaf,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProductCategory =
  | "All"
  | "Retail & Logistics"
  | "Food & Beverage"
  | "Healthcare"
  | "General Business"
  | "Customer Management"
  | "Analytics & Data"
  | "Compliance & Finance"
  | "Property & Construction"
  | "Professional Services";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  industries: string[];
  description: string;
  features: string[];
  aiCapabilities: string[];
  benefits: { label: string; value: string; desc: string }[];
  icon: LucideIcon;
  gradient: string;
  bgGradient: string;
  accentColor: string;
  useCases: string[];
  techStack: string[];
  demoUrl?: string;
}

export const categories: ProductCategory[] = [
  "All",
  "Retail & Logistics",
  "Food & Beverage",
  "Healthcare",
  "General Business",
  "Customer Management",
  "Analytics & Data",
  "Compliance & Finance",
  "Property & Construction",
  "Professional Services",
];

export const products: Product[] = [
  {
    id: "inventory-management",
    name: "Inventory Management",
    tagline: "Forging Order from Chaos",
    category: "Retail & Logistics",
    industries: ["Retail", "Warehousing", "Supply Chain", "E-commerce"],
    description:
      "A comprehensive inventory system with AI-powered demand forecasting, automated reorder points, and real-time stock tracking across multiple locations. Eliminate stockouts and overstock with intelligent automation.",
    features: [
      "Real-time multi-location stock tracking",
      "Barcode & QR code scanning",
      "Purchase order automation",
      "Supplier management portal",
      "Stock transfer & warehouse mapping",
      "Expiry date & batch tracking",
    ],
    aiCapabilities: [
      "Demand forecasting with seasonal trend analysis",
      "Intelligent auto-reorder based on lead times & velocity",
      "Anomaly detection for shrinkage & discrepancies",
    ],
    benefits: [
      { label: "Stock Accuracy", value: "99.5%", desc: "Real-time precision" },
      { label: "Overstock", value: "-40%", desc: "Reduced carrying costs" },
      { label: "Reorder Time", value: "-70%", desc: "Automated purchasing" },
      { label: "Stockouts", value: "-85%", desc: "Predictive prevention" },
    ],
    icon: Package,
    gradient: "from-amber-500 via-orange-500 to-yellow-500",
    bgGradient: "from-amber-500/10 via-orange-500/10 to-yellow-500/10",
    accentColor: "#f59e0b",
    useCases: [
      "Multi-branch retail chains needing unified stock visibility",
      "E-commerce businesses managing warehouse operations",
      "Food & beverage suppliers tracking perishable goods",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "REST API"],
    demoUrl: "/demo/inventory",
  },
  {
    id: "crm-web-app",
    name: "CRM Web App",
    tagline: "Relationships, Reimagined",
    category: "Customer Management",
    industries: ["Sales Teams", "Professional Services", "Agencies", "SaaS"],
    description:
      "An intelligent CRM that goes beyond contact management. AI-powered lead scoring, automated follow-ups, and predictive analytics help your team close more deals and nurture lasting relationships.",
    features: [
      "Contact & company management",
      "Visual sales pipeline with drag-and-drop",
      "Email integration & tracking",
      "Automated task & follow-up workflows",
      "Custom fields & reporting",
      "Team collaboration & activity feeds",
    ],
    aiCapabilities: [
      "Predictive lead scoring based on engagement signals",
      "Sentiment analysis on customer communications",
      "Next-best-action recommendations for sales reps",
    ],
    benefits: [
      { label: "Deal Velocity", value: "+35%", desc: "Faster sales cycles" },
      { label: "Lead Conversion", value: "+50%", desc: "AI-qualified leads" },
      { label: "Admin Time", value: "-60%", desc: "Automated data entry" },
      { label: "Revenue Growth", value: "+28%", desc: "Pipeline optimization" },
    ],
    icon: Users,
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    bgGradient: "from-blue-500/10 via-indigo-500/10 to-violet-500/10",
    accentColor: "#3b82f6",
    useCases: [
      "B2B sales teams managing complex deal pipelines",
      "Agencies tracking client projects and renewals",
      "Service businesses nurturing long-term relationships",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "SendGrid", "Stripe"],
    demoUrl: "/demo/crm",
  },
  {
    id: "restaurant-management",
    name: "Restaurant Management",
    tagline: "The Kitchen's Command Centre",
    category: "Food & Beverage",
    industries: ["Restaurants", "Cafes", "Food Trucks", "Catering"],
    description:
      "A complete restaurant operations platform covering POS, table management, kitchen display, and inventory. AI optimises staffing, reduces food waste, and maximises menu profitability.",
    features: [
      "Point-of-sale with split billing",
      "Table management & reservations",
      "Kitchen display system (KDS)",
      "Menu engineering & costing",
      "Supplier ordering & stock control",
      "Customer loyalty programme",
    ],
    aiCapabilities: [
      "Predictive staffing based on covers forecast",
      "Food waste reduction through demand analysis",
      "Menu optimisation with profitability scoring",
    ],
    benefits: [
      { label: "Food Waste", value: "-30%", desc: "Predictive ordering" },
      { label: "Table Turnover", value: "+22%", desc: "Smart seating" },
      { label: "Labour Costs", value: "-18%", desc: "Optimal scheduling" },
      { label: "Avg. Spend", value: "+15%", desc: "Menu intelligence" },
    ],
    icon: UtensilsCrossed,
    gradient: "from-red-500 via-rose-500 to-pink-500",
    bgGradient: "from-red-500/10 via-rose-500/10 to-pink-500/10",
    accentColor: "#ef4444",
    useCases: [
      "Independent restaurants seeking integrated operations",
      "Multi-location chains needing centralised control",
      "Cloud kitchens optimising delivery workflows",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "WebSockets", "Stripe"],
    demoUrl: "/demo/restaurant",
  },
  {
    id: "hr-employee-management",
    name: "HR & Employee Management",
    tagline: "Empowering Your Greatest Asset",
    category: "General Business",
    industries: ["SMEs (10-200 employees)", "Startups", "Agencies", "Retail"],
    description:
      "Streamline your entire employee lifecycle from onboarding to offboarding. AI-driven scheduling, performance insights, and attrition prediction help you build a resilient, engaged workforce.",
    features: [
      "Employee self-service portal",
      "Leave & absence management",
      "Shift scheduling & time tracking",
      "Performance reviews & goals",
      "Document management & e-signatures",
      "Payroll integration ready",
    ],
    aiCapabilities: [
      "Attrition risk prediction with early warning alerts",
      "Intelligent shift scheduling based on demand patterns",
      "Performance trend analysis and coaching recommendations",
    ],
    benefits: [
      { label: "HR Admin", value: "-55%", desc: "Automated workflows" },
      { label: "Retention", value: "+30%", desc: "Early intervention" },
      { label: "Scheduling", value: "-80%", desc: "Auto-generated rotas" },
      { label: "Compliance", value: "100%", desc: "Audit-ready records" },
    ],
    icon: UserCog,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    bgGradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
    accentColor: "#8b5cf6",
    useCases: [
      "Growing SMEs replacing spreadsheet-based HR",
      "Multi-site businesses managing distributed teams",
      "Agencies juggling contractor and employee workflows",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "DocuSign API", "REST API"],
  },
  {
    id: "appointment-booking",
    name: "Appointment & Booking System",
    tagline: "Your Calendar, Perfected",
    category: "Healthcare",
    industries: ["Healthcare", "Salons", "Consultancies", "Fitness"],
    description:
      "A smart booking platform that fills your calendar intelligently. AI-powered scheduling minimises gaps, predicts no-shows, and automatically sends reminders to keep your business running at full capacity.",
    features: [
      "Online booking with real-time availability",
      "Multi-provider calendar management",
      "Automated SMS & email reminders",
      "Waiting list management",
      "Payment & deposit collection",
      "Customer history & preferences",
    ],
    aiCapabilities: [
      "Smart scheduling to minimise gaps and maximise utilisation",
      "No-show prediction with proactive overbooking",
      "Dynamic pricing based on demand patterns",
    ],
    benefits: [
      { label: "No-Shows", value: "-65%", desc: "Predictive management" },
      { label: "Utilisation", value: "+40%", desc: "Gap-free scheduling" },
      { label: "Bookings", value: "+50%", desc: "24/7 online access" },
      { label: "Admin Time", value: "-75%", desc: "Self-service booking" },
    ],
    icon: CalendarCheck,
    gradient: "from-emerald-400 via-teal-500 to-green-500",
    bgGradient: "from-emerald-500/10 via-teal-500/10 to-green-500/10",
    accentColor: "#10b981",
    useCases: [
      "Private clinics managing patient appointments",
      "Beauty salons with multi-practitioner booking",
      "Consulting firms scheduling client meetings",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Twilio", "Stripe"],
    demoUrl: "/demo/booking",
  },
  {
    id: "ecommerce-platform",
    name: "E-commerce Platform",
    tagline: "Commerce Without Limits",
    category: "Retail & Logistics",
    industries: ["Direct-to-Consumer", "Retail", "Wholesale", "Marketplace"],
    description:
      "A high-performance e-commerce platform with AI-driven personalisation, dynamic pricing, and conversion optimisation. Built to scale from your first sale to millions in revenue.",
    features: [
      "Product catalogue with variants & bundles",
      "Secure checkout with multiple payment gateways",
      "Order management & fulfilment",
      "Customer accounts & wishlists",
      "SEO-optimised product pages",
      "Multi-currency & tax compliance",
    ],
    aiCapabilities: [
      "Personalised product recommendations per visitor",
      "Dynamic pricing based on demand, competition & margin",
      "Churn prediction with automated win-back campaigns",
    ],
    benefits: [
      { label: "Conversion", value: "+45%", desc: "Personalised journeys" },
      { label: "AOV", value: "+28%", desc: "Smart upselling" },
      { label: "Page Speed", value: "<1s", desc: "Edge-cached delivery" },
      { label: "Cart Recovery", value: "+35%", desc: "AI-timed nudges" },
    ],
    icon: ShoppingCart,
    gradient: "from-cyan-400 via-sky-500 to-blue-500",
    bgGradient: "from-cyan-500/10 via-sky-500/10 to-blue-500/10",
    accentColor: "#06b6d4",
    useCases: [
      "DTC brands launching their online store",
      "Wholesalers adding a B2B ordering portal",
      "Multi-vendor marketplaces needing seller management",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Vercel"],
  },
  {
    id: "project-management",
    name: "Project Management",
    tagline: "From Vision to Victory",
    category: "General Business",
    industries: ["Agencies", "Development Teams", "Construction", "Events"],
    description:
      "A collaborative project management tool with AI-powered timeline prediction, workload balancing, and risk flagging. Keep every project on track and every team member aligned.",
    features: [
      "Kanban boards, Gantt charts & list views",
      "Task dependencies & milestones",
      "Time tracking & budgeting",
      "File sharing & comments",
      "Client portal with progress visibility",
      "Resource allocation dashboard",
    ],
    aiCapabilities: [
      "Timeline prediction based on historical velocity",
      "Workload balancing across team capacity",
      "Risk flagging for scope creep and deadline slippage",
    ],
    benefits: [
      { label: "On-Time", value: "+40%", desc: "Predictive scheduling" },
      { label: "Utilisation", value: "+30%", desc: "Balanced workloads" },
      { label: "Overhead", value: "-50%", desc: "Automated updates" },
      { label: "Visibility", value: "100%", desc: "Real-time dashboards" },
    ],
    icon: KanbanSquare,
    gradient: "from-orange-400 via-amber-500 to-yellow-500",
    bgGradient: "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
    accentColor: "#f97316",
    useCases: [
      "Agencies managing multiple client projects simultaneously",
      "Development teams tracking sprints and releases",
      "Event planners coordinating vendors and timelines",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "WebSockets", "REST API"],
  },
  {
    id: "analytics-dashboard",
    name: "Analytics Dashboard",
    tagline: "See Everything. Miss Nothing.",
    category: "Analytics & Data",
    industries: ["Any Data-Driven SME", "Marketing Teams", "Operations", "Finance"],
    description:
      "Transform raw data into actionable intelligence with beautiful, real-time dashboards. Ask questions in plain English and get instant visual answers powered by AI.",
    features: [
      "Drag-and-drop dashboard builder",
      "50+ chart types and visualisations",
      "Multi-source data connectors",
      "Scheduled reports & alerts",
      "Role-based access control",
      "Embedded analytics for client portals",
    ],
    aiCapabilities: [
      "Anomaly detection with automated root-cause analysis",
      "Natural language queries — ask questions, get charts",
      "Predictive insights with confidence intervals",
    ],
    benefits: [
      { label: "Insights", value: "10x", desc: "Faster data to decision" },
      { label: "Report Time", value: "-90%", desc: "Automated generation" },
      { label: "Data Sources", value: "50+", desc: "Unified connectors" },
      { label: "Query Speed", value: "<100ms", desc: "Real-time response" },
    ],
    icon: BarChart3,
    gradient: "from-indigo-500 via-blue-500 to-violet-500",
    bgGradient: "from-indigo-500/10 via-blue-500/10 to-violet-500/10",
    accentColor: "#6366f1",
    useCases: [
      "Marketing teams tracking campaign ROI across channels",
      "Operations managers monitoring KPIs in real time",
      "Finance teams building automated reporting pipelines",
    ],
    techStack: ["React", "D3.js", "Node.js", "PostgreSQL", "Apache Kafka"],
    demoUrl: "/demo/analytics",
  },
  {
    id: "clinic-patient-management",
    name: "Clinic & Patient Management",
    tagline: "Care, Elevated by Intelligence",
    category: "Healthcare",
    industries: ["Private Clinics", "Dental", "Physiotherapy", "Veterinary"],
    description:
      "A GDPR-compliant clinical management system designed for private practices. From patient records to prescription tracking, AI assists clinicians with risk scoring and triage prioritisation.",
    features: [
      "Electronic health records (EHR)",
      "Appointment scheduling & reminders",
      "Prescription & medication tracking",
      "Clinical notes with templates",
      "Billing & insurance claims",
      "GDPR-compliant data handling",
    ],
    aiCapabilities: [
      "Triage assistance with symptom-based prioritisation",
      "Patient risk scoring for proactive interventions",
      "Prescription validation and interaction checking",
    ],
    benefits: [
      { label: "Admin Time", value: "-60%", desc: "Automated records" },
      { label: "Patient Safety", value: "+95%", desc: "Interaction alerts" },
      { label: "Wait Times", value: "-45%", desc: "Smart scheduling" },
      { label: "Compliance", value: "100%", desc: "GDPR audit-ready" },
    ],
    icon: HeartPulse,
    gradient: "from-pink-500 via-rose-500 to-red-400",
    bgGradient: "from-pink-500/10 via-rose-500/10 to-red-400/10",
    accentColor: "#ec4899",
    useCases: [
      "Private GP practices digitising patient workflows",
      "Dental clinics managing treatment plans and imaging",
      "Physiotherapy clinics tracking rehabilitation progress",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "HL7 FHIR", "AWS"],
  },
  {
    id: "ai-voice-chat",
    name: "AI Voice & Chat Assistant",
    tagline: "Your Business, Always Listening",
    category: "Customer Management",
    industries: ["Any Customer-Facing Business", "E-commerce", "Hospitality", "Support Teams"],
    description:
      "Deploy intelligent voice and chat agents that handle customer enquiries 24/7 in multiple languages. Context-aware AI escalates complex issues to humans seamlessly, ensuring no customer is left waiting.",
    features: [
      "Multi-channel deployment (web, WhatsApp, phone)",
      "Multi-language voice & text support",
      "Knowledge base integration",
      "Live handoff to human agents",
      "Conversation analytics & sentiment tracking",
      "Custom voice persona & branding",
    ],
    aiCapabilities: [
      "Context-aware responses with memory across sessions",
      "Multi-language real-time voice synthesis",
      "Intelligent escalation based on frustration detection",
    ],
    benefits: [
      { label: "Response Time", value: "<5s", desc: "Instant first reply" },
      { label: "Resolution", value: "78%", desc: "Without human agent" },
      { label: "Availability", value: "24/7", desc: "Never offline" },
      { label: "Cost Saving", value: "-65%", desc: "Vs. full support team" },
    ],
    icon: MessageSquareText,
    gradient: "from-teal-400 via-emerald-500 to-green-500",
    bgGradient: "from-teal-500/10 via-emerald-500/10 to-green-500/10",
    accentColor: "#14b8a6",
    useCases: [
      "E-commerce stores automating order status & returns",
      "Hotels handling booking enquiries around the clock",
      "Service businesses qualifying and routing inbound leads",
    ],
    techStack: ["React", "Python", "OpenAI", "Twilio", "WebSockets"],
  },

  // EU/UK Market Products

  {
    id: "property-management",
    name: "Property & Estate Management",
    tagline: "Every Tenancy, Under Control",
    category: "Property & Construction",
    industries: ["Estate Agents", "Letting Agencies", "Property Managers", "Landlords"],
    description:
      "A comprehensive property management platform built for the UK lettings market. AI-powered tenant matching, predictive maintenance, and automated compliance with deposit protection and Renters Reform regulations.",
    features: [
      "Property portfolio dashboard",
      "Tenant onboarding & referencing",
      "Rent collection & arrears tracking",
      "Maintenance request management",
      "Deposit protection scheme integration",
      "Regulatory compliance checklists",
    ],
    aiCapabilities: [
      "Intelligent tenant matching with risk scoring",
      "Predictive maintenance scheduling to prevent costly repairs",
      "Early arrears detection with automated payment plan suggestions",
    ],
    benefits: [
      { label: "Void Periods", value: "-40%", desc: "Faster tenant matching" },
      { label: "Arrears", value: "-55%", desc: "Early detection" },
      { label: "Maintenance", value: "-30%", desc: "Predictive repairs" },
      { label: "Compliance", value: "100%", desc: "UK regulation ready" },
    ],
    icon: Building2,
    gradient: "from-slate-400 via-gray-500 to-zinc-500",
    bgGradient: "from-slate-500/10 via-gray-500/10 to-zinc-500/10",
    accentColor: "#64748b",
    useCases: [
      "Letting agencies managing 50+ properties across regions",
      "Portfolio landlords tracking rent and maintenance",
      "Estate agents offering full property management services",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "GOV.UK APIs"],
  },
  {
    id: "legal-practice",
    name: "Legal Practice Management",
    tagline: "Justice, Delivered Efficiently",
    category: "Professional Services",
    industries: ["Law Firms", "Conveyancing", "Solo Practitioners", "Legal Departments"],
    description:
      "A cloud-based practice management system for UK law firms. AI-powered document generation, intelligent time tracking, and case outcome prediction help solicitors spend more time on billable work.",
    features: [
      "Case & matter management",
      "Time recording & billing",
      "Document management & templates",
      "Client portal with secure messaging",
      "Conflict of interest checking",
      "SRA compliance tracking",
    ],
    aiCapabilities: [
      "Intelligent document drafting from case data",
      "Case outcome prediction based on historical data",
      "Automated time entry from calendar & email activity",
    ],
    benefits: [
      { label: "Billable Hours", value: "+35%", desc: "Less admin overhead" },
      { label: "Doc Drafting", value: "-70%", desc: "AI-assisted creation" },
      { label: "Client Comms", value: "+50%", desc: "Portal self-service" },
      { label: "Compliance", value: "100%", desc: "SRA audit-ready" },
    ],
    icon: Scale,
    gradient: "from-rose-400 via-pink-500 to-fuchsia-500",
    bgGradient: "from-rose-500/10 via-pink-500/10 to-fuchsia-500/10",
    accentColor: "#f43f5e",
    useCases: [
      "Small law firms modernising from legacy systems",
      "Conveyancing practices streamlining property transactions",
      "Solo practitioners managing cases and billing efficiently",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "DocuSign", "AWS"],
  },
  {
    id: "accounting-tax-mtd",
    name: "Accounting & Tax (MTD)",
    tagline: "Tax Compliance on Autopilot",
    category: "Compliance & Finance",
    industries: ["Small Businesses", "Sole Traders", "Accountancy Practices", "Freelancers"],
    description:
      "An MTD-compliant accounting platform that automates bookkeeping, VAT returns, and tax planning. AI-powered receipt scanning, cash flow forecasting, and HMRC integration make compliance effortless.",
    features: [
      "MTD-compliant VAT return filing",
      "Bank feed integration & reconciliation",
      "Invoice & expense management",
      "Multi-currency support",
      "Client collaboration portal",
      "HMRC API direct submission",
    ],
    aiCapabilities: [
      "Receipt OCR with automatic expense categorisation",
      "Tax optimisation recommendations by business type",
      "Cash flow forecasting with seasonal trend analysis",
    ],
    benefits: [
      { label: "Filing Time", value: "-80%", desc: "Automated returns" },
      { label: "Accuracy", value: "99.9%", desc: "AI-verified entries" },
      { label: "Tax Savings", value: "+15%", desc: "Optimisation tips" },
      { label: "MTD", value: "100%", desc: "Full HMRC compliance" },
    ],
    icon: Receipt,
    gradient: "from-lime-400 via-green-500 to-emerald-500",
    bgGradient: "from-lime-500/10 via-green-500/10 to-emerald-500/10",
    accentColor: "#84cc16",
    useCases: [
      "Sole traders filing quarterly MTD returns",
      "Small businesses automating bookkeeping and VAT",
      "Accountancy practices managing multiple client filings",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "HMRC API", "Plaid"],
  },
  {
    id: "compliance-regulatory",
    name: "Compliance & Regulatory Hub",
    tagline: "Navigate Regulation with Confidence",
    category: "Compliance & Finance",
    industries: ["Finance", "Legal", "Recruitment", "E-commerce", "Any Regulated Industry"],
    description:
      "A centralised compliance management platform monitoring GDPR, MTD, SECR, and industry-specific regulations. AI identifies gaps, tracks deadlines, and generates audit-ready documentation automatically.",
    features: [
      "Regulatory change monitoring & alerts",
      "GDPR data mapping & DPIA management",
      "Policy document library & versioning",
      "Compliance task management & deadlines",
      "Audit trail & evidence collection",
      "Risk register with heat mapping",
    ],
    aiCapabilities: [
      "Automated regulatory scanning with business-specific filtering",
      "Compliance gap analysis with prioritised action plans",
      "Intelligent report generation for regulators and auditors",
    ],
    benefits: [
      { label: "Compliance", value: "100%", desc: "Always audit-ready" },
      { label: "Risk", value: "-70%", desc: "Proactive gap detection" },
      { label: "Reporting", value: "-85%", desc: "Auto-generated docs" },
      { label: "Penalties", value: "Zero", desc: "No regulatory fines" },
    ],
    icon: ShieldCheck,
    gradient: "from-sky-400 via-blue-500 to-indigo-500",
    bgGradient: "from-sky-500/10 via-blue-500/10 to-indigo-500/10",
    accentColor: "#0ea5e9",
    useCases: [
      "Financial services firms managing FCA compliance",
      "E-commerce businesses ensuring GDPR data handling",
      "Growing companies preparing for SECR reporting thresholds",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "GOV.UK APIs", "AWS"],
  },
  {
    id: "field-service",
    name: "Field Service & Workforce",
    tagline: "Dispatch Smarter. Arrive Faster.",
    category: "Retail & Logistics",
    industries: ["HVAC", "Plumbing", "Electrical", "Cleaning", "Maintenance"],
    description:
      "Coordinate your mobile workforce with AI-optimised routing, real-time job tracking, and automated invoicing. Reduce travel time, increase first-time fix rates, and delight customers with accurate ETAs.",
    features: [
      "Job scheduling & dispatch board",
      "Mobile app for field engineers",
      "Real-time GPS tracking & ETAs",
      "Digital forms & photo capture",
      "Automated invoicing & payments",
      "Parts & inventory management",
    ],
    aiCapabilities: [
      "Route optimisation cutting travel time by 15%+",
      "Predictive job duration based on historical data",
      "Safety compliance monitoring with incident detection",
    ],
    benefits: [
      { label: "Travel Time", value: "-25%", desc: "Optimised routing" },
      { label: "First Fix", value: "+35%", desc: "Right parts, right time" },
      { label: "Invoicing", value: "-90%", desc: "Same-day automation" },
      { label: "Jobs/Day", value: "+20%", desc: "Efficient scheduling" },
    ],
    icon: MapPin,
    gradient: "from-yellow-400 via-amber-500 to-orange-500",
    bgGradient: "from-yellow-500/10 via-amber-500/10 to-orange-500/10",
    accentColor: "#eab308",
    useCases: [
      "HVAC companies managing installation and maintenance visits",
      "Cleaning services coordinating daily routes and teams",
      "Telecoms engineers handling field installations",
    ],
    techStack: ["React", "React Native", "Node.js", "PostgreSQL", "Google Maps API"],
  },
  {
    id: "energy-sustainability",
    name: "Energy & Sustainability (SECR)",
    tagline: "Measure. Reduce. Report.",
    category: "Analytics & Data",
    industries: ["Manufacturing", "Logistics", "Hospitality", "Retail", "Any Growing SME"],
    description:
      "An SECR-compliant energy management and sustainability reporting platform. AI monitors energy consumption, calculates emissions, and identifies savings opportunities across your operations.",
    features: [
      "Energy consumption monitoring & IoT integration",
      "Scope 1, 2 & 3 emissions calculation",
      "SECR & ESG report generation",
      "Carbon reduction target tracking",
      "Utility cost analysis & benchmarking",
      "Sustainability action plan builder",
    ],
    aiCapabilities: [
      "Automated emissions calculation from multiple data sources",
      "Energy anomaly detection and waste identification",
      "Regulatory readiness prediction as your business grows",
    ],
    benefits: [
      { label: "Energy Costs", value: "-20%", desc: "AI-identified savings" },
      { label: "SECR Filing", value: "-90%", desc: "Automated reporting" },
      { label: "Carbon", value: "-25%", desc: "Targeted reductions" },
      { label: "Compliance", value: "100%", desc: "SECR & ESG ready" },
    ],
    icon: Leaf,
    gradient: "from-green-400 via-emerald-500 to-teal-500",
    bgGradient: "from-green-500/10 via-emerald-500/10 to-teal-500/10",
    accentColor: "#22c55e",
    useCases: [
      "Manufacturing firms approaching SECR reporting thresholds",
      "Hotel chains tracking energy across multiple properties",
      "Logistics companies monitoring fleet emissions",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "IoT Sensors", "REST API"],
  },
];
