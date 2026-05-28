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
        <path d="M8 4.5C5.5 4.5 5 6.5 5 8V28C5 30 5.5 31.5 8 31.5C9.5 31.5 10.5 31 32 19.5C33.5 18.8 34 18.4 34 18C34 17.6 33.5 17.2 32 16.5C10.5 5 9.5 4.5 8 4.5Z" fill="#FF3B30"/>
        <path d="M5 21C8.5 19.5 15 18 23 19C28.5 19.7 31.5 19.3 34.5 18.7V20.5C31.5 21.1 28.5 21.5 23 20.8C15 19.8 8.5 21.3 5 22.8Z" fill="#0D1520"/>
      </svg>
      <span className={`font-syne font-bold ${text} leading-none`}>
        <span className="text-navy-100">Tube</span>
        <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">Scribed</span>
      </span>
    </Link>
  );
}
