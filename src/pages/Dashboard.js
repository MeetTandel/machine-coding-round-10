import React from "react";
import { useDashboard } from "../context/DashboardContext";

export const Dashboard = () => {
  const { totalStock, totalDelivered, lowStockItems } = useDashboard();
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="value green">{totalStock}</div>
        <p>Total Stock</p>
      </div>
      <div className="dashboard-card">
        <div className="value yellow">{totalDelivered}</div>
        <p>Total Delivered</p>
      </div>
      <div className="dashboard-card">
        <div className="value red">{lowStockItems}</div>
        <p>Low Stock Items</p>
      </div>
    </div>
  );
};
