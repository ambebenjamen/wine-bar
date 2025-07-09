
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Star, Plus, Minus, Shield, Truck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { wines } from '@/data/wines';
import { useFavorites } from '@/hooks/useFavorites';
import { useCart } from '@/hooks/useCart';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WineCard from '@/components/WineCard';

const WineDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { addToCart } = useCart();

  const wine = wines.find(w => w.id === parseInt(id || '0'));

  if (!wine) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-wine-900 mb-4">Wine Not Found</h1>
          <p className="text-wine-600 mb-8">The wine you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/wines">Browse All Wines</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedWines = wines.filter(w => 
    w.id !== wine.id && 
    (w.type === wine.type || w.country === wine.country)
  ).slice(0, 4);

  const handleFavoriteToggle = () => {
    if (isFavorite(wine.id)) {
      removeFromFavorites(wine.id);
    } else {
      addToFavorites({
        id: wine.id,
        name: wine.name,
        winery: wine.winery,
        price: wine.price,
        image: wine.image,
      });
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: wine.id,
        name: wine.name,
        winery: wine.winery,
        price: wine.price,
        image: wine.image,
        vintage: wine.year,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wine-50 via-white to-gold-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <nav className="text-sm text-wine-600">
            <Link to="/" className="hover:text-wine-800">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/wines" className="hover:text-wine-800">Wines</Link>
            <span className="mx-2">/</span>
            <span className="text-wine-900">{wine.name}</span>
          </nav>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-wine-50 to-wine-100 rounded-2xl overflow-hidden">
              <img
                src={wine.image}
                alt={wine.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-2">
                <div className="flex text-gold-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(wine.rating) ? 'fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-wine-600">
                  {wine.rating} ({wine.reviews} reviews)
                </span>
              </div>
              
              <h1 className="text-4xl font-serif font-bold text-wine-900 mb-2">
                {wine.name}
              </h1>
              <p className="text-xl text-wine-700 font-medium mb-4">{wine.winery}</p>
              
              <div className="flex items-center gap-4 mb-6">
                <Badge variant="secondary" className="bg-wine-50 text-wine-700">
                  {wine.type}
                </Badge>
                <span className="text-wine-600">{wine.region}, {wine.country}</span>
                <span className="text-wine-600">Vintage {wine.year}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-wine-900">
                ${wine.price}
              </div>
              {wine.originalPrice && wine.originalPrice > wine.price && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    ${wine.originalPrice}
                  </span>
                  <Badge className="bg-green-100 text-green-800">
                    Save ${wine.originalPrice - wine.price}
                  </Badge>
                </>
              )}
            </div>

            <p className="text-wine-700 leading-relaxed">{wine.description}</p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-wine-900">Alcohol:</span>
                <span className="ml-2 text-wine-700">{wine.alcohol}%</span>
              </div>
              <div>
                <span className="font-medium text-wine-900">Varietal:</span>
                <span className="ml-2 text-wine-700">{wine.varietal.join(', ')}</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-wine-900 mb-2">Food Pairing</h3>
              <div className="flex flex-wrap gap-2">
                {wine.foodPairing.map((food, index) => (
                  <Badge key={index} variant="outline" className="border-wine-200 text-wine-700">
                    {food}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            {/* Add to Cart Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-wine-900">Quantity:</span>
                <div className="flex items-center border border-wine-200 rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[3rem] text-center font-medium">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-wine-600 hover:bg-wine-700 text-white py-3"
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart - ${(wine.price * quantity).toFixed(2)}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={handleFavoriteToggle}
                  className={`px-4 ${
                    isFavorite(wine.id)
                      ? 'bg-red-50 border-red-200 text-red-600'
                      : 'border-wine-200 text-wine-600'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isFavorite(wine.id) ? 'fill-current' : ''}`} />
                </Button>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-wine-100">
              <div className="text-center">
                <Shield className="h-6 w-6 text-wine-600 mx-auto mb-2" />
                <p className="text-sm text-wine-700">Secure Payment</p>
              </div>
              <div className="text-center">
                <Truck className="h-6 w-6 text-wine-600 mx-auto mb-2" />
                <p className="text-sm text-wine-700">Fast Delivery</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 text-wine-600 mx-auto mb-2" />
                <p className="text-sm text-wine-700">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Wines */}
        {relatedWines.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-wine-900 mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedWines.map((relatedWine) => (
                <WineCard key={relatedWine.id} wine={relatedWine} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default WineDetailPage;
