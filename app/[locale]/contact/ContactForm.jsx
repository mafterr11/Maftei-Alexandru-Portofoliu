"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  PhoneIcon,
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useTranslations } from "next-intl";

// ⬇️ Replace the package hook with our custom one
import { useRecaptchaV3 } from "@/app/GoogleCaptchaWrapper";

const formSchema = z.object({
  nume: z.string().min(3, { message: "Enter your full name" }),
  email: z.string().email(),
  telefon: z.string().min(10, { message: "Enter a valid phone number" }),
  mesaj: z
    .string()
    .min(10, { message: "Min 10 characters" })
    .max(200, { message: "Max 200 characters." }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the GDPR",
  }),
});

export default function SolicitatiOfertaForm() {
  const { toast } = useToast();
  const t = useTranslations("Contact");

  // ⬇️ New: from our wrapper
  const { ready, getToken } = useRecaptchaV3();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nume: "",
      email: "",
      telefon: "",
      mesaj: "",
      acceptTerms: false,
    },
  });

  // ⬇️ Replaces your captchaSubmit()
  const fetchCaptchaToken = async () => {
    if (!ready) throw new Error("ReCAPTCHA not ready");
    // keep your action name for server-side checks if you want
    const token = await getToken("InquirySubmit");

    // Verify on server (route from earlier example)
    const verifyRes = await fetch("/api/recaptchaSubmit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, action: "InquirySubmit" }),
    });

    const verifyData = await verifyRes.json();
    if (!verifyRes.ok || !verifyData.ok) {
      throw new Error("Failed to verify reCAPTCHA");
    }
    return token;
  };

  const onSubmit = async (formData) => {
    try {
      const gRecaptchaToken = await fetchCaptchaToken();

      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, gRecaptchaToken }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Network response was not ok");
      }

      toast({
        title: "Mulțumim pentru interesul acordat!",
        description: "Vă vom contacta cât mai curând!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Ceva nu a mers bine!",
        description: error?.message || "Vă rugăm să încercați mai târziu!",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        className="xs:space-y-6 mt-4 space-y-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* Name */}
        <FormField
          control={form.control}
          name="nume"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl >
                <div>
                  <Label>{t("form.name.label")}</Label>
                  <div className="group relative flex items-center">
                    <Input
                      placeholder={t("form.name.input")}
                      type="text"
                      id="nume"
                      autoComplete="name"
                      {...field}
                    />
                    <User className="absolute right-6" size={20} />
                    <FormMessage className="text-red absolute top-full left-0 -mt-0.5 text-sm" />
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl >
                <div>
                  <Label>{t("form.email.label")}</Label>
                  <div className="relative flex items-center">
                    <Input
                      placeholder={t("form.email.input")}
                      type="email"
                      id="email"
                      autoComplete="email"
                      {...field}
                    />
                    <MailIcon className="absolute right-6" size={20} />
                    <FormMessage className="text-red absolute top-full left-0 -mt-0.5 text-sm" />
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="telefon"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl >
                <div>
                  <Label>{t("form.tel.label")}</Label>
                  <div className="relative flex items-center">
                    <Input
                      placeholder={t("form.tel.input")}
                      type="tel"
                      id="telefon"
                      autoComplete="tel"
                      {...field}
                    />
                    <PhoneIcon className="absolute top-4 right-6" size={20} />
                    <FormMessage className="text-red absolute top-full left-0 -mt-0.5 text-sm" />
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="mesaj"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl >
                <div>
                  <Label>{t("form.msg.label")}</Label>
                  <div className="relative flex items-center">
                    <Textarea
                      placeholder={t("form.msg.input")}
                      id="mesaj"
                      {...field}
                    />
                    <MessageSquare className="absolute top-4 right-6" size={20} />
                    <FormMessage className="text-red absolute top-full left-0 -mt-0.5 text-sm" />
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        {/* GDPR */}
        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl >
                <label className="flex items-center space-x-3 pl-1">
                  <div>
                    <Input
                      type="checkbox"
                      id="acceptTerms"
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                      className="h-[15px] w-[15px]"
                    />
                    <FormMessage className="text-red absolute top-full left-0 -mt-0.5 text-sm" />
                    <span className="text-[15px]">{t("form.gdpr")}</span>
                  </div>
                </label>
              </FormControl>
            </FormItem>
          )}
        />

        <div className="recaptcha-branding flex flex-col gap-y-4 max-xl:pt-4 md:flex-row md:gap-x-4">
          <Button
            type="submit"
            className="flex max-w-[166px] items-center gap-x-1 rounded-[8px]"
            disabled={!ready}
            title={!ready ? "reCAPTCHA loading…" : undefined}
          >
            {t("form.btn")}
            <ArrowRightIcon size={20} />
          </Button>

          <p className="leading-normal">
            {t("form.reCaptcha.1")}{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-accent underline"
            >
              {t("form.reCaptcha.2")}
            </a>{" "}
            {t("form.reCaptcha.3")}{" "}
            <a
              href="https://policies.google.com/terms"
              className="text-accent underline"
            >
              {t("form.reCaptcha.4")}
            </a>{" "}
            {t("form.reCaptcha.5")}
          </p>
        </div>
      </form>
    </Form>
  );
}
