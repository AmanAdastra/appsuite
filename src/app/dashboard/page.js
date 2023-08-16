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
    <div className="flex items-stretch flex-row w-full">
      <div className="p-2 w-1/2">
        <AreaChartComponent />
      </div>
      <div className="p-2 w-1/2">
        <SplinesChartComponent />
      </div>
    </div>
  );
};

export default Dashboard;
