import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, business, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1️⃣ Send to BuildIQ
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New message from ${name} (${business})`,
      text: `Name: ${name}\nEmail: ${email}\nBusiness: ${business}\n\nMessage:\n${message}`,
    });

    // 2️⃣ Auto-reply to sender
    await transporter.sendMail({
      from: `"BuildIQ" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for getting in touch with BuildIQ",
      text: `Hi ${name},\n\nThanks for reaching out to BuildIQ. We've received your message and will get back to you within 24 hours.\n\n— The BuildIQ Team`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#222">
          <h2 style="color:#C8A86A;">Hi ${name},</h2>
          <p>Thanks for getting in touch with <strong>BuildIQ</strong>.</p>
          <p>We’ve received your message and our team will reach out within 24 hours.</p>
          <br/>
          <p style="color:#888;font-size:13px;">— The BuildIQ Team</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 500 });
  }
}
