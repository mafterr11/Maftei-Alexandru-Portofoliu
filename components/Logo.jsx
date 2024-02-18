import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="flex items-center justify-center gap-x-4">
        <h3>
          <span className="text-accent">Maf</span>tei Alexandru
        </h3>
      </Link>
    </div>
  );
};

export default Logo;
