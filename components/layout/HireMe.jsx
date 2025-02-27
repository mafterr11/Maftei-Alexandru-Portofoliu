import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { RiPhoneLine, RiWhatsappLine } from "react-icons/ri";

const HireMe = () => {
  const t = useTranslations("Nav");
  return (
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
        <div className="flex items-center justify-center gap-x-4 max-md:flex-col max-md:gap-y-4">
          <Button size="sm" className="relative w-full">
            <a href="http://wa.me/+40720425840" target="blank">
              <RiWhatsappLine size={22} className="absolute left-4" />{" "}
              {t("specialBtn.wapp")}
            </a>
          </Button>
          <Button
            size="sm"
            className="border-accent relative w-full border-2 bg-transparent text-black hover:bg-transparent"
          >
            <a href="tel:+40720425840" target="blank">
              <RiPhoneLine size={22} className="absolute left-4" />{" "}
              {t("specialBtn.tel")}
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HireMe;
