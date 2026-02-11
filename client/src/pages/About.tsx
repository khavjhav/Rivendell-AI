import { motion } from "framer-motion";
import { Star, Heart, Shield, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function About() {
  return (
    <div className="pb-24">
      <SEO
        title="About Us"
        description="Learn about the philosophy and story behind Rivendell AI. Guardians of the Digital Realm."
      />
      {/* Hero */}
      <section className="relative container mx-auto px-4 md:px-6 py-24 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[hsl(var(--gold)/0.05)] rounded-full blur-[100px]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={STAGGER}
          className="max-w-4xl relative z-10"
        >
          <motion.div variants={FADE_UP} className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
            <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest">Our Story</span>
          </motion.div>

          <motion.h1
            variants={FADE_UP}
            className="text-5xl md:text-7xl font-serif mb-8"
          >
            We are <span className="text-gold-gradient">Guardians</span> <br /> of the Digital Realm
          </motion.h1>
          <motion.p
            variants={FADE_UP}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance"
          >
            Rivendell AI was founded on a simple premise: technology should enhance human life, not consume it. We stand against the noise, the clutter, and the chaos of modern software.
          </motion.p>
        </motion.div>
      </section>

      {/* Manifesto */}
      <section className="relative bg-card/50 border-y border-[hsl(var(--gold)/0.1)] py-24 overflow-hidden">
        <div className="absolute inset-0 gold-particles opacity-10" />

        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER}
            className="space-y-8"
          >
            <motion.div variants={FADE_UP} className="flex items-center gap-3">
              <Star className="w-6 h-6 text-[hsl(var(--gold))]" fill="hsl(var(--gold))" />
              <h2 className="text-3xl font-serif">Our <span className="text-gold-gradient">Creed</span></h2>
            </motion.div>
            <motion.div variants={STAGGER} className="space-y-6 text-lg text-muted-foreground">
              <motion.p variants={FADE_UP}>
                In an age of rapid acceleration, we choose intentionality. We believe that speed without direction is meaningless.
              </motion.p>
              <motion.p variants={FADE_UP}>
                We do not just write code; we author solutions. Every function, every component, every database schema is crafted with the understanding that it will be used by real people with real needs.
              </motion.p>
              <motion.p variants={FADE_UP}>
                Like the Elven sanctuaries of old, we create spaces of clarity in a chaotic world. When you work with us, you are not just hiring developers; you are entering a partnership dedicated to excellence.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={SCALE_IN}
            className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-[hsl(var(--gold)/0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold)/0.1)] via-background to-background" />
            <div className="absolute inset-0 gold-particles opacity-30" />

            {/* Orbital decoration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-48 h-48 border border-[hsl(var(--gold)/0.2)] rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 border border-[hsl(var(--gold)/0.3)] rounded-full"
              />
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px hsl(var(--gold) / 0.2)",
                    "0 0 40px hsl(var(--gold) / 0.4)",
                    "0 0 20px hsl(var(--gold) / 0.2)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute w-16 h-16 bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dark))] rounded-full flex items-center justify-center"
              >
                <Heart className="w-6 h-6 text-background" fill="hsl(var(--background))" />
              </motion.div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
              <span className="font-serif italic text-2xl text-gold-gradient">Artistry in Code</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 md:px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER}
          className="text-center mb-16"
        >
          <motion.h2 variants={FADE_UP} className="text-4xl font-serif mb-4">Our <span className="text-gold-gradient">Values</span></motion.h2>
          <motion.p variants={FADE_UP} className="text-muted-foreground text-lg">The principles that guide every decision we make.</motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { icon: Shield, title: "Integrity", desc: "We say what we mean and deliver what we promise. Trust is the foundation of every partnership." },
            { icon: Star, title: "Excellence", desc: "Good enough is never good enough. We pursue mastery in every craft we undertake." },
            { icon: Heart, title: "Empathy", desc: "Technology serves people. We design with deep understanding of human needs and behaviors." }
          ].map((value, i) => (
            <motion.div
              key={value.title}
              variants={SCALE_IN}
              whileHover={{ y: -5, borderColor: "hsl(var(--gold) / 0.4)" }}
              className="p-8 rounded-2xl bg-card/30 border border-[hsl(var(--gold)/0.1)] text-center group transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--gold)/0.2)] to-[hsl(var(--gold)/0.05)] border border-[hsl(var(--gold)/0.2)] flex items-center justify-center mx-auto mb-6 text-[hsl(var(--gold))] group-hover:glow-gold-sm transition-all"
              >
                <value.icon className="w-6 h-6" />
              </motion.div>
              <h3 className="text-xl font-serif mb-3 group-hover:text-gold-gradient transition-colors">{value.title}</h3>
              <p className="text-muted-foreground">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Projects Completed", value: "50+" },
            { label: "Years of Craft", value: "10+" },
            { label: "Client Retention", value: "95%" },
            { label: "Lines of Code", value: "1M+" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={FADE_UP}
              whileHover={{ scale: 1.05 }}
              className="text-center p-8 rounded-2xl bg-[hsl(var(--gold)/0.03)] border border-[hsl(var(--gold)/0.1)] hover:border-[hsl(var(--gold)/0.3)] transition-all"
            >
              <div className="text-4xl md:text-5xl font-serif text-gold-gradient glow-gold-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
