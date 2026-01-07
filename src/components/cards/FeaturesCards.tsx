import { useTranslation } from "react-i18next";
import { BsStars } from "react-icons/bs";
import { MdOutlineAccessTime, MdSecurity, MdSupport } from "react-icons/md";
import { motion } from "framer-motion";
const FeaturesCards = () => {
    const { t } = useTranslation();
    const cards = [
        {
            icon: <BsStars size={30} className="text-[#3eaffa]" />,
            titleKey: "High Quality",
            descriptionKey:
                "We care about the finest details to provide you with a final product that exceeds your expectations",
        },
        {
            icon: <MdOutlineAccessTime size={30} className="text-[#3eaffa]" />,
            titleKey: "Commitment to Deadlines",
            descriptionKey:
                "We respect your time and deliver our projects on scheduled dates",
        },
        {
            icon: <MdSecurity size={30} className="text-[#3eaffa]" />,
            titleKey: "Security and Reliability",
            descriptionKey:
                "We use the latest security standards to protect your website and data",
        },
        {
            icon: <MdSupport size={30} className="text-[#3eaffa]" />,
            titleKey: "Continuous Support",
            descriptionKey:
                "Our team is always available to help and support you after launching your project",
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8!">
            {cards.map((card: any, index) => (
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.12,
                        ease: "easeOut",
                    }}
                    key={card.number}
                    className="bg-[#1a1a21]/80 hover:bg-[#1a1a21] backdrop-blur-lg border border-white/10 hover:-translate-y-2 transition-all cursor-pointer flex flex-col gap-4 items-start justify-center rounded-2xl px-4! py-6!"
                >
                    <nav className="bg-linear-to-br from-[#0a0a0a] to-[#1f42a3] p-2! rounded-lg hover:shadow-lg hover:rotate-12 shadow-[#3eaffa]/30 transition-all">
                        {card.icon}
                    </nav>
                    <h3 className="text-[1rem] md:text-[1.4rem] font-semibold text-white">
                        {t(card.titleKey)}
                    </h3>

                    <p className="text-white/80 text-sm md:text-base">
                        {t(card.descriptionKey)}
                    </p>
                </motion.div>
            ))}
        </div>
    )
}

export default FeaturesCards
