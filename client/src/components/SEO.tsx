import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    name?: string;
    type?: string;
    keywords?: string[];
    image?: string;
    url?: string;
    schema?: object | string;
}

export default function SEO({
    title,
    description,
    name = 'Rivendell AI',
    type = 'website',
    keywords = [],
    image,
    url,
    schema,
}: SEOProps) {
    const siteTitle = title ? `${title} | ${name}` : name;
    const siteDescription = description || "Building digital experiences that feel natural, intuitive, and profound. Blending ancient wisdom with cutting-edge AI.";
    const siteKeywords = ["AI", "Artificial Intelligence", "Web Development", "Software Design", "Rivendell", ...keywords].join(", ");

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{siteTitle}</title>
            <meta name='description' content={siteDescription} />
            <meta name='keywords' content={siteKeywords} />

            {/* Open Graph tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            {image && <meta property="og:image" content={image} />}
            {url && <meta property="og:url" content={url} />}

            {/* Twitter Card tags */}
            <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            {image && <meta name="twitter:image" content={image} />}

            {/* JSON-LD Structured Data */}
            {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
        </Helmet>
    );
}
