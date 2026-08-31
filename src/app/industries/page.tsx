import type { Metadata } from "next";
import { Industries } from "@/components/sections/Industries";

export const metadata: Metadata = {
  title: "Industries We Serve | NB Polyfilms",
  description:
    "NB Polyfilms serves FMCG, snacks, spices, tea & coffee, dry fruits, frozen foods, agriculture, edible oil, pesticides and grocery & household industries.",
};

export default function IndustriesPage() {
  return <Industries />;
}
