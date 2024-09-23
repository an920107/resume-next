import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTc = Noto_Sans_TC({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Resume",
  description: "Squire's resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansTc.className} max-w-[1024px] max-lg:px-2 mx-auto antialiased`}>
        {children}
      </body>
    </html>
  );
}
