'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const TOTAL_FRAMES = 24;

export default function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalDuration = hours * 3600 + minutes * 60 + seconds;

  useEffect(() => {
    if (isRunning && totalDuration > 0) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => {
          if (prev >= totalDuration) {
            clearInterval(intervalRef.current!);
            return totalDuration;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current!);
    }
    return () => clearInterval(intervalRef.current!);
  }, [isRunning, totalDuration]);

  const reset = () => {
    setElapsed(0);
    setIsRunning(false);
  };

  const handleScroll = (e: React.WheelEvent, type: 'h' | 'm' | 's') => {
    if (isRunning) return;
    const delta = e.deltaY < 0 ? 1 : -1;
    if (type === 'h') setHours((h) => Math.max(0, Math.min(23, h + delta)));
    if (type === 'm') setMinutes((m) => (m + delta + 60) % 60);
    if (type === 's') setSeconds((s) => (s + delta + 60) % 60);
  };

  const formatTime = (t: number) => {
    const h = Math.floor(t / 3600);
    const m = Math.floor((t % 3600) / 60);
    const s = t % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const currentImageIndex =
    totalDuration > 0 ? Math.floor((elapsed / totalDuration) * TOTAL_FRAMES) : 0;
  const imageSrc = `/Timer/${currentImageIndex}.svg`;

  return (
    <div className="p-6 max-w-md mx-auto space-y-6 text-center">
      <Image
        className="min-w-[256px] min-h-[256px] mx-auto"
        src={imageSrc}
        width={256}
        height={256}
        alt={`Timer ${currentImageIndex}`}
        priority
      />

      {/* Reel */}
      <div className="flex justify-center items-center text-3xl font-mono gap-2">
        <Reel value={hours} onScroll={(e) => handleScroll(e, 'h')} />
        <span>:</span>
        <Reel value={minutes} onScroll={(e) => handleScroll(e, 'm')} />
        <span>:</span>
        <Reel value={seconds} onScroll={(e) => handleScroll(e, 's')} />
        <span className="ml-2 text-gray-400 text-base">
          / {(totalDuration / 3600).toFixed(2)} h
        </span>
      </div>

      <p className="text-xl">{formatTime(elapsed)} / {formatTime(totalDuration)}</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setIsRunning(true)}
          disabled={isRunning}
          className="bg-[#00102030] border px-4 py-2"
        >
          Start
        </button>
        <button
          onClick={() => setIsRunning(false)}
          disabled={!isRunning}
          className="bg-[#00102030] border px-4 py-2"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="bg-[#00102030] border px-4 py-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
function Reel({
    value,
    onScroll,
  }: {
    value: number;
    onScroll: (e: React.WheelEvent) => void;
  }) {
    const [animating, setAnimating] = useState(false);
  
    const prev = (value + 59) % 60;
    const next = (value + 1) % 60;
  
    useEffect(() => {
      setAnimating(true);
      const timeout = setTimeout(() => setAnimating(false), 200);
      return () => clearTimeout(timeout);
    }, [value]);
  
    // 明示的に `rem` 単位で中央位置を調整（ずれ防止！）
    const translateY = animating ? '0rem' : '-2.5rem';
  
    return (
      <div
        onWheel={onScroll}
        className="h-[2.5rem] w-[3ch] overflow-hidden text-center relative cursor-ns-resize select-none"
      >
        <div
          className="transition-transform duration-200 ease-in-out"
          style={{
            transform: `translateY(${translateY})`,
          }}
        >
          <div className="h-[2.5rem] text-gray-500">{String(prev).padStart(2, '0')}</div>
          <div className="h-[2.5rem] font-bold text-white">{String(value).padStart(2, '0')}</div>
          <div className="h-[2.5rem] text-gray-500">{String(next).padStart(2, '0')}</div>
        </div>
      </div>
    );
  }
  