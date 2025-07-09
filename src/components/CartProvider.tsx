
import React from 'react';
import { CartContext, useCartState } from '@/hooks/useCart';

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const cartState = useCartState();
  
  return (
    <CartContext.Provider value={cartState}>
      {children}
    </CartContext.Provider>
  );
};
