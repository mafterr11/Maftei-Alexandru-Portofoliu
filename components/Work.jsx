"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

const projectData = [
  {
    image: "/logo.webp",
    category: "NextJS 14",
    name: "MadinyTattoo",
    description: "A presentation website for my tattoo artist. Check her out!",
    link: "https://madinytattoo.ro",
    github: "https://github.com/mafterr11/MadinyTattoo",
  },
  {
    image: "/logo.webp",
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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">
            <div className="relative text-accent text-[65px]">
              &#x2022;{" "}
              <span className=" h-4 w-4 border-2 rounded-full border-black-heavy/70 absolute top-2 right-0"></span>
            </div>
            Latest Projects
          </h2>
          <p className="subtitle mb-8">
            Highlighting my latest achievements and creative ventures.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[900px] xl:absolute right-16 top-0">
          <Swiper
            className="h-[520px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only first 4 projects */}
            {projectData.slice(0.4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
