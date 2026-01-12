import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TfiWorld } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";
import { RiDashboardFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

const PortfolioCards: React.FC = () => {
    const { t } = useTranslation();

    const data = [
        {
            icon: <TfiWorld size={30} className="text-[#3eaffa]" />,
            color: "#00a8eb",
            title: t("Custom Websites"),
            description: t(
                "We design and build fast, modern, and responsive websites that represent your brand and turn visitors into customers"
            ),
        },
        {
            icon: <FiShoppingCart size={30} className="text-[#e342b5]" />,
            color: "#e342b5",
            title: t("E-commerce Solutions"),
            description: t(
                "We build secure and scalable e-commerce stores with smooth payment processes, product management, and payment integration"
            ),
        },
        {
            icon: <RiDashboardFill size={30} className="text-[#fc3c2b]" />,
            color: "#fc3c2b",
            title: t("Business Systems"),
            description: t(
                "We develop dashboards, resource planning systems, and custom management systems to help businesses track, control, and grow their operations"
            ),
        },
        {
            icon: <IoSettingsOutline size={30} className="text-[#00c75a]" />,
            color: "#00c75a",
            title: t("Customizing Ready-made Solutions"),
            description: t(
                "We customize and develop existing systems, templates, and scripts to fit your business needs and workflow"
            ),
        },
    ];

    return (
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6 mt-12! px-4! mb-12!">
            {data.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.12,
                        ease: "easeOut",
                    }}
                    style={
                        {
                            "--card": item.color,
                            background: `linear-gradient(135deg, ${item.color}22, #0a0a0a)`,
                        } as React.CSSProperties
                    }
                    className="group relative px-8! py-8! rounded-2xl flex flex-col items-start gap-4 border border-card hover:shadow-[0_0_40px_var(--card)] hover:scale-[1.02] transition-all cursor-pointer"
                >
                    <nav className="flex items-center justify-center p-3! bg-[#0a0a0a]/80 backdrop-blur-lg border border-card shadow-[0_0_20px_var(--card)] transition-all rounded-lg group-hover:rotate-12">
                        {item.icon}
                    </nav>

                    <h2 className="text-white text-2xl font-bold">{item.title}</h2>
                    <p className="text-white/60 text-sm md:text-base">{item.description}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default PortfolioCards;
