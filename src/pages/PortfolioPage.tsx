import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { motion } from 'framer-motion'
import { projects } from '../servers/projects'
import { useTranslation } from 'react-i18next';
type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    liveUrl?: string;
};
const PortfolioPage = () => {
    const { t } = useTranslation();
    return (
        <section className='min-h-screen bg-[#0a0a0a] text-white md:px-24! px-4! py-30!'>
            <div className="w-full mx-auto px-6! md:px-12!">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-center gap-4! mb-16!"
                >
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-xl text-white/60 hover:text-white font-medium transition duration-300"
                    >
                        <IoIosArrowBack />
                        {t("Back")}
                    </Link>

                    <h1 className="text-3xl md:text-4xl xl:text-5xl text-white font-bold">
                        {t("All Solutions")}
                    </h1>
                </motion.div>
                <div className="w-full max-w-7xl px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project: Project, index: number) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            className="group bg-[#1a1a21]/80 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-5! py-2! text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition"
                                        >
                                            Live Demo
                                        </a>
                                    )}

                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5! space-y-2!">
                                <h3 className="text-lg font-semibold text-white">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-white/60 line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PortfolioPage
