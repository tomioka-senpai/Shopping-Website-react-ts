import React, { useState } from "react";
import "./Footer.css";

export const Footer = ({ name, discount }) => {
  //   const { discount }: any = props.data;
  console.log(discount);
  return (
    <>
      {/* <div>Footer</div> */}
      <div className="footer">
        <div className="name">Product Name: {name}</div>
        <div className="discount">Discounted Price is ${discount}</div>
      </div>
    </>
  );
};
