import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Red Wines',
    description: 'Rich, bold, and complex',
    image: 'https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=600&h=400&fit=crop',
    link: '/wines?type=red',
    color: 'from-red-900 to-red-700'
  },
  {
    name: 'White Wines',
    description: 'Crisp, elegant, and refreshing',
    image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&h=400&fit=crop',
    link: '/wines?type=white',
    color: 'from-yellow-600 to-yellow-400'
  },
  {
    name: 'Sparkling',
    description: 'Celebrate life\'s moments',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=400&fit=crop',
    link: '/wines?type=sparkling',
    color: 'from-blue-600 to-blue-400'
  },
  {
    name: 'Rosé',
    description: 'Perfect for any season',
    image: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&h=400&fit=crop',
    link: '/wines?type=rosé',
    color: 'from-pink-600 to-pink-400'
  },
  {
    name: 'Dessert Wines',
    description: 'Sweet wines for after dinner delight',
    image: 'https://images.unsplash.com/photo-1610371982096-f253f82d86a0?w=600&h=400&fit=crop',
    link: '/wines?type=dessert',
    color: 'from-amber-700 to-amber-500'
  },
  {
    name: 'Fortified Wines',
    description: 'Bold flavors with a higher kick',
    image: 'https://images.unsplash.com/photo-1604908554204-16c889f34c6b?w=600&h=400&fit=crop',
    link: '/wines?type=fortified',
    color: 'from-purple-800 to-purple-600'
  },
  {
    name: 'Organic Wines',
    description: 'Purely crafted, naturally grown',
    image: 'https://images.unsplash.com/photo-1581091870627-3e44a5c31f9a?w=600&h=400&fit=crop',
    link: '/wines?type=organic',
    color: 'from-green-700 to-green-500'
  },
  {
    name: 'Orange Wines',
    description: 'Unique amber hue and ancient technique',
    image: 'https://images.unsplash.com/photo-1612197872848-9ce1bdf61451?w=600&h=400&fit=crop',
    link: '/wines?type=orange',
    color: 'from-orange-700 to-orange-500'
  }
];

const WineCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our extensive collection organized by wine type. 
            Each category features carefully selected bottles to suit every palate.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.link}
              className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-80 transition-opacity`} />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2 group-hover:scale-105 transition-transform">
                  {category.name}
                </h3>
                <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                  {category.description}
                </p>
                
                {/* Hover arrow */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">
                    Explore Collection →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WineCategories;
