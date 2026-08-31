import type { Metadata } from "next";
import { ManufacturingCapabilities } from "@/components/sections/ManufacturingCapabilities";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities | NB Polyfilms",
  description:
    "Rotogravure printing, lamination, extrusion and slitting & rewinding — NB Polyfilms' end-to-end manufacturing process.",
};

export default function CapabilitiesPage() {
  return <ManufacturingCapabilities />;
}
