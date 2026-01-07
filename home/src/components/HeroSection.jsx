import React from 'react';
import Home1backimg from '../assets/Home1backimg.jpg'

const HeroSection = () => {
  return (
    <section 
      className="relative h-[calc(100vh-80px)] bg-cover bg-center flex items-center justify-end p-4 md:p-8"
      style={{ 
        backgroundImage: `url(${Home1backimg})`, // Replace with actual image
        backgroundColor: '#FCF8F3' // Fallback color
      }}
    >
      <div className="bg-amber-50 p-6 md:p-10 max-w-lg rounded-lg shadow-xl m-4 md:m-16">
        <p className="text-sm font-semibold text-gray-700 mb-2">New Arrival</p>
        <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
          Discover Our New Collection
        </h1>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-orange-500 text-white font-bold py-3 px-8 hover:bg-orange-600 transition duration-300">
          BUY NOW
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
