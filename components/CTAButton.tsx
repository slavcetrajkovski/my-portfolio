import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface CTAButtonProps {
    className?: string;
}

export default function CTAButton({ className = "" }: CTAButtonProps) {
    const t = useTranslations("common");

    return (
        <Link
            href="#footer"
            className={`group inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg uppercase tracking-widest hover:bg-primary/90 transition-all hover:scale-105 ${className}`}
        >
            {t("contactMe")}
            <span className="bg-background/20 p-2 rounded-full group-hover:bg-background/40 transition-colors">
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </span>
        </Link>
    );
}
