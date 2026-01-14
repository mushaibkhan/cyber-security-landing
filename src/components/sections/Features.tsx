"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Search,
    FileText,
    RefreshCcw,
    Eye,
    ShieldAlert,
    Settings2,
    ArrowRightLeft,
    Database,
    Lock
} from "lucide-react";

const services = [
    {
        title: "Data Security Posture Assessment",
        desc: "Complete evaluation of configurations, policy effectiveness, and compliance alignment.",
        icon: Settings2,
        color: "text-cyber-blue",
        bg: "bg-cyber-blue/10"
    },
    {
        title: "Sensitive Data Discovery",
        desc: "Uncover PII, PHI, and PCI across cloud, SaaS, on-prem, and endpoints.",
        icon: Search,
        color: "text-cyber-cyan",
        bg: "bg-cyber-cyan/10"
    },
    {
        title: "Intelligent Classification",
        desc: "Accurate labeling framework for financial data, IP, and confidential records.",
        icon: FileText,
        color: "text-cyber-violet",
        bg: "bg-cyber-violet/10"
    },
    {
        title: "Lifecycle Management",
        desc: "Enforcing retention, encryption, and secure sharing from creation to deletion.",
        icon: Database,
        color: "text-cyber-green",
        bg: "bg-cyber-green/10"
    },
    {
        title: "Data Movement Monitoring",
        desc: "Oversight of data in motion, at rest, and sharing across all platforms.",
        icon: Eye,
        color: "text-cyber-blue",
        bg: "bg-cyber-blue/10"
    },
    {
        title: "Enforcement of Block Policies",
        desc: "Robust DLP controls for email, web uploads, USB, and shadow IT.",
        icon: Lock,
        color: "text-cyber-cyan",
        bg: "bg-cyber-cyan/10"
    },
    {
        title: "Regulatory Fine Protection",
        desc: "Alignment with PCI DSS, HIPAA, CCPA, CPRA, NIST, and ISO 27001.",
        icon: ShieldAlert,
        color: "text-cyber-violet",
        bg: "bg-cyber-violet/10"
    },
    {
        title: "Policy Consolidation",
        desc: "Reducing false positives and standardizing rule sets for better accuracy.",
        icon: RefreshCcw,
        color: "text-cyber-green",
        bg: "bg-cyber-green/10"
    },
    {
        title: "DLP Tool Migration",
        desc: "Support between Microsoft Purview, Netskope, Zscaler, Forcepoint, and more.",
        icon: ArrowRightLeft,
        color: "text-cyber-blue",
        bg: "bg-cyber-blue/10"
    }
];

export default function Features() {
    return (
        <section id="solutions" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl lg:text-5xl font-black mb-6">Core Consulting Services</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Our mission is to empower organizations to discover, classify, govern, and secure sensitive data—avoiding costly breaches and regulatory penalties.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="group p-8 glass rounded-[2rem] border-white/5 hover:border-cyber-blue/30 transition-all duration-500"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon className={`w-7 h-7 ${service.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyber-blue transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
