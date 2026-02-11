import { motion } from "framer-motion";
import { Link } from "wouter";
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from "lucide-react";
import SEO from "@/components/SEO";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FADE_UP = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

interface FAQItem {
    question: string;
    answer: string;
}

const FAQS: { category: string; items: FAQItem[] }[] = [
    {
        category: "General",
        items: [
            {
                question: "What is Rivendell AI?",
                answer: "Rivendell AI is a digital sanctuary where ancient wisdom meets cutting-edge technology. We are a software consultancy specializing in building intelligent web applications, AI agents, and bespoke digital experiences."
            },
            {
                question: "Where are you located?",
                answer: "Our physical sanctuary is in Hornchurch, London, UK. However, our council operates globally, working with clients across different time zones."
            }
        ]
    },
    {
        category: "Services",
        items: [
            {
                question: "Do you offer custom AI solutions?",
                answer: "Yes. We forge bespoke AI solutions ranging from RAG (Retrieval-Augmented Generation) chatbots to autonomous agents that automate complex business workflows."
            },
            {
                question: "What technologies do you use?",
                answer: "Our craftsmen are skilled in modern stacks: React, Python, Node.js, TypeScript, and various AI models (OpenAI, Anthropic, Llama). We choose the right tool for the quest."
            }
        ]
    },
    {
        category: "Process",
        items: [
            {
                question: "How does a project start?",
                answer: "It begins with a Council meeting (consultation) to understand your vision. We then propose a roadmap, followed by a formal agreement before commencement."
            },
            {
                question: "What is your pricing model?",
                answer: "We offer both fixed-price quests for defined projects and monthly covenants (retainers) for ongoing support and evolution."
            }
        ]
    }
];

export default function FAQ() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.flatMap(category =>
            category.items.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                }
            }))
        )
    };

    return (
        <div className="pb-24 pt-12">
            <SEO
                title="FAQ - Frequently Asked Questions"
                description="Answers to common questions about Rivendell AI's services, process, and technology."
                schema={schema}
            />

            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={FADE_UP}
                    className="mb-16 text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <HelpCircle className="w-6 h-6 text-[hsl(var(--gold))]" />
                        <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest">Knowledge Base</span>
                    </div>
                    <h1 className="text-5xl font-serif mb-6">
                        Frequently Asked <span className="text-gold-gradient">Questions</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Seek answers here. If your query remains unresolved, the Council awaits your message.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {FAQS.map((section, index) => (
                        <motion.div
                            key={section.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h2 className="text-2xl font-serif mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 bg-[hsl(var(--gold))] rounded-full" />
                                {section.category}
                            </h2>

                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {section.items.map((item, i) => (
                                    <AccordionItem
                                        key={i}
                                        value={`${section.category}-${i}`}
                                        className="border border-[hsl(var(--gold)/0.1)] rounded-xl bg-card px-6 transition-all hover:border-[hsl(var(--gold)/0.3)] data-[state=open]:border-[hsl(var(--gold)/0.5)] data-[state=open]:shadow-lg"
                                    >
                                        <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium text-left">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center max-w-2xl mx-auto p-12 rounded-3xl bg-[hsl(var(--gold)/0.03)] border border-[hsl(var(--gold)/0.1)]"
                >
                    <h3 className="text-2xl font-serif mb-4">Still have questions?</h3>
                    <p className="text-muted-foreground mb-8">
                        The deepest wisdom is found in conversation. Reach out to us directly.
                    </p>
                    <Link href="/contact">
                        <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[hsl(var(--gold-dark))] to-[hsl(var(--gold))] text-background font-semibold hover:glow-gold transition-all">
                            Contact Support <MessageCircle className="w-4 h-4" />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
