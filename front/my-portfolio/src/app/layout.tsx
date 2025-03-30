//./src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import MyNav from "@/components/Nav";

import ShaderScene from "@/components/ShaderScene";
import { Noto_Sans_JP  } from "next/font/google";


export const metadata: Metadata = {
  title: "MyPortfolio",
  description: "Kazumasa Kan's portfolio as Engineer.",
};

//  font
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={notoSansJP.variable}
    >
      <body
        className="
          font-noto antialiased relative
          "
      >
        <div className="absolute inset-0 z-0">
          <ShaderScene />
        </div>
        <div className="relative z-10">
          <MyNav />
          {children}
        </div>
      </body>
    </html>
  );
}
