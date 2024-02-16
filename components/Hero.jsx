import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-12 mb-24 xl:py-24 xl:pt-56 bg-accent/10">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8 relative">
          {/* text */}
          <div className="flex flex-col max-w-[600px] mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-accent tracking-[4px]">
              Web Developer
            </div>
            <h1 className="mb-4">Hello, my name is Maftei Alexandru</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I'm a Frontend Developer skilled in modern web development and
              Java Spring, adept at creating responsive websites and ensuring
              seamless integration between frontend and backend.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Link
                href={"/Alexandru Maftei CV.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                locale={false}
                download
              >
                <Button className="gap-x-2" variant="secondary">
                  Download CV
                  <Download size={18} />
                </Button>
              </Link>
            </div>
          </div>
          {/* image */}
          <div className="hidden xl:flex w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
            <Image
              src="/companyLogo.webp"
              width={800}
              height={800}
              alt="Alexandru Maftei profile picture"
              className="object-cover rounded-full -rotate-3"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
