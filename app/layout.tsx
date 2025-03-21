import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Registel",
  description: "Registel es una empresa de transporte",
  keywords: ["Registel", "Transporte", "Empresa"],
};
interface props {
    children: React.ReactNode;
}

export default function RootLayout({children}: Readonly<props>) {
  return (
    <html lang="en">
      <body
        className={` antialiased ` }
      >
        {children}
      </body>
    </html>
  );
}
