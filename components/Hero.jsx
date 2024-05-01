"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <section className='py-24 mb-24 xl:pt-56 bg-body-light'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8 relative'>
          {/* text */}
          <div className='flex flex-col max-w-[650px] mx-auto xl:mx-0 text-center xl:text-left'>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, ammount: 0.4 }}
              className='text-sm uppercase font-semibold mb-4 text-accent tracking-[4px]'
            >
              Web Developer
            </motion.div>
            <motion.h1
              variants={fadeIn("down", 0.4)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, ammount: 0.4 }}
              className='mb-4'
            >
              {t("title")}
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, ammount: 0.4 }}
              className='subtitle max-w-[490px] mx-auto xl:mx-0'
            >
              {t("subtitle")}
            </motion.p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <motion.div
                variants={fadeIn("right", 0.8)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: true, ammount: 0.4 }}
              >
                <Link href={t("contact-link")}>
                  <Button className='gap-x-2 shadow-button'>
                    {t("contact-button")} <Send size={18} />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.8)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: true, ammount: 0.4 }}
              >
                <a
                  href='/CV.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  download
                >
                  <Button className='gap-x-2 shadow-button' variant='secondary'>
                    {t("download-button")}
                    <Download size={18} />
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className='hidden xl:flex w-[500px] h-[500px] bg-no-repeat absolute -top-2 -right-2'
          >
            <Image
              src='/logo.webp'
              width={800}
              height={800}
              alt='Alexandru Maftei profile picture'
              className='object-cover rounded-full border-2 border-accent '
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
