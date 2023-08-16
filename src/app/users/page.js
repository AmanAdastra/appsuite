"use client";
import React from "react";
import { useSession } from "next-auth/react";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { signoutHandler } from "@/utils/utils";



const Users = () => {
  const { data: session, status } = useSession();

  if (status == "loading") {
    return <LoadingSpinner />;
  }
  if (status == "unauthenticated") {
    signoutHandler();
  }

  return (
    <div className="flex items-stretch flex-row w-full">
      Users
    </div>
  );
};

export default Users;
