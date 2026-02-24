"use client";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

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
                        className="text-white text-6xl md:text-[110px] font-bold font-poppins uppercase leading-[0.8]"
                    >
                        LET'S START <br />
                        <span className="font-light text-white/90">A PROJECT.</span>
                    </motion.h1>
                </div>
            </section>

            {/* 2. Main Contact Content */}
            <section className="py-24 px-[5%] max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-20">

                    {/* Left Side: Contact Info & Address */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-black text-5xl font-semibold font-poppins uppercase mb-8 leading-none">
                            OFFICE IN <br />
                            <span className="text-primary font-light">COLOMBO.</span>
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
                        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <InputField
                                    name="name"
                                    label="Full Name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <InputField
                                    name="email"
                                    label="Email Address"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <InputField
                                name="subject"
                                label="Subject"
                                placeholder="Project Inquiry"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-normal uppercase tracking-widest text-primary ml-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="bg-white border border-orange-50 rounded-xl p-4 min-h-[150px] outline-none focus:border-primary transition-colors text-sm font-medium"
                                    placeholder="Tell us about your brand..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="bg-primary text-white py-5 rounded-xl font-normal text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <>Sending... <Loader2 size={14} className="animate-spin" /></>
                                ) : (
                                    <>Send Message <Send size={14} /></>
                                )}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-600 text-xs font-normal text-center mt-2 uppercase tracking-wide">
                                    Message Sent Successfully!
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-600 text-xs font-normal text-center mt-2 uppercase tracking-wide">
                                    Something went wrong. Please try again.
                                </p>
                            )}
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
                <h4 className="text-[10px] font-normal uppercase tracking-widest text-gray-400 mb-1">{title}</h4>
                <p className="text-black font-normal text-lg">{content}</p>
            </div>
        </div>
    );
}

function InputField({ label, placeholder, name, value, onChange }: { label: string, placeholder: string, name: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[10px] font-normal uppercase tracking-widest text-primary ml-1">{label}</label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                required
                className="bg-white border border-orange-50 rounded-xl px-4 py-4 outline-none focus:border-primary transition-colors text-sm font-medium"
                placeholder={placeholder}
            />
        </div>
    );
}