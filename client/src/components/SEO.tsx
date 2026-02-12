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
    image = '/og-image.png',
    url = 'https://rivendellai.co.uk',
    schema,
}: SEOProps) {
    const siteUrl = url || 'https://rivendellai.co.uk';
    const activeImage = image || '/og-image.png';
    const ogImage = activeImage.startsWith('http') ? activeImage : `${siteUrl}${activeImage}`;

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
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={siteUrl} />

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
