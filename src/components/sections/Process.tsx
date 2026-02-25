"use client";

import React from "react";
import { Search, FileText, ShieldCheck, RefreshCw, Database, Eye } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        title: "Discover",
        description: "Scan AWS, Azure, GCP, SaaS, and endpoints to identify sensitive data (PII, PHI, PCI).",
        icon: Search,
        color: "bg-sf/10",
        iconColor: "text-sf",
    },
    {
        title: "Classify",
        description: "Apply metadata and tags for confidential, internal, and public data using ML-driven patterns.",
        icon: FileText,
        color: "bg-sf/10",
        iconColor: "text-sf/80",
    },
    {
        title: "Monitor",
        description: "Track data lineage and usage across email, web, USB, and cloud to detect anomalies.",
        icon: Eye,
        color: "bg-dspm/10",
        iconColor: "text-dspm",
    },
    {
        title: "Enforce",
        description: "Block unauthorized transfers, encrypt sensitive files, and automate incident response.",
        icon: ShieldCheck,
        color: "bg-dspm/10",
        iconColor: "text-dspm/80",
    },
];

export default function Process() {
    return (
        <section id="how-dspm-works" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl lg:text-5xl font-black mb-6">Regain Visibility & Control.</h2>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
                        Our systematic approach to Data Security Posture Management ensures your most sensitive assets are protected wherever they live, move, or evolve.
                    </p>
                </div>


                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connection Line */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-sf/50 via-dspm/50 to-dspm/30 -z-10" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className={`w-24 h-24 mx-auto mb-6 rounded-full glass flex items-center justify-center border-sf/20 group-hover:border-sf group-hover:shadow-[0_0_25px_rgba(0,242,255,0.3)] transition-all duration-500 bg-slate-900`}>
                                <step.icon className={`w-10 h-10 ${step.iconColor}`} />
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-white">{step.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-[200px] mx-auto">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
