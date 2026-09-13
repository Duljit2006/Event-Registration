import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthProvider";
import RegistrationModal from "@/components/registration/RegistrationModal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-google-sans" }); // Outfit closely resembles Google Sans

export const metadata: Metadata = {
  title: "GDG DevFest Event",
  description: "Register for GDG DevFest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Roboto+Flex:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-foreground bg-background`}>
        <AuthProvider>
          {children}
          <RegistrationModal />
        </AuthProvider>
      </body>
    </html>
  );
}
