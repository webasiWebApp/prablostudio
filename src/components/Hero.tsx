"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import Balatro from "./Balatro";
import VideoLogo from "./VideoLogo";

// Helper Counter Component
function Counter({ value }: { value: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) animate(motionValue, value, { duration: 2 });
    }, [isInView, motionValue, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) ref.current.textContent = Math.floor(latest).toString();
        });
    }, [springValue]);

    return <span ref={ref}>0</span>;
}



export default function Hero() {
    const stats = [
        { num: 5, suffix: "+", label: "Years of Experience" },
        { num: 850, suffix: "+", label: "Projects Completed" },
        { num: 100, suffix: "+", label: "Happy Clients" }, // User asked for 100+, removing 'K'
        { num: 25, suffix: "+", label: "Team Members" }
    ];

    return (
        <section className="w-full">
            {/* Hero Section */}
            <div className="h-[95vh] bg-primary flex flex-col items-center justify-center text-center px-[5%] relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Balatro
                        spinRotation={-3.5}
                        spinSpeed={7.5}
                        color1="#ff8d00"
                        color2="#f0dbc1"
                        color3="#f39420"
                        contrast={4}
                        lighting={0.4}
                        spinAmount={0.35}
                        pixelFilter={750}
                    />
                </div>
                <div className="z-10 relative flex flex-col items-center max-w-5xl mx-auto pt-20">
                    <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
                        BEYOND MARKETING.<br />
                        WE ARE THE <span className="italic font-pt-serif font-light">FUTURE</span><br />
                        OF DIGITAL IMPACT.
                    </h1>
                    <p className="text-white/90 text-xs md:text-lg font-light max-w-3xl mx-auto leading-relaxed mb-10">
                        Prablo360 Is Sri Lanka's First <span className="font-bold">AI-Powered</span> Digital Agency Fused With A High-End Creative Studio. We
                        Combine Artificial Intelligence With Cinematic Storytelling To Build Brands That Dominate The
                        Market
                    </p>
                    <Link href="/portfolio">
                        <button className="bg-white text-primary px-10 py-4 rounded-sm font-bold text-xs uppercase hover:bg-black hover:text-white transition-all shadow-lg">
                            View Our Work
                        </button>
                    </Link>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="bg-white py-20 px-[5%] flex flex-wrap justify-around items-center border-b border-gray-50">
                {stats.map((stat, i) => (
                    <div key={i} className="text-center min-w-[200px] mb-8 lg:mb-0">
                        <span className="block text-6xl font-light text-black mb-2">
                            <Counter value={stat.num} />{stat.suffix}
                        </span>
                        <p className="uppercase text-gray-400 text-xs md:text-lg font-light max-w-3xl mx-auto leading-relaxed mb-10">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Branding Section */}
            <div className="pb-24 px-[5%] flex flex-col lg:flex-row items-center justify-center bg-white gap-8 lg:gap-16">
                <div className="flex-1 flex justify-center lg:justify-end">
                    <VideoLogo
                        logoSrc="/logo.png"
                        videoSrc="/logoVid1.mp4"
                        alt="PRABLO 360"
                    />
                </div>

                <div className="vertical-line" />

                <div className="flex-1 flex justify-center lg:justify-start">
                    <VideoLogo
                        logoSrc="/logoStudio.png"
                        videoSrc="/logoVid2.mp4"
                        alt="PRABLO STUDIOS"
                    />
                </div>
            </div>
        </section>
    );
}