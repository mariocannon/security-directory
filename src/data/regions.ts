import type { Region } from '../types';

export const regions: Region[] = [
    {
        name: 'Auckland',
        companies: [
            {
                name: "SecureWatch2 NZ",
                description: "Leading provider of security solutions in Auckland",
                services: ["CCTV", "Alarm Systems", "Access Control"],
                region: "Auckland",
                slug: "securewatch-nz",
                isTopFeatured: false,
                verified: true,
                homepageFeature: false
            },
            {
                name: "SecureWatch1 NZ",
                description: "Leading provider of security solutions in Auckland",
                services: ["CCTV", "Alarm Systems", "Access Control"],
                region: "Auckland",
                slug: "securewatch-nz",
                isTopFeatured: true,
                featuredImage: "/images/securewatch1-featured.jpg",
                verified: true,
                homepageFeature: true
            }
            
        ]
    },
    {
        name: 'Wellington',
        companies: []
    },
    {
        name: 'Christchurch',
        companies: []
    },
    {
        name: 'Hamilton',
        companies: []
    },
    {
        name: 'Tauranga',
        companies: []
    },
    {
        name: 'Dunedin',
        companies: []
    },
    {
        name: 'Palmerston North',
        companies: []
    },
    {
        name: 'Napier',
        companies: []
    },
    {
        name: 'Rotorua',
        companies: []
    },
    {
        name: 'New Plymouth',
        companies: []
    }
];