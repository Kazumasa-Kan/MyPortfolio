
// import Image from "next/image";
import Timer from '@/components/Timer';

export default function Home() {
  return (
    <div
      className="
        min-h-screen
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

    </div>
  );
}
