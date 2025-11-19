import React from "react";
import cat1 from "../assets/cat1.png";
import cat2 from "../assets/cat2.png";
import cat3 from "../assets/cat3.png";
import cat4 from "../assets/cat4.png";

const categories = [
  { id: 1, name: "Men's Collection", img: cat1 },
  { id: 2, name: "Women's Collection", img: cat2 },
  { id: 3, name:  "Kids' Collection", img: cat3 },
  { id: 4, name: "Kurutha Dresess", img: cat4 },
];

const CategorySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-16">
      <h2
  style={{ color: "#654236", fontSize: "40px", marginBottom: "1px" }}
  className="font-bold drop-shadow-lg text-center"
>
  Shop by Category 
</h2>
<h3
  style={{ color: "#100501ff" }}
  className="font-bold drop-shadow-lg text-center"
>
  Shop your favorites and find something new for every occasion.
</h3>


      {/* Grid with 2 columns on desktop (md:grid-cols-2) to ensure 2 rows exist */}
      {/* gap-y-16 is left here just in case it starts working */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-6">
        {categories.map((cat, index) => (
          // Outer card container
          <div
            key={cat.id}
            className="group rounded-2xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer transition-all duration-300"
          >
            {/* 🛑 MODIFIED HERE: Added strong inline style for margin-bottom 🛑 */}
            <div 
                className="relative w-full flex items-end justify-center bg-gray-50"
                style={{ marginBottom: '60px' }} // FORCES 50px gap below the image
            >
              
              {/* Image */}
              <img
                src={cat.img}
                alt={cat.name}
                className="w-[70%] object-contain transition-transform duration-500 object-cover rounded-[1rem]"
              />

              {/* Dark overlay bottom 1/3 */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] rounded-b-2xl object-cover rounded-[1rem]"
                style={{
                  height: "30%",
                  background: "rgba(0,0,0,0.6)",
                }}
              ></div>

              {/* Text overlay at bottom */}
              <div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70%] text-center"
                style={{
                  color: "#e4dedcff",
                  fontSize: "25px",
                  fontWeight: "700",
                  top:"390px"
                }}
              >
                {cat.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;