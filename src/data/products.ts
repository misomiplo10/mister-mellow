export type Category = "flower" | "preroll" | "hash" | "edible" | "vape" | "accessory";
export type Tint = "lavender" | "peach" | "pink" | "butter" | "sky";

/** How a product is pictured: drawn packaging in brand colours, a cut-out photo, or a type label. */
export type Visual =
  | { kind: "pouch"; color: "purple" | "orange"; logo: "cream" | "navy"; label: string }
  | { kind: "tubes"; color: "pink" | "yellow"; label: string }
  | { kind: "lighter" }
  | { kind: "photo"; src: string; alt: string }
  | { kind: "label"; lines: string[] };

export interface Product {
  name: string;
  category: Category;
  format: string;
  strain?: "Indica" | "Sativa" | "Hybrid";
  size?: string;
  description: string;
  /** Indkøbspris ekskl. moms, kr */
  wholesale?: number;
  /** Vejledende udsalgspris inkl. moms, kr */
  retail?: number;
  onRequest?: boolean;
  featured?: boolean;
  tint: Tint;
  visual: Visual;
}

export interface CategoryInfo {
  id: Category;
  label: string;
  tint: Tint;
  visual: Visual;
}

export const categories: CategoryInfo[] = [
  { id: "flower", label: "Flower", tint: "lavender", visual: { kind: "photo", src: "/img/flower-trio.jpg", alt: "" } },
  { id: "preroll", label: "Pre-rolls", tint: "pink", visual: { kind: "tubes", color: "pink", label: "" } },
  { id: "hash", label: "Hash", tint: "peach", visual: { kind: "photo", src: "/img/fresh-frozen.jpg", alt: "" } },
  { id: "edible", label: "Edibles", tint: "butter", visual: { kind: "photo", src: "/img/chocolate-cone.jpg", alt: "" } },
  { id: "vape", label: "Vapes", tint: "sky", visual: { kind: "label", lines: ["2G", "VAPE"] } },
  { id: "accessory", label: "Tilbehør", tint: "peach", visual: { kind: "lighter" } },
];

export const products: Product[] = [
  {
    name: "Midnight Rider",
    category: "flower",
    format: "Pose",
    strain: "Indica",
    size: "6 g",
    description: "Vores signaturblanding til aftenen – blød og mellow til natteravnen i dig.",
    wholesale: 345,
    retail: 769,
    featured: true,
    tint: "lavender",
    visual: { kind: "pouch", color: "purple", logo: "cream", label: "Midnight Rider" },
  },
  {
    name: "Sunday Cruise",
    category: "flower",
    format: "Pose",
    strain: "Sativa",
    size: "2 g",
    description: "En frisk og opløftende blanding til dovne eftermiddage og lange weekender.",
    wholesale: 115,
    retail: 259,
    featured: true,
    tint: "peach",
    visual: { kind: "pouch", color: "orange", logo: "navy", label: "Sunday Cruise" },
  },
  {
    name: "Daydream",
    category: "preroll",
    format: "Pre-roll",
    strain: "Hybrid",
    size: "1 g",
    description: "Håndrullet med vores Daydream-blanding – blød og afslappende til et stille øjeblik.",
    wholesale: 49,
    retail: 125,
    featured: true,
    tint: "pink",
    visual: { kind: "tubes", color: "pink", label: "Daydream" },
  },
  {
    name: "Sunrise",
    category: "preroll",
    format: "Pre-roll",
    strain: "Sativa",
    size: "1 g",
    description: "Start dagen på den mellow måde. Frisk og opløftende – i dit eget tempo.",
    wholesale: 49,
    retail: 125,
    featured: true,
    tint: "butter",
    visual: { kind: "tubes", color: "yellow", label: "Sunrise" },
  },
  {
    name: "Fresh Frozen",
    category: "hash",
    format: "Hash",
    size: "2 g",
    description: "Fresh Frozen hash infused med THC-A – blød, aromatisk og fuld af karakter.",
    wholesale: 119,
    featured: true,
    tint: "peach",
    visual: { kind: "photo", src: "/img/fresh-frozen.jpg", alt: "Fresh Frozen hash" },
  },
  {
    name: "Dry Sift",
    category: "hash",
    format: "Hash",
    size: "2 g",
    description: "Klassisk Dry Sift hash med THC-A – ren, tør og aromatisk.",
    wholesale: 112,
    featured: true,
    tint: "lavender",
    visual: { kind: "photo", src: "/img/dry-sift.jpg", alt: "Dry Sift hash" },
  },
  {
    name: "Chocolate Cone",
    category: "edible",
    format: "Edible",
    description: "Infused med THC-A. Fremstilles udelukkende på bestilling.",
    onRequest: true,
    tint: "butter",
    visual: { kind: "photo", src: "/img/chocolate-cone.jpg", alt: "Chocolate Cone" },
  },
  {
    name: "THC-A Vapes",
    category: "vape",
    format: "Vape",
    size: "2 g",
    description: "All-in-one vapes med THC-A-olie fra Cookies og Lemonnade i flere smagsvarianter.",
    onRequest: true,
    tint: "sky",
    visual: { kind: "label", lines: ["2G", "VAPE"] },
  },
  {
    name: "Mister Mellow Lighter",
    category: "accessory",
    format: "Tilbehør",
    description: "Knaldorange BIC-lighter med Mister Mellow-logoet på begge sider.",
    wholesale: 9,
    tint: "peach",
    visual: { kind: "lighter" },
  },
];

export const metaLine = (p: Product) =>
  [p.category === "accessory" ? null : "THC-A", p.format, p.strain, p.size].filter(Boolean).join(" · ");

export const kr = (n: number) => `${n.toLocaleString("da-DK")} kr`;
