import type { Metadata } from "next";
import { Quicksand, Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
      title: "Spice & Ember",
      description: "Where Every Bite Tells a Story.",
};
const quick = Quicksand({
      variable: "--font-quick-sans",
});
const noto = Noto_Serif({
      variable: "--font-noto-sans",
});

export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      return (
            <html lang="en">
                  <body
                        className={`min-h-full flex flex-col ${quick.variable} ${noto.variable}`}
                  >
                        <Navbar />
                        {children}
                        <Footer />
                  </body>
            </html>
      );
}
