import Image from "next/image";
import Link from "next/link";

const Logo = ({ source, size }) => {
  return (
    <Link href="/">
      <div className={`${size} w-auto`}>
        <Image
          src={source}
          width={800}
          height={800}
          className={`${size} w-auto`}
          alt="Myriad Tech logo"
          priority={true}
        />
      </div>
    </Link>
  );
};

export default Logo;
