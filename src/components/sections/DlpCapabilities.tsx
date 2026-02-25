"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    FileSearch,
    Fingerprint,
    Tags,
    MessageSquareWarning,
    Search,
    Laptop,
    Eye,
    Wand2,
    Code
} from "lucide-react";

const capabilities = [
    {
        title: "Exact Data Match (EDM)",
        description: "We help you deploy EDM to accurately detect and protect structured data such as customer records or financial information. This reduces false positives and strengthens your compliance posture.",
        icon: ShieldCheck,
    },
    {
        title: "Sensitive Information Types (SITs)",
        description: "Our team configures and customizes SITs so your environment can automatically recognize sensitive data like credit cards, health records, and personal identifiers.",
        icon: FileSearch,
    },
    {
        title: "Regex-Based Detection",
        description: "If your business uses unique data formats, we build custom regex patterns to ensure your proprietary information is always identified and protected.",
        icon: Code,
    },
    {
        title: "Document Fingerprinting",
        description: "We implement fingerprinting to safeguard unstructured content such as contracts, templates, and designs so even modified versions are detected and controlled.",
        icon: Fingerprint,
    },
    {
        title: "Sensitivity Labels",
        description: "We help you design and deploy a labeling framework that classifies and protects data consistently across your entire organization.",
        icon: Tags,
    },
    {
        title: "Policy Tips",
        description: "We configure real-time user guidance that prevents accidental data leaks and builds a culture of secure behavior without slowing your team down.",
        icon: MessageSquareWarning,
    },
    {
        title: "Content Inspection",
        description: "Our solutions analyze the actual content inside files, emails, and attachments—not just metadata—to ensure sensitive information never slips through the cracks.",
        icon: Search,
    },
    {
        title: "Endpoint DLP",
        description: "We extend your protection to devices, monitoring actions such as printing, copying to USB, or uploading to unapproved apps. This is essential for hybrid and remote teams.",
        icon: Laptop,
    },
    {
        title: "Activity Monitoring",
        description: "We help you gain visibility into how users interact with data, enabling early detection of risky behavior and insider threats.",
        icon: Eye,
    },
    {
        title: "Auto‑Labeling",
        description: "We implement automated classification so your sensitive data is labeled and protected consistently without relying on manual effort.",
        icon: Wand2,
    }
];

export default function DlpCapabilities() {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-950">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dspm/10 via-slate-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dspm/10 border border-dspm/20 text-dspm text-sm font-semibold mb-6">
                            <span className="text-lg">🔐</span>
                            <span>Data Loss Prevention</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
                            We Help You Master Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-sf to-dspm">Data Loss Prevention</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            Today's organizations handle more data across more systems than ever before. Protecting that data isn't optional—it's essential. We help businesses understand, implement, and optimize the core components of a modern Data Loss Prevention (DLP) strategy, ensuring your sensitive information stays secure wherever it travels.
                        </p>
                        <p className="text-slate-500">
                            Below are the foundational DLP capabilities we support and implement for our clients.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-slate-900/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-dspm/30 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-dspm/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-dspm/20 transition-all duration-300">
                                <capability.icon className="w-6 h-6 text-dspm" />
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-xs font-black text-dspm/60 bg-dspm/10 px-2 py-1 rounded">{(index + 1).toString().padStart(2, '0')}</span>
                                <h3 className="text-xl font-bold text-white group-hover:text-dspm transition-colors">
                                    {capability.title}
                                </h3>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {capability.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
