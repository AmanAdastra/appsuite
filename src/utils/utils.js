import { signOut } from "next-auth/react";

const signoutHandler = () => {
  signOut({ callbackUrl: "/" });
};

export { signoutHandler };
