import React from "react";

import { Button, Image } from "@nextui-org/react";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between gap-6 items-center bg-transparent p-5 sm:p-10 rounded-xl mt-4">
      <div className="text-center sm:text-left mb-5 sm:mb-0 w-full md:w-1/2">
        <h1 className="text-4xl font-bold mb-3">
          <span className="text-5xl text-green-400">W</span>elcome to
          <span className="text-green-400"> Shine Store</span>
        </h1>
        <p className="text-lg mb-5 max-w-[60ch]">
          Discover a world of cleanliness and convenience at Shine Store. We
          offer a wide selection of{" "}
          <span className="text-green-400 text-xl font-semibold">
            premium cleaning supplies
          </span>{" "}
          to keep your space pristine. From eco-friendly solutions to
          cutting-edge tools, find everything you need for a sparkling home or
          office.
        </p>
        <div className="flex justify-center sm:justify-start ">
          <Button className="bg-green-400 text-white px-8 py-2 rounded mr-2 text-lg">
            Shop Now
          </Button>
          <Button className="bg-gray-500 text-white px-8 py-2 rounded text-lg">
            Learn More
          </Button>
        </div>
      </div>
      <div className="w-full sm:w-1/2 flex justify-center">
        <div className="w-full h-64 sm:h-auto relative">
          <Image
            src="/banner1.jpg"
            alt="a women with cleaning supplies"
            isBlurred
            isZoomed
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
