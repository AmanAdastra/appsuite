"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { signoutHandler } from "@/utils/utils";
import Link from "next/link";

const NavBar = () => {
  const { data: session, status } = useSession();

  if (status === "loading" || status === "unauthenticated") return null;

  return (
    <div className="navbar bg-[#3796e9]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          
        </div>
        <Link href="/dashboard" className="btn btn-ghost normal-case text-xl text-white" >
          App Suite
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex text-white">
        
      </div>
      <div className="navbar-end">
        <a className="btn" onClick={signoutHandler}>
          Logout
        </a>
      </div>
    </div>

  );
};

export default NavBar;
