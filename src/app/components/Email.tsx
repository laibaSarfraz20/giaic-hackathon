const Email =()=>{
    return(
<div>
<section className="bg-white px-20">
  <div className="bg-black text-white py-12 px-8 flex flex-col md:flex-row rounded items-center justify-between">
    <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
      <h2 className="text-3xl font-bold">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
    </div>
    <div className="flex flex-col items-center md:items-end md:w-1/2 space-y-4">
    <input
    type="email"
    placeholder="Enter your email address"
    className="p-2 rounded-full w-64 md:w-96 text-center"
  />
  <button className="bg-white text-black p-2 rounded-full w-64 md:w-96">
    Subscribe To Our Newsletter
  </button>
    </div>
  </div>
</section>
</div>
    )
}
export default Email;