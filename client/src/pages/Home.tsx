import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Brain, Sparkles, Layers, Star, Zap, Volume2, VolumeX } from "lucide-react";
import { Link } from "wouter";

import SEO from "@/components/SEO";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const FADE_IN = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } }
};

const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  visible: { transition: { staggerChildren: 0.15 } }
};

const STAGGER_FAST = {
  visible: { transition: { staggerChildren: 0.08 } }
};

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const toggleSound = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (videoRef.current?.contentWindow) {
      videoRef.current.contentWindow.postMessage(
        JSON.stringify({
          method: "setVolume",
          value: newMuted ? 0 : 1
        }),
        "*"
      );
    }
  };
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Rivendell AI",
        "url": "https://rivendellai.co.uk",
        "logo": "https://rivendellai.co.uk/logo512.png",
        "description": "Sanctuary for Smart Technology. Forging the future with ancient wisdom.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "UK"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "areaServed": "Worldwide",
          "availableLanguage": ["English"]
        }
      },
      {
        "@type": "WebSite",
        "name": "Rivendell AI",
        "url": "https://rivendellai.co.uk",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://rivendellai.co.uk/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <div className="relative min-h-screen">
      <SEO
        title="The Council of Elrond"
        description="Rivendell AI - Forging the future with ancient wisdom. We build digital sanctuaries and intelligent systems."
        schema={schema}
      />
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 min-h-[85vh] flex items-center pt-10 relative">
        {/* Golden Ambient Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-20 right-[10%] w-96 h-96 bg-[hsl(var(--gold)/0.08)] rounded-full blur-[100px] float"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-20 left-[5%] w-64 h-64 bg-[hsl(var(--gold)/0.05)] rounded-full blur-[80px]"
            style={{ animation: "float 8s ease-in-out infinite reverse" }}
          />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={STAGGER}
          className="max-w-4xl space-y-8 relative z-10"
        >
          <motion.div
            variants={FADE_UP}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--gold)/0.3)] bg-[hsl(var(--gold)/0.08)] text-xs font-medium tracking-wide uppercase shimmer"
          >
            <Star className="w-3 h-3 text-[hsl(var(--gold))]" fill="hsl(var(--gold))" />
            <span className="text-gold-gradient font-semibold">The New Era of Intelligence</span>
          </motion.div>

          <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] text-balance">
            Sanctuary for <br />
            <motion.span
              className="text-gold-gradient glow-gold-text inline-block"
              animate={{
                textShadow: [
                  "0 0 10px hsl(var(--gold) / 0.3)",
                  "0 0 20px hsl(var(--gold) / 0.5)",
                  "0 0 10px hsl(var(--gold) / 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Smart Technology
            </motion.span>
          </motion.h1>

          <motion.p variants={FADE_UP} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            We build digital experiences that feel natural, intuitive, and profound.
            Blending ancient wisdom with cutting-edge AI to forge the future of software.
          </motion.p>

          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[hsl(var(--gold-dark))] via-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-background font-semibold text-lg shadow-lg glow-gold hover:glow-gold transition-all duration-300"
              >
                Enter the Council
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.02, borderColor: "hsl(var(--gold) / 0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-card border border-border text-foreground font-medium text-lg transition-all duration-300 flex items-center gap-2 group"
              >
                Explore Our Craft
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={SCALE_IN}
            className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden group bg-black"
          >
            {/* Vimeo Video Embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[550px] h-[800px] overflow-hidden relative z-20 bg-black">
                <iframe
                  ref={videoRef}
                  src="https://player.vimeo.com/video/1167630369?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0"
                  className="absolute top-1/2 left-1/2 w-[350%] h-full -translate-x-1/2 -translate-y-1/2"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="Rivendell AI Video"
                ></iframe>

                {/* Volume Toggle Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleSound}
                  className="absolute bottom-10 right-10 z-30 w-12 h-12 rounded-full bg-background/50 backdrop-blur-md border border-[hsl(var(--gold)/0.3)] flex items-center justify-center text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold)/0.1)] transition-colors"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </motion.button>
              </div>

              {/* Orbital Rings (Retained for effect) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[550px] h-[550px] border border-[hsl(var(--gold)/0.2)] rounded-full z-10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[650px] h-[650px] border border-primary/10 rounded-full z-0"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="space-y-8"
          >
            <motion.h2 variants={FADE_UP} className="text-4xl md:text-5xl font-serif">
              The <span className="text-gold-gradient">Rivendell</span> Way
            </motion.h2>
            <motion.div variants={STAGGER_FAST} className="space-y-6">
              {[
                { title: "Listen", desc: "We begin with silence. Understanding your core needs before writing a single line of code.", icon: "01" },
                { title: "Design", desc: "Crafting interfaces that breathe. We prioritize serenity and clarity over noise.", icon: "02" },
                { title: "Build", desc: "Forging robust architectures with the strength of mithril and the flexibility of willow.", icon: "03" },
                { title: "Support", desc: "An eternal alliance. We stand by our creations as they grow and evolve.", icon: "04" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={FADE_UP}
                  whileHover={{ x: 8 }}
                  className="flex gap-4 group cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, borderColor: "hsl(var(--gold))" }}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[hsl(var(--gold)/0.5)] group-hover:bg-[hsl(var(--gold)/0.05)]"
                  >
                    <span className="font-serif text-sm text-muted-foreground group-hover:text-[hsl(var(--gold))] transition-colors">{item.icon}</span>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-medium mb-1 group-hover:text-[hsl(var(--gold))] transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_IN}
          className="relative rounded-3xl overflow-hidden bg-card/30 p-8 md:p-16 border border-[hsl(var(--gold)/0.1)]"
        >
          {/* Golden accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent" />

          <motion.div variants={STAGGER} className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <motion.div variants={FADE_UP} className="flex justify-center mb-4">
              <Zap className="w-8 h-8 text-[hsl(var(--gold))]" />
            </motion.div>
            <motion.h2 variants={FADE_UP} className="text-4xl md:text-5xl font-serif">
              Our <span className="text-gold-gradient">Craft</span>
            </motion.h2>
            <motion.p variants={FADE_UP} className="text-muted-foreground text-lg">
              We weave advanced technology into seamless experiences.
            </motion.p>
          </motion.div>

          <motion.div
            variants={STAGGER}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Code, title: "Web & App Dev", desc: "Performant, accessible, and beautiful applications built with modern stacks." },
              { icon: Brain, title: "AI Automation", desc: "Intelligent workflows that reclaim your time and augment your capabilities." },
              { icon: Layers, title: "UI/UX Design", desc: "Interfaces that feel inevitable. Intuitive flows designed for human cognition." },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={SCALE_IN}
                whileHover={{ y: -8, borderColor: "hsl(var(--gold) / 0.4)" }}
                className="p-8 rounded-2xl bg-background border border-border hover:shadow-lg hover:shadow-[hsl(var(--gold)/0.1)] transition-all duration-500 group relative overflow-hidden"
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />

                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--gold)/0.2)] to-[hsl(var(--gold)/0.05)] flex items-center justify-center mb-6 text-[hsl(var(--gold))] border border-[hsl(var(--gold)/0.2)]"
                >
                  <service.icon strokeWidth={1.5} className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-medium mb-3 font-serif group-hover:text-[hsl(var(--gold))] transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center text-sm font-medium text-[hsl(var(--gold))] hover:underline gap-1 group/link">
                  Learn more
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "5+", label: "Years of Excellence" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={FADE_UP}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-4xl md:text-5xl font-serif text-gold-gradient glow-gold-text mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={SCALE_IN}
          className="relative rounded-3xl overflow-hidden border border-[hsl(var(--gold)/0.2)] p-12 md:p-24 text-center"
        >
          {/* Golden gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold)/0.1)] via-background to-[hsl(var(--gold)/0.05)]" />
          <div className="absolute inset-0 gold-particles opacity-50" />

          {/* Decorative corner accents */}
          <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-[hsl(var(--gold)/0.3)] rounded-tl-xl" />
          <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-[hsl(var(--gold)/0.3)] rounded-tr-xl" />
          <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-[hsl(var(--gold)/0.3)] rounded-bl-xl" />
          <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-[hsl(var(--gold)/0.3)] rounded-br-xl" />

          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Star className="w-10 h-10 text-[hsl(var(--gold))] mx-auto mb-4" fill="hsl(var(--gold))" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif">
              Ready to begin your <span className="text-gold-gradient">journey</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              The Council is gathered. We await your challenge.
            </p>
            <div className="pt-8">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-xl bg-gradient-to-r from-[hsl(var(--gold-dark))] via-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-background font-bold text-lg glow-gold hover:shadow-2xl transition-all duration-300"
                >
                  Request a Council Session
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
