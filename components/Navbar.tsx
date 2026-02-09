"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);



import { useTranslations } from "next-intl";

export default function Navbar() {
    const t = useTranslations("navbar");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: href, ease: "power2.out" });
    };

    const navLinks = [
        { name: t("about"), href: "#hero" },
        { name: t("experience"), href: "#experience" },
        { name: t("work"), href: "#work" },
        { name: t("skills"), href: "#skills" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-border/10" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center">
                <Link
                    href="#"
                    onClick={(e) => handleScrollTo(e, "#hero")}
                    className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
                >
                    ST.
                </Link>

                <div className="flex items-center gap-8">
                    <div className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest text-muted-foreground hover:text-foreground"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="w-px h-6 bg-border hidden md:block" />

                    <LanguageSwitcher />
                </div>
            </div>
        </nav>
    );
}
