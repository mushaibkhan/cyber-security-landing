"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

const navLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "glass py-3 border-white/10"
                    : "bg-transparent py-5 border-transparent"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3 group">
                    <Logo className="w-10 h-10" />
                    <span className="text-xl font-bold tracking-tight text-white leading-none">
                        <span className="text-sf">SF</span><span className="text-white">DSPM</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-sf transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={scrollToContact}
                        className="px-5 py-2 rounded-full bg-sf text-slate-950 text-sm font-bold hover:bg-sf/80 transition-shadow hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]"
                    >
                        Security Audit
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/10"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-300"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => { scrollToContact(); setMobileMenuOpen(false); }}
                                className="w-full px-5 py-3 rounded-xl bg-sf text-slate-950 font-bold"
                            >
                                Request Audit
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
