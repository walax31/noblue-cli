"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import BootScreen from "./src/components/BootScreen";
import { commandList } from "./lib/commandList";
import { commands } from "./lib/commands";
import TypingText from "./src/components/TypingText";
import AsciiBanner from "./src/components/AsciiBanner";

type HistoryItem = {
  type: "command" | "output";
  value: string | ReactNode;
};

const aliases: Record<string, string> = {
  me: "whoami",
  cls: "clear",
  ls: "help",
};

export default function Page() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [hasUsed, setHasUsed] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  function runCommand(input: string): ReactNode {
    const chains = input.split("&&").map((c) => c.trim());
    const outputs: ReactNode[] = [];

    chains.forEach((chain, index) => {
      const [cmdRaw, ...args] = chain.split(" ");
      const cmd = aliases[cmdRaw] || cmdRaw;

      if (cmd === "sudo") {
        if (args[0] === "hire-me") {
          outputs.push(
            <div key={index} className="text-green-400">
              [sudo] access granted 🚀
            </div>
          );
          outputs.push(
            <div key={index + "-hire"}>
              {commands.hire([])}
            </div>
          );
        } else {
          outputs.push(
            <div key={index} className="text-red-400">
              sudo: unknown command
            </div>
          );
        }
        return;
      }

      const command = commands[cmd];

      if (!command) {
        outputs.push(
          <div key={index} className="text-red-400">
            command not found: {cmd}
            <br />
            try: help
          </div>
        );
        return;
      }

      outputs.push(
        <div key={index}>{command(args)}</div>
      );
    });

    return <div className="space-y-2">{outputs}</div>;
  }

  if (loading) {
    return <BootScreen onDone={() => setLoading(false)} />;
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;

      const newIndex =
        historyIndex === null
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;

      const newIndex = historyIndex + 1;

      if (newIndex >= commandHistory.length) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
      return;
    }

    if (e.key === "Tab") {
      e.preventDefault();

      const [cmdPart, ...rest] = input.split(" ");
      const match = commandList.find((cmd) =>
        cmd.startsWith(cmdPart)
      );

      if (match) {
        setInput([match, ...rest].join(" "));
      }

      return;
    }

    if (e.key === "Enter") {
      const cmd = input.trim();
      if (!cmd) return;

      setHasUsed(true);

      if (cmd === "clear") {
        setHistory([]);
        setCommandHistory([]);
        setInput("");
        return;
      }

      const output = runCommand(cmd);

      setHistory((prev) => [
        ...prev,
        { type: "command", value: cmd },
        { type: "output", value: output },
      ]);

      setCommandHistory((prev) => [...prev, cmd]);

      setInput("");
      setHistoryIndex(null);
    }
  };

  const [cmdPart] = input.split(" ");
  const ghost =
    commandList.find(
      (cmd) => cmd.startsWith(cmdPart) && cmd !== cmdPart
    ) || "";

  return (
    <main className="relative bg-black text-white min-h-screen flex items-center justify-center px-6 font-mono tracking-wide leading-relaxed">
      <section className="relative z-10 w-full max-w-4xl border border-gray-800 rounded-xl overflow-hidden bg-black">
        
        {/* HEADER */}
        <div className="px-4 py-2 border-b border-gray-800 flex gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-500 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        {/* BODY */}
        <div className="h-[550px] flex flex-col">
          <div ref={terminalRef} className="flex-1 overflow-y-auto p-6">
            
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Hello, I&apos;m
              </span>{" "}
              <span className="text-green-400">Noblue 👋</span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg">
              <TypingText
                text="Frontend Developer who builds clean, fast, and modern web apps."
                speed={20}
              />
            </p>

            <AsciiBanner />

            {/* HISTORY */}
            <div className="mt-10">
              {history.map((item, i) => (
                <div key={i} className="mb-4">
                  
                  {item.type === "command" && (
                    <div className="flex">
                      <span className="text-green-400">noblue@portfolio</span>
                      <span className="mx-2 text-gray-500">~</span>
                      <span className="text-purple-400">% </span>
                      <span className="text-white ml-1">
                        {item.value}
                      </span>
                    </div>
                  )}

                  {item.type === "output" && (
                    <div className="ml-3 mt-2">
                      {item.value}
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>

          {/* INPUT */}
          <div className="border-t border-gray-800 p-4">
            <div className="flex">
              <span className="text-green-400">noblue@portfolio</span>
              <span className="mx-2 text-gray-500">~</span>
              <span className="text-purple-400">% </span>

              <div className="relative flex-1 ml-2">
                {input && ghost && (
                  <div className="absolute inset-0 text-gray-500 pointer-events-none">
                    {input}
                    <span>{ghost.slice(input.length)}</span>
                  </div>
                )}

                <input
                  className="bg-transparent outline-none w-full text-white"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    setHistoryIndex(null);
                  }}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  placeholder={hasUsed ? "" : "type: help"}
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}