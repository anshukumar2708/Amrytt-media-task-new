import React from "react";
import { Layout, Input, Badge, Avatar, Dropdown } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import MsgIcon from "./all-icons/msg-icon";
import NotificationIcon from "./all-icons/notification-icon";
import CalenderIcon from "./all-icons/calender-icon";

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
      <div className="flex justify-start items-center">
        <div className="md:w-64 w-full mr-4 ml-8 md:ml-0">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined className="text-gray-400" />}
            className="rounded-md border-none outline-none"
          />
        </div>
      </div>
      <div className="flex justify-center items-center sm:gap-8 gap-5">
        <CalenderIcon />
        <Badge count={2} color="#2BB2FE" style={{ borderRadius: 4 }}>
          <NotificationIcon />
        </Badge>
        <Badge count={5} color="#2BB2FE" style={{ borderRadius: 4 }}>
          <MsgIcon />
        </Badge>
        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
          <div className="flex items-center cursor-pointer">
            <div className="relative inline-block">
              <Avatar className="bg-gray-200" size={35}>
                JP
              </Avatar>
              <span className="absolute bottom-3 right-0 w-[14px] h-[14px] rounded-full bg-white flex justify-center items-center">
                <span className="block w-[10px] h-[10px] rounded-full bg-[#22CAAD]"></span>
              </span>
            </div>
            <div className="ml-2 hidden sm:block">
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
