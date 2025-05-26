import { Roboto, Londrina_Solid, Sen } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FooterWrapper from "@/components/FooterWrapper";
import { metadata } from "./metadata";

const londrinaSolid = Londrina_Solid({
  variable: "--font-londrina-solid",
  subsets: ["latin"],
  weight: '300'
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${londrinaSolid.variable} ${roboto.variable} ${sen.variable} antialiased text-foreground overflow-x-hidden`}
      >
        <Header />
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
