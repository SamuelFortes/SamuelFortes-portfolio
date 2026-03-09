"use client";

import { useState, useEffect } from "react";
import { Minus, Square, X } from "lucide-react";

const Terminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  const command = "./samuel.sh --info";
  const output = `{
  "name": "Samuel Furtado Fortes",
  "title": "Full-Stack Developer",
  "focus": ["C#", ".NET", "SQL", "Python"],
  "status": "Disponível para Projetos/Estágio"
}`;

  useEffect(() => {
    setLines([]);
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < command.length) {
        setLines(prev => {
          const newLines = [...prev];
          if (newLines.length === 0) newLines.push("");
          newLines[0] = command.substring(0, charIndex + 1);
          return newLines;
        });
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setLines(prev => [...prev, output, ""]);
        }, 500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [command, output]);

  return (
    <div className="h-80 w-full max-w-lg rounded-t-lg bg-[#300a24] shadow-2xl overflow-hidden font-code">
      {/* Header */}
      <header className="bg-[#2b2b2b] text-gray-300">
        <div className="flex items-center justify-between px-3 h-8">
            <div className="flex items-center gap-2">
              {/* Could add an icon here */}
            </div>
            <div className="text-sm">samuel@portfolio: ~</div>
            <div className="flex items-center gap-1.5">
                <button aria-label="Minimize" className="h-5 w-5 flex items-center justify-center text-white/70 hover:bg-white/10 rounded-full">
                    <Minus size={12} />
                </button>
                <button aria-label="Maximize" className="h-5 w-5 flex items-center justify-center text-white/70 hover:bg-white/10 rounded-full">
                    <Square size={10} />
                </button>
                <button aria-label="Close" className="h-5 w-5 flex items-center justify-center text-white/70 hover:bg-red-500 rounded-full">
                    <X size={12} />
                </button>
            </div>
        </div>
        <div className="px-3 pb-1.5 text-xs flex gap-4 cursor-default">
            <span className="hover:bg-white/10 px-2 py-0.5 rounded-sm">File</span>
            <span className="hover:bg-white/10 px-2 py-0.5 rounded-sm">Edit</span>
            <span className="hover:bg-white/10 px-2 py-0.5 rounded-sm">View</span>
            <span className="hover:bg-white/10 px-2 py-0.5 rounded-sm">Search</span>
            <span className="hover:bg-white/10 px-2 py-0.5 rounded-sm">Terminal</span>
            <span className="hover:bg-white/10 px-2 py-0.5 rounded-sm">Help</span>
        </div>
      </header>

      {/* Terminal Body */}
      <div className="p-4 text-sm">
        <div className="flex gap-2">
          <span className="text-green-400">samuel@portfolio</span>
          <span className="text-gray-300">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-gray-300">$</span>
          <span className="ml-2 text-gray-200">{lines[0]}</span>
          {lines.length <= 1 && <span className="ml-0.5 inline-block h-5 w-2.5 animate-blink bg-gray-200"></span>}
        </div>
        {lines.length > 1 && (
          <>
            <pre className="mt-2 whitespace-pre-wrap text-gray-200">{lines[1]}</pre>
            <div className="mt-2 flex gap-2">
              <span className="text-green-400">samuel@portfolio</span>
              <span className="text-gray-300">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-gray-300">$</span>
              <span className="ml-2 inline-block h-5 w-2.5 animate-blink bg-gray-200"></span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Terminal;
