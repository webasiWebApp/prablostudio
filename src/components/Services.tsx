"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

import { MoveRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// ... existing imports ...

const expertiseData = [
    {
        id: "01",
        title: "SOCIAL MEDIA MANAGEMENT",
        desc: "We don't just post; we build communities. From strategic content calendars to daily engagement, we grow your brand’s voice where it matters most.",
        video: "/Service/s1.jpg",
    },
    {
        id: "02",
        title: "PERFORMANCE MARKETING",
        desc: "Stop guessing, start converting. High-ROI campaigns on Facebook, Instagram, and Google designed to turn viewers into paying customers.",
        video: "/Service/s2.jpg",
    },
    {
        id: "03",
        title: "WEB DESIGN & DEVELOPMENT",
        desc: "More than just aesthetics. We build fast, mobile-responsive, and high-converting websites that serve as your 24/7 digital sales engine.",
        video: "/Service/s3.jpg",
    },
    {
        id: "04",
        title: "SEO & CONTENT STRATEGY",
        desc: "Dominate search results. We optimize your digital presence to rank higher on Google and attract organic traffic that actually stays.",
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

    const isMobile = useMediaQuery("(max-width: 768px)");

    // Desktop: -26% (calculated for large screens to show 4 items)
    // Mobile: Need to scroll much further to show all horizontal items. 
    // Approx calc: 4 items * 85vw + gaps -> significantly more than 100%. 
    // Using -260% as a safe estimate for mobile horizontal scroll distance.
    const xRange = isMobile ? ["0%", "-260%"] : ["0%", "-26%"];

    const x = useTransform(smoothProgress, [0, 1], xRange);

    return (
        <section ref={containerRef} className="relative h-[250vh] bg-primary">
            <div className="sticky top-0 h-[100dvh] flex flex-col justify-start md:justify-center px-[5%] overflow-hidden pt-28">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-24 w-full max-w-[1400px] mx-auto items-center">

                    {/* Left Side: Header */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-white text-5xl md:text-5xl lg:text-[80px] font-poppins font-bold leading-[0.75]">
                            Our Expertise<br />
                            <span className="font-bold mt-1">In Action</span>
                        </h2>
                        <h3 className="text-white text-xl md:text-2xl font-poppins font-normal mt-4 mb-2 leading-tight">
                            Blending Ai Technology With Creative Brilliance.
                        </h3>
                        <p className="text-white/90 text-xs md:text-sm font-light max-w-xl leading-relaxed mb-6">
                            We don't just execute campaigns; we engineer digital dominance. By fusing data-driven AI insights with high-end cinematic storytelling, we turn passive audiences into loyal advocates and transform brands into market leaders.
                        </p>
                        <div className="flex items-center gap-2 text-white/80">
                            <div className="h-[1px] w-12 bg-white/50" />
                            <MoveRight size={20} />
                        </div>
                    </div>

                    {/* Right Side: Horizontal Carousel */}
                    <div className="flex flex-col gap-6 md:gap-10 overflow-hidden relative">

                        {/* Stepper Header with Horizontal Line */}
                        <div className="relative flex items-center mt-6 md:mt-12 mb-4 md:mb-8">
                            <motion.div
                                style={{ x }}
                                className="flex w-full relative z-10 gap-6"
                            >
                                {/* Moving Horizontal Line */}
                                <div className="absolute top-7 md:top-8 left-0 w-[350vw] md:w-[150%] h-[1px] bg-white/20 z-0 -translate-y-1/2" />

                                {expertiseData.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-col gap-4 w-[85vw] md:w-[calc((100%-48px)/3)] items-start flex-shrink-0 relative z-10"
                                    >
                                        <div className="w-16 h-14 md:w-24 md:h-16 border border-white/40 rounded-[4px] flex items-center justify-center bg-primary transition-colors duration-300">
                                            <span className="text-white text-3xl md:text-4xl font-light font-outfit">
                                                {item.id}
                                            </span>
                                        </div>
                                        <h3 className="text-white font-thin text-[13px] md:text-xs uppercase max-w-[200px] leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Carousel Container */}
                        <motion.div
                            style={{ x }}
                            className="flex gap-6 w-full h-[280px] md:h-[450px]"
                        >
                            {expertiseData.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative w-[85vw] md:w-[calc((100%-48px)/3)] h-full rounded-xs overflow-hidden shadow-2xl bg-black/20 border border-white/10 flex-shrink-0 group cursor-pointer"
                                >
                                    <Image
                                        src={item.video}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/80 transition-all duration-500" />

                                    {/* Content that appears on hover */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                        <h3 className="text-white font-normal text-xl md:text-2xl uppercase mb-4 tracking-wider">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/90 text-sm md:text-base font-light leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="absolute bottom-6 left-6 z-10 group-hover:opacity-0 transition-opacity duration-300">
                                        <span className="text-white/80 font-normal text-4xl uppercase block">{item.id}</span>
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