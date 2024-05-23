import { IProduct } from "@/app/types/product";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

const TrendingProducts = async () => {
  const res = await fetch(
    "https://shine-store-server-ivory.vercel.app/trending-products",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const products = await res.json();

  return (
    <div className="my-14 lg:my-24 mx-4">
      <h1 className="text-xl md:text-3xl mb-4 md:mb-8  font-bold uppercase tracking-wide lg:text-5xl text-center text-green-400">
        Trending Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product: IProduct) => (
          <Card className="relative" shadow="md" key={product._id}>
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                shadow="sm"
                radius="lg"
                width="100%"
                alt={product.title}
                className="w-full object-cover h-[140px] lg:h-[200px]"
                src={product.img}
              />
            </CardBody>
            <CardFooter>
              <Link
                className="absolute bottom-16 text-white font-semibold z-40 bg-blue-500 rounded-e-lg px-3 py-1 left-0"
                href={`/products/${product._id}`}>
                Details
              </Link>
              <div className="text-small justify-between">
                <b>{product.title}</b>
                <p className="text-default-500">{product.price}</p>
              </div>
            </CardFooter>
            <p className="absolute text-white top-0 right-0 bg-pink-600 px-3 py-1 text-md z-20 rounded-s-xl">
              Trending
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
