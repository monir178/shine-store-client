// PriceRange.tsx
"use client";
import React, { useState } from "react";
import { Slider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface PriceRangeProps {
  onChange?: (priceLow: number, priceHigh: number) => void;
}

const PriceRange: React.FC<PriceRangeProps> = ({ onChange }) => {
  const router = useRouter();

  const [priceRange, setPriceRange] = useState<number[]>([2, 5]);

  const handleChange = (value: number | number[]) => {
    const range = Array.isArray(value) ? value : [value];
    setPriceRange(range);
    // Call onChange with priceLow and priceHigh
    onChange && onChange(range[0], range[1]);
    router.push(
      `/products?priceLow=${priceRange[0]}&priceHigh=${priceRange[1]}`
    );
  };

  const handleClick = () => {
    // Push the new priceRange values to the router
    router.push(
      `/products?priceLow=${priceRange[0]}&priceHigh=${priceRange[1]}`
    );
  };

  return (
    <Slider
      label="Price Range"
      step={0.3}
      color="success"
      minValue={0}
      maxValue={30}
      value={priceRange}
      onChange={handleChange}
      onClick={handleClick}
      formatOptions={{ style: "currency", currency: "USD" }}
      className="max-w-sm my-5 "
    />
  );
};

export default PriceRange;
