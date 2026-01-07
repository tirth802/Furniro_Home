import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#F4F5F7] hover:shadow-lg transition duration-300 group">
      <div className="relative">
        <img
          src={product.imgUrl}
          alt={product.name}
          className="w-full h-72 object-cover"
          
        />

        <div
          className="absolute top-4 right-4 text-white font-bold 
                        w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: product.badgecolor }}
        >
          {product.discount}
        </div>

        {/* Overlay buttons appear on hover */}
        <div className="absolute inset-0 bg-black/40   flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="bg-white text-orange-500 font-semibold py-2 px-8 mb-4 hover:bg-orange-600 hover:text-white transition">
            Add to cart
          </button>
          <div className="flex space-x-4">
            <button className="text-white hover:text-orange-500 flex items-center">
              🔍 &nbsp; See details
            </button>
            <button className="text-white hover:text-orange-500 flex items-center">
              💖 &nbsp; Share
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-500">{product.category}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold text-gray-800">Rp{product.price.toFixed(2)}</p>
          {product.oldPrice && (
            <p className="text-gray-400 line-through text-sm">
              ${product.oldPrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
