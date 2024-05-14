"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Dot } from "./Dot";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Maftei Alexandru",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+40720425840",
  },
  {
    icon: <MailIcon size={20} />,
    text: "alexandrumaftei95@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "14 Aug, 1995",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Academia de Studii Economice ",
  },
];

const skillData = [
  {
    title: "frontend",
    data: [
      {
        name: "HTML5, CSS, Javascript",
      },
      {
        name: "ReactJS",
      },
      {
        name: "NextJS",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "Shadcn-UI",
      },
      {
        name: "Framer Motion",
      },
      {
        name: "GSAP",
      },
      {
        name: "Prismic CMS",
      },
    ],
  },
  {
    title: "backend",
    data: [
      {
        name: "Java",
      },
      {
        name: "Maven, Gradle",
      },
      {
        name: "Spring",
      },
      {
        name: "Hibernate",
      },
      {
        name: "MySQL, PostgreSQL",
      },
      {
        name: "PostMan",
      },
      {
        name: "GitHub",
      },
    ],
  },
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
        {
          company: "DB Schenker",
          role: "Transport Agent",
          years: "2018-2022",
        },
        {
          company: "Porsche Inter Auto",
          role: "Digital Specialist",
          years: "2022-2024",
        },
        {
          company: "Freelancer",
          role: "Web Developer",
          years: "2023-present",
        },
      ],
    },
  ];
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="pb-12 xl:h-[900px] xl:py-24">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="section-title mx-auto mb-8 text-center xl:mb-24"
        >
          <Dot />
          {t("title")}
        </motion.h2>
        <div className="flex flex-col gap-24 xl:flex-row">
          {/* Image */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="relative hidden h-[425px] w-[505px] flex-1 bg-no-repeat xl:flex"
          >
            <Image
              src="/profile-picture.jpg"
              width={800}
              height={800}
              alt="Alexandru Maftei profile picture"
              className="rounded-full border-2 border-accent object-cover"
            />
          </motion.div>
          {/* Tabs */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, ammount: 0.4 }}
            className="flex-1"
          >
            <Tabs defaultValue="personal" className="xl:w-[650px]">
              <TabsList className="grid w-full xl:max-w-[520px] xl:grid-cols-3 xl:border">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  {t("tab1.trigger")}
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  {t("tab2.trigger")}
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  {t("tab3.trigger")}
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="mt-12 text-lg xl:mt-8">
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
                        <div className="flex items-center gap-x-4 text-[22px] text-accent">
                          <GraduationCap size={28} />
                          <h4 className="font-medium capitalize">
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
                                    <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-accent transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                  </div>
                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none">
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
                        <div className="flex items-center gap-x-4 text-[22px] text-accent">
                          <Briefcase size={28} />
                          <h4 className="font-medium capitalize">
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
                                    <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-accent transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                  </div>
                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none">
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
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-8">{t("tab3.title")}</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="mb-2 text-xl font-semibold">Frontend</h4>
                      <div className="mb-8 border-b border-accent"></div>
                      {/* skill list frontend */}
                      <div className="grid grid-cols-1 md:grid-flow-col md:grid-cols-2 md:grid-rows-4 xl:grid-rows-4">
                        {getData(skillData, "frontend").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="mx-auto text-center xl:mx-0 xl:text-left"
                                key={index}
                              >
                                <div className="font-medium">
                                  <span className="hidden text-accent xl:inline-block">
                                    &#x2022;
                                  </span>{" "}
                                  {name}
                                </div>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                    {/* Skill List Backend */}
                    <div>
                      <h4 className="mb-2 text-xl font-semibold xl:text-left ">
                        Backend
                      </h4>
                      <div className="mb-8 border-b border-accent"></div>
                      {/* skill list backend */}
                      <div className="grid grid-cols-1 md:grid-flow-col md:grid-cols-2 md:grid-rows-4 xl:grid-rows-4">
                        {getData(skillData, "backend").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="mx-auto text-center xl:mx-0 xl:text-left"
                                key={index}
                              >
                                <div className="font-medium">
                                  <span className="hidden text-accent xl:inline-block">
                                    &#x2022;
                                  </span>{" "}
                                  {name}
                                </div>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
