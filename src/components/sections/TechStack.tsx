"use client";

import React from "react";
import { motion } from "framer-motion";

const groups = [
    {
        category: "DLP Ecosystem",
        techs: ["Microsoft Purview", "Symantec DLP", "Forcepoint", "Trellix", "Netskope", "Proofpoint", "Zscaler"]
    },
    {
        category: "Cloud & Infrastructure",
        techs: ["AWS S3", "Azure Blob", "GCP Storage", "Kubernetes", "SaaS Apps", "SharePoint", "OneDrive"]
    },
    {
        category: "Compliance Frameworks",
        techs: ["PCI DSS", "HIPAA", "GLBA", "SOX", "FERPA", "CCPA", "CPRA", "NYDFS", "ISO 27001", "NIST 800-53"]
    }
];

export default function TechStack() {
    return (
        <section id="technology" className="py-24 border-y border-white/5 bg-slate-950/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-black mb-4">Strategic Integration Perimeter</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        SFDSPM provides deep expertise in legacy DLP and modern DSPM—seamlessly migrating and consolidating your security environment.
                    </p>
                </div>

                <div className="space-y-12">
                    {groups.map((group, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-0">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyber-blue w-64 md:pt-3">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-3 flex-1">
                                {group.techs.map((tech) => (
                                    <motion.span
                                        key={tech}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="px-5 py-2 glass rounded-xl text-sm font-semibold border-white/5 hover:border-cyber-blue/30 transition-all cursor-default text-white"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
