
import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, Grid, List } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WineCard from '@/components/WineCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { wines, Wine } from '@/data/wines';

const WinesPage = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get initial filter from URL params
  const typeFromUrl = searchParams.get('type');
  
  // Filter and sort wines
  const filteredWines = useMemo(() => {
    let filtered = wines.filter(wine => {
      // Type filter (from URL or checkboxes)
      if (typeFromUrl && wine.type !== typeFromUrl) return false;
      if (selectedTypes.length > 0 && !selectedTypes.includes(wine.type)) return false;
      
      // Price filter
      if (wine.price < priceRange[0] || wine.price > priceRange[1]) return false;
      
      // Country filter
      if (selectedCountries.length > 0 && !selectedCountries.includes(wine.country)) return false;
      
      return true;
    });

    // Sort wines
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'year':
          return b.year - a.year;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [typeFromUrl, selectedTypes, selectedCountries, priceRange, sortBy]);

  const wineTypes = Array.from(new Set(wines.map(wine => wine.type)));
  const countries = Array.from(new Set(wines.map(wine => wine.country)));

  const handleTypeChange = (type: string, checked: boolean) => {
    setSelectedTypes(prev => 
      checked 
        ? [...prev, type]
        : prev.filter(t => t !== type)
    );
  };

  const handleCountryChange = (country: string, checked: boolean) => {
    setSelectedCountries(prev => 
      checked 
        ? [...prev, country]
        : prev.filter(c => c !== country)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                {typeFromUrl ? `${typeFromUrl.charAt(0).toUpperCase() + typeFromUrl.slice(1)} Wines` : 'All Wines'}
              </h1>
              <p className="text-gray-600">
                Showing {filteredWines.length} of {wines.length} wines
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* View mode toggle */}
              <div className="flex items-center border rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Sort dropdown */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="year">Newest Vintage</SelectItem>
                </SelectContent>
              </Select>

              {/* Filters toggle */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar filters */}
          {showFilters && (
            <div className="w-80 bg-white rounded-lg shadow-sm border p-6 h-fit">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </h3>

              {/* Price range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={1000}
                  step={10}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Wine types */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Wine Type</h4>
                <div className="space-y-2">
                  {wineTypes.map(type => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox
                        id={type}
                        checked={selectedTypes.includes(type)}
                        onCheckedChange={(checked) => handleTypeChange(type, checked as boolean)}
                      />
                      <label htmlFor={type} className="text-sm capitalize cursor-pointer">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Countries */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Country</h4>
                <div className="space-y-2">
                  {countries.map(country => (
                    <div key={country} className="flex items-center space-x-2">
                      <Checkbox
                        id={country}
                        checked={selectedCountries.includes(country)}
                        onCheckedChange={(checked) => handleCountryChange(country, checked as boolean)}
                      />
                      <label htmlFor={country} className="text-sm cursor-pointer">
                        {country}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedTypes([]);
                  setSelectedCountries([]);
                  setPriceRange([0, 1000]);
                }}
                className="w-full"
              >
                Clear All Filters
              </Button>
            </div>
          )}

          {/* Wine grid */}
          <div className="flex-1">
            {filteredWines.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No wines found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedTypes([]);
                    setSelectedCountries([]);
                    setPriceRange([0, 1000]);
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {filteredWines.map((wine, index) => (
                  <div key={wine.id} style={{ animationDelay: `${index * 50}ms` }}>
                    <WineCard wine={wine} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WinesPage;
