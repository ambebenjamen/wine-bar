
import React, { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartHeader from '@/components/cart/CartHeader';
import EmptyCart from '@/components/cart/EmptyCart';
import CartItemsList from '@/components/cart/CartItemsList';
import OrderSummary from '@/components/cart/OrderSummary';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice, isLoading } = useCart();
  const { session } = useAuth();
  const { toast } = useToast();
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    setCheckoutLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { items: cart },
        headers: session ? { Authorization: `Bearer ${session.access_token}` } : {},
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout Error",
        description: error.message || "Failed to create checkout session. Please try again.",
        variant: "destructive",
      });
    } finally {
      setCheckoutLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center">
            <div className="loading-spinner" />
            <span className="ml-3 text-wine-700">Loading your cart...</span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const subtotal = getTotalPrice();
  const shipping = subtotal > 100 ? 0 : 12.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-wine-50 via-white to-gold-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <CartHeader 
          totalItems={getTotalItems()}
          onClearCart={clearCart}
          hasItems={cart.length > 0}
        />

        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CartItemsList 
              items={cart}
              onUpdateQuantity={updateQuantity}
              onRemoveFromCart={removeFromCart}
            />

            <OrderSummary 
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
              checkoutLoading={checkoutLoading}
              hasItems={cart.length > 0}
              session={session}
              onCheckout={handleCheckout}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
