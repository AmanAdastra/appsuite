"use client"

import React from 'react'
import NavBar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar/SideBar";

const RootLayoutDesign = ({children}) => {
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
  )
}

export default RootLayoutDesign