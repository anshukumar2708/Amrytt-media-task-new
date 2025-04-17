"use client";
// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { useEffect, useState } from "react";
import { Layout } from "antd";
import Sidebar from "./components/sideBar";
import Header from "./components/header";

const { Content } = Layout;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
          <Layout
            style={{
              marginLeft: isMobile ? 0 : collapsed ? 80 : 220,
              transition: "margin-left 0.2s",
            }}
          >
            <Header />
            <Content className="bg-gray-50 p-4 md:p-6">{children}</Content>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
