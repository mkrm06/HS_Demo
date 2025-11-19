import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import CategorySection from "../components/CategorySection";
import ProductGrid from "../components/ProductGrid";
import Recommended from "../components/Recommended";
import SeasonalBanner from "../components/SeasonalBanner";
import Footer from "../components/Footer";


function App() {
  return (
    <div className="bg-[#f9f6f1] min-h-screen font-sans">

      <Navbar />

      <Banner />

      <CategorySection />

      <ProductGrid title="Trending and New Styles" />

      <Recommended title="Recommended for You" />

      <SeasonalBanner title="New Sale" />

      <Footer />   {/* 👈 FOOTER AT THE BOTTOM */}

    </div>
  );
}

export default App;
