import React, { useState } from "react";
import "../form_css/AddProductForm.css";
import { FaTimes } from "react-icons/fa";

const categories = ["Women's Clothing", "Men's Clothing", "Kids Clothing"];
const statusOptions = ["Active", "Inactive"];

export default function EditProductForm({ onClose, product = {} }) {
  const [sizes, setSizes] = useState(product.sizes || []);
  const [colors, setColors] = useState(product.colors || []);
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
      ...product,
      name: e.target.name.value,
      category: e.target.category.value,
      status: e.target.status.value,
      price: e.target.price.value,
      stock: e.target.stock.value,
      image: e.target.image.value,
      sizes,
      colors,
    };
    console.log("Updated Product:", data);
    onClose();
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-box">
        <div className="modal-header">
          <div>
            <h3 className="modal-title">Edit Product</h3>
            <div className="modal-subtitle">Update product details below.</div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <FaTimes />
          </button>
        </div>

        <form className="product-form" onSubmit={handleSubmit}>
          <label>Product Name</label>
          <input className="input" name="name" defaultValue={product.name ?? ""} />

          <div className="row">
            <div className="column">
              <label>Category</label>
              <select name="category" className="input" defaultValue={product.category ?? ""}>
                {categories.map((c, idx) => (
                  <option key={idx} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="column">
              <label>Status</label>
              <select name="status" className="input" defaultValue={product.active ? "Active" : "Inactive"}>
                {statusOptions.map((s, idx) => (
                  <option key={idx} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <label>Price</label>
              <input className="input" type="number" name="price" defaultValue={product.price ?? ""} />
            </div>
            <div className="column">
              <label>Stock Quantity</label>
              <input className="input" type="number" name="stock" defaultValue={product.stock ?? ""} />
            </div>
          </div>

          <label>Image URL (jpg/jpeg/png)</label>
          <input className="input" name="image" type="url" pattern="https?://.*\.(jpg|jpeg|png)$" defaultValue={product.image ?? ""} />

          <label>Available Sizes</label>
          <div className="row">
            <input className="input flex" value={sizeInput} onChange={e=>setSizeInput(e.target.value)} />
            <button type="button" className="add-btn" onClick={addSize}>Add</button>
          </div>
          <div>{sizes.join(", ")}</div>

          <label>Available Colors</label>
          <div className="row">
            <input className="input flex" value={colorInput} onChange={e=>setColorInput(e.target.value)} />
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
