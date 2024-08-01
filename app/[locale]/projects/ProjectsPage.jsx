"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/home/ProjectCard";
import { useTranslations } from "next-intl";
import { Dot } from "@/components/Dot";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { data } from "@/data";

const ProjectsPage = () => {
const t = useTranslations("Proiecte");
const projectData = data(t);
  const uniqueCategories = [
    t("page.tab"),
    ...new Set(projectData.map((item) => item.category)),
  ];
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState(t("page.tab"));
  const filteredProjects = projectData.filter((project) => {
    // If category  is all projects return all projects, else filter
    return category === t("page.tab") ? project : project.category === category;
  });

  return (
    <div className="min-h-screen pt-40">
      <div className="container mx-auto xl:max-w-[1330px]">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
          className="section-title mx-auto mb-8 text-center xl:mb-16"
        >
          <Dot />
          {t("page.title")}
        </motion.h1>
        {/* Tabs */}
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, ammount: 0.4 }}
        >
          <Tabs defaultValue={category} className="mb-24 xl:mb-48">
            <TabsList className="mx-auto mb-12 grid h-full w-full max-md:gap-y-3 md:grid-cols-5 md:border lg:max-w-fit">
              {categories.map((category, index) => {
                return (
                  <TabsTrigger
                    value={category}
                    key={index}
                    className="w-[162px] md:w-auto rounded-[5px]"
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* Tabs content */}
            <div className="grid grid-cols-1 gap-8 md:max-xl:px-6 text-lg md:grid-cols-2 xl:grid-cols-3 xl:mt-8">
              {filteredProjects.map((project, index) => {
                return (
                  <TabsContent value={category} key={index}>
                    <ProjectCard project={project} />
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
