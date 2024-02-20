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

const formSchema = z.object({
  nume: z.string().min(3, {
    message: "Enter your full name",
  }),
  email: z.string().email(),
  telefon: z.string().min(10, {
    message: "Enter a valid phone number",
  }),
  mesaj: z.string().min(10, {
    message: "Min 10 characters"
  }).max(200, {
    message: "Max 200 characters.",
  }),
});

export default function SolicitatiOfertaForm() {
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

  const onSubmit = async (formData) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
        // Reset the form here
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
    <Form {...form}>
      <form
        className='mt-4 space-y-2 xs:space-y-4'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* Nume si Prenume */}
        <div>
          <FormField
            control={form.control}
            name='nume'
            render={({ field }) => (
              <FormItem>
                <FormControl as='div'>
                  <div className='relative flex items-center'>
                    <Input
                      placeholder='Full Name'
                      type='name'
                      id='nume'
                      autoComplete='name'
                      {...field}
                    />
                    <User className='absolute right-6' size={20} />
                  </div>
                </FormControl>
                <FormMessage className='text-red' />
              </FormItem>
            )}
          />
        </div>
        {/* Email */}
        <div>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className='relative flex items-center'>
                    <Input
                      placeholder='Email'
                      type='email'
                      id='email'
                      autoComplete='email'
                      {...field}
                    />
                    <MailIcon className='absolute right-6' size={20} />
                  </div>
                </FormControl>
                <FormMessage className='text-red' />
              </FormItem>
            )}
          />
        </div>
        {/* Tel */}
        <div>
          <FormField
            control={form.control}
            name='telefon'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className='relative flex items-center'>
                    <Input
                      placeholder='Phone Number'
                      type='tel'
                      id='telefon'
                      autoComplete='tel'
                      {...field}
                    />
                    <PhoneIcon className='absolute top-4 right-6' size={20} />
                  </div>
                </FormControl>
                <FormMessage className='text-red' />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name='mesaj'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className='relative flex items-center'>
                    <Textarea
                      placeholder='Tell us your request!'
                      id='mesaj'
                      {...field}
                    />
                    <MessageSquare
                      className='absolute top-4 right-6'
                      size={20}
                    />
                  </div>
                </FormControl>
                <FormMessage className='text-red' />
              </FormItem>
            )}
          />
        </div>
        <Button className='flex items-center gap-x-1 max-w-[166px] rounded-[8px]'>
          Submit
          <ArrowRightIcon size={20} />
        </Button>
      </form>
    </Form>
  );
}
