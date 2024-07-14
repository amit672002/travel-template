import React from "react";
import { Link } from "react-router-dom";

const Card = ({ text, imageUrl, path, styles }) => {
  return (
    <>
      <li className={`flex-1 m-4 rounded-lg ${styles}`}>
        <Link
          to={path}
          className="flex flex-col w-full shadow-custom drop-shadow-custom rounded-xl overflow-hidden"
        >
          <figure className="w-full relative pt-[67%] overflow-hidden">
            <img
              src={imageUrl}
              alt="Travel Image"
              className="absolute top-0 left-0 right-0 bottom-0 w-full max-w-full block h-full max-h-full object-cover transition-all duration-200 ease-linear hover:scale-110"
            />
          </figure>
          <div className="px-30 py-20 pb-30">
            <h5 className="text-gray-800 leading-6 text-xl px-4">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default Card;
