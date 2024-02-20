"use client";
import { MailIcon, PhoneCall } from "lucide-react";
import SolicitatiOfertaForm from "@/components/SolicitatiOfertaForm";
import GoogleCaptchaWrapper from "../GoogleCaptchaWrapper";

const Contact = () => {
  return (
    <section className="min-h-screen pt-40">
      <div className="container mx-auto">
        {/* text / ilustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-accent text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-accent"></span>
              <div>Say Hello</div>
            </div>
            <h1 className="max-w-md mb-8">Let's Work Together</h1>
            <p className="subtitle max-w-[400px]">
              I am eager to start our journey!
            </p>
          </div>
          {/* ilustration */}
          <div className="hidden xl:flex w-full bg-contact bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text and form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-8 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-6">
              <MailIcon size={18} className="text-accent" />
              <div>alexandrumaftei95@gmail.com</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-6">
              <PhoneCall size={18} className="text-accent" />
              <div>+40720425840</div>
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
