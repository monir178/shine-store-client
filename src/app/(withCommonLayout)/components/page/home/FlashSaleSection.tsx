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
  const res = await fetch("https://shin-server.vercel.app/flash-sale", {
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

  // console.log(sortedProducts);

  return (
    <div className="mx-4 mt-14 lg:mt-24">
      <h1 className="text-xl md:text-3xl mb-4 md:mb-8 font-bold uppercase tracking-wide lg:text-5xl text-center text-green-400">
        Flash Sale
      </h1>
      <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 ">
        {sortedProducts.map((product: IProduct) => (
          <Card key={product._id} className="py-4 relative">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start font-normal text-sm">
              <p className="  ">{product.title}</p>
              <small className="text-green-400 font-semibold text-lg">
                ${product.price}
              </small>
              <p className="font-semibold ">
                <span className="text-blue-500">Brand:</span> {product.brand}
              </p>
            </CardHeader>
            <CardBody className="flex justify-center items-center py-2 ">
              <Image
                isZoomed
                alt={product.title}
                className="h-[100px] md:h-[170px] lg:h-[250px]  w-[100px] md:w-[300px] object-cover lg:w-[400px] rounded-md"
                src={product.img}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <Link href={`/products/${product._id}`}>
                    <Button className="font-semibold ">Details</Button>
                  </Link>
                </div>
                <Button
                  className="font-semibold"
                  color="primary"
                  radius="full"
                  size="md">
                  Buy Now
                </Button>
              </CardFooter>
            </CardBody>
            <p className="absolute text-white top-0 right-0 bg-pink-600 px-3 py-1 text-md z-20 rounded-s-xl">
              Flash sale
            </p>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-6 lg:mt-10">
        <Link href="/flash-sale">
          <Button
            size="lg"
            className="font-bold bg-green-400 text-xl text-white">
            See All Flash Sale Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FlashSaleSection;
