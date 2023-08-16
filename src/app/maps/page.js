"use client";
import React from 'react'
import dynamic from "next/dynamic";
const MapViewComponent = dynamic(
  () => import("@/components/MapView/MapViewComponent"),
  { ssr: false }
);

const page = () => {
  return (
    <div >
        <MapViewComponent />
    </div>
  )
}

export default page