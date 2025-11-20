import React from "react";
import cat1 from "../assets/cat1.png";
import cat2 from "../assets/cat2.png";
import cat3 from "../assets/cat3.png";
import cat4 from "../assets/cat4.png";

const categories = [
  { id: 1, name: "Men's Collection", img: cat1 },
  { id: 2, name: "Women's Collection", img: cat2 },
  { id: 3, name: "Kids' Collection", img: cat3 },
  { id: 4, name: "Kurutha Dresses", img: cat4 },
];

const CategorySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-16">
      {/* Heading */}
      <h2
        style={{ color: "#654236" }}
        className="font-bold drop-shadow-lg text-center text-3xl sm:text-4xl mb-2"
      >
        Shop by Category
      </h2>
      <h3
        style={{ color: "#100501ff" }}
        className="font-semibold drop-shadow-lg text-center text-sm sm:text-base mb-10"
      >
        Shop your favorites and find something new for every occasion.
      </h3>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="group rounded-2xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative w-full flex items-end justify-center bg-gray-50">
              {/* Category Image */}

 <div 
                className="relative w-full flex items-end justify-center bg-gray-50"
                style={{ marginBottom: '60px' }} // FORCES 50px gap below the image
            >

              <img
                src={cat.img}
                alt={cat.name}
                className="w-[80%] sm:w-[90%] md:w-[80%] object-contain transition-transform duration-500 rounded-[1rem]"
              />

              {/* Dark overlay at bottom */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] sm:w-[90%] md:w-[80%] rounded-b-[1rem]"
                style={{ height: "30%", background: "rgba(0,0,0,0.6)" }}
              ></div>

              {/* Category Name */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] sm:w-[90%] md:w-[80%] text-center font-bold 
              text-[#e4dedcff] text-[17px] sm:text-[18px] md:text-[20px]">
                {cat.name}
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
