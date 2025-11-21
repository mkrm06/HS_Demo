import React from "react";
import ReviewRow from "./ReviewRow";

export default function ReviewsTable() {
  const reviews = [
    {
      id: 1,
      product: "Name",
      customer: "Name",
      rating: 4,
      review: "Details",
      date: "8/11/2025",
      status: "Approved",
    },
    {
      id: 2,
      product: "Name",
      customer: "Name",
      rating: 4,
      review: "Details",
      date: "8/11/2025",
      status: "Pending",
    },
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Customer</th>
            <th>Rating</th>
            <th>Review</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((r) => (
            <ReviewRow key={r.id} data={r} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
