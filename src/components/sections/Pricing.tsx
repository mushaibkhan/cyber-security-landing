"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Startup",
        price: "$1,499",
        description: "Essential protection for growing teams and SaaS startups.",
        features: [
            "AI Threat Intelligence",
            "Endpoint Protection (50 nodes)",
            "Standard Support",
            "OAuth 2.0 Integration",
            "Weekly Security Audits",
        ],
        highlight: false,
        cta: "Start Free Trial",
    },
    {
        name: "Business",
        price: "$4,999",
        description: "Advanced architecture for established enterprises.",
        features: [
            "All Startup Features",
            "Zero Trust Architecture",
            "Cloud & K8s Security",
            "Real-time Monitoring Dashboard",
            "24/7 Premium Support",
            "SIEM Integration",
        ],
        highlight: true,
        cta: "Request Demo",
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Global-scale protection with dedicated security engineers.",
        features: [
            "All Business Features",
            "Unlimited Nodes",
            "Air-Gapped Deployment",
            "Regulatory Compliance (SOC2/GDPR)",
            "Incident Response Team",
            "Custom ML Model Training",
        ],
        highlight: false,
        cta: "Contact Sales",
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-slate-950/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4">Scalable Protection Plans</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Transparent pricing designed to grow with your infrastructure, from stealth startups to global enterprises.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-8 rounded-[2.5rem] flex flex-col h-full border ${plan.highlight
                                    ? "bg-slate-900/80 border-cyber-blue shadow-[0_0_50px_rgba(0,242,255,0.1)]"
                                    : "glass border-white/10"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-12 -translate-y-1/2 bg-cyber-blue text-slate-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest leading-none">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">{plan.name}</h3>
                                <div className="flex items-baseline mb-4">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-slate-500 ml-2">/month</span>}
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start space-x-3 text-sm">
                                        <Check className="w-5 h-5 text-cyber-blue shrink-0" />
                                        <span className="text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight
                                    ? "bg-cyber-blue text-slate-950 hover:shadow-[0_0_25px_rgba(0,242,255,0.3)] hover:bg-cyber-blue/90"
                                    : "glass text-white hover:bg-white/10"
                                }`}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
