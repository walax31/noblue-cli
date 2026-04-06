"use client";

import { useEffect, useState } from "react";

const asciiLines = [
  " _   _       _     _           ",
  "| \\ | | ___ | |__ | |_   _  ___ ",
  "|  \\| |/ _ \\| '_ \\| | | | |/ _ \\",
  "| |\\  | (_) | |_) | | |_| |  __/",
  "|_| \\_|\\___/|_.__/|_|\\__,_|\\___|",
];

export default function AsciiBanner() {
  return (
    <div className="mt-8 font-mono text-sm whitespace-pre leading-relaxed">
      <div className="mt-6 font-mono whitespace-pre leading-relaxed text-sm">
        <div className="text-green-400">{`> system online`}</div>

        <div className="text-green-400">{`> user: noblue`}</div>

        <div className="text-green-400">{`> role: frontend developer`}</div>

        <div className="text-gray-400 mt-2">{`ready for input...`}</div>
      </div>
    </div>
  );
}
