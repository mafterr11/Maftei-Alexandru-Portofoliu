"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
//  Word animation on enter
//  Word animation on enter
//  Word animation on enter

const wordVariants = {
  initial: { opacity: 0, y: 20, scale: 0.5 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.5 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const AnimatedIntro = ({ children }) => {
  const words = ["Hello 🔥", "Salutare 👾", "Gutten ✔️", "Bonjour 😏"];
  const [index, setIndex] = useState(0);
  // Black BG intro page fade timing
  const [startPageFade, setStartPageFade] = useState(false);
  // Home page fade timing
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    if (index < words.length) {
      const interval = setInterval(() => setIndex((prev) => prev + 1), 500);
      return () => clearInterval(interval);
    } else {
      // Start fading out the black background while fading in the homepage
      setTimeout(() => setStartPageFade(true), 300); // Overlap transition
      setTimeout(() => setShowHomePage(true), 1000); // Ensure no gap
    }
  }, [index, words.length]);

  return (
    <div className="flex min-h-screen flex-col">
      {" "}
      {/* Ensures proper layout */}
      {/* Pre-mount the homepage but keep it hidden until transition */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: startPageFade ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        className="flex-grow"
      >
        {children}
      </motion.div>
      {/* Black background and words animation */}
      {!showHomePage && (
        <motion.div
          key="word-animation"
          initial={{ opacity: 1 }}
          animate={{ opacity: startPageFade ? 0 : 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black text-white"
        >
          <motion.div
            key={index}
            className="flex items-center justify-center text-4xl font-bold"
          >
            <motion.span {...wordVariants}>
              {index < words.length ? words[index] : ""}
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedIntro;
