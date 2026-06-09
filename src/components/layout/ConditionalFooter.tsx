"use client";
import { usePathname } from "next/navigation";
import { Footer } from "./Footer";
import { ToolsFooter } from "./ToolsFooter";

export function ConditionalFooter() {
  const pathname = usePathname();
  return pathname.startsWith("/tools") ? <ToolsFooter /> : <Footer />;
}
