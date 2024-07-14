import React from "react";
import bgImage from "../assets/images/img-2.jpg";

const Services = () => {
  return (
    <div
      className="mt-[55px] h-[92.5vh] bg-cover bg-center bg-no-repeat text-white text-6xl flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      Services
    </div>
  );
};

export default Services;
