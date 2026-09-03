import type { Metadata } from "next";
import { AboutNB } from "@/components/sections/AboutNB";

export const metadata: Metadata = {
  title: "About NB | NB Polyfilms",
  description:
    "About N.B Polyfilms, a Hyderabad-based flexible packaging converter founded in 2003.",
};

export default function AboutPage() {
  return <AboutNB />;
}
