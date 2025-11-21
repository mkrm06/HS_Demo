import React from "react";
import ReviewsTable from "../components/Tables/ReviewsTable";

export default function ReviewsDashboard() {
  return (
    <div className="main">
      <div className="dashboard-header">
        <div>
          <h2 className="page-title">Reviews & Ratings</h2>
          <p className="page-subtitle">Moderate customer reviews and feedback</p>
        </div>

        <button className="add-button">
          All Reviews ▼
        </button>
      </div>

      <ReviewsTable />
    </div>
  );
}
