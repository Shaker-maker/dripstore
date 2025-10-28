import React from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onAuthClick: () => void;
  onSearchClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onAuthClick, onSearchClick }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold tracking-tight">DRIPSTORE</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              <button className="text-sm font-medium hover:text-gray-600 transition-colors">New</button>
              <button className="text-sm font-medium hover:text-gray-600 transition-colors">Tops</button>
              <button className="text-sm font-medium hover:text-gray-600 transition-colors">Bottoms</button>
              <button className="text-sm font-medium hover:text-gray-600 transition-colors">Outerwear</button>
              <button className="text-sm font-medium hover:text-gray-600 transition-colors">Accessories</button>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            <button onClick={onSearchClick} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={onAuthClick} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button onClick={onCartClick} className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
