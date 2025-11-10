import "./globals.css";

import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { Roboto, Recursive } from "next/font/google";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { constructMetadata } from "@/lib/utils";
import { Suspense } from "react";
import GoogleAnalytics from "@/components/google-analytics";
import CookieBanner from "@/components/cookie-banner";
import LenisScroll from "./LenisScroll";
import AnimatedGreeting from "../AnimatedGreeting";
import Script from "next/script";
import { routing } from "@/i18n/routing";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const recursive = Recursive({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900", "1000"],
  variable: "--font-recursive",
});

export const metadata = constructMetadata();

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  // ✅ params is a Promise in this setup → unwrap it
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // ✅ register locale for next-intl server APIs
  setRequestLocale(locale);

  // ✅ loads messages for this locale (no arg in v3)
  const messages = await getMessages();

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

  return (
    <html
      lang={locale}
      className={`${roboto.variable} ${recursive.variable} overflow-x-hidden max-md:min-h-svh`}
    >
      <head>
        {siteKey && (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AnimatedGreeting>
            <Header />
            <main>
              <LenisScroll />
              {children}
            </main>
            <Footer />
            <CookieBanner />
            <Analytics />
            <Toaster />
          </AnimatedGreeting>

          <Suspense fallback={null}>
            <GoogleAnalytics GA_MEASUREMENT_ID="G-EB4XXB3ES6" />
          </Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
