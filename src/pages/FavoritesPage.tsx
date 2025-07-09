
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useFavorites } from '@/hooks/useFavorites';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FavoritesPage = () => {
  const { favorites, removeFromFavorites, clearFavorites, isLoading } = useFavorites();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center">
            <div className="loading-spinner" />
            <span className="ml-3 text-wine-700">Loading your favorites...</span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-wine-50 via-white to-gold-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/wines" 
            className="inline-flex items-center text-wine-600 hover:text-wine-800 mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Wines
          </Link>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-wine-600 mr-3 fill-current" />
              <div>
                <h1 className="text-4xl font-serif font-bold text-wine-900">My Favorites</h1>
                <p className="text-wine-700 mt-1">
                  {favorites.length} {favorites.length === 1 ? 'wine' : 'wines'} in your collection
                </p>
              </div>
            </div>
            
            {favorites.length > 0 && (
              <Button
                variant="outline"
                onClick={clearFavorites}
                className="border-wine-300 text-wine-700 hover:bg-wine-50"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            )}
          </div>
        </div>

        {/* Content */}
        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-wine-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-12 w-12 text-wine-400" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-wine-900 mb-4">
              No Favorites Yet
            </h2>
            <p className="text-wine-600 mb-8 max-w-md mx-auto">
              Start building your wine collection by adding wines you love to your favorites.
            </p>
            <Button asChild className="bg-wine-600 hover:bg-wine-700">
              <Link to="/wines">
                Explore Wines
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((wine, index) => (
              <div 
                key={wine.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-wine-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={wine.image}
                    alt={wine.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => removeFromFavorites(wine.id)}
                      className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-lg"
                    >
                      <Heart className="h-4 w-4 fill-current" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl text-wine-900 mb-2">
                    {wine.name}
                  </h3>
                  <p className="text-wine-700 font-medium mb-4">{wine.winery}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-wine-900">
                      ${wine.price}
                    </div>
                    <Button
                      size="sm"
                      className="bg-gold-500 hover:bg-gold-600 text-white"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-wine-100">
                    <div className="flex items-center justify-between text-sm text-wine-600">
                      <span>Added to favorites</span>
                      <Badge variant="secondary" className="bg-wine-50 text-wine-700">
                        {new Date(wine.addedAt).toLocaleDateString()}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default FavoritesPage;
