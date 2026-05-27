"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

const categories = ["All", "Designing Content", "Video Content", "AI Content", "Cinematography"];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("All");
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            // Updated query to include 'slug'
            const query = `*[_type == "project"] | order(_createdAt desc) {
                _id,
                title,
                slug,
                category,
                size,
                mainImage,
                videoUrl,
                year
            }`;
            const data = await client.fetch(query);
            setProjects(data);
            setLoading(false);
        };
        fetchProjects();
    }, []);

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter((p: any) => p.category === filter);

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }} />
                <div className="relative z-10 text-center px-[5%]">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block px-4 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-[10px] font-normal uppercase tracking-[0.3em] mb-6">
                        Showcasing Excellence
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-white text-6xl md:text-[110px] font-bold font-poppins uppercase leading-[0.8]">
                        SELECTED <br />
                        <span className="font-light text-white/90">PROJECT.</span>
                    </motion.h1>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="sticky top-[60px] z-40 py-8 px-[5%] bg-white/80 backdrop-blur-xl border-b border-gray-100">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-2 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-2.5 rounded-full text-[10px] font-normal uppercase tracking-widest transition-all duration-300 ${filter === cat ? "bg-primary text-white shadow-xl shadow-orange-200" : "bg-gray-50 text-gray-400 hover:text-black border border-gray-100"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="text-[11px] font-normal text-gray-400 uppercase tracking-widest">
                        Showing <span className="text-primary">{filteredProjects.length}</span> Masterpieces
                    </div>
                </div>
            </section>

            {/* Masonry Grid */}
            <section className="py-20 px-[5%] max-w-[1400px] mx-auto">
                {loading ? (
                    <div className="flex justify-center items-center h-64 text-primary font-normal animate-pulse uppercase tracking-widest">Loading Impact...</div>
                ) : (
                    <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((project: any) => (
                                <ProjectCard key={project._id} project={project} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </section>
        </main>
    );
}

function ProjectCard({ project }: { project: any }) {
    const heightClass = project.size === 'tall' ? 'h-[550px]' : project.size === 'wide' ? 'h-[350px]' : 'h-[450px]';

    return (
        <Link href={`/portfolio/${project.slug?.current || '#'}`}>
            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
                <div className={`w-full overflow-hidden transition-all duration-700 ${heightClass}`}>
                    {project.videoUrl ? (
                        <video
                            src={project.videoUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    ) : project.mainImage && (
                        <img
                            src={urlFor(project.mainImage).width(800).url()}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                    )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-primary text-[10px] font-normal uppercase tracking-[0.3em] mb-3 block">
                            {project.category}
                        </span>
                        <div className="flex justify-between items-end">
                            <h3 className="text-white text-3xl font-normal uppercase leading-none">
                                {project.title}
                            </h3>
                            <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}