import { Roboto, Recursive } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider, useMessages } from "next-intl";
import pick from "lodash/pick";
import { Analytics } from "@vercel/analytics/react";
import { constructMetadata } from "@/lib/utils";
import Head from "next/head";

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
      <Head>
        {/* Preload the LCP image */}
        <link
          rel="preload"
          href="/grainy-bg.webp"
          as="image"
          type="image/webp"
        />
      </Head>
      <body className={`${roboto.variable} ${recursive.variable} overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          {/* messages={pick(
            messages,
            "Hero",
            "About",
            "Services",
            "Work",
            "Reviews",
            "Cta",
            "Nav",
            "Proiecte",
            "Contact",
          )} */}
          <Header />
          {children}
          <Analytics />
          <Footer />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
