"use client";

import React from "react";
import {
    Mail,
    Linkedin,
    ShieldAlert,
    Lock,
    CheckCircle2
} from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
    return (
        <footer className="pt-24 pb-12 border-t border-white/10 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <Logo className="w-10 h-10" />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight text-white leading-none">
                                    <span className="text-sf">SF</span><span className="text-white">DSPM</span>
                                </span>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter mt-1">
                                    SecureFrame Technologies LLC
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
                            Regain visibility, control, and confidence in your data security posture. Your strategic partner for Enterprise DLP and DSPM Excellence.
                        </p>
                        <div className="flex space-x-5">
                            <a href="https://linkedin.com/company/sfdspm" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg hover:text-sf transition-colors text-slate-400 group">
                                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 flex items-center">
                            <ShieldAlert className="w-4 h-4 text-sf mr-2" />
                            Expertise
                        </h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="flex items-center hover:text-sf transition-colors group">
                                <CheckCircle2 className="w-3 h-3 mr-2 opacity-50 group-hover:opacity-100" />
                                <a href="#">Posture Assessment</a>
                            </li>
                            <li className="flex items-center hover:text-sf transition-colors group">
                                <CheckCircle2 className="w-3 h-3 mr-2 opacity-50 group-hover:opacity-100" />
                                <a href="#">Data Discovery</a>
                            </li>
                            <li className="flex items-center hover:text-sf transition-colors group">
                                <CheckCircle2 className="w-3 h-3 mr-2 opacity-50 group-hover:opacity-100" />
                                <a href="#">Tool Migrations</a>
                            </li>
                            <li className="flex items-center hover:text-sf transition-colors group">
                                <CheckCircle2 className="w-3 h-3 mr-2 opacity-50 group-hover:opacity-100" />
                                <a href="#">Policy Consolidation</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 flex items-center">
                            <Lock className="w-4 h-4 text-dspm mr-2" />
                            Compliance
                        </h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="hover:text-dspm transition-colors"><a href="#">PCI DSS / HIPAA</a></li>
                            <li className="hover:text-dspm transition-colors"><a href="#">GDPR / CCPA / CPRA</a></li>
                            <li className="hover:text-dspm transition-colors"><a href="#">NIST 800-53/171</a></li>
                            <li className="hover:text-dspm transition-colors"><a href="#">ISO 27001</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                        <p>© 2026 SecureFrame Technologies LLC. All rights reserved.</p>
                        <span className="hidden md:inline w-px h-3 bg-white/10" />
                        <p>Designed By <span className="text-sf font-semibold">Origin Softwares</span></p>
                    </div>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-white transition-colors">Trust Center</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>

                {/* Subtle legal text in corner as requested */}
                <div className="absolute bottom-4 right-6 opacity-20 pointer-events-none">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white">SecureFrame Technologies LLC</span>
                </div>
            </div>
        </footer>
    );
}
