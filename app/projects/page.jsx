"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/madinytattoo.jpg",
    category: "NextJS 14",
    name: "MadinyTattoo",
    description: "A presentation website for my tattoo artist. Check her out!",
    link: "https://madinytattoo.ro",
    github: "https://github.com/mafterr11/MadinyTattoo",
  },
  {
    image: "/work/tng.JPG",
    category: "NextJS 14",
    name: "TNG GRUP",
    description: "A presentation website for a construction company.",
    link: "https://tng-grup.vercel.app",
    github: "https://github.com/mafterr11/TNG-GRUP",
  },
  {
    image: "/logo.webp",
    category: "Fullstack",
    name: "Manarh",
    description:
      "A fullstack website for an architecture firm, custom auth etc!",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((project) => {
    // if category  is all projects return all projects, else filter
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-40">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          <div className="relative text-accent text-[65px]">
            &#x2022;{" "}
            <span className=" h-4 w-4 border-2 rounded-full border-black-heavy/70 absolute top-2 right-0"></span>
          </div>
          My Projects
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
