import { useTranslations } from "next-intl";
import Socials from "../Socials";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-accent bg-grainy py-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center xl:flex-row-reverse xl:justify-between max-xl:gap-y-2">
          <Socials className="flex gap-x-6 text-[20px]" />
          <div className="my-2 flex flex-col xl:flex-row items-center justify-center gap-x-1 text-center">
            <a
              href="https://www.linkedin.com/in/maftei-alexandru/"
              className="hover"
              target="_blank"
            >
              <span className="text-accent hover:font-medium">Myriad Tech</span>
            </a>
            &copy; {currentYear} - {t("rights")}
          </div>
          <div className="text-center font-semibold underline">
            <Link href={t("gdpr")}>{t("name")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;