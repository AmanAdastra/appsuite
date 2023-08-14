"use client";
import dynamic from "next/dynamic";
const MapViewComponent = dynamic(
  () => import("@/components/MapView/MapViewComponent"),
  { ssr: false }
);
import LoginComponent from "@/components/Auth/LoginComponent";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  if (status == "loading") {
    return <LoadingSpinner />;
  }
  if (status == "unauthenticated") {
    return <LoginComponent />;
  }
  return (
    // Creating a landing page for the app
    <div>
      Landing page
    </div>

  )
}
