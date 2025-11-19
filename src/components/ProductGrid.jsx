


import React from "react";
import t1 from "../assets/trend1.png";
import t2 from "../assets/trend2.png";
import t3 from "../assets/trend3.png";
import t4 from "../assets/trend4.png";
import t5 from "../assets/trend5.png";
import t6 from "../assets/trend6.png";

const ProductGrid = ({ title }) => {
  const images = [t1, t2, t3, t4, t5, t6];
  const names = [
    "Indo-Western Women's Collection",
    "Lehenga Collection",
    "Saree Collection",
    "Sherwani Collection",
    "Indo-Western Men's Collection",
    "Achkan Collection",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mb-16">
      <h2
  style={{ color: "#654236", fontSize: "40px", marginBottom: "2px" }}
  className="font-bold drop-shadow-lg text-center"
>
  Trending and New Arrivals
</h2>
<h3
  style={{ color: "#100501ff" }}
  className="font-bold drop-shadow-lg text-center"
>
  Our most loved and newly added pieces. Don’t miss what’s hot this season.
</h3>

            <div 
                className="relative w-full flex items-end justify-center bg-gray-50"
                style={{ marginBottom: '30px' }} // FORCES 50px gap below the image
            ></div>
      {/* Grid with column and row gaps */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-x-6 gap-y-12">
        
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
          >
            
         <div 
                className="relative w-full flex items-end justify-center bg-gray-50"
                style={{ marginBottom: '60px' }} // FORCES 50px gap below the image
            >

              
              {/* Fixed height image */}
  <div className="relative w-full flex items-end justify-center overflow-hidden rounded-2xl">
              {/* Image with all corners rounded */}
              <img
                src={img}
                alt={names[index]}
                className="w-[90%] h-64 md:h-72 object-cover rounded-[1rem]"
              />

{/* Bottom 1/3 Dark Overlay */}
<div
  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] rounded-b-2xl flex flex-col 
  items-center justify-center object-cover rounded-[1rem]"
  style={{
    height: "25%",
    background: "rgba(0,0,0,0.6)",
    top: "298px"
  }}
>
  {/* Overlay Text */}
  <p
    style={{
      color: '#edebe0ff',
      fontSize: '25px',
      fontWeight: '900',
      marginBottom: '0.5rem',
      textAlign: 'center'  // Inline style to center text
    }}
  >
    {names[index]}
  </p>

  {/* Button inside overlay */}
   <button
    style={{
      backgroundColor: 'orange',
      color: 'white',
      padding: '0.5rem 1.5rem',
      borderRadius: '9999px',
      fontWeight: '600',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }}
    onMouseOver={e => {
      e.currentTarget.style.backgroundColor = '#f97316'; // hover color
      e.currentTarget.style.transform = 'scale(1.05)';
    }}
    onMouseOut={e => {
      e.currentTarget.style.backgroundColor = 'orange';
      e.currentTarget.style.transform = 'scale(1)';
    }}
  >
    Shop Now
  </button>
</div>
</div>


            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
