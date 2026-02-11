import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FloatingMenu } from "./FloatingMenu";

const NAV_LINKS = [
  { href: "/", label: "Sanctuary" },
  { href: "/services", label: "Craft" },
  { href: "/portfolio", label: "Works" },
  { href: "/process", label: "Council" },
  { href: "/about", label: "Lore" },
  { href: "/blog", label: "News" },
  // { href: "/pricing", label: "Tribute" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[hsl(var(--gold)/0.3)] selection:text-[hsl(var(--gold))]">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b border-transparent",
          isScrolled ? "bg-background/80 backdrop-blur-md border-[hsl(var(--gold)/0.1)] py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3 z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-12 h-12 flex items-center justify-center group-hover:glow-gold-sm transition-all duration-300"
            >
              <img src="/favicon1.png" alt="Rivendell AI" className="w-full h-full object-contain" />
            </motion.div>
            <span className="font-serif text-xl font-medium tracking-tight text-foreground group-hover:text-gold-gradient transition-all">
              Rivendell AI
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[hsl(var(--gold))] relative group",
                  location === link.href ? "text-[hsl(var(--gold))]" : "text-muted-foreground"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] transition-all duration-300 group-hover:w-full",
                  location === link.href ? "w-full" : ""
                )} />
              </Link>
            ))}
            <Link href="/contact" className="ml-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[hsl(var(--gold-dark))] to-[hsl(var(--gold))] text-background text-sm font-semibold transition-all hover:glow-gold-sm flex items-center gap-2"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden flex flex-col gap-6"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-3xl font-serif font-medium block",
                    location === link.href ? "text-gold-gradient" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/contact" className="mt-8 block">
                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[hsl(var(--gold-dark))] via-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-background font-semibold text-lg glow-gold">
                  Begin Journey
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 min-h-screen relative overflow-hidden">
        {/* Ambient background effects */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[hsl(var(--gold)/0.03)] rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]" />
          <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />
        </div>
        {children}
      </main>

      <footer className="border-t border-[hsl(var(--gold)/0.1)] py-16 bg-background relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          {/* Golden line accent */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-[hsl(var(--gold))] to-transparent mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/favicon1.png" alt="Rivendell AI" className="w-8 h-8 object-contain" />
                <span className="font-serif text-xl font-bold text-gold-gradient">Rivendell AI</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Where elven serenity meets modern technological precision. Crafting digital sanctuaries for the future.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-6 text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
                Sanctuary
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-[hsl(var(--gold))] transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-[hsl(var(--gold))] transition-colors">Lore</Link></li>
                <li><Link href="/careers" className="hover:text-[hsl(var(--gold))] transition-colors">Join the Council</Link></li>
                <li><Link href="/faq" className="hover:text-[hsl(var(--gold))] transition-colors">FAQ</Link></li>
                <li><Link href="/blog" className="hover:text-[hsl(var(--gold))] transition-colors">News & Insights</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6 text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
                Craft
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/services" className="hover:text-[hsl(var(--gold))] transition-colors">Services</Link></li>
                <li><Link href="/process" className="hover:text-[hsl(var(--gold))] transition-colors">Methodology</Link></li>
                <li><Link href="/pricing" className="hover:text-[hsl(var(--gold))] transition-colors">Tribute</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6 text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
                Contact
              </h4>
              <p className="text-sm text-muted-foreground mb-4">London, UK</p>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@rivendellai.co.uk" className="text-[hsl(var(--gold))] text-sm hover:underline">
                    info@rivendellai.co.uk
                  </a>
                </li>
                <li>
                  <a href="tel:+447376971045" className="text-[hsl(var(--gold))] text-sm hover:underline">
                    +44 7376 971045
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-[hsl(var(--gold)/0.1)]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/60 mb-4">
              <span>© {new Date().getFullYear()} Rivendell AI. All rights reserved.</span>
              <span className="text-gold-gradient font-medium italic">"True power lies not in speed, but in wisdom."</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs text-muted-foreground/60">
              <Link href="/privacy" className="hover:text-[hsl(var(--gold))] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/gdpr" className="hover:text-[hsl(var(--gold))] transition-colors">
                GDPR Compliance
              </Link>
              <Link href="/terms" className="hover:text-[hsl(var(--gold))] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Menu (WhatsApp + AI) */}
      <FloatingMenu />
    </div>
  );
}
