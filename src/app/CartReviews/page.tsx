import React from 'react';

const reviews = [
    {
        name: "Samantha D.",
        date: "August 14, 2023",
        text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.",
        rating: 4.5
    },
    {
        name: "Alex M.",
        date: "August 15, 2023",
        text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        rating: 5
    },
    {
        name: "Ethan R.",
        date: "August 16, 2023",
        text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        rating: 4.5
    },
    {
        name: "Olivia P.",
        date: "August 17, 2023",
        text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        rating: 5
    },
    {
        name: "Liam K.",
        date: "August 18, 2023",
        text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        rating: 4
    },
    {
        name: "Ava H.",
        date: "August 19, 2023",
        text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
        rating: 4.5
    }
];

const ReviewCard = ({ review }: { review: { name: string, date: string, text: string, rating: number } }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative">
        <div className="flex items-center mb-4">
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star ${i < Math.floor(review.rating) ? 'text-yellow-500' : 'text-gray-300'}`}></i>
                ))}
                {review.rating % 1 !== 0 && <i className="fas fa-star-half-alt text-yellow-500"></i>}
            </div>
            <span className="ml-2 text-green-500"><i className="fas fa-check-circle"></i></span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
        <p className="text-gray-700 mb-4">"{review.text}"</p>
        <p className="text-gray-500">Posted on {review.date}</p>
        <div className="absolute top-4 right-4 text-gray-400"><i className="fas fa-ellipsis-h"></i></div>
    </div>
);

const CartRev = () => (
    <div className="max-w-6xl mx-auto p-4">
       <div className="flex flex-wrap justify-between items-center border-b border-gray-200 pb-2 mb-4">
  {/* Left Section */}
  <div className="flex flex-wrap justify-center lg:justify-start space-x-4 md:space-x-8 mb-4 lg:mb-0">
    <a href="#" className="text-gray-500 hover:text-black">Product Details</a>
    <a href="#" className="text-black border-b-2 border-black">Rating & Reviews</a>
    <a href="#" className="text-gray-500 hover:text-black">FAQs</a>
  </div>

  {/* Right Section */}
  <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-2 md:space-x-4">
    <button className="flex items-center space-x-1 md:space-x-2 text-gray-500 hover:text-black">
      <i className="fas fa-sliders-h"></i>
      <span className="text-sm md:text-base">Latest</span>
      <i className="fas fa-chevron-down"></i>
    </button>
    <button className="bg-black text-white px-3 py-1 md:px-4 md:py-2 rounded text-sm md:text-base">
      Write a Review
    </button>
  </div>
</div>

        <h2 className="text-2xl font-semibold mb-4">All Reviews (451)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
            ))}
        </div>
        <div className="flex justify-center mt-6">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Load More Reviews</button>
        </div>
    </div>
);

export default CartRev;