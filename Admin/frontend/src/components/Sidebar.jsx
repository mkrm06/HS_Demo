import React from "react";
import {
  FaBoxOpen,
  FaListAlt,
  FaShoppingCart,
  FaUsers,
  FaStar,
  FaSignOutAlt
} from "react-icons/fa";

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <>
      {/* HEADER */}
      <div className="sidebar-header">
        <div className="logo">HS</div>
        <div className="brand-text">House of Salaga</div>
        <div className="sub-text">Admin Dashboard</div>
      </div>

      {/* MENU ITEMS */}
      <div className="menu">
        <div
          className={`menu-item ${activeTab === "Products" ? "active" : ""}`}
          onClick={() => setActiveTab("Products")}
        >
          <FaBoxOpen /> Products
        </div>

        <div
          className={`menu-item ${activeTab === "Categories" ? "active" : ""}`}
          onClick={() => setActiveTab("Categories")}
        >
          <FaListAlt /> Categories
        </div>

        <div
          className={`menu-item ${activeTab === "Orders" ? "active" : ""}`}
          onClick={() => setActiveTab("Orders")}
        >
          <FaShoppingCart /> Orders
        </div>

        <div
          className={`menu-item ${activeTab === "Users" ? "active" : ""}`}
          onClick={() => setActiveTab("Users")}
        >
          <FaUsers /> Users
        </div>

        <div
          className={`menu-item ${activeTab === "Reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("Reviews")}
        >
          <FaStar /> Reviews
        </div>

        {/* LOGOUT */}
        <div className="menu-item logout-item">
          <FaSignOutAlt /> Logout
        </div>
      </div>

      {/* FOOTER USER INFO */}
      <div className="sidebar-footer">
        <div className="footer-name">Admin User</div>
        <div className="footer-email">admin@example.com</div>
      </div>
    </>
  );
}
