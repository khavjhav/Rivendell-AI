import { motion } from "framer-motion";
import { Link } from "wouter";
import { Briefcase, Code, MapPin, ArrowRight, Sparkles, Send } from "lucide-react";
import SEO from "@/components/SEO";

const FADE_UP = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

interface Job {
    id: string;
    title: string;
    type: string;
    location: string;
    description: string;
    requirements: string[];
}

const JOBS: Job[] = [
    {
        id: "ai-engineer",
        title: "AI Solutions Architect",
        type: "Full-time",
        location: "Remote / London",
        description: "Forge intelligent systems that bridge the gap between ancient wisdom and future tech. You will lead the design of LLM-based agents and automation workflows.",
        requirements: [
            "Experience with Python, PyTorch/TensorFlow",
            "Deep understanding of LLMs (GPT-4, Claude, Llama)",
            "Knowledge of RAG pipelines and Vector Databases",
            "3+ years in Machine Learning or Data Science"
        ]
    },
    {
        id: "frontend-dev",
        title: "Senior Frontend Developer",
        type: "Full-time",
        location: "Remote / UK",
        description: "Craft digital sanctuaries with React and TypeScript. You will be responsible for building immersive, highly responsive user interfaces that feel alive.",
        requirements: [
            "Expertise in React, TypeScript, and Tailwind CSS",
            "Experience with Framer Motion or GSAP",
            "Passion for UI/UX and pixel-perfect implementation",
            "5+ years of frontend development experience"
        ]
    },
    {
        id: "backend-dev",
        title: "Backend Engineer",
        type: "Full-time",
        location: "Remote",
        description: "Build the invisible foundations of Rivendell. You will design scalable APIs and secure data infrastructure for our AI applications.",
        requirements: [
            "Proficiency in Node.js / Express or Python / FastAPI",
            "Experience with PostgreSQL and Redis",
            "Understanding of microservices and serverless architecture",
            "Strong focus on security and performance optimization"
        ]
    }
];

export default function Careers() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": JOBS.map((job, index) => ({
            "@type": "JobPosting",
            "title": job.title,
            "description": job.description,
            "datePosted": new Date().toISOString().split('T')[0],
            "employmentType": "FULL_TIME",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "Rivendell AI",
                "sameAs": "https://rivendellai.co.uk"
            },
            "jobLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "London",
                    "addressCountry": "UK"
                }
            }
        }))
    };

    return (
        <div className="pb-24 pt-12">
            <SEO
                title="Careers - Join the Council"
                description="Join Rivendell AI. Help us forge the future of intelligent technology."
                schema={schema}
            />

            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={FADE_UP}
                    className="mb-24 text-center max-w-3xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
                        <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest">Join the Fellowship</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif mb-8">
                        Forge the <span className="text-gold-gradient">Future</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We are looking for visionaries, craftsmen, and scholars to join our council. Help us build digital sanctuaries that empower humanity.
                    </p>
                </motion.div>

                {/* Job Listings */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {JOBS.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="group relative bg-card rounded-3xl border border-[hsl(var(--gold)/0.1)] p-8 hover:border-[hsl(var(--gold)/0.3)] transition-all duration-500 hover:shadow-2xl hover:shadow-[hsl(var(--gold)/0.05)] flex flex-col h-full"
                        >
                            <div className="mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--gold)/0.05)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Code className="w-6 h-6 text-[hsl(var(--gold))]" />
                                </div>
                                <h3 className="text-2xl font-serif mb-2 group-hover:text-gold-gradient transition-colors">
                                    {job.title}
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                    <span className="flex items-center gap-1">
                                        <Briefcase className="w-3 h-3" /> {job.type}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-3 h-3" /> {job.location}
                                    </span>
                                </div>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {job.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {job.requirements.map((req, i) => (
                                        <div key={i} className="flex gap-2 text-sm text-muted-foreground/80">
                                            <span className="text-[hsl(var(--gold))]">•</span>
                                            {req}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto pt-6 border-t border-[hsl(var(--gold)/0.1)]">
                                <a
                                    href={`mailto:careers@rivendellai.co.uk?subject=Application for ${job.title}`}
                                    className="w-full py-3 rounded-full border border-[hsl(var(--gold)/0.3)] text-[hsl(var(--gold))] font-medium flex items-center justify-center gap-2 hover:bg-[hsl(var(--gold))] hover:text-background transition-all group-hover:scale-[1.02]"
                                >
                                    Apply Now <Send className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* General Application */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center max-w-2xl mx-auto p-12 rounded-3xl bg-[hsl(var(--gold)/0.03)] border border-[hsl(var(--gold)/0.1)]"
                >
                    <h3 className="text-2xl font-serif mb-4">Don't see your role?</h3>
                    <p className="text-muted-foreground mb-8">
                        The Council is always seeking exceptional talent. If you believe your skills can aid our mission, send us a signal.
                    </p>
                    <a
                        href="mailto:careers@rivendellai.co.uk?subject=General Application"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[hsl(var(--gold-dark))] to-[hsl(var(--gold))] text-background font-semibold hover:glow-gold transition-all"
                    >
                        Send Spontaneous Application <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
