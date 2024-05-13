"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import WorkSwiper from "./WorkSwiper";
import {
  NextIntlClientProvider,
  useTranslations,
  useMessages,
} from "next-intl";
import pick from "lodash/pick";
import { Dot } from "./Dot";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Work = () => {
  const t = useTranslations("Work");
  const messages = useMessages();

  return (
    <section className="relative mb-12 max-xl:overflow-x-hidden xl:mb-24 xl:py-16">
      <div className="container flex flex-col gap-x-40 xl:flex-row">
        {/* text */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="mx-auto mb-12 flex max-w-[400px] flex-col items-center justify-center text-center xl:mx-0 xl:h-[400px] xl:items-start xl:text-left"
        >
          <h2 className="section-title mb-4">
            <Dot />
            {t("title")}
          </h2>
          <p className="subtitle mb-8">{t("subtitle")}</p>
          <Link href={t("projects-link")}>
            <Button>{t("projects-button")}</Button>
          </Link>
        </motion.div>
        {/* slider */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="xl:max-w-[800px]"
        >
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
