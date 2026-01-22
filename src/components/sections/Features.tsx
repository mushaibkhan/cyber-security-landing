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
        desc: "Evaluate configurations, identify policy gaps, and map controls to compliance frameworks (PCI, HIPAA, NIST).",
        icon: Settings2,
        color: "text-sf",
        bg: "bg-sf/10"
    },
    {
        title: "Sensitive Data Discovery",
        desc: "Scan across AWS, Azure, GCP, SaaS, and endpoints to build a centralized, tagged data inventory.",
        icon: Search,
        color: "text-sf/80",
        bg: "bg-sf/5"
    },
    {
        title: "Data Classification & Governance",
        desc: "Automate tagging of PII, PHI, PCI, and IP. Enforce retention, encryption, and secure sharing policies.",
        icon: FileText,
        color: "text-dspm",
        bg: "bg-dspm/10"
    },
    {
        title: "Monitoring & Enforcement",
        desc: "Detect and block exfiltration via email, web, USB, and cloud. Enable continuous behavioral monitoring.",
        icon: Eye,
        color: "text-dspm/80",
        bg: "bg-dspm/5"
    },
    {
        title: "Regulatory Compliance",
        desc: "Align with PCI DSS, HIPAA/HITECH, GLBA, SOX, CCPA, and ISO 27001. Generate audit-ready evidence.",
        icon: ShieldAlert,
        color: "text-sf",
        bg: "bg-sf/10"
    },
    {
        title: "DLP Policy Optimization",
        desc: "Consolidate legacy policies, reduce false positives, and modernize enforcement logic while preserving business rules.",
        icon: RefreshCcw,
        color: "text-dspm",
        bg: "bg-dspm/10"
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
                            className="group p-8 glass rounded-[2rem] border-white/5 hover:border-sf/30 transition-all duration-500"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon className={`w-7 h-7 ${service.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sf transition-colors">
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
