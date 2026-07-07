"use client";

import { useState } from "react";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IAiResponse, IRequest, IResponse } from "@/models/ai";
import Image from "next/image";
interface NavbarProps {
  isAI: boolean;
}

export default function AskAI({ isAI }: NavbarProps) {
  const [input, setInput] = useState<string>("");

  const [response, setResponse] = useState<IResponse>({
    success: false,
    message: "",
    history: "",
  });

  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    setLoading(true);
    setResponse({
      success: false,
      message: "",
      history: "",
    });

    const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API!;

    const request_body: IRequest = {
      input,
      history: localStorage.getItem("history") || "[]",
    };

    console.log("request body :- ", request_body);

    const res = await fetch(BACKEND_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request_body),
    });

    const data: IAiResponse = await res.json();

    setResponse({
      success: data.success,
      message: data.message,
      history: JSON.stringify(data.history),
    });

    if (data.history) {
      localStorage.setItem("history", JSON.stringify(data.history));
    }
    setLoading(false);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Submit on Ctrl+Enter or Cmd+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      if (!loading && input.trim()) askAI();
    }
  };

  return (
    <main className=" text-black bg-gray-100 p-3 sm:p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-4 sm:p-6 space-y-4">
        <h1 className="text-xl sm:text-2xl font-bold flex gap-2 items-center">
          <span>Know About Aniket</span>

          <Image
            src="/vibing_duck.gif"
            alt="AI thinking"
            width={30}
            height={30}
          />
        </h1>

        <div className="flex flex-col gap-3">
          <textarea
            className="w-full border rounded p-3 text-sm sm:text-base resize-none min-h-[100px] sm:min-h-[80px] focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Ask about his projects, experience, skills, or education..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={4}
          />

          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-gray-400 hidden sm:block">
              Press Ctrl+Enter to submit
            </span>
            <button
              onClick={askAI}
              disabled={loading || !input.trim() || !isAI}
              className="w-full sm:w-auto bg-black text-white px-6 py-2.5 rounded hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed text-sm sm:text-base font-medium transition-opacity"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Processing...
                </span>
              ) : isAI ? (
                "Ask AI"
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Setting Server{" "}
                  <Image
                    src="/loading_gif.gif"
                    alt="loading_gif"
                    width={20}
                    height={20}
                  />
                </span>
              )}
            </button>
          </div>
        </div>

        {/* success */}
        {response.success && response.message && (
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-700">
            {/* Header */}
            <div className="bg-gray-800 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-gray-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0"></div>
                <span className="text-gray-300 text-xs sm:text-sm font-medium">
                  AI Response
                </span>
              </div>
              <button
                onClick={() => navigator.clipboard.writeText(response.message)}
                className="text-gray-400 hover:text-gray-200 text-xs px-2 py-1 rounded hover:bg-gray-700 transition-colors whitespace-nowrap"
              >
                Copy
              </button>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 max-h-[60vh] sm:max-h-[600px] overflow-y-auto">
              <div className="prose prose-invert prose-pre:bg-black prose-pre:shadow-inner max-w-none prose-sm sm:prose-base">
                <ReactMarkdown
                  components={{
                    code({ node, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return match ? (
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          className="rounded-md !text-xs sm:!text-sm overflow-x-auto"
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      ) : (
                        <code
                          className="bg-gray-800 px-1.5 py-0.5 rounded text-pink-400 text-xs sm:text-sm break-words"
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    },
                    h1: ({ children }) => (
                      <h1 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2 sm:mb-3 mt-5 sm:mt-6">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-base sm:text-lg font-semibold text-gray-200 mb-2 mt-3 sm:mt-4">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-gray-300 space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside text-gray-300 space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-gray-300 text-sm sm:text-base">
                        {children}
                      </li>
                    ),
                    strong: ({ children }) => (
                      <strong className="text-white font-semibold">
                        {children}
                      </strong>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-blue-500 pl-3 sm:pl-4 italic text-gray-400 my-3 sm:my-4 text-sm sm:text-base">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {response.message}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        )}

        {/* error */}
        {!response.success && response.message && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-2.5 sm:py-3 rounded text-sm sm:text-base">
            {response.message}
          </div>
        )}
      </div>
    </main>
  );
}
