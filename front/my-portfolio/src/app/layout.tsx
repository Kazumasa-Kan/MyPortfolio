//./src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import MyNav from "@/components/Nav";

import ShaderScene from "@/components/ShaderScene";
import MyFooter from "@/components/Footer";
import { Klee_One } from "next/font/google";

const kleeOne = Klee_One({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-klee-one",
});

export const metadata: Metadata = {
  title: "MyPortfolio",
  description: "Kazumasa Kan's portfolio as Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={kleeOne.variable}
    >
      <body
        className="
          font-noto antialiased relative
          "
      >
        {/* z-0 */}
        <div className="absolute inset-0 z-0">
          <ShaderScene />
        </div>

        {/* z-10 */}
        <div className="relative z-10">
          <MyNav />
          <div className="flex-none size-7">{/* empty */}</div>
            <div className="
              min-h-screen
            ">
              <div className="
                border border-white
                mt-20
                mr-0 sm:mr-10 md:mr-20 ld:mr-30 xl:mr-20
                ml-0 sm:ml-10 md:ml-20 ld:ml-30 xl:ml-20
              ">
                {children}
            </div>
          </div>
          <div className="flex-none size-7">{/* empty */}</div>
          <MyFooter />
        </div>
      </body>
    </html>
  );
}
