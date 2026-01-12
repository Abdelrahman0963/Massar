import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Content = () => {
    const { t } = useTranslation();
    const copyEmail = () => {
        navigator.clipboard.writeText("massar.tech0001@gmail.com");
        try {
            toast.success("Email copied to clipboard!");
        } catch (error) {
            alert("Failed to copy email. Please try manually.");
        }
    };
    const copyWhatsapp = () => {
        navigator.clipboard.writeText("+0201144706479");
        try {
            toast.success("Phone number copied to clipboard!");
        } catch (error) {
            alert("Failed to copy phone number. Please try manually.");
        }
    };
    return (
        <div className='md:w-1/2 w-full flex flex-col items-center justify-center gap-4  p-4!'>
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
                className="w-full  flex flex-col rounded-xl items-start justify-start gap-6 py-8! px-6! border border-white/10 bg-linear-to-br from-[#0a0a0a] to-[#1f42a3]">
                <h2 className="text-white text-[1rem] md:text-2xl">
                    {t("Contact Methods")}
                </h2>
                <div className="flex flex-col items-start justify-start gap-3">
                    <div className="flex items-start gap-3 cursor-pointer transition-all hover:opacity-80 hover:translate-x-1.5">
                        {/* ICON */}
                        <nav className="flex items-center justify-center p-3! bg-[#2d273b]/60 rounded-xl shrink-0">
                            <CiMail size={30} className="text-[#3eaffa]" />
                        </nav>

                        {/* TEXT */}
                        <nav className="flex flex-col gap-2 min-w-0">
                            <span className="text-white/60 text-sm">
                                {t("Email")}
                            </span>

                            <span
                                onClick={copyEmail}
                                className="cursor-pointer text-sm break-all leading-relaxed"
                            >
                                massar.tech0001@gmail.com
                            </span>
                        </nav>
                    </div>


                    <div className="flex items-start gap-3 cursor-pointer transition-all hover:opacity-80 hover:translate-x-1.5 mt-4">
                        {/* ICON */}
                        <nav className="flex items-center justify-center p-3! bg-[#2d273b]/60 rounded-xl shrink-0">
                            <FaWhatsapp size={30} className="text-[#3eaffa]" />
                        </nav>

                        {/* TEXT */}
                        <nav className="flex flex-col gap-2 min-w-0">
                            <span className="text-white/60 text-sm">
                                {t("WhatsApp")}
                            </span>

                            <span
                                onClick={copyWhatsapp}
                                className="cursor-pointer text-sm break-all"
                            >
                                +0201144706479
                            </span>
                        </nav>
                    </div>


                </div>
            </motion.div>
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
                    delay: 0.7,
                    ease: "easeOut",
                }}
                className="w-full  flex flex-col  items-start justify-start gap-6 py-8! px-6! rounded-xl border border-white/10 bg-[#171717]">
                <h2 className="text-white text-[1rem] md:text-2xl">
                    {t("Working Hours")}
                </h2>
                <div className="flex flex-col gap-2 w-full">
                    <nav className="flex items-start justify-between">
                        <span className="text-white/60">{t("Saturday - Thursday")}</span>
                        <span className="text-white/80">{t("9:00 AM - 6:00 PM")}</span>
                    </nav>
                    <nav className="flex items-start justify-between">
                        <span className="text-white/60">{t("Friday")}</span>
                        <span className="text-white/80">{t("Closed")}</span>
                    </nav>
                </div>
            </motion.div>
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
                    delay: 0.8,
                    ease: "easeOut",
                }}
                className="w-full  flex  rounded-xl items-start justify-start gap-6 py-8! px-6! border border-white/10 bg-linear-to-br from-[#0a0a0a] to-[#1f42a3]">
                <p>{t("💡 Get a free consultation for your project. Our team is ready to help you choose the best solution for your business")}</p>
            </motion.div>

        </div>
    )
}

export default Content
