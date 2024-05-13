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
    <section className="mb-24 bg-body-light py-24 xl:pt-56">
      <div className="container mx-auto">
        <div className="relative flex justify-between gap-x-8">
          {/* text */}
          <div className="mx-auto flex max-w-[650px] flex-col text-center xl:mx-0 xl:text-left">
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, ammount: 0.4 }}
              className="mb-4 font-recursive text-sm font-semibold uppercase tracking-[4px] text-accent"
            >
              Web Developer
            </motion.div>
            <motion.h1
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, ammount: 0.4 }}
              className="mb-4"
            >
              {t("title")}
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, ammount: 0.4 }}
              className="subtitle mx-auto max-w-[490px] max-xl:text-balance xl:mx-0"
            >
              {t("subtitle")}
            </motion.p>
            {/* buttons */}
            <div className="mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row xl:mx-0">
              <motion.div
                variants={fadeIn("right", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, ammount: 0.4 }}
              >
                <Link href={t("contact-link")}>
                  <Button className="gap-x-2 shadow-button min-w-[180px]">
                    {t("contact-button")} <Send size={18} />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, ammount: 0.4 }}
              >
                <a
                  href="/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Button className="gap-x-2 shadow-button min-w-[180px]" variant="secondary">
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
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="absolute -right-2 -top-2 hidden h-[500px] w-[500px] bg-no-repeat xl:flex"
          >
            <Image
              src="/logo.png"
              width={800}
              height={800}
              alt="Alexandru Maftei profile picture"
              className="rounded-full border-2 border-accent object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
