"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Award, GraduationCap, Stethoscope, Clock, Medal } from "lucide-react";

const qualifications = [
  {
    icon: GraduationCap,
    title: "Medical Degree",
    detail: "MBBS, MS (Ophthalmology)",
  },
  {
    icon: Medal,
    title: "Gold Medalist",
    detail: "MS (Ophthalmology)",
    highlight: true,
  },
  {
    icon: Award,
    title: "Specialization",
    detail: "Cataract & Refractive Surgery",
  },
  {
    icon: Stethoscope,
    title: "Experience",
    detail: "10+ Years in Ophthalmology",
  },
  {
    icon: Clock,
    title: "Procedures",
    detail: "5000+ Successful Surgeries",
  },
];

export default function Doctor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="doctor" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-cyan-600">
            Our Doctor
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet{" "}
            <span className="gradient-text">Dr. Minal Patel</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            An experienced and highly skilled ophthalmologist dedicated to
            providing the best eye care with a personal touch.
          </p>
        </motion.div>

        {/* Doctor Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-14 max-w-4xl"
        >
          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-cyan-50/30 shadow-xl shadow-gray-100/50">
            <div className="grid md:grid-cols-5">
              {/* Image section */}
              <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-cyan-600 to-emerald-500 p-8 text-white md:col-span-2 md:p-10">
                <div className="relative h-40 w-40 overflow-hidden rounded-full ring-4 ring-white/30 sm:h-48 sm:w-48">
                  <Image
                    src="/dr_minal_patel_.png"
                    alt="Dr. Minal Patel - Ophthalmologist at Niva Eye Care Ahmedabad"
                    fill
                    sizes="(max-width: 640px) 160px, 192px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <h3 className="mt-6 text-center text-2xl font-bold">
                  Dr. Minal Patel
                </h3>
                <p className="mt-1 text-center text-cyan-100">
                  MS (Ophthalmology)
                </p>
                <p className="mt-1 text-center text-sm text-cyan-200">
                  Eye Surgeon & Specialist
                </p>
                <div className="mt-4 flex items-center gap-2 rounded-full bg-amber-400/20 px-4 py-2 ring-1 ring-amber-300/40">
                  <Medal className="h-4 w-4 text-amber-300" />
                  <span className="text-sm font-semibold text-amber-100">
                    Gold Medalist
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1 rounded-full bg-white/10 px-4 py-2">
                  <span className="text-sm font-medium">
                    10+ Years Experience
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8 md:col-span-3 md:p-10">
                <h4 className="text-xl font-bold text-gray-900">
                  About Dr. Patel
                </h4>
                <p className="mt-4 leading-relaxed text-gray-600">
                  Dr. Minal Patel is a renowned ophthalmologist and{" "}
                  <span className="font-semibold text-amber-600">Gold Medalist in MS (Ophthalmology)</span>,
                  with a passion for restoring and preserving vision. With over a
                  decade of experience, she specializes in advanced cataract
                  surgery (phacoemulsification), LASIK, and glaucoma management.
                </p>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Known for her gentle approach and meticulous attention to
                  detail, Dr. Patel ensures that every patient receives
                  personalized care and achieves the best possible visual outcomes.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {qualifications.map((q, i) => (
                    <motion.div
                      key={q.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      className={`flex items-start gap-3 rounded-xl p-4 transition-colors ${
                        (q as { highlight?: boolean }).highlight
                          ? "bg-amber-50 ring-1 ring-amber-200 hover:bg-amber-100"
                          : "bg-gray-50 hover:bg-cyan-50"
                      }`}
                    >
                      <q.icon className={`mt-0.5 h-5 w-5 shrink-0 ${(q as { highlight?: boolean }).highlight ? "text-amber-500" : "text-cyan-600"}`} />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {q.title}
                        </p>
                        <p className="text-sm text-gray-500">{q.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
