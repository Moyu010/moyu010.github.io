import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//components
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jiayi Matthew Gu",
  description: "Jiayi Matthew Gu's Personal Portfolio",
};

// Global layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className={inter.className}>{children}</main>
      </body>
    </html>



  );
}
