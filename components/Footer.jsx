import { useTranslations } from 'next-intl';
import Socials from './Socials';


const Footer = () => {
  const t = useTranslations("Footer");
  
  return (
    <footer className="py-4 border-t-2 border-accent bg-accent/10">
      <div className="container mx-auto">
        <div className='flex flex-col items-center justify-center gap-y-4'>
          <Socials className="flex gap-x-6 text-[20px]"/>
          <div className='text-center'>
            Copyright &copy; Maftei Alexandru. {t("copyright")}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer