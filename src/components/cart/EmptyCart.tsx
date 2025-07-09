
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmptyCart = () => {
  return (
    <div className="text-center py-16">
      <div className="bg-wine-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
        <ShoppingCart className="h-12 w-12 text-wine-400" />
      </div>
      <h2 className="text-2xl font-serif font-bold text-wine-900 mb-4">
        Your Cart is Empty
      </h2>
      <p className="text-wine-600 mb-8 max-w-md mx-auto">
        Discover our premium wine collection and add some bottles to your cart.
      </p>
      <Button asChild className="bg-wine-600 hover:bg-wine-700">
        <Link to="/wines">
          Start Shopping
        </Link>
      </Button>
    </div>
  );
};

export default EmptyCart;
