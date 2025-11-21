import React, { useState } from "react";
import { FaStar, FaEdit, FaTrash } from "react-icons/fa";
import EditProductForm from "../../Forms/EditProductForm";

export default function ProductRow({ product }) {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <>
      {showEditForm && <EditProductForm onClose={() => setShowEditForm(false)} product={product} />}

      <tr>
        <td>
          <div style={{ fontWeight: 600 }}>{product.name}</div>
          <div style={{ fontSize: 12, color: "#777" }}>{product.meta}</div>
        </td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
        <td>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FaStar color="#FBBF24" /> {product.rating}
          </div>
        </td>
        <td>
          <span className={`status-pill ${product.active ? "active" : "inactive"}`}>
            {product.active ? "Active" : "Inactive"}
          </span>
        </td>
        <td>
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={() => setShowEditForm(true)} style={{ border: "none", background: "none", cursor: "pointer" }}>
              <FaEdit />
            </button>
            <button style={{ border: "none", background: "none", cursor: "pointer" }}>
              <FaTrash />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
