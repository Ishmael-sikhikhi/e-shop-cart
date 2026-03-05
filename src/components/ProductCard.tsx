import { ShoppingBag } from "lucide-react";
import { Product } from "@/lib/cart-context";
import { useCart } from "@/lib/cart-context";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div
      className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-glow"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <button
          onClick={handleAdd}
          className="absolute bottom-4 right-4 rounded-lg bg-gradient-primary p-3 text-primary-foreground opacity-0 shadow-glow transition-all duration-300 group-hover:opacity-100 hover:scale-105"
        >
          <ShoppingBag className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4 space-y-1">
        <p className="font-body text-xs font-medium uppercase tracking-wider text-muted-foreground">{product.category}</p>
        <h3 className="font-display text-base font-semibold text-foreground">{product.name}</h3>
        <p className="font-display text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
