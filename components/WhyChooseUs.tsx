"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Clock,
  IndianRupee,
  ShieldCheck,
  HeartHandshake,
  Microscope,
} from "lucide-react";

const reasons = [
  {
    icon: Microscope,
    title: "Latest Technology",
    description: "Equipped with advanced diagnostic and surgical instruments for precise treatments.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Attention",
    description: "Every patient receives individual care and dedicated attention from our team.",
  },
  {
    icon: Zap,
    title: "Quick Recovery",
    description: "Minimally invasive techniques ensure faster healing and quicker return to daily life.",
  },
  {
    icon: Clock,
    title: "Convenient Timings",
    description: "Flexible morning and evening consultation hours to fit your schedule.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Care",
    description: "Quality eye care at transparent and reasonable pricing for every patient.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Procedures",
    description: "Sterility and safety protocols maintained for all treatments.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/20 to-primary/30 py-20 lg:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Why Patients Trust{" "}
            <span className="gradient-text">Niva Eye Care</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            We go beyond treatment to ensure a comprehensive and comfortable
            healthcare experience for every patient.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group rounded-2xl border border-white/10  p-6 bg-primary backdrop-blur-sm transition-all duration-300   sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition-colors">
                <reason.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cyan-100">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
