"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AgencyInfo() {
    const [activeId, setActiveId] = useState("01");

    const getImage = (id: string) => {
        switch (id) {
            case "01": return "/agi1.png";
            case "02": return "/agi2.png";
            case "03": return "/agi3.png";
            default: return "/agi1.png";
        }
    };

    return (
        <section className="py-16 md:py-32 px-[5%] bg-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
            <div className="flex-1">
                <h2 className="font-outfit text-3xl md:text-5xl lg:text-7xl font-black text-primary mb-12 uppercase leading-[0.9] tracking-tighter">
                    Tradition<br />Meets<br /> <span className='italic font-medium text-primary mt-1 font-pt-serif'>Technology</span>
                </h2>

                {/* List items with focus/gray-out effect */}
                <div className="flex flex-col gap-10">
                    {[
                        { id: "01", title: "ARTIFICIAL INTELLIGENCE", desc: "We leverage data-driven AI insights to optimize every campaign for maximum ROI." },
                        { id: "02", title: "IN-HOUSE PRODUCTION", desc: "We craft high-end cinematic visuals with our full-scale in-house studio capabilities." },
                        { id: "03", title: "FUTURE-READY", desc: "We adapt to emerging digital trends to ensure your brand always stays ahead of the curve." }
                    ].map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setActiveId(item.id)}
                            className={`flex gap-6 items-start cursor-pointer transition-all duration-500 ${activeId === item.id ? 'opacity-100' : 'opacity-20 grayscale'}`}
                        >
                            <span className=" text-4xl md:text-7xl font-light text-gray-300">{item.id}</span>
                            <div>
                                <h4 className="text-xl md:text-3xl font-light uppercase">{item.title}</h4>
                                <p className="text-gray-500 font-light text-sm md:text-md max-w-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 w-full flex justify-center relative min-h-[300px] md:min-h-[500px]">
                {/* Design circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[550px] md:h-[550px] " />

                <div className="relative w-full h-[300px] md:h-[500px] z-10 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeId}
                            src={getImage(activeId)}
                            alt={`Agency Feature ${activeId}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            className="object-contain max-h-full max-w-full "
                        />
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}