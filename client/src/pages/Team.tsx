import { motion } from "framer-motion";
import { Linkedin, Mail, User } from "lucide-react";
import SEO from "@/components/SEO";

const TEAM_MEMBERS = [
    {
        name: "Elrond Ian",
        role: "Founder & CEO",
        bio: "Visionary leader with 15+ years in AI and strategic consulting. Guiding the council towards a harmonious digital future.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
        linkedin: "#",
        email: "elrond@rivendellai.co.uk"
    },
    {
        name: "Galadriel Chen",
        role: "Head of AI Research",
        bio: "PhD in Machine Learning. Specializes in LLM alignment and ethical AI architectures.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
        linkedin: "#",
        email: "galadriel@rivendellai.co.uk"
    },
    {
        name: "Aragorn Smith",
        role: "Lead Systems Architect",
        bio: "Expert in distributed systems and cloud infrastructure. Ensuring the realm's digital foundations are unbreakable.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        linkedin: "#",
        email: "aragorn@rivendellai.co.uk"
    },
    {
        name: "Arwen Undómiel",
        role: "Creative Director",
        bio: "Blending elven aesthetics with modern UI/UX principles to create enchanting digital experiences.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
        linkedin: "#",
        email: "arwen@rivendellai.co.uk"
    },
    {
        name: "Legolas Greenleaf",
        role: "Frontend Engineer",
        bio: "Pixel-perfect implementation with an eye for detail that rivals the keenest archer.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
        linkedin: "#",
        email: "legolas@rivendellai.co.uk"
    },
    {
        name: "Gimli Gloin",
        role: "Backend Engineer",
        bio: "Building robust, heavy-duty APIs and databases that stand the test of time.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
        linkedin: "#",
        email: "gimli@rivendellai.co.uk"
    }
];

const FADE_UP = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function Team() {
    return (
        <div className="pb-24 pt-12">
            <SEO
                title="The Council"
                description="Meet the minds behind Rivendell AI. A fellowship of technologists, designers, and strategists."
            />

            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={FADE_UP}
                    className="mb-20 text-center max-w-3xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <User className="w-6 h-6 text-[hsl(var(--gold))]" />
                        <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest">Our Team</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif mb-6">
                        The <span className="text-gold-gradient">Council</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        A fellowship of visionaries, builders, and guardians dedicated to forging a smarter, more ethical digital future.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TEAM_MEMBERS.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-card rounded-3xl overflow-hidden border border-[hsl(var(--gold)/0.1)] hover:border-[hsl(var(--gold)/0.3)] transition-all duration-300 hover:shadow-xl hover:shadow-[hsl(var(--gold)/0.05)]"
                        >
                            {/* Image Section */}
                            <div className="h-80 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                />

                                {/* Social Links Overlay */}
                                <div className="absolute bottom-4 left-4 z-20 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                    <a href={member.linkedin} className="p-2 rounded-full bg-background/20 backdrop-blur-md border border-white/20 text-white hover:bg-[hsl(var(--gold))] hover:border-[hsl(var(--gold))] transition-all">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    <a href={`mailto:${member.email}`} className="p-2 rounded-full bg-background/20 backdrop-blur-md border border-white/20 text-white hover:bg-[hsl(var(--gold))] hover:border-[hsl(var(--gold))] transition-all">
                                        <Mail className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="p-6">
                                <h3 className="text-2xl font-serif mb-1 group-hover:text-[hsl(var(--gold))] transition-colors">{member.name}</h3>
                                <p className="text-[hsl(var(--gold))] font-medium text-sm mb-4 uppercase tracking-widest">{member.role}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Join CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center p-12 rounded-3xl bg-[hsl(var(--gold)/0.03)] border border-[hsl(var(--gold)/0.1)]"
                >
                    <h2 className="text-3xl font-serif mb-4">A Seat awaits at the Table</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        The Council is always seeking new wisdom. If you believe your craft can help shape the future of AI, we invite you to join us.
                    </p>
                    <a href="/careers" className="inline-flex h-12 items-center justify-center rounded-full bg-[hsl(var(--gold))] px-8 text-sm font-medium text-background transition-colors hover:bg-[hsl(var(--gold-light))] shadow-lg hover:shadow-[hsl(var(--gold)/0.3)]">
                        Explore Opportunities
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
