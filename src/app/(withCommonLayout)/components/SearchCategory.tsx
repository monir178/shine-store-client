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

const SearchCategory = () => {
  return (
    <div className="mb-6">
      <div className="container mx-auto px-4">
        <h1 className="text-xl lg:text-3xl mb-4 font-bold  text-green-400">
          Filter by Category
        </h1>
        <div className=" text-white  grid grid-cols-2 lg:grid-cols-4 gap-3 w-full ">
          {categories.map((category, index) => (
            <Link key={index} href={`/products?category=${category.name}`}>
              <p className="bg-gray-600 px-3 py-1 rounded-xl">
                {category.name}
              </p>
            </Link>
          ))}
          <Link href="/products">
            <p className="bg-gray-600 px-3 py-1 rounded-xl">All Products</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchCategory;
