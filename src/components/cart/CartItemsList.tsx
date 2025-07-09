
import React from 'react';
import { CartItem as CartItemType } from '@/hooks/useCart';
import CartItem from './CartItem';

interface CartItemsListProps {
  items: CartItemType[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveFromCart: (id: number) => void;
}

const CartItemsList = ({ items, onUpdateQuantity, onRemoveFromCart }: CartItemsListProps) => {
  return (
    <div className="lg:col-span-2 space-y-4">
      {items.map((item, index) => (
        <CartItem 
          key={item.id}
          item={item}
          index={index}
          onUpdateQuantity={onUpdateQuantity}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
    </div>
  );
};

export default CartItemsList;
