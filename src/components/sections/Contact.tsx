import React from 'react'
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const Form = React.lazy(() => import('@/components/contact/Form'));
const Contact = () => {
    const { t } = useTranslation();
    return (
        <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden md:pt-4!">
            <div className="w-full flex items-center gap-4 flex-col">
                <motion.nav
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="text-center space-y-6 px-4! bg-[#1a1a21]/80 backdrop-blur-lg border border-white/10 rounded-full py-3!" >
                    <p className="text-white/60 text-sm md:text-[1rem]">{t("Contact Us")}</p>
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
                    <h1 className="text-3xl md:text-5xl font-bold text-white mt-6 md:mt-12">{t("Let's Start Your Project")}</h1>
                    <p className="text-center md:text-[1.2rem] text-[0.8rem] text-white/60 mt-4!">{t("Ready to listen to your idea and turn it into digital reality")}</p>
                </motion.div>
                <div className="flex items-center justify-center gap-6">
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Contact
