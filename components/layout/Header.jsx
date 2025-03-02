import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="border-accent/90 bg-body fixed top-5 right-0 left-0 z-40 mx-auto w-[70%] border-b-2 py-3 text-black shadow-md transition-all duration-200 max-xl:top-0 max-xl:w-full xl:rounded-md xl:border-2">
      <div>
        <div className="flex items-center justify-between px-7 py-2 max-md:py-1 md:px-12 md:max-lg:justify-between xl:gap-x-32">
          <Logo source={"/Myriad Tech header logo.png"} size={"h-7"} />
          <Nav
            containerStyles="hidden xl:flex items-center gap-x-16"
            linkStyles="text-base uppercase"
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
