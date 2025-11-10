"use client";

import { MailIcon, PhoneCall, MoveRight } from "lucide-react";
import { RiWhatsappLine } from "react-icons/ri";
import { useTranslations } from "next-intl";

import { fadeIn } from "@/variants";
import { MotionDiv, MotionH1, MotionP } from "@/lib/motion-client";
import GoogleCaptchaWrapper from "../../GoogleCaptchaWrapper";
import ContactForm from "./ContactForm";
import Faq from "./Faq";

const ContactPage = () => {
  const t = useTranslations("Contact");

  return (
    <div className="min-h-screen pt-24 xl:pt-40">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="mb-6 grid pt-12 xl:mb-24 xl:h-[480px] xl:grid-cols-2">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <MotionDiv
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="mb-4 flex items-center gap-x-4 text-lg text-accent"
            >
              <span className="h-[2px] w-[30px] bg-accent" />
              <div>{t("subtitle2")}</div>
            </MotionDiv>

            <MotionH1
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="mb-8 max-w-md"
            >
              {t("title")}
            </MotionH1>

            <MotionP
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="subtitle max-w-[500px] text-balance"
            >
              {t("subtitle")}
            </MotionP>
          </div>

          {/* Illustration */}
          <MotionDiv
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-contact hidden w-full bg-contain bg-top bg-no-repeat xl:flex"
          />
        </div>

        {/* Content */}
        <div className="mb-24 grid xl:mb-32 xl:grid-cols-2">
          {/* Contact options + FAQ */}
          <div className="mb-12 flex flex-col gap-y-4 text-base xl:mb-24 xl:gap-y-4 xl:text-lg">
            {/* Phone */}
            <MotionDiv
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex items-center gap-x-6 xl:pt-12"
            >
              <PhoneCall size={22} className="text-accent" />
              <a
                href="tel:+40720425840"
                target="_blank"
                className="transition-all duration-300 hover:scale-95 hover:text-accent"
              >
                +40.720.425.840
              </a>
            </MotionDiv>

            {/* OR */}
            <MotionDiv
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="font-bold"
            >
              {t("or")}
            </MotionDiv>

            {/* WhatsApp */}
            <MotionDiv
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex items-center gap-x-6"
            >
              <RiWhatsappLine size={24} className="text-accent" />
              <a
                href="https://wa.me/40720425840"
                target="_blank"
                className="transition-all duration-300 hover:scale-95 hover:text-accent"
              >
                {t("whatsapp")}
              </a>
            </MotionDiv>

            {/* OR */}
            <MotionDiv
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="font-bold"
            >
              {t("or")}
            </MotionDiv>

            {/* Email */}
            <MotionDiv
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex items-center gap-x-24"
            >
              <div className="relative flex items-center gap-x-6">
                <MailIcon size={24} className="text-accent" />
                {t("email")}
                <MoveRight
                  size={35}
                  strokeWidth={1}
                  className="absolute -right-12 max-xl:rotate-90"
                />
              </div>
            </MotionDiv>

            <Faq />
          </div>

          {/* Form */}
          <MotionDiv
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <GoogleCaptchaWrapper>
              <ContactForm />
            </GoogleCaptchaWrapper>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
