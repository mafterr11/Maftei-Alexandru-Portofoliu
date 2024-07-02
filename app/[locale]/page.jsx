import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { Reviews } from "@/components/Reviews";

// Use dynamic for lazy loading non-critical components
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Work = dynamic(() => import("@/components/Work"), { ssr: false });
const Cta = dynamic(() => import("@/components/Cta"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
