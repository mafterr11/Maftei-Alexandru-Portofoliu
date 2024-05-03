"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import WorkSwiper from "./WorkSwiper";
import { NextIntlClientProvider, useTranslations, useMessages } from "next-intl";
import pick from 'lodash/pick';
import { Dot } from "./Dot";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Work = () => {
  const t = useTranslations("Work");
  const messages = useMessages();

  return (
    <section className="relative mb-12 xl:mb-96 overflow-x-hidden">
      <div className="container mx-auto">
        {/* text */}
        <motion.div 
          variants={fadeIn("right", 0.4)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
        className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">
           <Dot />
            {t("title")}
          </h2>
          <p className="subtitle mb-8">{t("subtitle")}</p>
          <Link href="/projects">
            <Button>{t("projects-button")}</Button>
          </Link>
        </motion.div>
        {/* slider */}
        <motion.div 
         variants={fadeIn("left", 0.4)}
         initial='hidden'
         whileInView={"show"}
         viewport={{ once: true, ammount: 0.4 }}
        className="xl:max-w-[900px] xl:absolute right-36 top-0">
          {/* <NextIntlClientProvider 
            messages={
              pick(messages, 'Proiecte')
            }
          > */}
            <WorkSwiper />
          {/* </NextIntlClientProvider> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
