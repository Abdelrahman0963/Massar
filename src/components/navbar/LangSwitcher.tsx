import { useTranslation } from "react-i18next";
import { HiLanguage } from "react-icons/hi2";
import { motion } from "framer-motion";
const LangSwitcher = () => {
    const { i18n } = useTranslation();

    const isArabic = i18n.language === "ar";

    const toggleLanguage = () => {
        i18n.changeLanguage(isArabic ? "en" : "ar");
    };

    return (
        <motion.nav
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer select-none"
        >
            <HiLanguage />
            <span>{isArabic ? "EN" : "AR"}</span>
        </motion.nav>
    );
};

export default LangSwitcher;
