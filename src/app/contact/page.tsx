import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | NB Polyfilms",
  description: "Get in touch with NB Polyfilms.",
};

export default function ContactPage() {
  return <Contact />;
}
