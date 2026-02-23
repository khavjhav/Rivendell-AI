import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Sparkles, Check, X, ArrowRight, Zap, ChevronRight, Play } from "lucide-react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { products, categories, type Product, type ProductCategory } from "@/data/products";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

function ProductCard({ product, index, onSelect }: { product: Product; index: number; onSelect: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={onSelect}
      className="group relative cursor-pointer"
    >
      <div className="relative rounded-2xl overflow-hidden bg-card border border-[hsl(var(--gold)/0.1)] hover:border-[hsl(var(--gold)/0.3)] transition-all duration-500">
        {/* Animated gradient border on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}
        />

        {/* Header with animated gradient */}
        <div className={`relative h-44 sm:h-52 bg-gradient-to-br ${product.bgGradient} overflow-hidden`}>
          {/* Animated mesh background */}
          <div className="absolute inset-0 opacity-30">
            <motion.div
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, ${product.accentColor}40 0%, transparent 50%), radial-gradient(circle at 80% 50%, ${product.accentColor}30 0%, transparent 50%)`,
                backgroundSize: "200% 200%",
              }}
            />
          </div>

          {/* Floating geometric shapes */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-6 right-6 w-20 h-20 rounded-2xl opacity-20"
            style={{ backgroundColor: product.accentColor }}
          />
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 left-6 w-12 h-12 rounded-full opacity-15"
            style={{ backgroundColor: product.accentColor }}
          />

          {/* Center icon with pulse effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div whileHover={{ scale: 1.1 }} className="relative">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl"
                style={{ backgroundColor: `${product.accentColor}20` }}
              />
              <div
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                style={{ backgroundColor: `${product.accentColor}20` }}
              >
                <product.icon className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: product.accentColor }} />
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
              <span className="text-xs font-medium text-[hsl(var(--gold))]">{product.category}</span>
            </motion.div>
          </div>

          {/* Hover overlay with CTA */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2">
              {product.demoUrl && (
                <Link href={product.demoUrl} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-white font-medium text-sm hover:bg-emerald-600 transition-colors">
                    <Play className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </div>
                </Link>
              )}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--gold))] text-background font-medium text-sm">
                <Zap className="w-4 h-4" />
                <span>Details</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif group-hover:text-gold-gradient transition-all duration-300">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground italic mt-1">{product.tagline}</p>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed line-clamp-2">{product.description}</p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(var(--gold)/0.08)] border border-[hsl(var(--gold)/0.15)]">
              <Sparkles className="w-3 h-3 text-[hsl(var(--gold))]" />
              <span className="text-xs font-medium text-[hsl(var(--gold))]">AI-Powered</span>
            </div>
            {product.demoUrl && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <Play className="w-3 h-3 text-emerald-400" />
                <span className="text-xs font-medium text-emerald-400">Live Demo</span>
              </div>
            )}
          </div>

          {/* Key Features (first 3) */}
          <ul className="space-y-2">
            {product.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-center gap-2.5 text-sm">
                <div className="w-4 h-4 rounded-full bg-[hsl(var(--gold)/0.1)] flex items-center justify-center text-[hsl(var(--gold))] shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Industry tags */}
          <div className="flex flex-wrap gap-1.5">
            {product.industries.slice(0, 3).map((industry) => (
              <span key={industry} className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">
                {industry}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-[hsl(var(--gold)/0.1)]">
            <span className="text-xs text-muted-foreground">
              {product.industries.length} Industries
            </span>
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

function ProductDetailModal({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

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
        <div className={`relative h-48 sm:h-56 md:h-64 bg-gradient-to-br ${product.bgGradient} overflow-hidden`}>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${product.accentColor}30, transparent 70%)`,
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
                style={{ backgroundColor: `${product.accentColor}25` }}
              >
                <product.icon className="w-10 h-10 md:w-12 md:h-12" style={{ color: product.accentColor }} />
              </div>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-[hsl(var(--gold)/0.2)] flex items-center justify-center text-foreground hover:text-[hsl(var(--gold))] transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </motion.button>

          <div className="absolute bottom-4 left-6 px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-[hsl(var(--gold)/0.2)]">
            <span className="text-sm font-medium text-[hsl(var(--gold))]">{product.category}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 md:p-10 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Title & Tagline */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h2 className="text-3xl sm:text-4xl font-serif text-gold-gradient">{product.name}</h2>
            <p className="text-muted-foreground italic mt-2">{product.tagline}</p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground leading-relaxed"
          >
            {product.description}
          </motion.p>

          {/* AI Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-5 rounded-2xl bg-[hsl(var(--gold)/0.03)] border border-[hsl(var(--gold)/0.1)]"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
              <h3 className="font-semibold text-[hsl(var(--gold))]">AI Intelligence</h3>
            </div>
            <ul className="space-y-2">
              {product.aiCapabilities.map((cap, i) => (
                <motion.li
                  key={cap}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-2.5 text-sm"
                >
                  <Zap className="w-4 h-4 text-[hsl(var(--gold))] mt-0.5 shrink-0" />
                  <span className="text-foreground/80">{cap}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-3"
          >
            <h3 className="font-semibold text-[hsl(var(--gold))]">Key Benefits</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {product.benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="p-4 rounded-xl bg-background border border-[hsl(var(--gold)/0.1)] text-center transition-all hover:border-[hsl(var(--gold)/0.3)]"
                >
                  <div className="text-2xl font-serif text-gold-gradient">{benefit.value}</div>
                  <div className="text-xs font-medium text-foreground mt-1">{benefit.label}</div>
                  <div className="text-xs text-muted-foreground hidden sm:block">{benefit.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="space-y-3"
          >
            <h3 className="font-semibold text-[hsl(var(--gold))]">Features</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {product.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  className="flex items-center gap-2.5 text-sm group"
                >
                  <div className="w-5 h-5 rounded-full bg-[hsl(var(--gold)/0.1)] flex items-center justify-center text-[hsl(var(--gold))] shrink-0 group-hover:glow-gold-sm transition-all">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-3"
          >
            <h3 className="font-semibold text-[hsl(var(--gold))]">Ideal For</h3>
            <ul className="space-y-2">
              {product.useCases.map((useCase) => (
                <li key={useCase} className="flex items-start gap-2.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-[hsl(var(--gold))] mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{useCase}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries & Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="space-y-4"
          >
            <div>
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Industries</h4>
              <div className="flex flex-wrap gap-2">
                {product.industries.map((industry) => (
                  <span
                    key={industry}
                    className="text-xs px-3 py-1.5 rounded-full bg-[hsl(var(--gold)/0.08)] border border-[hsl(var(--gold)/0.15)] text-muted-foreground"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="pt-4 border-t border-[hsl(var(--gold)/0.1)] flex flex-wrap items-center gap-4"
          >
            {product.demoUrl && (
              <Link href={product.demoUrl}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  <span>View Live Demo</span>
                </motion.button>
              </Link>
            )}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 text-[hsl(var(--gold))] font-medium group"
              >
                <span>Discuss This Solution</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const filteredProducts =
    activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div className="pb-16 sm:pb-24">
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
              <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
              </motion.div>
              <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest">
                Instruments of Power
              </span>
            </motion.div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
              >
                The{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="text-gold-gradient inline-block"
              >
                Armory
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              Every tool your business needs, powered by AI and built to your exact specifications. From inventory to
              voice, the Armory equips you to dominate your market.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={SCALE_IN}
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
                activeCategory === cat
                  ? "bg-gradient-to-r from-[hsl(var(--gold-dark))] to-[hsl(var(--gold))] text-background glow-gold-sm"
                  : "border border-[hsl(var(--gold)/0.2)] text-muted-foreground hover:border-[hsl(var(--gold)/0.4)] hover:text-[hsl(var(--gold))]"
              )}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 md:px-6">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                onSelect={() => setSelectedProduct(product)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-muted-foreground"
          >
            <p className="text-lg">No products in this category yet.</p>
          </motion.div>
        )}
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
                Need a <span className="text-gold-gradient">custom solution</span>?
              </h2>
              <p className="text-muted-foreground text-lg sm:text-xl mb-8">
                Every product in the Armory can be tailored to your exact workflow. Or we'll forge something entirely
                new.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(var(--gold) / 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[hsl(var(--gold-dark))] via-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-background font-semibold text-lg transition-all"
                >
                  Consult the Council
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      </AnimatePresence>
    </div>
  );
}
