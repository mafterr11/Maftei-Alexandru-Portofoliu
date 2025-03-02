"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnimatedIntro from "./AnimatedIntro";
  //  Word animation on enter
  //  Word animation on enter
  //  Word animation on enter

const AnimatedGreeting = ({ children }) => {
  const pathname = usePathname(); // Detect the current page
  const isHomePage = pathname === "/ro" || pathname === "/en"; // Ensure correct check
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Check if the intro has been played before
    const hasVisited = sessionStorage.getItem("hasVisitedHomePage");

    if (!hasVisited && isHomePage) {
      setShowIntro(true);
      sessionStorage.setItem("hasVisitedHomePage", "true"); // Mark as visited
    }
  }, [isHomePage]);

  return showIntro ? <AnimatedIntro>{children}</AnimatedIntro> : children;
};

export default AnimatedGreeting;
