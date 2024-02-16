import Link from "next/link";
import { Button } from "@/components/ui/button";

const Cta = () => {
  return <section className="py-24 bg-accent/10 mb-24">
    <div  className="container mx-auto">
        <div className="flex flex-col items-center">
            <h2 className="max-w-xl text-center mb-8">
                Prepared to turn your dreams into reality? Im always here to help
            </h2>
            <Link href="/contact">
                <Button className="text-white">Contact Me</Button>
            </Link>
        </div>
    </div>
  </section>;
};

export default Cta;
