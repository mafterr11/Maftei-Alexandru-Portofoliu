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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
// RECAPTCHA
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import { useTranslations } from "next-intl";
import { Label } from "./ui/label";

const formSchema = z.object({
  nume: z.string().min(3, {
    message: "Enter your full name",
  }),
  email: z.string().email(),
  telefon: z.string().min(10, {
    message: "Enter a valid phone number",
  }),
  mesaj: z
    .string()
    .min(10, {
      message: "Min 10 characters",
    })
    .max(200, {
      message: "Max 200 characters.",
    }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the GDPR",
  }),
});

export default function SolicitatiOfertaForm() {
  // RECAPTCHA
  const { executeRecaptcha } = useGoogleReCaptcha();

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
  const { toast } = useToast();
  const t = useTranslations("Contact");

  // RECAPTCHA
  const captchaSubmit = async () => {
    if (!executeRecaptcha) {
      console.error("ReCAPTCHA not ready");
      throw new Error("ReCAPTCHA not ready");
    }
    const gRecaptchaToken = await executeRecaptcha("InquirySubmit");
    // Verify the token on the backend in this endpoint
    const response = await axios.post("/api/recaptchaSubmit", {
      gRecaptchaToken,
    });

    if (response.data.success) {
      // Return the token if verification is successful
      return gRecaptchaToken;
    } else {
      // Throw an error if verification fails
      throw new Error("Failed to verify reCAPTCHA");
    }
  };

  const onSubmit = async (formData) => {
    try {
      // Await the captchaSubmit function to complete and get the token
      const gRecaptchaToken = await captchaSubmit();

      // Check if the gRecaptchaToken is not undefined or null before proceeding
      if (!gRecaptchaToken) {
        // Handle the case where gRecaptchaToken is not received properly
        toast({
          title: "Captcha verification failed",
          description: "Please complete the captcha to submit the form.",
        });
        return; // Exit the function as we don't have a valid token
      }

      // Include the reCAPTCHA token in your submission data
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, gRecaptchaToken }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.success) {
        toast({
          title: "Mulțumim pentru interesul acordat!",
          description: "Vă vom contacta cât mai curând!",
        });
        form.reset(); // This will reset the form to defaultValues specified in useForm
      } else {
        toast({
          title: "Ceva nu a mers bine!",
          description: data.message || "Vă rugăm să încercați mai târziu!",
        });
      }
    } catch (error) {
      toast({
        title: "Ceva nu a mers bine!",
        description: error.message || "Vă rugăm să încercați mai târziu!",
      });
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          className="mt-4 space-y-2 xs:space-y-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {/* Nume si Prenume */}
          <div>
            <FormField
              control={form.control}
              name="nume"
              render={({ field }) => (
                <FormItem>
                  <FormControl as="div">
                    <div className="">
                      <Label>{t("form.name.label")}</Label>
                      <div className="relative flex items-center">
                        <Input
                          placeholder={t("form.name.input")}
                          type="name"
                          id="nume"
                          autoComplete="name"
                          {...field}
                        />
                        <User className="absolute right-6" size={20} />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
          </div>
          {/* Email */}
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
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
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
          </div>
          {/* Tel */}
          <div>
            <FormField
              control={form.control}
              name="telefon"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
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
                        <PhoneIcon
                          className="absolute top-4 right-6"
                          size={20}
                        />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="mesaj"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div>
                      <Label>{t("form.msg.label")}</Label>
                      <div className="relative flex items-center">
                        <Textarea
                          placeholder={t("form.msg.input")}
                          id="mesaj"
                          {...field}
                        />
                        <MessageSquare
                          className="absolute top-4 right-6"
                          size={20}
                        />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field }) => (
                <FormItem>
                  <FormControl
                    as="label"
                    className="flex items-center space-x-3 pl-1"
                  >
                    <div>
                      <Input
                        type="checkbox"
                        {...field}
                        id="acceptTerms"
                        checked={field.value}
                        className="h-[15px] w-[15px]"
                      />
                      <span className="text-[15px]">{t("form.gdpr")}</span>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
          </div>
          <div className="recaptcha-branding flex flex-col gap-y-4 md:flex-row md:gap-x-4 max-xl:pt-4">
            <Button className="flex items-center gap-x-1 max-w-[166px] rounded-[8px]">
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
    </>
  );
}
