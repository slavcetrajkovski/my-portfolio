"use client";

import Image from "next/image";
import CTAButton from "./CTAButton";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations("hero");
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo(
                titleRef.current,
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power4.out",
                }
            ).fromTo(
                subtitleRef.current,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                },
                "-=1"
            ).fromTo(
                imageRef.current,
                {
                    scale: 0.8,
                    opacity: 0,
                    rotation: -5
                },
                {
                    scale: 1,
                    opacity: 1,
                    rotation: 0,
                    duration: 1.5,
                    ease: "elastic.out(1, 0.5)"
                },
                "-=1.2"
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="hero"
            ref={containerRef}
            className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center px-6 md:px-20 max-w-7xl mx-auto pt-24 md:pt-0"
        >
            <div className="flex flex-col justify-center z-10">
                <h1
                    ref={titleRef}
                    className="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-6 opacity-0"
                >
                    {t("titleLine1")}<br />{t("titleLine2")}
                </h1>
                <div
                    ref={subtitleRef}
                    className="text-xl md:text-3xl text-muted-foreground font-light max-w-2xl opacity-0"
                >
                    <span className="block mb-2">{t("subtitle")}</span>
                    <span className="block text-base md:text-xl opacity-80 mb-8">
                        {t("description")}
                    </span>
                    <CTAButton />
                </div>
            </div>

            <div
                ref={imageRef}
                className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto opacity-0"
            >
                <div className="absolute -inset-10 opacity-20">
                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full text-primary/50 animate-pulse-slow"
                    >
                        <path
                            fill="currentColor"
                            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,71.2,35.1C60.2,47.1,49.5,57.4,36.5,65.9C23.5,74.4,8.2,81.1,-7.2,81.3C-22.6,81.5,-38.1,75.2,-52.1,65.8C-66.1,56.4,-78.6,43.9,-85.4,29C-92.2,14.1,-93.3,-3.2,-87,-18.2C-80.7,-33.2,-67,-45.9,-53.4,-53.4C-39.8,-60.9,-26.3,-63.2,-13.2,-64.3C-0.1,-65.4,13.1,-65.3,44.7,-76.4Z"
                            transform="translate(100 100)"
                        />
                    </svg>
                </div>

                <div className="relative w-full h-full border-2 border-primary/20 rounded-[2rem] overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                    <Image
                        src="/me.jpeg"
                        alt="Slavko Trajkovski"
                        fill
                        className="object-cover scale-110"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
