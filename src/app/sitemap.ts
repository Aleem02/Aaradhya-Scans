import { MetadataRoute } from 'next';
import { servicesData } from '@/data/servicesData';
import { fetchTests, fetchTestProfiles } from '@/lib/tests-service';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://aradhiyascans.com';

  // Base routes
  const routes = ['', '/about', '/contact', '/services', '/tests'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Static services from servicesData
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic tests and profiles from database
  let testRoutes: MetadataRoute.Sitemap = [];
  try {
    const tests = await fetchTests();
    const profiles = await fetchTestProfiles();
    
    const allItems = [...tests, ...profiles];
    testRoutes = allItems.map((item) => ({
      url: `${baseUrl}/tests/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch (e) {
    console.error('Failed to generate sitemap for dynamic tests:', e);
  }

  return [...routes, ...serviceRoutes, ...testRoutes];
}
