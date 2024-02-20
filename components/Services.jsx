import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("Services");
  const servicesData = [
    {
      icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
      title: "Web Design",
      description: t("first.description"),
    },
    {
      icon: <Blocks size={72} strokeWidth={0.8} />,
      title: "Web Development",
      description: t("second.description"),
    },
    {
      icon: <Gem size={72} strokeWidth={0.8} />,
      title: "Google Ads",
      description: t("third.description"),
      soon: t("third.soon"),
    },
  ];
  return (
    <section className="mb-12 xl:mb-36 bg-purple-light py-12 pb-20">
      <div className="container mx-auto">
        <h2 className="section-title mb-24 text-center mx-auto">
          <div className="relative text-accent text-[65px]">
            &#x2022;{" "}
            <span className=" h-4 w-4 border-2 rounded-full border-black-heavy/70 absolute top-2 right-0"></span>
          </div>
          {t("title")}
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                key={index}
                className="w-full bg-accent/0 max-w-[424px] h-[320px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              >
                <CardHeader className="text-accent absolute -top-[65px] bg-purple-light">
                  <div className="flex justify-center items-center w-[140px] h-[80px]">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg relative">
                    {item.description}
                    <span className="absolute -bottom-14 left-0 right-0 font-bold underline">
                      {item.soon}
                    </span>
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
