"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Calendar, Star, MapPin, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-50 via-primary/5 to-secondary/5"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-linear-to-br from-primary/15 to-secondary/10 blur-3xl" />
        <div className="absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-linear-to-tr from-primary/10 to-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-linear-to-tl from-secondary/5 to-primary/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-20 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Mobile Doctor Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-6 flex justify-center lg:hidden"
            >
              <div className="relative">
                <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-primary/25 sm:h-32 sm:w-32">
                  <Image
                    src="/dr_minal_patel_.png"
                    alt="Dr. Minal M. Patel"
                    fill
                    sizes="128px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary ring-2 ring-white">
                  <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
                </div>
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">4.9/5 Rating</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Your Vision,
              <br className="sm:hidden" />{" "}
              <span className="gradient-text">Our Mission</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600 lg:mx-0"
            >
              Experience world-class eye care at Niva Eye Care, Ahmedabad.
              Advanced treatments for cataract and glaucoma by
              experienced ophthalmologist Dr. Minal M. Patel.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <a
                href="tel:+919426077766"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-base font-semibold text-white shadow-xl shadow-secondary/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-secondary/35 sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Book Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-primary/40 hover:bg-primary/5 sm:w-auto"
              >
                <Calendar className="h-5 w-5" />
                Our Services
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-8 flex items-center justify-center gap-2 text-gray-500 lg:justify-start"
            >
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">Bhuyangdev, Sola Road, Ahmedabad - 380063</span>
            </motion.div>
          </motion.div>

          {/* Right - Visual Element (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:flex lg:items-center lg:justify-center"
          >
            <div className="relative">
              {/* Concentric rings */}
              <div className="relative flex h-105 w-105 items-center justify-center rounded-full bg-primary/10">
                <div className="flex h-85 w-85 items-center justify-center rounded-full bg-primary/15">
                  <div className="flex h-65 w-65 items-center justify-center rounded-full bg-white shadow-2xl shadow-primary/20">
                    <img
                      src="/niva-eye-logo.svg"
                      alt="Niva Eye Care"
                      className="h-28 w-auto p-3"
                    />
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-16 rounded-2xl bg-white p-4 shadow-xl shadow-gray-200/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15">
                    <span className="text-lg">🔬</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Advanced Tech</p>
                    <p className="text-xs text-gray-500">Latest equipment</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 bottom-24 rounded-2xl bg-white p-4 shadow-xl shadow-gray-200/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <span className="text-lg">💚</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Gentle Care</p>
                    <p className="text-xs text-gray-500">Patient-first approach</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-8 rounded-2xl bg-white p-4 shadow-xl shadow-gray-200/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">4.9 Rating</p>
                    <p className="text-xs text-gray-500">300+ Reviews</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="relative bottom-0 left-0 right-0 border-t border-gray-100 bg-white/70 backdrop-blur-md"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { value: "20+", label: "Years Experience" },
            { value: "15,000+", label: "Happy Patients" },
            { value: "10,000+", label: "Successful Surgeries" },
            { value: "4.9", label: "Google Rating" },
            
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
              <p className="text-xs font-medium text-gray-500 sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
