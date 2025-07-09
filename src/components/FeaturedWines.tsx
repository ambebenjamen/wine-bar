
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WineCard from './WineCard';
import { wines } from '@/data/wines';

const FeaturedWines = () => {
  const featuredWines = wines.filter(wine => wine.isFeatured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Featured Selections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our sommelier's hand-picked favorites, featuring exceptional wines 
            from renowned vineyards around the world.
          </p>
        </div>

        {/* Wine grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredWines.map((wine, index) => (
            <div key={wine.id} style={{ animationDelay: `${index * 100}ms` }}>
              <WineCard wine={wine} />
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-wine-600 text-wine-700 hover:bg-wine-50">
            <Link to="/wines" className="flex items-center">
              View All Wines
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWines;
