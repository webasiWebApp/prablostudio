"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
    { name: "Sandakelum Prabhashwara", role: "Founder & CEO", image: "/team/sandakelum prabhashwara.jpeg" },
    { name: "Lehara Rukshani", role: "General Manager", image: "/team/Lehara Rukshani.jpeg" },
    { name: "Benajith Tesali", role: "Operation Manager", image: "/team/Benajith tesali.jpeg" },
    { name: "Rumesh Bandara", role: "Director of Global Operations", image: "/team/Rumesh bandara.jpeg" },
    { name: "Radya Liyanarachchi", role: "Director of Digital Strategy", image: "/team/Radya liyanarachchi.jpeg" },
    { name: "Lakshan Manuranga", role: "Strategic Media Director", image: "/team/Lakshan manuranga.jpeg" },
    { name: "Naveen Buddhika", role: "Head of Brand Identity & Design", image: "/team/Naveen buddika.jpeg" },
    { name: "Ishan Sangeeth", role: "Head of Video Production", image: "/team/Ishan sangeeth.jpeg" },
    { name: "Radya Liyanarachchi", role: "Lead Creative Content Creator", image: "/team/Radya liyanarachchi.jpeg" },
    { name: "Praveen Maleesha", role: "Lead Web Developer" },
    { name: "Pathum Akalanka", role: "Senior Visual Designer", image: "/team/Pathum Akalanka.jpeg" },
    { name: "Anuhas Jayasooriya", role: "Brand Designer", image: "/team/Anuhas jayasooriya.jpeg" },
];

export default function Team() {
    return (
        <section className="py-24 px-[5%] bg-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-black text-5xl md:text-7xl font-bold font-poppins uppercase leading-[0.85] mb-6">
                        MEET THE <br />
                        <span className="text-primary font-light">MINDS.</span>
                    </h2>
                    <p className="text-gray-500 text-lg font-normal font-poppins max-w-2xl mx-auto">
                        A collective of visionaries, creators, and strategists dedicated to redefining your digital presence.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group cursor-pointer"
                        >
                            {/* Image Placeholder */}
                            <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden mb-6 border border-gray-100 group-hover:shadow-xl transition-all duration-500">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 font-normal uppercase tracking-widest">
                                        Photo Pending
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
                                <h3 className="text-black text-xl font-normal font-poppins uppercase leading-tight mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-primary text-xs font-normal uppercase tracking-widest">
                                    {member.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
