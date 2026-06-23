"use client";

import React, { useState } from "react";

const DSAPractice = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);

  // 📝 -------------------------------------------------------------
  // 📝 Practice your DSA function here!
  // Example: Two Sum, Reverse String, Palindrome Checker, etc.
  // ----------------------------------------------------------------
  const runAlgorithm = () => {
    try {
      // 1. Process your input
      // For example, assuming comma-separated integers:
      const arr = input.split(",").map((s) => s.trim()).filter(Boolean);

      // 2. Implement your algorithm logic
      // --- START DSA LOGIC ---
      
      const reversedArr = [];
      for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
      }
      
      const finalOutput = reversedArr.join(", ");
      
      // --- END DSA LOGIC ---

      // 3. Set the result to be displayed
      setResult(`Reversed Array: [${finalOutput}]`);
    } catch (error) {
      console.error(error);
      setResult("Error executing algorithm. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-neutral-800 rounded-2xl shadow-2xl p-6 md:p-10 border border-neutral-700">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          DSA Practice Arena
        </h1>
        
        <p className="text-neutral-400 text-center mb-8">
          Write your algorithm logic inside the <code className="bg-neutral-700 text-emerald-300 px-2 py-1 rounded text-sm">runAlgorithm</code> function in <br className="hidden md:block" />
          <code className="bg-neutral-700 text-emerald-300 px-2 py-1 rounded text-sm mt-2 inline-block">components/DSAPractice.tsx</code>
        </p>

        <div className="space-y-6">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-neutral-300 mb-2">
              Test Input (e.g., comma-separated values)
            </label>
            <textarea
              className="w-full bg-neutral-950 border border-neutral-700 rounded-xl p-4 text-emerald-400 font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-y"
              rows={4}
              placeholder="e.g., 1, 2, 3, 4, 5"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              spellCheck={false}
            />
          </div>

          <button
            onClick={runAlgorithm}
            className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/25 active:scale-[0.98]"
          >
            Run Algorithm
          </button>

          {result && (
            <div className="mt-8 p-6 bg-neutral-950 rounded-xl border border-neutral-700 shadow-inner">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Console Output</h3>
              <p className="text-lg font-mono text-emerald-400 break-words whitespace-pre-wrap">{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DSAPractice;
