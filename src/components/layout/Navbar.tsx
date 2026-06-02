"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, USE_CASE_LINKS, APP_URL } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isMobileOpen, setIsMobileOpen]   = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false); // mobile accordion
  const [desktopOpen, setDesktopOpen]     = useState(false); // desktop dropdown
  const dropdownRef                        = useRef<HTMLDivElement>(null);
  const pathname                           = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace("/#", "/"));

  const isUseCaseActive = USE_CASE_LINKS.some((l) => pathname.startsWith(l.href));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center bg-navy-950/95 backdrop-blur-sm border-b border-navy-700 transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.4)]" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <Logo size="md" />

        {/* ── Desktop nav ── */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-dm-sans text-sm font-medium transition-colors duration-200 relative pb-0.5 ${
                isActive(link.href) ? "text-navy-100" : "text-navy-400 hover:text-navy-100"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red rounded-full" />
              )}
            </Link>
          ))}

          {/* Solutions dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDesktopOpen((o) => !o)}
              className={`flex items-center gap-1 font-dm-sans text-sm font-medium transition-colors duration-200 pb-0.5 relative ${
                isUseCaseActive ? "text-navy-100" : "text-navy-400 hover:text-navy-100"
              }`}
            >
              Solutions
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${desktopOpen ? "rotate-180" : ""}`}
              />
              {isUseCaseActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red rounded-full" />
              )}
            </button>

            <AnimatePresence>
              {desktopOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-8 left-1/2 -translate-x-1/2 w-56 bg-[#0D1520] border border-[#2D3F55] rounded-xl shadow-2xl py-2 z-50"
                >
                  {USE_CASE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setDesktopOpen(false)}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        pathname.startsWith(link.href)
                          ? "text-white bg-[#1E2A3A]"
                          : "text-[#94A3B8] hover:text-white hover:bg-[#1E2A3A]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-dm-sans text-sm font-medium transition-colors duration-200 relative pb-0.5 ${
                isActive(link.href) ? "text-navy-100" : "text-navy-400 hover:text-navy-100"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red rounded-full" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`${APP_URL}/login`}
            className="text-sm font-medium text-navy-400 hover:text-navy-100 transition-colors duration-200 px-3 py-2"
          >
            Log in
          </a>
          <motion.a
            href={`${APP_URL}/signup`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
          >
            Start Free
          </motion.a>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-navy-400 hover:text-navy-100 transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-navy-950 border-b border-navy-700 lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
              {/* Flat links before Solutions */}
              {NAV_LINKS.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`text-base font-medium py-2.5 px-3 rounded-lg transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-white bg-[#1E2A3A] border-l-2 border-brand-red"
                      : "text-navy-400 hover:text-navy-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Solutions accordion */}
              <div>
                <button
                  onClick={() => setSolutionsOpen((o) => !o)}
                  className={`w-full flex items-center justify-between text-base font-medium py-2.5 px-3 rounded-lg transition-colors ${
                    isUseCaseActive ? "text-white" : "text-navy-400 hover:text-navy-100"
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-1 flex flex-col gap-0.5 border-l-2 border-[#2D3F55] ml-3 mt-1">
                        {USE_CASE_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => { setIsMobileOpen(false); setSolutionsOpen(false); }}
                            className={`text-sm py-2 px-2 rounded-lg transition-colors ${
                              pathname.startsWith(link.href)
                                ? "text-white font-medium"
                                : "text-navy-400 hover:text-navy-100"
                            }`}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Flat links after Solutions */}
              {NAV_LINKS.slice(3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`text-base font-medium py-2.5 px-3 rounded-lg transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-white bg-[#1E2A3A] border-l-2 border-brand-red"
                      : "text-navy-400 hover:text-navy-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-navy-700">
                <a
                  href={`${APP_URL}/login`}
                  className="text-center text-sm font-medium text-navy-400 hover:text-navy-100 transition-colors py-2"
                >
                  Log in
                </a>
                <a
                  href={`${APP_URL}/signup`}
                  className="btn-gradient text-white text-sm font-semibold px-5 py-3 rounded-xl text-center"
                >
                  Start Free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
