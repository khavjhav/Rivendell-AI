import { motion } from "framer-motion";
import { Check, Crown, Star, Shield } from "lucide-react";
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

const tiers = [
  {
    name: "Fellowship",
    icon: Star,
    desc: "For startups and small teams beginning their journey.",
    price: "$2,500",
    period: "/project starting",
    features: [
      "Custom Landing Page",
      "Basic CMS Integration",
      "Mobile Responsive Design",
      "SEO Fundamentals",
      "1 Month Support"
    ],
    cta: "Start Fellowship",
    featured: false
  },
  {
    name: "The Council",
    icon: Crown,
    desc: "Comprehensive solutions for growing businesses.",
    price: "$5,000",
    period: "/month retainer",
    features: [
      "Full Web Application",
      "User Authentication",
      "Database Design",
      "Payment Processing",
      "Admin Dashboard",
      "Priority Support"
    ],
    cta: "Join the Council",
    featured: true
  },
  {
    name: "Elder",
    icon: Shield,
    desc: "Enterprise-grade architecture for large scale operations.",
    price: "Custom",
    period: "Pricing",
    features: [
      "Microservices Architecture",
      "AI/LLM Integration",
      "Advanced Security",
      "24/7 SLA Support",
      "Dedicated Team",
      "Infrastructure Scaling"
    ],
    cta: "Consult Elders",
    featured: false
  }
];

export default function Pricing() {
  return (
    <div className="pb-24 pt-12">
      <SEO
        title="Pricing"
        description="Transparent investment options for premium craftsmanship. Choose the alliance that suits your quest."
      />
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={FADE_UP}
        className="container mx-auto px-4 md:px-6 text-center max-w-3xl mb-16"
      >
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--gold)/0.3)] bg-[hsl(var(--gold)/0.08)]">
            <Crown className="w-4 h-4 text-[hsl(var(--gold))]" />
            <span className="text-sm font-medium text-[hsl(var(--gold))]">Transparent Pricing</span>
          </div>
        </div>
        <h1 className="text-5xl font-serif mb-6">
          Tribute & <span className="text-gold-gradient">Investment</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Transparent pricing for premium craftsmanship. Choose the alliance that suits your quest.
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial="hidden"
            animate="visible"
            variants={SCALE_IN}
            whileHover={{ y: tier.featured ? -8 : -5 }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-3xl p-8 border flex flex-col ${tier.featured
                ? "bg-gradient-to-b from-card to-background border-[hsl(var(--gold)/0.5)] shadow-2xl shadow-[hsl(var(--gold)/0.1)] scale-105 z-10"
                : "bg-background border-border hover:border-[hsl(var(--gold)/0.3)]"
              } transition-all duration-300`}
          >
            {/* Golden accent for featured */}
            {tier.featured && (
              <>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[hsl(var(--gold-dark))] via-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-background text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider glow-gold-sm"
                >
                  Most Popular
                </motion.div>
              </>
            )}

            <div className="mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${tier.featured
                    ? "bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dark))] text-background glow-gold-sm"
                    : "bg-[hsl(var(--gold)/0.1)] text-[hsl(var(--gold))] border border-[hsl(var(--gold)/0.2)]"
                  }`}
              >
                <tier.icon className="w-6 h-6" />
              </motion.div>
              <h3 className="text-2xl font-serif mb-2">{tier.name}</h3>
              <p className="text-sm text-muted-foreground h-10">{tier.desc}</p>
            </div>

            <div className="mb-8 flex items-baseline gap-1">
              <span className={`text-4xl font-bold ${tier.featured ? "text-gold-gradient" : ""}`}>{tier.price}</span>
              <span className="text-muted-foreground text-sm">{tier.period}</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {tier.features.map((feature, j) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i * 0.1) + (j * 0.05) }}
                  className="flex items-start gap-3 text-sm"
                >
                  <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.featured ? "text-[hsl(var(--gold))]" : "text-primary"}`} />
                  <span className="text-foreground/90">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl font-semibold transition-all ${tier.featured
                    ? "bg-gradient-to-r from-[hsl(var(--gold-dark))] via-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-background glow-gold hover:shadow-2xl"
                    : "bg-[hsl(var(--gold)/0.1)] text-[hsl(var(--gold))] border border-[hsl(var(--gold)/0.2)] hover:bg-[hsl(var(--gold)/0.15)]"
                  }`}
              >
                {tier.cta}
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* FAQ Teaser */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-6 mt-24 text-center"
      >
        <p className="text-muted-foreground">
          Questions? <Link href="/contact" className="text-[hsl(var(--gold))] hover:underline font-medium">Speak with our Council</Link>
        </p>
      </motion.div>
    </div>
  );
}
