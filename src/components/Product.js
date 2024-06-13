import React from 'react';

const Product = ({ item }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <img
        className="w-full h-40 object-cover mb-4 rounded-lg"
        src={item.image}
        alt={item.name}
      />
      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
      <p className="text-gray-400 mb-2">${item.price}</p>
      <p className="text-gray-500">{item.description}</p>
      <div className="mt-4 flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
