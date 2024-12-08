import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";


const products = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    image: "https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N467qjnuMQRS0d40H4Z16YEYUnYViWhyD~kzMCwXPxGhASArDiFwcVKZ6fx6qHXXOBr~BgM6aACxrTv9JJf4JtqrTHE2u716LdWwFLvhCw5eHO-Ivuxzpr2R1u8FWudlQapRQyM6dhrlsIR-R-t2fm-lS4lLdeJq9-QbhHzAQbFFQBUg6NB74gMOgCD6SmICBSUKe5W10WKqEmh1LYV55nX2~7SEsdxZuq-cp7Mn8OrU9NvS493XG3nYQIzM63XxD5ciHEOd8O-zCdTAm0-x0ZIF8ySlZKUOR8oHGsOvSwmugAImS4ejq7K2aVYgOsZ2OUUfghWMWliQU6wtv3mmjQ__",
    price: 120,
    rating: 4.5,
    discount: null,
    originalPrice: null,
    link: "./cart",
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    image: "https://s3-alpha-sig.figma.com/img/769b/9d60/ff941dde9bc0e54431b8d8fe3182f5e9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gqcLL5UmMTnyPt9DvALODCglbRkma8WTB8Wb2rSdpGwQgz1oRRxOHRn2a62WzfL6OZj-qqVtbbo3w~4L5zhulyuteZnnG~A0KlNk-SdSHYnPBDaU877kleeDQY2W7rKbK-bTuxi1wKKOYGtYGvBWQyKCkL8UcarLoe2mdZoDGeqx5W~EwlPeCPHh2cb9R9KHpZ2eSBRZQVI1t8fjGnT~s6G2QtgQM6U3KibhoZkasMAQDjX8PavjtMny7hsBRTGanVyprSXELRnwaPDwFBxNcc8y2tZ~IEm9ljqsr1wSaYyv2xxtIpCvpe~NEBbZ1w1Yt2sMM02fqNHbYyWuwlGIyA__",
    price: 240,
    rating: 3.5,
    discount: 20,
    originalPrice: 260,
    link: "./cart",
  },
  {
    id: 3,
    title: "Checkered Shirt",
    image: "https://s3-alpha-sig.figma.com/img/bbf4/11c2/5fc84f87eeac1062fbe47f49c192d4f2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j2zRJvvq9tM5IRPO74vJiPhtF6BOd5s0Ee3Tjh2MTz0N3-TFTRXDwXN2BbT8QXDf9mZeNYmStRD8tz5FJucFT-FSQfEPxGc09FJQRoLwRCGaFBB1LeLgUJVcrIRfZ3VH11QygxPv~Ihy~NAsplH7zOS7ctbN0F-YOTi7PiYM20RW6Z0dxEvMb-hX3fLiU0rCrASgKvYJ4jo~HYur0O4HfeQZJWCIwep~Rhjuq92NffqcGAZZl30rb-gFn5SQXQSMUfBQSvgeG3UFOrdQrHBX8ADmEB8Fw47vMdZzNmqd1UavVZ7htorOdB4SsccWqo2fc~DXzlAOqpsTMfYf9FIOJw__",
    price: 180,
    rating: 4.5,
    discount: null,
    originalPrice: null,
    link: "./cart",
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    image: "https://s3-alpha-sig.figma.com/img/3457/42c2/7cc557f42cf1d489f7cc811856b90e9f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TtH9dFseVJHa~LsbYDgZvpO9lYcC3kbKcG-4gXhmXknILWHrbfdoYjnN7v9lUSqFbGdc1b7j~zZYzVOZyorZDVus5KTUrarfDdNlmpPdXKNwgzfwq7pzuAyvjKKJ2bKxOTGDvdFYE-2nsmq8Y5YKuDeNvtMFgT59Ozkzk0NkXA9roUN-gv9otcMT8xVKkQS3qIEt7B4XyBVy1yZNWSsCqFWgYJpdsobZgQlLWa3vsDTN5xqjVVjZQB440Opd-tSbc1XLtcYpZ6L7nG5GPsogJky0T1gcy2BnzDhWtGReQy2Xy7FtVfqOYXk0M2t7yQvZZoOLOIHKpERHCnpnwGoJlg__",
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
              <img
                src={product.image}
                alt={product.title}
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