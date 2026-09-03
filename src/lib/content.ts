// Central content store. Every string here traces back to the supplied
// NB Polyfilms brochure or to explicit product-area instructions.
// Do not add claims, stats, certifications, or names that aren't sourced.

export const productAreas = [
  {
    slug: "flexible-laminates",
    name: "Flexible Laminates",
    description: "Advanced multi-layer laminates for superior performance.",
  },
  {
    slug: "pouches",
    name: "Pouches",
    description:
      "A wide range of pouches designed for functionality, convenience and appeal.",
  },
  {
    slug: "rollstock",
    name: "Rollstock",
    description:
      "High-quality printed and unprinted rolls for diverse packaging needs.",
  },
  {
    slug: "high-barrier-packaging",
    name: "High Barrier Packaging",
    description:
      "High barrier solutions that protect your product and extend shelf life.",
  },
  {
    slug: "shrink-sleeves",
    name: "Shrink Sleeves",
    description: "PVC and PETG shrink sleeves for full-body product presentation.",
  },
] as const;

export const structures = [
  { code: "PET / PE" },
  { code: "PET / MET PET / PE" },
  { code: "PET / ALU FOIL / PE" },
  { code: "BOPP / MET CPP" },
  { code: "BOPA / PE" },
] as const;

export const capabilities = [
  {
    name: "Rotogravure Printing",
    tagline: "Vibrant. Consistent. Precise.",
    image: "/images/Capability- Rotogravure Printing.png",
  },
  {
    name: "Lamination",
    tagline: "Strong, uniform bonding.",
    image: "/images/Capability-Lamination.png",
  },
  {
    name: "Extrusion",
    tagline: "Reliable film quality.",
    image: null,
  },
  {
    name: "Slitting & Rewinding",
    tagline: "Accuracy in every roll.",
    image: null,
  },
] as const;

export const process = [
  { step: "01", label: "Raw Material", image: "/images/Process 01-rawMaterial.png" },
  { step: "02", label: "Printing", image: "/images/Process02-Printing.png" },
  { step: "03", label: "Lamination", image: "/images/Process03-Lamination.png" },
  { step: "04", label: "Slitting", image: "/images/Process 04-Slitting.png" },
  { step: "05", label: "Inspection", image: "/images/Process05-Inspection.png" },
  { step: "06", label: "Finished Product", image: "/images/Process 06-finished Product.png" },
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
  positioningHeadline: "Engineered flexible packaging, built for performance.",
  description:
    "NB Polyfilms is a flexible packaging converter established in 2003, delivering high-performance packaging solutions for a wide range of products and industries. The company turns film into functional, reliable and shelf-ready packaging.",
};

export const aboutNB = {
  eyebrow: "About NB",
  openingTitle: (
    "Built on experience.\n" +
    "Driven by packaging."
  ),
  title: "A converter built around capability.",
  intro:
    "N.B Polyfilms is a premier Flexible Packaging converter, based in Hyderabad. Founded in 2003 by a team of professionals with expertise in flexible, printed and laminated products.",
  profile: [
    "Founded by professionals with expertise in flexible, printed and laminated products including single and multiple layer films, pouches and rolls, N.B Polyfilms caters to industries such as tea, snacks, spices, pesticides, health and body care detergents, biscuits, confectionery and vegetable oil films.",
    "The company specializes in packaging and laminate products including printed packaging, food packaging, pharma packaging, sea food packaging, retort packaging, vacuum packaging, aluminium foil laminates, flexible laminates and barrier laminates.",
    "N.B Polyfilms is focused on building a world-class company with facilities encompassing various materials, technologies, products and a dynamic team. Its commitments include product quality, cost-effective packaging solutions, timely delivery schedules, customer-focused after-sales service and customer satisfaction.",
  ],
  vision:
    "To become a market leader in flexible packaging solutions, provide impetus to packaging development through suitable packaging solutions and produce zero defect goods through stringent quality standards.",
  mission:
    "To obtain maximum customer satisfaction, by providing technically suitable products at the most competitive prices with committed schedules.",
  whyPoints: [
    "State-of-the-art production facilities",
    "6,000 MT per annum capacity",
    "Well-established in-house R&D team",
    "Reputed clientele across industries",
    "World-renowned quality",
  ],
  requirementHeadline: "Packaging engineered around the requirement.",
  requirementCopy:
    "One of the company's major strengths lies in developing different laminate structures to achieve the required barrier properties and provide economical alternatives to existing flexible packaging, enabling customers to reduce costs.",
  commitments: [
    "Product quality",
    "Cost-effective packaging solutions",
    "Timely delivery",
    "Customer-focused service",
    "Customer satisfaction",
  ],
  sustainabilityTitle: (
    "Packaging that performs.\n" +
    "Packaging that moves forward."
  ),
  sustainability: [
    "N.B Polyfilms and its team collaborate to design sustainable product packaging, coupled with environmentally friendly packaging solutions.",
    "Material technology can support packaging solutions that are good for business and better for the environment.",
    "The company has developed recyclable solutions for various applications and invites customers to connect with its sustainability team to explore opportunities suited to their product requirements without compromising aesthetics or performance.",
    "When a suitable solution is not already available, N.B Polyfilms is eager to assist customers in developing packaging suited to their requirements.",
  ],
} as const;

// Condensed, non-duplicative teasers for the homepage — each links out to its
// full page rather than reproducing that page's content.
export const homeHighlights = [
  {
    title: "Packaging Solutions",
    teaser: "Laminates, pouches, rollstock, barrier packaging and shrink sleeves.",
    href: "/solutions",
    image: "/images/Solutions Tile-Material Detail.png",
  },
  {
    title: "Manufacturing Capabilities",
    teaser: "Rotogravure printing, lamination, extrusion and slitting & rewinding.",
    href: "/capabilities",
    image: "/images/Capabilities Tile-Machinery Detail.png",
  },
  {
    title: "Industries We Serve",
    teaser: "FMCG, snacks, spices, tea & coffee, dry fruits and more.",
    href: "/industries",
    image: "/images/Industries Tile-pouch Grouping.png",
  },
  {
    title: "Quality",
    teaser: "Quality is at the core of everything we do.",
    href: "/quality",
    image: "/images/Quality Tile-Testing Detail.png",
  },
] as const;
