"use client";
import React from "react";
import CounterCards from "./counter-cards";
import ChartRow from "./chart-row";
import SourceProductCategory from "./source-product-category";
import OrderGrowth from "./order-growth";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">Welcome Back Jenil</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor si amet welcome back jenil
        </p>
      </div>
      {/* Stats Cards */}
      <CounterCards />
      {/* Charts Row */}
      <ChartRow />
      {/* Sales Source and Top Products */}
      <SourceProductCategory />
      {/* Recent Orders and Customer Growth */}
      <OrderGrowth />
    </div>
  );
};

export default Dashboard;
