import Image from "next/image";
import Link from "next/link";

const Logo = ({ source, size }) => {
  return (
    <Link href="/">
      <div className={`${size} w-auto`}>
        <Image
          src={source}
          width={250}
          height={250}
          className={`${size} w-auto`}
          alt={source}
          priority={true}
        />
      </div>
    </Link>
  );
};

export default Logo;
