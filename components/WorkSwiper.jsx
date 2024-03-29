"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";
 
const WorkSwiper = () => {
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
      link: "https://tng-grup.vercel.app",
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
  return (
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
  );
};

export default WorkSwiper;
