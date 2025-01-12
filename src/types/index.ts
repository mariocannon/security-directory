export interface Company {
  name: string;
  description: string;
  services: string[];
  region: string;
  slug: string;
  isFeatured: boolean;
}

export interface Region {
  name: string;
  companies: Company[];
}

export interface RegionImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface RegionImages {
  [key: string]: RegionImage;
}