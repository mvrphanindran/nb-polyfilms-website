// Central content store. Every string here traces back to the supplied
// NB Polyfilms brochure or to explicit product-area instructions.
// Do not add claims, stats, certifications, or names that aren't sourced.

export const productAreas = [
  {
    slug: "flexible-laminates",
    name: "Flexible Laminates",
    description: "Advanced multi-layer laminates for superior performance.",
    image: "/images/brochure/solutions-laminates-corner.jpg",
  },
  {
    slug: "pouches",
    name: "Pouches",
    description:
      "A wide range of pouches designed for functionality, convenience and appeal.",
    image: "/images/brochure/solutions-pouches-group2.jpg",
  },
  {
    slug: "rollstock",
    name: "Rollstock",
    description:
      "High-quality printed and unprinted rolls for diverse packaging needs.",
    image: "/images/brochure/solutions-rollstock.jpg",
  },
  {
    slug: "high-barrier-packaging",
    name: "High Barrier Packaging",
    description:
      "High barrier solutions that protect your product and extend shelf life.",
    image: "/images/brochure/solutions-barrier-corner.jpg",
  },
  {
    slug: "shrink-sleeves",
    name: "Shrink Sleeves",
    description: "PVC and PETG shrink sleeves for full-body product presentation.",
    image: null,
  },
] as const;

export const structures = [
  { code: "PET / PE", image: "/images/brochure/structure-01.jpg" },
  { code: "PET / MET PET / PE", image: "/images/brochure/structure-02.jpg" },
  { code: "PET / ALU FOIL / PE", image: "/images/brochure/structure-03.jpg" },
  { code: "BOPP / MET CPP", image: "/images/brochure/structure-04.jpg" },
  { code: "BOPA / PE", image: "/images/brochure/structure-05.jpg" },
] as const;

export const capabilities = [
  {
    name: "Rotogravure Printing",
    tagline: "Vibrant. Consistent. Precise.",
    image: "/images/brochure/capability-01-rotogravure.jpg",
  },
  {
    name: "Lamination",
    tagline: "Strong, uniform bonding.",
    image: "/images/brochure/capability-02-lamination.jpg",
  },
  {
    name: "Extrusion",
    tagline: "Reliable film quality.",
    image: "/images/brochure/capability-03-extrusion.jpg",
  },
  {
    name: "Slitting & Rewinding",
    tagline: "Accuracy in every roll.",
    image: "/images/brochure/capability-04-slitting.jpg",
  },
] as const;

export const process = [
  { step: "01", label: "Raw Material", image: "/images/brochure/process-01-raw-material.jpg" },
  { step: "02", label: "Printing", image: "/images/brochure/process-02-printing.jpg" },
  { step: "03", label: "Lamination", image: "/images/brochure/process-03-lamination.jpg" },
  { step: "04", label: "Slitting", image: "/images/brochure/process-04-slitting.jpg" },
  { step: "05", label: "Inspection", image: "/images/brochure/process-05-inspection.jpg" },
  { step: "06", label: "Finished Product", image: "/images/brochure/process-06-finished-product.jpg" },
] as const;

export const industries = [
  { name: "FMCG", description: "Reliable packaging for fast-moving products across categories." },
  { name: "Snacks", description: "Crisp, fresh and impactful packaging that delights." },
  { name: "Spices", description: "Aroma-lock packaging that preserves purity and flavor." },
  { name: "Tea & Coffee", description: "Freshness and aroma retention in every cup." },
  { name: "Dry Fruits", description: "Premium packaging that protects goodness within." },
  { name: "Frozen Foods", description: "High barrier packaging for safe freezing and longer shelf life." },
  { name: "Agriculture & Seeds", description: "Durable packaging that safeguards seeds and grains." },
  { name: "Edible Oil", description: "Leak-proof, strong and reliable packaging." },
  { name: "Pesticides", description: "Safe, secure and compliant packaging solutions." },
  { name: "Grocery & Household", description: "Practical packaging for everyday essentials." },
] as const;

export const whyNB = [
  {
    number: "01",
    title: "Multi-Technology",
    description: "Multiple lamination and converting technologies for diverse packaging needs.",
  },
  {
    number: "02",
    title: "Broad Capability",
    description: "From film production to printing, lamination, slitting and inspection.",
  },
  {
    number: "03",
    title: "In-House R&D",
    description: "Established in-house R&D capability.",
  },
  {
    number: "04",
    title: "Experience & Scale",
    description: "Established in 2003. A flexible packaging converter built on integrated capability.",
  },
] as const;

export const quality = [
  {
    title: "Quality Control",
    description: "Strict checks at every stage to ensure consistency and excellence.",
  },
  {
    title: "Advanced Testing",
    description: "In-house lab equipped with advanced instruments for accurate testing.",
  },
  {
    title: "Consistent Performance",
    description: "Reliable properties, superior durability and performance in every package.",
  },
  {
    title: "Skilled Team",
    description: "Experienced professionals ensuring precision, process and product quality.",
  },
  {
    title: "Continuous Improvement",
    description: "We refine our processes every day to deliver better tomorrow.",
  },
] as const;

export const companyMeta = {
  established: "2003",
  coreBusiness: "Flexible Packaging",
  tagline: "Flexible packaging solutions for a better tomorrow.",
  positioningHeadline: "Packaging that creates possibilities.",
  description:
    "NB Polyfilms is a flexible packaging converter established in 2003, delivering high-performance packaging solutions for a wide range of products and industries. With a focus on quality, consistency and innovation, we turn film into functional, reliable and shelf-ready packaging.",
};

// Condensed, non-duplicative teasers for the homepage — each links out to its
// full page rather than reproducing that page's content.
export const homeHighlights = [
  {
    title: "Packaging Solutions",
    teaser: "Laminates, pouches, rollstock, barrier packaging and shrink sleeves.",
    href: "/solutions",
    image: "/images/brochure/solutions-pouches-lineup.jpg",
  },
  {
    title: "Manufacturing Capabilities",
    teaser: "Rotogravure printing, lamination, extrusion and slitting & rewinding.",
    href: "/capabilities",
    image: "/images/brochure/capability-01-rotogravure.jpg",
  },
  {
    title: "Industries We Serve",
    teaser: "FMCG, snacks, spices, tea & coffee, dry fruits and more.",
    href: "/industries",
    image: "/images/brochure/materials-roll.jpg",
  },
  {
    title: "Quality",
    teaser: "Quality is at the core of everything we do.",
    href: "/quality",
    image: "/images/brochure/quality-lab.jpg",
  },
] as const;
