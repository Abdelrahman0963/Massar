import Hero from "@/components/sections/Hero"
import { lazy } from "react";
const Services = lazy(() => import("@/components/sections/Services"));
const Home = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white md:px-24! px-4! py-3!">
            <Hero />
            <Services />
        </div>
    )
}

export default Home
