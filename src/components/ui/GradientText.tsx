import { ReactNode } from "react";

export function GradientText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}
