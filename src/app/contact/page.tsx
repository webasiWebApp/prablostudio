"use client";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* 1. Contact Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center bg-primary overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{ backgroundImage: "url('/hero-bg.jpg')" }}
                />
                <div className="relative z-10 text-center px-[5%]">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-6xl md:text-[110px] font-black uppercase leading-[0.8]"
                    >
                        LET'S START <br />
                        <span className="italic font-light text-white/90">A PROJECT.</span>
                    </motion.h1>
                </div>
            </section>

            {/* 2. Main Contact Content */}
            <section className="py-24 px-[5%] max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-20">

                    {/* Left Side: Contact Info & Address */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-black text-5xl font-black uppercase mb-8 leading-none">
                            OFFICE IN <br />
                            <span className="text-primary italic font-light">COLOMBO.</span>
                        </h2>

                        <div className="space-y-10 mt-8">
                            <ContactDetail
                                icon={<MapPin className="text-primary" />}
                                title="Visit Us"
                                content="No 4/A, Samagipura, Dandeniya, Rathmale, Matara"
                            />
                            <ContactDetail
                                icon={<Phone className="text-primary" />}
                                title="Call Us"
                                content="071 36 890 36 / 071 35 890 35"
                            />
                            <ContactDetail
                                icon={<Mail className="text-primary" />}
                                title="Email Us"
                                content="prablo360@gmail.com"
                            />
                        </div>

                        {/* Subtle Blurred Element */}
                        <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100 relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                            <p className="text-sm font-medium text-gray-500 italic leading-relaxed relative z-10">
                                "We operate at the speed of intelligence. Expect a response from our creative team within 24 hours."
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Interactive Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#FFF8F0] p-8 md:p-12 rounded-3xl border border-orange-100 shadow-xl"
                    >
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <InputField label="Full Name" placeholder="John Doe" />
                                <InputField label="Email Address" placeholder="john@example.com" />
                            </div>
                            <InputField label="Subject" placeholder="Project Inquiry" />
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Message</label>
                                <textarea
                                    className="bg-white border border-orange-50 rounded-xl p-4 min-h-[150px] outline-none focus:border-primary transition-colors text-sm font-medium"
                                    placeholder="Tell us about your brand..."
                                />
                            </div>
                            <button className="bg-primary text-white py-5 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl mt-4">
                                Send Message <Send size={14} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </section>
        </main>
    );
}

function ContactDetail({ icon, title, content }: { icon: any, title: string, content: string }) {
    return (
        <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                {icon}
            </div>
            <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{title}</h4>
                <p className="text-black font-bold text-lg">{content}</p>
            </div>
        </div>
    );
}

function InputField({ label, placeholder }: { label: string, placeholder: string }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">{label}</label>
            <input
                type="text"
                className="bg-white border border-orange-50 rounded-xl px-4 py-4 outline-none focus:border-primary transition-colors text-sm font-medium"
                placeholder={placeholder}
            />
        </div>
    );
}