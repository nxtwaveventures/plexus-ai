"use client";

import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

interface PDFExportProps {
    contentRef: React.RefObject<HTMLDivElement>;
}

export function PDFExport({ contentRef }: PDFExportProps) {
    const handleExport = async () => {
        if (!contentRef.current) return;

        // Dynamically import html2pdf to avoid SSR issues
        const html2pdf = (await import("html2pdf.js")).default;

        const opt = {
            margin: 1,
            filename: "plexus-lifex-pitch-deck.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                logging: false,
            },
            jsPDF: {
                unit: "in",
                format: "a4",
                orientation: "landscape",
            },
        };

        try {
            const element = contentRef.current.cloneNode(true) as HTMLElement;
            element.style.display = "block";
            element.style.width = "100%";
            element.style.height = "100%";

            // Create a temporary container
            const container = document.createElement("div");
            container.style.position = "absolute";
            container.style.left = "-9999px";
            container.style.top = "-9999px";
            container.appendChild(element);
            document.body.appendChild(container);

            await html2pdf().set(opt).from(element).save();

            // Clean up
            document.body.removeChild(container);
        } catch (error) {
            console.error("Error exporting PDF:", error);
        }
    };

    return (
        <Button
            onClick={handleExport}
            variant="outline"
            className="fixed bottom-4 right-4 z-50 bg-blue-500 hover:bg-blue-600 text-white border-none shadow-lg"
        >
            <Download className="w-4 h-4 mr-2" />
            Export PDF
        </Button>
    );
} 