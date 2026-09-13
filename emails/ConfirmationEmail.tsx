import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface TicketEmailProps {
  name: string;
  ticketId: string;
  role: string;
}

export const TicketEmail = ({
  name = "John Doe",
  ticketId = "DEV-GUW-2026-XXXX",
  role = "Full-Stack Developer",
}: TicketEmailProps) => {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${ticketId}`;

  return (
    <Html>
      <Head />
      <Preview>Your GDG DevFest 2026 Ticket is here!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>GDG DevFest 2026</Heading>
          <Text style={text}>Hi {name},</Text>
          <Text style={text}>
            Your registration for GDG DevFest Guwahati is confirmed! We are thrilled to have you join us.
          </Text>
          
          <Section style={ticketCard}>
            <Text style={ticketIdText}>Ticket ID: <strong>{ticketId}</strong></Text>
            <Text style={ticketRoleText}>Role: {role}</Text>
            
            <Section style={qrCodeSection}>
              <Img
                src={qrCodeUrl}
                width="200"
                height="200"
                alt="Your QR Code Pass"
                style={qrCodeImage}
              />
            </Section>
            <Text style={instructions}>
              Please present this QR code at the check-in desk upon arrival.
            </Text>
          </Section>

          <Hr style={hr} />
          
          <Text style={footer}>
            Tech Hub, Guwahati • October 12, 2026<br/>
            Google Developer Group
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default TicketEmail;

const main = {
  backgroundColor: "#f4f3f7",
  fontFamily: "sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  maxWidth: "600px",
  marginTop: "40px",
  marginBottom: "40px",
  border: "1px solid #e3e2e6",
};

const h1 = {
  color: "#0058bd",
  fontSize: "28px",
  fontWeight: "bold",
  textAlign: "center" as const,
  marginBottom: "30px",
};

const text = {
  color: "#1a1b1e",
  fontSize: "16px",
  lineHeight: "24px",
};

const ticketCard = {
  backgroundColor: "#f4f3f7",
  borderRadius: "12px",
  padding: "24px",
  textAlign: "center" as const,
  marginTop: "32px",
  marginBottom: "32px",
  borderTop: "6px solid #4285F4",
};

const ticketIdText = {
  fontSize: "20px",
  color: "#1a1b1e",
  margin: "0 0 10px 0",
};

const ticketRoleText = {
  fontSize: "16px",
  color: "#424753",
  margin: "0 0 20px 0",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
};

const qrCodeSection = {
  display: "inline-block",
  padding: "16px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
};

const qrCodeImage = {
  margin: "0 auto",
};

const instructions = {
  fontSize: "14px",
  color: "#424753",
  marginTop: "20px",
};

const hr = {
  borderColor: "#e3e2e6",
  margin: "30px 0",
};

const footer = {
  color: "#727785",
  fontSize: "12px",
  textAlign: "center" as const,
  lineHeight: "18px",
};
