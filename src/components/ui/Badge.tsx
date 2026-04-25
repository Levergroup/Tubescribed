import { ReactNode } from "react";

export function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-navy-800 border border-navy-700 text-navy-100 ${className}`}>
      {children}
    </span>
  );
}

export function EyebrowBadge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center px-4 py-2 rounded-full bg-navy-800 border-l-[3px] border-brand-red text-navy-100 text-sm font-medium">
      {children}
    </div>
  );
}
