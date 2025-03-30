
// import Image from "next/image";
import Timer from '@/components/Timer';

export default function Home() {
  return (
    <div
      className="
        text-white text-center
        text-shadow-blue-lg
      "
    >
      <main
        className="
          flex flex-col
          items-center
          sm:items-start
        "
      >
        <Timer />
      </main>

      <footer
        className="
          row-start-3
          flex
          gap-[24px]
          flex-wrap
          items-center
          justify-center
        "
      >
      </footer>
    </div>
  );
}
