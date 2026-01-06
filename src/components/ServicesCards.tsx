import { useTranslation } from "react-i18next"
import { SiMaterialdesignicons } from "react-icons/si";
import { IoMdCode } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { motion } from "framer-motion";

const ServicesCards = () => {
    const { t } = useTranslation()

    const cards = [
        {
            icon: <SiMaterialdesignicons size={30} className="text-[#3eaffa]" />,
            title: t("Website Design"),
            description: t("We design beautiful and user-friendly websites that reflect your brand identity and attract your customers"),
            list: [
                t("Modern and attractive design"),
                t("Compatible with all devices"),
                t("Easy to use")
            ]
        },
        {
            icon: <IoMdCode size={40} className="text-[#3eaffa]" />,
            title: t("Website Development"),
            description: t("We build fast and secure websites with the latest technologies to ensure excellent performance and great user experience"),
            list: [
                t("High speed and performance"),
                t("Security and protection"),
                t("Easy to update")
            ]
        },
        {
            icon: <FaGear size={40} className="text-[#3eaffa]" />,
            title: t("Custom Management Systems"),
            description: t("We develop custom digital systems for you to manage your daily operations efficiently and save time and effort"),
            list: [
                t("Designed specifically for your business"),
                t("Easy to learn and use"),
                t("Saves time and money")
            ]
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8!">
            {cards.map((card, index) => (
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.12,
                        ease: "easeOut",
                    }}
                    key={index}
                    className="bg-[#1a1a21]/80 hover:-translate-y-2 transition-all cursor-pointer flex flex-col gap-6 items-start justify-center rounded-2xl px-8! py-10!"
                >
                    <nav className="bg-linear-to-br from-[#0a0a0a] to-[#1f42a3] p-3! rounded-lg">
                        {card.icon}
                    </nav>

                    <h2 className="text-xl md:text-2xl font-bold text-white">
                        {card.title}
                    </h2>

                    <p className="text-white/60 text-sm md:text-[1rem]">
                        {card.description}
                    </p>

                    <ul className="list-disc list-inside marker:text-[#3eaffa] text-white/70 space-y-2">
                        {card.list.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
    )
}

export default ServicesCards
