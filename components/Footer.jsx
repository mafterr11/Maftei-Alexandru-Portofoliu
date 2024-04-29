import { useTranslations } from "next-intl";
import Socials from "./Socials";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear(); 
  return (
    <footer className='py-4 border-t-2 border-accent bg-body-light'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center'>
          <Socials className='flex gap-x-6 text-[20px]' />
          <div className='text-center my-2'>
            Copyright &copy; <a href="https://www.linkedin.com/in/maftei-alexandru/" className="hover">{currentYear} <span className="text-accent">Maftei Alexandru.</span></a>
          </div>
          <div className='text-center font-semibold underline'>
            <Link href={t("gdpr")}>{t("name")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
