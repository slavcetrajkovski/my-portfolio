"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    const t = useTranslations("footer");
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-24 px-6 md:px-20 border-t border-border/10 bg-background">
            <div className="max-w-7xl mx-auto flex flex-col gap-24">
                <div className="flex flex-col gap-8">
                    <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none max-w-4xl">
                        {t("title")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border/10 pt-12">
                    <div className="flex flex-col gap-4">
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            {t("emailLabel")}
                        </span>
                        <a
                            href="mailto:slavcetrajkovski@gmail.com"
                            className="text-2xl md:text-3xl font-light hover:text-primary transition-colors flex items-center gap-2 group"
                        >
                            slavcetrajkovski@gmail.com
                            <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            {t("socialsLabel")}
                        </span>
                        <div className="flex flex-col gap-2">
                            <Link
                                href="https://mk.linkedin.com/in/slavko-trajkovski"
                                target="_blank"
                                className="text-xl font-light hover:text-primary transition-colors flex items-center gap-2 group w-fit"
                            >
                                LinkedIn
                                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                            <Link
                                href="https://github.com/slavcetrajkovski"
                                target="_blank"
                                className="text-xl font-light hover:text-primary transition-colors flex items-center gap-2 group w-fit"
                            >
                                GitHub
                                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-end text-sm text-muted-foreground pt-12">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                        <span>© {currentYear} Slavko Trajkovski</span>
                        <span>All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
