"use client";

import { Eye, MapPin, Phone, Mail, Clock, ArrowUp } from "lucide-react";

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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-400">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Niva</span>
                <span className="text-xl font-bold text-cyan-400">
                  {" "}Eye Care
                </span>
              </div>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Leading eye care hospital in Ahmedabad providing comprehensive
              ophthalmology services with advanced technology and compassionate
              care since 2014.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                <p className="text-sm text-gray-400">
                  Pushpraj Arcade, Sola Road, Above Axis Bank, Near Bhuyangdev
                  BRTS, Ahmedabad - 380063
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-cyan-400" />
                <a
                  href="tel:+917900000000"
                  className="text-sm text-gray-400 hover:text-cyan-400"
                >
                  +91 79 XXXX XXXX
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-cyan-400" />
                <a
                  href="mailto:info@nivaeyecare.in"
                  className="text-sm text-gray-400 hover:text-cyan-400"
                >
                  info@nivaeyecare.in
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
                    className="text-sm text-gray-400 transition-colors hover:text-cyan-400"
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
                    className="text-sm text-gray-400 transition-colors hover:text-cyan-400"
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
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Monday - Friday
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    10:00 AM - 1:00 PM
                  </p>
                  <p className="text-sm text-gray-400">
                    5:30 PM - 7:30 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-gray-800 p-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Saturday
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    By Appointment Only
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                * Sunday & Public Holidays: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Niva Eye Care. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-cyan-600 hover:text-white"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
