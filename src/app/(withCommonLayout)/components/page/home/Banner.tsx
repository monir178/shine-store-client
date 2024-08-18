import React from "react";
import { Button } from "@nextui-org/react";
import HeroImages from "./HeroSection";
import ShineStoreText from "../../ui/ShineStoreText";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center bg-transparent p-5 sm:p-10 rounded-xl mt-4">
      {/* Texts */}
      <div className="text-center lg:text-left mb-5 lg:mb-0 w-full lg:w-1/2">
        <h1 className="text-4xl font-bold mb-3">
          <span className="text-5xl text-green-400">W</span>elcome to
          {/* <span className="text-green-400"> Shine Store</span> */}
          <ShineStoreText text="Shine Store" />
        </h1>
        <p className="text-lg mb-5 max-w-[60ch] mx-auto lg:mx-0">
          Discover a world of cleanliness and convenience at Shine Store. We
          offer a wide selection of{" "}
          <span className="text-green-400 text-xl font-semibold">
            premium cleaning supplies
          </span>{" "}
          to keep your space pristine. From eco-friendly solutions to
          cutting-edge tools, find everything you need for a sparkling home or
          office.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button className="bg-green-400 text-white px-8 py-2 rounded mr-2 text-lg">
            Shop Now
          </Button>
          <Button className="bg-gray-500 text-white px-8 py-2 rounded text-lg">
            Learn More
          </Button>
        </div>
      </div>

      {/* Images */}
      <div className="w-full lg:w-1/2 mb-5 lg:mb-0">
        <HeroImages />
      </div>
    </div>
  );
};

export default Banner;
