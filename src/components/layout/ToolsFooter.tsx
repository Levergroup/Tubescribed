import Link from "next/link";

export function ToolsFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-gray-400 text-xs">© 2026 TubeScribed. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy-policy" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
