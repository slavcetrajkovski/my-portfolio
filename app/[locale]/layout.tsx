import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import "../globals.css";

const tomorrow = Tomorrow({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-tomorrow",
    subsets: ["latin"],
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('title'),
        description: t('description'),
        alternates: {
            canonical: `/${locale}`,
            languages: {
                'en': '/en',
                'mk': '/mk'
            }
        },
        openGraph: {
            title: t('title'),
            description: t('description'),
            locale: locale,
            alternateLocale: locale === 'en' ? 'mk' : 'en'
        }
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body
                className={`${tomorrow.variable} antialiased`}
            >
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
