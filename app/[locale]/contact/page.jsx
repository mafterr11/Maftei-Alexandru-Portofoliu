"use client";
import {  MailIcon, PhoneCall } from "lucide-react";
import SolicitatiOfertaForm from "@/components/SolicitatiOfertaForm";
import GoogleCaptchaWrapper from "../../GoogleCaptchaWrapper";
import { useTranslations } from "next-intl";
import { RiWhatsappLine } from "react-icons/ri";
import { MoveRight } from 'lucide-react';
const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <section className='min-h-screen pt-24 xl:pt-40'>
      <div className='container mx-auto'>
        {/* text / ilustration */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-accent text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-accent'></span>
              <div>{t("subtitle2")}</div>
            </div>
            <h1 className='max-w-md mb-8'>{t("title")}</h1>
            <p className='subtitle max-w-[500px]'>{t("subtitle")}</p>
          </div>
          {/* ilustration */}
          <div className='hidden xl:flex w-full bg-contact bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* info text and form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
          {/* info text */}
          <div className='flex flex-col gap-y-4 xl:gap-y-4 mb-12 xl:mb-24 text-base xl:text-lg'>
            {/* Phone */}
            <div className='flex items-center gap-x-6 xl:pt-12'>
              <PhoneCall size={22} className='text-accent' />
              <a
                href='tel:+40720425840'
                target='blank'
                className='hover:text-accent hover:scale-95 transition-all duration-300'
              >
                +40720425840
              </a>
            </div>
            <div className='font-bold'>{t("or")}</div>
            {/* WhatsApp */}
            <div className='flex items-center gap-x-6'>
              <RiWhatsappLine size={24} className='text-accent' />
              <a
                href='http://wa.me/+40720425840'
                target='blank'
                className='hover:text-accent hover:scale-95 transition-all duration-300'
              >
                {t("whatsapp")}
              </a>
            </div>
          </div>
          {/* Form */}
          <GoogleCaptchaWrapper>
            <SolicitatiOfertaForm />
          </GoogleCaptchaWrapper>
        </div>
      </div>
    </section>
  );
};

export default Contact;
