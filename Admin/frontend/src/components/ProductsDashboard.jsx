import React, { useState } from "react";
import ProductsTable from "../components/Tables/ProductsTable";
import AddProductForm from "../Forms/AddProductForm";

export default function ProductsDashboard() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="main">
      <div className="dashboard-header">
        <div>
          <h2 className="page-title">Products</h2>
          <p className="page-subtitle">Manage your product inventory</p>
        </div>

        <button className="add-button" onClick={() => setShowForm(true)}>
          <span className="add-plus">+</span> ADD PRODUCT
        </button>
      </div>

      <div className="table-container">
        <ProductsTable />
      </div>

      {showForm && <AddProductForm onClose={() => setShowForm(false)} />}
    </div>
  );
}
