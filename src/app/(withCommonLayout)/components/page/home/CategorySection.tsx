"use client";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

const categories = [
  { name: "Dishwashing Items", image: "/dishwashing-supplies.png" },
  { name: "Laundry Products", image: "/Laundry Products.jpg" },
  { name: "Toilet Cleaners", image: "/Toilet Cleaners.jpg" },
  { name: "Cleaning Accessories", image: "/Cleaning Accessories.jpg" },
  { name: "Napkins", image: "/Napkins.jpg" },
  { name: "Pest Control Products", image: "/Pest Control Products.png" },
];

const CategorySection = () => {
  return (
    <div className="my-14 lg:my-24">
      <div className="container mx-auto px-4">
        <h1 className="text-xl md:text-3xl mb-4 md:mb-8 font-bold uppercase tracking-wide lg:text-5xl text-center text-green-400">
          Shop by category
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={`/products?category=${category.name}`}>
              <Card className="h-[100px] md:h-[200px] relative hover:scale-105 transition-transform">
                <CardHeader className="absolute z-10 top-0 flex-col  p-4">
                  <h4 className="text-white  absolute top-0 right-0  bg-black bg-opacity-50 text-sm md:text-medium  w-full px-4 py-2">
                    {category.name}
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt={category.name}
                  className="z-0 w-full h-full object-cover"
                  src={category.image}
                />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
