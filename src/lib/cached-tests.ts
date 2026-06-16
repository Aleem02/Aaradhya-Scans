import { unstable_cache } from 'next/cache';
import { fetchTests, fetchTestProfiles, fetchServiceBySlug } from './tests-service';

// Helper to make Firestore results JSON-serializable
function makeSerializable<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export const getCachedTests = unstable_cache(
  async () => {
    const data = await fetchTests();
    return makeSerializable(data);
  },
  ['tests-list'],
  { revalidate: 3600, tags: ['tests'] }
);

export const getCachedTestProfiles = unstable_cache(
  async () => {
    const data = await fetchTestProfiles();
    return makeSerializable(data);
  },
  ['test-profiles-list'],
  { revalidate: 3600, tags: ['test_profiles'] }
);

export const getCachedServiceBySlug = unstable_cache(
  async (slug: string, type?: string) => {
    const data = await fetchServiceBySlug(slug, type);
    return makeSerializable(data);
  },
  ['service-by-slug'],
  { revalidate: 3600, tags: ['services'] }
);
