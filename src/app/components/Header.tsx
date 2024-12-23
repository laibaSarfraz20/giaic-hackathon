
import Image from 'next/image'; 


const Header = () => {
  return (
    <div>
      <main className="bg-zinc-100 py-16">
        <div
          className="container mx-auto flex flex-col lg:flex-row items-center px-4"
          style={{ minHeight: "663px" }}
        >
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              FIND CLOTHES THAT MATCH YOUR STYLE
            </h1>
            <p className="text-lg mb-8">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of
              style.
            </p>
            <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <Image
              src ="../assests/Homepage.jpg"
              alt="A stylish man and woman wearing fashionable clothes"
              className="w-full max-h-[663px] object-cover rounded-lg"
              width={600} 
              height={663} 
            />
          </div>
        </div>
      </main>

      <div className="bg-black py-8">
        <div className="container mx-auto flex justify-around items-center text-white">
          <span className="text-xl">VERSACE</span>
          <span className="text-xl">ZARA</span>
          <span className="text-xl">GUCCI</span>
          <span className="text-xl">PRADA</span>
          <span className="text-xl">Calvin Klein</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
