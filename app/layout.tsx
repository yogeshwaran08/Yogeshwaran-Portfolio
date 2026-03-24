import type { Metadata } from "next";
import { Outfit, JetBrains_Mono, Host_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const hostGrotesk = Host_Grotesk({
  variable: "--font-host",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Engineer | Creative Studio",
  description: "Premium AI engineering and system design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} ${hostGrotesk.variable} antialiased`}
    >
      <body className="bg-dark text-white selection:bg-[#ff4d00] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
