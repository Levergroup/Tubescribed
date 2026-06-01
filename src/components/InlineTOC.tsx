"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  content: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function InlineTOC({ content }: Props) {
  const [open, setOpen] = useState(false);

  const headings = content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace(/^## /, "").trim();
      return { text, id: slugify(text) };
    });

  if (headings.length < 2) return null;

  return (
    <nav className="mb-10 rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left lg:cursor-default"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-syne font-semibold text-gray-900 text-sm">
          Jump to section:
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform duration-200 lg:hidden ${open ? "rotate-180" : ""}`}
        />
      </button>

      <ol className={`px-5 pb-4 space-y-1.5 ${open ? "block" : "hidden"} lg:block`}>
        {headings.map((h, i) => (
          <li key={h.id} className="flex items-start gap-2.5">
            <span className="font-mono text-[#FF3B30] text-xs mt-0.5 shrink-0 w-4">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${h.id}`}
              onClick={() => setOpen(false)}
              className="font-dm-sans text-gray-500 text-sm hover:text-gray-900 transition-colors leading-snug"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
