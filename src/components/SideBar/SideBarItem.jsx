import Link from "next/link";
import React from "react";

const SideBarItem = (props) => {



  return (
    <Link className="flex items-center justify-center xl:justify-start w-full px-2 pt-2 my-2 hover:cursor-pointer" href={props.title.toLowerCase()}>
      <div className="px-2">{props.component}</div>
      <div className="hidden xl:block font-sans text-center">{props.title}</div>
    </Link>
  );
};

export default SideBarItem;
