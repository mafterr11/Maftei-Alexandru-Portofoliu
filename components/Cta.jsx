import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const Cta = () => {
  const t = useTranslations("Cta");

  return <section className="py-24 bg-accent/10 mb-24">
    <div  className="container mx-auto">
        <div className="flex flex-col items-center">
            <h2 className="max-w-3xl text-center mb-8">
                {t("title")}
            </h2>
            <Link href="/contact">
                <Button className="text-white">{t("contact-button")}</Button>
            </Link>
        </div>
    </div>
  </section>;
};

export default Cta;
