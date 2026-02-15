"use client";
import { motion } from "framer-motion";
import { Zap, Target, Cpu, Sparkles } from "lucide-react";

const pillars = [
    {
        id: "01",
        title: "AI Precision",
        desc: "We don't guess; we calculate. Our AI integrations predict market shifts before they happen.",
        icon: <Cpu className="text-primary" size={32} />,
        size: "lg"
    },
    {
        id: "02",
        title: "Cinematic Impact",
        desc: "Every frame tells a story. We blend Hollywood-grade production with digital strategy.",
        icon: <Sparkles className="text-primary" size={32} />,
        size: "sm"
    },
    {
        id: "03",
        title: "Human Synergy",
        desc: "Technology is the tool, but human emotion is the trigger for all brand success.",
        icon: <Target className="text-primary" size={32} />,
        size: "sm"
    },
    {
        id: "04",
        title: "Rapid Scalability",
        desc: "Engineered for growth. We build digital ecosystems that expand as fast as your ambition.",
        icon: <Zap className="text-primary" size={32} />,
        size: "lg"
    }
];

export default function AboutValues() {
    return (
        <section className="py-24 px-[5%] bg-white relative overflow-hidden">
            {/* Background Decor: Subtle Rays */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />

            <div className="max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
                    {/* Left: Sticky Impact Heading */}
                    <div className="lg:sticky lg:top-32">
                        <h2 className="font-outfit text-5xl md:text-8xl font-black text-black uppercase leading-[0.85] mb-8">
                            THE PILLARS <br />
                            <span className="font-light text-primary">OF PRABLO.</span>
                        </h2>
                        <p className="text-gray-600 text-lg font-medium max-w-md leading-relaxed">
                            We operate at the intersection of logic and magic, ensuring every digital touchpoint is engineered for maximum conversion.
                        </p>
                    </div>

                    {/* Right: Responsive Masonry Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {pillars.map((pillar, idx) => (
                            <motion.div
                                key={pillar.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`p-10 rounded-2xl flex flex-col gap-6 transition-all border border-orange-50 group hover:shadow-2xl hover:-translate-y-2
                  ${pillar.size === 'lg' ? 'bg-[#FFF8F0] md:min-h-[400px]' : 'bg-white shadow-xl md:min-h-[350px]'}
                `}
                            >
                                {/* Number Badge */}
                                <div className="flex justify-between items-start">
                                    <span className="font-outfit text-5xl font-light text-primary/20 group-hover:text-primary transition-colors duration-500">
                                        {pillar.id}
                                    </span>
                                    <div className="p-3 bg-white rounded-xl shadow-sm">
                                        {pillar.icon}
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-3">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                        {pillar.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}