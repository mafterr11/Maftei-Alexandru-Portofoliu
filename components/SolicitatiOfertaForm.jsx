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
                    <div className="relative flex items-center">
                      <Input
                        placeholder={t("form.name")}
                        type="name"
                        id="nume"
                        autoComplete="name"
                        {...field}
                      />
                      <User className="absolute right-6" size={20} />
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
                    <div className="relative flex items-center">
                      <Input
                        placeholder="Email"
                        type="email"
                        id="email"
                        autoComplete="email"
                        {...field}
                      />
                      <MailIcon className="absolute right-6" size={20} />
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
                    <div className="relative flex items-center">
                      <Input
                        placeholder={t("form.tel")}
                        type="tel"
                        id="telefon"
                        autoComplete="tel"
                        {...field}
                      />
                      <PhoneIcon className="absolute top-4 right-6" size={20} />
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
                    <div className="relative flex items-center">
                      <Textarea
                        placeholder={t("form.msg")}
                        id="mesaj"
                        {...field}
                      />
                      <MessageSquare
                        className="absolute top-4 right-6"
                        size={20}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
          </div>
          <div className="recaptcha-branding flex flex-col gap-y-4 md:flex-row md:gap-x-4">
            <Button className="flex items-center gap-x-1 max-w-[166px] rounded-[8px]">
              {t("form.btn")}
              <ArrowRightIcon size={20} />
            </Button>
            <p className="leading-normal">
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-accent underline"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                className="text-accent underline"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>
        </form>
      </Form>
    </>
  );
}
