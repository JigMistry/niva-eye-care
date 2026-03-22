"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Calendar } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-gray-50 pb-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary via-primary-dark to-secondary px-6 py-14 text-center shadow-2xl shadow-primary/30 sm:px-12 lg:px-20"
        >
          {/* Decorative circles */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-secondary/20 blur-2xl" />

          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready for Clearer Vision?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Don&apos;t wait to take care of your eyes. Book your appointment today
              and let our expert team help you see the world more clearly.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+919426077766"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a
                href="#contact"
                className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10 sm:w-auto"
              >
                <Calendar className="h-5 w-5" />
                Visit Our Clinic
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
