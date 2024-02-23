import Link from "next/link";
import { Button } from "@/components/ui/button";
import WorkSwiper from "./WorkSwiper";
import { NextIntlClientProvider, useTranslations, useMessages } from "next-intl";
import pick from 'lodash/pick';
import { Dot } from "./Dot";
const Work = () => {
  const t = useTranslations("Work");
  const messages = useMessages();

  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">
           <Dot />
            {t("title")}
          </h2>
          <p className="subtitle mb-8">{t("subtitle")}</p>
          <Link href="/projects">
            <Button>{t("projects-button")}</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[900px] xl:absolute right-36 top-0">
          <NextIntlClientProvider 
            messages={
              pick(messages, 'Proiecte')
            }
          >
            <WorkSwiper />
          </NextIntlClientProvider>
        </div>
      </div>
    </section>
  );
};

export default Work;
