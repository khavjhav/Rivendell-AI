import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { BLOG_POSTS } from "@/data/blogPosts";
import NotFound from "./not-found";

const FADE_UP = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function BlogPost() {
    const [match, params] = useRoute("/blog/:id");
    const post = BLOG_POSTS.find(p => p.id === params?.id);

    if (!match || !post) {
        return <NotFound />;
    }

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.summary,
        "image": post.image,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "datePublished": post.date
    };

    return (
        <div className="pb-24 pt-32">
            <SEO
                title={post.title}
                description={post.summary}
                image={post.image}
                type="article"
                schema={schema}
            />

            <article className="container mx-auto px-4 md:px-6 max-w-4xl">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link href="/blog">
                        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors cursor-pointer">
                            <ArrowLeft className="w-4 h-4" /> Back to News
                        </span>
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.header
                    initial="hidden"
                    animate="visible"
                    variants={FADE_UP}
                    className="mb-12"
                >
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                        <span className="px-3 py-1 rounded-full border border-[hsl(var(--gold)/0.2)] text-[hsl(var(--gold))] flex items-center gap-2">
                            <Tag className="w-3 h-3" /> {post.category}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <User className="w-4 h-4" /> {post.author}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-8">
                        {post.title}
                    </h1>

                    {/* Hero Image */}
                    {post.image && (
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-[hsl(var(--gold)/0.1)]">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                </motion.header>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-[hsl(var(--gold))] prose-strong:text-[hsl(var(--gold))] prose-blockquote:border-[hsl(var(--gold))] prose-li:text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Footer / Share */}
                <div className="mt-16 pt-8 border-t border-[hsl(var(--gold)/0.1)] flex justify-between items-center">
                    <p className="text-muted-foreground italic">
                        Written by the Council
                    </p>
                    <button
                        onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: post.title,
                                    text: post.summary,
                                    url: window.location.href,
                                }).catch(console.error);
                            } else {
                                navigator.clipboard.writeText(window.location.href);
                                // Toast could go here
                            }
                        }}
                        className="flex items-center gap-2 text-sm font-medium text-[hsl(var(--gold))] hover:glow-gold transition-all"
                    >
                        <Share2 className="w-4 h-4" /> Share Article
                    </button>
                </div>
            </article>
        </div>
    );
}
