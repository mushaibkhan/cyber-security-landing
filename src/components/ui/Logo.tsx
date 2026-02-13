import React from "react";
import Image from "next/image";

interface LogoProps {
    className?: string;
}

export default function Logo({ className = "w-10 h-10" }: LogoProps) {
    return (
        <div className={`relative ${className} group`}>
            <Image
                src="/logo.png"
                alt="SFDSPM Logo"
                width={200}
                height={200}
                className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(0,242,255,0.4)] transition-transform duration-500 group-hover:scale-110"
            />
            {/* Absolute Glow Background */}
            <div className="absolute inset-0 bg-sf/20 blur-xl rounded-full -z-10 group-hover:bg-sf/40 transition-all duration-500" />
        </div>
    );
}

