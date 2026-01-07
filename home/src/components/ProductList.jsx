import React from 'react';
import ProductCard from './ProductCard';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'



const dummyProducts =[
    {
        id:1,
        "imgUrl":img1,
        "name":"Syltherine",
        "category":"Stylish cafe chair",
        "price":2500,
        "oldPrice":3500,
        "discount":"30%",
        "badgecolor":"#E97171"
    },
     {
        id:2,
        "imgUrl":img2,
        "name":"Livosa",
        "category":"Stylish cafe chair",
        "price":2500,
        "oldPrice":3500,
        "discount":"30%",
        "badgecolor":"#E97171"
    },
     {
        id:3,
        "imgUrl":img3,
        "name":"Loliyo",
        "category":"Luxary big sofa",
        "price":7000,
        "oldPrice":14000,
        "discount":"-50%",
        "badgecolor":"#E97171"
    },
     {
        id:4,
        "imgUrl":img4,
        "name":"Respira",
        "category":"outdoor table and stool",
        "price":5000,
        // "oldPrice":3500,
        "discount":"New",
        "badgecolor":"#2EC1AC"
    },
     {
        id:5,
        "imgUrl":img5,
        "name":"Grifo",
        "category":"Night Lamp",
        "price":1500,
        "oldPrice":3500,
         "discount":"-50%",
        "badgecolor":"#E97171"
    }, {
        id:6,
        "imgUrl":img6,
        "name":"mugo",
        "category":"Stylish sofa",
        "price":25000,
        // "oldPrice":3500,
         "discount":"New",
        "badgecolor":"#2EC1AC"
    },
     {
        id:7,
        "imgUrl":img7,
        "name":"pingky",
        "category":"cut bed set",
        "price":7000,
        "oldPrice":14000,
         "discount":"-50%",
        "badgecolor":"#E97171"
    }, {
        id:8,
        "imgUrl":img8,
        "name":"Potty",
        "category":"flower poat",
        "price":2500,
        // "oldPrice":3500,
         "discount":"New",
        "badgecolor":"#2EC1AC"
    }
];

const ProductList = () => {
  return (
    <section className="py-12 md:py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {dummyProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="border border-orange-500 text-orange-500 font-semibold py-3 px-16 hover:bg-orange-500 hover:text-white transition duration-300">
          Show More
        </button>
      </div>
    </section>
  );
};

export default ProductList;
