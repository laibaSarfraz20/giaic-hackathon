import React from "react";
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
    image:
      "https://s3-alpha-sig.figma.com/img/bbf4/11c2/5fc84f87eeac1062fbe47f49c192d4f2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j2zRJvvq9tM5IRPO74vJiPhtF6BOd5s0Ee3Tjh2MTz0N3-TFTRXDwXN2BbT8QXDf9mZeNYmStRD8tz5FJucFT-FSQfEPxGc09FJQRoLwRCGaFBB1LeLgUJVcrIRfZ3VH11QygxPv~Ihy~NAsplH7zOS7ctbN0F-YOTi7PiYM20RW6Z0dxEvMb-hX3fLiU0rCrASgKvYJ4jo~HYur0O4HfeQZJWCIwep~Rhjuq92NffqcGAZZl30rb-gFn5SQXQSMUfBQSvgeG3UFOrdQrHBX8ADmEB8Fw47vMdZzNmqd1UavVZ7htorOdB4SsccWqo2fc~DXzlAOqpsTMfYf9FIOJw__",
    originalPrice: null,
    discount: null,
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image:
      "https://s3-alpha-sig.figma.com/img/769b/9d60/ff941dde9bc0e54431b8d8fe3182f5e9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gqcLL5UmMTnyPt9DvALODCglbRkma8WTB8Wb2rSdpGwQgz1oRRxOHRn2a62WzfL6OZj-qqVtbbo3w~4L5zhulyuteZnnG~A0KlNk-SdSHYnPBDaU877kleeDQY2W7rKbK-bTuxi1wKKOYGtYGvBWQyKCkL8UcarLoe2mdZoDGeqx5W~EwlPeCPHh2cb9R9KHpZ2eSBRZQVI1t8fjGnT~s6G2QtgQM6U3KibhoZkasMAQDjX8PavjtMny7hsBRTGanVyprSXELRnwaPDwFBxNcc8y2tZ~IEm9ljqsr1wSaYyv2xxtIpCvpe~NEBbZ1w1Yt2sMM02fqNHbYyWuwlGIyA__",
    originalPrice: null,
    discount: null,
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    price: 120,
    rating: 5.0,
    image:
      "https://s3-alpha-sig.figma.com/img/aecd/8196/485b30fd30b3226e09bb8f8e494c260b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E00uJe4ScIJlOs2OZBX804wKT5KHfRmXE85TrrOIBj2NsxTb9e-AI9Nz8BCZEjDXtB8GAh48M9m-2EpjFkQLUSO3oCc~OvsDJ241EMvsgtWKA4GDflZnmiEmXSqt~YLnZcnYLExdaZfQM51bJj3utafVWSBuNNIswABuvWmVBt1vMvveA~ua9KLPgdOoE2NjV3zhFFkwQ~OabH2NUXvySpDPyVzjMZRkpoCPjme~cSwNI2LZuBmnCei1MvoGRGuVUe6E6rQtwtcMjMBOPhcrpNgtx0IDmSX4SiGizGiDq-MpJuBZiM2qyX1lfFbuHR5iH4YW31927b~7rI7BC6c4wQ__",
    originalPrice: 160,
    discount: 30,
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    price: 240,
    rating: 3.5,
    image:
      "https://s3-alpha-sig.figma.com/img/f04a/017d/b094f9a20c2328f54a31b153619784f3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TdXM50mhn6bTCgy5ZIKXsA-QjkRV4OaWX-Cnze9In8KoiidKM66~GMFQpGbd092AChJXdOH87aE7q6hd4B1aki0Zz21BapPXWfD-ZAzl0lGNR~NulEIkdSnE0jX-oJqDrfSsv-jSbNtcdHYlXxSvFTZm-AB00loKN8T-Mhiy9cl866BvdooVFZzcYdQ~1RiMRLltq2fST3WpaC9SBLc~x-TGafP45Zx4drobNz~D3j59Pp9iOCBHkQ9haqy425Ct361dCDYxZr626Le81QLSCBQRdkwfU1Z2aniwh1PeZn~oL6HzotM1wzQDPrdZkY~jkuEs62dpjO-DdRcUCOah6Q__",
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
    image:
      "https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N467qjnuMQRS0d40H4Z16YEYUnYViWhyD~kzMCwXPxGhASArDiFwcVKZ6fx6qHXXOBr~BgM6aACxrTv9JJf4JtqrTHE2u716LdWwFLvhCw5eHO-Ivuxzpr2R1u8FWudlQapRQyM6dhrlsIR-R-t2fm-lS4lLdeJq9-QbhHzAQbFFQBUg6NB74gMOgCD6SmICBSUKe5W10WKqEmh1LYV55nX2~7SEsdxZuq-cp7Mn8OrU9NvS493XG3nYQIzM63XxD5ciHEOd8O-zCdTAm0-x0ZIF8ySlZKUOR8oHGsOvSwmugAImS4ejq7K2aVYgOsZ2OUUfghWMWliQU6wtv3mmjQ__",
    originalPrice: 160,
    discount: 30,
  },
  {
    id: 7,
    name: "Vertical Striped Shirt",
    price: 212,
    rating: 5.0,
    image:
      "https://s3-alpha-sig.figma.com/img/21d6/bcec/533545a2b1e10e90b8059bc1bc97eab5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PwSkNZuEpNHoUhWJRCYDcRS4LtWawCWpXaS68hDv2IS33ta5lFCZiCcFpvkNO7ncNrY9Y2exa1AzHJM3BRy0Lfng30cBG787Xiq1rmYy25J-PQdfisKietiEtTTQYoN0ssFYJfWlX9Le60-dHNYeBSI4hQJqJYzuFpojY-EkEWcl4vsC3ffsoJxDU0eFB9YaTQ0WNyswsYMe~3fzJ-KM2s3fRhadwXMoPR3lc9xg8Gy1NsLslrVY6RkhMVASlWJ6IRxix7DtKiTpJe8JK66YgyyGzKR6Z~ZfJpH62z0Cz3Hpcv3mulfXqoIYE1HfUPRdWKzZh8lPvOWhGJyOcFvE-w__",
    originalPrice: 232,
    discount: 20,
  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.0,
    image:
      "https://s3-alpha-sig.figma.com/img/3457/42c2/7cc557f42cf1d489f7cc811856b90e9f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TtH9dFseVJHa~LsbYDgZvpO9lYcC3kbKcG-4gXhmXknILWHrbfdoYjnN7v9lUSqFbGdc1b7j~zZYzVOZyorZDVus5KTUrarfDdNlmpPdXKNwgzfwq7pzuAyvjKKJ2bKxOTGDvdFYE-2nsmq8Y5YKuDeNvtMFgT59Ozkzk0NkXA9roUN-gv9otcMT8xVKkQS3qIEt7B4XyBVy1yZNWSsCqFWgYJpdsobZgQlLWa3vsDTN5xqjVVjZQB440Opd-tSbc1XLtcYpZ6L7nG5GPsogJky0T1gcy2BnzDhWtGReQy2Xy7FtVfqOYXk0M2t7yQvZZoOLOIHKpERHCnpnwGoJlg__",
    originalPrice: null,
    discount: null,
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3.0,
    image:
      "https://s3-alpha-sig.figma.com/img/8951/5d71/4a66d9ca1401101dee4cc689f8bb5ad2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsTpGVGo3iiHrKUtY-SniBMxRhG2oU5H7NBAuSM-vdr85to8XkEUsa-6odPRuPYkxzS6hBAdwFfqK8TFLtZByuV-J9auXa0OoYjkAeVTjSFNnsjjkUkXybByJXKnfuU3FF8BXEQcclLcpk0~le4sdqBK8rmUvUUj0TWmAdDYTYBHfqBGxKmqNpXhP2YAGkiPgF~IJllRrfNH7tQSU5TMjsRX2Tg4FsNis0cNx4CUUGfvUssidiB-EHt-hC38kpF38ZLlydYC3vZGcbXEztfV-iXJQg3IeXmLAWeJliQ8dOT5em~OY2cBKQpaBtKUIYx6YZ1xWIStnUAZO6tM3MbanA__",
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
      <img
        src={product.image}
        alt={product.name}
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
              <div className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full cursor-pointer"></div>
              <div className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></div>
              <div className="w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"></div>
              <div className="w-6 h-6 bg-purple-500 rounded-full cursor-pointer"></div>
              <div className="w-6 h-6 bg-pink-500 rounded-full cursor-pointer"></div>
              <div className="w-6 h-6 bg-black rounded-full cursor-pointer"></div>
              <div className="w-6 h-6 bg-white border border-gray-300 rounded-full cursor-pointer"></div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-medium mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 border rounded-lg text-sm">
                XX-Small
              </button>
              <button className="px-3 py-1 border rounded-lg text-sm">
                X-Small
              </button>
              <button className="px-3 py-1 border rounded-lg text-sm">
                Small
              </button>
              <button className="px-3 py-1 border rounded-lg text-sm">
                Medium
              </button>
              <button className="px-3 py-1 border rounded-lg text-sm bg-black text-white">
                Large
              </button>
              <button className="px-3 py-1 border rounded-lg text-sm">
                X-Large
              </button>
              <button className="px-3 py-1 border rounded-lg text-sm">
                XX-Large
              </button>
              <button className="px-3 py-1 border rounded-lg text-sm">
                3X-Large
              </button>
              <button className="px-3 py-1 border rounded-lg text-sm">
                4X-Large
              </button>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-medium mb-2">Dress Style</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Casual
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Formal
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Party
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Gym
                </a>
              </li>
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
          <div className="flex justify-between items-center mt-6">
            <button className="px-4 py-2 border rounded-lg">Previous</button>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border rounded-lg">1</button>
              <button className="px-4 py-2 border rounded-lg">2</button>
              <button className="px-4 py-2 border rounded-lg">3</button>
              <button className="px-4 py-2 border rounded-lg">...</button>
              <button className="px-4 py-2 border rounded-lg">8</button>
              <button className="px-4 py-2 border rounded-lg">9</button>
              <button className="px-4 py-2 border rounded-lg">10</button>
            </div>
            <button className="px-4 py-2 border rounded-lg">Next</button>
          </div>
        </main>
      </div>
      <br />
      <Email />
      <br />
      <Footer />
    </div>
  );
};

export default Category;
