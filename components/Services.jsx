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
      title: "Google Ads",
      description: t("third.description"),
      speed: 0.8,
      soon: t("third.soon"),
    },
  ];
  return (
    <section className='mb-12 xl:mb-36 bg-body-light py-12 pb-20'>
      <div className='container mx-auto'>
        <motion.h2
          variants={fadeIn("down", 0.4)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className='section-title mb-24 text-center mx-auto'
        >
          <Dot />
          {t("title")}
        </motion.h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              
              <motion.div 
              key={index}
              variants={fadeIn("down", item.speed)}
         initial='hidden'
         whileInView={"show"}
         viewport={{ once: true, ammount: 0.4 }}
             >
                <Card className='w-full bg-accent/0 max-w-[424px] h-[320px] flex flex-col pt-20 pb-10 justify-start items-center relative'>
                  <CardHeader className='text-accent absolute -top-[65px] bg-body-light'>
                    <div className='flex justify-center items-center w-[140px] h-[80px]'>
                      {item.icon}
                    </div>
                  </CardHeader>
                  <CardContent className='text-center'>
                    <CardTitle className='mb-4'>{item.title}</CardTitle>
                    <CardDescription className='text-lg relative'>
                      {item.description}
                      <span className='absolute -bottom-14 left-0 right-0 font-bold underline'>
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
