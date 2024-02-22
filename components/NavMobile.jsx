"use client";
import Link from "next/link";
import { useState } from "react";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoCloseOutline, IoHome, IoChatbubblesSharp } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import Socials from "./Socials";
import { useTranslations } from "next-intl";
import LocalSwitcher from "./LocalSwitcher";
import Logo from "./Logo";

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
  const [isServiciiOpen, setIsServiciiOpen] = useState(false);

  // const toggleServicii = () => {
  //   setIsServiciiOpen((prev) => !prev);
  // };
  // const closeMenuAndNavigate = (path) => {
  //   setIsMenuOpen(false);
  //   setIsServiciiOpen(false);
  //   window.location.href = path;
  // };

  return (
    <div className={`${containerStyles}`}>
      {/* nav trigger btn */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='cursor-pointer outline-none'
      >
        <RiMenu2Line className='text-4xl transition-all duration-200' />
      </div>
      <aside
        className={`${
          isMenuOpen ? "right-0" : "-right-full"
        } bg-body fixed z-20 h-full px-8 pt-8 pb-4 top-0 bottom-0 transition-all duration-500 border-accent border-2`}
      >
        <div className='flex flex-col items-center justify-between h-full text-black'>
          {/* close btn */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className='cursor-pointer text-4xl  absolute w-8 h-8 right-3 top-2 flex items-center justify-center'
          >
            <IoCloseOutline />
          </div>
          {/* logo */}
          <div onClick={() => setIsMenuOpen(false)}>
            <Logo source={"/header-mobile.png"} size={"h-14"} />
          </div>
          {/* links */}
          <div className='flex flex-col gap-y-8'>
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className='flex items-center gap-x-3 justify-base hover:text-orange'
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className={`${iconStyles}`}>{link.icon}</div>
                  <div className={`${linkStyles}`}>{link.name}</div>
                </Link>
              );
            })}
          </div>
          {/* bottom part */}
          <div className='flex flex-col items-center justify-center gap-y-5'>
            <LocalSwitcher />
            <Socials />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
