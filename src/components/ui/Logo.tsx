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
  const maskId = `ts-swoosh-${size}`;
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <svg width={icon} height={icon} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Swoosh is cut OUT of the triangle (negative space) so the background shows through, exactly like the reference */}
        <mask id={maskId}>
          <rect width="40" height="40" fill="white" />
          <path
            d="M10.5 30 C14.5 28.5 17.5 27.3 21 26.8 C24 26.3 26.5 24.6 29.8 23.6 C31.6 23.1 32.2 24.6 30.8 25.6 C27.8 27.6 24.5 26.6 21 27.6 C17 28.7 14 30 10.5 30 Z"
            fill="black"
          />
        </mask>
        {/* Red play triangle with large rounded corners, S-swoosh masked out */}
        <path
          d="M9.9 10.2 Q9.9 6.8 12.78 8.61 L31.82 20.59 Q34.7 22.4 31.74 24.08 L12.86 34.82 Q9.9 36.5 9.9 33.1 Z"
          fill="#FF3B30"
          mask={`url(#${maskId})`}
        />
      </svg>
      <span className={`font-syne font-bold ${text} leading-none`}>
        <span className="text-navy-100">Tube</span>
        <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">Scribed</span>
      </span>
    </Link>
  );
}
