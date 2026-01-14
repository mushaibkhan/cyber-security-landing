"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
    "FORTUNE 500", "NETCORP", "CYBERLY", "DATASTRATA", "QUANTUM", "SECURELY"
];

export default function TrustedBy() {
    return (
        <section className="py-12 border-y border-white/5 bg-slate-950/30 overflow-hidden">
            <div className="container mx-auto px-6">
                <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-10">
                    Trusted by Industry Leaders Worldwide
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                    {logos.map((logo, idx) => (
                        <div key={idx} className="text-xl font-black text-slate-400 select-none">
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
