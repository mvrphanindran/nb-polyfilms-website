import type { Metadata } from "next";
import { Quality } from "@/components/sections/Quality";

export const metadata: Metadata = {
  title: "Quality | NB Polyfilms",
  description:
    "Quality control, advanced testing and consistent performance at the core of NB Polyfilms' flexible packaging.",
};

export default function QualityPage() {
  return <Quality />;
}
