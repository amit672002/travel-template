import React from "react";
import bgImage from "../assets/images/img-1.jpg";

const Products = () => {
  return (
    <div
      className="mt-[55px] h-[92.5vh] bg-cover bg-center bg-no-repeat text-white text-6xl flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      Products
    </div>
  );
};

export default Products;
