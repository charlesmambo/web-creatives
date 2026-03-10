import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend("re_JZxS7vME_9hyGSurcwWG497ngEPodonrL");

app.post("/api/contact", async (req, res) => {
  const { name, company, email, phone, interest, message } = req.body;

  try {
    await resend.emails.send({
      from: "Webb Creatives <onboarding@resend.dev>",
      to: "info@webbcreativesagency.co.za",
      subject: "New Client Inquiry",
      html: `
        <h2>New Client Contact</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${interest}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.json({ success: true });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});