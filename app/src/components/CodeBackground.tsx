"use client";

import { useMemo } from "react";

export default function CodeBackground() {
  const rows = 400;
  const cols = 1000;

const data = useMemo(() => {
  return Array.from({ length: rows }).map(() =>
    Array.from({ length: cols })
      .map(() => {
        const r = Math.random();

        if (r > 0.96) return "1";
        if (r > 0.92) return "0";
        return " ";
      })
      .join("")
  );
}, []);

  return (
    <div className="absolute inset-0 tracking-[0.4em] leading-5 z-0 overflow-hidden text-[16px] leading-3 font-mono text-white/20 blur-[0.3px] select-none">
      <div>
        {data.map((row, i) => (
          <div key={i}>{row}</div>
        ))}
      </div>
    </div>
  );
}
