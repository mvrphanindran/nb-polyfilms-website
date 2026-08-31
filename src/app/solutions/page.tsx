import type { Metadata } from "next";
import { PackagingSolutions } from "@/components/sections/PackagingSolutions";

export const metadata: Metadata = {
  title: "Packaging Solutions | NB Polyfilms",
  description:
    "Flexible laminates, pouches, rollstock, high barrier packaging and shrink sleeves from NB Polyfilms.",
};

export default function SolutionsPage() {
  return <PackagingSolutions />;
}
