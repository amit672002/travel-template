import React from "react";
import Card from "./Card";
import destination1 from "../assets/images/img-9.jpg";
import destination2 from "../assets/images/img-2.jpg";
import destination3 from "../assets/images/img-3.jpg";
import destination4 from "../assets/images/img-4.jpg";
import destination5 from "../assets/images/img-8.jpg";

const Cards = () => {
  return (
    <div>
      <h1 className="text-center text-6xl text-gray-700 my-10 max-md:text-3xl">
        Check out these epic destinations
      </h1>
      <div className="flex flex-col items-center  w-90 mx-auto">
        <div>
          <ul className="mb-6 flex flex-wrap justify-center">
            <Card
              styles={`max-w-[430px] min-w-[430px]`}
              imageUrl={destination1}
              text={`Explore the hidden waterfall deep inside the Amazon jungle`}
              path={`#`}
            />
            <Card
              styles={`max-w-[430px] min-w-[430px]`}
              imageUrl={destination2}
              text={`Travel through the Islands of Bali in a Private Cruise`}
              path={`#`}
            />
          </ul>
          <ul className="mb-6 flex flex-wrap justify-center">
            <Card
              styles={`max-w-[330px] min-w-[330px] max-md:max-w-[430px] max-md:min-w-[430px]`}
              imageUrl={destination3}
              text={`Set Sail in the Atlantic Ocean visiting Uncharted Waters`}
              path={`#`}
            />
            <Card
              styles={`max-w-[330px] min-w-[330px] max-md:max-w-[430px] max-md:min-w-[430px]`}
              imageUrl={destination4}
              text={`Experience Football on Top of the Himilayan Mountains`}
              path={`#`}
            />
            <Card
              styles={`max-w-[330px] min-w-[330px] max-md:max-w-[430px] max-md:min-w-[430px]`}
              imageUrl={destination5}
              text={`Ride through the Sahara Desert on a guided camel tour`}
              path={`#`}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
