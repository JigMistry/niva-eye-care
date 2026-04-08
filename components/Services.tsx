"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "🔬",
    title: "Cataract Surgery",
    description:
      "Advanced phacoemulsification cataract surgery with premium intraocular lens implants for crystal-clear vision restoration.",
    features: ["No Injection - No Stitches - No Patch", "Premium IOL options", "Day-care procedure"],
  },
  {
    icon: "🛡️",
    title: "Glaucoma Treatment",
    description:
      "Comprehensive glaucoma diagnosis, monitoring, and treatment to preserve your vision and prevent further damage.",
    features: ["Early detection", "Medical & surgical options", "Regular monitoring"],
  },
  {
    icon: "✨",
    title: "LASIK Eye Surgery",
    description:
      "State-of-the-art laser vision correction to free you from glasses and contact lenses permanently.",
    features: ["Bladeless technology", "Quick recovery", "High precision"],
  },
  
  {
    icon: "💻",
    title: "Computerized Eye Testing",
    description:
      "Advanced digital diagnostic testing for accurate assessment of your eye health and vision quality.",
    features: ["Digital refraction", "Retinal imaging", "Visual field testing"],
  },
  {
    icon: "👨‍⚕️",
    title: "General Ophthalmology",
    description:
      "Complete eye health examinations and treatment for all common eye conditions and vision problems.",
    features: ["Comprehensive examinations", "Prescription updates", "Preventive care"],
  },
  {
    icon: "⚡",
    title: "Eye Laser Treatment",
    description:
      "Laser procedures for Glaucoma, posterior capsular opacification and other disorders.",
    features: ["YAG laser - Capsulotomy", "YAG laser - Peripheral iridotomy", "Safe & effective"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="relative bg-linear-to-b from-gray-50 to-white py-20 lg:py-28"
    >
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive{" "}
            <span className="gradient-text">Eye Care Solutions</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From routine check-ups to advanced surgical procedures, we offer a
            full range of eye care services to keep your vision at its best.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:p-8"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]" />

              <div className="relative">
                <span className="text-4xl">{service.icon}</span>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
