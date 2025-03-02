import About from "@/components/home/About";
import Cta from "@/components/home/Cta";
import Hero from "@/components/home/Hero";
import { Reviews } from "@/components/home/Reviews";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </>
  );
}
