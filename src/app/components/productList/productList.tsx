"use client";
import React, { useState } from "react";
import { Card, Table, Button, Input, Avatar, Tag, Tooltip } from "antd";
import {
  SearchOutlined,
  EditOutlined,
  EyeOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import Link from "next/link";
import RightArrow from "../all-icons/right-arrow";
import ExportIcon from "../all-icons/export-icon";
import EditColumn from "../all-icons/edit-column";
import CalenderIcon from "../all-icons/calender-icon";
import FilterIcon from "../all-icons/filter-icon";

interface IProduct {
  id: number;
  name: string;
  variants: number;
  image: string;
  sku: string;
  category: string;
  stock: number;
  price: string;
  status: string;
  added: string;
}

const ProductList: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [activeTab, setActiveTab] = useState<string>("All Product");

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Handmade Pouch",
      variants: 3,
      image: "",
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
      image: "",
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
      image: "",
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
      image: "",
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
      image: "",
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
      image: "",
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
      image: "",
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
      image: "",
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
      image: "",
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
      image: "",
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

  // Table columns
  const columns: ColumnsType<IProduct> = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: IProduct) => (
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
      sorter: (a, b) => a.stock - b.stock,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) =>
        parseFloat(a.price.replace("$", "")) -
        parseFloat(b.price.replace("$", "")),
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
      sorter: (a, b) =>
        new Date(a.added).getTime() - new Date(b.added).getTime(),
    },
    {
      title: "Action",
      key: "action",
      render: (_: IProduct, record: IProduct) => (
        <div className="flex gap-2">
          <Tooltip title="Edit" color="#2086BF">
            <Link href={`/edit-product/:${record?.id}`}>
              <Button type="text" size="small" icon={<EditOutlined />} />
            </Link>
          </Tooltip>
          <Tooltip title="View" color="#2086BF">
            <Button type="text" size="small" icon={<EyeOutlined />} />
          </Tooltip>
          <Tooltip title="Delete" color="#2086BF">
            <Button type="text" size="small" icon={<DeleteOutlined />} />
          </Tooltip>
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

  const productTypeData = [
    {
      id: 1,
      title: "All Product",
    },
    {
      id: 2,
      title: "Published",
    },
    {
      id: 3,
      title: "Low Stock",
    },
    {
      id: 4,
      title: "Draft",
    },
  ];

  return (
    <div className="product-page">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Product</h1>
          <div className="text-sm text-gray-500 flex items-center">
            <Link
              href="/"
              className="hover:text-blue-500 cursor-pointer text-[#2086BF]"
            >
              Dashboard
            </Link>
            <span className="mx-1">
              <RightArrow width={10} height={10} />
            </span>
            <span className="text-gray-800">Product List</span>
          </div>
        </div>
        <div className="flex mt-4 md:mt-0">
          <Button icon={<ExportIcon />} className="mr-2">
            Export
          </Button>
          <Link href="/add-product">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              // onClick={handleAddProduct}
            >
              Add Product
            </Button>
          </Link>
        </div>
      </div>

      {/* filter select-date edit-column search */}
      <div className="mb-4 flex flex-col xl:flex-row xl:justify-between xl:items-center max-xl:gap-3">
        <div className="size-max flex justify-start items-center gap-2 border border-[#E0E2E7] px-2 py-[4px] rounded-md">
          {productTypeData?.map((item, index) => {
            return (
              <p
                className={`cursor-pointer text-sm hover:text-[#2086BF] hover:bg-[#EAF8FF] ${
                  activeTab === item?.title && "text-[#2086BF] bg-[#EAF8FF]"
                } px-2 py-[1px] rounded-sm`}
                key={index}
                onClick={() => setActiveTab(item?.title)}
              >
                {item?.title}
              </p>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="flex-1 md:max-w-md min-w-24">
            <Input
              placeholder="Search product..."
              prefix={<SearchOutlined className="text-gray-400" />}
              className="rounded-md"
            />
          </div>
          <Button size="middle">
            <CalenderIcon width={16} height={16} />
            Select Date
          </Button>
          <Button size="middle" className="ml-2">
            <FilterIcon />
            Filters
          </Button>
          <Button size="middle">
            <EditColumn /> Edit Column
          </Button>
        </div>
      </div>

      <Card>
        <div className="w-full overflow-x-auto">
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={products}
            rowKey="id"
            // pagination={{
            //   total: 100,
            //   showTotal: (total) => `Showing 1-10 from ${total}`,
            //   showSizeChanger: false,
            // }}
          />
        </div>
      </Card>
    </div>
  );
};

export default ProductList;
