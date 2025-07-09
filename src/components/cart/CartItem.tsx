
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem as CartItemType } from '@/hooks/useCart';

interface CartItemProps {
  item: CartItemType;
  index: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveFromCart: (id: number) => void;
}

const CartItem = ({ item, index, onUpdateQuantity, onRemoveFromCart }: CartItemProps) => {
  return (
    <div 
      className="bg-white rounded-2xl shadow-sm border border-wine-100 p-6 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center space-x-4">
        <div className="relative w-20 h-20 bg-gradient-to-br from-wine-50 to-wine-100 rounded-lg overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <Link 
            to={`/wine/${item.id}`}
            className="font-serif font-bold text-lg text-wine-900 hover:text-wine-700 transition-colors"
          >
            {item.name}
          </Link>
          <p className="text-wine-700 font-medium">{item.winery}</p>
          {item.vintage && (
            <p className="text-sm text-wine-600">Vintage {item.vintage}</p>
          )}
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center border border-wine-200 rounded-lg">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="h-8 w-8 p-0"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="px-3 py-1 min-w-[2rem] text-center font-medium">
              {item.quantity}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="h-8 w-8 p-0"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <div className="text-right">
            <div className="font-bold text-wine-900">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <div className="text-sm text-wine-600">
              ${item.price.toFixed(2)} each
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemoveFromCart(item.id)}
            className="text-red-600 hover:text-red-800 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
