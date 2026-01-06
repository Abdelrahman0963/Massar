import { useTranslation } from "react-i18next";
import { lazy } from "react";
import { motion } from "framer-motion";

const ServicesCards = lazy(() => import("../ServicesCards"));
const Services = () => {
    const { t } = useTranslation();
    return (
        <section id="services" className="relative min-h-screen flex items-center justify-center overflow-hidden md:pt-4!">
            <div className="w-full flex items-center gap-4 flex-col">
                <motion.nav
                    initial={{
                        scale: 0.7,
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="text-center space-y-6 px-4! bg-[#1a1a21]/80 backdrop-blur-lg border border-white/10 rounded-full py-3!" >
                    <p className="text-white/60 text-sm md:text-[1rem]">{t("What We Offer")}</p>
                </motion.nav>
                <motion.div
                    initial={{
                        y: 20, opacity: 0
                    }}
                    whileInView={{
                        y: 0, opacity: 1
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.6,
                        ease: "easeOut",
                    }}
                    className="flex flex-col items-center text-center gap-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mt-6 md:mt-12">{t("Our Services")}</h1>
                    <p className="text-center md:text-[1.2rem] text-[0.8rem] text-white/60 mt-4!">{t("We provide comprehensive digital solutions to transform your business into successful digital platforms")}</p>
                </motion.div>
                <ServicesCards />
            </div>
        </section >
    )
}

export default Services
