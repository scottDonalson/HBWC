"use client";
import { useEffect } from "react";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-P7TQS664VM"; // Replace with your actual ID

declare global {
    interface Window {
        dataLayer: unknown[];
    }
}

export default function GoogleAnalytics() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.dataLayer = window.dataLayer || [];

            function gtag(...args: unknown[]) {
                window.dataLayer.push(args);
            }

            gtag("js", new Date());
            gtag("config", GA_MEASUREMENT_ID);
        }
    }, []);

    return (
        <>
            {/* Google Analytics Script */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
            </Script>
        </>
    );
}
