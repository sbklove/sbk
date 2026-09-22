export type ProductCategory = 
  | 'indoor-outdoor'
  | 'smart-signage'
  | 'currency-token'
  | 'transparent-flexible';

export interface ProductItem {
  id: string;
  name: string;
  modelCode: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  pixelPitch: string;
  brightness: string;
  refreshRate: string;
  viewingAngle: string;
  ipRating: string;
  serviceType: 'Front Maintenance' | 'Dual Front/Rear' | 'Full Front Magnetic';
  contrastRatio: string;
  cabinetSize: string;
  cabinetWeight: string;
  powerConsumption: string;
  bestFor: string[];
  keyFeatures: string[];
  isPopular?: boolean;
  accentColor: string;
}

export interface SectorItem {
  id: string;
  name: string;
  icon: string;
  headline: string;
  description: string;
  solutions: string[];
  recommendedPitch: string;
  typicalInstallation: string;
  stats: string;
  statLabel: string;
  accent: 'blue' | 'green';
}

export interface ProjectItem {
  id: string;
  title: string;
  clientSector: string;
  location: string;
  displaySize: string;
  pixelPitch: string;
  statMetric: string;
  statLabel: string;
  summary: string;
  tags: string[];
  features: string[];
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  sector: string;
  productCategory: string;
  pixelPitch: string;
  dimensions: string;
  mountingType: string;
  timeline: string;
  notes: string;
}
