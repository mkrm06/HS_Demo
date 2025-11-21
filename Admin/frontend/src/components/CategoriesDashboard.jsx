import React, { useState } from "react";
import CategoriesTable from "../components/Tables/CategoriesTable";
import AddCategoryForm from "../Forms/AddCategoryForm";
import { FaPlus } from "react-icons/fa";

export default function CategoriesDashboard() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="main">

      {showAddForm && (
        <AddCategoryForm onClose={() => setShowAddForm(false)} />
      )}

      {/* PAGE HEADER */}
      <div className="dashboard-header">
        <div>
          <h2 className="page-title">Categories</h2>
          <p className="page-subtitle">Organize your products into categories</p>
        </div>

        <button className="add-button" onClick={() => setShowAddForm(true)}>
          <span className="add-plus"><FaPlus /></span>
          ADD CATEGORY
        </button>
      </div>

      <CategoriesTable />
    </div>
  );
}
