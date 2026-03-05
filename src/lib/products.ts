import { Product } from "./cart-context";

export const products: Product[] = [
  {
    id: 1,
    name: "Body Wave Wig Bundle",
    price: 2160.0,
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
    category: "Body Wave",
    description: "Soft, bouncy body wave wig bundles with natural luster.",
  },
  {
    id: 2,
    name: "Deep Wave Wig Bundle",
    price: 2340.0,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    category: "Deep Wave",
    description: "Rich, voluminous deep wave wig bundles for full-bodied curls.",
  },
  {
    id: 3,
    name: "Loose Wave Wig Bundle",
    price: 2070.0,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    category: "Loose Wave",
    description: "Gentle, flowing loose wave wig bundles that offer natural movement.",
  },
  {
    id: 4,
    name: "Kinky Wave Wig Bundle",
    price: 2520.0,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
    category: "Kinky Wave",
    description: "Tight, textured kinky wave wig bundles for a bold look.",
  },
  {
    id: 5,
    name: "Wave Wig Closure",
    price: 810.0,
    image: "https://images.unsplash.com/photo-1470252649378-9c29740ff023?w=600&q=80",
    category: "Closures",
    description: "Natural wave wig closure piece to blend seamlessly with bundles.",
  },
  {
    id: 6,
    name: "Wave Wig Frontal",
    price: 1710.0,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    category: "Frontals",
    description: "Full-lace frontal featuring consistent wave pattern for wigs.",
  },
];

export const categories = [...new Set(products.map((p) => p.category))];
