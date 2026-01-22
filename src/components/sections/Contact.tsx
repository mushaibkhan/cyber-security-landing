"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (form.current) {
            // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
            // Sign up at https://www.emailjs.com/
            emailjs.sendForm(
                'service_qxgapih', 
                'template_xtmg0ej', 
                form.current, 
                '_1XDcSPjowbppxkUr'
            )
            .then((result) => {
                console.log(result.text);
                setIsSubmitting(false);
                setSubmitted(true);
            }, (error) => {
                console.error(error.text);
                setIsSubmitting(false);
                alert("Failed to send message. Please try again.");
            });
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sf/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                            Secure your <span className="text-sf">Most Sensitive</span> Information
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-md leading-relaxed">
                            Empowering organizations to discover, classify, govern, and secure sensitive data—while avoiding costly breaches and regulatory penalties.
                        </p>
                        <p className="text-slate-500 text-sm mb-12 max-w-sm">
                            Speak with a strategic partner today to regain visibility and control over your data security posture.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border-white/10 group-hover:border-sf/50 transition-colors">
                                    <Mail className="w-5 h-5 text-sf" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Us</p>
                                    <p className="text-white font-medium">info@sfdspm.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border-white/10 group-hover:border-dspm/50 transition-colors">
                                    <MapPin className="w-5 h-5 text-dspm" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global HQ</p>
                                    <p className="text-white font-medium">Austin, Texas</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 glass rounded-2xl border-sf/20 bg-sf/5">
                            <div className="flex items-center space-x-3 mb-2">
                                <ShieldCheck className="w-5 h-5 text-sf" />
                                <span className="text-sm font-bold text-white tracking-wide">Secure Communication</span>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                All data sent through this form is encrypted using AES-256 and subject to our strict Zero Trust privacy protocols for SFDSPM.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 lg:p-12 glass rounded-[2.5rem] border-white/10 relative"
                    >
                        {submitted ? (
                            <div className="py-20 text-center">
                                <div className="w-20 h-20 bg-sf/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <ShieldCheck className="w-10 h-10 text-sf" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Transmission Received</h3>
                                <p className="text-slate-400">An <span className="text-sf">SF</span><span className="text-dspm">DSPM</span> security expert will contact you within 24 hours.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-sf text-sm font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-300 uppercase tracking-widest ml-1">Full Name</label>
                                        <input
                                            name="user_name"
                                            required
                                            type="text"
                                            placeholder="Jane Doe"
                                            className="w-full bg-slate-800/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-sf/50 focus:bg-slate-800/60 transition-all font-semibold"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-300 uppercase tracking-widest ml-1">Email Address</label>
                                        <input
                                            name="user_email"
                                            required
                                            type="email"
                                            placeholder="jane@company.com"
                                            className="w-full bg-slate-800/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-sf/50 focus:bg-slate-800/60 transition-all font-semibold"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest ml-1">Company / Organization</label>
                                    <input
                                        name="company"
                                        required
                                        type="text"
                                        placeholder="SFDSPM Tech"
                                        className="w-full bg-slate-800/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-sf/50 focus:bg-slate-800/60 transition-all font-semibold"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Describe your security needs..."
                                        className="w-full bg-slate-800/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-sf/50 focus:bg-slate-800/60 transition-all font-semibold resize-none"
                                    />
                                </div>

                                <button
                                    disabled={isSubmitting}
                                    className={cn(
                                        "w-full py-4 rounded-xl font-black transition-all flex items-center justify-center space-x-2 overflow-hidden relative group",
                                        isSubmitting ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-sf text-slate-950 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]"
                                    )}
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-slate-600 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <span>Initialize Contact</span>
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
