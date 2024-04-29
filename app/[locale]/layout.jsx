import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Toaster } from "@/components/ui/toaster";
import {
  NextIntlClientProvider,
  useMessages,
} from "next-intl";
import pick from "lodash/pick";
import { Analytics } from "@vercel/analytics/react"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Myriad - Web Development",
  description:
    "Hello, my name is Maftei Alexandru. Lets start this journey together and create your dream website! ",
  keywords:
    "web development, frontend, web design, freelancer, bucuresti, romania, small buisiness, maftei alexandru, site prices, myriad tech",
    icons: {
      icon: "/icon.svg"
    }
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <NextIntlClientProvider messages={pick(messages, "Nav", "Proiecte", "Contact")}>
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
