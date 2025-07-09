
import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Session } from '@supabase/supabase-js';

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  checkoutLoading: boolean;
  hasItems: boolean;
  session: Session | null;
  onCheckout: () => void;
}

const OrderSummary = ({
  subtotal,
  shipping,
  tax,
  total,
  checkoutLoading,
  hasItems,
  session,
  onCheckout
}: OrderSummaryProps) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-2xl shadow-lg border border-wine-100 p-6 sticky top-8">
        <h3 className="text-xl font-serif font-bold text-wine-900 mb-4">
          Order Summary
        </h3>
        
        <div className="space-y-3 mb-4">
          <div className="flex justify-between">
            <span className="text-wine-700">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-wine-700">Shipping</span>
            <span className="font-medium">
              {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-wine-700">Tax</span>
            <span className="font-medium">${tax.toFixed(2)}</span>
          </div>
          
          <Separator />
          
          <div className="flex justify-between text-lg font-bold text-wine-900">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {shipping > 0 && (
          <div className="bg-gold-50 border border-gold-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-gold-800">
              Add ${(100 - subtotal).toFixed(2)} more for free shipping!
            </p>
          </div>
        )}

        <Button 
          className="w-full bg-wine-600 hover:bg-wine-700 text-white py-3 mb-3"
          size="lg"
          onClick={onCheckout}
          disabled={checkoutLoading || !hasItems}
        >
          <CreditCard className="h-4 w-4 mr-2" />
          {checkoutLoading ? 'Processing...' : 'Proceed to Checkout'}
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full border-wine-300 text-wine-700 hover:bg-wine-50"
          asChild
        >
          <Link to="/wines">
            Continue Shopping
          </Link>
        </Button>

        {!session && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800 mb-2">
              Want to track your orders?
            </p>
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link to="/auth">Sign In / Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
