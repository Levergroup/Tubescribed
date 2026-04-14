import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * TubeScribed logo matching the brand identity:
 * - Red play-button triangle with white swoosh/speed line through it
 * - "Tube" in white (navy-100)
 * - "Scribed" in red-to-orange gradient
 */
export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { icon: 28, text: "text-lg" },
    md: { icon: 36, text: "text-xl" },
    lg: { icon: 48, text: "text-2xl" },
  };

  const { icon, text } = sizes[size];

  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      {/* SVG Play Button Icon with Swoosh */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Red play triangle */}
        <path
          d="M6 4L32 18L6 32V4Z"
          fill="#FF3B30"
        />
        {/* White swoosh / speed line through the middle */}
        <path
          d="M4 20C8 18.5 14 17 22 18.5C18 18 12 19.5 8 21.5L4 20Z"
          fill="white"
          opacity="0.9"
        />
        <path
          d="M8 15C13 13 20 13.5 28 16C22 14 15 14.5 10 16.5L8 15Z"
          fill="white"
          opacity="0.6"
        />
      </svg>

      {/* Wordmark */}
      <span className={`font-syne font-bold ${text} leading-none`}>
        <span className="text-navy-100">Tube</span>
        <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
          Scribed
        </span>
      </span>
    </Link>
  );
}
