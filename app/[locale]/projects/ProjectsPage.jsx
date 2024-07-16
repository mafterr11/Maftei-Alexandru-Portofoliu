"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { useTranslations } from "next-intl";
import { Dot } from "@/components/Dot";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const ProjectsPage = () => {
const t = useTranslations("Proiecte");
const projectData = [
  {
    image: "/work/madinytattoo.png",
    category: t("category.presentation"),
    name: "MadinyTattoo",
    description: t("madiny"),
    link: "https://madinytattoo.ro",
    // github: "https://github.com/mafterr11/MadinyTattoo",
  },
  {
    image: "/work/monte-bianco.png",
    category: t("category.presentation"),
    name: "Monte Bianco",
    description: t("monte-bianco"),
    link: "https://www.montebianco.ro/",
    // github: "/",
  },
  {
    image: "/work/tng.png",
    category: t("category.presentation"),
    name: "TNG GRUP",
    description: t("tng"),
    link: "https://tngag.ro",
    // github: "https://github.com/mafterr11/TNG-GRUP",
  },
  {
    image: "/work/mbody.png",
    category: t("category.presentation"),
    name: "MBody Evolution",
    description: t("mbody"),
    link: "https://mbody.vercel.app",
  },
  {
    image: "/work/myriad-AI.png",
    category: t("category.presentation"),
    name: "Myriad-AI",
    description: t("myriad-AI"),
    link: "https://myriad-ai.vercel.app",
    // github: "/",
  },
  {
    image: "/work/dianazu.png",
    category: t("category.presentation"),
    name: "DianaZU",
    description: t("dianazu"),
    link: "https://dianazu.vercel.app",
    // github: "/",
  },
  {
    image: "/work/minionsUnite.png",
    category: t("category.shop"),
    name: "minionsUnite",
    description: t("minionsUnite"),
    link: "https://ecommerce-template-demo.vercel.app",
    // github: "/",
  },
  {
    image: "/work/PIA.jpg",
    category: t("category.others"),
    name: "Multi-Step Form",
    description: t("pia"),
    link: "https://offerfest-pia.vercel.app",
    // github: "/",
  },
  {
    image: "/work/manarh.webp",
    category: t("category.progress"), //Fullstack
    name: "Manarh",
    description: t("manarh"),
    link: "/",
    // github: "/",
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
        {/* tabs */}
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
            {/* tabs content */}
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
