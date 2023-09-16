// import React from 'react'

import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div>
        <p className="home-heading">Our products</p>
      </div>
      <ProductCard />
    </>
  );
};
