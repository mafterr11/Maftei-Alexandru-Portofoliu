import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Crafting visually stunning and intuitive websites that prioritize user experience, ensuring your online presence is impactful.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Building robust, scalable web solutions with the latest technologies to deliver high-performance websites tailored to meet your business needs.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Google Ads",
    description:
      "Maximizing your online visibility and driving targeted traffic to your site with customized Google Ads strategies.",
  },
];
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36 bg-purple-light py-12 pb-20">
      <div className="container mx-auto">
        <h2 className="section-title mb-24 text-center mx-auto">
        <div className="relative text-accent text-[65px]">&#x2022; <span className=" h-4 w-4 border-2 rounded-full border-black-heavy/70 absolute top-2 right-0"></span></div>My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                key={index}
                className="w-full bg-accent/0 max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              >
                <CardHeader className="text-accent absolute -top-[65px] bg-purple-light">
                  <div className="flex justify-center items-center w-[140px] h-[80px]">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                <CardTitle className="mb-4">{item.title}</CardTitle>
                <CardDescription className="text-lg">{item.description}</CardDescription>
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