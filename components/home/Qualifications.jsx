import Image from "next/image";
import React from "react";

const qualifications = [
  {
    title: "NextJS",
    icon: "/qualifications/nextjs.svg",
    description: "waefawfawefwaf",
  },
  {
    title: "TailwindCSS",
    icon: "/qualifications/tailwind.svg",
    description: "waefawfawefwaf",
  },
  {
    title: "Typescript",
    icon: "/qualifications/ts.svg",
    description: "waefawfawefwaf",
  },
  {
    title: "Prisma",
    icon: "/qualifications/prisma.svg",
    description: "waefawfawefwaf",
  },
  {
    title: "Framer Motion",
    icon: "/qualifications/framer.svg",
    description: "waefawfawefwaf",
  },
];

const Qualifications = () => {
  return (
    <div className="grid grid-cols-2 gap-3 mb-8 max-md:grid-cols-1">
      {qualifications.map((qualification, index) => (
        <div key={index} className="flex items-center gap-3 border p-2 shadow-lg">
          <div className="relative h-12 w-12">
            <Image
              src={qualification.icon}
              className="object-contain"
              fill
              alt={`${qualification.title} image`}
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="font-bold">{qualification.title}</div>
            <div>{qualification.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Qualifications;
