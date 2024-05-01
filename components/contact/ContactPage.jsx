"use client";
import { MailIcon, PhoneCall } from "lucide-react";
import SolicitatiOfertaForm from "@/components/SolicitatiOfertaForm";
import { useTranslations } from "next-intl";
import { RiWhatsappLine } from "react-icons/ri";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import GoogleCaptchaWrapper from './../../app/GoogleCaptchaWrapper';

const ContactPage = () => {
  const t = useTranslations("Contact");
  return (
    <section className='min-h-screen pt-24 xl:pt-40'>
      <div className='container mx-auto'>
        {/* text / ilustration */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <motion.div 
            variants={fadeIn("down", 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className='flex items-center gap-x-4 text-accent text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-accent'></span>
              <div>
                {t("subtitle2")}
              </div>
            </motion.div>
            <motion.h1
              variants={fadeIn("right", 0.2)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, ammount: 0.4 }}
              className='max-w-md mb-8'
            >
              {t("title")}
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, ammount: 0.4 }}
              className='subtitle max-w-[500px]'
            >
              {t("subtitle")}
            </motion.p>
          </div>
          {/* ilustration */}
          <motion.div 
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className='hidden xl:flex w-full bg-contact bg-contain bg-top bg-no-repeat'></motion.div>
        </div>
        {/* info text and form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
          {/* info text */}
          <div className='flex flex-col gap-y-4 xl:gap-y-4 mb-12 xl:mb-24 text-base xl:text-lg'>
            {/* Phone */}
            <motion.div 
             variants={fadeIn("down", 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className='flex items-center gap-x-6 xl:pt-12'>
              <PhoneCall size={22} className='text-accent' />
              <a
                href='tel:+40720425840'
                target='blank'
                className='hover:text-accent hover:scale-95 transition-all duration-300'
              >
                +40720425840
              </a>
            </motion.div>
            <motion.div 
             variants={fadeIn("down", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className='font-bold'>{t("or")}</motion.div>
            {/* WhatsApp */}
            <motion.div 
             variants={fadeIn("down", 0.4)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className='flex items-center gap-x-6'>
              <RiWhatsappLine size={24} className='text-accent' />
              <a
                href='http://wa.me/+40720425840'
                target='blank'
                className='hover:text-accent hover:scale-95 transition-all duration-300'
              >
                {t("whatsapp")}
              </a>
            </motion.div>
            <motion.div 
             variants={fadeIn("down", 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className='font-bold'>{t("or")}</motion.div>
            {/* Send email */}
            <motion.div 
             variants={fadeIn("down", 0.6)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className='flex items-center gap-x-24'>
              <div className='flex items-center gap-x-6 relative'>
                <MailIcon size={24} className='text-accent' />
                {t("email")}
                <MoveRight
                  size={35}
                  strokeWidth={1}
                  className='absolute -right-12 max-xl:rotate-90'
                />
              </div>
            </motion.div>
          </div>
          {/* Form */}
          <motion.div
          variants={fadeIn("down", 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}>
          <GoogleCaptchaWrapper>
            <SolicitatiOfertaForm />
          </GoogleCaptchaWrapper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
