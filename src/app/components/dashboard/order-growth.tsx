"use client";
import React, { useState } from "react";
import { Row, Col, Button, Table, Avatar } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import FilterIcon from "../all-icons/filter-icon";
import CalenderIcon from "../all-icons/calender-icon";
import CardsLayout from "../common/cards-layout";
import { UserOutlined } from "@ant-design/icons";
import { Pagination } from "../fuctionality/pagination";

type IOrder = {
  product: string;
  image: string;
  otherProducts: string;
  customer: string;
  email: string;
  total: string;
  status: string;
};

const OrderGrowth = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 100;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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

  // Columns for recent orders table
  const columns: ColumnsType<IOrder> = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      sorter: (a, b) => a.product.localeCompare(b.product),
      render: (text: string, record: IOrder) => (
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
      sorter: (a, b) => a.customer.localeCompare(b.customer),
      render: (text: string, record: IOrder) => (
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
      sorter: (a, b) =>
        parseFloat(a.total.replace("$", "")) -
        parseFloat(b.total.replace("$", "")),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
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

  // Status color mapping
  const statusClassMap: Record<string, string> = {
    Processing: "bg-yellow-50 text-yellow-600",
    Shipped: "bg-blue-50 text-blue-600",
    Delivered: "bg-green-50 text-green-600",
  };

  // "USA", "Japan", "France", "Germany", "South Korea";

  const growthData = [
    {
      country: "USA",
      img: "",
      countTitle: "1,240 Customers",
      progress: "80%",
      bg: "#22CAAD",
    },
    {
      country: "Japan",
      img: "",
      countTitle: "1,240 Customers",
      progress: "60%",
      bg: "#F86624",
    },
    {
      country: "France",
      img: "",
      countTitle: "1,240 Customers",
      progress: "49%",
      bg: "#F9C80E",
    },
    {
      country: "Germany",
      img: "",
      countTitle: "1,240 Customers",
      progress: "100%",
      bg: "#2086BF",
    },
    {
      country: "South Korea",
      img: "",
      countTitle: "1,240",
      progress: "50%",
      bg: "#EB3D4D",
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} lg={16}>
        <div className="w-full overflow-x-auto bg-white p-4 rounded-2xl shadow-md">
          <div className="w-full min-w-[560px] flex justify-between items-center mb-4">
            <div className="w-full flex justify-start items-center gap-3">
              <h2 className="text-lg font-semibold">Recent Orders</h2>
              <p className="text-xs text-green-500 bg-[#E9FAF7] px-1 py-0.5 rounded-sm">
                +2 Orders
              </p>
            </div>
            <div className="flex items-center">
              <Button size="small">
                <CalenderIcon width={16} height={16} />
                Select Date
              </Button>
              <Button size="small" className="ml-2">
                <FilterIcon />
                Filters
              </Button>
              <Button type="link" size="small">
                See All
              </Button>
            </div>
          </div>
          {/* <Table<IOrder>
            dataSource={recentOrders}
            columns={columns}
            pagination={{
              simple: true,
              pageSize: 5,
              total: recentOrders?.length,
              showTotal: (total) => `Showing 1-5 from ${total}`,
            }}
            rowKey="product"
          /> */}
          <>
            <Table<IOrder>
              dataSource={recentOrders}
              columns={columns}
              pagination={false}
              rowKey="product"
            />
            {/* Pagination component */}
            <div className="w-full min-w-[600px]">
              <Pagination
                currentPage={currentPage}
                totalItems={totalItems}
                onPageChange={handlePageChange}
              />
            </div>
          </>
        </div>
      </Col>
      <Col xs={24} lg={8}>
        <CardsLayout title="Customer Growth" subtitle="Based on Country">
          <div style={{ height: 200 }} className="mb-4">
            {/* <Image
                src="/lovable-uploads/01cca40a-9204-4653-8ead-ae962bda7bcb.png"
                alt="World Map"
                className="w-full h-full object-contain"
              /> */}
          </div>
          <div className="space-y-4">
            {growthData?.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex justify-start items-center gap-2">
                  <Avatar size={30} icon={<UserOutlined />} />
                  <div className="flex flex-col justify-start items-start">
                    <div className="font-medium text-[12px] text-left">
                      {item?.country}
                    </div>
                    <p className="text-[11px] text-gray-500">
                      {item?.countTitle}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end items-center gap-2">
                  <div className="lg:w-24  md:w-14 sm:w-24 w-20 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full"
                      style={{
                        width: item?.progress,
                        backgroundColor: item?.bg,
                      }}
                    ></div>
                  </div>
                  <p className="text-[12px] text-[#858D9D]">{item?.progress}</p>
                </div>
              </div>
            ))}
          </div>
        </CardsLayout>
      </Col>
    </Row>
  );
};

export default OrderGrowth;
