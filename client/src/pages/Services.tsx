import { motion } from "framer-motion";
import { Check, Cpu, Globe, LayoutTemplate, Network, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const services = [
  {
    id: "web-app",
    icon: Globe,
    title: "Web & Application Development",
    subtitle: "Forging Digital Foundations",
    description: "We build scalable, robust applications that serve as the backbone of your digital presence. Using modern frameworks and best practices, we ensure your software stands the test of time.",
    features: ["React & Next.js Ecosystems", "Progressive Web Apps (PWA)", "High-Performance API Design", "Cloud Architecture (AWS/GCP)"],
  },
  {
    id: "ai-auto",
    icon: Cpu,
    title: "AI & Automation",
    subtitle: "Breathing Intelligence into Systems",
    description: "Move beyond manual toil. We implement intelligent agents and automated workflows that handle the mundane, freeing your mind for higher pursuits.",
    features: ["LLM Integration (GPT/Claude)", "Automated Customer Support", "Data Analysis Pipelines", "Process Optimization"],
  },
  {
    id: "ui-ux",
    icon: LayoutTemplate,
    title: "UI/UX & Product Design",
    subtitle: "Crafting Serenity",
    description: "Technology should not shout; it should understand. Our design philosophy centers on calm, clarity, and intuition. We create interfaces that feel like second nature.",
    features: ["User Research & Strategy", "Design Systems", "Prototyping & Motion", "Accessibility First"],
  },
  {
    id: "business-process",
    icon: Network,
    title: "Business Process Automation",
    subtitle: "Streamlining the Flow",
    description: "We analyze your operations to find bottlenecks and inefficiencies, replacing them with smooth, automated pathways that accelerate growth.",
    features: ["Workflow Audit", "Custom CRM Solutions", "Integration Middleware", "Reporting Dashboards"],
  },
  {
    id: "tech-support",
    icon: ShieldCheck,
    title: "Technical Support & Maintenance",
    subtitle: "The Eternal Watch",
    description: "Our relationship doesn't end at launch. We provide ongoing guardianship for your digital assets, ensuring security, stability, and continuous improvement.",
    features: ["24/7 Monitoring", "Security Audits", "Performance Tuning", "Feature Evolution"],
  }
];

export default function Services() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Rivendell AI Services",
    "provider": {
      "@type": "Organization",
      "name": "Rivendell AI"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <div className="pb-24">
      <SEO
        title="Our Services"
        description="Explore our services in AI, Web Development, and Design. Forging digital foundations and breathing intelligence into systems."
        schema={schema}
      />
      {/* Header */}
      <div className="relative py-24 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--gold)/0.05)] to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
              <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest">What We Do</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
              Our <span className="text-gold-gradient">Craft</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Each service we offer is a discipline mastered over years. We bring dedication, precision, and artistry to every line of code and every pixel.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 space-y-32">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className={`grid md:grid-cols-2 gap-12 lg:gap-24 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
          >
            <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(var(--gold)/0.2)] to-[hsl(var(--gold)/0.05)] border border-[hsl(var(--gold)/0.3)] flex items-center justify-center mb-8 text-[hsl(var(--gold))]"
              >
                <service.icon className="w-8 h-8" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-sm font-medium tracking-widest uppercase text-[hsl(var(--gold))] mb-3">{service.subtitle}</h3>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">{service.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-[hsl(var(--gold)/0.1)] flex items-center justify-center text-[hsl(var(--gold))] shrink-0 group-hover:glow-gold-sm transition-all">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-lg border border-[hsl(var(--gold)/0.3)] text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold)/0.1)] transition-all font-medium text-sm"
                >
                  Discuss this Service
                </motion.button>
              </Link>
            </div>

            <motion.div
              variants={SCALE_IN}
              className={index % 2 === 1 ? 'md:col-start-1' : ''}
            >
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-[hsl(var(--gold)/0.1)] bg-card/30 backdrop-blur-sm p-8 flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold)/0.05)] via-transparent to-primary/5 opacity-50" />
                <div className="absolute inset-0 gold-particles opacity-30" />

                {/* Abstract Visual Representation */}
                <div className="relative z-10 w-full h-full border border-[hsl(var(--gold)/0.1)] rounded-xl bg-background/50 backdrop-blur-md p-6 flex flex-col justify-between group-hover:scale-[1.02] group-hover:border-[hsl(var(--gold)/0.3)] transition-all duration-500">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--gold)/0.5)]" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--gold)/0.3)]" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--gold)/0.2)]" />
                  </div>
                  <div className="space-y-3 opacity-50">
                    <motion.div
                      animate={{ width: ["60%", "80%", "60%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="h-2 bg-[hsl(var(--gold)/0.3)] rounded-full"
                    />
                    <motion.div
                      animate={{ width: ["40%", "60%", "40%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="h-2 bg-[hsl(var(--gold)/0.2)] rounded-full"
                    />
                    <motion.div
                      animate={{ width: ["70%", "90%", "70%"] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="h-2 bg-[hsl(var(--gold)/0.3)] rounded-full"
                    />
                    <motion.div
                      animate={{ width: ["50%", "70%", "50%"] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                      className="h-2 bg-[hsl(var(--gold)/0.2)] rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 md:px-6 mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-12 text-center overflow-hidden border border-[hsl(var(--gold)/0.2)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold)/0.1)] to-transparent" />
          <div className="absolute inset-0 gold-particles opacity-30" />

          <div className="relative z-10">
            <h2 className="text-3xl font-serif mb-4">Unsure what you need?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our Strategy Sessions are designed to uncover the path forward, even if the destination isn't yet clear.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[hsl(var(--gold-dark))] via-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-background px-8 py-3 rounded-xl font-semibold glow-gold hover:shadow-2xl transition-all"
              >
                Book a Strategy Call
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
