"use client";

import { Star } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-12 ${start && "animate-scroll"} ${pauseOnHover && "hover:[animation-play-state:paused]"}`}
      >
        {items.map((item, idx) => (
          <li
            className="bg-softPaper group relative flex w-[350px] max-w-full shrink-0 flex-col justify-between rounded-2xl border border-slate-700 bg-cover bg-center px-8 py-6 transition-all duration-300 ease-in-out hover:scale-[1.02] md:w-[450px]"
            key={item.name}
          >
            <div className="bg-body-light/80 absolute inset-0 rounded-2xl" />
            <div>
              <span className="relative block text-sm leading-[1.6] font-normal">
                {item.quote}
              </span>
            </div>
            <div className="relative mt-6 flex flex-col">
              <span className="text-sm leading-[1.6] font-normal group-hover:font-bold">
                {item.name}
              </span>
              <Link
                target="_blank"
                href={item.title}
                className="text-sm leading-[1.6] font-normal group-hover:font-bold"
              >
                {item.title}
              </Link>
              <span className="flex items-center">
                <Star strokeWidth={0.8} fill="#FFDF00" />
                <Star strokeWidth={0.8} fill="#FFDF00" />
                <Star strokeWidth={0.8} fill="#FFDF00" />
                <Star strokeWidth={0.8} fill="#FFDF00" />
                {item.star}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
