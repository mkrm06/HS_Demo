import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main style={{ padding: "40px", textAlign: "center" }}>
        <h1>Welcome to Our Website</h1>
        <p>
          This is the home page. You can add your content, features, or sections
          here.
        </p>
        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
