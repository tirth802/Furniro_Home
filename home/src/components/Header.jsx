import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="p-4 md:p-6 bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Furniro</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {['Home', 'Shop', 'About', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-gray-600 hover:text-orange-500 transition duration-200">
              {item}
            </a>
          ))}
        </div>

        {/* Icons (using simple placeholders for brevity) */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-orange-500">👤</button> {/* User Icon */}
          <button className="text-gray-600 hover:text-orange-500">🔍</button> {/* Search Icon */}
          <button className="text-gray-600 hover:text-orange-500">💖</button> {/* Wishlist Icon */}
          <button className="text-gray-600 hover:text-orange-500">🛒</button> {/* Cart Icon */}
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg p-4 absolute top-full left-0 right-0">
          {['Home', 'Shop', 'About', 'Contact'].map((item) => (
            <a key={item} href="#" className="block py-2 text-gray-600 hover:text-orange-500">
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
