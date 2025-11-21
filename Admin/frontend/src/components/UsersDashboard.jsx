// UsersDashboard.jsx
import React, { useState } from "react";
import UsersTable from "./Tables/UsersTable";

export default function UsersDashboard() {

  // ---- SAMPLE USERS (Replace with backend later) ----
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "johnsmith@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      id: 2,
      name: "Admin User",
      email: "admin@example.com",
      role: "Admin",
      status: "Inactive",
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  // Filter users by name or email
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main">
      {/* TITLE */}
      <div className="dashboard-header">
        <div>
          <h2 className="page-title">Users</h2>
          <p className="page-subtitle">Manage customer accounts and permissions</p>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="search-wrapper">
        <input
            type="text"
            placeholder="Search Users By Name or email ..."
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
      </div>


      {/* USERS TABLE */}
      <UsersTable users={filteredUsers} />
    </div>
  );
}
