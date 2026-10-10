export interface NavigationLink {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavigationCategory {
  title: string;
  href?: string;
  items: NavigationLink[];
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  degrees: string[];
  specialty: string;
  experienceYears?: number;
  bio?: string;
  image?: string;
  slug: string;
}

export interface Procedure {
  id: string;
  title: string;
  slug: string;
  category: 'robotic' | 'knee' | 'hip' | 'arthroscopy' | 'revision' | 'trauma';
  shortDescription?: string;
  canonicalPath: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  /** Shown on the homepage FAQ */
  featured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  /** Author's Google profile link (required attribution for Places API reviews) */
  authorUrl?: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  /** e.g. "2 months ago" */
  when?: string;
  /** Link to the review on Google Maps */
  url?: string;
}

export interface ReviewFeed {
  source: "google" | "curated" | "sample";
  rating?: number;
  count?: number;
  /** Google Maps listing for "See all reviews" */
  listingUrl?: string;
  reviews: Review[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: 'knee' | 'hip' | 'robotics';
  excerpt?: string;
  publishedAt?: string;
  author?: string;
  readTime?: string;
}
