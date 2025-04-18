import { ArrowUpOutlined, MoreOutlined } from "@ant-design/icons";
import { Button, Card, Col, Progress, Row } from "antd";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartRow = () => {
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

  return (
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
              You succeed earn <span className="font-medium">$240</span> today,
              it&apos;s higher than yesterday
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
                  {value} <ArrowUpOutlined className="text-green-500 text-xs" />
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
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
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
  );
};

export default ChartRow;
