"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface PromptAccordionItem {
  label: string;
  content: string;
}

export function PromptAccordion({ items }: { items: PromptAccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mt-3 space-y-1.5">
      {items.map((item, index) => (
        <div key={index} className="border border-navy-700 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpen(open === index ? null : index)}
            className="w-full flex items-center justify-between px-4 py-2.5 text-left gap-3 bg-navy-950 hover:bg-navy-800 transition-colors duration-150"
          >
            <span className="font-dm-sans text-brand-red text-xs font-medium">{item.label}</span>
            <ChevronDown
              size={13}
              className={`text-navy-400 shrink-0 transition-transform duration-200 ${open === index ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence>
            {open === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-4 pb-4 pt-3 bg-navy-950 border-t border-navy-700">
                  <p className="font-dm-sans text-navy-400 text-xs leading-relaxed whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
