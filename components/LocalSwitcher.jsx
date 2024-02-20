import { useLocale } from "next-intl";
import { useRouter } from "next/navigation"; // Correcting the import path
import { useTransition } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "./ui/label";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const toggleLocale = () => {
    const nextLocale = localeActive === "en" ? "ro" : "en";
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div className="flex items-center justify-center relative">
      <Switch
        as="button"
        disabled={isPending}
        onClick={toggleLocale}
        aria-checked={localeActive === "en"}
        role="switch"
        id="language-switch"
      />
      {localeActive === "en" ? (
        <Label htmlFor="language-switch" className="absolute top-[0.35rem] right-[0.50rem]">
          EN
        </Label>
      ) : (
        <Label htmlFor="language-switch" className="absolute top-[0.35rem] right-[0.50rem]">
          RO
        </Label>
      )}
    </div>
  );
}
