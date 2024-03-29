import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="bg-body border-2 group overflow-hidden relative border-black/15 h-[480px]">
      <CardHeader className="p-0">
        {/* Image */}
        <div className="relative bg-work bg-[110%] bg-no-repeat bg-accent/15 w-full h-[270px] flex items-center justify-center">
          <Image
            className="absolute bottom-0 shadow-2xl h-[200px] w-[280px] rounded-t-[15px]"
            src={project.image}
            width={276}
            height={255}
            alt="Alexandru Maftei latest projects"
            priority
          />
          {/* btns */}
          <div className="flex flex-col gap-y-4 absolute top-4 right-4">
            <Link
              href={project.link}
              className="hover:bg-accent/90 w-[45px] h-[45px] rounded-full flex justify-center items-center xl:scale-0 xl:opacity-0 max-lg:opacity-100 max-lg:scale-100 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-black"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              className="hover:bg-accent/90 w-[45px] h-[45px] rounded-full flex justify-center items-center xl:scale-0 xl:opacity-0 max-lg:opacity-100 max-lg:scale-100 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-black"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="bg-accent text-white uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="mb-1">{project.name}</h4>
        <p className="text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
