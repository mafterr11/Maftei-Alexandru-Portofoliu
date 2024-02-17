import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Maf Services - Web Developer",
  description:
    "Hello, my name is Maftei Alexandru. Lets start this journey together and create your dream website! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
