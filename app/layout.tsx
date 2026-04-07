import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niva Eye Care | Best Eye Hospital in Ahmedabad | Dr. Minal M. Patel",
  description:
    "Niva Eye Care is a leading eye hospital in Ahmedabad offering cataract surgery (phacoemulsification), LASIK, glaucoma treatment, retinal laser, YAG laser, diabetic eye treatment, and comprehensive eye care. Rated 4.9/5. Visit Dr. Minal M. Patel — Gold Medalist MS Ophthalmologist — at Sola Road, Bhuyangdev, Ahmedabad.",
  keywords: [
    // Core
    "eye hospital Ahmedabad",
    "best eye doctor Ahmedabad",
    "Niva Eye Care",
    "eye clinic near me",
    "ophthalmologist Ahmedabad",
    "eye care hospital Gujarat",
    "best ophthalmologist Gujarat",
    "eye hospital since 2012 Ahmedabad",

    // Services
    "cataract surgery Ahmedabad",
    "phacoemulsification Ahmedabad",
    "intraocular lens implant Ahmedabad",
    "IOL surgery Ahmedabad",
    "LASIK eye surgery Ahmedabad",
    "LASIK cost Ahmedabad",
    "glaucoma treatment Ahmedabad",
    "glaucoma specialist Ahmedabad",
    "computerized eye testing Ahmedabad",
    "retinal laser treatment Ahmedabad",
    "YAG laser treatment Ahmedabad",
    "diabetic retinopathy treatment Ahmedabad",
    "diabetic eye disease treatment Ahmedabad",
    "dry eye treatment Ahmedabad",
    "eye check up Ahmedabad",
    "spectacle prescription Ahmedabad",
    "eye number check Ahmedabad",
    "vision correction Ahmedabad",
    "myopia treatment Ahmedabad",
    "cataract operation cost Ahmedabad",
    "10000 eye surgeries Ahmedabad",

    // Doctor
    "Dr Minal Patel eye doctor",
    "Dr Minal Patel ophthalmologist Ahmedabad",
    "MBBS MS ophthalmologist Ahmedabad",
    "gold medalist eye doctor Ahmedabad",
    "cataract specialist Ahmedabad",

    // Local SEO
    "eye specialist Bhuyangdev",
    "eye doctor Sola Road Ahmedabad",
    "eye hospital Ghatlodia",
    "eye clinic near Bhuyangdev BRTS",
    "eye specialist Naranpura",
    "eye specialist Chandkheda",
  ],
  authors: [{ name: "Niva Eye Care" }],
  creator: "Niva Eye Care",
  publisher: "Niva Eye Care",
  metadataBase: new URL("https://nivaeyecare.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Niva Eye Care | Best Eye Hospital in Ahmedabad",
    description:
      "Leading eye care hospital in Ahmedabad with 4.9/5 rating. Expert cataract surgery, LASIK, glaucoma treatment by Dr. Minal M. Patel.",
    url: "https://nivaeyecare.com",
    siteName: "Niva Eye Care",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-niva.png",
        width: 1200,
        height: 630,
        alt: "Niva Eye Care Hospital Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niva Eye Care | Best Eye Hospital in Ahmedabad",
    description:
      "Expert eye care by Dr. Minal M. Patel. Cataract, LASIK, Glaucoma treatment. Rated 4.9/5.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Niva Eye Care",
  image: "https://nivaeyecare.com/og-niva.png",
  "@id": "https://nivaeyecare.com",
  url: "https://nivaeyecare.com",
  telephone: "+919426077766",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "101, Pushpraj Arcade, Sola Road, Above Axis Bank, Near Bhuyangdev BRTS",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380063",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.0611414,
    longitude: 72.5346015,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "17:30",
      closes: "19:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "134",
  },
  medicalSpecialty: "Ophthalmology",
  availableService: [
    { "@type": "MedicalProcedure", name: "Cataract Surgery" },
    { "@type": "MedicalProcedure", name: "Phacoemulsification" },
    { "@type": "MedicalProcedure", name: "Intraocular Lens Implant" },
    { "@type": "MedicalProcedure", name: "LASIK Eye Surgery" },
    { "@type": "MedicalProcedure", name: "Glaucoma Treatment" },
    { "@type": "MedicalProcedure", name: "Retinal Laser Treatment" },
    { "@type": "MedicalProcedure", name: "YAG Laser Treatment" },
    { "@type": "MedicalProcedure", name: "Diabetic Retinopathy Treatment" },
    { "@type": "MedicalProcedure", name: "Computerized Eye Testing" },
    { "@type": "MedicalProcedure", name: "Dry Eye Treatment" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
