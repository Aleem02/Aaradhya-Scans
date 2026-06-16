import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, ChevronLeft } from 'lucide-react';
import { type MedicalTest, type TestProfile } from '@/lib/types';
import { getCachedServiceBySlug, getCachedTestProfiles } from '@/lib/cached-tests';
import TestDetailClient from '@/components/TestDetailClient';
import SEO from '@/components/SEO';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  let item: MedicalTest | TestProfile | null = null;
  try {
    item = await getCachedServiceBySlug(slug);
  } catch (err) {
    console.error("Failed to load metadata in dynamic route:", err);
  }

  if (!item) {
    return {
      title: "Service Not Found | Aradhiya Scans & Lab",
      description: "The requested diagnostic test or package could not be found."
    };
  }

  const isProfile = item.category === "Test Profiles" || item.category === "Laboratory Packages";
  const contentTypeName = isProfile ? "Screening Package" : "Diagnostic Lab Test";

  return {
    title: `${item.name} ${contentTypeName} | Aradhiya Scans`,
    description: `${item.description} Learn about turnaround times, test requirements, parameters checked, and schedule your appointment online.`,
    alternates: {
      canonical: `/tests/${slug}`
    }
  };
}

export default async function TestDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  let item: MedicalTest | TestProfile | null = null;
  let relatedPackages: TestProfile[] = [];

  try {
    item = await getCachedServiceBySlug(slug);
    
    if (item) {
      const currentItem = item;
      const isPkg = currentItem.category === "Test Profiles" || currentItem.category === "Laboratory Packages";
      if (isPkg) {
        const allProfiles = await getCachedTestProfiles();
        relatedPackages = allProfiles
          .filter(p => p.id !== currentItem.id)
          .slice(0, 3);
      }
    }
  } catch (err) {
    console.error("Failed to fetch service details on server:", err);
  }

  if (!item) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center bg-brand-cream min-h-[70vh] flex flex-col items-center justify-center font-sans text-brand-charcoal">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500 border border-red-100">
          <AlertCircle className="h-8 w-8" />
        </div>
        <h2 className="mt-6 font-serif text-2xl font-semibold text-brand-charcoal">Service Not Found</h2>
        <p className="mt-2 text-xs text-brand-charcoal/60 leading-relaxed font-medium max-w-sm">
          The diagnostic test or health package you are seeking could not be found. It may have been renamed or removed.
        </p>
        <Link 
          href="/tests" 
          className="mt-8 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-brand-cream bg-brand-emerald hover:bg-brand-emerald-dark transition flex items-center gap-1.5"
        >
          <ChevronLeft className="h-4 w-4" /> Back to Catalogue
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO />
      <TestDetailClient item={item} relatedPackages={relatedPackages} />
    </>
  );
}
