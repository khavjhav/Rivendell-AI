import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, User, ArrowRight, Tag, BookOpen } from "lucide-react";
import SEO from "@/components/SEO";
import { BLOG_POSTS, BlogPost } from "@/data/blogPosts";

const FADE_UP = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function Blog() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Rivendell AI News & Insights",
        "description": "Latest updates, tech insights, and news from Rivendell AI.",
        "blogPost": BLOG_POSTS.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.summary,
            "author": {
                "@type": "Person",
                "name": post.author
            },
            "datePublished": post.date
        }))
    };

    return (
        <div className="pb-24 pt-12">
            <SEO
                title="News & Insights"
                description="Explore the latest thoughts on AI, technology, and the future from the Rivendell Council."
                schema={schema}
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
                        <BookOpen className="w-6 h-6 text-[hsl(var(--gold))]" />
                        <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest">The Library</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif mb-6">
                        News & <span className="text-gold-gradient">Insights</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Chronicles of our journey, updates from the forge, and wisdom from the frontier of Artificial Intelligence.
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col bg-card rounded-3xl overflow-hidden border border-[hsl(var(--gold)/0.1)] hover:border-[hsl(var(--gold)/0.3)] transition-all duration-500 hover:shadow-2xl hover:shadow-[hsl(var(--gold)/0.05)]"
                        >
                            {/* Image Container */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                {post.image && (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                )}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium text-[hsl(var(--gold))] border border-[hsl(var(--gold)/0.3)] flex items-center gap-1">
                                        <Tag className="w-3 h-3" /> {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground/80 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <User className="w-3 h-3" /> {post.author}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-serif mb-3 group-hover:text-[hsl(var(--gold))] transition-colors line-clamp-2">
                                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                </h2>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.summary}
                                </p>

                                <div className="mt-auto">
                                    <Link href={`/blog/${post.id}`}>
                                        <span className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--gold))] hover:underline cursor-pointer group/link">
                                            Read Article <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
