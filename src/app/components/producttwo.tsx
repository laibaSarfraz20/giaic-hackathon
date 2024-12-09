import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    image:
      "https://s3-alpha-sig.figma.com/img/e01f/5d3c/d9029bd465a4c7158689ab1619693014?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EueWyrVgo~G9vpRlqYVlc87xzLb~lxIXuaSokQ-20rq9jjlugTUiakaOK2wNatYl9gU2sBnyQmcfg4YQMZJB~XRSRSVrCCisf6Aeq0si00DTBP~2Eyuo510FzCz8Ii9wutCo1LWVDVUTIXnfgOvPd9bHn5CPwUvg6wPtRrjOJRVXuGGDHwiH2TOqBG8y8KibQmVaCzDr1ez14dCzuB8DBEW4nB48pK8Donobr1IpGLAwx4sCieDUXFBsJa-Cn2-uvv34gh7LeDFZI~zG39efErs6p1qhBufGIP63Zdfhs8U1saPKrYyvrqEkFJDdwP289UCeel~JUtBtz1zaG85eZg__",
    price: 120,
    rating: 4.5,
    discount: null,
    originalPrice: null,
    link: "./cart",
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    image:
      "https://s3-alpha-sig.figma.com/img/5723/4b01/d5fcac5632cf6823570ca2d1d53d7d73?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9Wr9HtnDWeGaQudQyHB7mjjfkAjuWvJdTPQCyNh6Kh1LyyV5tWyN0~FvrnNZibnzhwc1IWNi6EI2xgnnmq-v6eRRzUV3ScZuYzcPEyaYuIuEsv4cMbhPLn9wYu5lxDOtuWZkUNo3hcO4VDOCEoa8UIF6WXdINnCH9XPlwi5IlBtTrmYGeMcokvZAGJ93nEjS7cUctEf-9vyT8POmrUEKnC-2HDS25dcFlfKowt80D5Mi338FrcXxmAtyi9Ut7Pmm9sKQNgGhOV~LcENR0TvCEE--wLSGQ6BiO6k4h3i9WQOjjKwKEskEXE6J~PINniTbldzmUZp25H0iC9ud6Lp7A__",
    price: 240,
    rating: 3.5,
    discount: 20,
    originalPrice: 260,
    link: "./cart",
  },
  {
    id: 3,
    title: "Checkered Shirt",
    image:
      "https://s3-alpha-sig.figma.com/img/8951/5d71/4a66d9ca1401101dee4cc689f8bb5ad2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsTpGVGo3iiHrKUtY-SniBMxRhG2oU5H7NBAuSM-vdr85to8XkEUsa-6odPRuPYkxzS6hBAdwFfqK8TFLtZByuV-J9auXa0OoYjkAeVTjSFNnsjjkUkXybByJXKnfuU3FF8BXEQcclLcpk0~le4sdqBK8rmUvUUj0TWmAdDYTYBHfqBGxKmqNpXhP2YAGkiPgF~IJllRrfNH7tQSU5TMjsRX2Tg4FsNis0cNx4CUUGfvUssidiB-EHt-hC38kpF38ZLlydYC3vZGcbXEztfV-iXJQg3IeXmLAWeJliQ8dOT5em~OY2cBKQpaBtKUIYx6YZ1xWIStnUAZO6tM3MbanA__",
    price: 180,
    rating: 4.5,
    discount: null,
    originalPrice: null,
    link: "./cart",
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    image:
      "https://s3-alpha-sig.figma.com/img/f180/c768/08e2ff8a46be56aa933f031aed3abe75?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a87C1cphdhYbKSf1~9oQhWXeHTNHU97jfpujV7pu4d-7Ca1df2q50TLR2w-lbEwWtEBJFrDBVun8CgxJ0jXSm1VxOHEBMe9Dpns48ZvhGLgWAJ4UwE8pQfvtd90QFZC-XwOCF4P7kVpQIHIGR2w1S-UzA8AixnCLSLCdYKLBqo1eqs2cc03vyg~xB03AxV9MQlQeqtn7CLTkCrdlnOBj~p5~~Etf-GmWhVrd9HtmlVytTR6szUAngCWlrL3AJbVzcnrYLQpoQz9J~Wo-oYnNI6wSVKiRmoWG-yVEe0tOKb1msoiv-nEu0ZdFiUajj3bFBF9QVmj-WfmvOWfG70nQHw__",
    price: 130,
    rating: 4.5,
    discount: 30,
    originalPrice: 160,
    link: "./cart",
  },
];

const Producttwo = () => {
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
                width={300} 
                height={300} 
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
            </a>
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-500">
                {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
                {product.rating % 1 !== 0 && (
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                )}
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

