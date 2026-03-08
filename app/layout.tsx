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
  title: "Niva Eye Care | Best Eye Hospital in Ahmedabad | Dr. Minal Patel",
  description:
    "Niva Eye Care is a leading eye hospital in Ahmedabad offering cataract surgery, LASIK, glaucoma treatment, and comprehensive eye care. Rated 4.9/5 by 300+ patients. Visit Dr. Minal Patel at Bhuyangdev, Ahmedabad.",
  keywords: [
    "eye hospital Ahmedabad",
    "best eye doctor Ahmedabad",
    "cataract surgery Ahmedabad",
    "LASIK eye surgery Ahmedabad",
    "glaucoma treatment Ahmedabad",
    "eye specialist Bhuyangdev",
    "Dr Minal Patel eye doctor",
    "Niva Eye Care",
    "eye clinic near me",
    "computerized eye testing Ahmedabad",
    "ophthalmologist Ahmedabad",
    "eye care hospital Gujarat",
  ],
  authors: [{ name: "Niva Eye Care" }],
  creator: "Niva Eye Care",
  publisher: "Niva Eye Care",
  metadataBase: new URL("https://nivaeyecare.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Niva Eye Care | Best Eye Hospital in Ahmedabad",
    description:
      "Leading eye care hospital in Ahmedabad with 4.9/5 rating. Expert cataract surgery, LASIK, glaucoma treatment by Dr. Minal Patel.",
    url: "https://nivaeyecare.in",
    siteName: "Niva Eye Care",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
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
      "Expert eye care by Dr. Minal Patel. Cataract, LASIK, Glaucoma treatment. Rated 4.9/5.",
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
  image: "https://nivaeyecare.in/og-image.jpg",
  "@id": "https://nivaeyecare.in",
  url: "https://nivaeyecare.in",
  telephone: "+91-79-XXXX-XXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Pushpraj Arcade, Sola Road, Above Axis Bank, Near Bhuyangdev BRTS",
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
    { "@type": "MedicalProcedure", name: "LASIK Eye Surgery" },
    { "@type": "MedicalProcedure", name: "Glaucoma Treatment" },
    { "@type": "MedicalProcedure", name: "Computerized Eye Testing" },
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
