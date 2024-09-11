"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../ui/LocalSwitcher";
import { Button } from "../ui/button";
import { RiPhoneLine, RiWhatsappLine } from "react-icons/ri";

const Nav = ({ containerStyles, linkStyles }) => {
  const t = useTranslations("Nav");

  const links = [
    {
      path: t("home.link"),
      name: t("home.name"),
    },
    {
      path: t("projects.link"),
      name: t("projects.name"),
    },
    {
      path: t("contact.link"),
      name: t("contact.name"),
    },
  ];
  const currentRoute = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      <div className="flex items-center justify-center gap-x-8">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.path}
              className={`${linkStyles} ${
                currentRoute === link.path
                  ? "text-base capitalize underline decoration-accent decoration-2 underline-offset-[0.5rem] hover:scale-[0.97]"
                  : "hover text-base capitalize hover:scale-[0.97]"
              }`}
            >
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm">{t("specialBtn.name")}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-3xl">
              {t("specialBtn.title")}
            </DialogTitle>
          </DialogHeader>
          <p className="mb-6 text-xl">{t("specialBtn.subtext")}</p>
          <div className="flex max-md:flex-col max-md:gap-y-4 items-center justify-center gap-x-4">
            <Button size="sm" className="relative w-full">
              <a href="http://wa.me/+40720425840" target="blank">
                <RiWhatsappLine size={22} className="absolute left-4" />{" "}
                {t("specialBtn.wapp")}
              </a>
            </Button>
            <Button size="sm" className="relative w-full">
              <a href="tel:+40720425840" target="blank">
                <RiPhoneLine size={22} className="absolute left-4" />{" "}
                {t("specialBtn.tel")}
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <LocalSwitcher />
    </nav>
  );
};

export default Nav;
