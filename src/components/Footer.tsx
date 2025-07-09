
import React from 'react';
import { Link } from 'react-router-dom';
import { Wine, Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wine className="h-8 w-8 text-wine-400" />
              <span className="text-2xl font-serif font-bold">
                Vintner's Choice
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner in discovering exceptional wines from around the world. 
              Curated by experts, delivered with care.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-wine-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-wine-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-wine-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-wine-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/wines" className="text-gray-300 hover:text-wine-400 transition-colors">
                  All Wines
                </Link>
              </li>
              <li>
                <Link to="/wines?type=red" className="text-gray-300 hover:text-wine-400 transition-colors">
                  Red Wines
                </Link>
              </li>
              <li>
                <Link to="/wines?type=white" className="text-gray-300 hover:text-wine-400 transition-colors">
                  White Wines
                </Link>
              </li>
              <li>
                <Link to="/wines?type=sparkling" className="text-gray-300 hover:text-wine-400 transition-colors">
                  Sparkling
                </Link>
              </li>
              <li>
                <Link to="/gifts" className="text-gray-300 hover:text-wine-400 transition-colors">
                  Gift Sets
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-300 hover:text-wine-400 transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-300 hover:text-wine-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-wine-400 transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-wine-400 transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-wine-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-wine-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-wine-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-wine-400" />
                <span className="text-gray-300">(671139674)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-wine-400" />
                <span className="text-gray-300">ambebenjamen5@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-wine-400 mt-1" />
                <span className="text-gray-300">
                  Douala-cameroon<br />
                  bonamousadi, Rue de la paix
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Vintner's Choice. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>We accept:</span>
              <div className="flex space-x-2">
                <div className="bg-gray-800 px-2 py-1 rounded text-xs">VISA</div>
                <div className="bg-gray-800 px-2 py-1 rounded text-xs">MC</div>
                <div className="bg-gray-800 px-2 py-1 rounded text-xs">AMEX</div>
                <div className="bg-gray-800 px-2 py-1 rounded text-xs">PAYPAL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
