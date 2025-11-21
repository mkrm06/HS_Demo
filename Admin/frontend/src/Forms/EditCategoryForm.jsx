import React, { useState } from "react";
import "../form_css/AddProductForm.css"; // reuse modal + input styles

export default function EditCategoryForm({ onClose, category, onUpdate }) {
  const [categoryName, setCategoryName] = useState(category?.name || "");
  const [description, setDescription] = useState(category?.description || "");

  const handleSave = () => {
    const updated = {
      ...category,
      name: categoryName,
      description,
    };

    if (onUpdate) onUpdate(updated);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        {/* HEADER */}
        <div className="modal-header">
          <div>
            <h3 className="modal-title">Edit Category</h3>
            <p className="modal-subtitle">Update the category details below</p>
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
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />

          <label>Description</label>
          <textarea
            className="input"
            style={{ height: "120px", resize: "none" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* ACTIONS */}
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
