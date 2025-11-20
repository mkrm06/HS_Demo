import React from "react";
import img1 from "../assets/r1.png";
import img2 from "../assets/r2.png";
import img3 from "../assets/r3.png";
import img4 from "../assets/r4.png";

const RecommendedForYou = () => {
  const products = [
    { img: img1, name: "Embroidered Silk Kurtha Set", price: "LKR 6,200" },
    { img: img2, name: "Pastel Floral Lehenga", price: "LKR 4,450" },
    { img: img3, name: "Casual Cotton Kurtha", price: "LKR 4,750" },
    { img: img4, name: "Sequin Work Lehenga (Blue)", price: "LKR 9,200" },
  ];

  return (
    <section className="bg-[#FCE7C8] py-10"> {/* ← Kahata background */}
      <h2 className="text-center text-xl font-semibold">Recommended for You</h2>
      <p className="text-center text-gray-600 mt-2 mb-8">
        Handpicked looks we think you'll love based on your browsing.
      </p>

 <div className="max-w-6xl mx-auto grid recommended-grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">

        
        {products.map((item, i) => (
          <div 
            key={i} 
           className="w-full h-64 object-cover rounded-4xl mb-4"
          >
            
            <img
    src={item.img}
    alt={item.name}
    style={{ width: 'full', height: '30rem', objectFit: 'cover', borderRadius: '1rem', marginBottom: '1rem',align:'center' }}
  />

            <p className="text-sm font-medium mt-3 text-center">{item.name}</p>

            <p className="text-lg font-semibold text-center text-black">{item.price}</p>
            
          
          
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
  <button
    style={{
      backgroundColor: 'orange',
      color: 'white',
      padding: '0.5rem 1.5rem',
      borderRadius: '9999px',
      fontWeight: '600',
      boxShadow: '0 4px 6px rgba(32, 10, 194, 0.1)',
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
    Add to Cart
  </button>
</div>
 </div>
        ))}
      </div>

      {/* slider dots */}
      <div className="flex justify-center mt-6 space-x-2">
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        <div className="w-2 h-2 rounded-full bg-gray-700"></div>
      </div>
 <style>{`
  /* Mobile & small tablet responsiveness */
  @media (max-width: 768px) {
    /* Change grid to 2 columns on mobile/tablet */
    .recommended-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 1rem !important;
    }

    /* Product image adjustments and center */
    .recommended-grid img {
      display: block !important;
      margin: 0 auto !important;
      height: 18rem !important;
      border-radius: 1rem !important;
      margin-bottom: 0.8rem !important;
    }

    /* Product name text adjustments */
    .recommended-grid p.text-sm {
      font-size: 0.85rem !important;
      text-align: center !important;
    }

    /* Product price text adjustments */
    .recommended-grid p.text-lg {
      font-size: 1rem !important;
      text-align: center !important;
    }

    /* Add to Cart button adjustments and center */
    .recommended-grid button {
      display: block !important;
      margin: 0 auto !important;
      padding: 0.4rem 1.2rem !important;
      font-size: 0.9rem !important;
    }
  }

  @media (max-width: 480px) {
    /* Grid becomes 1 column on small phones */
    .recommended-grid {
      grid-template-columns: 1fr !important;
      gap: 1rem !important;
    }

    /* Product image smaller and centered */
    .recommended-grid img {
      display: block !important;
      margin: 0 auto !important;
      height: 16rem !important;
    }

    /* Product name text smaller */
    .recommended-grid p.text-sm {
      font-size: 0.8rem !important;
      text-align: center !important;
    }

    /* Product price text smaller */
    .recommended-grid p.text-lg {
      font-size: 0.95rem !important;
      text-align: center !important;
    }

    /* Add to Cart button smaller and centered */
    .recommended-grid button {
      display: block !important;
      margin: 0 auto !important;
      padding: 0.35rem 1rem !important;
      font-size: 0.85rem !important;
    }
  }
`}</style>


    </section>
  );
};

export default RecommendedForYou;
