"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
    "/LogoList/1.png",
    "/LogoList/2.png",
    "/LogoList/3.png",
    "/LogoList/4.png",
    "/LogoList/5.png",
    "/LogoList/6.png",
    "/LogoList/7.png",
    "/LogoList/8.PNG",
    "/LogoList/9.png",
    "/LogoList/10.png",
    "/LogoList/11.png",
    "/LogoList/12.png",
    "/LogoList/13.png",
    "/LogoList/14.png",
    "/LogoList/15.png",
    "/LogoList/16.png",
    "/LogoList/17.jpg",
    "/LogoList/18.jpeg",
    "/LogoList/19.png",
];

export default function LogoTicker() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-20">
                {/* Updated Typography to match image_970eee.png */}
                <h2 className="font-outfit text-primary text-4xl md:text-6xl font-black uppercase leading-[1] tracking-tighter flex flex-col items-center">
                    <span>WE'RE A RECOGNIZED</span>
                    <span>LEADER IN PERFORMANCE</span>
                    <span className="italic font-medium mt-1 font-pt-serif">MARKETING</span>
                </h2>
            </div>

            {/* Logo Scroll Section */}
            <div className="flex relative w-full mask-gradient">
                <div className="flex gap-16 md:gap-16 animate-scroll whitespace-nowrap items-center">
                    {[...logos, ...logos].map((logo, idx) => (
                        <div key={idx} className="flex flex-col items-center group shrink-0">
                            <div className="relative w-32 h-16 md:w-40 md:h-40 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
                                <Image
                                    src={logo}
                                    alt="Client Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
