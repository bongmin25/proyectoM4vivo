import React from "react";
import { fetchProducts } from "../page";
import Image from "next/image";
import IProducts from "@/interfaces/products";
import NotFound from "@/app/not-found";
import BuyProduct from "@/components/BuyProduct/BuyProduct";

const ProductPage = async ({ params }: any) => {
  const { id } = params;
  const products = await fetchProducts();
  const product = products.find(
    (product: IProducts) => product.id.toString() === id
  );
  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] p-20">
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
        <h1 className="font-bold text-xl md:text-2xl mb-4">{product.name}</h1>
        <Image
          className="w-auto h-[30vh] max-h-[30vh] md:max-h-[40vh] transition-all duration-300 rounded hover:scale-[1.04]"
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
        />
      </div>
      <div className="md:w-1/2">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <p className="mb-2 sm:mb-0">{product.stock} in-stock</p>
          <div className="flex flex-col items-center">
            <p className="mb-1 text-gray-500">US${product.price}</p>
            <BuyProduct product={product} />
          </div>
        </div>
        <p className="mt-10 w-full md:w-[60vh]">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
