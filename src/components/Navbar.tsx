"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();

    // Smooth scroll progress bar
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Change nav appearance on scroll or if not on the Home page
    const isWhiteNav = scrolled || pathname !== '/';

    const navClasses = `fixed top-0 w-full z-[100] transition-all duration-500 px-[5%] flex justify-between items-center ${isWhiteNav
        ? "bg-white/95 backdrop-blur-md py-2 shadow-sm"
        : "bg-transparent py-7"
        }`;

    return (
        <>
            <nav className={navClasses}>
                {/* 1. Stacked Brand Logo */}
                <Link href="/" className="flex flex-col leading-[0.8] group">
                    <Image
                        src="/logo.png"
                        alt="PRABLO 360 Logo"
                        width={80}
                        height={40}
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* 2. Desktop Navigation */}
                <div className={`hidden md:flex gap-10 font-bold text-[12px] uppercase tracking-[0.2em] transition-colors ${isWhiteNav ? "text-black/80" : "text-white/90"
                    }`}>
                    {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => {
                        const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                        const isActive = pathname === href;

                        return (
                            <Link
                                key={item}
                                href={href}
                                className={` transition-colors relative group `}
                            >
                                {item}
                                <span className={`absolute -bottom-1 left-0 h-[2px] transition-all group-hover:w-full ${isActive ? 'w-full' : 'w-0'} ${isWhiteNav ? "bg-primary" : "bg-white"}`} />
                            </Link>
                        );
                    })}
                </div>

                {/* 3. Action Button & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link href="/contact">
                        <button className={`hidden md:block px-8 py-2 rounded-sm font-black text-primary text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-lg active:scale-95 ${isWhiteNav ? "bg-primary text-white" : "bg-white text-black"}`}>
                            Hire Us
                        </button>
                    </Link>

                    <button
                        className={`md:hidden p-2 transition-colors ${isWhiteNav ? "text-black" : "text-white"}`}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>

                {/* Sticky Progress Bar at the bottom of Navbar */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-[0%]"
                    style={{ scaleX }}
                />
            </nav>

            {/* 4. Responsive Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.4 }}
                        className="fixed inset-0 z-[200] bg-black flex flex-col p-8"
                    >
                        {/* Mobile Header */}
                        <div className="flex justify-between items-center mb-16">
                            <div className="flex flex-col leading-[0.8]">
                                <span className="font-outfit font-black text-2xl text-white">PRABLO</span>
                                <span className="font-outfit font-black text-2xl text-primary">360</span>
                            </div>
                            <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                                <X size={32} />
                            </button>
                        </div>

                        {/* Mobile Links */}
                        <div className="flex flex-col gap-8">
                            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-white text-4xl font-black uppercase hover:text-primary transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Footer Cta */}
                        <div className="mt-auto">
                            <button className="w-full bg-primary text-white py-5 rounded-sm font-black text-sm uppercase tracking-widest">
                                Hire Us Today
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}