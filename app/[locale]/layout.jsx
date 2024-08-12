import { Roboto, Recursive } from "next/font/google";
import "./globals.css";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Analytics } from "@vercel/analytics/react";
import { constructMetadata } from "@/lib/utils";
import { Suspense } from "react";
import GoogleAnalytics from "@/components/google-analytics";
import CookieBanner from "@/components/cookie-banner";

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

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      {/* Google Analytics */}
      <Suspense fallback={null}>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-EB4XXB3ES6" />
      </Suspense>
      {/* Google Analytics */}
      <body
        className={`${roboto.variable} ${recursive.variable} overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <CookieBanner />
          <Analytics />
          <Footer />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
