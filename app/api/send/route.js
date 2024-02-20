import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.json();

    const data = await resend.emails.send({
      from: "Myriad@myriad-tech.ro",
      to: ["alexandrumaftei95@gmail.com"],
      subject: "Myriad - Solicitare Nouă",
      react: EmailTemplate(formData), // pass the entire formData object to the template
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
