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
      className={`group bg-body hover:bg-accent/5 relative h-[550px] overflow-hidden border-2 border-black/15 shadow-md hover:cursor-pointer ${currentRoute === "/en/projects" || currentRoute === "/ro/proiecte" ? "hover:-translate-y-2 hover:scale-[1.01] xl:w-[400px] 2xl:w-[400px]" : "xl:w-[380px] 2xl:w-[380px]"} transition-all duration-500 ease-in-out`}
      onClick={() => handleClick()}
    >
      <CardHeader className="p-0">
        {/* Image */}
        <div className="bg-accent/15 bg-work relative flex h-[250px] w-full items-center justify-center bg-[110%] bg-no-repeat">
          {/* 1920 x 1079 pozele de proiect */}
          <Image
            className="absolute bottom-0 h-[200px] w-[340px] rounded-t-md object-cover shadow-2xl"
            src={project.image}
            width={500}
            height={500}
            alt={project.name}
            loading="lazy"
          />
          {/* btns */}
          <div className="absolute top-2 right-2 flex flex-col gap-y-4">
            <Link
              href={project.link}
              target="_"
              className="hover:bg-accent/70 flex h-[35px] w-[35px] items-center justify-center rounded-md bg-black/85 transition-all duration-500 group-hover:scale-100 group-hover:rotate-[360deg] group-hover:opacity-100 max-xl:transform-none max-lg:scale-100 max-lg:opacity-100 xl:scale-0 xl:opacity-0"
            >
              <span className="sr-only">Link catre acest proiect</span>
              <Link2Icon className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="px-4 py-3 max-md:text-center">
        <Badge className="bg-accent absolute top-3 left-5 mb-2 text-white uppercase">
          {project.category}
        </Badge>
        <h4 className="mb-4">{project.name}</h4>
        <p className="text-lg leading-7">{project.description}</p>
      </div>
      <div className="bg-accent absolute inset-x-0 bottom-4 mx-auto flex w-[50%] xl:scale-0 items-center justify-center gap-x-1 rounded-md px-2 text-[16px] max-xl:text-[14px] font-medium text-white xl:opacity-0 transition-all duration-700 ease-in-out xl:group-hover:scale-100 xl:group-hover:opacity-100">
        {t("page.demo")} <ArrowRight />
      </div>
    </Card>
  );
};

export default ProjectCard;
