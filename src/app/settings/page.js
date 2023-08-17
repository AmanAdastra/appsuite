"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import { signoutHandler } from '@/utils/utils';

const page = () => {
  const { data: session, status } = useSession();
  console.log("session", session);

  if (status == "loading") {
    return <LoadingSpinner />;
  }
  if (status == "unauthenticated") {
    signoutHandler();
  }
  return (
    <div>Settings Page</div>
  )
}

export default page