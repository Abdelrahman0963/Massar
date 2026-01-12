import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import CountUp from "./CountUp";

const Partners = () => {
    const { t } = useTranslation();
    const stats = [
        { value: 1, label: t("Years of Experience") },
        { value: 3, label: t("Projects Completed") },
        { value: 2, label: t("Happy Clients") },
    ];

    return (
        <div className="w-full mt-12! ">
            <motion.div
                initial={{
                    scale: 0.7,
                    opacity: 0,
                    y: 40,
                }}
                whileInView={{
                    scale: 1,
                    opacity: 1,
                    y: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
                className="w-full flex flex-col rounded-3xl items-center justify-center gap-6 py-8! bg-linear-to-br from-[#0a0a0a] to-[#1f42a3]">

                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-white text-[1rem] md:text-2xl">
                        {t("Your Digital Success Partners")}
                    </h2>
                    <p className="text-center md:text-[1.2rem] text-[0.8rem] text-white/60 mt-4!">
                        {t("We believe that your success is our success. That's why we work with you as partners to ensure achieving your goals and continuously developing your business")}
                    </p>
                </div>

                <div className="w-full flex flex-col md:flex-row items-center justify-center">

                    {stats.map((item, index) => (
                        <div key={index} className="flex items-center">

                            <nav className="flex flex-col items-center justify-center px-8!">
                                <strong className="text-4xl md:text-5xl bg-linear-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2!">
                                    +<CountUp value={item.value} />
                                </strong>
                                <span className="text-white/60">{item.label}</span>
                            </nav>

                            {index !== stats.length - 1 && (
                                <div className="md:h-16 md:w-px! bg-white/20"></div>
                            )}

                        </div>
                    ))}

                </div>
            </motion.div>
        </div>
    );
};

export default Partners;
