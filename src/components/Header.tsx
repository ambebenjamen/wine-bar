import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Heart, ShoppingCart, User, Wine, LogOut, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';
import { useAuth } from '@/contexts/AuthContext';
import { useAuth as useClerkAuth } from '@clerk/clerk-react';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();
  const { favoritesCount } = useFavorites();
  const { user, signOut } = useAuth();
  const { isSignedIn } = useClerkAuth();
  const { toast } = useToast();

  const cartItemCount = getTotalItems();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Wines', href: '/wines' },
    { name: 'Red Wines', href: '/wines?type=red' },
    { name: 'White Wines', href: '/wines?type=white' },
    { name: 'Sparkling', href: '/wines?type=sparkling' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <header className="bg-white shadow-lg border-b border-wine-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group flex-shrink-0 min-w-0">
            <div className="bg-gradient-to-br from-wine-600 to-wine-800 p-2 rounded-lg group-hover:from-wine-700 group-hover:to-wine-900 transition-all duration-300">
              <Wine className="h-6 w-6 text-white" />
            </div>
            <div className="truncate">
              <h1 className="text-lg sm:text-xl font-serif font-bold text-wine-900 group-hover:text-wine-700 transition-colors truncate">
                Vintner's Choice
              </h1>
              <p className="hidden sm:block text-xs text-wine-600 -mt-1 truncate">Premium Wine Collection</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-wine-600 relative ${
                  isActive(item.href) 
                    ? 'text-wine-800 after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-wine-600' 
                    : 'text-wine-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            {/* Search */}
            <Button variant="ghost" size="icon" className="hidden sm:flex text-wine-700 hover:text-wine-900">
              <Search className="h-5 w-5" />
            </Button>

            {/* Favorites */}
            <Link to="/favorites">
              <Button variant="ghost" size="icon" className="relative text-wine-700 hover:text-wine-900">
                <Heart className="h-5 w-5" />
                {favoritesCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-[10px] bg-red-500 hover:bg-red-500 flex items-center justify-center">
                    {favoritesCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative text-wine-700 hover:text-wine-900">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-[10px] bg-wine-600 hover:bg-wine-600 flex items-center justify-center">
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User Account - Clerk or Supabase */}
            {user || isSignedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-wine-700 hover:text-wine-900">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium text-wine-900">
                      {user?.user_metadata?.full_name || 'Wine Lover'}
                    </p>
                    <p className="text-xs text-wine-600">{user?.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  {isSignedIn && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link to="/admin" className="flex items-center">
                          <Settings className="h-4 w-4 mr-2" />
                          Admin Panel
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="ghost" size="sm" className="text-wine-700 hover:text-wine-900 hidden sm:flex">
                <Link to="/auth">
                  <User className="h-4 w-4 mr-1" />
                  Sign In
                </Link>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-wine-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-wine-100 animate-fade-in-up">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                    isActive(item.href)
                      ? 'text-wine-800 bg-wine-50'
                      : 'text-wine-700 hover:text-wine-900 hover:bg-wine-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-2 pt-2 border-t border-wine-100">
                <Button variant="ghost" size="sm" className="flex items-center text-wine-700">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                {user ? (
                  <Button variant="ghost" size="sm" onClick={handleSignOut} className="flex items-center text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                ) : (
                  <Button asChild variant="ghost" size="sm" className="flex items-center text-wine-700">
                    <Link to="/auth">
                      <User className="h-4 w-4 mr-2" />
                      Sign In
                    </Link>
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
