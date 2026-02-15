"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface VideoLogoProps {
    logoSrc: string;
    videoSrc: string;
    alt: string;
}

export default function VideoLogo({ logoSrc, videoSrc, alt }: VideoLogoProps) {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            if (isHovered) {
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(e => console.error("Video play failed:", e));
            } else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }, [isHovered]);

    return (
        <div
            className="relative w-[250px] h-[200px] md:w-[400px] md:h-[50vh] flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                src={logoSrc}
                alt={alt}
                width={400}
                height={100}
                className={`object-contain transition-opacity duration-300 absolute inset-0 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            />
            <video
                ref={videoRef}
                src={videoSrc}
                muted
                playsInline
                loop
                className={`w-full h-full object-contain transition-opacity duration-300 absolute inset-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
}
