import React from "react";
import { Link } from "react-router-dom";

export const Collection = () => {
  const productArr = new Array(6).fill("");

  return (
    <>
      <div>Collection Page</div>
      <ul>
        {productArr.map((product, index) => {
          return (
            <li key={index}>
              <Link to={`/products/${index}`}>{index}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
