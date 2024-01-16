import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Breadcrumb = () => {
  const { pathname } = useLocation();

  const arr = pathname.split("/").filter((seg) => seg);

  console.log(arr);

  let path = "";

  return (
    <div className="bcrumb">
      {arr.length > 0 && <Link to={"/"}>Home</Link>}
      {arr.map((name, index) => {
        const isLast = index === arr.length - 1;

        path += name;

        return isLast ? (
          <span> / {name} </span>
        ) : (
          <span key={path}>
            <Link to={path}> / {name}</Link>
          </span>
        );
      })}
    </div>
  );
};
