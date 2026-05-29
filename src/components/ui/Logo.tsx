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
        <path d="M8 4C5 4 4.5 6.5 4.5 8L4.5 28C4.5 29.5 5 32 8 32C10 32 11 31.3 32 19.8C33.5 19 34.5 18.5 34.5 18C34.5 17.5 33.5 17 32 16.2C11 4.7 10 4 8 4Z" fill="#FF3B30"/>
        <path d="M1 21C6 14 15 17 21 19C26 20.5 30 19.5 34 18.5C30 19.5 26 23 20 24C13 25 6 27 1 21Z" fill="#0D1520"/>
      </svg>
      <span className={`font-syne font-bold ${text} leading-none`}>
        <span className="text-navy-100">Tube</span>
        <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">Scribed</span>
      </span>
    </Link>
  );
}
