
import { useState, useEffect, createContext, useContext } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface CartItem {
  id: number;
  name: string;
  winery: string;
  price: number;
  image: string;
  quantity: number;
  vintage?: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (wine: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (wineId: number) => void;
  updateQuantity: (wineId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const CART_KEY = 'vintner_choice_cart';

export const useCartState = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      }
    } catch (error) {
      console.error('Error loading cart:', error);
      localStorage.removeItem(CART_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
      } catch (error) {
        console.error('Error saving cart:', error);
        toast({
          title: "Storage Error",
          description: "Unable to save cart. Please check your browser settings.",
          variant: "destructive",
        });
      }
    }
  }, [cart, isLoading, toast]);

  const addToCart = (wine: Omit<CartItem, 'quantity'>) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === wine.id);
      
      if (existingItem) {
        toast({
          title: "Quantity Updated",
          description: `${wine.name} quantity increased to ${existingItem.quantity + 1}.`,
        });
        return prev.map(item =>
          item.id === wine.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      toast({
        title: "Added to Cart",
        description: `${wine.name} has been added to your cart.`,
      });

      return [...prev, { ...wine, quantity: 1 }];
    });
  };

  const removeFromCart = (wineId: number) => {
    setCart(prev => {
      const wine = prev.find(item => item.id === wineId);
      if (wine) {
        toast({
          title: "Removed from Cart",
          description: `${wine.name} has been removed from your cart.`,
        });
      }
      return prev.filter(item => item.id !== wineId);
    });
  };

  const updateQuantity = (wineId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(wineId);
      return;
    }

    setCart(prev =>
      prev.map(item =>
        item.id === wineId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    isLoading,
  };
};

export { CartContext };
