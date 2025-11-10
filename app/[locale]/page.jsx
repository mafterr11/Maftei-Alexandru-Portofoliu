import dynamic from "next/dynamic";
// Use dynamic for lazy loading non-critical components
const Hero = dynamic(() => import("@/components/home/Hero"));
const About = dynamic(() => import("@/components/home/About"));
const Services = dynamic(() => import("@/components/home/Services"));
const Work = dynamic(() => import("@/components/home/Work"));
const Reviews = dynamic(() => import("@/components/home/Reviews"));
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
