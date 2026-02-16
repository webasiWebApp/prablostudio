"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        id: "01",
        q: "What makes Prablo360 different from other agencies?",
        a: "Unlike traditional agencies, we combine Artificial Intelligence (AI) with Creative Content. We don't just post; we create eye-catching visuals and data-driven strategies that help your brand stand out in a crowded digital space."
    },
    {
        id: "02",
        q: "Do you handle Video Production and Content Creation?",
        a: "Yes! We have our own in-house team for photography and video. Whether it's Social Media Reels, TikToks, or Product Photography, we create high-quality content that engages your audience and drives sales."
    },
    {
        id: "03",
        q: "How do you measure the success of a campaign?",
        a: "We focus on results. You will receive monthly reports showing your Reach, Engagement, and Real Growth. We ensure your budget is spent wisely to get the best possible return on investment."
    },
    {
        id: "04",
        q: "Do you work with small businesses and startups?",
        a: "Absolutely. We love working with ambitious startups and growing brands. We have flexible packages designed specifically to help new businesses establish a strong online presence from day one."
    },
    {
        id: "05",
        q: "How do I get started with Prablo360?",
        a: "It’s simple. Click the \"Hire Us\" button or contact us directly. Let's have a chat about your goals and see how we can help you grow."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-[5%] bg-white relative overflow-hidden">

            {/* 1. The Middle Blurred Ball */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 relative z-10">

                {/* Left Side: Header */}
                <div className="flex flex-col justify-center">
                    <h2 className="font-poppins text-5xl md:text-7xl font-bold text-primary leading-[0.8] uppercase mb-8">
                        FREQUENTLY<br />ASKED<br />
                        <span className="font-normal mt-1">QUESTIONS</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-sm leading-relaxed">
                        Have questions? We have answers. Everything you need to know about growing your brand with Prablo360.
                    </p>
                </div>

                {/* Right Side: Accordion Cards */}
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            className="bg-[#FFF8F0] rounded-xl overflow-hidden transition-shadow hover:shadow-md border border-orange-50"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left p-6 flex items-center gap-4 group"
                            >
                                {/* Number Badge */}
                                <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-light shrink-0">
                                    {faq.id}
                                </span>
                                <span className="font-normal text-md md:text-base text-gray-800 flex-1">
                                    {faq.q}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-12 pb-8 text-xs md:text-sm text-gray-500 leading-relaxed font-medium ml-6">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}