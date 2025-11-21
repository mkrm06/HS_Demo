import React, { useState } from "react";
import "../form_css/AddProductForm.css"; // using same modal & form style

export default function AddCategoryForm({ onClose, onSave }) {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    const newCategory = {
      name: categoryName,
      description,
      products: 0
    };
    if (onSave) onSave(newCategory);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        {/* HEADER */}
        <div className="modal-header">
          <div>
            <h3 className="modal-title">Add New Category</h3>
            <p className="modal-subtitle">Fill in the category details below</p>
          </div>

          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        {/* FORM */}
        <div className="product-form">
          <label>Category Name</label>
          <input
            type="text"
            className="input"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />

          <label>Description</label>
          <textarea
            className="input"
            style={{ height: "120px", resize: "none" }}
            placeholder="Describe this category"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* ACTION BUTTONS */}
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>

      </div>
    </div>
  );
}
