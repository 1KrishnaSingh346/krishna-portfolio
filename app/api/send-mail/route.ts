import { NextResponse } from "next/server";
import { EmailSchema } from "@/schemas/EmailSchema";
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = EmailSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: validation.error.issues[0].message,
        },
        { status: 400 }
      );
    }

    const { name, email, service, message } = validation.data;

const mailOptions = {
from: `"${name}" <${email}>`,
to: process.env.EMAIL_USER,
replyTo: email,
subject: `New Portfolio Inquiry • ${service}`,


html: `

<div style="
  font-family: Inter, Arial, sans-serif;
  background:#f5f7fb;
  padding:32px 16px;
">

  <div style="
    max-width:650px;
    margin:auto;
    background:#ffffff;
    border:1px solid #e5e7eb;
    border-radius:16px;
    overflow:hidden;
  ">

<div style="
  padding:24px 28px;
  background:#111827;
  border-bottom:1px solid #1f2937;
">
  <h2 style="
    margin:0;
    color:#ffffff;
    font-size:22px;
    font-weight:600;
  ">
    New Portfolio Inquiry
  </h2>

  <p style="
    margin:8px 0 0;
    color:#9ca3af;
    font-size:14px;
  ">
    A new inquiry has been received through your portfolio website.
  </p>
</div>

<div style="padding:28px;">

  <table style="
    width:100%;
    border-collapse:collapse;
  ">

    <tr>
      <td style="
        padding:12px 0;
        width:120px;
        color:#6b7280;
        font-weight:500;
      ">
        Name
      </td>

      <td style="
        padding:12px 0;
        color:#111827;
        font-weight:600;
      ">
        ${name}
      </td>
    </tr>

    <tr>
      <td style="
        padding:12px 0;
        color:#6b7280;
        font-weight:500;
      ">
        Email
      </td>

      <td style="padding:12px 0;">
        <a
          href="mailto:${email}"
          style="
            color:#0052ff;
            text-decoration:none;
          "
        >
          ${email}
        </a>
      </td>
    </tr>

    <tr>
      <td style="
        padding:12px 0;
        color:#6b7280;
        font-weight:500;
      ">
        Service
      </td>

      <td style="
        padding:12px 0;
        color:#111827;
      ">
        ${service}
      </td>
    </tr>

  </table>

  <div style="
    margin-top:24px;
    padding:20px;
    background:#f8fafc;
    border-left:4px solid #0052ff;
    border-radius:10px;
  ">
    <strong style="
      color:#111827;
    ">
      Message
    </strong>

    <p style="
      margin:12px 0 0;
      color:#374151;
      line-height:1.7;
      white-space:pre-wrap;
    ">
      ${message}
    </p>
  </div>

  <hr style="
    margin:24px 0 0;
    border:none;
    border-top:1px solid #e5e7eb;
  ">

  <div style="
    padding-top:16px;
    font-size:12px;
    color:#6b7280;
    line-height:1.6;
  ">
    This Email was generated automatically after a visitor submitted the contact form on your portfolio website.

    <br/><br/>

    You can reply directly to this email to continue the conversation with the sender.
  </div>

</div>
  </div>

</div>
`

};

    await transporter.sendMail(mailOptions);

    // acknowledgement mail to visitor
    await transporter.sendMail({
  to: email,
  subject: "Thank you for reaching out",
  html:`
  <div style="font-family: Inter, Arial, sans-serif; background:#f3f4f6; padding:32px 16px;">

  <div style="
    max-width:600px;
    margin:auto;
    background:#ffffff;
    border:1px solid #e5e7eb;
    border-radius:14px;
    overflow:hidden;
  ">
<div style="
  padding:24px 28px;
  background:#111827;
  border-bottom:1px solid #1f2937;
">
  <h2 style="
    margin:0;
    color:#ffffff;
    font-size:22px;
    font-weight:600;
  ">
    Thank You For Reaching Out
  </h2>

  <p style="
    margin:8px 0 0;
    color:#9ca3af;
    font-size:14px;
  ">
    Your inquiry has been successfully received and is now under review.
  </p>
</div>

<div style="
  padding:28px;
  color:#111827;
  line-height:1.7;
">

  <p>
    Hi <strong>${name}</strong>,
  </p>

  <p>
    Thank you for your interest and for taking the time to get in touch.
  </p>

  <p>
    I've successfully received your inquiry regarding
    <strong>${service}</strong>.
  </p>

  <div style="
    margin:24px 0;
    padding:16px;
    background:#f8fafc;
    border-left:4px solid #0052ff;
    border-radius:8px;
  ">
    <strong>Your Message</strong>

    <p style="
      margin-top:10px;
      color:#4b5563;
      white-space:pre-wrap;
    ">
      ${message}
    </p>
  </div>

  <p>
    I'll review your request and get back to you as soon as possible.
  </p>

  <p>
    Looking forward to connecting with you.
  </p>

  <br/>

  <strong>Krishna Singh</strong><br/>
  Full-Stack Engineer<br/>
  Co-Founder, Sankalp Nova LLP

  <hr style="
    margin:24px 0;
    border:none;
    border-top:1px solid #e5e7eb;
  ">

  <p style="
    margin:0;
    font-size:12px;
    color:#6b7280;
    line-height:1.6;
  ">
    This is an automated acknowledgement email generated after successfully receiving your inquiry through my portfolio website.
  </p>

</div>
  </div>

</div>
`
});

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
      },
      { status: 200 }
    );
  } catch (e) {
    console.error("Send mail error:", e);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again later."
      },
      { status: 500 }
    );
  }
}