import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import { ArrowRight, Github, Link2Icon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const ProjectCard = ({ project }) => {
  const t = useTranslations("Proiecte");
  const currentRoute = usePathname();

  const handleClick = () => {
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      className={`group relative h-[650px] overflow-hidden border-2 border-black/15 bg-body shadow-md hover:cursor-pointer hover:bg-accent/5 ${currentRoute === "/en/projects" || currentRoute === "/ro/proiecte" ? "hover:-translate-y-2 hover:scale-[1.01] xl:w-[400px] 2xl:w-[400px]" : ""} transition-all duration-500 ease-in-out`}
      onClick={() => handleClick()}
    >
      <CardHeader className="p-0">
        {/* Image */}
        <div className="relative flex h-[250px] w-full items-center justify-center bg-accent/15 bg-work bg-[110%] bg-no-repeat">
          {/* 1920 x 1079 pozele de proiect */}
          <Image
            className="absolute bottom-0 h-[180px] w-[320px] rounded-t-md object-contain shadow-2xl"
            src={project.image}
            width={500}
            height={500}
            alt={project.name}
            loading="lazy"
          />
          {/* btns */}
          <div className="absolute right-2 top-4 flex flex-col gap-y-4">
            <Link
              href={project.link}
              target="_"
              className="flex h-[45px] w-[45px] items-center justify-center rounded-md bg-black/85 transition-all duration-500 hover:bg-accent/70 group-hover:rotate-[360deg] group-hover:scale-100 group-hover:opacity-100 max-xl:transform-none max-lg:scale-100 max-lg:opacity-100 xl:scale-0 xl:opacity-0"
            >
              <span className="sr-only">Link catre acest proiect</span>
              <Link2Icon className="text-white" />
            </Link>
            {/* <Link
              href={project.github}
              className="flex h-[45px] w-[45px] items-center justify-center rounded-md bg-black/90 transition-all duration-300 hover:bg-accent/70 group-hover:scale-100 group-hover:opacity-100 max-lg:scale-100 max-lg:opacity-100 xl:scale-0 xl:opacity-0"
            >
              <Github className="text-white" />
            </Link> */}
          </div>
        </div>
      </CardHeader>
      <div className="px-4 py-3 max-md:text-center">
        <Badge className="absolute left-5 top-4 mb-2 bg-accent text-sm font-medium uppercase text-white">
          {project.category}
        </Badge>
        <h4 className="mb-4">{project.name}</h4>
        <p className="text-lg">{project.description}</p>
      </div>
      <div className="absolute bottom-4 right-24 flex scale-0 items-center justify-center gap-x-1 rounded-md bg-accent px-2 text-[16px] font-medium text-white opacity-0 transition-all duration-700 ease-in-out group-hover:scale-100 group-hover:opacity-100">
        {t("page.demo")} <ArrowRight />
      </div>
    </Card>
  );
};

export default ProjectCard;
