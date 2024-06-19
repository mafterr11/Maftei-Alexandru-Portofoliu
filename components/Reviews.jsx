"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-cards";
import { Star } from "lucide-react";
import HalfStar from "./ui/half-star";
import { Dot } from "./Dot";
import { useTranslations } from "next-intl";

export function Reviews() {
  const t = useTranslations("Reviews");
  const testimonials = [
    {
      quote: t("madiny"),
      name: "Madiny",
      title: "https://madinytattoo.ro",
      star: <Star strokeWidth={0.8} fill="#FFDF00" />,
    },
    {
      quote: t("tng"),
      name: "Mihai",
      title: "https://tngag.ro",
      star: <Star strokeWidth={0.8} fill="#FFDF00" />,
    },
    {
      quote: t("monte-bianco"),
      name: "Monte Bianco",
      title: "https://montebianco.ro",
      star: <HalfStar />,
    },
    {
      quote: t("mbody"),
      name: "Mihaela",
      title: "https://mbody.vercel.app",
      star: <Star strokeWidth={0.8} fill="#FFDF00" />,
    },
    {
      quote: t("dianazu"),
      name: "Diana",
      title: "https://dianazu.vercel.app",
      star: <HalfStar />,
    },
  ];

  return (
    <div className="relative mb-12 flex h-[45rem] flex-col items-center justify-center overflow-hidden rounded-md antialiased xl:mb-24">
      <h1 className="section-title mb-16">
        <Dot />
        {t("title")}
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
