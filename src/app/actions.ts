'use server';

import { updateTag, revalidatePath } from 'next/cache';

export async function revalidateCatalog() {
  try {
    updateTag('tests');
    updateTag('test_profiles');
    updateTag('services');
    revalidatePath('/tests');
    revalidatePath('/');
    console.log("Server cache successfully revalidated for tags: tests, test_profiles, services");
  } catch (error) {
    console.error("Failed to revalidate server cache:", error);
  }
}
