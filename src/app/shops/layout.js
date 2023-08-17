"use client"
import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar/SideBar";
import { useSession } from "next-auth/react";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { signoutHandler } from "@/utils/utils";
const ShopsLayout = ({ children }) => {

  const { data: session, status } = useSession();

  if (status === "loading"){
    return  <LoadingSpinner />;
  }


  if (status === "unauthenticated"){
    signoutHandler()
    return <LoadingSpinner />;
  }

  return (
    <div className="h-screen">
      <div className="mb-2">
        <NavBar />
      </div>
      <div className="grid grid-cols-12 h-[90%]">
        <div className="col-span-2 md:col-span-1 mx-1 overflow-y-auto shadow-lg shadow-gray-400 ">
          <SideBar />
        </div>
        <div className="col-span-10 md:col-span-11 mx-2 overflow-y-auto  shadow-lg shadow-gray-400">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ShopsLayout;
