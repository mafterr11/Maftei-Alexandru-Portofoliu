import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";

const Cta = () => {
  const t = useTranslations("Cta");
  const tLink = useTranslations("Hero");

  return <section className="py-24 bg-body-light mb-24">
    <div  className="container mx-auto">
        <div className="flex flex-col items-center">
            <h2 className="max-w-3xl text-center mb-6 flex flex-col items-center justify-center">
                {t("title")}
                <span>{t("title2")}</span>
            </h2>
            <Link href={tLink('contact-link')}>
                <Button className="gap-x-2"> 
                {tLink('contact-button')} <Send size={18} />
                </Button>
              </Link>
        </div>
    </div>
  </section>;
};

export default Cta;
