import React from "react";
import Image from "next/image";

interface CartItemProps {
  image: string;
  title: string;
  size: string;
  color: string;
  price: string;
}

const CartItem: React.FC<CartItemProps> = ({ image, title, size, color, price }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="relative w-20 h-20">
        <Image
          src={image}
          alt={title}
          className="rounded-lg"
          layout="fill" // Ensures the image covers the container without distortion
          objectFit="cover" // Maintains aspect ratio and scales image as needed
        />
      </div>
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">Size: {size}</p>
        <p className="text-gray-600">Color: {color}</p>
        <p className="text-lg font-bold">{price}</p>
      </div>
      <div className="flex items-center">
        <button className="text-gray-500 hover:text-red-500">
          <i className="fas fa-trash-alt"></i>
        </button>
        <div className="flex items-center ml-4">
          <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-l-lg">-</button>
          <span className="px-4 py-1 bg-gray-100">1</span>
          <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-r-lg">+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
