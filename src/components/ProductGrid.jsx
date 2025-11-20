


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
                style={{ marginBottom: '40px' }} // FORCES 50px gap below the image
            >

              
              {/* Fixed height image */}
  <div className="relative w-full flex items-end justify-center overflow-hidden rounded-2xl">
              {/* Image with all corners rounded */}
              <img
                src={img}
                alt={names[index]}
                className="w-[90%] h-64 md:h-72 object-cover rounded-[1rem]"
              />
<div
  className="overlay absolute inset-0 w-[90%] mx-auto flex flex-col items-center justify-center rounded-b-[1rem]"
  style={{ background: "rgba(0,0,0,0.4)" }} // slightly transparent dark overlay
>
  <p className="overlay-text font-bold text-center mb-2">
    {names[index]}
  </p>

  <button className="overlay-btn">
    Shop Now
  </button>
</div>



</div>


            </div>
          </div>
        ))}
      </div>
   <style>
  {`
    /* Overlay text */
.overlay-text {
  color: #edebe0ff;
  font-size: 25px;
  font-weight: 900;
  text-align: left; /* default left */
  word-break: break-word;
  margin-bottom: 0.5rem;
}
  
    .overlay-btn {
      background-color: orange;
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: 9999px;
      font-weight: 400;
      box-shadow: 0 3px 6px rgba(0,0,0,0.1);
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .overlay-btn:hover {
      background-color: #f97316;
      transform: scale(1.05);
    }

    /* Medium devices */
    @media (max-width: 1024px) {
      .overlay-text { font-size: 20px; }
      .overlay-btn { padding: 0.4rem 1rem; font-size: 14px; }
    }

    /* Small devices */
    @media (max-width: 768px) {
      .overlay-text { font-size: 13px; }
      .overlay-btn { padding: 0.35rem 0.9rem; font-size: 13px; }
    }

    /* Extra small devices */
    @media (max-width: 480px) {
      .overlay-btn { padding: 0.15rem 0.5rem; font-size: 5px; }
      .overlay-text {
    font-size: 7px;
    text-align: center; /* force center on mobile */
  }
    }
      
  `}
</style>



    </section>
  );
};

export default ProductGrid;
