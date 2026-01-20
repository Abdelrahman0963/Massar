import { lazy } from "react";
import { useTranslation } from "react-i18next";
const Contact = lazy(() => import("@/components/sections/Contact"));

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className=" md:px-24! px-4! py-3! bg-[#0a0a0a] text-white">
            <Contact />
            <div className="w-full  px-4! sm:px-6! lg:px-8! text-center text-white/60 border-t border-white/10">
                <p>© {new Date().getFullYear()} {t("Massar Technology. All rights reserved.")}</p>
            </div>
        </footer>
    )
}

export default Footer
