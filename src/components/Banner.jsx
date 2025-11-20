import React from "react";
import bannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden mb-12">
      {/* Banner Image with dark mode */}
      <img
        src={bannerImg}
        alt="Banner"
        className="w-full h-[700px] md:h-[600px] object-cover brightness-50"
      />

    {/* Text overlay on top of the image */}
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
  {/* Changed text colors and font size */}
  <h1
    style={{ color: "white", fontSize: "80px" }} // increase font size here
    className="font-bold drop-shadow-lg"
  >
    Discover the Latest <br /> Fashion Trends
  </h1>

  <p
    style={{ color: "white", fontSize: "40px" }} // increase paragraph font size
    className="mt-4 drop-shadow-md"
  >
    Step into a world of style with our newest collection
  </p>



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
    </section>
  );
};

export default Banner; 
