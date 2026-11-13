"use client";

import { MotionConfig } from "framer-motion";

/**
 * Makes every Framer Motion animation on the site respect the user's
 * prefers-reduced-motion setting: transform/position animations are skipped
 * and components render at their final state. Pairs with the global
 * reduced-motion CSS rule for CSS animations.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
