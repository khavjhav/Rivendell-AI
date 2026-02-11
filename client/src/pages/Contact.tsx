import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Loader2, Send, MapPin, Mail, Phone, Star, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceInterest: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields (Name, Email, Message)");
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      const templateData = {
        name: formData.name,
        email: formData.email,
        company: formData.company || "Not provided",
        serviceInterest: formData.serviceInterest || "General inquiry",
        message: formData.message,
        to_email: import.meta.env.VITE_ADMIN_EMAIL,
      };

      // Send to admin
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
        templateData
      );

      // Send confirmation to user
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID,
        {
          ...templateData,
          to_email: formData.email,
        }
      );

      setStatus("success");
      setFormData({ name: "", email: "", company: "", serviceInterest: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMsg(error instanceof Error ? error.message : "Failed to send message. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Rivendell AI",
    "description": "Start your journey with Rivendell AI. Summon the Council.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Rivendell AI",
      "url": "https://rivendellai.co.uk",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "contact@rivendellai.co.uk"
      }
    }
  };

  return (
    <div className="pb-24 pt-12">
      <SEO
        title="Contact Us"
        description="Start your journey with Rivendell AI. Summon the Council and let us see if we can help you."
        schema={schema}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="space-y-10"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
                <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest">Get in Touch</span>
              </div>
              <h1 className="text-5xl font-serif mb-6">
                Summon the <span className="text-gold-gradient">Council</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you have a fully formed vision or just the spark of an idea, we are ready to listen. Send us a message, and let us begin the conversation.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--gold)/0.1)] border border-[hsl(var(--gold)/0.2)] flex items-center justify-center shrink-0 text-[hsl(var(--gold))] group-hover:glow-gold-sm transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1 group-hover:text-[hsl(var(--gold))] transition-colors">Email Us</h3>
                  <p className="text-muted-foreground">info@rivendellai.co.uk</p>
                  <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--gold)/0.1)] border border-[hsl(var(--gold)/0.2)] flex items-center justify-center shrink-0 text-[hsl(var(--gold))] group-hover:glow-gold-sm transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1 group-hover:text-[hsl(var(--gold))] transition-colors">Call Us</h3>
                  <a href="tel:+447376971045" className="text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors">+44 7376 971045</a>
                  <p className="text-sm text-muted-foreground mt-1">Available Mon-Fri, 9am-5pm GMT</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--gold)/0.1)] border border-[hsl(var(--gold)/0.2)] flex items-center justify-center shrink-0 text-[hsl(var(--gold))] group-hover:glow-gold-sm transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1 group-hover:text-[hsl(var(--gold))] transition-colors">Visit Us</h3>
                  <p className="text-muted-foreground">The Last Homely House</p>
                  <p className="text-sm text-muted-foreground mt-1">London, UK</p>
                </div>
              </motion.div>
            </div>

            {/* Quote Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-2xl overflow-hidden border border-[hsl(var(--gold)/0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold)/0.1)] to-transparent" />
              <div className="absolute inset-0 gold-particles opacity-20" />
              <div className="relative z-10">
                <Star className="w-6 h-6 text-[hsl(var(--gold))] mb-4" fill="hsl(var(--gold))" />
                <h4 className="font-serif text-xl mb-2 italic">"Even the smallest person can change the course of the future."</h4>
                <p className="text-sm text-[hsl(var(--gold))]">- Galadriel</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Form - FRESH CLEAN VERSION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-card p-8 md:p-10 rounded-3xl border border-[hsl(var(--gold)/0.1)] shadow-2xl shadow-black/20 overflow-hidden"
          >
            {/* Golden accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent" />

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="text-foreground font-medium block mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full h-12 rounded-xl bg-background/50 border border-[hsl(var(--gold)/0.1)] px-4 text-foreground placeholder-muted-foreground focus:border-[hsl(var(--gold)/0.5)] focus:ring-2 focus:ring-[hsl(var(--gold)/0.2)] transition-all outline-none"
                />
              </div>

              {/* Email & Company */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-foreground font-medium block mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full h-12 rounded-xl bg-background/50 border border-[hsl(var(--gold)/0.1)] px-4 text-foreground placeholder-muted-foreground focus:border-[hsl(var(--gold)/0.5)] focus:ring-2 focus:ring-[hsl(var(--gold)/0.2)] transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="text-foreground font-medium block mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your organization (optional)"
                    className="w-full h-12 rounded-xl bg-background/50 border border-[hsl(var(--gold)/0.1)] px-4 text-foreground placeholder-muted-foreground focus:border-[hsl(var(--gold)/0.5)] focus:ring-2 focus:ring-[hsl(var(--gold)/0.2)] transition-all outline-none"
                  />
                </div>
              </div>

              {/* Service Interest */}
              <div>
                <label className="text-foreground font-medium block mb-2">Area of Interest</label>
                <input
                  type="text"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  placeholder="e.g. Web Dev, AI, Design..."
                  className="w-full h-12 rounded-xl bg-background/50 border border-[hsl(var(--gold)/0.1)] px-4 text-foreground placeholder-muted-foreground focus:border-[hsl(var(--gold)/0.5)] focus:ring-2 focus:ring-[hsl(var(--gold)/0.2)] transition-all outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-foreground font-medium block mb-2">Your Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or vision..."
                  rows={5}
                  className="w-full rounded-xl bg-background/50 border border-[hsl(var(--gold)/0.1)] px-4 py-3 text-foreground placeholder-muted-foreground focus:border-[hsl(var(--gold)/0.5)] focus:ring-2 focus:ring-[hsl(var(--gold)/0.2)] transition-all outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                className="w-full h-14 rounded-xl bg-gradient-to-r from-[hsl(var(--gold-dark))] via-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-background font-semibold text-lg flex items-center justify-center gap-2 glow-gold hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Request <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="text-center text-[hsl(var(--gold))] font-medium p-4 rounded-xl bg-[hsl(var(--gold)/0.1)] border border-[hsl(var(--gold)/0.2)]"
                >
                  ✓ Your message has reached the Council. Check your email for confirmation!
                </motion.div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="text-center text-red-500 font-medium p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                >
                  ✗ {errorMsg}
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
