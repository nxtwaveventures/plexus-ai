import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Plexus LifeX - AI-Powered Longevity Finance",
    description: "Live Longer. Live Smarter. AI-Powered Longevity Finance for a Healthier, Wealthier India",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} bg-gradient-to-br from-gray-900 to-gray-800 text-white`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
