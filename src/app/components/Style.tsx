import React from "react";

const Style: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <br />
      <br />
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { alt: "Casual dress style", label: "Casual" },
            { alt: "Formal dress style", label: "Formal" },
            { alt: "Party dress style", label: "Party" },
            { alt: "Gym dress style", label: "Gym" }
          ].map((style, index) => (
            <div key={index} className="relative">
              <img
                src="https://placehold.co/600x400"
                alt={style.alt}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-2 left-2 text-black font-bold">
                {style.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Style;

