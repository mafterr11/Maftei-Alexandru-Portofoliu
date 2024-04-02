"use server"
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Image from "next/image";
import {useTranslations} from 'next-intl';

const Hero = () => {
  const t = useTranslations('Hero');
  return (
    <section className="py-24 mb-24 xl:pt-56 bg-body-light">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8 relative">
          {/* text */}
          <div className="flex flex-col max-w-[650px] mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-accent tracking-[4px]">
              Web Developer
            </div>
            <h1 className="mb-4">{t('title')}</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
            {t('subtitle')}
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={t('contact-link')}>
                <Button className="gap-x-2"> 
                {t('contact-button')} <Send size={18} />
                </Button>
              </Link>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Button className="gap-x-2" variant="secondary">
                {t('download-button')}
                  <Download size={18} />
                </Button>
              </a>
            </div>
          </div>
          {/* image */}
          <div className="hidden xl:flex w-[500px] h-[500px] bg-no-repeat absolute -top-2 -right-2">
            <Image
              src="/logo.webp"
              width={800}
              height={800}
              alt="Alexandru Maftei profile picture"
              className="object-cover rounded-full border-2 border-accent "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
