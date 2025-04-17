import React from "react";
import { Layout, Input, Badge, Avatar, Dropdown } from "antd";
import {
  BellOutlined,
  MessageOutlined,
  SearchOutlined,
  DownOutlined,
} from "@ant-design/icons";

const { Header: AntHeader } = Layout;

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = () => {
  const userMenuItems = [
    {
      key: "1",
      label: "Profile",
    },
    {
      key: "2",
      label: "Settings",
    },
    {
      key: "3",
      label: "Logout",
    },
  ];

  return (
    <AntHeader
      className="bg-white p-0 h-16 flex items-center justify-between shadow-sm z-10"
      style={{
        paddingLeft: 16,
        paddingRight: 16,
        position: "sticky",
        top: 0,
        width: "100%",
      }}
    >
      <div className="flex items-center">
        <div className="md:w-64 w-full mr-4 ml-8 md:ml-0">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined className="text-gray-400" />}
            className="rounded-md border border-gray-200"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Badge count={2} size="small">
          <div className="cursor-pointer text-gray-600 rounded-full bg-gray-100 w-9 h-9 flex items-center justify-center">
            <BellOutlined style={{ fontSize: 16 }} />
          </div>
        </Badge>
        <Badge count={5} size="small" className="ml-3">
          <div className="cursor-pointer text-gray-600 rounded-full bg-gray-100 w-9 h-9 flex items-center justify-center">
            <MessageOutlined style={{ fontSize: 16 }} />
          </div>
        </Badge>
        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
          <div className="flex items-center ml-4 cursor-pointer">
            <Avatar className="bg-gray-200" size={36}>
              JP
            </Avatar>
            <div className="ml-2 hidden md:block">
              <div className="text-sm font-medium">Jenil Patel</div>
              <div className="text-xs text-gray-500">Manager</div>
            </div>
            <DownOutlined className="ml-1 text-gray-400 text-xs" />
          </div>
        </Dropdown>
      </div>
    </AntHeader>
  );
};

export default Header;
