"use client";
import React from "react";
import { Card, Row, Col, Progress, Table, Button, Avatar } from "antd";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  MoreOutlined,
  ArrowUpOutlined,
  EyeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import TotalIcon from "../all-icons/total-icon";
import ProgressIcon from "../all-icons/progress-icon";
import FinishedIcon from "../all-icons/finished-icon";
import { UnFinishedIcon } from "../all-icons/un-finished-icon";

const Dashboard: React.FC = () => {
  // Sample data for charts
  const revenueData = [
    { name: "Jan", revenue: 400, sales: 240 },
    { name: "Feb", revenue: 500, sales: 320 },
    { name: "Mar", revenue: 450, sales: 280 },
    { name: "Apr", revenue: 470, sales: 250 },
    { name: "May", revenue: 400, sales: 320 },
    { name: "Jun", revenue: 600, sales: 380 },
    { name: "Jul", revenue: 580, sales: 400 },
    { name: "Aug", revenue: 550, sales: 450 },
    { name: "Sep", revenue: 480, sales: 320 },
    { name: "Oct", revenue: 510, sales: 400 },
    { name: "Nov", revenue: 530, sales: 350 },
    { name: "Dec", revenue: 620, sales: 420 },
  ];

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
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={12} lg={6}>
          <Card
            //   bordered={false}
            className="h-full"
          >
            <div className="flex items-center mb-2">
              <h3 className="text-base font-medium text-gray-600 m-0">
                Total Project
              </h3>
              <div className="ml-auto bg-blue-100 text-blue-600 p-2 rounded-md">
                <TotalIcon />
              </div>
            </div>
            <h2 className="text-3xl font-semibold mb-2">6,784</h2>
            <div className="flex items-center text-sm">
              <span className="text-green-500 mr-1">10%</span>
              <span className="text-gray-500">+$150 today</span>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card bordered={false} className="h-full">
            <div className="flex items-center mb-2">
              <h3 className="text-base font-medium text-gray-600 m-0">
                In Progress
              </h3>
              <div className="ml-auto bg-orange-100 text-orange-600 p-2 rounded-md">
                <ProgressIcon />
              </div>
            </div>
            <h2 className="text-3xl font-semibold mb-2">1,920</h2>
            <div className="flex items-center text-sm">
              <span className="text-green-500 mr-1">10%</span>
              <span className="text-gray-500">+$150 today</span>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card
            //   bordered={false}
            className="h-full"
          >
            <div className="flex items-center mb-2">
              <h3 className="text-base font-medium text-gray-600 m-0">
                Finished
              </h3>
              <div className="ml-auto bg-green-100 text-green-600 p-2 rounded-md">
                <FinishedIcon />
              </div>
            </div>
            <h2 className="text-3xl font-semibold mb-2">4,412</h2>
            <div className="flex items-center text-sm">
              <span className="text-green-500 mr-1">10%</span>
              <span className="text-gray-500">+$150 today</span>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card
            //   bordered={false}
            className="h-full"
          >
            <div className="flex items-center mb-2">
              <h3 className="text-base font-medium text-gray-600 m-0">
                Unfinished
              </h3>
              <div className="ml-auto bg-red-100 text-red-600 p-2 rounded-md">
                <UnFinishedIcon />
              </div>
            </div>
            <h2 className="text-3xl font-semibold mb-2">329</h2>
            <div className="flex items-center text-sm">
              <span className="text-green-500 mr-1">10%</span>
              <span className="text-gray-500">+$150 today</span>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Charts Row */}
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} lg={8}>
          <Card
            title="Target"
            extra={<Button type="text" icon={<MoreOutlined />} />}
            className="h-full"
          >
            <div className="text-center relative mb-2">
              <Progress
                type="dashboard"
                percent={75.55}
                strokeColor="#2563EB"
                format={() => (
                  <>
                    <div className="text-2xl font-bold">75.55%</div>
                    <div className="text-xs text-green-500">+10%</div>
                  </>
                )}
              />
              <div className="text-sm text-gray-500 mt-2">
                You succeed earn <span className="font-medium">$240</span>{" "}
                today, it&apos;s higher than yesterday
              </div>
            </div>
            <div className="grid grid-cols-3 mt-4 pt-4 border-t border-gray-100">
              {[
                { label: "Target", value: "$20k" },
                { label: "Revenue", value: "$16k" },
                { label: "Today", value: "$1.5k" },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-xs text-gray-500">{label}</div>
                  <div className="font-medium">
                    {value}{" "}
                    <ArrowUpOutlined className="text-green-500 text-xs" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={16}>
          <Card
            // bordered={false}
            title="Statistic"
            extra={<Button type="text" icon={<MoreOutlined />} />}
            className="h-full"
          >
            <div className="mb-4 text-xs text-gray-500">Revenue and Sales</div>
            <div style={{ height: 240 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={revenueData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorRevenue"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F97316" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#333",
                      border: "none",
                      borderRadius: "4px",
                      color: "white",
                      padding: "8px 12px",
                    }}
                    itemStyle={{ color: "white" }}
                    labelStyle={{ marginBottom: "5px", fontWeight: "bold" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#2563EB"
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                  <Area
                    type="monotone"
                    dataKey="sales"
                    stroke="#F97316"
                    fillOpacity={1}
                    fill="url(#colorSales)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-start mt-2">
              <div className="flex items-center mr-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 mr-1"></div>
                <span className="text-xs">Revenue</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-orange-600 mr-1"></div>
                <span className="text-xs">Sales</span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

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
