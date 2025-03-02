import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
import { fadeIn } from "@/variants";
import { MotionDiv, MotionH2 } from "@/lib/motion-client";

const Cta = () => {
  const t = useTranslations("Cta");
  const tLink = useTranslations("Hero");

  return (
    <section className="bg-grainy mb-44 py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <MotionH2
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="mb-6 flex flex-col items-center justify-center gap-y-2 text-center"
          >
            {t("title")}
            <span className="text-3xl font-normal md:max-xl:text-4xl">
              {t("title2")}
            </span>
          </MotionH2>
          <MotionDiv
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
          >
            <Link href={tLink("contact-link")}>
              <Button className="group gap-x-2">
                {tLink("contact-button")}{" "}
                <Send
                  size={18}
                  className="transition-all duration-300 ease-in-out group-hover:rotate-[20deg]"
                />
              </Button>
            </Link>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Cta;
