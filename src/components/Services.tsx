"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const expertiseData = [
    {
        id: "01",
        title: "Paid Advertising",
        video: "/Service/s1.jpg",
    },
    {
        id: "02",
        title: "SEO & Content Marketing",
        video: "/Service/s2.jpg",
    },
    {
        id: "03",
        title: "Website Design & Optimization",
        video: "/Service/s3.jpg",
    },
    {
        id: "04",
        title: "Social Media Management",
        video: "/Service/s4.jpg",
    },
];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const x = useTransform(smoothProgress, [0, 1], ["0%", "-26%"]);

    return (
        <section ref={containerRef} className="relative h-[250vh] bg-primary">
            <div className="sticky top-0 h-screen flex flex-col justify-center px-[5%] overflow-hidden">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 w-full max-w-[1400px] mx-auto items-center">

                    {/* Left Side: Header */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-white text-3xl md:text-5xl lg:text-[80px] font-black leading-[0.85] uppercase">
                            OUR EXPERTISE<br />
                            <span className="italic font-medium mt-1 font-pt-serif">IN ACTION</span>
                        </h2>
                        <p className="text-white/90 text-xs md:text-lg font-light max-w-3xl  leading-relaxed mb-10">
                            Blending AI Technology With Creative Brilliance.
                        </p>
                    </div>

                    {/* Right Side: Horizontal Carousel */}
                    <div className="flex flex-col gap-10 overflow-hidden relative">

                        {/* Stepper Header with Horizontal Line - Locked */}
                        <div className="relative flex items-center mt-12 mb-8">
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 z-0 -translate-y-1/2" />
                            <motion.div
                                style={{ x }}
                                className="flex w-full relative z-10 gap-6"
                            >
                                {expertiseData.map((item, index) => {
                                    return (
                                        <div
                                            key={item.id}
                                            className="flex flex-col gap-4 w-[85vw] md:w-[calc((100%-48px)/3)] items-start flex-shrink-0"
                                        >
                                            <div className="w-16 h-14 md:w-24 md:h-16 border border-white/40 rounded-[4px] flex items-center justify-center bg-primary z-10 transition-colors duration-300">
                                                <span className="text-white text-3xl md:text-4xl font-light font-outfit">
                                                    {item.id}
                                                </span>
                                            </div>
                                            <h3 className="text-white font-bold text-[10px] md:text-xs uppercase max-w-[200px] leading-tight">
                                                {item.title}
                                            </h3>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>

                        {/* Carousel Container */}
                        <motion.div
                            style={{ x }}
                            className="flex gap-6 w-full h-[350px] md:h-[450px]"
                        >
                            {expertiseData.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative w-[85vw] md:w-[calc((100%-48px)/3)] h-full rounded-xs overflow-hidden shadow-2xl bg-black/20 border border-white/10 flex-shrink-0 group"
                                >
                                    <Image
                                        src={item.video}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-all duration-500" />
                                    <div className="absolute bottom-6 left-6 z-10">
                                        <span className="text-white/80 font-black text-4xl uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transform block">{item.id}</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}