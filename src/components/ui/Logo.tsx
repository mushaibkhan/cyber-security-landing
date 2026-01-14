"use client";

import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
    className?: string;
}

export default function Logo({ className = "w-10 h-10" }: LogoProps) {
    return (
        <div className={`relative ${className} group`}>
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]"
            >
                {/* Outer Hexagon Shield */}
                <path
                    d="M50 5L90 25V75L50 95L10 75V25L50 5Z"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinejoin="round"
                    className="text-cyber-blue opacity-50 transition-opacity group-hover:opacity-100"
                />

                {/* Inner Stylized 'S' Pulse */}
                <motion.path
                    d="M30 40C30 30 70 30 70 45C70 60 30 60 30 75C30 90 70 90 70 80"
                    stroke="url(#pulse-gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Core Glow Point */}
                <circle cx="50" cy="50" r="10" className="fill-cyber-blue animate-pulse" />

                <defs>
                    <linearGradient id="pulse-gradient" x1="30" y1="30" x2="70" y2="80" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00f2ff" />
                        <stop offset="1" stopColor="#8b5cf6" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Absolute Glow Background */}
            <div className="absolute inset-0 bg-cyber-blue/20 blur-xl rounded-full -z-10 group-hover:bg-cyber-blue/40 transition-all duration-500" />
        </div>
    );
}
