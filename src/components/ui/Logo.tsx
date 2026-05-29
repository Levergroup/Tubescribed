import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { icon: 28, text: "text-lg" },
    md: { icon: 36, text: "text-xl" },
    lg: { icon: 48, text: "text-2xl" },
  };
  const { icon, text } = sizes[size];
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <svg width={icon} height={icon} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Red play button — large rounded corners */}
        <path d="M11 4C6 4 4.5 6.5 4.5 11L4.5 25C4.5 29.5 6 32 11 32C13 32 14 31.3 32 19.8C33.5 19 34.5 18.5 34.5 18C34.5 17.5 33.5 17 32 16.2C14 4.7 13 4 11 4Z" fill="#FF3B30"/>
        {/* Swoosh — pointed left tail, pinched S-curve waist, rounded right oval cap */}
        <path d="M0 27C5 19 10 23 16 22C21 21 27 19.5 33 18C37 18 37 26 33 26C27 26 21 25.5 16 25.5C10 25.5 5 28 0 27Z" fill="#0D1520"/>
      </svg>
      <span className={`font-syne font-bold ${text} leading-none`}>
        <span className="text-navy-100">Tube</span>
        <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">Scribed</span>
      </span>
    </Link>
  );
}
