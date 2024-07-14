import React from "react";
import videoLink from "../assets/videos/video-1.mp4";
import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <div className="relative w-full h-[100vh] flex flex-col justify-center items-center overflow-hidden">
        <video
          className="w-full h-full absolute top-0 left-0 object-cover"
          src={videoLink}
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
          <h1 className="text-white text-[100px] sm:text-7xl md:text-8xl lg:text-8xl max-sm:text-6xl text-center leading-tight">
            Adventure Awaits
          </h1>
          <p className="text-white text-3xl text-center mb-8">
            What are you waiting for?
          </p>
          <div className="flex gap-4 max-sm:flex-col">
            <Button
              title={`GET STARTED`}
              btnStyle={`outline`}
              btnSize={`large`}
            />
            <Button
              title={`WATCH TRAILER`}
              btnStyle={`primary`}
              btnSize={`large`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
