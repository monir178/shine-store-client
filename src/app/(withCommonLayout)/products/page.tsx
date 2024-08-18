// src/app/products/[category]/page.tsx
import { IProduct } from "@/app/types/product";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import Link from "next/link";

import React from "react";
import SearchCategory from "../components/SearchCategory";
import PriceRange from "../components/PriceRange";
import RatingsRange from "../components/RatingsRange";

const AllProducts = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // console.log("Search =>", searchParams);

  const category = searchParams?.category || "";

  const priceLow = searchParams?.priceLow || "";
  const priceHigh = searchParams?.priceHigh || "";
  const ratingsLow = searchParams?.ratingsLow || "";
  const ratingsHigh = searchParams?.ratingsHigh || "";
  const res = await fetch(
    `http://localhost:5000/products?category=${category}&priceLow=${priceLow}&priceHigh=${priceHigh}&ratingsLow=${ratingsLow}&ratingsHigh=${ratingsHigh}`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const products = await res.json();
  // console.log(products);

  return (
    <div className="mx-2 mt-8">
      <SearchCategory />
      <PriceRange />
      <RatingsRange />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {products.map((product: IProduct) => (
          <Card key={product._id} className="py-4 w-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className=" uppercase font-bold">{product.title}</p>
              <small className="text-green-400 font-semibold text-lg">
                ${product.price}
              </small>
              <p className="font-semibold ">
                <span className="text-blue-500">Brand:</span> {product.brand}
              </p>
            </CardHeader>
            <CardBody className="flex justify-center items-center py-2">
              <Image
                alt={product.title}
                className="h-[200px] lg:h-[300px]  w-[200px] md:w[300px] lg:w-[400px] rounded-xl"
                src={product.img}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <Link href={`/products/${product._id}`}>
                    <Button className="">Details</Button>
                  </Link>
                </div>
                <Button
                  className="text-tiny"
                  color="primary"
                  radius="full"
                  size="sm">
                  Buy Now
                </Button>
              </CardFooter>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
