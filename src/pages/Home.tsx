import Hero from "@/components/sections/Hero"
import { lazy } from "react";
const Services = lazy(() => import("@/components/sections/Services"));
const Work = lazy(() => import("@/components/sections/Work"));
const Features = lazy(() => import("@/components/sections/Features"));
const Portfolio = lazy(() => import("@/components/sections/Portfolio"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const Home = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white md:px-24! px-4! py-3!">
            <Hero />
            <Services />
            <Work />
            <Features />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home
