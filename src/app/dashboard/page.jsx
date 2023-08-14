"use client";
import React from "react";
import { useSession } from "next-auth/react";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { signoutHandler } from "@/utils/utils";

import dynamic from "next/dynamic";
const AreaChartComponent = dynamic(
  () => import("@/components/Charts/AreaChartComponent"),
  { ssr: false }
);
const SplinesChartComponent = dynamic(
  () => import("@/components/Charts/SplineChartComponent"),
  { ssr: false }
);

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status == "loading") {
    return <LoadingSpinner />;
  }
  if (status == "unauthenticated") {
    signoutHandler();
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" w-full  lg:w-1/2 py-5">
        <AreaChartComponent />
      </div>
      <div className=" w-full  lg:w-1/2 py-5">
        <SplinesChartComponent />
      </div>
    </div>
  );
};

export default Dashboard;
