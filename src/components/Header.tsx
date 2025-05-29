import React, { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Music className="h-8 w-8 text-purple-500" />
          <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Harmony
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white/90 hover:text-white transition-colors">
            Create
          </a>
          <a href="#" className="text-white/90 hover:text-white transition-colors">
            Discover
          </a>
          <a href="#" className="text-white/90 hover:text-white transition-colors">
            How It Works
          </a>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#" className="text-white/90 hover:text-white transition-colors py-2">
              Create
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors py-2">
              Discover
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors py-2">
              How It Works
            </a>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;