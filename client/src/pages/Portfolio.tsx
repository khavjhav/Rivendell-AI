import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, Sparkles, Code, Globe, Cpu, LayoutTemplate, X, ChevronRight, Target, Users, Clock, Zap, CheckCircle2, ArrowRight, Play, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";


const projects = [
  {
    id: "nexus-ai",
    title: "Nexus AI Platform",
    category: "AI & Automation",
    shortDesc: "Enterprise AI assistant revolutionizing customer support.",
    description: "An enterprise-grade AI assistant platform that revolutionized customer support for a Fortune 500 company. We built a sophisticated natural language processing system that understands context, sentiment, and intent to provide human-like responses at scale.",
    challenge: "The client was drowning in 50,000+ daily support tickets with an average response time of 4 hours, leading to customer churn and frustrated support teams.",
    solution: "We designed a multi-layered AI system combining GPT-4 with custom fine-tuned models, integrated with their existing CRM and knowledge base.",
    results: [
      { label: "Response Time", value: "-80%", desc: "From 4 hours to 48 minutes" },
      { label: "Resolution Rate", value: "94%", desc: "First-contact resolution" },
      { label: "Cost Savings", value: "$2.4M", desc: "Annual operational savings" },
      { label: "CSAT Score", value: "+35%", desc: "Customer satisfaction increase" }
    ],
    tags: ["Machine Learning", "NLP", "React", "Python", "GPT-4", "Redis"],
    icon: Cpu,
    gradient: "from-amber-500 via-orange-500 to-red-500",
    bgGradient: "from-amber-500/10 via-orange-500/10 to-red-500/10",
    accentColor: "#f59e0b",
    timeline: "8 months",
    team: "6 engineers",
    featured: true
  },
  {
    id: "solara-commerce",
    title: "Solara Commerce",
    category: "Web Development",
    shortDesc: "Next-gen e-commerce with AI recommendations.",
    description: "A next-generation e-commerce platform featuring real-time inventory management, AI-powered product recommendations, and a seamless checkout experience that converts browsers into buyers.",
    challenge: "The client's legacy platform was losing 67% of users at checkout due to slow load times and a confusing multi-page process.",
    solution: "We rebuilt the entire platform using Next.js with edge caching, implemented a single-page checkout flow, and integrated ML-based recommendations.",
    results: [
      { label: "Conversion Rate", value: "+45%", desc: "Overall purchase conversion" },
      { label: "Page Speed", value: "0.8s", desc: "Time to interactive" },
      { label: "Mobile Sales", value: "+120%", desc: "Mobile revenue growth" },
      { label: "Cart Value", value: "+28%", desc: "Average order value" }
    ],
    tags: ["Next.js", "PostgreSQL", "Stripe", "Redis", "Vercel", "TailwindCSS"],
    icon: Globe,
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    bgGradient: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
    accentColor: "#10b981",
    timeline: "6 months",
    team: "5 engineers",
    featured: true
  },
  {
    id: "mindflow-app",
    title: "MindFlow",
    category: "UI/UX Design",
    shortDesc: "Meditation app with biometric integration.",
    description: "A meditation and wellness app featuring serene, intuitive interfaces, personalized mindfulness journeys, and seamless biometric integration for real-time stress management.",
    challenge: "The wellness app market is saturated with generic solutions. The client needed to stand out with a premium experience that helps users build lasting habits.",
    solution: "We crafted a calming visual language with micro-animations that guide breathing, integrated Apple HealthKit and Google Fit for biometric feedback.",
    results: [
      { label: "User Retention", value: "92%", desc: "30-day retention rate" },
      { label: "Session Length", value: "+40%", desc: "Average session duration" },
      { label: "App Rating", value: "4.9", desc: "App Store rating" },
      { label: "Daily Active", value: "85%", desc: "DAU/MAU ratio" }
    ],
    tags: ["React Native", "Firebase", "HealthKit", "Motion Design", "Lottie"],
    icon: LayoutTemplate,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    bgGradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
    accentColor: "#8b5cf6",
    timeline: "5 months",
    team: "4 designers, 3 engineers",
    featured: false
  },
  {
    id: "quantum-analytics",
    title: "Quantum Analytics",
    category: "Business Intelligence",
    shortDesc: "Real-time data visualization dashboard.",
    description: "A comprehensive analytics dashboard that transforms complex data streams into actionable insights with beautiful real-time visualizations.",
    challenge: "The client's data team was spending 20+ hours weekly creating manual reports from disparate data sources.",
    solution: "We built a unified data platform that ingests from 15+ sources, processes millions of events per second, and presents insights through an intuitive dashboard.",
    results: [
      { label: "Data Processing", value: "10x", desc: "Faster than previous solution" },
      { label: "Report Time", value: "-90%", desc: "From hours to minutes" },
      { label: "Data Sources", value: "15+", desc: "Unified integrations" },
      { label: "Query Speed", value: "<100ms", desc: "Average response time" }
    ],
    tags: ["D3.js", "Node.js", "MongoDB", "WebSockets", "Apache Kafka"],
    icon: Code,
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    bgGradient: "from-blue-500/10 via-indigo-500/10 to-violet-500/10",
    accentColor: "#3b82f6",
    timeline: "7 months",
    team: "5 engineers",
    featured: false
  },
  {
    id: "aurora-fintech",
    title: "Aurora Fintech",
    category: "Financial Technology",
    shortDesc: "Secure banking with AI fraud detection.",
    description: "A secure, modern banking platform featuring advanced AI-powered fraud detection, instant transfers, and personalized financial advice.",
    challenge: "Traditional banks were eating into the client's market share with their digital offerings. They needed a mobile-first platform with enterprise-grade security.",
    solution: "We engineered a platform with bank-grade security, real-time fraud detection using behavioral biometrics, and an AI advisor for personalized insights.",
    results: [
      { label: "Fraud Prevention", value: "99.9%", desc: "Detection accuracy" },
      { label: "Onboarding", value: "3 min", desc: "Account creation time" },
      { label: "Transfer Speed", value: "<2s", desc: "Instant transfers" },
      { label: "User Growth", value: "+200%", desc: "YoY user acquisition" }
    ],
    tags: ["Security", "Blockchain", "React", "Go", "Plaid", "AWS"],
    icon: Globe,
    gradient: "from-rose-500 via-pink-500 to-purple-500",
    bgGradient: "from-rose-500/10 via-pink-500/10 to-purple-500/10",
    accentColor: "#f43f5e",
    timeline: "10 months",
    team: "8 engineers",
    featured: false
  },
  {
    id: "echo-crm",
    title: "Echo CRM",
    category: "Business Process",
    shortDesc: "Intelligent CRM with automated workflows.",
    description: "An intelligent CRM system that automates lead scoring, streamlines pipeline management, and orchestrates personalized customer journeys at scale.",
    challenge: "Sales reps were spending 60% of their time on administrative tasks instead of selling. Lead quality was inconsistent.",
    solution: "We built an AI-powered CRM that automatically scores and routes leads, suggests optimal outreach timing, and automates repetitive tasks.",
    results: [
      { label: "Sales Efficiency", value: "+60%", desc: "Time spent selling" },
      { label: "Lead Conversion", value: "+35%", desc: "Qualified lead conversion" },
      { label: "Deal Velocity", value: "-25%", desc: "Faster sales cycles" },
      { label: "Revenue", value: "+40%", desc: "Annual revenue growth" }
    ],
    tags: ["Salesforce", "Python", "Machine Learning", "APIs", "Zapier"],
    icon: Cpu,
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    bgGradient: "from-yellow-500/10 via-orange-500/10 to-red-500/10",
    accentColor: "#eab308",
    timeline: "6 months",
    team: "4 engineers",
    featured: false
  }
];

interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  description: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string; desc: string }[];
  tags: string[];
  icon: typeof Cpu;
  gradient: string;
  bgGradient: string;
  accentColor: string;
  timeline: string;
  team: string;
  featured: boolean;
}

function ProjectCard({ project, index, onSelect }: { project: Project; index: number; onSelect: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={onSelect}
      className="group relative cursor-pointer"
      data-testid={`card-project-${project.id}`}
    >
      <div className="relative rounded-2xl overflow-hidden bg-card border border-[hsl(var(--gold)/0.1)] hover:border-[hsl(var(--gold)/0.3)] transition-all duration-500">
        {/* Animated gradient border on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}
        />

        {/* Header with animated gradient */}
        <div className={`relative h-44 sm:h-52 bg-gradient-to-br ${project.bgGradient} overflow-hidden`}>
          {/* Animated mesh background */}
          <div className="absolute inset-0 opacity-30">
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, ${project.accentColor}40 0%, transparent 50%), radial-gradient(circle at 80% 50%, ${project.accentColor}30 0%, transparent 50%)`,
                backgroundSize: "200% 200%"
              }}
            />
          </div>

          {/* Floating geometric shapes */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-6 right-6 w-20 h-20 rounded-2xl opacity-20"
            style={{ backgroundColor: project.accentColor }}
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 left-6 w-12 h-12 rounded-full opacity-15"
            style={{ backgroundColor: project.accentColor }}
          />

          {/* Center icon with pulse effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              {/* Pulse rings */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl"
                style={{ backgroundColor: `${project.accentColor}20` }}
              />
              <div
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                style={{ backgroundColor: `${project.accentColor}20` }}
              >
                <project.icon className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: project.accentColor }} />
              </div>
            </motion.div>
          </div>

          {/* Category pill */}
          <div className="absolute top-4 left-4">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-[hsl(var(--gold)/0.2)]"
            >
              <span className="text-xs font-medium text-[hsl(var(--gold))]">{project.category}</span>
            </motion.div>
          </div>

          {/* Hover overlay with CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <motion.div
              initial={{ y: 20 }}
              whileHover={{ y: 0 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--gold))] text-background font-medium text-sm"
            >
              <Play className="w-4 h-4" />
              <span>View Case Study</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif group-hover:text-gold-gradient transition-all duration-300">{project.title}</h3>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed line-clamp-2">{project.shortDesc}</p>
          </div>

          {/* Key metric highlight */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[hsl(var(--gold)/0.03)] border border-[hsl(var(--gold)/0.1)]">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${project.accentColor}15` }}>
              <TrendingUp className="w-5 h-5" style={{ color: project.accentColor }} />
            </div>
            <div>
              <span className="text-2xl font-serif text-gold-gradient">{project.results[0].value}</span>
              <span className="text-xs text-muted-foreground ml-2">{project.results[0].label}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-[hsl(var(--gold)/0.1)]">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {project.timeline}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {project.team}
              </span>
            </div>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[hsl(var(--gold))]"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeaturedProject({ project, onSelect }: { project: Project; onSelect: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onClick={onSelect}
      className="group relative cursor-pointer"
      data-testid={`card-featured-${project.id}`}
    >
      <div className="relative rounded-3xl overflow-hidden bg-card border border-[hsl(var(--gold)/0.15)] hover:border-[hsl(var(--gold)/0.4)] transition-all duration-500">
        <div className="grid md:grid-cols-2">
          {/* Visual side */}
          <div className={`relative h-64 md:h-auto md:min-h-[400px] bg-gradient-to-br ${project.bgGradient} overflow-hidden`}>
            {/* Animated background */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at 30% 70%, ${project.accentColor}40, transparent 60%)`
              }}
            />

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-32 h-32 rounded-3xl opacity-20"
              style={{ backgroundColor: project.accentColor }}
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                x: [0, 10, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-10 w-20 h-20 rounded-full opacity-15"
              style={{ backgroundColor: project.accentColor }}
            />

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -inset-4 rounded-3xl"
                  style={{ backgroundColor: `${project.accentColor}30` }}
                />
                <div
                  className="relative w-24 h-24 md:w-32 md:h-32 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                  style={{ backgroundColor: `${project.accentColor}25` }}
                >
                  <project.icon className="w-12 h-12 md:w-16 md:h-16" style={{ color: project.accentColor }} />
                </div>
              </motion.div>
            </div>

            {/* Featured badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--gold))] text-background text-xs font-semibold">
              <Sparkles className="w-3 h-3" />
              Featured
            </div>
          </div>

          {/* Content side */}
          <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center space-y-6">
            <div>
              <span className="text-xs font-medium text-[hsl(var(--gold))] uppercase tracking-widest">{project.category}</span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif mt-2 group-hover:text-gold-gradient transition-all duration-300">{project.title}</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">{project.shortDesc}</p>
            </div>

            {/* Results grid */}
            <div className="grid grid-cols-2 gap-3">
              {project.results.slice(0, 4).map((result, i) => (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-3 rounded-xl bg-[hsl(var(--gold)/0.03)] border border-[hsl(var(--gold)/0.1)]"
                >
                  <div className="text-xl sm:text-2xl font-serif text-gold-gradient">{result.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{result.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-[hsl(var(--gold)/0.05)] border border-[hsl(var(--gold)/0.1)] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-center gap-2 text-[hsl(var(--gold))] font-medium cursor-pointer pt-2"
            >
              <span>Explore Full Case Study</span>
              <ChevronRight className="w-5 h-5" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-2 sm:p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-background/95 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl my-4 rounded-3xl bg-card border border-[hsl(var(--gold)/0.2)] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`relative h-48 sm:h-56 md:h-64 bg-gradient-to-br ${project.bgGradient} overflow-hidden`}>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${project.accentColor}30, transparent 70%)`
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-white/5 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-white/10 rounded-full"
              />
              <div
                className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                style={{ backgroundColor: `${project.accentColor}25` }}
              >
                <project.icon className="w-10 h-10 md:w-12 md:h-12" style={{ color: project.accentColor }} />
              </div>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-[hsl(var(--gold)/0.2)] flex items-center justify-center text-foreground hover:text-[hsl(var(--gold))] transition-colors z-10"
            data-testid="button-close-modal"
          >
            <X className="w-5 h-5" />
          </motion.button>

          <div className="absolute bottom-4 left-6 px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-[hsl(var(--gold)/0.2)]">
            <span className="text-sm font-medium text-[hsl(var(--gold))]">{project.category}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 md:p-10 space-y-6 max-h-[60vh] overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif text-gold-gradient">{project.title}</h2>
            <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[hsl(var(--gold))]" />
                {project.timeline}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[hsl(var(--gold))]" />
                {project.team}
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground leading-relaxed"
          >
            {project.description}
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-5 rounded-2xl bg-[hsl(var(--gold)/0.03)] border border-[hsl(var(--gold)/0.1)]"
            >
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-[hsl(var(--gold))]" />
                <h3 className="font-semibold text-[hsl(var(--gold))]">The Challenge</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-5 rounded-2xl bg-[hsl(var(--gold)/0.03)] border border-[hsl(var(--gold)/0.1)]"
            >
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[hsl(var(--gold))]" />
                <h3 className="font-semibold text-[hsl(var(--gold))]">Our Solution</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[hsl(var(--gold))]" />
              <h3 className="font-semibold text-[hsl(var(--gold))]">Key Results</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.results.map((result, i) => (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="p-4 rounded-xl bg-background border border-[hsl(var(--gold)/0.1)] text-center transition-all hover:border-[hsl(var(--gold)/0.3)]"
                >
                  <div className="text-2xl font-serif text-gold-gradient">{result.value}</div>
                  <div className="text-xs font-medium text-foreground mt-1">{result.label}</div>
                  <div className="text-xs text-muted-foreground hidden sm:block">{result.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-2"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-[hsl(var(--gold)/0.08)] border border-[hsl(var(--gold)/0.15)] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-4 border-t border-[hsl(var(--gold)/0.1)]"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 text-[hsl(var(--gold))] font-medium group"
              >
                <span>Start a similar project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="pb-16 sm:pb-24">
      <SEO
        title="Portfolio"
        description="Our finest work. Discover how Rivendell AI transforms ambitious visions into remarkable results."
      />
      {/* Header */}
      <div ref={headerRef} className="relative py-20 sm:py-28 mb-8 sm:mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--gold)/0.05)] to-transparent" />

        {/* Animated accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-72 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent origin-center"
        />

        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[15%] w-20 h-20 rounded-2xl bg-[hsl(var(--gold)/0.03)] border border-[hsl(var(--gold)/0.1)] hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 left-[10%] w-14 h-14 rounded-full bg-[hsl(var(--gold)/0.03)] border border-[hsl(var(--gold)/0.1)] hidden lg:block"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
              </motion.div>
              <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest">Our Finest Work</span>
            </motion.div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                className="text-gold-gradient inline-block"
              >
                Portfolio
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              Discover the stories behind our transformative projects. Each case study reveals how we turned ambitious visions into remarkable results.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <FeaturedProject
              key={project.id}
              project={project}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Other Projects Grid */}
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-serif mb-8 text-center"
        >
          More <span className="text-gold-gradient">Projects</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {otherProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 md:px-6 mt-20 sm:mt-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-10 sm:p-14 md:p-20 text-center overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold)/0.1)] via-[hsl(var(--gold)/0.05)] to-transparent rounded-3xl" />
          <div className="absolute inset-0 border border-[hsl(var(--gold)/0.2)] rounded-3xl" />

          {/* Animated corner accents */}
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-[hsl(var(--gold)/0.4)] rounded-tl-2xl"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.75 }}
            className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-[hsl(var(--gold)/0.4)] rounded-tr-2xl"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-[hsl(var(--gold)/0.4)] rounded-bl-2xl"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2.25 }}
            className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-[hsl(var(--gold)/0.4)] rounded-br-2xl"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
                Ready to build something <span className="text-gold-gradient">extraordinary</span>?
              </h2>
              <p className="text-muted-foreground text-lg sm:text-xl mb-8">
                Let's transform your vision into reality. Our team is ready to craft your next success story.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(var(--gold) / 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[hsl(var(--gold-dark))] via-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-background font-semibold text-lg transition-all"
                  data-testid="button-start-project"
                >
                  Start Your Project
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
