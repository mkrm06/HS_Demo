import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function UserLayout() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Outlet /> {/* This renders the nested route (UserDashboard, Wishlist, etc.) */}
      </div>
    </>
  );
}
