import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ContactClient } from "@/components/ContactClient";

export const metadata: Metadata = buildMetadata({
  title: "Contact TubeScribed — Get Support or Ask Us Anything",
  description: "Have a question, need support, or want to discuss an agency or enterprise plan? Get in touch with the TubeScribed team.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactClient />;
}
