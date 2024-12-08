
const Header = () => {
    return (
        <div>

            <main className="bg-gray-100 py-16">
                <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-5xl font-bold leading-tight mb-4">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p className="text-lg mb-8">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <button className="bg-black text-white py-2 px-6 rounded-full">Shop Now</button>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
                        <img src="https://placehold.co/600x400" alt="A stylish man and woman wearing fashionable clothes" className="w-full h-auto" />
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
    )
}
export default Header;