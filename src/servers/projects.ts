type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    liveUrl?: string;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Cure Booking App",
        description: "Complete online booking system for clinics",
        image: "/images/projects/Sign in.png",
        liveUrl: "https://r7-react-cure-2-8lbg.vercel.app/login",
    },
    {
        id: 2,
        title: "Ab3ad Company ",
        description: "Website for Ab3ad Real Estate Company (MVP)",
        image: "/images/projects/Ab3ad.png",
        liveUrl: "https://abaad-iota.vercel.app/",
    },
    {
        id: 3,
        title: "Incentify App",
        description: "Incentify is the ultimate workforce motivation platform designed for modern teams.",
        image: "/public/images/projects/i.webp",
        liveUrl: "https://apps.apple.com/eg/app/incentify/id6483004442?l=ar",
    },
    {
        id: 4,
        title: "Naseh App",
        description: "Naseh is Legal Consultation App ",
        image: "/public/images/projects/n.webp",
        liveUrl: "https://apps.apple.com/il/app/naseh/id6751805697",
    },
];
