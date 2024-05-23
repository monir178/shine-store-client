import { IProduct } from "@/app/types/product";
import { Button, Image } from "@nextui-org/react";

interface IProductId {
  params: {
    productId: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch("https://shin-server.vercel.app/all-products");

  const staticProducts = await res.json();

  return staticProducts.slice(0, 10).map((product: IProduct) => ({
    productId: product._id,
  }));
};

const ProductDetailsPage = async ({ params }: IProductId) => {
  //   console.log(searchParams);

  const res = await fetch(
    `https://shin-server.vercel.app/products/${params.productId}`
  );

  const data = await res.json();
  console.log("single =>", data);

  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 items-center w-full mt-6">
      <div className="lg:mr-8 mb-4 lg:mb-0">
        <Image
          isBlurred
          alt="Product Image"
          src={data.img}
          className=" w-full lg:w-[500px] h-full lg:h-[500px]"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl md:text-3xl font-bold mb-2 text-green-400">
          {data.title}
        </h1>
        <h4 className="text-xl md:text-2xl font-semibold mb-2 text-blue-500 ">
          ${data.price}
        </h4>
        <p className=" mb-2">
          <span className="text-green-400 font-semibold">Brand: </span>
          {data.brand}
        </p>
        <p className=" mb-2">
          <span className="text-green-400 font-semibold">Category: </span>
          {data.category}
        </p>
        <p className=" mb-2">
          <span className="text-green-400 font-semibold">Ratings: </span>{" "}
          {data.ratings}
        </p>
        <p className=" mb-2">
          <span className="text-green-400 font-semibold">Details: </span>
          {data.description}
        </p>

        <Button className="font-bold px-8 py-3 text-xl w-1/2 mr-auto mt-6 bg-green-400 text-white hover:scale-110">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
