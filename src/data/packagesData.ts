export interface HealthPackage {
  id: string;
  name: string;
  tagline: string;
  recommendedAge: string;
  screeningObjective: string;
  keyBenefits: string[];
  testCount: number;
  featured: boolean;
}

export interface PackageComparisonCategory {
  categoryName: string;
  tests: {
    testName: string;
    description: string;
    includedIn: { [packageId: string]: boolean | string }; // true, false, or custom string (e.g., 'Optional' or 'Includes ECG')
  }[];
}

export const healthPackages: HealthPackage[] = [
  {
    id: 'essential-wellness',
    name: 'Essential Wellness Screening',
    tagline: 'A foundational health check tracking vital hematology and organ health indicators.',
    recommendedAge: 'All ages (18+), recommended annually',
    screeningObjective: 'Baseline screen for anemia, blood sugar anomalies, lipid balances, and liver/kidney filters.',
    keyBenefits: [
      'Identifies early warning signs of metabolic shifts',
      'Provides an objective baseline for lifestyle adjustments',
      'Affordable, high-value yearly wellness marker checks'
    ],
    testCount: 32,
    featured: false
  },
  {
    id: 'family-health',
    name: 'Family Health Safeguard',
    tagline: 'Tailored diagnostics covering chronic risk profiling and endocrine health.',
    recommendedAge: 'Adults (30+), recommended for family tracking',
    screeningObjective: 'Deeper analysis including thyroid function, advanced cholesterol profiling, and diabetic indicators.',
    keyBenefits: [
      'Screens for common hereditary issues (thyroid, cardiac risks)',
      'Identifies pre-diabetic states for prompt intervention',
      'Includes key inflammatory markers for systemic checks'
    ],
    testCount: 48,
    featured: true
  },
  {
    id: 'executive-screening',
    name: 'Executive Health Assessment',
    tagline: 'A premium, multi-system check combining deep blood diagnostics and active cardiac tracing.',
    recommendedAge: 'Professionals (35+) under high stress or sedentary roles',
    screeningObjective: 'Complete organ screening combined with baseline heart assessments to flag early cardiovascular stress.',
    keyBenefits: [
      'Comprehensive biochemical mapping plus cardiac health checks',
      'Identifies liver congestion, uric acid risks, and electrolyte imbalances',
      'Accompanied by custom preparation tracking and rapid report reviews'
    ],
    testCount: 64,
    featured: false
  },
  {
    id: 'comprehensive-master',
    name: 'Comprehensive Master Checkup',
    tagline: 'Our most thorough diagnostic evaluation integrating imaging, cardiac scans, and clinical profiling.',
    recommendedAge: 'Adults (45+) or individuals requiring full-body diagnostic audits',
    screeningObjective: 'Full-spectrum preventive health assessment looking at systemic inflammation, hormonal health, joint health, and internal organs via imaging.',
    keyBenefits: [
      'Uncompromised diagnostic review of all major organ systems',
      'Combines advanced imaging (ultrasound/X-ray) and cardiac tests (ECG/Echocardiography)',
      'Detailed, comparative report compilation with prioritized action recommendations'
    ],
    testCount: 85,
    featured: false
  }
];

export const comparisonCategories: PackageComparisonCategory[] = [
  {
    categoryName: 'Haematology & Inflammation',
    tests: [
      { testName: 'Complete Blood Count (CBC) with ESR', description: 'Evaluates red/white blood cells, platelets, and hemoglobin to detect anemia, infections, and leukemia.', includedIn: { 'essential-wellness': true, 'family-health': true, 'executive-screening': true, 'comprehensive-master': true } },
      { testName: 'Blood Grouping & Rh Typing', description: 'Determines ABO blood group and Rh factor.', includedIn: { 'essential-wellness': true, 'family-health': true, 'executive-screening': true, 'comprehensive-master': true } },
      { testName: 'High-Sensitivity C-Reactive Protein (hs-CRP)', description: 'Sensitive marker of low-grade systemic inflammation and cardiovascular risk.', includedIn: { 'essential-wellness': false, 'family-health': true, 'executive-screening': true, 'comprehensive-master': true } }
    ]
  },
  {
    categoryName: 'Diabetes & Metabolism',
    tests: [
      { testName: 'Fasting Blood Glucose', description: 'Measures circulating blood sugar levels after an overnight fast.', includedIn: { 'essential-wellness': true, 'family-health': true, 'executive-screening': true, 'comprehensive-master': true } },
      { testName: 'HbA1c (Glycated Haemoglobin)', description: 'Measures your average blood sugar level over the past 3 months.', includedIn: { 'essential-wellness': false, 'family-health': true, 'executive-screening': true, 'comprehensive-master': true } },
      { testName: 'Post-Prandial Blood Sugar (PPBS)', description: 'Tracks blood glucose levels 2 hours following a standard meal.', includedIn: { 'essential-wellness': false, 'family-health': false, 'executive-screening': true, 'comprehensive-master': true } }
    ]
  },
  {
    categoryName: 'Lipid & Cardiovascular Profile',
    tests: [
      { testName: 'Total Cholesterol', description: 'Measures all the cholesterol in all lipoprotein particles.', includedIn: { 'essential-wellness': true, 'family-health': true, 'executive-screening': true, 'comprehensive-master': true } },
      { testName: 'HDL (Good) & LDL (Bad) Cholesterol', description: 'Tracks protective high-density vs. structural low-density lipoproteins.', includedIn: { 'essential-wellness': true, 'family-health': true, 'executive-screening': true, 'comprehensive-master': true } },
      { testName: 'Triglycerides', description: 'Measures circulating fats in the blood, an indicator of metabolic and cardiac risk.', includedIn: { 'essential-wellness': true, 'family-health': true, 'executive-screening': true, 'comprehensive-master': true } },
      { testName: 'Apolipoproteins A1 & B', description: 'Advanced structural lipid proteins indicating vascular plaque risk.', includedIn: { 'essential-wellness': false, 'family-health': false, 'executive-screening': false, 'comprehensive-master': true } }
    ]
  },
  {
    categoryName: 'Renal & Kidney Filters',
    tests: [
      { testName: 'Urea & Serum Creatinine', description: 'Evaluates waste product filtration to monitor kidney efficiency.', includedIn: { 'essential-wellness': true, 'family-health': true, 'executive-screening': true, 'comprehensive-master': true } },
      { testName: 'Uric Acid', description: 'Monitors purine breakdown; elevated levels indicate risk of gout or kidney stones.', includedIn: { 'essential-wellness': false, 'family-health': true, 'executive-screening': true, 'comprehensive-master': true } },
      { testName: 'Serum Electrolytes (Na, K, Cl)', description: 'Checks balance of vital salts essential for nerve and muscle functions.', includedIn: { 'essential-wellness': false, 'family-health': false, 'executive-screening': true, 'comprehensive-master': true } }
    ]
  },
  {
    categoryName: 'Liver & Hepatic Function',
    tests: [
      { testName: 'Liver Function Test (LFT) Panel', description: 'Measures Bilirubin, SGOT, SGPT, and Alkaline Phosphatase to assess liver strain or damage.', includedIn: { 'essential-wellness': 'Partial', 'family-health': true, 'executive-screening': true, 'comprehensive-master': true } },
      { testName: 'Serum Albumin & Total Protein', description: 'Tracks synthetic liver capacity and general nutritional status.', includedIn: { 'essential-wellness': false, 'family-health': true, 'executive-screening': true, 'comprehensive-master': true } }
    ]
  },
  {
    categoryName: 'Hormonal & Thyroid Endocrine',
    tests: [
      { testName: 'TSH (Thyroid Stimulating Hormone)', description: 'Primary screening test for thyroid under- or over-activity.', includedIn: { 'essential-wellness': false, 'family-health': true, 'executive-screening': true, 'comprehensive-master': true } },
      { testName: 'Free T3 & Free T4', description: 'Measures active thyroid hormones circulating in the blood.', includedIn: { 'essential-wellness': false, 'family-health': false, 'executive-screening': true, 'comprehensive-master': true } },
      { testName: 'Vitamin D & Vitamin B12', description: 'Measures crucial vitamins regulating bone density, nerve health, and immunity.', includedIn: { 'essential-wellness': false, 'family-health': false, 'executive-screening': 'Optional', 'comprehensive-master': true } }
    ]
  },
  {
    categoryName: 'Cardiac & Imaging Screenings',
    tests: [
      { testName: '12-Lead Electrocardiogram (ECG)', description: 'Electrical tracing of the heart\'s rhythm and activity.', includedIn: { 'essential-wellness': false, 'family-health': 'Optional', 'executive-screening': true, 'comprehensive-master': true } },
      { testName: '2D Echocardiography', description: 'Cardiovascular ultrasound evaluating heart chambers and valves.', includedIn: { 'essential-wellness': false, 'family-health': false, 'executive-screening': 'Optional', 'comprehensive-master': true } },
      { testName: 'Chest Digital X-Ray', description: 'Radiographic image of heart size, lungs, and rib structures.', includedIn: { 'essential-wellness': false, 'family-health': false, 'executive-screening': true, 'comprehensive-master': true } },
      { testName: 'Abdomen & Pelvis Ultrasound', description: 'Screening for liver fat, gallstones, kidneys, and spleen anomalies.', includedIn: { 'essential-wellness': false, 'family-health': false, 'executive-screening': false, 'comprehensive-master': true } }
    ]
  }
];
