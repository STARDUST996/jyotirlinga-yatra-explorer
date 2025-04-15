
import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Jyotirlingas', href: '#jyotirlingas' },
    { name: 'Packages', href: '#packages' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-3 md:py-4">
          <a href="#" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-saffron to-spiritual-dark rounded-full p-1.5">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800 font-['Cormorant_Garamond']">
              <span className="text-saffron">Jyotirlinga</span>{" "}
              <span className="text-spiritual-dark">Yatra</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-saffron transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-gradient-to-r from-saffron to-saffron-dark text-white px-4 py-2 rounded-md hover:shadow-md transition-all duration-300 text-sm font-medium">
              Plan Your Yatra
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
          )}
        >
          <div className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-saffron transition-colors duration-300 py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-gradient-to-r from-saffron to-saffron-dark text-white px-4 py-2 rounded-md hover:shadow-md transition-all duration-300 text-sm font-medium my-2">
              Plan Your Yatra
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
