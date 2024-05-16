"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

const WorkSwiper = () => {
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
      image: "/work/tng.png",
      category: t("category.presentation"),
      name: "TNG GRUP",
      description: t("tng"),
      link: "https://tngag.ro",
      // github: "https://github.com/mafterr11/TNG-GRUP",
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
      image: "/work/electroniCobra.png",
      category: "ecommerce",
      name: "electroniCobra",
      description: t("electroniCobra"),
      link: "https://ecommerce-template-demo.vercel.app",
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
    {
      image: "/work/monte-bianco.png",
      category: t("category.progress"),
      name: "Monte Bianco",
      description: t("monte-bianco"),
      link: "https://montebianco.vercel.app",
      // github: "/",
    },
  ];
  return (
    <Swiper
      className="h-[660px]"
      slidesPerView={1}
      slidesPerGroup={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
      }}
      spaceBetween={30}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
      }}
    >
      {/* show only first 4 projects */}
      {projectData.map((project, index) => {
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
