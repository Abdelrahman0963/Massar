import { useTranslation } from "react-i18next";
import { LuMessageCircle, LuHeartHandshake } from "react-icons/lu";
import { MdOutlineDraw } from "react-icons/md";
import { PiRocketLaunch } from "react-icons/pi";
import { motion } from "framer-motion";

const WorkCards = () => {
    const { t } = useTranslation();

    const cards = [
        {
            icon: <LuMessageCircle size={30} className="text-[#3eaffa]" />,
            number: "01",
            titleKey: "We Listen to You",
            descriptionKey:
                "We start by understanding your needs and goals through simple and friendly discussion",
        },
        {
            icon: <MdOutlineDraw size={30} className="text-[#3eaffa]" />,
            number: "02",
            titleKey: "We Design the Solution",
            descriptionKey:
                "We design the website or system in a way that suits your business and achieves your goals.",
        },
        {
            icon: <PiRocketLaunch size={30} className="text-[#3eaffa]" />,
            number: "03",
            titleKey: "We Develop and Implement",
            descriptionKey:
                "We build the project using the best technologies and test it carefully",
        },
        {
            icon: <LuHeartHandshake size={30} className="text-[#3eaffa]" />,
            number: "04",
            titleKey: "We Support You Continuously",
            descriptionKey:
                "We stay with you after launch to ensure your project's success and growth",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8!">
            {cards.map((card : any, index) => (
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
                    <div className="flex items-start justify-center gap-4">
                        <nav className="bg-linear-to-br from-[#0a0a0a] to-[#1f42a3] p-2! rounded-lg hover:shadow-lg hover:rotate-12 shadow-[#3eaffa]/30 transition-all">
                            {card.icon}
                        </nav>

                        <span className="text-3xl font-bold bg-gradient-to-br from-[#3c3c3c] to-[#1f42a3] bg-clip-text text-transparent">
                            {card.number}
                        </span>
                    </div>

                    <h3 className="text-[1rem] md:text-[1.4rem] font-semibold text-white">
                        {t(card.titleKey)}
                    </h3>

                    <p className="text-white/80 text-sm md:text-base">
                        {t(card.descriptionKey)}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default WorkCards;
