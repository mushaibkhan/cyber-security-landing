"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ArrowRightLeft,
    ShieldCheck,
    FileSearch,
    CheckCircle2
} from "lucide-react";

const services = [
    {
        title: "Microsoft Purview Migration & Consolidation",
        description: "Legacy DLP platforms often create complexity, blind spots, and operational overhead. We specialize in transforming those environments into streamlined, cloud-aligned Purview deployments that are secure and compliant.",
        icon: ArrowRightLeft,
        image: "/images/dlp/migration.jpg",
        features: [
            "In-depth analysis of existing DLP rules & workflows",
            "Intelligent mapping to Purview capabilities",
            "Re-engineering policies for accuracy & scalability",
            "Consolidation of redundant policies",
            "Deployment across endpoints, cloud, email & hybrid"
        ]
    },
    {
        title: "Enterprise Grades Sensitivity Labels & Information Protection",
        description: "A strong data protection strategy starts with a clear, consistent classification model. We design and implement Microsoft Purview Sensitivity Labels that reflect your organization’s structure.",
        icon: ShieldCheck,
        image: "/images/dlp/sensitivity_labels.jpg",
        features: [
            "Taxonomy aligned with compliance requirements",
            "Creating and publishing sensitivity labels",
            "Enabling encryption & content marking",
            "Automated labeling integration",
            "Unified labeling across M365 & 3rd-party systems"
        ]
    },
    {
        title: "Policy Assessment, Optimization & Automated Reporting",
        description: "Whether you’re refining an existing Purview deployment or building one from the ground up, we ensure your DLP strategy is precise, actionable, and aligned with real-world workflows.",
        icon: FileSearch,
        image: "/images/dlp/policy_assessment.jpg",
        features: [
            "Comprehensive policy evaluation",
            "Creation of high-fidelity policies",
            "Consolidation based on risk levels",
            "Automated reporting to reduce overhead",
            "Continuous optimization & false positive reduction"
        ]
    }
];

export default function DlpServices() {
    return (
        <section id="purview" className="py-24 relative">
            {/* Background Gradients */}
            <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-sf/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-dspm/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-5xl font-black mb-6">
                            Shift to <span className="text-transparent bg-clip-text bg-gradient-to-r from-sf to-dspm">MS Purview</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Modernize your data protection strategy with our expert migration, classification, and optimization services focused on Microsoft Purview.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-20">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
                        >
                            {/* Content */}
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sf/20 to-dspm/20 flex items-center justify-center border border-white/5">
                                        <service.icon className="w-6 h-6 text-sf" />
                                    </div>
                                    <h3 className="text-2xl font-bold">{service.title}</h3>
                                </div>

                                <p className="text-slate-400 text-lg leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                                            <CheckCircle2 className="w-5 h-5 text-dspm shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Decorative / Visual Side - Now using Images */}
                            <div className="flex-1 w-full">
                                <div className="relative p-2 glass rounded-[2rem] border border-white/5 overflow-hidden group hover:border-sf/20 transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-sf/5 via-transparent to-dspm/5 opacity-50" />

                                    <div className="relative z-10 rounded-xl overflow-hidden aspect-[4/3] bg-black/20">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sf/20 rounded-full blur-2xl group-hover:bg-sf/30 transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
