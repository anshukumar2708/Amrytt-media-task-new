"use client";
import React from "react";
import { Card, Row, Col, Progress, Table, Button, Avatar } from "antd";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import {
  MoreOutlined,
  ArrowUpOutlined,
  EyeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import CounterCards from "./counter-cards";
import ChartRow from "./chart-row";

const Dashboard: React.FC = () => {
  // Sample data for charts

  // Sample data for sales source
  const salesSourceData = [
    { name: "Official Website", value: 25, color: "#1890ff" },
    { name: "Offline Store", value: 25, color: "#52c41a" },
    { name: "Amazon Store", value: 25, color: "#13c2c2" },
    { name: "Reseller", value: 25, color: "#fa8c16" },
  ];

  // Sample data for top products
  const topProducts = [
    {
      name: "Logic+ Wireless Mouse",
      category: "Mouse",
      price: "$1,240",
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
    },
    {
      name: "PS Wireless Controller",
      category: "Smartphone",
      price: "$1,189",
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
    },
    {
      name: "Ximi Mechanical Keyboard",
      category: "Smartphone",
      price: "$1,100",
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
    },
    {
      name: "Audio Tech Earphone",
      category: "Earphone",
      price: "$908",
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
    },
    {
      name: "Sams S14 Pro",
      category: "Tablet",
      price: "$900",
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
    },
  ];

  // Sample data for top categories
  const topCategories = [
    { name: "Smartphone", value: 1509, growth: "+18%", color: "#1890ff" },
    { name: "Tablet", value: 1460, growth: "-6%", color: "#fa8c16" },
    { name: "Earphone", value: 1229, growth: "0%", color: "#13c2c2" },
    { name: "Laptop & PC", value: 982, growth: "+18%", color: "#eb2f96" },
    { name: "Mouse", value: 791, growth: "-25%", color: "#1890ff" },
    {
      name: "Hardisk & USB Drive",
      value: 679,
      growth: "+11%",
      color: "#faad14",
    },
    { name: "Camera", value: 679, growth: "+11%", color: "#722ed1" },
  ];

  // Sample data for recent orders
  const recentOrders = [
    {
      product: "Handmade Pouch",
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
      otherProducts: "+3 other products",
      customer: "John Bushmill",
      email: "john@email.com",
      total: "$121.00",
      status: "Processing",
    },
    {
      product: "Smartwatch E2",
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
      otherProducts: "+1 other products",
      customer: "Ilham Budi Agung",
      email: "ilham@email.com",
      total: "$590.00",
      status: "Processing",
    },
    {
      product: "Smartwatch E1",
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
      otherProducts: "",
      customer: "Mohammed Karim",
      email: "m_karim@email.com",
      total: "$125.00",
      status: "Shipped",
    },
    {
      product: "Headphone G1 Pro",
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
      otherProducts: "+1 other products",
      customer: "Linda Blair",
      email: "linda@email.com",
      total: "$348.00",
      status: "Shipped",
    },
    {
      product: "Iphone X",
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
      otherProducts: "",
      customer: "Josh Adam",
      email: "josh_adam@email.com",
      total: "$607.00",
      status: "Delivered",
    },
  ];

  // Status color mapping
  const statusClassMap: Record<string, string> = {
    Processing: "bg-yellow-50 text-yellow-600",
    Shipped: "bg-blue-50 text-blue-600",
    Delivered: "bg-green-50 text-green-600",
  };

  // Columns for recent orders table
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (text: string, record: any) => (
        <div className="flex items-center">
          <Avatar
            src={record.image}
            size={40}
            shape="square"
            className="mr-3"
          />
          <div>
            <div className="font-medium">{text}</div>
            {record.otherProducts && (
              <div className="text-xs text-gray-500">
                {record.otherProducts}
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
      render: (text: string, record: any) => (
        <div>
          <div className="font-medium">{text}</div>
          <div className="text-xs text-gray-500">{record.email}</div>
        </div>
      ),
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      className: "text-right",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text: string) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            statusClassMap[text] || ""
          }`}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex gap-2">
          <Button type="text" size="small" icon={<EyeOutlined />} />
          <Button type="text" size="small" icon={<DeleteOutlined />} />
        </div>
      ),
    },
  ];

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
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} lg={8}>
          <Card
            // bordered={false}
            title="Sales Source"
            extra={<Button type="text" icon={<MoreOutlined />} />}
            className="h-full"
          >
            <div className="text-center relative mb-4">
              <div style={{ height: 180, position: "relative" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={salesSourceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      innerRadius={55}
                      outerRadius={80}
                      paddingAngle={0}
                      dataKey="value"
                    >
                      {salesSourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="text-2xl font-bold">$75.5k</div>
                  <div className="text-xs text-green-500">+15%</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 mt-4">
              {salesSourceData.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-2"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <div className="text-sm font-medium">$10,000</div>
                </div>
              ))}
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card
            // bordered={false}
            title="Top Product"
            extra={<Button type="text" icon={<MoreOutlined />} />}
            className="h-full"
          >
            <div className="text-xs text-gray-500 mb-4">
              Top Product in This Month
            </div>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar
                      src={product.image}
                      shape="square"
                      size={40}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium text-sm">{product.name}</div>
                      <div className="text-xs text-gray-500">
                        {product.category}
                      </div>
                    </div>
                  </div>
                  <div className="font-medium">{product.price}</div>
                </div>
              ))}
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card
            // bordered={false}
            title="Top Category"
            extra={<Button type="text" icon={<MoreOutlined />} />}
            className="h-full"
          >
            <div className="text-xs text-gray-500 mb-4">
              Top Category in This Month
            </div>
            <div className="space-y-4">
              {topCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className="w-6 h-6 rounded mr-3 flex items-center justify-center text-white"
                      style={{ backgroundColor: category.color }}
                    >
                      <span className="text-xs">{category.name.charAt(0)}</span>
                    </div>
                    <div className="font-medium">{category.name}</div>
                  </div>
                  <div className="flex items-center">
                    <div className="font-medium mr-2">{category.value}</div>
                    <div
                      className={`text-xs ${
                        category.growth.startsWith("+")
                          ? "text-green-500"
                          : category.growth === "0%"
                          ? "text-gray-500"
                          : "text-red-500"
                      }`}
                    >
                      {category.growth}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>

      {/* Recent Orders and Customer Growth */}
      <Row gutter={[16, 16]}>
        {/* <Col xs={24} lg={16}>
          <Card
            title="Recent Orders"
            extra={
              <div className="flex items-center">
                <span className="text-xs text-green-500 mr-2">+2 Orders</span>
                <Button size="small">Select Date</Button>
                <Button size="small" className="ml-2">
                  Filters
                </Button>
                <Button type="link" size="small">
                  See All
                </Button>
              </div>
            }
            className="h-full"
          >
            <Table
              dataSource={recentOrders}
              columns={columns}
              pagination={{
                simple: true,
                pageSize: 5,
                total: recentOrders.length,
                showTotal: (total) => `Showing 1-5 from ${total}`,
              }}
              rowKey="product"
            />
          </Card>
        </Col> */}
        <Col xs={24} lg={8}>
          <Card
            // bordered={false}
            title="Customer Growth"
            extra={<Button type="text" icon={<MoreOutlined />} />}
            className="h-full"
          >
            <div className="text-xs text-gray-500 mb-4">Based on Country</div>
            <div style={{ height: 260 }} className="mb-4">
              {/* <Image
                src="/lovable-uploads/01cca40a-9204-4653-8ead-ae962bda7bcb.png"
                alt="World Map"
                className="w-full h-full object-contain"
              /> */}
            </div>
            <div className="space-y-4">
              {["USA", "Japan", "France", "Germany", "South Korea"].map(
                (country, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div className="font-medium">{country}</div>
                      <div className="text-xs text-gray-500 ml-2">
                        1,240 Customers
                      </div>
                    </div>
                    <div className="w-24 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500"
                        style={{
                          width: ["80%", "60%", "45%", "100%", "50%"][index],
                        }}
                      ></div>
                    </div>
                  </div>
                )
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
