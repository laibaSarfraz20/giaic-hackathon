import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Email from "../components/Email";
import Footer from "../components/Foot";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  originalPrice: number | null;
  discount: number | null;
}

const products: Product[] = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: "https://example.com/image1.jpg",
    originalPrice: null,
    discount: null,
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: "https://example.com/image2.jpg",
    originalPrice: null,
    discount: null,
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    price: 120,
    rating: 5.0,
    image: "https://example.com/image3.jpg",
    originalPrice: 160,
    discount: 30,
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    price: 240,
    rating: 3.5,
    image: "https://example.com/image4.jpg",
    originalPrice: 260,
    discount: 20,
  },
  {
    id: 5,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: "https://placehold.co/300x300",
    originalPrice: null,
    discount: null,
  },
  {
    id: 6,
    name: "Sleeve Striped T-shirt",
    price: 130,
    rating: 4.5,
    image: "https://example.com/image5.jpg",
    originalPrice: 160,
    discount: 30,
  },
  {
    id: 7,
    name: "Vertical Striped Shirt",
    price: 212,
    rating: 5.0,
    image: "https://example.com/image6.jpg",
    originalPrice: 232,
    discount: 20,
  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.0,
    image: "https://example.com/image7.jpg",
    originalPrice: null,
    discount: null,
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3.0,
    image: "https://example.com/image8.jpg",
    originalPrice: null,
    discount: null,
  },
];

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-lg font-medium mb-2">{product.name}</h2>
      <div className="flex items-center mb-2">
        <div className="flex items-center text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={`fas ${
                i < Math.floor(product.rating)
                  ? "fa-star"
                  : i < product.rating
                  ? "fa-star-half-alt"
                  : "far fa-star"
              }`}
            ></i>
          ))}
        </div>
        <span className="ml-2 text-gray-600">{product.rating}/5</span>
      </div>
      <div className="text-xl font-semibold">
        ${product.price}{" "}
        {product.originalPrice !== null && (
          <span className="line-through text-gray-500">
            ${product.originalPrice}
          </span>
        )}{" "}
        {product.discount !== null && (
          <span className="text-red-500">-{product.discount}%</span>
        )}
      </div>
    </div>
  );
};

const Category: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <aside className="w-full lg:w-1/4 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="mb-6">
            <h3 className="font-medium mb-2">Categories</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  T-shirts
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Shorts
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Shirts
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Hoodie
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Jeans
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-medium mb-2">Price</h3>
            <input type="range" min="50" max="200" className="w-full" />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>$50</span>
              <span>$200</span>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-medium mb-2">Colors</h3>
            <div className="flex flex-wrap gap-2">
              {["red", "green", "blue", "yellow", "purple", "pink", "black", "white"].map((color, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 bg-${color}-500 rounded-full cursor-pointer`}
                  style={color === "white" ? { border: "1px solid #ccc" } : {}}
                ></div>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-medium mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"].map((size, index) => (
                <button key={index} className="px-3 py-1 border rounded-lg text-sm">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-medium mb-2">Dress Style</h3>
            <ul>
              {["Casual", "Formal", "Party", "Gym"].map((style, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-gray-700">
                    {style}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full py-2 bg-black text-white rounded-lg">
            Apply Filter
          </button>
        </aside>
        <main className="w-full lg:w-3/4 p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Casual</h1>
            <div className="text-gray-600">Showing 1-10 of 100 Products</div>
            <div className="relative">
              <select className="border border-gray-300 rounded-lg py-2 px-3">
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button className="px-4 py-2 bg-black text-white rounded-lg">Load More</button>
          </div>
        </main>
      </div>
      <Email />
      <Footer />
    </div>
  );
};

export default Category;
