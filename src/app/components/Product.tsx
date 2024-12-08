import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";
const Product = ()=>{
    return(
       <div>
         <h1 className="text-4xl font-bold text-center mb-10">
        NEW ARRIVALS
       </h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
         <img alt="T-shirt with Tape Details" className="w-full h-64 object-cover mb-4 rounded-md" height="400" src="https://storage.googleapis.com/a1aa/image/kLZkq4SW9lpPKdMkjh9wLio7emaZlecDeXoQCcufdlp9vOjPB.jpg" width="300"/>
         <h2 className="text-lg font-semibold mb-2">
          T-shirt with Tape Details
         </h2>
         <div className="flex items-center mb-2">
          <div className="flex text-yellow-500">
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
           <i className="fas fa-star-half-alt">
           </i>
          </div>
          <span className="ml-2 text-gray-600">
           4.5/5
          </span>
         </div>
         <div className="text-xl font-bold mb-2">
          $120
         </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
         <img alt="Skinny Fit Jeans" className="w-full h-64 object-cover mb-4 rounded-md" height="400" src="https://storage.googleapis.com/a1aa/image/nomeoqSatvwvBKHA8ZTTXWwnVmq95lIRm3KxWUnHcBO91Z8JA.jpg" width="300"/>
         <h2 className="text-lg font-semibold mb-2">
          Skinny Fit Jeans
         </h2>
         <div className="flex items-center mb-2">
          <div className="flex text-yellow-500">
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar}  />
           <i className="fas fa-star-half-alt">
           </i>
           <i className="fas fa-star text-gray-300">
           </i>
          </div>
          <span className="ml-2 text-gray-600">
           3.5/5
          </span>
         </div>
         <div className="text-xl font-bold mb-2">
          $240
         </div>
         <div className="flex items-center">
          <span className="text-gray-500 line-through mr-2">
           $260
          </span>
          <span className="text-red-500 bg-red-100 px-2 py-1 rounded-full">
           20%
          </span>
         </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
         <img alt="Checkered Shirt" className="w-full h-64 object-cover mb-4 rounded-md" height="400" src="https://storage.googleapis.com/a1aa/image/nZT33nwkNBqZHFkdeAbTnrixaI9uhA0cfeGpbxsdEI76XnxnA.jpg" width="300"/>
         <h2 className="text-lg font-semibold mb-2">
          Checkered Shirt
         </h2>
         <div className="flex items-center mb-2">
          <div className="flex text-yellow-500">
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
           <i className="fas fa-star-half-alt">
           </i>
          </div>
          <span className="ml-2 text-gray-600">
           4.5/5
          </span>
         </div>
         <div className="text-xl font-bold mb-2">
          $180
         </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
         <img alt="Sleeve Striped T-shirt" className="w-full h-64 object-cover mb-4 rounded-md" height="400" src="https://storage.googleapis.com/a1aa/image/JPj8ErSetUVgNCDalgWozv9AjlzVo8pCMVn1MGHfCT77rz4TA.jpg" width="300"/>
         <h2 className="text-lg font-semibold mb-2">
          Sleeve Striped T-shirt
         </h2>
         <div className="flex items-center mb-2">
          <div className="flex text-yellow-500">
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
           <i className="fas fa-star-half-alt">
           </i>
          </div>
          <span className="ml-2 text-gray-600">
           4.5/5
          </span>
         </div>
         <div className="text-xl font-bold mb-2">
          $130
         </div>
         <div className="flex items-center">
          <span className="text-gray-500 line-through mr-2">
           $160
          </span>
          <span className="text-red-500 bg-red-100 px-2 py-1 rounded-full">
           30%
          </span>
         </div>
        </div>
       </div>
       <div className="text-center mt-10">
        <button className="px-6 py-2 border rounded-full text-gray-700 hover:bg-gray-200">
         View All
        </button>
       </div>
       <br /><br />
       {/* Top seller product div */}
       <h1 className="text-4xl font-bold text-center mb-10">
      TOP SELLERS
       </h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
         <img alt="T-shirt with Tape Details" className="w-full h-64 object-cover mb-4 rounded-md" height="400" src="https://storage.googleapis.com/a1aa/image/kLZkq4SW9lpPKdMkjh9wLio7emaZlecDeXoQCcufdlp9vOjPB.jpg" width="300"/>
         <h2 className="text-lg font-semibold mb-2">
          T-shirt with Tape Details
         </h2>
         <div className="flex items-center mb-2">
          <div className="flex text-yellow-500">
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
           <i className="fas fa-star-half-alt">
           </i>
          </div>
          <span className="ml-2 text-gray-600">
           4.5/5
          </span>
         </div>
         <div className="text-xl font-bold mb-2">
          $120
         </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
         <img alt="Skinny Fit Jeans" className="w-full h-64 object-cover mb-4 rounded-md" height="400" src="https://storage.googleapis.com/a1aa/image/nomeoqSatvwvBKHA8ZTTXWwnVmq95lIRm3KxWUnHcBO91Z8JA.jpg" width="300"/>
         <h2 className="text-lg font-semibold mb-2">
          Skinny Fit Jeans
         </h2>
         <div className="flex items-center mb-2">
          <div className="flex text-yellow-500">
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar}  />
           <i className="fas fa-star-half-alt">
           </i>
           <i className="fas fa-star text-gray-300">
           </i>
          </div>
          <span className="ml-2 text-gray-600">
           3.5/5
          </span>
         </div>
         <div className="text-xl font-bold mb-2">
          $240
         </div>
         <div className="flex items-center">
          <span className="text-gray-500 line-through mr-2">
           $260
          </span>
          <span className="text-red-500 bg-red-100 px-2 py-1 rounded-full">
           20%
          </span>
         </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
         <img alt="Checkered Shirt" className="w-full h-64 object-cover mb-4 rounded-md" height="400" src="https://storage.googleapis.com/a1aa/image/nZT33nwkNBqZHFkdeAbTnrixaI9uhA0cfeGpbxsdEI76XnxnA.jpg" width="300"/>
         <h2 className="text-lg font-semibold mb-2">
          Checkered Shirt
         </h2>
         <div className="flex items-center mb-2">
          <div className="flex text-yellow-500">
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
           <i className="fas fa-star-half-alt">
           </i>
          </div>
          <span className="ml-2 text-gray-600">
           4.5/5
          </span>
         </div>
         <div className="text-xl font-bold mb-2">
          $180
         </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
         <img alt="Sleeve Striped T-shirt" className="w-full h-64 object-cover mb-4 rounded-md" height="400" src="https://storage.googleapis.com/a1aa/image/JPj8ErSetUVgNCDalgWozv9AjlzVo8pCMVn1MGHfCT77rz4TA.jpg" width="300"/>
         <h2 className="text-lg font-semibold mb-2">
          Sleeve Striped T-shirt
         </h2>
         <div className="flex items-center mb-2">
          <div className="flex text-yellow-500">
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
          <FontAwesomeIcon icon={faStar}  />
           <i className="fas fa-star-half-alt">
           </i>
          </div>
          <span className="ml-2 text-gray-600">
           4.5/5
          </span>
         </div>
         <div className="text-xl font-bold mb-2">
          $130
         </div>
         <div className="flex items-center">
          <span className="text-gray-500 line-through mr-2">
           $160
          </span>
          <span className="text-red-500 bg-red-100 px-2 py-1 rounded-full">
           30%
          </span>
         </div>
        </div>
       </div>
       <div className="text-center mt-10">
        <button className="px-6 py-2 border rounded-full text-gray-700 hover:bg-gray-200">
         View All
        </button>
       </div>
      </div>
       
   
    )
}
export default Product