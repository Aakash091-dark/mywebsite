"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EasterEggs() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState([
    "Welcome to AakashOS v1.0",
    "Type 'help' for available commands."
  ]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input or textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "D" || e.key === "d") {
        setShowDashboard((prev) => !prev);
      }
      if (e.key === "`") {
        setShowTerminal((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    const newOutput = [...terminalOutput, `> ${terminalInput}`];

    switch (cmd) {
      case "help":
        newOutput.push("Commands: about, projects, music, clear");
        break;
      case "about":
        newOutput.push("Aakash: AI Engineer & Data Analyst crafting intelligent systems.");
        break;
      case "projects":
        newOutput.push("Viewing 4 featured projects. Type 'view project' for more.");
        break;
      case "music":
        newOutput.push("Playing void.mp4... 🎵");
        break;
      case "clear":
        setTerminalOutput([]);
        setTerminalInput("");
        return;
      default:
        newOutput.push(`Command not found: ${cmd}`);
    }

    setTerminalOutput(newOutput);
    setTerminalInput("");
  };

  return (
    <>
      <AnimatePresence>
        {showDashboard && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 right-10 bg-black/80 backdrop-blur-md border border-indigo-500/50 p-6 rounded-xl shadow-2xl shadow-indigo-500/20 z-[100] w-80 text-white font-mono"
          >
            <h3 className="text-lg font-bold mb-4 text-indigo-400 border-b border-indigo-500/30 pb-2">
              System Analytics
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Live Visitors</span>
                <span className="text-green-400 font-bold animate-pulse">42</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Projects Viewed</span>
                <span className="text-blue-400 font-bold">1,337</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Music Played</span>
                <span className="text-purple-400 font-bold">89 hrs</span>
              </div>
              <div className="mt-4 h-16 w-full flex items-end space-x-1">
                {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex-1 bg-indigo-500/50 rounded-t"
                  />
                ))}
              </div>
            </div>
            <button
              onClick={() => setShowDashboard(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-white"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="w-full max-w-2xl bg-black/90 backdrop-blur-lg border border-green-500/30 rounded-lg shadow-2xl shadow-green-500/10 overflow-hidden pointer-events-auto flex flex-col h-[400px]">
              <div className="flex items-center px-4 py-2 bg-black border-b border-green-500/30">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={() => setShowTerminal(false)} />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="mx-auto text-green-500/70 text-xs font-mono">terminal ~ aakash</div>
              </div>
              <div className="flex-1 p-4 overflow-y-auto font-mono text-green-400 text-sm">
                {terminalOutput.map((line, i) => (
                  <div key={i} className="mb-1">{line}</div>
                ))}
                <form onSubmit={handleCommand} className="flex mt-2">
                  <span className="mr-2 text-green-500">~ $</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-green-400"
                    autoFocus
                  />
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
