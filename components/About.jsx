import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Maftei Alexandru",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+40720.425.840",
  },
  {
    icon: <MailIcon size={20} />,
    text: "alexandrumaftei95@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born 08 Aug, 1995",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Academia de Studii Economice ",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "ASE",
        qualification: "Bachelor of Economy",
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
    title: "experience",
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
        years: "2024-present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "TailwindCSS",
      },
      {
        name: "NextJS 14",
      },
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
        name: "MySQL",
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
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row gap-24">
          {/* Image */}
          <div className="w-[505px] h-[505px] bg-no-repeat xl:flex hidden flex-1 relative">
            <Image
              src="/profile-picture.jpg"
              width={800}
              height={800}
              alt="Alexandru Maftei profile picture"
              className="object-cover rounded-full"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal" className="xl:w-[650px]">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-4">Unmatched Servuce Quality</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
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
                      My Awesome Journey
                    </h3>
                    {/* experience / ed wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-accent">
                          <Briefcase size={28}/>
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8 mt-4">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-black/15 relative ml-2">
                                    <div className="h-[11px] w-[11px] rounded-full bg-accent absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* ed */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-accent">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8 mt-4">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-black/15 relative ml-2">
                                    <div className="h-[11px] w-[11px] rounded-full bg-accent absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  Change your password here.
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
