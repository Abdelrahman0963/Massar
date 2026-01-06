import { useTranslation } from "react-i18next";
import { HiLanguage } from "react-icons/hi2";
const LangSwitcher = () => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const toggleLanguage = () => {
        i18n.changeLanguage(isArabic ? "en" : "ar");
    };

    return (
        <nav
            onClick={toggleLanguage}
            className="flex hover:scale-110 transition-all delay-0  items-center gap-1 px-3! py-2! rounded-lg bg-white/5 border border-white/10 hover:bg-white/10  cursor-pointer select-none"
        >
            <span className="text-white">{isArabic ? "EN" : "AR"}</span>
            <HiLanguage className="text-white text-lg" />
        </nav>
    );
};

export default LangSwitcher;
