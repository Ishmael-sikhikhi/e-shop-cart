import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { toast } from "sonner";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    toast.success("Order placed successfully! 🎉", {
      description: `Total: $${totalPrice.toFixed(2)}`,
    });
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
      <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-card animate-slide-in-right">
        <div className="flex items-center justify-between border-b border-border p-6">
          <h2 className="font-display text-lg font-bold text-foreground">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-muted-foreground font-body">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 rounded-lg border border-border bg-secondary/50 p-4">
                  <img src={item.image} alt={item.name} className="h-20 w-20 rounded-md object-cover" />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-display text-sm font-semibold text-foreground">{item.name}</h3>
                      <p className="font-body text-sm text-primary font-semibold">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded bg-muted p-1 text-muted-foreground hover:text-foreground transition-colors">
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="font-body text-sm font-medium text-foreground w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded bg-muted p-1 text-muted-foreground hover:text-foreground transition-colors">
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                      <button onClick={() => removeItem(item.id)} className="ml-auto rounded p-1 text-destructive/70 hover:text-destructive transition-colors">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-body text-muted-foreground">Total</span>
                <span className="font-display text-xl font-bold text-foreground">${totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full rounded-lg bg-gradient-primary py-3.5 font-display text-sm font-bold text-primary-foreground transition-all hover:opacity-90 shadow-glow"
              >
                Checkout — ${totalPrice.toFixed(2)}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
