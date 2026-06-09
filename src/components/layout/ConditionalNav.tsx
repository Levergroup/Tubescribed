"use client";
import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { ToolsNav } from "./ToolsNav";

export function ConditionalNav() {
  const pathname = usePathname();
  return pathname.startsWith("/tools") ? <ToolsNav /> : <Navbar />;
}
