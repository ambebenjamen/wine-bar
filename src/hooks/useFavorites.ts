
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface FavoriteWine {
  id: number;
  name: string;
  winery: string;
  price: number;
  image: string;
  addedAt: string;
}

const FAVORITES_KEY = 'vintner_choice_favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteWine[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem(FAVORITES_KEY);
      if (savedFavorites) {
        const parsedFavorites = JSON.parse(savedFavorites);
        // Validate the data structure
        if (Array.isArray(parsedFavorites)) {
          setFavorites(parsedFavorites);
        }
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
      // Clear corrupted data
      localStorage.removeItem(FAVORITES_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      } catch (error) {
        console.error('Error saving favorites:', error);
        toast({
          title: "Storage Error",
          description: "Unable to save favorites. Please check your browser settings.",
          variant: "destructive",
        });
      }
    }
  }, [favorites, isLoading, toast]);

  const addToFavorites = (wine: Omit<FavoriteWine, 'addedAt'>) => {
    const newFavorite: FavoriteWine = {
      ...wine,
      addedAt: new Date().toISOString(),
    };

    setFavorites(prev => {
      // Check if already exists
      if (prev.some(fav => fav.id === wine.id)) {
        toast({
          title: "Already in Favorites",
          description: `${wine.name} is already in your favorites.`,
        });
        return prev;
      }

      toast({
        title: "Added to Favorites",
        description: `${wine.name} has been added to your favorites.`,
      });

      return [...prev, newFavorite];
    });
  };

  const removeFromFavorites = (wineId: number) => {
    setFavorites(prev => {
      const wine = prev.find(fav => fav.id === wineId);
      if (wine) {
        toast({
          title: "Removed from Favorites",
          description: `${wine.name} has been removed from your favorites.`,
        });
      }
      return prev.filter(fav => fav.id !== wineId);
    });
  };

  const isFavorite = (wineId: number) => {
    return favorites.some(fav => fav.id === wineId);
  };

  const clearFavorites = () => {
    setFavorites([]);
    toast({
      title: "Favorites Cleared",
      description: "All favorites have been removed.",
    });
  };

  return {
    favorites,
    isLoading,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    clearFavorites,
    favoritesCount: favorites.length,
  };
};
