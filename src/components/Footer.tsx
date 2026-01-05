import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="border-t border-white/10 py-8! bg-[#0a0a0a] text-white">
            <div className="w-full  px-4! sm:px-6! lg:px-8! text-center text-white/60">
                <p>© {new Date().getFullYear()} {t("Massar Technology. All rights reserved.")}</p>
            </div>
        </footer>
    )
}

export default Footer
