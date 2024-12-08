const Style = () => {
  return (

    <div className="flex justify-center items-center min-h-screen ">
        <br /><br />
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <img
              src="https://placehold.co/600x400"
              alt="Casual dress style"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 text-black font-bold">
              Casual
            </div>
          </div>
          <div className="relative">
            <img
              src="https://placehold.co/600x400"
              alt="Formal dress style"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 text-black font-bold">
              Formal
            </div>
          </div>
          <div className="relative">
            <img
              src="https://placehold.co/600x400"
              alt="Party dress style"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 text-black font-bold">
              Party
            </div>
          </div>
          <div className="relative">
            <img
              src="https://placehold.co/600x400"
              alt="Gym dress style"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 text-black font-bold">
              Gym
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Style;
