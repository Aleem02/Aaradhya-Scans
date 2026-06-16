import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin', // Prevent indexing of administrative dashboard
    },
    sitemap: 'https://aradhiyascans.com/sitemap.xml',
  };
}
