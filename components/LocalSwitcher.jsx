import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { Switch } from "@/components/ui/switch"; // Ensure this is the correct import path
import { Label } from "./ui/label";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const pathname = usePathname();
  const actualPath = `/${pathname.split('/').filter(Boolean).slice(1).join('/')}`;

  const toggleLocale = () => {
    const nextLocale = localeActive === "en" ? "ro" : "en";
    startTransition(() => {
      router.replace(`/${nextLocale}${actualPath}`);
    });
  };

  // Adjusted to reflect a proper switch behavior
  return (
    <div className="flex items-center justify-center relative">
      <Switch
        checked={localeActive === "en"} // Assuming "en" is the "checked" state
        onCheckedChange={toggleLocale} // This prop handles change events
        disabled={isPending}
        id="language-switch"
        aria-label="Language Switch" // Providing an accessible name
      />
      <Label htmlFor="language-switch" className={`absolute top-[0.35rem] cursor-pointer ${localeActive === "en" ? "left-[0.50rem]" : "right-[0.50rem]"}`}>
        {localeActive.toUpperCase()}
      </Label>
    </div>
  );
}
