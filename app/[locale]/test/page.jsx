"use client"; // This makes only this component client-side
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import { Reviews } from "@/components/home/Reviews";
import Cta from "@/components/home/Cta";

// Animation Variants
const wordVariants = {
  initial: { opacity: 0, y: 20, scale: 0.5 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.5 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

// Animated Intro Component
const AnimatedIntro = () => {
  const text = "Hello Salutare Gutten Bonjour";
  const words = text.split(" ");
  const [index, setIndex] = useState(0);
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    if (index < words.length) {
      const interval = setInterval(() => setIndex((prev) => prev + 1), 500);
      return () => clearInterval(interval);
    } else {
      setTimeout(() => setShowHomePage(true), 0);
    }
  }, [index, words.length]);

  return (
    <AnimatePresence >
      {showHomePage ? (
        <>
        <Hero />
        <About />
        <Services />
        <Work />
        <Reviews />
        <Cta />
      </>
      ) : (
        <motion.div
          key="word-animation"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="relative z-[100] flex h-screen w-screen items-center justify-center bg-black text-white"
        >
          <motion.div key={index} className="absolute top-1/2 text-4xl font-bold">
            <motion.span {...wordVariants}>
              {index < words.length ? words[index] : ""}
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedIntro;
