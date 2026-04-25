import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-4"><Logo size="md" /></div>
            <p className="text-navy-400 text-sm leading-relaxed mb-4">From YouTube to Done — in seconds.</p>
            <p className="text-navy-400 text-xs">© 2025 TubeScribed. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-syne font-semibold text-navy-100 mb-4 text-sm tracking-wide uppercase">Product</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>{link.href.startsWith("http") ? <a href={link.href} className="text-navy-400 hover:text-navy-100 text-sm transition-colors duration-200">{link.label}</a> : <Link href={link.href} className="text-navy-400 hover:text-navy-100 text-sm transition-colors duration-200">{link.label}</Link>}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-syne font-semibold text-navy-100 mb-4 text-sm tracking-wide uppercase">Use Cases</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.useCases.map((link) => (<li key={link.href}><Link href={link.href} className="text-navy-400 hover:text-navy-100 text-sm transition-colors duration-200">{link.label}</Link></li>))}
            </ul>
          </div>
          <div>
            <h4 className="font-syne font-semibold text-navy-100 mb-4 text-sm tracking-wide uppercase">Compare</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.compare.map((link) => (<li key={link.href}><Link href={link.href} className="text-navy-400 hover:text-navy-100 text-sm transition-colors duration-200">{link.label}</Link></li>))}
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-navy-400 hover:text-navy-100 text-xs transition-colors duration-200">Privacy Policy</a>
            <a href="/terms" className="text-navy-400 hover:text-navy-100 text-xs transition-colors duration-200">Terms of Service</a>
          </div>
          <p className="text-navy-400 text-xs">Built with Claude AI</p>
        </div>
      </div>
    </footer>
  );
}
