"use client";
import { motion } from "framer-motion";
import { Camera, Cpu, Globe, BarChart3, Fingerprint, Rocket } from "lucide-react";

const services = [
    {
        id: "01",
        title: "Cinematic Production",
        desc: "We bring Hollywood-grade visual storytelling to your brand. From high-end commercials to social media content, we ensure every frame is engineered to capture attention.",
        icon: <Camera size={32} className="text-primary" />,
        size: "lg",
        color: "bg-[#FFF8F0]"
    },
    {
        id: "02",
        title: "AI Strategy",
        desc: "Leveraging machine learning to predict market trends and optimize your marketing budget.",
        icon: <Cpu size={32} className="text-primary" />,
        size: "sm",
        color: "bg-white shadow-xl"
    },
    {
        id: "03",
        title: "Web Ecosystems",
        desc: "Building future-ready, high-performance websites that serve as your digital headquarters.",
        icon: <Globe size={32} className="text-primary" />,
        size: "sm",
        color: "bg-white shadow-xl"
    },
    {
        id: "04",
        title: "Performance Marketing",
        desc: "Data-driven campaigns focused on ROI, conversion, and aggressive growth scaling across all platforms.",
        icon: <BarChart3 size={32} className="text-primary" />,
        size: "lg",
        color: "bg-primary text-white"
    }
];

const steps = [
    { id: "01", name: "Audit & Analysis", desc: "We study your current digital footprint and analyze competitor data using AI tools." },
    { id: "02", name: "Strategic Blueprint", desc: "We engineer a custom roadmap that fuses creative art with precision data points." },
    { id: "03", name: "Production & Launch", desc: "High-end cinematic assets are created and deployed strategically across your channels." },
    { id: "04", name: "Scale & Optimize", desc: "We monitor performance in real-time, adjusting tactics to ensure maximum market dominance." }
];

export default function ServicesPage() {
    return (
        <main className="bg-white">
            {/* 1. Services Hero */}
            <section className="relative h-[65vh] flex items-center justify-center bg-primary overflow-hidden">
                <div
                    className="absolute inset-0 opacity-30 bg-cover bg-center"
                    style={{ backgroundImage: "url('/hero-bg.jpg')" }}
                />
                <div className="relative z-10 text-center px-[5%]">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-5xl md:text-[90px] font-semibold font-poppins uppercase leading-[0.85]"
                    >
                        OUR <span className="font-light">CORE</span> <br />
                        EXPERTISE.
                    </motion.h1>
                    <p className="text-white/80 mt-8 text-sm md:text-base max-w-xl mx-auto font-normal font-poppins leading-relaxed">
                        Prablo 360 is more than an agency. We provide a full-stack digital ecosystem designed to scale your brand at the speed of intelligence.
                    </p>
                </div>
            </section>

            {/* 2. Bento Services Grid */}
            <section className="py-24 px-[5%] max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`p-10 md:p-14 rounded-3xl border border-orange-50 flex flex-col justify-between transition-all duration-500 group ${s.size === 'lg' ? 'md:col-span-2 min-h-[420px]' : 'md:col-span-1 min-h-[420px]'
                                } ${s.color}`}
                        >
                            <div className="flex justify-between items-start">
                                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                                    {s.icon}
                                </div>
                                <span className={`text-4xl font-light opacity-20 ${s.color.includes('primary') ? 'text-white' : 'text-primary'}`}>
                                    {s.id}
                                </span>
                            </div>

                            <div className="mt-12">
                                <h3 className="text-3xl md:text-4xl font-semibold font-poppins uppercase leading-none mb-6">
                                    {s.title}
                                </h3>
                                <p className={`text-sm md:text-base font-normal font-poppins leading-relaxed ${s.color.includes('primary') ? 'text-white/80' : 'text-gray-500'
                                    }`}>
                                    {s.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. The Process Section */}
            <section className="py-24 bg-gray-50 px-[5%] relative overflow-hidden">
                {/* Decorative Blurred Ball */}
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -mb-32 -mr-32" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <h2 className="text-black text-5xl md:text-8xl font-bold font-poppins uppercase mb-20 leading-[0.85]">
                        HOW WE <br />
                        <span className="text-primary font-light">ENGINEER IMPACT.</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((step) => (
                            <div key={step.id} className="flex flex-col gap-8 group">
                                <div className="flex items-center gap-4">
                                    <span className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-normal text-lg shadow-xl group-hover:scale-110 transition-transform">
                                        {step.id}
                                    </span>
                                    <div className="h-[1px] flex-1 bg-gray-200 hidden lg:block" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold font-poppins uppercase mb-4 text-black tracking-tight">
                                        {step.name}
                                    </h4>
                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Mini CTA for Services */}
            <section className="py-24 px-[5%] text-center bg-white">
                <h3 className="text-4xl md:text-6xl font-semibold font-poppins uppercase mb-8">
                    READY TO <span className="text-primary">DOMINATE?</span>
                </h3>
                <button className="bg-primary text-white px-12 py-5 rounded-md font-normal text-xs uppercase tracking-widest hover:bg-black transition-all shadow-2xl">
                    Start Your Journey
                </button>
            </section>
        </main>
    );
}