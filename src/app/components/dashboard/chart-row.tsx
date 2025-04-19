import { useEffect, useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// import SemiCircleProgressBar from "react-progressbar-semicircle";
import CardsLayout from "../common/cards-layout";
import { SemiCircleProgress } from "../fuctionality/sem-circle-graph";

type RechartsMouseEvent = {
  isTooltipActive?: boolean;
  activeTooltipIndex?: number;
};

const ChartRow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const revenueData = [
    { name: "Jan", revenue: 100, sales: 240 },
    { name: "Feb", revenue: 200, sales: 320 },
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

  const handleMouseMove = (state: RechartsMouseEvent) => {
    if (state.isTooltipActive && typeof state.activeTooltipIndex === "number") {
      setActiveIndex(state.activeTooltipIndex);
    }
  };

  useEffect(() => {
    setActiveIndex(revenueData?.length - 1);
  }, [revenueData.length]);

  return (
    <Row gutter={[16, 16]} className="mb-6">
      <Col xs={24} lg={8}>
        <CardsLayout title="Target" subtitle="Revenue Target">
          <div className="text-center relative mb-2 flex flex-col justify-center items-center">
            <div className="relative w-fit">
              {/* <SemiCircleProgressBar
                percentage={75.55}
                showPercentValue={false}
                stroke="#2086BF"
                background="#f3f4f6"
                diameter={200}
                strokeWidth={10}
                strokeLinecap="round"
              /> */}
              <SemiCircleProgress percentage={75.55} />
              <div className="absolute inset-0 flex flex-col items-center justify-center mt-8">
                <span className="text-2xl font-bold text-black">75.75%</span>
                <span className="text-[10px] text-[#1A9882] bg-[#E9FAF7] p-0.5 rounded-sm">
                  +10%
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-500 mt-2">
              You succeed earn{" "}
              <span className="font-medium text-black">$240</span> today,
              it&apos;s higher than yesterday
            </div>
          </div>
          <div className="grid grid-cols-3 mt-4 pt-4">
            {[
              { label: "Target", value: "$20k" },
              { label: "Revenue", value: "$16k" },
              { label: "Today", value: "$1.5k" },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-xs text-gray-500">{label}</div>
                <div className="font-medium">
                  {value} <ArrowUpOutlined className="text-green-500 text-xs" />
                </div>
              </div>
            ))}
          </div>
        </CardsLayout>
      </Col>

      <Col xs={24} lg={16}>
        <div className="bg-white rounded-md shadow-sm p-4 h-full">
          <div className="flex justify-between items-start mb-4">
            <div className="w-full">
              <h2 className="text-lg font-semibold">Statistic</h2>
              <div className="w-full flex justify-between items-center">
                <p className="text-sm text-gray-500">Revenue and Sales</p>
                <div className="flex justify-start">
                  <div className="flex items-center mr-4">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mr-1"></div>
                    <span className="text-xs">Revenue</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-600 mr-1"></div>
                    <span className="text-xs">Sales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={revenueData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                onMouseMove={handleMouseMove}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip
                  active={true}
                  payload={[revenueData[activeIndex]]}
                  label={revenueData[activeIndex]?.name}
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
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563EB"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                  isAnimationActive={false}
                />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#F97316"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ChartRow;
