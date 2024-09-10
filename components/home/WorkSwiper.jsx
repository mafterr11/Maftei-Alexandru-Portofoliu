"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";
import { data } from "@/data";

const WorkSwiper = () => {
  const t = useTranslations("Proiecte");
  const projectData = data(t);
  return (
    <Swiper
      className="h-[690px]"
      slidesPerView={1}
      slidesPerGroup={1}
      breakpoints={{
        700: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
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
