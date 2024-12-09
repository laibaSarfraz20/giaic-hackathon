import Link from "next/link";
import Image from "next/image";
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
              <Image
                src="https://s3-alpha-sig.figma.com/img/21d6/bcec/533545a2b1e10e90b8059bc1bc97eab5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PwSkNZuEpNHoUhWJRCYDcRS4LtWawCWpXaS68hDv2IS33ta5lFCZiCcFpvkNO7ncNrY9Y2exa1AzHJM3BRy0Lfng30cBG787Xiq1rmYy25J-PQdfisKietiEtTTQYoN0ssFYJfWlX9Le60-dHNYeBSI4hQJqJYzuFpojY-EkEWcl4vsC3ffsoJxDU0eFB9YaTQ0WNyswsYMe~3fzJ-KM2s3fRhadwXMoPR3lc9xg8Gy1NsLslrVY6RkhMVASlWJ6IRxix7DtKiTpJe8JK66YgyyGzKR6Z~ZfJpH62z0Cz3Hpcv3mulfXqoIYE1HfUPRdWKzZh8lPvOWhGJyOcFvE-w__"
                alt="Main T-shirt image"
                className="w-full"
                width={800} // Specify width
                height={600} // Specify height
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="border p-2">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/21d6/bcec/533545a2b1e10e90b8059bc1bc97eab5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PwSkNZuEpNHoUhWJRCYDcRS4LtWawCWpXaS68hDv2IS33ta5lFCZiCcFpvkNO7ncNrY9Y2exa1AzHJM3BRy0Lfng30cBG787Xiq1rmYy25J-PQdfisKietiEtTTQYoN0ssFYJfWlX9Le60-dHNYeBSI4hQJqJYzuFpojY-EkEWcl4vsC3ffsoJxDU0eFB9YaTQ0WNyswsYMe~3fzJ-KM2s3fRhadwXMoPR3lc9xg8Gy1NsLslrVY6RkhMVASlWJ6IRxix7DtKiTpJe8JK66YgyyGzKR6Z~ZfJpH62z0Cz3Hpcv3mulfXqoIYE1HfUPRdWKzZh8lPvOWhGJyOcFvE-w__"
                  alt="T-shirt image 1"
                  className="w-full"
                  width={250} // Specify width
                  height={250} // Specify height
                />
              </div>
              <div className="border p-2">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/51c4/5a78/b417beff6f8fa6310534f3755fd23c5a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UCR12hX19GOL128neDSv~AqvVH4YKlD5sumo0PhggWrJruaLjeBR37FTDJoJfmJOmuDdabI2w-IeIqzUQZhNpjvvch3TyineDSYmhWrf48323dUGhozaTZVhLRi6M3E~HMf-3cIZAr7UUdnyk8p7eXz6o6abLI4m7W6Chv66PXMZJFWrhHF98wRj8s95aVHECWxsXNBMXmW7YrjZlzozTO-lEyLwPcaOG0Jo6UQQrnnUCTXg95tFHhJXFlHoYXKa98anrxIOion7p1BJQ04lSTDbXQDJmr5Ynx2O6~gLlg5Bg8mTW3-qJUxAHYshgtOUKw1P0yHOvtEpX6tP0QnMTA__"
                  alt="T-shirt image 2"
                  className="w-full"
                  width={250} // Specify width
                  height={250} // Specify height
                />
              </div>
              <div className="border p-2">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/52ce/3b46/9d8d7ff6e33f95a574450e07218fc909?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hZu7rdHCUdOpj~dOuSdey2Wknxur0p7~P8GP1y8ILnRMG9wTJNNFR1wtfkv2XC6AA0SMbicjYV9qdt7Avu2VYZLsHbZjuOMefSBcKWwBSdjGLTnZqS2CJzTlKxmLfSQWkr52DmZj4ebGnCaHIDa2snL3ZxAdE1jrTaQ8NivkxYteJaSLtJuzsu3meFd1JFWhZ2efDLYyT1bpt0ZVjSmCs5~zoW4WBZ3rVP4cyKt04kmX8PX7J4sUIhidK4tmL6rPqnVQfoDOYaGc1njdmPfuoqTfexOUq9kCQggV4XhHd2xpzvVbtKAIyveWyMwPwS0MWR8OdyTnKxlU-BSMF9zfuA__"
                  alt="T-shirt image 3"
                  className="w-full"
                  width={250} // Specify width
                  height={250} // Specify height
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
              <h2 className="text-lg font-semibold">Size</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 border rounded hover:bg-gray-200">S</button>
                <button className="px-4 py-2 border rounded hover:bg-gray-200">M</button>
                <button className="px-4 py-2 border rounded hover:bg-gray-200">L</button>
                <button className="px-4 py-2 border rounded hover:bg-gray-200">XL</button>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Quantity</h2>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 border rounded hover:bg-gray-200">-</button>
                <input type="text" value="1" className="w-10 text-center border rounded" />
                <button className="px-4 py-2 border rounded hover:bg-gray-200">+</button>
              </div>
            </div>
            <button className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <CartRev />
      <Email />
      <Footer />
    </div>
  );
};

export default Cart;

