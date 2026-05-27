"use client";
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Our social media engagement completely transformed within weeks. The creative direction for our salon's visuals is absolutely premium and brought in so many new bookings!",
        name: "Salon Trim",
        location: "Salon & Wellness",
    },
    {
        quote: "Highly professional team. They built an amazing online presence for our institute and streamlined our student registration process seamlessly. Highly recommended!",
        name: "Minami Japanese Language School",
        location: "Education",
    },
    {
        quote: "Excellent digital strategies and execution. They deeply understood our B2B requirements and delivered outstanding marketing results that scaled our reach.",
        name: "Onmo Lanka BDS",
        location: "B2B Solutions",
    },
    {
        quote: "Brilliant creative collaboration across borders. The attention to detail, cinematic quality, and smooth communication made our project an absolute success.",
        name: "Roofilmz Australia",
        location: "Media Production",
    },
    {
        quote: "The product reels and social media grid layouts they designed are stunning. We saw a noticeable jump in our online inquiries and accessory sales!",
        name: "Eesha Accessories",
        location: "E-Commerce",
    },
    {
        quote: "They successfully brought our traditional tailoring brand into the digital space. The new premium look perfectly showcases our craftsmanship to modern clients.",
        name: "Ranjith Custom Tailors",
        location: "Fashion & Retail",
    },
    {
        quote: "Extremely talented team that perfectly captured my personal brand's essence. The aesthetic is clean, elegant, and exactly what I was looking for.",
        name: "Nilupama Asanganee",
        location: "Personal Brand",
    },
    {
        quote: "Exceptional video editing work! They turned our raw travel footage into highly engaging, cinematic masterpieces with incredibly fast turnaround times.",
        name: "Tripit Holidays",
        location: "Video Editing",
    },
    {
        quote: "Powerful marketing campaigns that drove massive local awareness and foot traffic to our store. Reliable, data-driven, and very easy to work with.",
        name: "Super City",
        location: "Retail",
    },
    {
        quote: "Our sales increased by 30% in just one year! Their unique ideas and deep knowledge of market trends perfectly target the right audience. Highly recommended for businesses at any stage.",
        name: "Cy International",
        location: "Business Growth",
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