import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { WhyNB } from "@/components/sections/WhyNB";
import { Highlights } from "@/components/sections/Highlights";
import { Clients } from "@/components/sections/Clients";
import { PackagingSolutions } from "@/components/sections/PackagingSolutions";
import { HomeCTA } from "@/components/sections/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <WhyNB />
      <Highlights />
      <Clients />
      <PackagingSolutions />
      <HomeCTA />
    </>
  );
}
