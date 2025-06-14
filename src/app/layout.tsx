import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Plexus AI – India's Healthcare Innovation Hub | MedTech, AI, FinTech Accelerator",
    description: "Join Plexus AI, India's premier center for MedTech, AI, and FinTech innovation. Accelerate your healthcare startup with clinical validation, funding, and real-world impact.",
    keywords: "healthcare innovation, MedTech, AI in healthcare, health startups, clinical validation, health accelerator, health insurance innovation, digital health, India healthcare, health technology, FinTech, healthcare AI, medical technology, personalized care, LifeX, health innovation",
    openGraph: {
        title: "Plexus AI – India's Healthcare Innovation Hub",
        description: "India's premier center for MedTech, AI, and FinTech innovation. Accelerate your healthcare startup with clinical validation, funding, and real-world impact.",
        url: "https://plexusai.in",
        siteName: "Plexus AI",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Plexus AI - Healthcare Innovation Hub",
            }
        ],
        locale: "en_US",
        type: "website",
    },
    metadataBase: new URL('https://plexusai.in'),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} bg-background text-white`}>
                <div className="fixed inset-0 bg-gradient-to-br from-blue-950/70 via-teal-900/40 to-indigo-900/70 -z-10" />
                <div className="fixed inset-0 neural-bg -z-10 opacity-40" />
                <Navbar />
                <div className="relative z-10">
                    {children}
                </div>
            </body>
        </html>
    );
}
