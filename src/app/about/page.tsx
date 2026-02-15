"use client";
import { motion } from "framer-motion";
import AboutValues from "../../components/AboutValues"; // The masonry section we built
import Team from "../../components/Team"; // Team section

export default function AboutPage() {
    return (
        <main className="bg-white">
            {/* Impact Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center bg-primary overflow-hidden">
                <div
                    className="absolute inset-0 opacity-40 bg-cover bg-center"
                    style={{ backgroundImage: "url('/hero-bg.jpg')" }}
                />
                <div className="relative z-10 text-center px-[5%]">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-5xl md:text-[100px] font-black uppercase leading-[0.85]"
                    >
                        WE ARE THE <br />
                        <span className="italic font-light opacity-90">REBELS</span> <br />
                        OF MARKETING.
                    </motion.h1>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 px-[5%] max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-black text-5xl md:text-7xl font-black uppercase leading-[0.9] mb-8">
                        Our <span className="text-primary italic font-light">Mission</span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
                        At Prablo 360, we don't follow digital trends; we engineer them. Our mission is to transform traditional businesses into digital powerhouses through cinematic storytelling and AI precision.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-64 bg-orange-50 rounded-2xl flex items-center justify-center p-8 text-center border border-orange-100">
                        <p className="text-primary font-black text-xl uppercase leading-tight">Creativity First</p>
                    </div>
                    <div className="h-64 bg-primary rounded-2xl flex items-center justify-center p-8 text-center shadow-xl translate-y-8">
                        <p className="text-white font-black text-xl uppercase leading-tight">AI Driven</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <Team />

            {/* Replaced CTA with the Masonry Pillars section */}
            <AboutValues />
        </main>
    );
}