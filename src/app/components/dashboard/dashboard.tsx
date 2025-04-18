"use client";
import React from "react";
import { Card, Row, Col, Button, Avatar } from "antd";
import { MoreOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import CounterCards from "./counter-cards";
import ChartRow from "./chart-row";
import SourceProductCategory from "./source-product-category";

const Dashboard: React.FC = () => {
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
      <SourceProductCategory />

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
