import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, Sparkles } from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function Privacy() {
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
            <Shield className="w-6 h-6 text-[hsl(var(--gold))]" />
            <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest">Data Guardianship</span>
          </div>
          <h1 className="text-5xl font-serif mb-6">
            Privacy <span className="text-gold-gradient">Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The guardians of Rivendell honor your trust. <strong>RIVENDELL AI LIMITED</strong> (Company No. 16948146), registered at 20 Central Drive, Hornchurch, England, RM12 6AR, acts as the Data Controller for the information provided to our sanctuary.
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
              1. Data We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              When you convene with our council through our contact forms, we collect the following information:
            </p>
            <ul className="space-y-3 ml-6">
              {[
                { title: "Full Name", desc: "to know our allies" },
                { title: "Email Address", desc: "to send word back" },
                { title: "Phone Number", desc: "for swift communication" },
                { title: "Company Name", desc: "to understand your realm" },
                { title: "Service Interest & Message", desc: "to prepare our counsel" }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="text-muted-foreground flex gap-3"
                >
                  <span className="text-[hsl(var(--gold))] font-medium min-w-fit">•</span>
                  <span><strong>{item.title}</strong> ({item.desc})</span>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 pt-6 border-t border-[hsl(var(--gold)/0.1)]">
            <h2 className="text-3xl font-serif text-foreground flex items-center gap-3">
              <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
              2. How We Use Your Data
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data is used solely to provide our crafts and counsel. Specifically:
            </p>
            <ul className="space-y-3 ml-6">
              {[
                "To respond to your inquiries regarding our quests.",
                "To provide the services agreed upon in our covenants.",
                "To send occasional updates about the council's wisdom (only if you opt-in)."
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="text-muted-foreground flex gap-3"
                >
                  <span className="text-[hsl(var(--gold))] font-medium">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-4 font-semibold italic text-[hsl(var(--gold))]">
              We never sell your data to other kingdoms or shadows.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 pt-6 border-t border-[hsl(var(--gold)/0.1)]">
            <h2 className="text-3xl font-serif text-foreground flex items-center gap-3">
              <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
              3. Data Guardianship (Security)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We employ modern technical defenses to protect your information from unauthorized access, loss, or theft. Like the gates of the sanctuary, our systems are monitored and secured.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 pt-6 border-t border-[hsl(var(--gold)/0.1)]">
            <h2 className="text-3xl font-serif text-foreground flex items-center gap-3">
              <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
              4. Your Rights Under the Law
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Under UK GDPR and related laws, you have the right to:
            </p>
            <ul className="space-y-3 ml-6">
              {[
                "Request access to the data we hold about you.",
                "Request correction of any errors in your records.",
                "Request the deletion of your data when our partnership ends.",
                "Withdraw consent for data processing at any time."
              ].map((item, i) => (
                <li key={i} className="text-muted-foreground flex gap-3">
                  <span className="text-[hsl(var(--gold))] font-medium">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 pt-6 border-t border-[hsl(var(--gold)/0.1)]">
            <h2 className="text-3xl font-serif text-foreground flex items-center gap-3">
              <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
              5. Contact Our Sentinel
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For any questions regarding your privacy, please send word to:
              <br />
              <a href="mailto:privacy@rivendellai.co.uk" className="text-[hsl(var(--gold))] hover:underline font-medium">
                privacy@rivendellai.co.uk
              </a>
            </p>
          </section>

          {/* Footer */}
          <div className="pt-8 border-t border-[hsl(var(--gold)/0.1)]">
            <p className="text-sm text-muted-foreground/60 italic">
              Last Updated: February 4, 2026. This policy may be updated as our sanctuary grows.
            </p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center pt-8"
          >
            <Link href="/contact" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[hsl(var(--gold-dark))] to-[hsl(var(--gold))] text-background text-sm font-semibold transition-all hover:glow-gold-sm flex items-center gap-2 mx-auto"
              >
                Return to Contact <Sparkles className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
