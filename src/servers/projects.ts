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
        image: "/images/projects/i.webp",
        liveUrl: "https://apps.apple.com/eg/app/incentify/id6483004442?l=ar",
    },
    {
        id: 4,
        title: "Naseh App",
        description: "Naseh is Legal Consultation App ",
        image: "/images/projects/n.webp",
        liveUrl: "https://apps.apple.com/il/app/naseh/id6751805697",
    }, {
        id: 5,
        title: "EcoCart (UIUX Design)",
        description: "EcoCart — Sustainable Shopping Experience",
        image: "/images/projects/EcoCart.png",
        liveUrl: "https://www.behance.net/gallery/238985187/EcoCart-Sustainable-Shopping-Experience",
    }, {
        id: 6,
        title: "Swarny App (UIUX Design)",
        description: " Swarny App (UI/UX Case Study)",
        image: "/images/projects/Sawrny.png",
        liveUrl: "https://www.behance.net/gallery/236492265/-Swarny-App-(UIUX-Case-Study)",
    }
];
