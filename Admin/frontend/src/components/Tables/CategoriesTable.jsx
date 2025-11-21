// src/components/Tables/CategoriesTable.jsx
import React from "react";
import CategoryRow from "./CategoryRow";

const categories = [
  {
    id: 1,
    name: "Men's Fashion",
    description: "Kurtas and traditional wear for men",
    products: 20
  },
  {
    id: 2,
    name: "Women's Fashion",
    description: "Sarees, Lehengas, and ethnic wear for women",
    products: 50
  },
  {
    id: 3,
    name: "Kids",
    description: "Kurtas and Lehengas",
    products: 65
  }
];

export default function CategoriesTable() {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Description</th>
            <th>Products</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {categories.map(cat => (
            <CategoryRow key={cat.id} category={cat} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
