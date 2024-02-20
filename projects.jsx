import { useTranslations } from "next-intl";

const t = useTranslations("Projects");

export const projectData = [
    {
      image: "/work/madinytattoo.webp",
      category: "NextJS 14",
      name: "MadinyTattoo",
      description: "A presentation website for my tattoo artist. Check her out!",
      link: "https://madinytattoo.ro",
      github: "https://github.com/mafterr11/MadinyTattoo",
    },
    {
      image: "/work/tng.webp",
      category: "NextJS 14",
      name: "TNG GRUP",
      description: "A presentation website for a construction company.",
      link: "https://tng-grup.vercel.app",
      github: "https://github.com/mafterr11/TNG-GRUP",
    },
    {
      image: "/work/manarh.webp",
      category: "Fullstack",
      name: "Manarh",
      description:
        "A fullstack website for an architecture firm, custom auth etc!",
      link: "/",
      github: "/",
    },
  ];