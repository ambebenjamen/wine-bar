
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CartHeaderProps {
  totalItems: number;
  onClearCart: () => void;
  hasItems: boolean;
}

const CartHeader = ({ totalItems, onClearCart, hasItems }: CartHeaderProps) => {
  return (
    <div className="mb-8">
      <Link 
        to="/wines" 
        className="inline-flex items-center text-wine-600 hover:text-wine-800 mb-4 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Continue Shopping
      </Link>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <ShoppingCart className="h-8 w-8 text-wine-600 mr-3" />
          <div>
            <h1 className="text-4xl font-serif font-bold text-wine-900">Shopping Cart</h1>
            <p className="text-wine-700 mt-1">
              {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
        </div>
        
        {hasItems && (
          <Button
            variant="outline"
            onClick={onClearCart}
            className="border-wine-300 text-wine-700 hover:bg-wine-50"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default CartHeader;
