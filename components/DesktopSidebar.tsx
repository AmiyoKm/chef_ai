"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {  Cpu, History, Home, MessageSquareCode,  } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
const items = [
  {
    title: "Home",
    url: "dashboard",
    icon: Home,
  },
  {
    title: "Chef AI",
    url: "chef-ai",
    icon: Cpu,
  },
  {
    title: "History",
    url: "history",
    icon: History,
  },
  {
    title: "Chat",
    url: "chat",
    icon: MessageSquareCode,
  },
];

const DesktopSidebar = () => {
  const pathName = usePathname();
  const currentUrl = pathName.split("/");

  return (
    <Sidebar className="dark:bg-gray-900 text-white h-full bg-gray-50 shadow-lg">
      <SidebarHeader className="p-6 flex justify-center items-center mb-8">
      <div className="w-max flex justify-center mx-auto">
        <Logo />
      </div>
      </SidebarHeader>
      <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
        <SidebarMenu className="gap-3">
          {items.map((item, i) => (
          <SidebarMenuItem
            key={i}
            className={`${
            currentUrl[1] === item.url
              ? "bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-md"
              : "dark:bg-gray-800 hover:bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-md bg-gray-100"
            } rounded-lg w-full h-12 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer`}
          >
            <SidebarMenuButton asChild className="h-full w-full flex gap-3">
            <Link href={`/${item.url}`} className="min-w-full flex items-center px-4">
              <item.icon
              size={24}
              className={`${
                currentUrl[1] !== item.url ? "stroke-gray-400 hover:stroke-white" : "stroke-white"
              } transition-colors duration-300`}
              />
              <span
              className={`${
                currentUrl[1] !== item.url
                ? "text-gray-900 text-base hover:text-white dark:text-white"
                : "text-white text-base"
              } transition-colors duration-300 ml-3`}
              >
              {item.title}
              </span>
            </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          ))}
        </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-6">
      <div className="text-center text-gray-500 text-sm">
        © 2025 Chef AI
      </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DesktopSidebar;
