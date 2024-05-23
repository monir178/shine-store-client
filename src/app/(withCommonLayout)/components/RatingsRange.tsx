// PriceRange.tsx
"use client";
import React, { useState } from "react";
import { Slider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface IRatingsRangeProps {
  onChange?: (ratingsLow: number, ratingsHigh: number) => void;
}

const RatingsRange: React.FC<IRatingsRangeProps> = ({ onChange }) => {
  const router = useRouter();

  const [ratingsRange, setRatingsRange] = useState<number[]>([2, 5]);

  const handleChange = (value: number | number[]) => {
    const range = Array.isArray(value) ? value : [value];
    setRatingsRange(range);
    // Call onChange with ratingsLow and ratingsHigh
    onChange && onChange(range[0], range[1]);
    router.push(
      `/products?ratingsLow=${ratingsRange[0]}&ratingsHigh=${ratingsRange[1]}`
    );
  };

  const handleClick = () => {
    // Push the new priceRange values to the router
    router.push(
      `/products?ratingsLow=${ratingsRange[0]}&ratingsHigh=${ratingsRange[1]}`
    );
  };

  return (
    <Slider
      label="Filter By Ratings Range"
      step={0.3}
      color="success"
      minValue={0}
      maxValue={5}
      value={ratingsRange}
      onChange={handleChange}
      onClick={handleClick}
      formatOptions={{ style: "decimal" }}
      className="max-w-sm mb-5 "
    />
  );
};

export default RatingsRange;
