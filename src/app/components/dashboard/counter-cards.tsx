import { Card, Col, Row } from "antd";
import React from "react";
import TotalIcon from "../all-icons/total-icon";
import ProgressIcon from "../all-icons/progress-icon";
import FinishedIcon from "../all-icons/finished-icon";
import { UnFinishedIcon } from "../all-icons/un-finished-icon";
import PercentArrowIcon from "../all-icons/percent-arrow-icon";

// Create an array of card data
const cardData = [
  {
    title: "Total Project",
    value: "6,784",
    percentage: "10%",
    info: "+$150 today",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    icon: <TotalIcon />,
  },
  {
    title: "In Progress",
    value: "1,920",
    percentage: "10%",
    info: "+$150 today",
    bgColor: "bg-orange-100",
    textColor: "text-orange-600",
    icon: <ProgressIcon />,
  },
  {
    title: "Finished",
    value: "4,412",
    percentage: "10%",
    info: "+$150 today",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    icon: <FinishedIcon />,
  },
  {
    title: "Unfinished",
    value: "329",
    percentage: "10%",
    info: "+$150 today",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
    icon: <UnFinishedIcon />,
  },
];

const CounterCards = () => {
  return (
    <Row gutter={[16, 16]} className="mb-6">
      {cardData?.map((item, index) => (
        <Col xs={24} sm={12} lg={6} key={index}>
          <Card className="h-full">
            <div className="flex items-center mb-2">
              <h3 className="text-base font-medium text-gray-600 m-0">
                {item?.title}
              </h3>
              <div
                className={`ml-auto p-2 rounded-md ${item?.bgColor} ${item?.textColor}`}
              >
                {item?.icon}
              </div>
            </div>
            <h2 className="text-3xl font-semibold mb-2">{item?.value}</h2>
            <div className="flex items-center text-sm">
              <span className="text-green-500 mr-1">{item?.percentage}</span>
              <PercentArrowIcon />
              <span className="text-gray-500 ml-1">{item?.info}</span>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CounterCards;
