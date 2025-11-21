import React, { useState, useRef, useEffect } from "react";

export default function OrderRow({ order }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(order.status);
  const dropdownRef = useRef(null);

  const statuses = ['Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'];

  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
    setShowDropdown(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <tr>
      <td>{order.id}</td>
      <td>
        <div>
          <div className="cust-name">{order.customerName}</div>
          <div className="cust-email">{order.customerEmail}</div>
        </div>
      </td>
      <td>{order.date}</td>
      <td>{order.items}</td>
      <td>{order.total}</td>
      <td>
        <span className={`payment-pill ${order.payment.toLowerCase()}`}>
          {order.payment}
        </span>
      </td>
      <td>
        <div className="status-cell" ref={dropdownRef}>
          <button
            className="status-button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className={`status-dot ${currentStatus.toLowerCase()}`}></span>
            {currentStatus}
            <span className="dropdown-arrow">▼</span>
          </button>

          {showDropdown && (
            <div className="status-dropdown">
              {statuses.map((status) => (
                <button
                  key={status}
                  className={`status-item ${currentStatus === status ? 'selected' : ''}`}
                  onClick={() => handleStatusChange(status)}
                >
                  {status}
                  {currentStatus === status && <span className="tick">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}