"use client";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-body py-3 text-black fixed top-0 right-0 left-0 w-full shadow-md z-50 transition-all duration-200 border-b-[2px] border-accent">
      <div>
        <div className="flex items-center justify-between md:max-lg:justify-between px-10 md:px-12 xl:gap-x-32">
          <Logo />
          <Nav
            containerStyles="hidden xl:flex items-center gap-x-28"
            linkStyles="text-xl"
          />
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
