"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { useTranslations } from "next-intl";
import { Dot } from "@/components/Dot";


const Projects = () => {
  const t = useTranslations("Proiecte");
  const projectData = [
    {
      image: "/work/madinytattoo.webp",
      category: "NextJS 14",
      name: "MadinyTattoo",
      description: t("madiny"),
      link: "https://madinytattoo.ro",
      github: "https://github.com/mafterr11/MadinyTattoo",
    },
    {
      image: "/work/tng.webp",
      category: "NextJS 14",
      name: "TNG GRUP",
      description: t("tng"),
      link: "https://tngag.ro",
      github: "https://github.com/mafterr11/TNG-GRUP",
    },
    {
      image: "/work/manarh.webp",
      category: "Fullstack",
      name: "Manarh",
      description: t("manarh"),
      link: "/",
      github: "/",
    },
  ];
  const uniqueCategories = [
    t("page.tab"),
    ...new Set(projectData.map((item) => item.category)),
  ];
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState(t("page.tab"));
  const filteredProjects = projectData.filter((project) => {
    // if category  is all projects return all projects, else filter
    return category === t("page.tab")
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-40">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          <Dot />
          {t("page.title")}
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                  onClick={() => setCategory(category)}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index)=>{
              return <TabsContent value={category} key={index}>
                <ProjectCard project={project}/>
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
