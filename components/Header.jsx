"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.webp";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header className="bg-black-heavy py-3 text-white fixed top-0 right-0 left-0 w-full z-50 transition-all duration-200 border-b-[2px] border-accent">
      <div>
        <div className="flex items-center justify-between md:max-lg:justify-between px-10 md:px-32 xl:gap-x-32">
          {/* logo */}
          <div>
            <Link href="/" className="flex items-center justify-center gap-x-4">
              <h3>
                <span className="text-accent">Maftei</span> Alexandru
              </h3>
            </Link>
          </div>
          {/* nav */}
          <Nav containerStyles="hidden xl:flex gap-x-12" linkStyles="" />
          {/* mobile nav */}
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl text-accent"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
