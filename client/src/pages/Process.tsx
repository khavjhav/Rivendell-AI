import { motion } from "framer-motion";
import { Compass, Map, Hammer, Eye, Star } from "lucide-react";
import SEO from "@/components/SEO";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discovery",
    subtitle: "The Council Call",
    desc: "We begin by entering your world. We listen deeply to understand not just the problem, but the context, the stakeholders, and the ultimate vision.",
    details: ["Stakeholder Interviews", "Problem Definition", "Requirement Gathering"]
  },
  {
    number: "02",
    icon: Map,
    title: "Strategy",
    subtitle: "The Scrolls",
    desc: "Before a single pixel is placed, we chart the course. We align on the technical architecture, the user journey, and the success metrics.",
    details: ["Technical Roadmap", "User Journey Mapping", "Wireframing"]
  },
  {
    number: "03",
    icon: Hammer,
    title: "Execution",
    subtitle: "The Forge",
    desc: "The forge heats up. Our craftsmen build your solution with clean, efficient code and pixel-perfect design, communicating progress at every step.",
    details: ["Agile Development", "Bi-weekly Sprints", "Continuous Testing"]
  },
  {
    number: "04",
    icon: Eye,
    title: "Optimization",
    subtitle: "The Watchtower",
    desc: "Launch is not the end. We observe how the system breathes in the wild, refining performance and smoothing rough edges based on real usage.",
    details: ["Performance Analytics", "User Feedback Loops", "Scaling Infrastructure"]
  }
];

export default function Process() {
  return (
    <div className="pb-24">
      <SEO
        title="Our Process"
        description="The Council of Rivendell's methodology. From Discovery to Optimization, a structured path to digital excellence."
      />
      {/* Header */}
      <div className="relative py-24 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--gold)/0.05)] to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent" />
        <div className="absolute inset-0 gold-particles opacity-20" />

        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
          >
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star className="w-10 h-10 text-[hsl(var(--gold))]" fill="hsl(var(--gold))" />
              </motion.div>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
              The Council of <span className="text-gold-gradient">Rivendell</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our methodology is a journey. A structured path from the unknown to the concrete, ensuring clarity and precision at every turn.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Connecting Line with golden gradient */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(var(--gold)/0)] via-[hsl(var(--gold)/0.3)] to-[hsl(var(--gold)/0)] hidden md:block" />

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={FADE_UP}
              className={`flex flex-col md:flex-row gap-8 md:gap-24 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text Side */}
              <div className="flex-1 md:text-right text-left">
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-6xl md:text-8xl font-serif text-[hsl(var(--gold)/0.1)] font-bold block -mb-8 relative z-0">
                    {step.number}
                  </span>
                  <div className="flex items-center gap-3 relative z-10" style={{ justifyContent: index % 2 === 1 ? 'flex-start' : 'flex-end' }}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-10 h-10 rounded-lg bg-[hsl(var(--gold)/0.1)] border border-[hsl(var(--gold)/0.2)] flex items-center justify-center text-[hsl(var(--gold))] ${index % 2 === 1 ? 'order-first' : 'order-last md:order-first'}`}
                    >
                      <step.icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h2 className="text-3xl font-medium text-gold-gradient">{step.title}</h2>
                      <p className="text-sm text-[hsl(var(--gold)/0.7)] uppercase tracking-widest">{step.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                  <ul className={`inline-flex flex-col gap-2 ${index % 2 === 1 ? 'md:items-start' : 'md:items-end'}`}>
                    {step.details.map((detail, i) => (
                      <motion.li
                        key={detail}
                        initial={{ opacity: 0, x: index % 2 === 1 ? -10 : 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="text-sm font-medium text-foreground/70 bg-[hsl(var(--gold)/0.05)] px-4 py-1.5 rounded-full border border-[hsl(var(--gold)/0.15)] hover:border-[hsl(var(--gold)/0.3)] transition-colors"
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Center Node (Desktop) */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="w-5 h-5 rounded-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dark))] relative z-10 hidden md:block ring-4 ring-background glow-gold-sm"
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-[hsl(var(--gold))] rounded-full"
                />
              </motion.div>

              {/* Empty Side for Balance */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
