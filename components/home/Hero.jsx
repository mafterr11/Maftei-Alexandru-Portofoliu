"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { fadeIn } from "@/variants";
import { MotionDiv, MotionH1, MotionP } from "@/lib/motion-client";
import { useEffect, useState } from "react";

const Hero = () => {
  const t = useTranslations("Hero");
  //  Word animation on enter
  const [firstVisit, setFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedHomePage");
    if (!hasVisited) {
      setFirstVisit(true);
    }
  }, []);
  //  Word animation on enter

  return (
    <section className="bg-grainy mb-24 h-screen pt-24 pb-8 xl:pt-56 xl:pb-24">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between gap-x-8 xl:px-6 2xl:px-20">
          {/* text */}
          <div className="mx-auto flex max-w-[750px] flex-col text-center xl:mx-0 xl:text-left">
            <MotionDiv
              variants={fadeIn("down", firstVisit ? 2.7 : 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, ammount: firstVisit ? 2.9 : 0.4 }}
              className="font-recursive text-accent mb-4 text-lg font-semibold tracking-[4px] uppercase"
            >
              Alexandru Maftei
            </MotionDiv>
            <MotionH1
              variants={fadeIn("down", firstVisit ? 2.9 : 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, ammount: 0.4 }}
              className="mb-4"
            >
              {t("title")}
            </MotionH1>
            <MotionP
              variants={fadeIn("down", firstVisit ? 3.1 : 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, ammount: 0.4 }}
              className="subtitle mx-auto max-w-[490px] max-xl:text-balance xl:mx-0"
            >
              {t("subtitle")}
              <span className="font-bold underline underline-offset-2">
                {t("subtitle2")}
              </span>
              {t("subtitle3")}
            </MotionP>
            {/* buttons */}
            <div className="mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row xl:mx-0">
              <MotionDiv
                variants={fadeIn("right", firstVisit ? 3.3 : 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, ammount: 0.4 }}
              >
                <Link href={t("contact-link")}>
                  <Button className="group shadow-button min-w-[180px] gap-x-2">
                    {t("contact-button")}{" "}
                    <Send
                      size={18}
                      className="transition-all duration-300 ease-in-out group-hover:rotate-[20deg]"
                    />
                  </Button>
                </Link>
              </MotionDiv>
              <MotionDiv
                variants={fadeIn("left", firstVisit ? 3.3 : 0.8)}
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
                  <Button
                    className="group shadow-button min-w-[180px] gap-x-2"
                    variant="secondary"
                  >
                    {t("download-button")}
                    <Download
                      size={18}
                      className="transition-all duration-300 ease-in-out group-hover:rotate-[20deg]"
                    />
                  </Button>
                </a>
              </MotionDiv>
            </div>
          </div>
          {/* image */}
          <MotionDiv
            variants={fadeIn("down", firstVisit ? 2.9 : 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="hidden h-[500px] w-[500px] shrink-0 bg-no-repeat xl:flex"
          >
            <Image
              src="/Myriad Tech logo.png"
              width={800}
              height={800}
              priority={true}
              alt="Myriad Tech logo"
              className="border-accent rounded-lg border-2 object-cover transition-all duration-300 ease-linear hover:scale-[1.03] hover:rotate-[3deg]"
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Hero;
