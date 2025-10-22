import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { fadeIn } from "@/variants";
import {
  User2,
  MailIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Dot } from "../Dot";
import { MotionDiv, MotionH2 } from "@/lib/motion-client";
import Qualifications from "./Qualifications";

const infoData = [
  { icon: <User2 size={20} />, text: "Maftei Alexandru" },
  { icon: <PhoneCall size={20} />, text: "+40720425840" },
  { icon: <MailIcon size={20} />, text: "alexandrumaftei95@gmail.com" },
  { icon: <Calendar size={20} />, text: "14 Aug, 1995" },
  { icon: <GraduationCap size={20} />, text: "Academia de Studii Economice " },
];

const About = () => {
  const t = useTranslations("About");
  const qualificationData = [
    {
      title: t("edu"),
      data: [
        {
          university: "ASE",
          qualification: "Bachelor in Economy",
          years: "2014-2017",
        },
        {
          university: "SDA Academy - Java/Frontend",
          qualification: "Certificate",
          years: "2023-2024",
        },
      ],
    },
    {
      title: t("exp"),
      data: [
        { company: "DB Schenker", role: "Transport Agent", years: "2018-2022" },
        {
          company: "Porsche Inter Auto",
          role: "Digital Specialist",
          years: "2022-prezent",
        },
        { company: "Freelancer", role: "Web Developer", years: "2023-present" },
      ],
    },
  ];
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="my-24 pb-24">
      <div className="container mx-auto">
        <MotionH2
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="section-title mx-auto mb-8 text-center xl:mb-32"
        >
          <Dot />
          {t("title")}
        </MotionH2>
        <div className="flex flex-col-reverse items-center justify-center gap-x-32 xl:flex-row">
          {/* Image */}
          <MotionDiv
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="relative shrink-0 bg-no-repeat xl:flex xl:h-[50vh] xl:w-[50vh] xl:max-2xl:ml-4"
          >
            <Image
              src="/Alexandru Maftei poza de profil.png"
              width={800}
              height={800}
              loading="lazy"
              alt="Alexandru Maftei poza de profil"
              className="border-accent rounded-lg border-2 object-cover transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:rotate-[-3deg] md:max-xl:hidden"
            />
          </MotionDiv>
          {/* Tabs */}
          <MotionDiv
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className=""
          >
            <Tabs defaultValue="skills" className="xl:w-[750px]">
              <TabsList className="grid w-full xl:max-w-[520px] xl:grid-cols-3 xl:border">
                <TabsTrigger
                  className="w-[162px] rounded-l-md xl:w-auto"
                  value="skills"
                >
                  {t("tab3.trigger")}
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-nonne w-[162px] xl:w-auto"
                  value="personal"
                >
                  {t("tab1.trigger")}
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] rounded-r-md xl:w-auto"
                  value="qualifications"
                >
                  {t("tab2.trigger")}
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="mt-12 text-lg xl:mt-8">
                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-8">{t("tab3.title")}</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <div className="border-accent mb-8 border-b"></div>
                      {/* skill list frontend */}
                      <Qualifications />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-4">{t("tab1.title")}</h3>
                    <p className="subtitle mx-auto max-w-xl max-xl:text-balance xl:mx-0">
                      {t("tab1.description")}
                    </p>
                    {/* icons */}
                    <div className="mb-12 grid gap-4 xl:grid-cols-2">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="mx-auto flex items-center gap-x-4 xl:mx-0"
                            key={index}
                          >
                            <div className="text-accent">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="mb-8 text-center xl:text-left">
                      {t("tab2.title")}{" "}
                    </h3>
                    {/* experience / ed wrapper */}
                    <div className="grid gap-y-8 md:grid-cols-2">
                      {/* ed */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px]">
                          <GraduationCap size={28} className="text-accent" />
                          <h4 className="font-bold capitalize">
                            {getData(qualificationData, t("edu")).title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="mt-4 flex flex-col gap-y-8">
                          {getData(qualificationData, t("edu")).data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="group flex gap-x-8" key={index}>
                                  <div className="relative ml-2 h-[84px] w-[1px] bg-black/15">
                                    <div className="bg-accent absolute -left-[5px] h-[11px] w-[11px] rounded-full transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                  </div>
                                  <div>
                                    <div className="mb-2 text-xl leading-none font-medium">
                                      {university}
                                    </div>
                                    <div className="mb-4 text-lg leading-none">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px]">
                          <Briefcase size={28} className="text-accent" />
                          <h4 className="font-bold capitalize">
                            {getData(qualificationData, t("exp")).title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="mt-4 flex flex-col gap-y-8">
                          {getData(qualificationData, t("exp")).data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="group flex gap-x-8" key={index}>
                                  <div className="relative ml-2 h-[84px] w-[1px] bg-black/15">
                                    <div className="bg-accent absolute -left-[5px] h-[11px] w-[11px] rounded-full transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                  </div>
                                  <div>
                                    <div className="mb-2 text-xl leading-none font-medium">
                                      {company}
                                    </div>
                                    <div className="mb-4 text-lg leading-none">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default About;
