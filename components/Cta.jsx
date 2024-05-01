"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Cta = () => {
  const t = useTranslations("Cta");
  const tLink = useTranslations("Hero");

  return (
    <section className='py-24 bg-body-light mb-44'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <motion.h2
            variants={fadeIn("down", 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className='max-w-3xl text-center mb-6 flex flex-col items-center justify-center gap-y-2'
          >
            {t("title")}
            <span className='text-3xl md:max-xl:text-4xl font-medium'>
              {t("title2")}
            </span>
          </motion.h2>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
          >
            <Link href={tLink("contact-link")}>
              <Button className='gap-x-2'>
                {tLink("contact-button")} <Send size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
