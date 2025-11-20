import React from "react";
import bannerImg from "../assets/banner2.png";
import overlayImg  from "../assets/star.png";

const SeasonSaleBanner = () => {
  return (
    <section className="relative w-full mt-60">
      <div className="max-w-6xl mx-auto relative">

        {/* Banner Image */import React from "react";
import bannerImg from "../assets/banner2.png";
import overlayImg  from "../assets/star.png";

const SeasonSaleBanner = () => {
  return (
    <section className="relative w-full mt-60">
      <div className="max-w-6xl mx-auto relative">

        {/* Banner Image */}
        <img
          src={bannerImg}
          alt="Sale banner"
          className="w-full rounded-xl object-cover brightness-90"
        />

        {/* Overlay Text */}
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 text-[#935930ff] overlay-text">
          <h2  style={{ fontSize: "50px" }} 
               className="font-bold drop-shadow-lg overlay-heading">
            End of Season Sale <br /> <br />
            <span className="text-red-600">Up to 40% Off Selected Items</span>
          </h2>

          <button
            style={{
              backgroundColor: 'brown',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: '600',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = '#f97316';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = 'brown';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Add to Cart
          </button>
        </div>

        {/* Overlay Image (Star Badge) */}
        <div className="absolute bottom-1/20 left-3/8 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 w-[200px] h-[200px] z-10 overlay-img">
          <img
            src={overlayImg}
            alt="Overlay Badge"
            className="w-full h-full object-contain brightness-90"
          />
        </div>
      </div>

      <style>{`
       /* Mobile & small tablet responsiveness */
@media (max-width: 768px) {
  .overlay-text {
    top: 35% !important; /* move text higher */
    left: 50% !important;
    transform: translate(-50%, 0) !important; /* remove vertical translate */
    padding: 0 0.1rem !important;
  }

  .overlay-heading {
    font-size: 25px !important;
    line-height: 1 !important;
  }

  .overlay-img {
    top: 40% !important; /* move overlay image higher */
    left: 67% !important;
    width: 120px !important;
    height: 120px !important;
    transform: translate(-50%, 0) !important; /* remove vertical translate */
  }
}

@media (max-width: 480px) {
  .overlay-heading {
    font-size: 20px !important;
  }

  .overlay-img {
    top: 75% !important; /* move image slightly higher on small phones */
    width: 90px !important;
    height: 90px !important;
  }
}

      `}</style>
    </section>
  );
};

export default SeasonSaleBanner;
}
        <img
          src={bannerImg}
          alt="Sale banner"
          className="w-full rounded-xl object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 text-[#572311]">
          <h2  style={{ fontSize: "50px" }} // increase font size here
    className="font-bold drop-shadow-lg">
            End of Season Sale <br /> <br />
            <span className="text-red-600">Up to 40% Off Selected Items</span>
          </h2>

          <button
    style={{
      backgroundColor: 'brown',
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
      e.currentTarget.style.backgroundColor = 'brown';
      e.currentTarget.style.transform = 'scale(1)';
    }}
  >
    Add to Cart
  </button>
        </div>

 {/* Overlay Image (e.g., star badge) */}
        <div className="absolute bottom-1/20 left-3/8 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 w-[200px] h-[200px] z-10">
          <img
            src={overlayImg}
            alt="Overlay Badge"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};


export default SeasonSaleBanner; 
