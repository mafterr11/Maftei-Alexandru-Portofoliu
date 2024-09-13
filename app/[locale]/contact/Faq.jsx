"use client";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { MotionDiv } from "@/lib/motion-client";
import { fadeIn } from "@/variants";

export default function Faq() {
  const [openItem, setOpenItem] = useState(null);
  const t = useTranslations("Contact");
  const services = [
    {
      title: t("faq.q1"),
      description: t("faq.a1"),
      icon: "🚀",
    },
    {
      title: t("faq.q2"),
      description: t("faq.a2"),
      icon: "💳",
    },
    {
      title: t("faq.q3"),
      description: t("faq.a3"),
      icon: "📱",
    },
    {
      title: t("faq.q4"),
      description: t("faq.a4"),
      icon: "👾",
    },
  ];
  return (
    <div className="mt-12 w-full max-w-2xl space-y-4">
      {services.map((service, index) => (
        <MotionDiv
          key={index}
          className="border-primary overflow-hidden rounded-lg border"
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
        >
          <button
            onClick={() => setOpenItem(openItem === index ? null : index)}
            className="flex w-full items-center justify-between bg-accent/5 p-4 text-left transition-colors hover:bg-accent/80 hover:text-white"
          >
            <span className="flex items-center text-lg font-semibold">
              <span className="mr-3 text-2xl">{service.icon}</span>
              {service.title}
            </span>
            <ChevronDownIcon
              className={cn(
                "h-5 w-5 transition-transform duration-200",
                openItem === index ? "rotate-180 transform" : "",
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              openItem === index ? "max-h-96" : "max-h-0",
            )}
          >
            <p className="text-muted-foreground p-4">{service.description}</p>
          </div>
        </MotionDiv>
      ))}
    </div>
  );
}
