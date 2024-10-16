import { useState } from "react";
import { Outlet } from "react-router-dom";

import { currentPage, navItems } from "@/constants";
import { Sidebar } from "@/components";
import Header from "@/components/Header";

export const DashboardLayout = () => {
  const [pageTitle, setPageTitle] = useState(currentPage());
  const [sidebarStatus, setSidebarStatus] = useState(false);

  return (
    <div className="flex h-full shadow-md">
      <div>
        <Sidebar
          setPageTitle={setPageTitle}
          setSidebarStatus={setSidebarStatus}
          sidebarStatus={sidebarStatus}
          className="w-72"
          navItems={navItems}
        />
      </div>
      <div className="flex-1 px-4 sm-px-6 md:px-8 overflow-auto">
        <Header pageTitle={pageTitle} setSidebarStatus={setSidebarStatus} />
        <Outlet />
      </div>
    </div>
  );
};
