
import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CheckoutSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear the cart after successful payment
    if (sessionId) {
      clearCart();
    }
  }, [sessionId, clearCart]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-wine-50 via-white to-gold-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl font-serif font-bold text-wine-900 mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-xl text-wine-700 mb-8">
            Thank you for your purchase. Your order has been confirmed and you'll receive an email confirmation shortly.
          </p>
          
          {sessionId && (
            <div className="bg-white rounded-lg p-6 border border-wine-200 mb-8">
              <p className="text-sm text-wine-600 mb-2">Order Reference:</p>
              <p className="font-mono text-wine-900 break-all">{sessionId}</p>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-wine-600 hover:bg-wine-700">
              <Link to="/wines">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Continue Shopping
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="border-wine-300 text-wine-700 hover:bg-wine-50">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutSuccessPage;
