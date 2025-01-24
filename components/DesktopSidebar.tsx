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
import { Brain, Cpu, History, Home, MessageSquareCode, Settings2, User } from "lucide-react";
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
    <Sidebar>
      <SidebarHeader className="p-2 flex justify-center items-center min-w-max mb-4">
        <div className="w-max flex justify-center mx-auto">
          <Logo />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {items.map((item, i) => (
                <SidebarMenuItem
                  key={i}
                  className={`${
                    currentUrl[1] === item.url
                      ? "bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-lg"
                      : "bg-muted-foreground/15 hover:bg-muted-foreground/25"
                  } rounded-xl w-full h-12 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer`}
                >
                  <SidebarMenuButton
                    asChild
                    className="h-full w-full flex gap-6"
                  >
                    <Link href={`/${item.url}`} className="min-w-full">
                      <div className="flex items-center">
                        <item.icon
                          size={25}
                          className={`${
                            currentUrl[1] !== item.url
                              ? "stroke-black/50"
                              : "stroke-white"
                          } transition-colors duration-300`}
                        />
                      </div>
                      <span
                        className={`${
                          currentUrl[1] !== item.url
                            ? "text-black text-xl"
                            : "text-white text-xl"
                        } transition-colors duration-300`}
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
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
};

export default DesktopSidebar;
