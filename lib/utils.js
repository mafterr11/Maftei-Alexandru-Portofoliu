import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Myriad - Web Development",
  description = "Alege Myriad Tech pentru servicii personalizate de web development, transformând viziunea afacerii tale în realitate prin soluții digitale inovatoare.",
  keywords = "dezvoltare web, design web personalizat, dezvoltator web freelancer, site-uri responsive, solutii e-commerce, Myriad Tech, design web, freelancer, bucuresti, romania, afacere mica, maftei alexandru, preturi site, super pret",
  image = "/logo.webp",
  icons = "/icon.svg",
} = {}) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      keywords,
      images: [image],
      creator: "@myriad-tech",
    },
    facebook: {
      card: "summary_large_image",
      title,
      description,
      keywords,
      images: [image],
      creator: "@myriad-tech",
    },
    icons,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL),
  };
}
