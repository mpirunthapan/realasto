import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Realesto Website",
  description: "Real Estate Website by Pirunthapan and Anithvithushan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
