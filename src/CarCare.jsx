import React from 'react';
import { Link } from 'react-router-dom';
import CarPerfume from './images/CarPerfume.webp';
import DashboardPolish from './images/DashBoardPolish.webp';
import TyrePolish from './images/TyrePolish.webp';
import CarwashShampoo from './images/CarWashShampoo.webp';

const baseProducts = [
  {
    id: 'car-perfume',
    name: 'Car Perfume',
    price: '₹ 225.00',
    image: CarPerfume,
  },
  {
    id: 'dash-board-polish',
    name: 'Dash-Board Polish',
    price: '₹ 90.00',
    image: DashboardPolish,
  },
  {
    id: 'tyre-polish',
    name: 'Tyre Polish',
    price: '₹ 90.00',
    image: TyrePolish,
  },
  {
    id: 'car-wash-shampoo',
    name: 'Car Wash Shampoo',
    price: '₹ 140.00',
    image: CarwashShampoo,
  }
];

// Create 16 products by repeating the base products
const products = Array(16).fill(0).map((_, index) => {
  const baseProduct = baseProducts[index % baseProducts.length];
  return {
    ...baseProduct
  };
});

export default function CarCare() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-tight text-gray-900 drop-shadow">Car Care Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <Link
            key={index}
            to={`/product/${product.id}`}
            className="flex flex-col items-center bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-4 transform hover:-translate-y-2 cursor-pointer"
          >
            <img src={product.image} alt={product.name} className="w-56 h-56 object-cover  mb-3 shadow" />
            <span className="text-lg font-semibold text-gray-800 mb-1">{product.name}</span>
            <div className="flex items-center justify-between w-full mt-1">
              <span className="text-base font-bold text-teal-700">{product.price}</span>
              
            </div>
            <button className="w-full text-white bg-teal-700 hover:bg-teal-800  p-2 shadow transition-colors duration-200 ml-2">
                <span className="text-sm md:text-base font-medium">ADD TO CART</span>
              </button>
          </Link>
        ))}
      </div>
    </div>
  );
} 