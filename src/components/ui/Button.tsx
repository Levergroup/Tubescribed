"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const isExternal = href.startsWith("http");
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-base transition-all duration-200 cursor-pointer";
  const variants = {
    primary: "btn-gradient text-white shadow-[0_4px_24px_rgba(255,59,48,0.35)]",
    secondary: "bg-transparent border border-navy-700 text-navy-100 hover:bg-navy-800",
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
      {isExternal ? <a href={href} className={cls}>{children}</a> : <Link href={href} className={cls}>{children}</Link>}
    </motion.div>
  );
}
