"use client";
import React, { useState } from "react";
import {
  Card,
  Table,
  Button,
  Input,
  Select,
  Avatar,
  Tag,
  //   Dropdown,
  Checkbox,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  ExportOutlined,
  //   MoreOutlined,
  EditOutlined,
  EyeOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";

const { Option } = Select;

const ProductList: React.FC = () => {
  //   const navigate = useNavigate();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [activeTab, setActiveTab] = useState("all");

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Handmade Pouch",
      variants: 3,
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
      sku: "302012",
      category: "Bag & Pouch",
      stock: 10,
      price: "$121.00",
      status: "Low Stock",
      added: "29 Dec 2022",
    },
    {
      id: 2,
      name: "Smartwatch E2",
      variants: 2,
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
      sku: "302011",
      category: "Watch",
      stock: 204,
      price: "$590.00",
      status: "Published",
      added: "24 Dec 2022",
    },
    {
      id: 3,
      name: "Smartwatch E1",
      variants: 3,
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
      sku: "302002",
      category: "Watch",
      stock: 48,
      price: "$125.00",
      status: "Draft",
      added: "12 Dec 2022",
    },
    {
      id: 4,
      name: "Headphone G1 Pro",
      variants: 1,
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
      sku: "301901",
      category: "Audio",
      stock: 401,
      price: "$348.00",
      status: "Published",
      added: "21 Oct 2022",
    },
    {
      id: 5,
      name: "Iphone X",
      variants: 4,
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
      sku: "301900",
      category: "Smartphone",
      stock: 120,
      price: "$607.00",
      status: "Published",
      added: "21 Oct 2022",
    },
    {
      id: 6,
      name: "Puma Shoes",
      variants: 3,
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
      sku: "301881",
      category: "Shoes",
      stock: 432,
      price: "$234.00",
      status: "Published",
      added: "21 Oct 2022",
    },
    {
      id: 7,
      name: "Logic+ Wireless Mouse",
      variants: 1,
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
      sku: "301643",
      category: "Mouse",
      stock: 0,
      price: "$760.00",
      status: "Out of Stock",
      added: "19 Sep 2022",
    },
    {
      id: 8,
      name: "Nike Shoes",
      variants: 3,
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
      sku: "301600",
      category: "Shoes",
      stock: 347,
      price: "$400.00",
      status: "Published",
      added: "19 Sep 2022",
    },
    {
      id: 9,
      name: "Lego Car",
      variants: 2,
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
      sku: "301555",
      category: "Toys",
      stock: 299,
      price: "$812.00",
      status: "Published",
      added: "19 Sep 2022",
    },
    {
      id: 10,
      name: "PS Wireless Controller",
      variants: 3,
      image: "/lovable-uploads/64853f68-934d-45db-bb9a-9a82c59bd58c.png",
      sku: "301002",
      category: "Beauty",
      stock: 38,
      price: "$123.00",
      status: "Draft",
      added: "10 Aug 2022",
    },
  ];

  // Status color map
  const getStatusColor = (status: string) => {
    const statusMap: Record<string, string> = {
      Published: "green",
      Draft: "gray",
      "Low Stock": "orange",
      "Out of Stock": "red",
    };
    return statusMap[status] || "blue";
  };

  // Handle adding a new product
  const handleAddProduct = () => {
    // navigate("/product/add");
  };

  // Handle editing a product
  const handleEditProduct = (id: number) => {
    // navigate(`/product/edit/${id}`);
  };

  // Table columns
  const columns = [
    // {
    //   title: () => (
    //     <Checkbox
    //       indeterminate={
    //         selectedRowKeys.length > 0 &&
    //         selectedRowKeys.length < products.length
    //       }
    //       checked={selectedRowKeys.length === products.length}
    //       onChange={() => {
    //         if (selectedRowKeys.length === products.length) {
    //           setSelectedRowKeys([]);
    //         } else {
    //           setSelectedRowKeys(products.map((item) => item.id));
    //         }
    //       }}
    //     />
    //   ),
    //   dataIndex: "id",
    //   key: "checkbox",
    //   width: 40,
    //   render: (_: any, record: any) => (
    //     <Checkbox checked={selectedRowKeys.includes(record.id)} />
    //   ),
    // },
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: any) => (
        <div className="flex items-center">
          <Avatar
            src={record.image}
            shape="square"
            size={40}
            className="mr-3"
          />
          <div>
            <div className="font-medium">{text}</div>
            <div className="text-xs text-gray-500">
              {record.variants} Variants
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      sorter: (a: any, b: any) => a.stock - b.stock,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a: any, b: any) => {
        const aPrice = parseFloat(a.price.replace("$", ""));
        const bPrice = parseFloat(b.price.replace("$", ""));
        return aPrice - bPrice;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text: string) => <Tag color={getStatusColor(text)}>{text}</Tag>,
    },
    {
      title: "Added",
      dataIndex: "added",
      key: "added",
      sorter: (a: any, b: any) =>
        new Date(a.added).getTime() - new Date(b.added).getTime(),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <div className="flex gap-2">
          <Button
            type="text"
            size="small"
            icon={<EditOutlined />}
            onClick={() => handleEditProduct(record.id)}
          />
          <Button type="text" size="small" icon={<EyeOutlined />} />
          <Button type="text" size="small" icon={<DeleteOutlined />} />
        </div>
      ),
    },
  ];

  // Row selection config
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys: React.Key[]) => {
      setSelectedRowKeys(selectedKeys);
    },
  };

  return (
    <div className="product-page">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Product</h1>
          <div className="text-sm text-gray-500 flex items-center">
            <span className="hover:text-blue-500 cursor-pointer">
              Dashboard
            </span>
            <span className="mx-2">•</span>
            <span className="text-gray-800">Product List</span>
          </div>
        </div>
        <div className="flex mt-4 md:mt-0">
          <Button icon={<ExportOutlined />} className="mr-2">
            Export
          </Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAddProduct}
          >
            Add Product
          </Button>
        </div>
      </div>

      <Card
      //   bordered={false}
      >
        <div className="mb-4 flex flex-wrap border-b">
          <div
            className={`mr-6 pb-3 px-1 cursor-pointer ${
              activeTab === "all"
                ? "border-b-2 border-blue-500 text-blue-500 font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All Product
          </div>
          <div
            className={`mr-6 pb-3 px-1 cursor-pointer ${
              activeTab === "published"
                ? "border-b-2 border-blue-500 text-blue-500 font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("published")}
          >
            Published
          </div>
          <div
            className={`mr-6 pb-3 px-1 cursor-pointer ${
              activeTab === "lowStock"
                ? "border-b-2 border-blue-500 text-blue-500 font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("lowStock")}
          >
            Low Stock
          </div>
          <div
            className={`mr-6 pb-3 px-1 cursor-pointer ${
              activeTab === "draft"
                ? "border-b-2 border-blue-500 text-blue-500 font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("draft")}
          >
            Draft
          </div>
        </div>

        <div className="mb-4 flex flex-col md:flex-row justify-between gap-3">
          <div className="flex-1 md:max-w-md">
            <Input
              placeholder="Search product..."
              prefix={<SearchOutlined className="text-gray-400" />}
              className="rounded-md"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button icon={<FilterOutlined />} className="flex items-center">
              Filters
            </Button>
            <Select
              className="min-w-[180px]"
              placeholder="Select Date"
              allowClear
            >
              <Option value="today">Today</Option>
              <Option value="yesterday">Yesterday</Option>
              <Option value="thisWeek">This Week</Option>
              <Option value="lastWeek">Last Week</Option>
              <Option value="thisMonth">This Month</Option>
              <Option value="lastMonth">Last Month</Option>
            </Select>
            <Button>Edit Column</Button>
          </div>
        </div>

        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={products}
          rowKey="id"
          pagination={{
            total: 100,
            showTotal: (total) => `Showing 1-10 from ${total}`,
            showSizeChanger: false,
          }}
        />
      </Card>
    </div>
  );
};

export default ProductList;
