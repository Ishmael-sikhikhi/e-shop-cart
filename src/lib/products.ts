import { Product } from "./cart-context";

export const products: Product[] = [
  {
    id: 1,
    name: "Urban Runner X",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    category: "Sneakers",
    description: "Premium running shoes with adaptive cushioning technology.",
  },
  {
    id: 2,
    name: "Midnight Chronograph",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
    category: "Watches",
    description: "Precision Swiss movement with sapphire crystal face.",
  },
  {
    id: 3,
    name: "Aviator Polarized",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    category: "Sunglasses",
    description: "UV400 polarized lenses with titanium frame.",
  },
  {
    id: 4,
    name: "Stealth Backpack",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    category: "Bags",
    description: "Water-resistant 30L capacity with hidden pockets.",
  },
  {
    id: 5,
    name: "Classic Leather Belt",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&q=80",
    category: "Accessories",
    description: "Full-grain Italian leather with brushed steel buckle.",
  },
  {
    id: 6,
    name: "Street Runner Pro",
    price: 219.99,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
    category: "Sneakers",
    description: "High-performance sneakers for urban athletes.",
  },
  {
    id: 7,
    name: "Titanium Sport Watch",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    category: "Watches",
    description: "Ultra-lightweight titanium case with 100m water resistance.",
  },
  {
    id: 8,
    name: "Wayfarer Shades",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
    category: "Sunglasses",
    description: "Retro-inspired design with modern anti-glare coating.",
  },
];

export const categories = [...new Set(products.map((p) => p.category))];
