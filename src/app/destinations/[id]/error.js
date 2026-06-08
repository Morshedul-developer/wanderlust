"use client";

import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative max-w-2xl text-center">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20">
          <AlertTriangle size={48} className="text-red-500" />
        </div>

        <h1 className="text-5xl md:text-7xl font-black">
          Something Went Wrong
        </h1>

        <p className="mt-6 text-lg text-gray-500">
          We encountered an unexpected error while processing your request.
        </p>

        {error?.message && (
          <p className="mt-4 text-sm text-red-500 bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
            {error.message}
          </p>
        )}

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-red-500 text-white font-medium hover:bg-red-600 transition"
          >
            <RefreshCw size={18} />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Home size={18} />
            Back Home
          </Link>
        </div>

        <p className="mt-12 text-sm uppercase tracking-[0.3em] text-gray-400">
          Error • Recover • Continue
        </p>
      </div>
    </section>
  );
};

export default ErrorPage;