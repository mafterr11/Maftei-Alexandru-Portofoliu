import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "./label";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const pathname = usePathname();
  const actualPath = `/${pathname.split("/").filter(Boolean).slice(1).join("/")}`;

  const toggleLocale = () => {
    const nextLocale = localeActive === "en" ? "ro" : "en";
    startTransition(() => {
      router.replace(`/${nextLocale}${actualPath}`);
    });
  };
  return (
    <div className="relative flex items-center justify-center">
      <Switch
        checked={localeActive === "en"}
        onCheckedChange={toggleLocale}
        disabled={isPending}
        id="language-switch"
        aria-label="Language Switch"
      />
      <Label
        htmlFor="language-switch"
        className={`absolute top-[1px] cursor-pointer text-[15px] ${localeActive === "en" ? "left-[0.10rem]" : "right-[0.30rem]"}`}
      >
        {localeActive.toUpperCase()}
      </Label>
    </div>
  );
}
