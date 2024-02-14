"use client"
import { usePathname } from 'next/navigation';
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const links = [
  {
    path: "/",
    name: "acasă",
  },
  {
    path: "/portofoliu",
    name: "portofoliu",
  },
  {
    path: "/contact",
    name: "contact",
  },
];


const Nav = ({ containerStyles, linkStyles }) => {
  const currentRoute = usePathname();
  return (
    <nav className={`${containerStyles} flex items-center justify-center`}>
      {links.map((link, index) => {
        if (link.path === "/servicii") {
          return (
            <NavigationMenu key={index}>
              <NavigationMenuList>
                <NavigationMenuItem as='div' className={`${linkStyles}`}>
                  <NavigationMenuTrigger as='span'>
                    <Link href='/servicii' className={`${(currentRoute === link.path) ? 'underline decoration-accent decoration-2 underline-offset-[0.5rem] capitalize text-base hover:scale-[0.97]' : 'capitalize text-base hover hover:scale-[0.97]'}`}>
                      <span>{link.name}</span>
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent as='div' className='py-2'>
                    {dropdownLinks.map((dropdownLink, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={dropdownLink.path}
                        passHref
                        legacyBehavior
                      >
                        <NavigationMenuLink>
                          <div className='my-6 w-[21rem] text-center flex gap-x-[4px]'>
                            <span className='text-accent'>&#9679;</span>
                            <div className='hover'>
                              <span>{dropdownLink.name}</span>
                            </div>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          );
        } else {
          return (
            <Link key={index} href={link.path} className={`${linkStyles} ${(currentRoute === link.path) ? 'underline decoration-accent decoration-2 underline-offset-[0.5rem] capitalize text-base hover:scale-[0.97]' : 'capitalize text-base hover hover:scale-[0.97]'}`}>
              <span>{link.name}</span>
            </Link>
          );
        }
      })}
    </nav>
  );
};

export default Nav;
