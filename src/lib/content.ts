// Central content store. Every string here traces back to the supplied
// NB Polyfilms brochure or to explicit product-area instructions.
// Do not add claims, stats, certifications, or names that aren't sourced.

export const productAreas = [
  {
    slug: "pouches",
    name: "Pouches",
    description:
      "A wide range of pouches designed for functionality, convenience and appeal.",
    image: "/images/Pouch-Format-Grouping.png",
    imageWidth: 1536,
    imageHeight: 1024,
  },
  {
    slug: "rollstock",
    name: "Rollstock",
    description:
      "High-quality printed and unprinted rolls for diverse packaging needs.",
    image: "/images/Finished-rollstock.png",
    imageWidth: 1448,
    imageHeight: 1086,
  },
  {
    slug: "shrink-sleeves",
    name: "Shrink Sleeves",
    description: "PVC and PETG shrink sleeves for full-body product presentation.",
    image: "/images/Shrink-Sleeve on-Container.png",
    imageWidth: 1086,
    imageHeight: 1448,
  },
] as const;

export const structures = [
  { code: "PET / PE" },
  { code: "PET / MET PET / PE" },
  { code: "PET / ALU FOIL / PE" },
  { code: "BOPP / MET CPP" },
  { code: "BOPA / PE" },
] as const;

// Infrastructure page nav anchors — one entry per major capability section.
export const capabilities = [
  { name: "Rotogravure Printing" },
  { name: "In-line Flexo" },
  { name: "Lamination" },
  { name: "Extrusion Coating Lamination" },
  { name: "UV Coating" },
  { name: "Hot Foil Stamping & Embossing" },
  { name: "Slitting" },
  { name: "Blown Film" },
] as const;

// Machine and capacity data for the Infrastructure page. Figures supplied
// directly by the client — do not alter, round, or supplement with figures
// from another source.
export const rotogravurePresses = [
  { name: "Printing 1", speed: "220 mpm", width: "1000 mm", colours: "8" },
  { name: "Printing 2", speed: "200 mpm", width: "1000 mm", colours: "8" },
  { name: "Printing 3", speed: "250 mpm", width: "1300 mm", colours: "8" },
  { name: "Printing 4", speed: "350 mpm", width: "1300 mm", colours: "8+1" },
] as const;

export const inlineFlexoPress = {
  name: "Printing 5",
  speed: "175 mpm",
  width: "670 mm",
  colours: "10",
};

export const solventlessLamination = {
  quantity: "4",
  width: "1300 mm",
  speed: "350 mpm",
};

export const triplexLamination = {
  speed: "200 mpm",
  hoodLength: "14 meter",
  hotAir: "up to 220°C",
  width: "1020 mm",
};

export const extrusionCoatingLamination = {
  coating: "7–30 gsm",
  width: "1300 mm",
};

export const uvCoating = {
  speed: "200 mpm",
  width: "1080 mm",
};

export const hotFoilStamping = {
  speed: "125 stamps/minute",
  width: "1080 mm",
};

export const slitting = {
  quantity: "4",
  speed: "450 mpm",
  width: "1300 mm",
};

export const blownFilm = {
  layers: "Three-layer",
  output: "200 kg/hr",
  width: "1600 mm",
};

export const process = [
  { step: "01", label: "Raw Material", image: "/images/Process 01-rawMaterial.png" },
  { step: "02", label: "Printing", image: "/images/Process02-Printing.png" },
  { step: "03", label: "Lamination", image: "/images/Process03-Lamination.png" },
  { step: "04", label: "Slitting", image: "/images/Process 04-Slitting.png" },
  { step: "05", label: "Inspection", image: "/images/Process05-Inspection.png" },
  { step: "06", label: "Finished Product", image: "/images/Process 06-finished Product.png" },
] as const;

export const industries = [
  {
    slug: "fmcg",
    name: "FMCG",
    description: "Reliable packaging for fast-moving products across categories.",
    image: "/images/Pouch-Format-Range.png",
    banner: "/images/solutions/fmcg.png",
  },
  {
    slug: "snacks",
    name: "Snacks",
    description: "Crisp, fresh and impactful packaging that delights.",
    image: "/images/Pouch-Format-Grouping.png",
    banner: "/images/solutions/snacks.png",
  },
  {
    slug: "spices",
    name: "Spices",
    description: "Aroma-lock packaging that preserves purity and flavor.",
    image: "/images/Printed Laminate-In-Process.png",
    banner: "/images/solutions/spices-masala.png",
  },
  {
    slug: "tea-coffee",
    name: "Tea & Coffee",
    description: "Freshness and aroma retention in every cup.",
    image: "/images/Printed Laminate Close-Up.png",
    banner: "/images/solutions/tea-coffee.png",
  },
  {
    slug: "dry-fruits",
    name: "Dry Fruits",
    description: "Premium packaging that protects goodness within.",
    image: "/images/Multi-Layer Structure Cross-Section.png",
    banner: "/images/solutions/dryfruits-nuts.png",
  },
  {
    slug: "frozen-foods",
    name: "Frozen Foods",
    description: "High barrier packaging for safe freezing and longer shelf life.",
    image: "/images/Mono-Material Film.png",
    banner: "/images/solutions/frozen food.png",
  },
  {
    slug: "agriculture-seeds",
    name: "Agriculture & Seeds",
    description: "Durable packaging that safeguards seeds and grains.",
    image: "/images/Finished-rollstock.png",
    banner: "/images/solutions/Agriculture.png",
  },
  {
    slug: "confectionery",
    name: "Confectionery",
    description: "Flexible packaging for chocolates, candies and confectionery.",
    image: "/images/Pouch-Format-Grouping.png",
    banner: "/images/solutions/confectioneries.png",
  },
  {
    slug: "toiletries",
    name: "Toiletries",
    description: "Flexible packaging for personal care and toiletry products.",
    image: "/images/Shrink-Sleeve on-Container.png",
    banner: "/images/solutions/toiletries.png",
  },
  {
    slug: "idly-dosa-batter",
    name: "Idly & Dosa Batter",
    description: "Packaging for fresh, ready-to-use batters and everyday foods.",
    image: "/images/Printed Laminate-In-Process.png",
    banner: "/images/solutions/idly-dsoa-batter.png",
  },
  {
    slug: "pet-food",
    name: "Pet Food",
    description: "Flexible packaging for pet food and pet care products.",
    image: "/images/Hands-On Process Detail.png",
    banner: "/images/solutions/Pet-food.png",
  },
  {
    slug: "edible-oil",
    name: "Edible Oil",
    description: "Leak-proof, strong and reliable packaging.",
    image: "/images/Solutions Tile-Material Detail.png",
    banner: null,
  },
  {
    slug: "pesticides",
    name: "Pesticides",
    description: "Safe, secure and compliant packaging solutions.",
    image: "/images/Hands-On Process Detail.png",
    banner: null,
  },
  {
    slug: "grocery-household",
    name: "Grocery & Household",
    description: "Practical packaging for everyday essentials.",
    image: "/images/Shrink-Sleeve on-Container.png",
    banner: null,
  },
] as const;

// The Solutions landing page shows exactly the industries a client photo
// banner exists for, in that banner's own order — not the full industries
// list (which also includes a few industries with no banner yet).
export const solutionsGallery = industries.filter((i) => i.banner !== null);

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

// General QA/QC practice across the flexible packaging converting industry,
// mapped to NB's own process stages (see `process`). Describes standard
// industry checks, not specific instrument brands or certifications.
export const qaProcesses = [
  {
    stage: "Raw Material",
    title: "Incoming material checks.",
    description:
      "Films and substrates are checked on arrival for thickness, appearance and consistency before they are released into printing and lamination, so that any variation is caught before it enters the process rather than after.",
  },
  {
    stage: "Printing",
    title: "Print and colour consistency.",
    description:
      "Printed rolls are monitored for registration, colour accuracy and shade consistency during the run, typically checked under standardised lighting conditions so that colour reads the same from the first roll to the last.",
  },
  {
    stage: "Lamination",
    title: "Bond strength verification.",
    description:
      "The bond between laminated layers is tested for peel and adhesive strength, confirming that the structure holds together through filling, handling and transport rather than only under lab conditions.",
  },
  {
    stage: "Slitting",
    title: "Dimensional accuracy.",
    description:
      "Slit width, roll tension and winding are checked so finished rolls run cleanly on customers' packing and filling lines without misfeeds or tension-related defects.",
  },
  {
    stage: "Inspection",
    title: "Physical and performance testing.",
    description:
      "Properties such as coefficient of friction, thermal stability and tensile strength are evaluated against the requirement of the application, since a structure that performs on paper still has to behave correctly on a running line.",
  },
  {
    stage: "Inspection",
    title: "Seal and pack integrity.",
    description:
      "Finished pouches and seals are checked for leaks and seal integrity, which is standard practice across the flexible packaging industry wherever a pack has to protect its contents through distribution and shelf life.",
  },
  {
    stage: "Finished Product",
    title: "Final inspection and documentation.",
    description:
      "Before dispatch, finished rolls and pouches go through a final check against the order specification, with results recorded so that quality stays traceable back to the batch it came from.",
  },
] as const;

export const companyMeta = {
  established: "2003",
  coreBusiness: "Flexible Packaging",
  tagline: "A flexible packaging converter built on integrated capability.",
  positioningHeadline: "Engineered flexible packaging, built for performance.",
  description:
    "NB Polyfilms is a flexible packaging converter established in 2003, delivering high-performance packaging solutions for a wide range of products and industries. The company turns film into functional, reliable and shelf-ready packaging.",
  // TODO: replace with the confirmed NB Polyfilms contact email.
  email: "info@nbpolyfilms.com",
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
    teaser: "Pouches, rollstock and shrink sleeves engineered around your product.",
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
