"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { startTransition } from "react";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLocaleChange = (nextLocale: "en" | "mk") => {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => handleLocaleChange("en")}
                disabled={locale === "en"}
                className={`text-sm font-medium transition-opacity duration-300 ${locale === "en" ? "opacity-100" : "opacity-40 hover:opacity-80"
                    }`}
            >
                EN
            </button>
            <span className="text-sm opacity-40">/</span>
            <button
                onClick={() => handleLocaleChange("mk")}
                disabled={locale === "mk"}
                className={`text-sm font-medium transition-opacity duration-300 ${locale === "mk" ? "opacity-100" : "opacity-40 hover:opacity-80"
                    }`}
            >
                MK
            </button>
        </div>
    );
}
