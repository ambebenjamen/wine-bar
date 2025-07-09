import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useFavorites } from '@/hooks/useFavorites';
import { useCart } from '@/hooks/useCart';

interface Wine {
  id: number;
  name: string;
  winery: string;
  region: string;
  year: number;
  type: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  isOnSale?: boolean;
  isFeatured?: boolean;
  description?: string;
}

interface WineCardProps {
  wine: Wine;
}

const WineCard = ({ wine }: WineCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { addToCart } = useCart();

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
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

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id: wine.id,
      name: wine.name,
      winery: wine.winery,
      price: wine.price,
      image: wine.image,
      vintage: wine.year,
    });
  };

  return (
    <Link 
      to={`/wine/${wine.id}`}
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-wine-100 hover:border-wine-200 transform hover:-translate-y-2 block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sale badge */}
      {wine.isOnSale && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 animate-pulse">
            Sale
          </Badge>
        </div>
      )}

      {/* Featured badge */}
      {wine.isFeatured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 py-1">
            <Star className="h-3 w-3 mr-1 fill-current" />
            Featured
          </Badge>
        </div>
      )}

      {/* Favorite button */}
      <button
        onClick={handleFavoriteToggle}
        className={`absolute top-4 right-4 z-20 p-2 rounded-full transition-all duration-300 ${
          wine.isFeatured ? 'top-12' : ''
        } ${
          isFavorite(wine.id)
            ? 'bg-red-500 text-white scale-110'
            : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
        } backdrop-blur-sm shadow-lg hover:scale-125 transform`}
      >
        <Heart className={`h-4 w-4 ${isFavorite(wine.id) ? 'fill-current' : ''}`} />
      </button>

      {/* Image container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-wine-50 to-wine-100">
        <img
          src={wine.image}
          alt={wine.name}
          className={`w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-wine-100 to-wine-200 animate-pulse" />
        )}
        
        {/* Overlay with quick actions */}
        <div className={`absolute inset-0 bg-wine-900/80 flex items-center justify-center gap-3 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button
            size="sm"
            className="bg-white text-wine-800 hover:bg-wine-100 transform hover:scale-105 transition-all duration-200"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Eye className="h-4 w-4 mr-2" />
            Quick View
          </Button>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="bg-gold-500 hover:bg-gold-600 text-white transform hover:scale-105 transition-all duration-200"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center mb-3">
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
          <span className="text-sm text-gray-600">
            {wine.rating} ({wine.reviews} reviews)
          </span>
        </div>

        {/* Wine details */}
        <div className="mb-4">
          <h3 className="font-serif font-bold text-xl text-wine-900 mb-1 group-hover:text-wine-700 transition-colors">
            {wine.name}
          </h3>
          <p className="text-wine-700 font-medium mb-1">{wine.winery}</p>
          <p className="text-sm text-gray-600">{wine.region} • {wine.year}</p>
        </div>

        {/* Type badge */}
        <div className="mb-4">
          <Badge variant="secondary" className="bg-wine-50 text-wine-700 border-wine-200 capitalize">
            {wine.type}
          </Badge>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-wine-900">
              ${wine.price}
            </span>
            {wine.originalPrice && wine.originalPrice > wine.price && (
              <span className="text-lg text-gray-500 line-through">
                ${wine.originalPrice}
              </span>
            )}
          </div>
          
          {wine.isOnSale && wine.originalPrice && (
            <Badge className="bg-green-100 text-green-800">
              Save ${wine.originalPrice - wine.price}
            </Badge>
          )}
        </div>
      </div>
    </Link>
  );
};

export default WineCard;
