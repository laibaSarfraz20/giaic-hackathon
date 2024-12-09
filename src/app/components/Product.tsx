import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    image: "https://example.com/image1.jpg",
    price: 120,
    rating: 4.5,
    discount: null,
    originalPrice: null,
    link: "./cart",
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    image: "https://example.com/image2.jpg",
    price: 240,
    rating: 3.5,
    discount: 20,
    originalPrice: 260,
    link: "./cart",
  },
  {
    id: 3,
    title: "Checkered Shirt",
    image: "https://example.com/image3.jpg",
    price: 180,
    rating: 4.5,
    discount: null,
    originalPrice: null,
    link: "./cart",
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    image: "https://example.com/image4.jpg",
    price: 130,
    rating: 4.5,
    discount: 30,
    originalPrice: 160,
    link: "./cart",
  },
];

const Product = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10">NEW ARRIVALS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={500} 
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
            </a>
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-500">
                {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
                {product.rating % 1 !== 0 && <FontAwesomeIcon icon={faStarHalfAlt} />}
              </div>
              <span className="ml-2 text-gray-600">{product.rating}/5</span>
            </div>
            <div className="text-xl font-bold mb-2">${product.price}</div>
            {product.discount && product.originalPrice && (
              <div className="flex items-center">
                <span className="text-gray-500 line-through mr-2">
                  ${product.originalPrice}
                </span>
                <span className="text-red-500 bg-red-100 px-2 py-1 rounded-full">
                  {product.discount}%
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="px-6 py-2 border rounded-full text-gray-700 hover:bg-gray-200">
          View All
        </button>
      </div>
    </div>
  );
};

export default Product;
