import React from "react";
import { MoreOutlined } from "@ant-design/icons";

interface CardsLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const CardsLayout = ({
  title,
  subtitle,
  children,
}: Readonly<CardsLayoutProps>) => {
  return (
    <div className="bg-white rounded-md shadow-sm p-4 h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <MoreOutlined />
        </button>
      </div>
      {children}
    </div>
  );
};

export default CardsLayout;
