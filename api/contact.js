import { Resend } from "resend";



// Resend setup
const resend = new Resend("re_JZxS7vME_9hyGSurcwWG497ngEPodonrL");

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const { name, company, email, phone, interest, message } = req.body;

  try {
    await resend.emails.send({
      from: "Webb Creatives <onboarding@resend.dev>",
      to: "info@webbcreativesagency.co.za",
      subject: `New Client Inquiry from ${name}`,
      html: `
        <h2>New Client Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${interest}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email" });
  }
}