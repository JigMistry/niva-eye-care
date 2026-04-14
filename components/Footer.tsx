"use client";

import { MapPin, Phone, Mail, Clock, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#doctor", label: "Our Doctor" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Cataract Surgery",
  "LASIK Eye Surgery",
  "Glaucoma Treatment",
  "Eye Testing",
  "General Ophthalmology",
  "Laser Treatment",
];

export default function Footer() {
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Top gradient line */}
      <div className="h-1 bg-linear-to-r from-primary via-secondary to-primary" />

      <div className="mx-auto max-w-7xl px-4 py-16 pb-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/niva-eye-logo.svg"
                alt="Niva Eye Care"
                className="h-8 w-auto brightness-0 invert"
              />
              <div>
                <span className="text-xl font-bold text-white">Niva</span>
                <span className="text-xl font-bold text-primary-light"> Eye Care</span>
              </div>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Leading eye care hospital in Ahmedabad providing comprehensive
              ophthalmology services with advanced technology and compassionate
              care since 2012.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
                <p className="text-sm text-gray-400">
                  101, Pushpraj Arcade, Sola Road, Above Axis Bank, Near Bhuyangdev
                  BRTS, Ahmedabad - 380063
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary-light" />
                <a
                  href="tel:+919426077766"
                  className="text-sm text-gray-400 hover:text-primary-light"
                >
                  +919426077766
                </a>
                <a
                  href="tel:+919409085785"
                  className="text-sm text-gray-400 hover:text-primary-light ml-1"
                >
                  +919409085785
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary-light" />
                <a
                  href="mailto:nivaeyecarecentre@gmail.com"
                  className="text-sm text-gray-400 hover:text-primary-light"
                >
                  nivaeyecarecentre@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 transition-colors hover:text-primary-light"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Clinic Hours
            </h4>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3 rounded-xl bg-gray-800 p-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-light" />
                <div>
                  <p className="text-sm font-medium text-white">Monday To Friday</p>
                  <p className="mt-1 text-sm text-gray-400">10:00 AM - 1:00 PM</p>
                  <p className="text-sm text-gray-400">5:00 PM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-gray-800 p-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-light" />
                <div>
                  <p className="text-sm font-medium text-white">Saturday</p>
                  <p className="mt-1 text-sm text-gray-400">10:00 AM - 12:00 PM</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">* Sunday & Public Holidays: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Niva Eye Care. All rights reserved.
          </p>
        </div>

        {/* Crafted by */}
        {/* <div className="mt-2 border-gray-800/50 pt-2 text-center">
          <p className="text-xs text-gray-600">
            Crafted with &#10084; by{" "}
            <a
              href="https://www.linkedin.com/in/jignesh-mistry-85a27a25a"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-500 transition-colors hover:text-primary-light"
            >
              Jignesh
            </a>
          </p>
        </div> */}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={showScrollToTopButton ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        onClick={scrollToTop}
        className="fixed bottom-3 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-secondary hover:text-white"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}
