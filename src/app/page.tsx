import React from 'react';
import { Metadata } from 'next';
import { getCachedTestProfiles } from '@/lib/cached-tests';
import HomeClient from '@/components/HomeClient';
import SEO from '@/components/SEO';
import { type TestProfile } from '@/lib/types';

export const metadata: Metadata = {
  title: "Aradhiya Scans & Lab | Precision Diagnostics in Chidambaram, Tamil Nadu",
  description: "Experience premium, accurate diagnostics in Chidambaram. Offering high-resolution CT Scan, Digital X-Ray, ECG, Echocardiography, and comprehensive laboratory diagnostics.",
  alternates: {
    canonical: "/"
  }
};

export default async function Home() {
  let featuredPackages: TestProfile[] = [];
  try {
    const allProfiles = await getCachedTestProfiles();
    featuredPackages = allProfiles.filter(p => p.showOnHome);
  } catch (err) {
    console.error("Failed to load featured packages on server:", err);
  }

  return (
    <>
      <SEO />
      <HomeClient featuredPackages={featuredPackages} />
    </>
  );
}
