import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// import heroBanner from "@/assets/hero-banner.jpg";

import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1200&q=80" alt="Luxurious wave hair collection" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        </div>
        <div className="container relative mx-auto px-4 pt-16">
          <div className="max-w-xl space-y-6 animate-fade-in">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">New Wave Collection 2026</p>
            <h1 className="font-display text-5xl font-bold leading-tight text-foreground md:text-7xl">
              Elevate Your <span className="text-gradient">Look</span>
            </h1>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              Curated luxury wave hair designed for those who appreciate beautiful texture.
            </p>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-8 py-4 font-display text-sm font-bold text-primary-foreground shadow-glow transition-all hover:opacity-90"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">Handpicked</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground">Featured Products</h2>
            </div>
            <Link to="/shop" className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
