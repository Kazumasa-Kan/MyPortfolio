'use client';
import { useEffect, useState } from 'react';

export default function Reel({
  value,
  onScroll,
}: {
  value: number;
  onScroll: (e: React.WheelEvent) => void;
}) {
  const prev = (value + 59) % 60;
  const next = (value + 1) % 60;

  const [translateY, setTranslateY] = useState('-100%');

  useEffect(() => {
    setTranslateY('-100%');
  }, [value]);

  const handleScroll = (e: React.WheelEvent) => {
    onScroll(e);
    setTranslateY('0%');
    setTimeout(() => setTranslateY('-100%'), 100);
  };

  return (
    <div
      onWheel={handleScroll}
      className="h-[2.5rem] w-[3ch] overflow-hidden relative text-center cursor-ns-resize select-none"
    >
      <div
        className="transition-transform duration-200 ease-in-out"
        style={{ transform: `translateY(${translateY})` }}
      >
        <div className="h-[2.5rem] text-gray-500">{String(prev).padStart(2, '0')}</div>
        <div className="h-[2.5rem] font-bold text-white">{String(value).padStart(2, '0')}</div>
        <div className="h-[2.5rem] text-gray-500">{String(next).padStart(2, '0')}</div>
      </div>
    </div>
  );
}
