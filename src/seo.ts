import { contact, faqs, services } from './data/site'
import siteConfig from '../site.config.json'

/**
 * Public site URL, from site.config.json. Change it there when you move to a
 * custom domain — canonical URL, Open Graph tags, structured data, sitemap.xml
 * and robots.txt all follow it.
 */
export const SITE_URL: string = siteConfig.siteUrl

export const seo = {
  siteName: 'Devora Labs',
  title: 'Devora Labs | Web & Mobile App Development Company in Sri Lanka',
  description:
    'Devora Labs is a web and mobile app development company. We build fast websites, web apps and iOS & Android apps with React, Next.js and React Native.',
  ogImage: `${SITE_URL}/og-image.png`,
  locale: 'en_US',
}

/** schema.org structured data (JSON-LD) describing the business, its services and FAQs. */
export function buildJsonLd() {
  const orgId = `${SITE_URL}/#organization`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': orgId,
        name: seo.siteName,
        url: SITE_URL,
        logo: `${SITE_URL}/icon-512.png`,
        image: seo.ogImage,
        description: seo.description,
        email: contact.email,
        telephone: contact.phone.replace(/\s/g, ''),
        address: { '@type': 'PostalAddress', addressCountry: 'LK' },
        areaServed: 'Worldwide',
        slogan: 'Build. Solve. Elevate.',
        knowsAbout: [
          'Web Development',
          'Mobile App Development',
          'UI/UX Design',
          'React',
          'Next.js',
          'React Native',
          'iOS App Development',
          'Android App Development',
        ],
        // Add your social profiles here (LinkedIn, Instagram, Behance, Clutch…) —
        // they help Google connect your brand across the web.
        sameAs: [] as string[],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital product services',
          itemListElement: services.map((s) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: s.title,
              description: s.description,
              url: `${SITE_URL}/#services`,
              provider: { '@id': orgId },
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: seo.siteName,
        publisher: { '@id': orgId },
        inLanguage: 'en',
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faqs`,
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  }
}
