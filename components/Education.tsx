"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
    const t = useTranslations("education");
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const item = document.querySelector(".education-item");

            gsap.fromTo(
                item,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="education" ref={containerRef} className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">{t("title")}</h2>

            <div className="space-y-12">
                <div className="education-item group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-border/20 pt-8">
                    <div className="md:col-span-3 text-lg md:text-xl text-muted-foreground font-light">
                        {t("period")}
                    </div>
                    <div className="md:col-span-9">
                        <h3 className="text-2xl md:text-4xl font-bold mb-4 group-hover:text-primary/80 transition-colors duration-300">
                            {t("school")}
                        </h3>

                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border/10 shadow-sm flex-shrink-0 bg-white p-1">
                                <Image
                                    src="/finki-logo.png"
                                    alt="FINKI logo"
                                    width={48}
                                    height={48}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <p className="text-xl md:text-2xl text-muted-foreground">
                                {t("degree")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
