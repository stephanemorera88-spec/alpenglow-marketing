import { Helmet } from 'react-helmet-async';
import { COMPANY } from './config';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${COMPANY.url}/#business`,
  name: COMPANY.name,
  url: COMPANY.url,
  telephone: COMPANY.phoneHref.replace('tel:', ''),
  email: COMPANY.email,
  description: COMPANY.tagline,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Anchorage',
    addressRegion: 'AK',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'City',
    name: 'Anchorage',
  },
  priceRange: '$$',
};

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SEO({ title, description, canonical, schema }: SEOProps) {
  const fullUrl = `${COMPANY.url}${canonical}`;
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={COMPANY.name} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
