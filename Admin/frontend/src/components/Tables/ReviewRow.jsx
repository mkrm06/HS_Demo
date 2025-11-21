import React from "react";
import { FaTrash } from "react-icons/fa";

export default function ReviewRow({ data }) {
  const { product, customer, rating, review, date, status } = data;
  const starsArray = Array.from({ length: rating });

  return (
    <tr className="review-row hover:bg-gray-50">
      {/* Product */}
      <td className="px-4 py-3">
        <span className="font-semibold text-gray-800">{product}</span>
      </td>

      {/* Customer */}
      <td className="px-4 py-3 text-gray-700">{customer}</td>

      {/* Rating */}
      <td className="px-4 py-3">
        <div className="flex">
          {starsArray.map((_, i) => (
            <span key={i} className="text-yellow-400 mr-1">⭐</span>
          ))}
        </div>
      </td>

      {/* Review */}
      <td className="px-4 py-3 text-gray-600 max-w-xs truncate" title={review}>
        {review}
      </td>

      {/* Date */}
      <td className="px-4 py-3 text-gray-500">{date}</td>

      {/* Status */}
      <td className="px-4 py-3">
        <span
          className={`status-pill ${status.toLowerCase()}`}
        >
          {status}
        </span>
      </td>

      {/* Action */}
      <td className="text-center px-4 py-3">
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
            }}
          >
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
}
