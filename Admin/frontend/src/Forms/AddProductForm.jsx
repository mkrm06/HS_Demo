import React, { useState } from "react";
import "../form_css/AddProductForm.css";

const categories = ["Women's Clothing", "Men's Clothing", "Kids Clothing"];
const statusOptions = ["Active", "Inactive"];

export default function AddProductForm({ onClose }) {
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizeInput, setSizeInput] = useState("");
  const [colorInput, setColorInput] = useState("");

  const addSize = () => {
    if (sizeInput && !sizes.includes(sizeInput)) {
      setSizes([...sizes, sizeInput]);
      setSizeInput("");
    }
  };

  const addColor = () => {
    if (colorInput && !colors.includes(colorInput)) {
      setColors([...colors, colorInput]);
      setColorInput("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      category: e.target.category.value,
      status: e.target.status.value,
      price: e.target.price.value,
      stock: e.target.stock.value,
      image: e.target.image.value,
      sizes,
      colors,
    };
    console.log("New Product:", data);
    onClose(); // close form
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <div>
            <h3 className="modal-title">Add New Product</h3>
            <p className="modal-subtitle">Fill in the product details below.</p>
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <form className="product-form" onSubmit={handleSubmit}>
          <label>Product Name</label>
          <input type="text" name="name" className="input full" required />

          <div className="row">
            <div className="column">
              <label>Category</label>
              <select name="category" className="input" required>
                <option value="">Select Category</option>
                {categories.map((c, idx) => (
                  <option key={idx} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="column">
              <label>Status</label>
              <select name="status" className="input" required>
                {statusOptions.map((s, idx) => (
                  <option key={idx} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <label>Price</label>
              <input type="number" name="price" className="input" required />
            </div>

            <div className="column">
              <label>Stock Quantity</label>
              <input type="number" name="stock" className="input" required />
            </div>
          </div>

          <label>Image URL (jpg/jpeg/png)</label>
          <input type="url" name="image" className="input full" pattern="https?://.*\.(jpg|jpeg|png)$" />

          <label>Available Sizes</label>
          <div className="row">
            <input type="text" className="input flex" value={sizeInput} onChange={(e)=>setSizeInput(e.target.value)} placeholder="e.g. S, M, L" />
            <button type="button" className="add-btn" onClick={addSize}>Add</button>
          </div>
          <div>{sizes.join(", ")}</div>

          <label>Available Colors</label>
          <div className="row">
            <input type="text" className="input flex" value={colorInput} onChange={(e)=>setColorInput(e.target.value)} placeholder="e.g. Red, Blue" />
            <button type="button" className="add-btn" onClick={addColor}>Add</button>
          </div>
          <div>{colors.join(", ")}</div>

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="save-btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
