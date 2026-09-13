import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { TicketEmail } from "../../../../emails/ConfirmationEmail";

export async function POST(request: Request) {
  try {
    const { email, name, ticketId, role } = await request.json();

    if (!email || !name || !ticketId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log(
        "Mocking email send since EMAIL_USER or EMAIL_PASS is not configured.",
      );
      console.log(`Sending ticket ${ticketId} to ${email}`);
      return NextResponse.json({ success: true, mocked: true });
    }

    const { render } = await import("@react-email/components");
    const htmlString = await render(TicketEmail({ name, ticketId, role }));

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"GDG DevFest 2026" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Ticket for GDG DevFest 2026",
      html: htmlString,
    });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
