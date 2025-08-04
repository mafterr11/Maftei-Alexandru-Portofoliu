export const data = (t) => {
  return rawData.map((project) => ({
    ...project,
    category: t(project.categoryKey),
    description: t(project.descriptionKey),
  }));
};


const rawData = [
  {
    image: "/work/madinytattoo.png",
    categoryKey: "category.presentation",
    name: "MadinyTattoo",
    descriptionKey: "madiny",
    link: "https://madinytattoo.ro",
    // github: "https://github.com/mafterr11/MadinyTattoo",
  },
  {
    image: "/work/monte-bianco.png",
    categoryKey: "category.presentation",
    name: "Monte Bianco",
    descriptionKey: "monte-bianco",
    link: "https://www.montebianco.ro/",
    // github: "/",
  },
  {
    image: "/work/tng.png",
    categoryKey: "category.presentation",
    name: "TNG GRUP",
    descriptionKey: "tng",
    link: "https://tngag.ro",
    // github: "https://github.com/mafterr11/TNG-GRUP",
  },
  {
    image: "/work/bavagaz.png",
    categoryKey: "category.presentation",
    name: "BAVA GAZ CONSTRUCT",
    descriptionKey: "bavagaz",
    link: "https://www.bavagazconstruct.ro",
    // github: "https://github.com/mafterr11/TNG-GRUP",
  },
  {
    image: "/work/mbody.png",
    categoryKey: "category.presentation",
    name: "MBody Evolution",
    descriptionKey: "mbody",
    link: "https://mbody.vercel.app",
  },
  {
    image: "/work/myriad-AI.png",
    categoryKey: "category.presentation",
    name: "Myriad-AI",
    descriptionKey: "myriad-AI",
    link: "https://myriad-ai.vercel.app",
    // github: "/",
  },
  {
    image: "/work/dianazu.png",
    categoryKey: "category.presentation",
    name: "DianaZU",
    descriptionKey: "dianazu",
    link: "https://dianazu.vercel.app",
    // github: "/",
  },
  {
    image: "/work/minionsUnite.png",
    categoryKey: "category.shop",
    name: "minionsUnite",
    descriptionKey: "minionsUnite",
    link: "https://ecommerce-template-demo.vercel.app",
    // github: "/",
  },
  {
    image: "/work/Chillink.png",
    categoryKey: "category.wordpress",
    name: "Chilli Ink Tattoo",
    descriptionKey: "chilli-ink",
    link: "https://chilli-ink.ro",
    // github: "/",
  },
  {
    image: "/work/PIA.jpg",
    categoryKey: "category.others",
    name: "Multi-Step Form",
    descriptionKey: "pia",
    link: "https://offerfest-pia.vercel.app",
    // github: "/",
  },

];
