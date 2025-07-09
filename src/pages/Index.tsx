
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedWines from '@/components/FeaturedWines';
import WineCategories from '@/components/WineCategories';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturedWines />
      <WineCategories />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
