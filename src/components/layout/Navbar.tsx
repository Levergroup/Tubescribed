"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, APP_URL } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href.replace("/#", "/"));

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center bg-navy-950/95 backdrop-blur-sm border-b border-navy-700 transition-shadow duration-300 ${isScrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.4)]" : ""}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <Logo size="md" />
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={`font-dm-sans text-sm font-medium transition-colors duration-200 relative pb-0.5 ${isActive(link.href) ? "text-navy-100" : "text-navy-400 hover:text-navy-100"}`}>
              {link.label}
              {isActive(link.href) && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red rounded-full" />}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <a href={`${APP_URL}/login`} className="text-sm font-medium text-navy-400 hover:text-navy-100 transition-colors duration-200 px-3 py-2">Log in</a>
          <motion.a href={`${APP_URL}/signup`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-xl">Start Free</motion.a>
        </div>
        <button className="lg:hidden text-navy-400 hover:text-navy-100 transition-colors" onClick={() => setIsMobileOpen(!isMobileOpen)} aria-label="Toggle menu">
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="absolute top-16 left-0 right-0 bg-navy-950 border-b border-navy-700 lg:hidden">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsMobileOpen(false)} className={`text-base font-medium py-2 transition-colors duration-200 ${isActive(link.href) ? "text-navy-100 border-l-2 border-brand-red pl-3" : "text-navy-400 hover:text-navy-100 pl-3"}`}>{link.label}</Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-navy-700">
                <a href={`${APP_URL}/login`} className="text-center text-sm font-medium text-navy-400 hover:text-navy-100 transition-colors py-2">Log in</a>
                <a href={`${APP_URL}/signup`} className="btn-gradient text-white text-sm font-semibold px-5 py-3 rounded-xl text-center">Start Free</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
