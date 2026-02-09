"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { skillsData } from "@/lib/data";



export default function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const categories = gsap.utils.toArray<HTMLElement>(".skill-category");

            categories.forEach((category, i) => {
                gsap.fromTo(
                    category,
                    {
                        opacity: 0,
                        x: -20,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: category,
                            start: "top 85%",
                        },
                        delay: i * 0.1,
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" ref={containerRef} className="py-24 px-6 md:px-20 max-w-7xl mx-auto border-t border-border/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight sticky top-24">
                        TECHNICAL<br />EXPERTISE
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-md">
                        A comprehensive toolset developed over years of building production-ready applications.
                        Always learning, always evolving.
                    </p>
                </div>

                <div className="space-y-12">
                    {skillsData.map((skillGroup, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="text-xl font-bold mb-6 text-foreground/80 border-b border-border/20 pb-2">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm md:text-base hover:bg-foreground hover:text-background transition-colors duration-300 cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
