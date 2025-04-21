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
import { Pagination } from "../fuctionality/pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  setFilterStatus,
  setSearchTerm,
} from "@/app/redux/productSlice";
import { selectFilteredProducts } from "@/app/redux/action";

export type ProductStatus = "All Product" | "Published" | "Low Stock" | "Draft";

interface IProduct {
  id: number;
  name: string;
  variants: number;
  image: string;
  sku: string;
  category: string;
  stock: number;
  price: string;
  status: ProductStatus;
  added: string;
}

const ProductList: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [activeTab, setActiveTab] = useState<string>("All Product");
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 100;

  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
            <Link href={`/edit-product/${record?.id}`}>
              <Button type="text" size="small" icon={<EditOutlined />} />
            </Link>
          </Tooltip>
          <Tooltip title="View" color="#2086BF">
            <Button type="text" size="small" icon={<EyeOutlined />} />
          </Tooltip>
          <Tooltip title="Delete" color="#2086BF">
            <Button
              type="text"
              size="small"
              onClick={() => handleDelete(record?.id)}
              icon={<DeleteOutlined />}
            />
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

  const productTypeData: { id: number; title: ProductStatus }[] = [
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
            <Button type="primary" icon={<PlusOutlined />}>
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
                onClick={() => {
                  setActiveTab(item?.title);
                  dispatch(setFilterStatus(item?.title));
                }}
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
              onChange={handleSearch}
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
            pagination={false}
            rowKey="id"
          />
          {/* Pagination component */}
          <div className="w-full min-w-[600px]">
            <Pagination
              currentPage={currentPage}
              totalItems={totalItems}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductList;
