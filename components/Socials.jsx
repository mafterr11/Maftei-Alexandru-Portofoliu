// Link
import Link from "next/link";
// Icons
import { RiInstagramLine, RiGithubLine, RiWhatsappLine } from "react-icons/ri";
import { BiPhone } from "react-icons/bi";

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-[1.7rem] xs:text-2xl lg:text-3xl xl:text-2xl'>
      <Link
        href={"https://github.com/mafterr11"}
        target='blank'
        className='hover:text-accent hover:scale-95 transition-all duration-300'
      >
        <RiGithubLine />
      </Link>
      <a
        href='tel:+40720425840'
        target='blank'
        className='hover:text-accent hover:scale-95 transition-all duration-300'
      >
        <BiPhone />
      </a>
      <a
        href='http://wa.me/+40720425840'
        target='blank'
        className='hover:text-accent hover:scale-95 transition-all duration-300'
      >
        <RiWhatsappLine />
      </a>
      <Link
        href={"https://www.instagram.com/alexandru.maftei95/"}
        target='blank'
        className='hover:text-accent hover:scale-95 transition-all duration-300'
      >
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;