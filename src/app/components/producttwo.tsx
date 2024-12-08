import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    image: "https://storage.googleapis.com/a1aa/image/kLZkq4SW9lpPKdMkjh9wLio7emaZlecDeXoQCcufdlp9vOjPB.jpg",
    price: 120,
    rating: 4.5,
    discount: null,
    originalPrice: null,
    link: "/products/t-shirt-with-tape-details",
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    image: "https://storage.googleapis.com/a1aa/image/nomeoqSatvwvBKHA8ZTTXWwnVmq95lIRm3KxWUnHcBO91Z8JA.jpg",
    price: 240,
    rating: 3.5,
    discount: 20,
    originalPrice: 260,
    link: "/products/t-shirt-with-tape-details",
  },
  {
    id: 3,
    title: "Checkered Shirt",
    image: "https://storage.googleapis.com/a1aa/image/nZT33nwkNBqZHFkdeAbTnrixaI9uhA0cfeGpbxsdEI76XnxnA.jpg",
    price: 180,
    rating: 4.5,
    discount: null,
    originalPrice: null,
    link: "/products/t-shirt-with-tape-details",
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    image: "https://storage.googleapis.com/a1aa/image/JPj8ErSetUVgNCDalgWozv9AjlzVo8pCMVn1MGHfCT77rz4TA.jpg",
    price: 130,
    rating: 4.5,
    discount: 30,
    originalPrice: 160,
    link: "/products/t-shirt-with-tape-details",
  },
];

const Producttwo = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10">NEW ARRIVALS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover mb-4 rounded-md"
              
            />
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

export default Producttwo;