import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function ToolsNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center bg-white border-b border-gray-200">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <Link href="/" aria-label="TubeScribed home">
          <Logo size="md" />
        </Link>
        <a
          href="https://app.tubescribed.com/signup"
          className="bg-[#FF3B30] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E53528] transition-colors"
        >
          Try Free
        </a>
      </nav>
    </header>
  );
}
