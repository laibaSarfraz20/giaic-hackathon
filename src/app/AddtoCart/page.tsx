import CartItem from "../components/card";
import Navbar from "../components/Navbar";
import Email from "../components/Email";
import Footer from "../components/Foot";
import Link from "next/link";
const CartPage = () => {
  return (
    <div className="container mx-auto p-4">
            <Navbar />
      <nav className="text-gray-600 text-sm mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <a href="#" className="hover:underline">
          Cart
        </a>
      </nav>
      <h1 className="text-4xl font-bold mb-6">YOUR CART</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <CartItem
            image="https://placehold.co/100x100"
            title="Gradient Graphic T-shirt"
            size="Large"
            color="White"
            price="$145"
          />
          <CartItem
            image="https://placehold.co/100x100"
            title="Checkered Shirt"
            size="Medium"
            color="Red"
            price="$180"
          />
          <CartItem
            image="https://placehold.co/100x100"
            title="Skinny Fit Jeans"
            size="Large"
            color="Blue"
            price="$240"
          />
        </div>
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>$565</span>
          </div>
          <div className="flex justify-between mb-2 text-red-500">
            <span>Discount (-20%)</span>
            <span>-$113</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Fee</span>
            <span>$15</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between mb-4 text-xl font-bold">
            <span>Total</span>
            <span>$467</span>
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Add promo code"
              className="flex-1 p-2 border rounded-l-lg"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-lg">
              Apply
            </button>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg">
            Go to Checkout &rarr;
          </button>
        </div>
      </div>
      <br />
      <Email />
      <br />
      <Footer />
    </div>
  );
};

export default CartPage;
