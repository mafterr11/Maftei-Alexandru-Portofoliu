"use client";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b-[2px] border-accent/60 bg-body py-3 text-black shadow-md transition-all duration-200">
      <div>
        <div className="flex items-center justify-between px-7 md:px-12 md:max-lg:justify-between xl:gap-x-32">
          <Logo source={"/header-pc2.png"} size={"h-7"} />
          <Nav
            containerStyles="hidden xl:flex items-center gap-x-16"
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
