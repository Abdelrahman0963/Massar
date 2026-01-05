import React from "react";
import { useTranslation } from "react-i18next";
import LangSwitcher from "./LangSwitcher";
import { motion } from "framer-motion";
const Navbar: React.FC = () => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/10">
            <div className="h-[5.5em] flex items-center justify-between md:px-24! px-4! py-3!">
                <div className="flex items-center gap-6">
                    <LangSwitcher />
                    <nav className="hidden md:flex">
                        <ul className="flex items-center gap-4">
                            <li className="hover:scale-110 transition-all delay-75"><a className="px-4! py-[0.6rem]! text-[1rem] rounded-lg bg-white text-black hover:bg-white/90 hover:scale-105 transition-all" href="#contact">{t("Contact Us")}</a></li>
                            <li className="hover:scale-110 transition-all delay-75"><a className="text-white/70 hover:text-white " href="#portfolio">{t("Our Work")}</a></li>
                            <li className="hover:scale-110 transition-all delay-75"><a className="text-white/70 hover:text-white " href="#why-us">{t("Why Us")}</a></li>
                            <li className="hover:scale-110 transition-all delay-75"><a className="text-white/70 hover:text-white " href="#work">{t("How We Work")}</a></li>
                            <li className="hover:scale-110 transition-all delay-75"><a className="text-white/70 hover:text-white " href="#services">{t("Our Services")}</a></li>
                        </ul>
                    </nav>
                </div>
                <img className="md:w-44 w-28 h-auto  overflow-y-hidden " src=".\images\logo\Massar(AR).svg" alt="logo" />
            </div>
        </motion.div>
    );
};

export default Navbar;
