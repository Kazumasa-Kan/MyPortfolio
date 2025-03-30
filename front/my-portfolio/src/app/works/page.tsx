"use client"; // 追加

import Link from "next/link";
import Hakuu from "@/components/Hakuu";

export default function Home() {
  return (
    <div className="relative">
        <div className="absolute z-20">
            <nav className="absolute z-20">
                <Link href="/" className="absolute z-20">top</Link>
            </nav>
        </div>
        <div className="absolute z-20 w-screen h-screen flex items-center justify-center bg-black">
            <Hakuu />
        </div>
        <div className="absolute z-20">
            hello my three
        </div>

    </div>
  );
}
