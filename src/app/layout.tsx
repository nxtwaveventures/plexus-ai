import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Plexus AI - Center of Excellence | Because Every Life Deserves More",
    description: "Plexus AI is transforming healthcare by making it smarter, more personalized, and empowering clinicians through innovative AI solutions.",
    keywords: "Plexus AI, healthcare AI, medical technology, personalized care, LifeX, health innovation",
    openGraph: {
        title: "Plexus AI - Center of Excellence",
        description: "Reimagining Healthcare through Innovation - Because Every Life Deserves More",
        url: "https://plexusai.in",
        siteName: "Plexus AI",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Plexus AI",
            }
        ],
        locale: "en_US",
        type: "website",
    },
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
