import { rawData } from "./rawData";

export const data = (t) => {
  return rawData.map((project) => ({
    ...project,
    category: t(project.categoryKey),
    description: t(project.descriptionKey),
  }));
};
