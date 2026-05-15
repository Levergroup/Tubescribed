import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_LINKS } from "@/lib/constants";
import { Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-4"><Logo size="md" /></div>
            <p className="text-navy-400 text-sm leading-relaxed mb-5">From YouTube to Done — in seconds.</p>
            <div className="flex items-center gap-3">
              <a href="https://twitter.com/tubescribed" aria-label="Twitter" className="text-navy-400 hover:text-navy-100 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/company/tubescribed" aria-label="LinkedIn" className="text-navy-400 hover:text-navy-100 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://youtube.com/@tubescribed" aria-label="YouTube" className="text-navy-400 hover:text-navy-100 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-syne font-semibold text-navy-100 mb-4 text-sm tracking-wide uppercase">Product</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http")
                    ? <a href={link.href} className="text-navy-400 hover:text-navy-100 text-sm transition-colors duration-200">{link.label}</a>
                    : <Link href={link.href} className="text-navy-400 hover:text-navy-100 text-sm transition-colors duration-200">{link.label}</Link>}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-syne font-semibold text-navy-100 mb-4 text-sm tracking-wide uppercase">Use Cases</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.useCases.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-navy-400 hover:text-navy-100 text-sm transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-syne font-semibold text-navy-100 mb-4 text-sm tracking-wide uppercase">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-navy-400 hover:text-navy-100 text-sm transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-syne font-semibold text-navy-100 mb-4 text-sm tracking-wide uppercase">Compare</h4>
            <ul className="space-y-3">
              {[
                { label: "vs Otter.ai", href: "/vs/otter-ai" },
                { label: "vs Descript", href: "/vs/descript" },
                { label: "vs Tactiq", href: "/vs/tactiq" },
                { label: "vs NoteGPT", href: "/vs/notegpt" },
                { label: "vs ChatGPT", href: "/vs/chatgpt" },
                { label: "vs YouTube Captions", href: "/vs/youtube-captions" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-navy-400 hover:text-navy-100 text-sm transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-500 text-xs">© 2026 TubeScribed. All rights reserved. Built with Claude AI.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {FOOTER_LINKS.compliance.map((link) => (
              <Link key={link.href} href={link.href} className="text-navy-500 hover:text-navy-300 text-xs transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
