// src/pages/OrdersDashboard.jsx
import React from 'react';
import OrdersTable from '../components/Tables/OrdersTable';

export default function OrdersDashboard() {
  return (
    <div>
      <div className="dashboard-header">
        <div>
          <div className="page-title">Orders</div>
          <div className="page-subtitle">Manage and track customer orders</div>
        </div>
      </div>
      
      <OrdersTable />
    </div>
  );
}