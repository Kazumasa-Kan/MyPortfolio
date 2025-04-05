
// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
        grid grid-rows-[20px_1fr_20px]
        items-center
        justify-items-center min-h-screen
        p-8
        pb-20
        gap-16
        sm:p-20
        "
        >
      <main
        className="
          flex flex-col
          items-center
          sm:items-start
        "
      >


        <Link
            href ='/toolbox/timer'
            className='
                items-center
                text-2xl text-brand
                glow-strong
            '
        >
           Timer
        </Link>
      </main>
    </div>
  );
}
