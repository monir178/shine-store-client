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

const FlashSaleSection = async () => {
  const res = await fetch("http://localhost:5000/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();

  // Sort flash sale products based on creation time
  const sortedProducts = products
    .sort((a: IProduct, b: IProduct) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    })
    .slice(2, 6); // Get top 6 products

  console.log(sortedProducts);

  return (
    <div className="mx-2 mt-8">
      <h1 className="text-xl md:text-3xl mb-4 md:mb-8 font-bold uppercase tracking-wide lg:text-5xl text-center text-green-400">
        Flash Sale
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {sortedProducts.map((product: IProduct) => (
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
                  <Button className="">Details</Button>
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
      <div className="flex justify-center mt-6">
        <Link href="/flash-sale">
          <Button size="lg" className="font-bold bg-green-400">
            See All Flash Sale Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FlashSaleSection;