import Hero from "@/components/home/Hero";
import { Reviews } from "@/components/home/Reviews";
import dynamic from "next/dynamic";

// Use dynamic for lazy loading non-critical components
const About = dynamic(() => import("@/components/home/About"));
const Services = dynamic(() => import("@/components/home/Services"));
const Work = dynamic(() => import("@/components/home/Work"));
const Cta = dynamic(() => import("@/components/home/Cta"));

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
