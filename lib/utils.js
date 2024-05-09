import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
  title = "Myriad - Web Development",
  description = "Hello, my name is Maftei Alexandru. Lets start this journey together and create your dream website!",
  keywords = "web development, frontend, web design, freelancer, bucuresti, romania, small buisiness, maftei alexandru, site prices, myriad tech",
  image = "/logo.webp",
  icons = "/icon.svg",
}={}){
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
    icons,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL),
  };
}
