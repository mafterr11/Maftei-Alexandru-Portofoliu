"use client";
import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { Dot } from "./Dot";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Services = () => {
  const t = useTranslations("Services");
  const servicesData = [
    {
      icon: <Blocks size={72} strokeWidth={0.8} />,
      title: "Web Development",
      description: t("second.description"),
      speed: 0.2,
    },
    {
      icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
      title: "Web Design",
      description: t("first.description"),
      speed: 0.5,
    },
    {
      icon: <Gem size={72} strokeWidth={0.8} />,
      title: "SEO",
      description: t("third.description"),
      speed: 0.8,
    },
    // {
    //   icon: <Gem size={72} strokeWidth={0.8} />,
    //   title: "Google Ads",
    //   description: t("fourth.description"),
    //   speed: 0.8,
    //   soon: t("fourth.soon"),
    // },
  ];
  return (
    <section className="mb-12 bg-grainy py-12 pb-20 xl:mb-36">
      <div className="container">
        <motion.h2
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="section-title mx-auto mb-24 text-center"
        >
          <Dot />
          {t("title")}
        </motion.h2>
        {/* grid items */}
        <div className="grid justify-center gap-y-24 xl:grid-cols-3 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeIn("down", item.speed)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, ammount: 0.4 }}
              >
                <Card className="relative flex h-[320px] w-full max-w-[424px] flex-col items-center justify-start bg-accent/0 pb-10 pt-20">
                  <CardHeader className="absolute -top-[65px] bg-grainy text-accent">
                    <div className="flex h-[80px] w-[140px] items-center justify-center">
                      {item.icon}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardTitle className="mb-4">{item.title}</CardTitle>
                    <CardDescription className="relative text-lg text-balance">
                      {item.description}
                      <span className="absolute -bottom-14 left-0 right-0 font-bold underline">
                        {item.soon}
                      </span>
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
