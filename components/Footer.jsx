import { useTranslations } from "next-intl";
import Socials from "./Socials";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-accent bg-body-light py-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Socials className="flex gap-x-6 text-[20px]" />
          <div className="my-2 flex items-center justify-center gap-x-1 text-center">
            Copyright &copy; {currentYear} -
            <a
              href="https://www.linkedin.com/in/maftei-alexandru/"
              className="hover"
            >
              <span className="text-accent">Myriad Tech</span>
            </a>
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
