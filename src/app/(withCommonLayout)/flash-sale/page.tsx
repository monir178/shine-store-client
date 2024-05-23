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

const AllFlashSaleProducts = async () => {
  const res = await fetch(
    "https://shine-store-server-ivory.vercel.app/flash-sale",
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
      <h1 className="text-center text-xl md:text-2xl lg:text-5xl text-green-400 mb-4 lg:mb-10">
        Flash Sale Products
      </h1>
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
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllFlashSaleProducts;
