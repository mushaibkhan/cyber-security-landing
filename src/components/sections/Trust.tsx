"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Globe, Zap, Users, Lock } from "lucide-react";

const differentiators = [
    "Risk-centric approach with measurable outcomes",
    "Deep expertise in legacy and cloud-native protection",
    "Vendor-agnostic execution and integration",
    "Accelerated time-to-value with proven playbooks",
    "Audit-ready deliverables and compliance assurance"
];

export default function Trust() {
    return (
        <section className="py-24 bg-slate-950/40 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-6xl font-black mb-8">Why Choose <span className="text-cyber-blue">SFDSPM?</span></h2>
                        <div className="space-y-6">
                            {differentiators.map((text, i) => (
                                <div key={i} className="flex items-start space-x-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-cyber-blue/10 flex items-center justify-center border border-cyber-blue/30 shrink-0">
                                        <Check className="w-4 h-4 text-cyber-blue" />
                                    </div>
                                    <p className="text-slate-300 font-medium text-lg leading-tight">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-8 glass rounded-3xl border-cyber-violet/20 bg-cyber-violet/5">
                            <div className="flex items-center space-x-4 mb-4">
                                <Globe className="w-8 h-8 text-cyber-violet" />
                                <h4 className="text-xl font-bold text-white">Global Compliance Reach</h4>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Strategic alignment with <span className="text-cyber-violet font-bold">PCI DSS, HIPAA/HITECH, GLBA, SOX, FERPA, CCPA/CPRA, NYDFS, Virginia CDPA, Colorado Privacy Act, NIST 800-53/171, and ISO 27001.</span>
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 gap-6"
                    >
                        {[
                            { label: "Expertise", title: "DLP & DSPM", Icon: ShieldCheck, color: "text-cyber-blue" },
                            { label: "Consulting", title: "Vendor Agnostic", Icon: Users, color: "text-cyber-violet" },
                            { label: "Protection", title: "Endpoint & Cloud", Icon: Lock, color: "text-cyber-cyan" },
                            { label: "Implementation", title: "Proven Methods", Icon: Zap, color: "text-cyber-green" }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 glass rounded-[2.5rem] border-white/5 hover:border-white/10 transition-colors">
                                <stat.Icon className={`w-10 h-10 ${stat.color} mb-6`} />
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                                <h4 className="text-xl font-black text-white">{stat.title}</h4>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
