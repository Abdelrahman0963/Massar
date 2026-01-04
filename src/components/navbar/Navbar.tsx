import React from "react";
import { useTranslation } from "react-i18next";
import LangSwitcher from "./LangSwitcher";
import { motion } from "framer-motion";
const Navbar: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/10">
            <div className="flex items-center justify-between md:px-16 px-4 py-2  md:py-2">
                <div className="flex items-center gap-8">
                    <LangSwitcher />
                    <nav className="hidden md:flex">
                        <ul className="flex items-center gap-4">
                            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><a className="px-5 py-2 text-[1rem] rounded-lg bg-white text-black hover:bg-white/90 hover:scale-105 transition-all" href="#contact">{t("Contact Us")}</a></motion.li>
                            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><a className="text-white/70 hover:text-white " href="#portfolio">{t("Our Work")}</a></motion.li>
                            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><a className="text-white/70 hover:text-white " href="#why-us">{t("Why Us")}</a></motion.li>
                            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><a className="text-white/70 hover:text-white " href="#work">{t("How We Work")}</a></motion.li>
                            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><a className="text-white/70 hover:text-white " href="#services">{t("Our Services")}</a></motion.li>
                        </ul>
                    </nav>
                </div>
                <img className="md:w-40 w-28 h-auto  overflow-y-hidden " src=".\images\logo\Massar(AR).svg" alt="logo" />
            </div>
        </div>
    );
};

export default Navbar;
