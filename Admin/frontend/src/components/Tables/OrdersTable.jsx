import React from "react";
import OrderRow from "./OrderRow";

const orders = [
  {
    id: '001',
    customerName: 'Name',
    customerEmail: 'email',
    date: '8/11/2025',
    items: 1,
    total: 'Price',
    payment: 'Card',
    status: 'Delivered'
  },
  {
    id: '002',
    customerName: 'Name',
    customerEmail: 'email',
    date: '8/11/2025',
    items: 2,
    total: 'Price',
    payment: 'COD',
    status: 'Shipped'
  }
];

export default function OrdersTable() {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Items</th>
            <th>Total</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
}