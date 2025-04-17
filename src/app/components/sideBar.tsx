"use client";
import React, { useState, useEffect } from "react";
import { Layout, Menu, Drawer } from "antd";
import { usePathname } from "next/navigation";
import {
  DashboardOutlined,
  ShoppingOutlined,
  AppstoreOutlined,
  UserOutlined,
  FileOutlined,
  MessageOutlined,
  CalendarOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import Link from "next/link";
// import { cn } from "@/lib/utils";

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const SideBar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Check if the screen is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setCollapsed(true);
      }
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, [setCollapsed]);

  const menuItems = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: <Link href="/">Dashboard</Link>,
    },
    {
      key: "e-commerce",
      icon: <ShoppingOutlined />,
      label: "E-Commerce",
      children: [
        {
          key: "product",
          label: <Link href="/product">Product</Link>,
        },
        {
          key: "categories",
          label: <Link href="/categories">Categories</Link>,
        },
        {
          key: "orders",
          label: <Link href="/orders">Orders</Link>,
        },
        {
          key: "customer",
          label: <Link href="/customer">Customer</Link>,
        },
      ],
    },
    {
      key: "project",
      icon: <AppstoreOutlined />,
      label: <Link href="/project">Project</Link>,
    },
    {
      key: "contact",
      icon: <UserOutlined />,
      label: <Link href="/contact">Contact</Link>,
    },
    {
      key: "file-manager",
      icon: <FileOutlined />,
      label: <Link href="/file-manager">File Manager</Link>,
    },
    {
      key: "chat",
      icon: <MessageOutlined />,
      label: <Link href="/chat">Chat</Link>,
    },
    {
      key: "calendar",
      icon: <CalendarOutlined />,
      label: <Link href="/calendar">Calendar</Link>,
    },
  ];

  // Helper function to get the current selected keys
  const getSelectedKeys = () => {
    if (pathname === "/") return ["dashboard"];
    if (pathname.includes("/product")) return ["product"];
    if (pathname.includes("/categories")) return ["categories"];
    if (pathname.includes("/orders")) return ["orders"];
    if (pathname.includes("/customer")) return ["customer"];
    if (pathname.includes("/project")) return ["project"];
    if (pathname.includes("/contact")) return ["contact"];
    if (pathname.includes("/file-manager")) return ["file-manager"];
    if (pathname.includes("/chat")) return ["chat"];
    if (pathname.includes("/calendar")) return ["calendar"];

    return [];
  };

  // Get open keys based on the current path
  const getOpenKeys = () => {
    if (
      pathname.includes("/product") ||
      pathname.includes("/categories") ||
      pathname.includes("/orders") ||
      pathname.includes("/customer")
    ) {
      return ["e-commerce"];
    }

    return [];
  };

  const sidebarContent = (
    <>
      <div className="flex items-center p-4 h-16">
        <div
          className={`flex items-center
            ${collapsed ? "justify-center" : "justify-start"}`}
        >
          <div className="flex items-center">
            <div className="rounded-md w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-400 to-cyan-400">
              <div className="text-white text-lg font-bold">M</div>
            </div>
            {!collapsed && (
              <span className="ml-2 text-lg font-semibold">Mytech</span>
            )}
          </div>
        </div>
        {isMobile && (
          <div
            className="absolute right-4 top-4 cursor-pointer"
            onClick={() => setMobileDrawerOpen(false)}
          >
            <MenuFoldOutlined />
          </div>
        )}
      </div>
      <Menu
        mode="inline"
        selectedKeys={getSelectedKeys()}
        defaultOpenKeys={getOpenKeys()}
        style={{ borderRight: 0 }}
        items={menuItems}
        className="h-full"
      />
    </>
  );

  // Mobile toggle button for sidebar
  const MobileToggle = () => (
    <div
      className="fixed z-40 left-4 top-4 md:hidden bg-white rounded-md p-2 shadow-md cursor-pointer"
      onClick={() => setMobileDrawerOpen(true)}
    >
      <MenuUnfoldOutlined />
    </div>
  );

  // Render mobile drawer or desktop sidebar based on screen size
  if (isMobile) {
    return (
      <>
        <MobileToggle />
        <Drawer
          placement="left"
          onClose={() => setMobileDrawerOpen(false)}
          open={mobileDrawerOpen}
          width={250}
          //   bodyStyle={{ padding: 0 }}
          //   headerStyle={{ display: "none" }}
        >
          {sidebarContent}
        </Drawer>
      </>
    );
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className="bg-white min-h-screen"
      width={220}
      collapsedWidth={80}
      style={{
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.05)",
        zIndex: 100,
        position: "fixed",
        height: "100%",
        transition: "all 0.2s",
      }}
    >
      {sidebarContent}
    </Sider>
  );
};

export default SideBar;
