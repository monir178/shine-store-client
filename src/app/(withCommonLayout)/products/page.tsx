import { IProduct } from "@/app/types/product";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from "react";

const AllProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();
  console.log(products);

  return (
    <div className="mx-2 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {products.map((product: IProduct) => (
          <Card
            key={product._id}
            isFooterBlurred
            className="h-[300px]  lg:h-[400px]">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <h4 className=" font-semibold text-black   text-lg md:text-2xl">
                {product.title}
              </h4>
              <p className="text-tiny  uppercase  text-black font-bold">
                {product.brand}
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt={product.title}
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={product.img}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-white text-tiny bg-pink-600 rounded-2xl px-4 py-2">
                  ${product.price}
                </p>
              </div>
              <Button
                className=" text-md font-semibold text-white px-4 py-3"
                radius="full"
                color="primary"
                size="sm">
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
