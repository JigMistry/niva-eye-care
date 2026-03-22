"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#doctor", label: "Doctor" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg shadow-[#066D82]/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex shrink-0 items-center gap-3">
            <img
              src="/niva-eye-logo.svg"
              alt="Niva Eye Care"
              className="h-10 w-auto"
            />
            <div className="whitespace-nowrap">
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Niva
              </span>
              <span className="text-xl font-bold tracking-tight" style={{ color: "#066D82" }}>
                {" "}Eye Care
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-[#066D82]/10 hover:text-[#066D82]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+919426077766"
              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#C84939]/25 transition-all hover:shadow-xl hover:shadow-[#C84939]/35 hover:-translate-y-0.5"
              style={{ backgroundColor: "#C84939" }}
            >
              <Phone className="h-4 w-4" />
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      document.querySelector(link.href)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }, 300);
                  }}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-[#066D82]/10 hover:text-[#066D82]"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="tel:+919426077766"
                className="mt-3 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: "#C84939" }}
              >
                <Phone className="h-4 w-4" />
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
