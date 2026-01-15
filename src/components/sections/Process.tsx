"use client";

import React from "react";
import { Search, FileText, ShieldCheck, RefreshCw, Database, Eye } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        title: "Discover",
        description: "Scan AWS, Azure, GCP, SaaS, and endpoints to identify sensitive data (PII, PHI, PCI).",
        icon: Search,
        color: "bg-cyber-blue/10",
        iconColor: "text-cyber-blue",
    },
    {
        title: "Classify",
        description: "Apply metadata and tags for confidential, internal, and public data using ML-driven patterns.",
        icon: FileText,
        color: "bg-cyber-cyan/10",
        iconColor: "text-cyber-cyan",
    },
    {
        title: "Monitor",
        description: "Track data lineage and usage across email, web, USB, and cloud to detect anomalies.",
        icon: Eye,
        color: "bg-cyber-violet/10",
        iconColor: "text-cyber-violet",
    },
    {
        title: "Enforce",
        description: "Block unauthorized transfers, encrypt sensitive files, and automate incident response.",
        icon: ShieldCheck,
        color: "bg-cyber-green/10",
        iconColor: "text-cyber-green",
    },
];

export default function Process() {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-12">
                    <div className="lg:max-w-xl">
                        <h2 className="text-3xl lg:text-5xl font-black mb-6">Regain Visibility & Control.</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Our systematic approach to Data Security Posture Management ensures your most sensitive assets are protected wherever they live, move, or evolve.
                        </p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative p-1 glass rounded-[2rem] overflow-hidden group w-full max-w-md">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative bg-slate-900/80 rounded-[1.8rem] p-8 border border-white/5">
                                <div className="flex space-x-2 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                                </div>
                                <div className="space-y-3 font-mono text-xs lg:text-sm">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-slate-500">$</span>
                                        <span className="text-cyber-blue">sfdspm scan --scope cloud</span>
                                    </div>
                                    <div className="text-slate-400">[INFO] Scanning AWS S3 Bucket...</div>
                                    <div className="text-amber-400/80">[WARN] Unclassified PII detected (1,402 records)</div>
                                    <div className="text-cyber-blue/80">[ACTION] Applying encryption & classification...</div>
                                    <div className="text-emerald-400">[SUCCESS] Posture hardened. Compliance: SOC2/HIPAA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connection Line */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-cyber-blue/50 via-cyber-violet/50 to-cyber-green/50 -z-10" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className={`w-24 h-24 mx-auto mb-6 rounded-full glass flex items-center justify-center border-cyber-blue/20 group-hover:border-cyber-blue group-hover:shadow-[0_0_25px_rgba(0,242,255,0.3)] transition-all duration-500 bg-slate-900`}>
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
