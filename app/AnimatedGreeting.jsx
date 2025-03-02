"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnimatedIntro from "./AnimatedIntro";

const AnimatedGreeting = ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/ro" || pathname === "/en";
  const [showIntro, setShowIntro] = useState(true); // Start with intro visible
  const [hasMounted, setHasMounted] = useState(false); // Prevent hydration issues

  useEffect(() => {
    setHasMounted(true); // Ensure proper mounting in SSR
    const hasVisited = sessionStorage.getItem("hasVisitedHomePage");

    if (!hasVisited && isHomePage) {
      sessionStorage.setItem("hasVisitedHomePage", "true");
      setShowIntro(true);
    } else {
      setShowIntro(false); // Skip animation if already visited
    }
    
  }, [isHomePage]);

  // Prevent flicker: Only render if mounted
  if (!hasMounted) return null;

  return showIntro ? <AnimatedIntro>{children}</AnimatedIntro> : <>{children}</>;
};

export default AnimatedGreeting;
