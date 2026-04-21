"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Bhavik Patel",
    procedure: "Cataract Surgery",
    rating: 5,
    text: "Dr Minal is an excellent ophthalmologist with an exceptional surgical skill. My mother underwent both eye cataract surgery here and we are very happy with the treatment and care received here. I recommend her for any kind of eye problem.",
  },
  {
    name: "Jay Shukla",
    procedure: "Cataract Surgery",
    rating: 5,
    text: "My beloved mother had cataract surgery with Dr. Minal Patel, and we’re very happy with the results. The lens was carefully selected for her eyes, and her vision has improved significantly. Dr. Patel’s expertise, personalised care, and genuine compassion truly stood out. Highly recommended!",
  },
  {
    name: "Rahul Salvi",
    procedure: "Eye Surgery",
    rating: 5,
    text: "Being a highly skilled Weaver need 100% outcome of my vision....Roamed all the big names for treatment for 6 years...Also afraid of the surgery, Then I got reference of Dr. Minalben. By god she got best clinical knowledge and extraordinary surgical skills. Hospital is so neat and clean. Highly Recommended for eye treatment.",
  },
  {
    name: "Rasilaben Trivedi",
    procedure: "Eye Testing",
    rating: 5,
    text: "Excellent customer service and personal care.Dr.Minal Patel was excellent ,very interactive and caring.Other staff members like Moulinbhai,Dhruv,Gayatriben and others are also outstanding.",
  },
  {
    name: "Hitesh Patel",
    procedure: "Cataract Surgery",
    rating: 5,
    text: "Really impressed by the experienced doctor and staff.Excellent timely and quality service I got related to my cataract operation.Pre and post operation follows are too good.Doctor (Dr. Minal)and staff are very active and attentive towards the patient.Must say to visit for eye related issues.",
  },
  {
    name: "Neha Joshi",
    procedure: "LASIK Surgery",
    rating: 5,
    text: "Freedom from glasses after years! The team at Niva Eye Care is phenomenal. From consultation to surgery to follow-up, everything was handled with great professionalism.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-linear-to-b from-white to-gray-50 py-20 lg:py-28"
    >
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from our patients about their experience at Niva Eye Care.
            We&apos;re proud to have a 4.9/5 rating from 300+ patient reviews.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/15 transition-colors group-hover:text-primary/25" />
              <div className="flex items-center gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-gray-600">{t.text}</p>
              <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-primary to-primary-dark text-sm font-bold text-white">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.procedure}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://www.justdial.com/Ahmedabad/Niva-Eye-Care-Above-Axis-Bank-Near-Bhuyangdev-Brts-Bhuyangdev/079PXX79-XX79-180327064921-A9N2_BZDET"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700">
              4.9/5 on JustDial &middot; 300+ Reviews
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
