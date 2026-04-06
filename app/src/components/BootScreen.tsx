"use client";

import { useEffect, useState } from "react";

const lines = [
  "> booting noblue portfolio...",
  "initializing system...",
  "loading modules...",
  "injecting UI...",
  "compiling components...",
  "✔ system ready",
];

export default function BootScreen({ onDone }: { onDone: () => void }) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayedLines((prev) => [...prev, lines[i]]);
      i++;

      if (i >= lines.length) {
        clearInterval(interval);

        setTimeout(() => {
          setFade(true);

          setTimeout(onDone, 600);
        }, 600);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 bg-black text-green-400 font-mono flex items-center justify-center px-6 transition-all duration-500 ${
        fade ? "opacity-0 blur-sm" : "opacity-100"
      }`}
    >
      <div className="max-w-2xl w-full text-sm">
        {displayedLines.map((line, index) => (
          <div key={index} className="mb-1">
            {line}
          </div>
        ))}

        <div className="mt-2">
          <span className="animate-[blink_1s_infinite]">█</span>
        </div>
      </div>
    </div>
  );
}