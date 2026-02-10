"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



import { useTranslations } from "next-intl";

export default function Experience() {
    const t = useTranslations("experience");
    const containerRef = useRef<HTMLDivElement>(null);
    const jobs = ["job1", "job2", "job3", "job4"] as const;

    const jobLogos: Record<string, string> = {
        job1: "/vass_logo.jpeg",
        job3: "/vass_logo.jpeg",
        job4: "/g_d_netcetera_logo.jpeg",
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>(".experience-item");

            items.forEach((item) => {
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
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" ref={containerRef} className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">{t("title")}</h2>

            <div className="space-y-12 md:space-y-24">
                {jobs.map((job, index) => (
                    <div
                        key={index}
                        className="experience-item group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-border/20 pt-8"
                    >
                        <div className="md:col-span-3 text-lg md:text-xl text-muted-foreground font-light">
                            {t(`jobs.${job}.period`)}
                        </div>
                        <div className="md:col-span-9">
                            <h3 className="text-2xl md:text-4xl font-bold mb-2 group-hover:text-primary/80 transition-colors duration-300">
                                {t(`jobs.${job}.role`)}
                            </h3>
                            <div className="flex items-center gap-4 mb-4">
                                {jobLogos[job] && (
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border/10 shadow-sm flex-shrink-0">
                                        <img
                                            src={jobLogos[job]}
                                            alt={`${t(`jobs.${job}.company`)} logo`}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                )}
                                <p className="text-xl md:text-2xl text-muted-foreground">
                                    {t(`jobs.${job}.company`)}
                                </p>
                            </div>
                            <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-muted-foreground/80 max-w-2xl">
                                {(t.raw(`jobs.${job}.points`) as string[]).map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
