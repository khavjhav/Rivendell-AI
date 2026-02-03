import { motion } from "framer-motion";
import { Link } from "wouter";
import { ScrollText, Sparkles } from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function Terms() {
  return (
    <div className="pb-24 pt-12">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <ScrollText className="w-6 h-6 text-[hsl(var(--gold))]" />
            <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest">The Covenant</span>
          </div>
          <h1 className="text-5xl font-serif mb-6">
            Terms of <span className="text-gold-gradient">Service</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Welcome to the Council of Rivendell AI. These terms define the covenants between your realm and <strong>RIVENDELL AI LIMITED</strong> (Company No. 16948146), a private limited company registered in England and Wales with its office at 20 Central Drive, Hornchurch, RM12 6AR. By engaging our council, you agree to these provisions governed by the laws of England and Wales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-12"
        >
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-3xl font-serif text-foreground flex items-center gap-3">
              <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
              1. Engagement & Councils
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our fellowship begins with a council (consultation) to understand your needs. By engaging our services, you agree to provide truthful information regarding your quest's requirements.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 pt-6 border-t border-[hsl(var(--gold)/0.1)]">
            <h2 className="text-3xl font-serif text-foreground flex items-center gap-3">
              <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
              2. Subscription Paths (Monthly Covenants)
            </h2>
            <ul className="space-y-3 ml-6">
              {[
                { title: "Billing", desc: "Subscriptions are billed monthly in advance." },
                { title: "Notice", desc: "We require 30 days notice for any adjustments to your covenant (upgrades, downgrades, or departures)." },
                { title: "Deliverables", desc: "We commit to delivering the crafts specified in your chosen path each moon cycle." }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="text-muted-foreground flex gap-3"
                >
                  <span className="text-[hsl(var(--gold))] font-medium">•</span>
                  <span><strong>{item.title}:</strong> {item.desc}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 pt-6 border-t border-[hsl(var(--gold)/0.1)]">
            <h2 className="text-3xl font-serif text-foreground flex items-center gap-3">
              <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
              3. Fixed-Price Quests
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For singular builds, we provide a clear proposal with defined checkpoints (milestones) and investment quotes. Work begins once the opening tribute (deposit) is received.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 pt-6 border-t border-[hsl(var(--gold)/0.1)]">
            <h2 className="text-3xl font-serif text-foreground flex items-center gap-3">
              <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
              4. Intellectual Property
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Once full payment for a quest or milestone is received, the artifacts and code forged specifically for you belong to your realm. Rivendell retains the rights to its proprietary tools and underlying wisdom used to build them.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 pt-6 border-t border-[hsl(var(--gold)/0.1)]">
            <h2 className="text-3xl font-serif text-foreground flex items-center gap-3">
              <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
              5. Conduct & Respect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We pride ourselves on honest fellowship. Any form of shadow or malice (harassment, illegal activity, or failure to fulfill financial commitments) may result in the immediate termination of our covenant.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 pt-6 border-t border-[hsl(var(--gold)/0.1)]">
            <h2 className="text-3xl font-serif text-foreground flex items-center gap-3">
              <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
              6. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While our crafts are forged with the greatest care, Rivendell shall not be held liable for indirect losses or unforeseen storms once a project is approved and launched by your realm.
            </p>
          </section>

          {/* Footer */}
          <div className="pt-8 border-t border-[hsl(var(--gold)/0.1)]">
            <p className="text-sm text-muted-foreground/60 italic">
              Last Updated: February 4, 2026.
            </p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center pt-8 flex gap-4 justify-center flex-wrap"
          >
            <Link href="/pricing" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[hsl(var(--gold-dark))] to-[hsl(var(--gold))] text-background text-sm font-semibold transition-all hover:glow-gold-sm flex items-center gap-2"
              >
                View Our Packages <Sparkles className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link href="/privacy" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full border border-[hsl(var(--gold))] text-[hsl(var(--gold))] text-sm font-semibold transition-all hover:bg-[hsl(var(--gold)/0.1)]"
              >
                View Privacy Policy
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
