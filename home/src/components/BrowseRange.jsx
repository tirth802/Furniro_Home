import React from 'react';
import Dining from '../assets/Dining.png'
import Living from '../assets/Living.png'
import Badroom from '../assets/Badroom.png'

const RangeCard = ({ title, imgUrl }) => (
  <div className="text-center">
    <img src={imgUrl} alt={title} className="w-full h-72 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
  </div>
);

const BrowseRange = () => {
  return (
    <section className="py-12 md:py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Browse The Range</h2>
      <p className="text-center text-gray-600 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <RangeCard title="Dining" imgUrl={Dining}/>
        <RangeCard title="Living" imgUrl={Living}/>
        <RangeCard title="Bedroom" imgUrl={Badroom}/>
      </div>
    </section>
  );
};

export default BrowseRange;
