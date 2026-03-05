import { Product } from "./cart-context";

export const products: Product[] = [
  {
    id: 1,
    name: "Body Wave Wig Bundle",
    price: 2160.0,
    image: "https://images.unsplash.com/photo-1559687840-61c5d3ed6ece?w=600&q=80",
    category: "Body Wave",
    description: "Soft, bouncy body wave wig bundles with natural luster.",
  },
  {
    id: 2,
    name: "Deep Wave Wig Bundle",
    price: 2340.0,
    image: "https://images.unsplash.com/photo-1531853121311-7f0482d1638f?w=600&q=80",
    category: "Deep Wave",
    description: "Rich, voluminous deep wave wig bundles for full-bodied curls.",
  },
  {
    id: 3,
    name: "Loose Wave Wig Bundle",
    price: 2070.0,
    image: "https://images.unsplash.com/photo-1492935193875-cc7ff9ad85c3?w=600&q=80",
    category: "Loose Wave",
    description: "Gentle, flowing loose wave wig bundles that offer natural movement.",
  },
  {
    id: 4,
    name: "Kinky Wave Wig Bundle",
    price: 2520.0,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    category: "Kinky Wave",
    description: "Tight, textured kinky wave wig bundles for a bold look.",
  },
  {
    id: 5,
    name: "Wave Wig Closure",
    price: 810.0,
    image: "https://images.unsplash.com/photo-1520975924074-3d508b051bb9?w=600&q=80",
    category: "Closures",
    description: "Natural wave wig closure piece to blend seamlessly with bundles.",
  },
  {
    id: 6,
    name: "Wave Wig Frontal",
    price: 1710.0,
    image: "https://images.unsplash.com/photo-1548062577-a6d4a23ed223?w=600&q=80",
    category: "Frontals",
    description: "Full-lace frontal featuring consistent wave pattern for wigs.",
  },
];

export const categories = [...new Set(products.map((p) => p.category))];
