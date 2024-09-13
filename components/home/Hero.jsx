import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { fadeIn } from "@/variants";
import { MotionDiv, MotionH1, MotionP } from "@/lib/motion-client";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <section className="mb-24 bg-grainy pt-24 pb-8 xl:pt-56 xl:pb-24">
      <div className="container mx-auto">
        <div className="relative flex justify-between gap-x-8 xl:px-6 2xl:px-20">
          {/* text */}
          <div className="mx-auto flex max-w-[650px] flex-col text-center xl:mx-0 xl:text-left">
            <MotionDiv
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, ammount: 0.4 }}
              className="mb-4 font-recursive text-lg font-semibold uppercase tracking-[4px] text-accent"
            >
              Alexandru Maftei
            </MotionDiv>
            <MotionH1
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, ammount: 0.4 }}
              className="mb-4"
            >
              {t("title")}
            </MotionH1>
            <MotionP
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, ammount: 0.4 }}
              className="subtitle mx-auto max-w-[490px] max-xl:text-balance xl:mx-0"
            >
              {t("subtitle")}
            </MotionP>
            {/* buttons */}
            <div className="mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row xl:mx-0">
              <MotionDiv
                variants={fadeIn("right", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, ammount: 0.4 }}
              >
                <Link href={t("contact-link")}>
                  <Button className="group min-w-[180px] gap-x-2 shadow-button">
                    {t("contact-button")}{" "}
                    <Send
                      size={18}
                      className="transition-all duration-300 ease-in-out group-hover:rotate-[20deg]"
                    />
                  </Button>
                </Link>
              </MotionDiv>
              <MotionDiv
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
                  <Button
                    className="group min-w-[180px] gap-x-2 shadow-button"
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
            variants={fadeIn("down", 0.4)}
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
              className="rounded-full border-2 border-accent object-cover"
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Hero;
