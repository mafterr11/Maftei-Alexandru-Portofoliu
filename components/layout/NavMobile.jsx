"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoCloseOutline, IoHome, IoChatbubblesSharp } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import Socials from "../Socials";
import { useTranslations } from "next-intl";
import Logo from "./Logo";
import LocalSwitcher from "../ui/LocalSwitcher";
import HireMe from "./HireMe";

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const t = useTranslations("Nav");
  const links = [
    {
      path: t("home.link"),
      name: t("home.name"),
      icon: <IoHome />,
    },
    {
      path: t("projects.link"),
      name: t("projects.name"),
      icon: <BiSolidFoodMenu />,
    },
    {
      path: t("contact.link"),
      name: t("contact.name"),
      icon: <IoChatbubblesSharp />,
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);
  return (
    <div className={`${containerStyles}`}>
      {/* Nav trigger btn */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`${isMenuOpen ? "opacity-20" : "opacity-100"} cursor-pointer outline-hidden transition-all duration-500`}
      >
        <RiMenu2Line className="text-4xl" />
      </div>
      <aside
        className={`${
          isMenuOpen ? "right-0 top-0" : "-right-full -top-full"
        } fixed bottom-0 top-0 z-20 w-full transition-all duration-700 ease-in-out`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-0 right-0 top-0 flex h-screen-vh flex-col items-center justify-between border-l-2 border-accent bg-body px-8 pb-4 pt-8 text-black"
        >
          {/* Close btn */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-3 top-2 flex h-8 w-8 cursor-pointer items-center justify-center text-4xl"
          >
            <IoCloseOutline />
          </div>
          {/* Logo */}
          <div onClick={() => setIsMenuOpen(false)} className="mt-3">
            <Logo
              source={"/Myriad Tech header logo telefon.png"}
              size={"h-[3.75rem]"}
            />
          </div>
          {/* Links */}
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className="justify-base hover:text-orange flex items-center gap-x-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className={`${iconStyles}`}>{link.icon}</div>
                  <div className={`${linkStyles}`}>{link.name}</div>
                </Link>
              );
            })}
          </div>

          {/* Bottom part */}
          <div className="flex flex-col items-center justify-center gap-y-5">
            <HireMe />
            <LocalSwitcher />
            <Socials />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
