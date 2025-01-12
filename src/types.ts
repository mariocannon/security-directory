export interface Company {
    name: string;
    description: string;
    services: string[];
    region: string;
    slug: string;
    isTopFeatured: boolean;
    featuredImage?: string;  // Optional field that's only used when isTopFeatured is true
    verified: boolean;
    homepageFeature?: boolean;
} 