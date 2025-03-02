import Hero from "@/components/home/Hero";
import { Reviews } from "@/components/home/Reviews";


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
