"use client";
import React, { useContext, useState } from "react";
import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import IProduct from "@/interfaces/products";
import ModalMessage from "../Modal/ModalMessage";

interface Product {
  product: IProduct;
}

const ProductBuy = ({ product }: Product) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tipoDeModal, settipoDeModal] = useState<"exitoso" | "repeticion">(
    "exitoso"
  );
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleBuy = () => {
    if (!user) {
      router.push("/login");
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      if (!cart.some((item: IProduct) => item.id === product?.id)) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

        settipoDeModal("exitoso");
        setIsModalOpen(true);
      } else {
        settipoDeModal("repeticion");
        setIsModalOpen(true);
      }
    }
  };
  return (
    <>
      <button
        className="bg-[#85c99c] text-[#ffffff] rounded py-2 px-4 hover:bg-[#239155] transition duration-200"
        onClick={handleBuy}
      >
        Buy
      </button>
      {tipoDeModal === "repeticion" ? (
        <ModalMessage
          isOpen={isModalOpen}
          closeModal={closeModal}
          message="🚫 Already added"
          buttonText="Go Back"
          onButtonClick={() => router.push("/products")}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-repeat-off"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 12v-3c0 -1.336 .873 -2.468 2.08 -2.856m3.92 -.144h10m-3 -3l3 3l-3 3" />
              <path d="M20 12v3a3 3 0 0 1 -.133 .886m-1.99 1.984a3 3 0 0 1 -.877 .13h-13m3 3l-3 -3l3 -3" />
              <path d="M3 3l18 18" />
            </svg>
          }
        />
      ) : (
        <ModalMessage
          isOpen={isModalOpen}
          closeModal={closeModal}
          message="¡Product Added! ✅"
          buttonText="keep buying"
          onButtonClick={() => router.push("/products")}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-check"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
          }
        />
      )}
    </>
  );
};

export default ProductBuy;
