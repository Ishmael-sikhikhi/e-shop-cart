import { ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/lib/cart-context";

const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          <span className="text-gradient">LUXE</span>
          <span className="text-foreground">STORE</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className={`font-body text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={`font-body text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/shop" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Shop
          </Link>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative rounded-lg bg-secondary p-2.5 transition-colors hover:bg-muted"
          >
            <ShoppingBag className="h-5 w-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary font-body text-xs font-bold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
