import type { Region } from '../types';

export const regions: Region[] = [
    {
        name: 'Auckland',
        companies: [
            {
                name: "Fortress Security",
                description: "Comprehensive security services for commercial, retail, and residential clients in Auckland.",
                services: ["CCTV", "Alarm Systems", "Access Control", "Maintenance"],
                region: "Auckland",
                slug: "fortress-security",
                isTopFeatured: false,
                verified: false,
                homepageFeature: false
            },
            {
                name: "Rasant Security",
                description: "Specialists in home and business security systems with over 25 years of experience in Auckland.",
                services: ["CCTV", "Alarm Systems", "Access Control"],
                region: "Auckland",
                slug: "rasant-security",
                isTopFeatured: false,
                verified: false,
                homepageFeature: false
            },
            {
                name: "Hathaway Technical Services Ltd",
                description: "Experts in security systems, cameras, and integrated control systems with decades of experience.",
                services: ["CCTV", "Alarm Systems", "Data Systems", "Audio Visual"],
                region: "Auckland",
                slug: "hathaway-technical-services",
                isTopFeatured: false,
                verified: false,
                homepageFeature: false
            },
            {
                name: "Matrix Security",
                description: "Providers of integrated security solutions including alarm monitoring and professional patrols.",
                services: ["Alarm Monitoring", "Security Patrols", "Integrated Security Design"],
                region: "Auckland",
                slug: "matrix-security",
                isTopFeatured: false,
                verified: true,
                homepageFeature: false
            },
            {
                name: "ADS Security",
                description: "Complete security solutions provider with international expertise in advanced systems.",
                services: ["CCTV", "Access Control", "Intruder Alarms", "Fire Alarms"],
                region: "Auckland",
                slug: "ads-security",
                isTopFeatured: false,
                verified: false,
                homepageFeature: false
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
    },
    { name: 'Ashburton', companies: [] },
];