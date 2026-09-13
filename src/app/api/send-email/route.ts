import { NextResponse } from "next/server";
import { Resend } from "resend";
import { TicketEmail } from "../../../../emails/ConfirmationEmail";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key_123");

export async function POST(request: Request) {
  try {
    const { email, name, ticketId, role } = await request.json();

    if (!email || !name || !ticketId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // In a real production app with a verified domain, the 'from' address would be:
    // from: 'GDG DevFest <tickets@your-domain.com>'
    // For Resend's free test tier without a domain, we MUST use onboarding@resend.dev
    // and it will only successfully deliver to the email you signed up to Resend with!

    if (!process.env.RESEND_API_KEY) {
      console.log("Mocking email send since RESEND_API_KEY is not configured.");
      console.log(`Sending ticket ${ticketId} to ${email}`);
      return NextResponse.json({ success: true, mocked: true });
    }

    const { render } = await import("@react-email/components");
    const htmlString = await render(TicketEmail({ name, ticketId, role }));

    const data = await resend.emails.send({
      from: "GDG Registration <onboarding@resend.dev>",
      to: "duljit29@gmail.com", // Hardcoded for Resend free tier testing
      subject: "Your Ticket for GDG DevFest 2026",
      html: htmlString,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
