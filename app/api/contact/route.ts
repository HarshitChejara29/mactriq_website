import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(req: Request) {

  const body = await req.json();

  const { firstName, lastName, email, phone, message } = body;

  try {

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["harshitchejara29@gmail.com"],
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    return Response.json({ success: false });
  }

}