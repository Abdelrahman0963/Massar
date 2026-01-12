import { useTranslation } from "react-i18next";
import GradientText from "../GradientText";
import { motion } from "framer-motion";

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden md:pt-4!">
            <div className="w-full flex items-center gap-4 flex-col">
                <motion.nav
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="text-center space-y-6 px-4! bg-[#1a1a21]/80 backdrop-blur-lg border border-white/10 rounded-full py-3!" >
                    <p className="text-white/60 text-sm md:text-[1rem]">{t("We design and develop complete digital solutions")}</p>
                </motion.nav>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                    className="relative flex flex-col items-center text-center gap-2.5"
                >
                    <div className="absolute -top-10 md:w-2xl md:h-56 bg-[#3eaffa]/40 blur-[120px] rounded-full"></div>

                    <h1 className="relative z-10 text-4xl md:text-7xl font-bold text-white mt-6 md:mt-12">
                        {t("We transform your ideas into")}
                    </h1>

                    <GradientText
                        colors={["#1f42a3", "#3eaffa", "#1f42a3"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="relative text-4xl md:text-7xl font-bold text-center"
                    >
                        {t("successful digital platforms")}
                    </GradientText>

                    <p className="relative z-10 text-center md:text-[1.2rem] text-[0.8rem] text-white/60 mt-4!">
                        {t("We help business owners grow by designing professional websites and developing custom digital systems that streamline operations efficiently.")}
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 mt-6!">
                    <nav
                        className="bg-white rounded-lg px-4! py-3! hover:scale-110 scale-100 transition-all delay-0 cursor-pointer">
                        <a className="text-black text-[1rem]" href="contact">{t("start your project")}</a>
                    </nav>
                    <nav
                        className="mt-4 md:mt-0 md:ml-4 border border-gray-50 bg-white/10 rounded-lg px-4! py-3! scale-100 hover:scale-110 delay-0 transition-all cursor-pointer">
                        <a className="text-white text-[1rem]" href="#portfolio">{t("view our work")}</a>
                    </nav>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
