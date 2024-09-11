"use client";
import React, { Suspense, useState } from "react";
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
            <TabsList className="mx-auto mb-12 flex h-full w-fit justify-center max-md:flex-col max-md:gap-y-3 md:border">
              {categories.map((category, index) => {
                return (
                  <TabsTrigger
                    value={category}
                    key={index}
                    className="w-[162px] rounded-[5px] hover:bg-accent hover:text-white md:w-auto"
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Tabs content */}
            <Suspense fallback={<div>Loading...</div>}>
              <div className="grid grid-cols-1 gap-8 text-lg md:grid-cols-2 md:max-xl:px-6 xl:mt-8 xl:grid-cols-3">
                {filteredProjects.map((project, index) => {
                  return (
                    <TabsContent value={category} key={index}>
                      <ProjectCard project={project} />
                    </TabsContent>
                  );
                })}
              </div>
            </Suspense>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
