"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Shield, Award, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "Every patient is treated with warmth, empathy, and individual attention throughout the journey.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "We follow the highest standards of sterility, safety protocols and hygiene.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Committed to deliver the best outcomes with cutting-edge technology and expertise.",
  },
  {
    icon: Users,
    title: "Patient-Centric",
    description:
      "Your comfort and well-being are at the heart of everything we do.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-white py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-primary/10 p-1">
              <div className="rounded-[calc(1.5rem-4px)] p-8 sm:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <img
                      src="/niva-eye-logo.svg"
                      alt="Niva Eye Care"
                      className="h-10 w-auto"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Since 2012</h3>
                      <p className="text-gray-600">Serving Ahmedabad with care</p>
                    </div>
                  </div>
                  <div className="h-px bg-linear-to-r from-primary/30 to-secondary/20" />
                  <p className="text-lg leading-relaxed text-gray-700">
                    Niva Eye Care is a trusted name in comprehensive eye healthcare
                    in Ahmedabad since more than a decade. We combine advanced medical technology
                    with a personal touch that makes every patient feel at home.
                  </p>
                  {/* <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white/80 p-4 text-center shadow-sm">
                      <p className="text-2xl font-bold text-primary">5000+</p>
                      <p className="text-sm text-gray-500">Procedures Done</p>
                    </div>
                    <div className="rounded-xl bg-white/80 p-4 text-center shadow-sm">
                      <p className="text-2xl font-bold text-primary">99%</p>
                      <p className="text-sm text-gray-500">Success Rate</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted Eye Care in{" "}
              <span className="gradient-text">Ahmedabad</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              At Niva Eye Care, we believe that everyone deserves clear vision and healthy
              eyes. Led by Dr. Minal M. Patel, our hospital provides personalized eye care
              using the latest diagnostic equipments and surgical techniques.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              From routine eye check-ups to complex surgeries like Cataract, Glaucoma, Pterygium, our
              team ensures that you receive the highest quality treatment in a comfortable
              and stress-free environment.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="group flex gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
