"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={
        "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition " +
        (copied
          ? "bg-emerald-600 text-white"
          : "bg-indigo-600 text-white hover:bg-indigo-700")
      }
    >
      {copied ? "Đã sao chép!" : "Sao chép"}
    </button>
  );
}
