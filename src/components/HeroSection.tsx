
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Truck, Shield, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Main hero */}
      <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1920&h=1080&fit=crop&q=80"
            alt="Premium wine collection in elegant cellar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wine-900/90 via-wine-800/70 to-wine-700/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-wine-900/80 via-transparent to-transparent" />
        </div>

        {/* Floating wine bottles animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 opacity-10 animate-float">
            <div className="w-8 h-16 bg-wine-300 rounded-full transform rotate-12" />
          </div>
          <div className="absolute top-40 right-20 opacity-10 animate-float-delayed">
            <div className="w-6 h-12 bg-gold-300 rounded-full transform -rotate-12" />
          </div>
          <div className="absolute bottom-40 left-1/4 opacity-10 animate-float-slow">
            <div className="w-10 h-20 bg-wine-400 rounded-full transform rotate-6" />
          </div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-4">
                <div className="flex text-gold-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                  ))}
                </div>
                <span className="text-gold-300 font-medium">Premium Wine Collection</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent animate-gradient">
                  Exceptional
                </span>
                <br />
                <span className="text-white">Wines Await</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                Discover rare vintages and premium selections from the world's finest vineyards. 
                Each bottle tells a story of passion, tradition, and excellence.
              </p>
              
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <Button size="lg" className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Link to="/wines" className="flex items-center">
                    Explore Collection
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-wine-800 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-300"
                >
                  Wine Education
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Enhanced features bar */}
      <div className="bg-gradient-to-r from-wine-50 to-gold-50 shadow-lg border-b border-wine-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-4 text-center md:text-left group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-wine-500 to-wine-600 p-4 rounded-full shadow-lg group-hover:shadow-xl transition-shadow">
                <Award className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-wine-900 text-lg">Expert Curation</h3>
                <p className="text-wine-700">Hand-selected by master sommeliers</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-center md:text-left group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-gold-500 to-gold-600 p-4 rounded-full shadow-lg group-hover:shadow-xl transition-shadow">
                <Truck className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-wine-900 text-lg">Premium Delivery</h3>
                <p className="text-wine-700">Climate-controlled shipping worldwide</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-center md:text-left group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-wine-600 to-wine-700 p-4 rounded-full shadow-lg group-hover:shadow-xl transition-shadow">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-wine-900 text-lg">Authenticity Guaranteed</h3>
                <p className="text-wine-700">Certified provenance & quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
