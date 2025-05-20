"use client";

import React from "react";
import { useRouter } from "next/navigation";

const MyPortfolioPdf = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen p-4 flex flex-col items-center bg-gray-50">
            {/* Back Button */}
            <div className="w-full max-w-4xl flex justify-start mb-4">
                <button
                    onClick={() => router.back()}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                >
                    ← Back
                </button>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold mb-4 text-center">My Portfolio</h1>

            {/* Download Button */}
            <a
                href="/portfolio.pdf"
                download
                className="mb-4 px-6 py-2 bg-blue-700/80 text-white rounded hover:bg-blue-800 transition"
            >
                Download Portfolio
            </a>

            {/* PDF Viewer */}
            <iframe
                src="/portfolio.pdf"
                className="w-full max-w-4xl h-[90vh] border rounded shadow-lg"
            ></iframe>
        </div>
    );
};

export default MyPortfolioPdf;
