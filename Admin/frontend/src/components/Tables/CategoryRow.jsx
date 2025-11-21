import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditCategoryForm from "../../Forms/EditCategoryForm";

export default function CategoryRow({ category }) {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <>
      {showEditForm && (
        <EditCategoryForm
          category={category}
          onClose={() => setShowEditForm(false)}
          onUpdate={(updatedData) => console.log("Updated:", updatedData)}
        />
      )}

      <tr>
        <td>{category.name}</td>
        <td>{category.description}</td>
        <td>{category.products}</td>

        <td>
          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={() => setShowEditForm(true)}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <FaEdit />
            </button>

            <button
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <FaTrash />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
