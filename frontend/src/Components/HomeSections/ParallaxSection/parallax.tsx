"use client";

import { useEffect, useState } from "react";
import ContactButton from '@/Components/Buttons/ContactButton/ContactButton'
import PracticeButton from "@/Components/Buttons/PracticeButton/PracticeButton";

export default function ParallaxSection() {
    const [offsetY, setOffsetY] = useState(0);

    // Handle Scroll for Parallax Effect
    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY * 0.5); // Adjust speed here (0.5 for subtle effect)
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="h-screen overflow-hidden relative">
            {/* Parallax Background */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/hero_image.png)",
                    transform: `translateY(${offsetY}px)`,
                    transition: "transform 0.1s ease-out",
                }}
            ></div>

            {/* Content */}
            <div className="relative min-h-screen flex flex-col items-center justify-center text-center">
                {/* Title with Orange Outline */}
                <h1
                    className="text-2xl md:text-4xl lg:text-6xl text-white font-sans font-bold mt-10"

                >
                    HONEY BADGER WRESTLING CLUB
                </h1>

                {/* Subtitle with Orange Outline */}
                <h2
                    className="text-2xl text-white font-sans italic font-bold p-4 mt-5"

                >
                    ELITE YOUTH WRESTLING IN NORTHWEST ARKANSAS
                </h2>

                {/* Buttons */}
                <div className="flex flex-col gap-2 mt-8">
                    <ContactButton/>
                    <PracticeButton/>
                </div>
            </div>
        </div>
    );
}
