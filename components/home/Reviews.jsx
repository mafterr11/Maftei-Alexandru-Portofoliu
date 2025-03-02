"use client"
import { InfiniteMovingCards } from "../ui/infinite-cards";
import { Star } from "lucide-react";
import HalfStar from "../ui/half-star";
import { Dot } from "../Dot";
import { useTranslations } from "next-intl";
import { MotionDiv, MotionH2 } from "@/lib/motion-client";
import { fadeIn } from "@/variants";

const Reviews = () => {
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
    <section className="relative mb-12 flex h-[45rem] flex-col items-center justify-center overflow-hidden rounded-md antialiased xl:mb-24">
      <MotionH2
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
        className="section-title mb-16"
      >
        <Dot />
        {t("title")}
      </MotionH2>
      <MotionDiv
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, ammount: 0.4 }}
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </MotionDiv>
    </section>
  );
};

export default Reviews;
