"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Navigation,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [
      "Pushpraj Arcade, Sola Road",
      "Above Axis Bank, Near Bhuyangdev BRTS",
      "Bhuyangdev, Ahmedabad - 380063",
    ],
  },
  {
    icon: Clock,
    title: "Timings",
    lines: [
      "Monday - Friday",
      "Morning: 10:00 AM - 1:00 PM",
      "Evening: 5:30 PM - 7:30 PM",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["For Appointments & Enquiries", "Phone: +91 79 XXXX XXXX"],
    isLink: true,
    href: "tel:+919426077766",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["For General Enquiries", "info@nivaeyecare.in"],
    isLink: true,
    href: "mailto:info@nivaeyecare.in",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-cyan-600">
            Contact Us
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ready to take the first step towards clearer vision? Book your
            appointment today or visit us at our clinic.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-50/50 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 transition-colors group-hover:bg-cyan-600 group-hover:text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-4 text-lg font-bold text-gray-900">
                    {item.title}
                  </h4>
                  <div className="mt-2 space-y-1">
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-gray-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+919426077766"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-600/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Phone className="h-5 w-5" />
                Call for Appointment
              </a>
              <a
                href="https://maps.google.com/?q=23.0611414,72.5346015"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-4 text-sm font-semibold text-gray-700 transition-all hover:border-cyan-300 hover:bg-cyan-50"
              >
                <Navigation className="h-5 w-5" />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d72.5346015!3d23.0611414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ffc0000001%3A0x0!2zMjPCsDAzJzQwLjEiTiA3MsKwMzInMDQuNiJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Niva Eye Care Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
