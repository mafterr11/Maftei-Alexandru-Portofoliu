"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import WorkSwiper from "./WorkSwiper";
import { useTranslations } from "next-intl";
import { Dot } from "../Dot";
import { fadeIn } from "@/variants";
import { MotionDiv } from "@/lib/motion-client";

const Work = () => {
  const t = useTranslations("Work");

  return (
    <section className="relative mb-12 max-xl:overflow-x-hidden xl:pb-16">
      <div className="container flex flex-col items-center justify-center gap-x-40 xl:max-2xl:gap-x-24">
        {/* Text */}
        <MotionDiv
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="mx-auto mb-12 flex max-w-[400px] flex-col items-center justify-center text-center xl:mx-0 xl:pb-20"
        >
          <h2 className="section-title mb-4">
            <Dot />
            {t("title")}
          </h2>
          <p className="subtitle mb-8">{t("subtitle")}</p>
          <Link href={t("projects-link")}>
            <Button>{t("projects-button")}</Button>
          </Link>
        </MotionDiv>
        {/* Slider */}
        <MotionDiv
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="max-w-full lg:max-w-[90%]"
        >
          <WorkSwiper />
        </MotionDiv>
      </div>
    </section>
  );
};

export default Work;
