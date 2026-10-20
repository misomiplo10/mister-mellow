export type Category = "flower" | "preroll" | "hash";
export type Tint = "lavender" | "peach" | "pink" | "butter";

/** How the product is pictured: a drawn pouch/tube in brand colours, or a cut-out photo. */
export type Visual =
  | { kind: "pouch"; color: "purple" | "orange"; logo: "cream" | "navy" }
  | { kind: "tubes"; color: "pink" | "yellow" }
  | { kind: "photo"; src: string; alt: string };

export interface Product {
  name: string;
  category: Category;
  meta: string;
  description: string;
  /** Indkøbspris ekskl. moms, kr */
  wholesale: number;
  /** Vejledende udsalgspris inkl. moms, kr */
  retail?: number;
  tint: Tint;
  visual: Visual;
}

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "Alle" },
  { id: "flower", label: "Flower" },
  { id: "preroll", label: "Pre-rolls" },
  { id: "hash", label: "Hash" },
];

export const products: Product[] = [
  {
    name: "Midnight Rider",
    category: "flower",
    meta: "THC-A · Pose · Indica · 6 g",
    description: "Vores signaturblanding til aftenen – blød og mellow til natteravnen i dig.",
    wholesale: 345,
    retail: 769,
    tint: "lavender",
    visual: { kind: "pouch", color: "purple", logo: "cream" },
  },
  {
    name: "Sunday Cruise",
    category: "flower",
    meta: "THC-A · Pose · Sativa · 2 g",
    description: "En frisk og opløftende blanding til dovne eftermiddage og lange weekender.",
    wholesale: 115,
    retail: 259,
    tint: "peach",
    visual: { kind: "pouch", color: "orange", logo: "navy" },
  },
  {
    name: "Daydream",
    category: "preroll",
    meta: "THC-A · Pre-roll · Hybrid · 1 g",
    description: "Håndrullet med vores Daydream-blanding – blød og afslappende til et stille øjeblik.",
    wholesale: 49,
    retail: 125,
    tint: "pink",
    visual: { kind: "tubes", color: "pink" },
  },
  {
    name: "Sunrise",
    category: "preroll",
    meta: "THC-A · Pre-roll · Sativa · 1 g",
    description: "Start dagen på den mellow måde. Frisk og opløftende – i dit eget tempo.",
    wholesale: 49,
    retail: 125,
    tint: "butter",
    visual: { kind: "tubes", color: "yellow" },
  },
  {
    name: "Fresh Frozen",
    category: "hash",
    meta: "THC-A · Hash · 2 g",
    description: "Fresh Frozen hash infused med THC-A – blød, aromatisk og fuld af karakter.",
    wholesale: 119,
    tint: "peach",
    visual: { kind: "photo", src: "/img/fresh-frozen.jpg", alt: "Fresh Frozen hash" },
  },
  {
    name: "Dry Sift",
    category: "hash",
    meta: "THC-A · Hash · 2 g",
    description: "Klassisk Dry Sift hash med THC-A – ren, tør og aromatisk.",
    wholesale: 112,
    tint: "lavender",
    visual: { kind: "photo", src: "/img/dry-sift.jpg", alt: "Dry Sift hash" },
  },
];

export const accessories = [
  { name: "Mister Mellow Lighter", type: "Tilbehør", wholesale: 9 },
];

export const kr = (n: number) => `${n.toLocaleString("da-DK")} kr`;
