import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProductsDashboard from './components/ProductsDashboard';
import CategoriesDashboard from './components/CategoriesDashboard';
import OrdersDashboard from './components/OrdersDashboard';
import UsersDashboard from './components/UsersDashboard';
import ReviewsDashboard from './components/ReviewsDashboard';

export default function App() {
  const [activeTab, setActiveTab] = useState('Products'); // default view

  return (
    <div className="app">
      <aside className="sidebar">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </aside>

      <main className="main">
        {activeTab === 'Products' && <ProductsDashboard />}
        {activeTab === 'Categories' && <CategoriesDashboard />}
        {activeTab === 'Orders' && <OrdersDashboard />}
        {activeTab === 'Users' && <UsersDashboard />}
        {activeTab === 'Reviews' && <ReviewsDashboard />}
      </main>
    </div>
  );
}
