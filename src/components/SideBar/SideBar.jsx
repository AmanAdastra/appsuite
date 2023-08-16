"use client";
import React from "react";
import SideBarItem from "./SideBarItem";
import { MdDashboardCustomize } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { PiUsersFourFill } from "react-icons/pi";
import { MdAddBusiness } from "react-icons/md";
import {IoSettings} from "react-icons/io5";
import { useSession } from "next-auth/react";

const SideBar = () => {
  const { data: session, status } = useSession();

  if (status === "loading" || status === "unauthenticated") return null;
  return (
    <div className="flex flex-col pt-2 h-full">
      <SideBarItem
        component={<MdDashboardCustomize className="text-xl text-[#3796e9]" />}
        title="Dashboard"
      />
      <SideBarItem
        component={<PiUsersFourFill className="text-xl text-[#3796e9]" />}
        title="Users"
      />
      <SideBarItem
        component={<MdAddBusiness className="text-xl text-[#3796e9]" />}
        title="Shops"
      />
      <SideBarItem
        component={<SiGooglemaps className="text-xl text-[#3796e9]" />}
        title="Maps"
      />
      <SideBarItem
        component={<IoSettings className="text-xl text-[#3796e9]" />}
        title="Settings"
      />
    </div>
  );
};

export default SideBar;
