
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Wine, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our wine community.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-16 wine-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Wine className="h-8 w-8" />
          </div>

          {/* Content */}
          <h2 className="text-4xl font-serif font-bold mb-4">
            Join Our Wine Community
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get exclusive access to new arrivals, special offers, wine education, 
            and expert recommendations delivered to your inbox.
          </p>

          {/* Newsletter form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white/40"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="bg-gold-500 hover:bg-gold-600 text-white px-8"
              >
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </form>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Weekly Picks</h4>
              <p className="text-sm opacity-80">Curated wine recommendations</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Exclusive Offers</h4>
              <p className="text-sm opacity-80">Member-only discounts & deals</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Wine Education</h4>
              <p className="text-sm opacity-80">Tips, pairings, and knowledge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
