import React from 'react';
import ProductRow from './ProductRow';

// Example product for clothing store
const products = [
  {
    id: 1,
    name: "Men's Casual Shirt",
    meta: "Cotton, Slim Fit",
    category: "Men's Clothing",
    price: "LKR 2000.00",
    stock: 120,
    rating: 4.2,
    active: true,
    sizes: ["S","M","L","XL"],
    colors: ["Blue","White","Black"],
    image: "https://example.com/mens-shirt.jpg"
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    meta: "Floral Print",
    category: "Women's Clothing",
    price: "LKR 2500.00",
    stock: 80,
    rating: 4.5,
    active: true,
    sizes: ["S","M","L"],
    colors: ["Red","Yellow"],
    image: "https://example.com/womens-dress.jpg"
  }
];

export default function ProductsTable() {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Rating</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => <ProductRow key={p.id} product={p} />)}
        </tbody>
      </table>
    </div>
  );
}
