// Global typing for the GTM dataLayer used by lead-capture forms.
export {};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}
