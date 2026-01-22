"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Activity,
  ChevronRight,
  Zap,
  Target,
} from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sf/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-dspm/5 rounded-full blur-[120px]" />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-sf/30 bg-sf/5 mb-6">
            <Target className="w-4 h-4 text-sf animate-pulse" />
            <span className="text-xs font-semibold text-sf uppercase tracking-wider">
              Strategic Data Protection for the Modern Enterprise
            </span>
          </div>

          <h1 className="text-4xl lg:text-7xl font-black leading-[0.95] mb-8 bg-gradient-to-br from-white via-slate-100 to-slate-500 bg-clip-text text-transparent">
            <span className="text-sf">SF</span><span className="text-white">DSPM</span> <br />
            <span className="text-sf text-glow">DATA SECURITY</span>
          </h1>

          <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed font-medium">
            Outcome-driven Data Loss Prevention (DLP) and Data Security Posture
            Management (DSPM) consulting. Reduce data exposure, enforce
            governance, and align with regulatory frameworks.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={scrollToContact}
              className="relative w-full sm:w-auto px-10 py-5 rounded-2xl bg-sf text-slate-950 font-black hover:shadow-[0_0_40px_rgba(0,242,255,0.5)] transition-all flex items-center justify-center group overflow-hidden">
              <span className="relative z-10">Get Security Audit</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl glass text-white font-bold hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center">
              Our Capabilities
              <ChevronRight className="ml-2 w-4 h-4 text-dspm group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-12">
            {[
              { label: "Data Discovery", value: "Hybrid Cloud" },
              { label: "Compliance", value: "PCI/HIPAA/NIST" },
              { label: "DLP Expertise", value: "Vendor-Agnostic" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-white font-black text-xl tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center">
          {/* Main Interactive Visual */}
          <div className="relative w-full max-w-[500px] aspect-square">
            <div className="absolute inset-0 bg-sf/10 rounded-full blur-[100px] animate-pulse" />

            {/* Floating UI Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] border-2 border-dashed border-white/5 rounded-full" />
              <div className="absolute w-[60%] h-[60%] border border-sf/20 rounded-full" />
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 p-16 glass rounded-[3.5rem] border-white/20 shadow-2xl backdrop-blur-3xl transform hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <Logo className="w-48 h-48" />
              </div>
            </div>

            {/* Floating Nodes */}
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-[10%] right-[10%] p-5 glass rounded-2xl border-sf/30 shadow-[0_0_20px_rgba(0,242,255,0.2)]">
              <Lock className="w-6 h-6 text-sf" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                delay: 1,
                ease: "easeInOut",
              }}
              className="absolute bottom-[10%] left-[10%] p-5 glass rounded-2xl border-dspm/30 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              <Shield className="w-6 h-6 text-dspm" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
