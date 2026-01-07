import React, { useState } from 'react';
import bad from '../assets/bed.png';
import Table from '../assets/Table.png';
import side from '../assets/side.png';

const Inspiration = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const rooms = [
    { id: 1, image: bad, category: 'Bed Room', title: 'Inner Peace' },
    { id: 2, image: Table, category: 'Dining', title: 'Minimalist Dining' },
    { id: 3, image: side, category: 'Living', title: 'Modern Living' },
  ];

  return (
    <section className="bg-[#FCF8F3] py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className="w-full lg:w-[35%] flex flex-col items-start text-left mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#3A3A3A] mb-4 leading-tight">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-[#616161] mb-8 text-base font-medium">
              Our designer already made a lot of beautiful prototipe of rooms that inspire you
            </p>
            <button className="bg-[#B88E2F] text-white font-bold py-3 px-9 hover:bg-[#9c7826] transition duration-300 shadow-md">
              Explore More
            </button>
          </div>

          {/* --- RIGHT SIDE: SLIDER LAYOUT --- */}
          <div className="w-full lg:w-[65%] flex flex-col md:flex-row gap-6 relative">
            
            {/* 1. ACTIVE MAIN CARD */}
            <div 
              // Moving exact pixels here stops the Tailwind warning
              style={{ width: '100%', maxWidth: '404px', height: '582px' }}
              className="relative shrink-0 transition-all duration-500 ease-in-out h-450px md:h-auto"
            >
              <img 
                src={rooms[0].image} 
                alt="Active Room" 
                className="w-full h-full object-cover" 
              />
              
              {/* White Overlay Box */}
              <div 
                style={{ minWidth: '217px' }}
                className="absolute bottom-6 left-6 bg-white bg-opacity-90 backdrop-blur-sm p-8 pr-12"
              >
                <div className="flex items-center gap-2 mb-2 text-[#616161]">
                  <span className="font-medium">01</span>
                  <span className="w-6 h-px bg-[#616161]"></span>
                  <span className="uppercase text-sm font-medium">{rooms[0].category}</span>
                </div>
                <h3 className="text-2xl md:text-[28px] font-bold text-[#3A3A3A] leading-tight">
                  {rooms[0].title}
                </h3>
              </div>

              {/* Arrow Button attached to Overlay */}
              {/* Calculated styling moved to style prop to avoid 'left-[calc...]' warning */}
              <button 
                style={{ left: 'calc(1.5rem + 217px)' }}
                className="absolute bottom-6 bg-[#B88E2F] text-white p-3 hover:bg-[#9c7826] transition flex items-center justify-center w-12 h-12"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

            {/* 2. NEXT SLIDES PREVIEW */}
            <div 
              className="flex flex-col justify-between w-full h-auto"
              style={{ height: '582px' }} // Height for desktop
            >
              
              {/* Side Images Container */}
              <div className="flex gap-6 overflow-hidden h-400px md:h-486px items-start">
                
                {/* Image 2 (Active Next) */}
                <div 
                  style={{ width: '372px' }}
                  className="h-full shrink-0 relative w-300px md:w-auto"
                >
                  <img 
                    src={rooms[1].image} 
                    alt="Next Room 1" 
                    className="w-full h-full object-cover" 
                  />
                  {/* Floating Circular Navigation Button */}
                  <button className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-6 z-10 bg-white rounded-full w-12 h-12 items-center justify-center shadow-lg text-[#B88E2F] hover:scale-110 transition">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>

                {/* Image 3 (Peeking) */}
                <div 
                  style={{ width: '200px' }}
                  className="h-[85%] shrink-0 grayscale-[0.5]"
                >
                   <img 
                    src={rooms[2].image} 
                    alt="Next Room 2" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center gap-4 mt-6 md:mt-0 pl-2">
                <span className="w-3 h-3 rounded-full border border-[#B88E2F] p-2 relative flex items-center justify-center cursor-pointer">
                   <span className="w-2.5 h-2.5 bg-[#B88E2F] rounded-full absolute"></span>
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#D8D8D8] hover:bg-[#B88E2F] cursor-pointer transition"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#D8D8D8] hover:bg-[#B88E2F] cursor-pointer transition"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#D8D8D8] hover:bg-[#B88E2F] cursor-pointer transition"></span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;