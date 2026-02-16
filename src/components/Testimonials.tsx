"use client";
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "I've Tried Countless Tea Brands, But Nothing Compares To The Freshness And Aroma Of This One. Every Sip Feels Like A Warm Hug! My Mornings Are Incomplete Without It.",
        name: "Olivia Richardson",
        location: "New York, USA",
    },
    {
        quote: "Prablo360 transformed our digital presence completely. Their AI-driven approach gave us insights we never knew we needed.",
        name: "James Anderson",
        location: "London, UK",
    },
    {
        quote: "The creativity and technical expertise this team brings to the table is unmatched. Truly the future of digital marketing.",
        name: "Sarah Jenkins",
        location: "Sydney, Australia",
    },
    {
        quote: "From the branding to the website, everything was executed to perfection. Highly recommend their services!",
        name: "Michael Chen",
        location: "Singapore",
    },
    {
        quote: "Working with Prablo360 was a game-changer for our startup. We saw a 200% increase in leads within 3 months.",
        name: "Emily Davis",
        location: "Toronto, Canada",
    },
    {
        quote: "The best agency we've worked with. Professional, innovative, and results-oriented.",
        name: "David Wilson",
        location: "Dubai, UAE",
    },
];

export default function Testimonials() {
    return (
        /* 1. Reduced vertical padding from py-24 to py-12 */
        <section className="py-16 bg-[url('/bg1.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden">

            {/* 2. Reduced header margin from mb-16 to mb-8 */}
            <div className="text-center mb-8 px-4">
                <h2 className="text-white text-5xl md:text-6xl font-poppins font-bold uppercase leading-none mb-2">
                    CLIENT SUCCESS <span className="font-bold mt-1">STORIES</span>
                </h2>
                <p className="text-white/90 text-xs md:text-lg font-light max-w-3xl mx-auto leading-relaxed mb-10">
                    Don't just take our word for it—see what our partners have to say about their experience.
                </p>
            </div>

            {/* 3. Compact Floating Cards Container */}
            <div className="flex flex-col gap-4">

                {/* Row 1: Moving Left */}
                <div className="flex overflow-hidden relative w-full group">
                    <div className="flex gap-4 w-max animate-scroll group-hover:[animation-play-state:paused] hover:cursor-pointer">
                        {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
                            <TestimonialCard key={idx} item={item} />
                        ))}
                    </div>
                </div>

                {/* Row 2: Moving Right */}
                <div className="flex overflow-hidden relative w-full group">
                    <div className="flex gap-4 w-max animate-scroll-reverse group-hover:[animation-play-state:paused] hover:cursor-pointer">
                        {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
                            <TestimonialCard key={idx} item={item} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

function TestimonialCard({ item }: { item: any }) {
    return (
        /* 4. Reduced card width and padding for a sleeker look */
        <div className="inline-block w-[280px] md:w-[350px] bg-white p-6 rounded-xl shadow-lg whitespace-normal">
            <p className="text-gray-700 text-xs md:text-sm font-medium leading-relaxed mb-6">
                "{item.quote}"
            </p>
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center font-normal text-primary text-xs">
                    {item.name[0]}
                </div>
                <div className="flex flex-col">
                    <span className="font-normal text-sm text-black">{item.name}</span>
                    <span className="text-[9px] text-gray-400 uppercase font-light">{item.location}</span>
                </div>
            </div>
        </div>
    );
}