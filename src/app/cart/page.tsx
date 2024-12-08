import Link from "next/link";
import CartRev from "../CartReviews/page";
import Email from "../components/Email";
import Footer from "../components/Foot";
const Cart = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto p-4">
        <nav className="text-gray-500 text-sm mb-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;
          <Link href="#" className="hover:underline">
            Shop
          </Link>{" "}
          &gt;
          <Link href="#" className="hover:underline">
            Men
          </Link>{" "}
          &gt;
          <span className="text-gray-900">T-shirts</span>
        </nav>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col items-center lg:items-start lg:w-1/2">
            <div className="border p-2 mb-4">
              <img
                src="https://placehold.co/300x300"
                alt="Main T-shirt image"
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="border p-2">
                <img
                  src="https://placehold.co/100x100"
                  alt="T-shirt image 1"
                  className="w-full"
                />
              </div>
              <div className="border p-2">
                <img
                  src="https://placehold.co/100x100"
                  alt="T-shirt image 2"
                  className="w-full"
                />
              </div>
              <div className="border p-2">
                <img
                  src="https://placehold.co/100x100"
                  alt="T-shirt image 3"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h1 className="text-3xl font-bold mb-2">
              ONE LIFE GRAPHIC T-SHIRT
            </h1>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-500">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <span className="ml-2 text-gray-700">4.5/5</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-gray-900">$260</span>
              <span className="text-xl line-through text-gray-500 ml-2">
                $300
              </span>
              <span className="text-xl text-red-500 ml-2">-40%</span>
            </div>
            <p className="text-gray-700 mb-4">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Select Colors</h2>
              <div className="flex space-x-2">
                <button className="w-8 h-8 rounded-full bg-green-900 border-2 border-black"></button>
                <button className="w-8 h-8 rounded-full bg-green-700 border-2 border-transparent"></button>
                <button className="w-8 h-8 rounded-full bg-blue-900 border-2 border-transparent"></button>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Choose Size</h2>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border rounded-full text-gray-700">
                  Small
                </button>
                <button className="px-4 py-2 border rounded-full text-gray-700">
                  Medium
                </button>
                <button className="px-4 py-2 border rounded-full text-white bg-black">
                  Large
                </button>
                <button className="px-4 py-2 border rounded-full text-gray-700">
                  X-Large
                </button>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <button className="px-4 py-2 border rounded-full text-gray-700">
                -
              </button>
              <span className="px-4">1</span>
              <button className="px-4 py-2 border rounded-full text-gray-700">
                +
              </button>
            </div>
            <button className="w-full py-3 bg-black text-white rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <CartRev />
      <br />
      <Email />
      <br />
      <Footer />
    </div>
  );
};
export default Cart;
