import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Cta from "@/components/Cta";

export const metadata = {
  title: "Myriad - Web Development",
  description:
    "Hello, my name is Maftei Alexandru. Lets start this journey together and create your dream website! ",
  keywords:
    "web development, frontend, web design, freelancer, bucuresti, romania, small buisiness, maftei alexandru, site prices, myriad tech, myriad",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Cta />
    </main>
  );
}
