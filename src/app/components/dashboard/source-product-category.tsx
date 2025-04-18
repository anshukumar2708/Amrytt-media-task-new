import React from "react";
import { Row, Col, Avatar, Progress } from "antd";
import CardsLayout from "../common/cards-layout";
import type { ProgressProps } from "antd";
import SmartphoneIcon from "../all-icons/smartphone-icon";
import TabletIcon from "../all-icons/tablet-icon";
import { EarphoneIcon } from "../all-icons/earphone-icon";
import LaptopIcon from "../all-icons/laptop-icon";
import MouseIcon from "../all-icons/mouse-icon";
import UsbIcon from "../all-icons/usb-icon";
import CameraIcon from "../all-icons/camera-icon";

const SourceProductCategory = () => {
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
      image: "",
    },
    {
      name: "Audio Tech Earphone",
      category: "Earphone",
      price: "$908",
      image: "",
    },
    {
      name: "Sams S14 Pro",
      category: "Tablet",
      price: "$900",
      image: "",
    },
    {
      name: "Sams S14 Pro",
      category: "Tablet",
      price: "$900",
      image: "",
    },
  ];

  // Sample data for top categories
  const topCategories = [
    {
      name: "Smartphone",
      value: 1509,
      growth: "+18%",
      color: "#1A9882",
      bg: "#EAF8FF",
      icon: <SmartphoneIcon />,
    },
    {
      name: "Tablet",
      value: 1460,
      growth: "-6%",
      color: "#EB3D4D",
      bg: "#FFF0EA",
      icon: <TabletIcon />,
    },
    {
      name: "Earphone",
      value: 1229,
      growth: "0%",
      bg: "#E9FAF7",
      icon: <EarphoneIcon />,
    },
    {
      name: "Laptop & PC",
      value: 982,
      growth: "+18%",
      color: "#22CAAD",
      bg: "#FEECEE",
      icon: <LaptopIcon />,
    },
    {
      name: "Mouse",
      value: 791,
      growth: "-25%",
      color: "#EB3D4D",
      bg: "#EAF8FF",
      icon: <MouseIcon />,
    },
    {
      name: "Hardisk & USB Drive",
      value: 679,
      growth: "+11%",
      color: "#F9C80E",
      bg: "#FFFAE7",
      icon: <UsbIcon />,
    },
    {
      name: "Camera",
      value: 679,
      growth: "+11%",
      color: "#030304",
      bg: "#F0F1F3",
      icon: <CameraIcon />,
    },
  ];

  const twoColors: ProgressProps["strokeColor"] = {
    "0%": "#108ee9",
    "100%": "#87d068",
  };

  return (
    <Row gutter={[16, 16]} className="mb-6">
      {/* Sale Source Data======== */}
      <Col xs={24} lg={8}>
        <CardsLayout title="Sales Source" subtitle="">
          <div className="text-center relative mb-4">
            <div className="relative w-[180px] h-[180px] mx-auto">
              <Progress
                type="circle"
                percent={90}
                strokeColor={twoColors}
                format={() => null}
                size={180}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
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
        </CardsLayout>
      </Col>
      {/* Top Product Data======== */}
      <Col xs={24} lg={8}>
        <CardsLayout title="Top Product" subtitle="Top Product in This Month">
          <div className="space-y-4">
            {topProducts?.map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar
                    src={product.image}
                    shape="square"
                    size={35}
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
        </CardsLayout>
      </Col>
      <Col xs={24} lg={8}>
        <CardsLayout title="Top Category" subtitle="Top Category in This Month">
          <div className="space-y-3">
            {topCategories?.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-8 h-8 rounded-full mr-3 flex items-center justify-center text-white"
                    style={{ backgroundColor: category?.bg }}
                  >
                    <span className="text-xs">{category?.icon}</span>
                  </div>
                  <div className="font-medium">{category?.name}</div>
                </div>
                <div className="flex items-center">
                  <div className="font-medium text-xs mr-2">
                    {category?.value}
                  </div>
                  <div
                    style={{
                      backgroundColor: category?.bg,
                      color: category?.color,
                    }}
                    className={`text-[10px] p-0.5 rounded-sm`}
                  >
                    {category?.growth}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardsLayout>
      </Col>
    </Row>
  );
};
export default SourceProductCategory;
