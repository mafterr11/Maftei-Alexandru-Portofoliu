import { constructMetadata } from "@/lib/utils";
import ProjectsPage from "./ProjectsPage";

export const metadata = constructMetadata({
  title: "Proiecte Myriad Tech",
  description:
    "Descoperiți proiectele noastre de dezvoltare web realizate la Myriad Tech. Explorați portofoliul nostru pentru a vedea exemple de site-uri web personalizate și soluții e-commerce eficiente.",
  keywords:
    "proiecte Myriad Tech, portofoliu dezvoltare web, exemple web design, Myriad Tech lucrări, freelancer bucuresti, romania, maftei alexandru",
});

const Projects = () => {
  return <ProjectsPage />;
};

export default Projects;
