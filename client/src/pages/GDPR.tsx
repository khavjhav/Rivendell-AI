import { motion } from "framer-motion";
import { Link } from "wouter";
import { Lock, Sparkles } from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function GDPR() {
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
            <Lock className="w-6 h-6 text-[hsl(var(--gold))]" />
            <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest">Compliance & Security</span>
          </div>
          <h1 className="text-5xl font-serif mb-6">
            GDPR <span className="text-gold-gradient">Compliance</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            At <strong>RIVENDELL AI LIMITED</strong>, we treat data guardianship as a sacred duty. Our compliance framework is built upon the principles of transparency, security, and the "Sanctuary of Data."
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
              1. Data Controller
            </h2>
            <p className="text-muted-foreground leading-relaxed space-y-2">
              <strong>RIVENDELL AI LIMITED</strong> (Company No. 16948146)
              <br />
              20 Central Drive, Hornchurch, England, RM12 6AR
              <br />
              Email: <a href="mailto:privacy@rivendellai.co.uk" className="text-[hsl(var(--gold))] hover:underline">
                privacy@rivendellai.co.uk
              </a>
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 pt-6 border-t border-[hsl(var(--gold)/0.1)]">
            <h2 className="text-3xl font-serif text-foreground flex items-center gap-3">
              <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
              2. Nature of Our Crafts (Legitimate Interest)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our processing of data is aligned with our registered business activities (SIC Codes):
            </p>
            <ul className="space-y-3 ml-6">
              {[
                { code: "58290", desc: "Other software publishing" },
                { code: "62012", desc: "Business and domestic software development" },
                { code: "62020", desc: "Information technology consultancy activities" },
                { code: "62090", desc: "Other information technology service activities" }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="text-muted-foreground flex gap-3"
                >
                  <span className="text-[hsl(var(--gold))] font-medium">•</span>
                  <span><strong>{item.code}:</strong> {item.desc}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              We process personal data based on <strong>Legitimate Interest</strong> to provide these expert services or via <strong>Explicit Consent</strong> provided through our council forms.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 pt-6 border-t border-[hsl(var(--gold)/0.1)]">
            <h2 className="text-3xl font-serif text-foreground flex items-center gap-3">
              <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
              3. The Three Barriers of Security
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We protect the realm's data through:
            </p>
            <ul className="space-y-3 ml-6">
              {[
                { barrier: "Physical Gates", desc: "Cloud infrastructure hosted by industry leaders with SOC2/ISO 27001 certifications." },
                { barrier: "The Shield of Encryption", desc: "Data is encrypted using AES-256 at rest and TLS 1.3 in transit." },
                { barrier: "Vigilant Oversight", desc: "Access to client data is strictly limited to necessary council members and logged." }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.05 }}
                  className="text-muted-foreground flex gap-3"
                >
                  <span className="text-[hsl(var(--gold))] font-medium">•</span>
                  <span><strong>{item.barrier}:</strong> {item.desc}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 pt-6 border-t border-[hsl(var(--gold)/0.1)]">
            <h2 className="text-3xl font-serif text-foreground flex items-center gap-3">
              <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
              4. Data Subject Requests
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Whether you are a Seeker on the Path or a Legend of the Council, you wield full rights over your data. You may request access, erasure, or portability at any time. We respond to all "Riddles of Data" within 30 days as required by UK law.
            </p>
          </section>

          {/* Footer */}
          <div className="pt-8 border-t border-[hsl(var(--gold)/0.1)]">
            <p className="text-sm text-muted-foreground/60 italic">
              RIVENDELL AI LIMITED is registered in England and Wales. This compliance statement is reviewed annually and was last updated February 4, 2026.
            </p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center pt-8 flex gap-4 justify-center flex-wrap"
          >
            <Link href="/privacy" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[hsl(var(--gold-dark))] to-[hsl(var(--gold))] text-background text-sm font-semibold transition-all hover:glow-gold-sm flex items-center gap-2"
              >
                View Privacy Policy <Sparkles className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link href="/terms" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full border border-[hsl(var(--gold))] text-[hsl(var(--gold))] text-sm font-semibold transition-all hover:bg-[hsl(var(--gold)/0.1)]"
              >
                View Terms of Service
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
