"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);



import { useTranslations } from "next-intl";

export default function Projects() {
    const t = useTranslations("projects");
    const containerRef = useRef<HTMLDivElement>(null);
    const projects = [
        { key: "project1", tech: "Next.js, Shopify, Tailwind" },
        { key: "project2", tech: "React, D3.js, Node.js" },
        { key: "project3", tech: "Three.js, GSAP, WebGL" },
        { key: "project4", tech: "Vue.js, AWS, Serverless" }
    ] as const;

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>(".project-card");

            items.forEach((item, i) => {
                gsap.fromTo(
                    item,
                    {
                        opacity: 0,
                        y: 100,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 90%",
                        },
                        delay: i * 0.1,
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="work" ref={containerRef} className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">{t("title")}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card group cursor-pointer relative"
                    >
                        <div className="aspect-[4/3] bg-neutral-900 mb-6 overflow-hidden relative">
                            <div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-105 origin-center" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                                <span className="text-white text-lg font-medium tracking-widest border border-white/30 px-6 py-2 rounded-full">{t("viewProject")}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-1 group-hover:underline decoration-1 underline-offset-4">
                                    {t(`items.${project.key}.title`)}
                                </h3>
                                <p className="text-muted-foreground text-sm md:text-base">
                                    {t(`items.${project.key}.category`)}
                                </p>
                            </div>
                            <span className="text-xs md:text-sm border border-border px-3 py-1 rounded-full text-muted-foreground">
                                {project.tech}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
