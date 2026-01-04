import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const gitDir = (lang: string) => {
    return lang === 'ar' ? 'rtl' : 'ltr';
}
const useDirection = () => {
    const { i18n } = useTranslation();
    useEffect(() => {
        const dir = gitDir(i18n.language);
        document.documentElement.dir = dir;
        i18n.changeLanguage(i18n.language);
    }, [i18n.language]);
}

export default useDirection
