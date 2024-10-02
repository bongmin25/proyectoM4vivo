"use client";
import { AuthContext } from "@/context/authContext";
import IProducts from "@/interfaces/products";
import Image from "next/image";
import React, { useContext, useState } from "react";

const Oreder = () => {
  const { user, setUser } = useContext(AuthContext);
  const [notification, setNotification] = useState("");
  const [cart, setCart] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") || "[]")
      : []
  );

  const handleOrder = async () => {
    if (cart.length === 0) {
      setNotification("Your bag is empty ⛔");
      return;
    }

    const url = process.env.NEXT_PUBLIC_API_URL + "/orders";
    const products = cart.map((product: IProducts) => product.id);
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: user?.token as string,
      },
      body: JSON.stringify({
        userId: JSON.stringify(user?.user.id),
        products: products,
      }),
    };

    try {
      const res = await fetch(url, req);
      const json = await res.json();

      if (json.status === "approved") {
        const newOrder = {
          id: json.id,
          date: json.date,
          status: json.status,
          products: json.products,
        };

        const updatedUser: any = {
          ...user,
          user: {
            ...user?.user,
            orders: [...user?.user.orders, newOrder],
          },
        };
        setUser(updatedUser);
        setNotification("¡Thank you for your purchase! ☑️");
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setCart([]);
        setTimeout(() => {
          setNotification("");
          localStorage.setItem("cart", "[]");
          window.location.href = "/";
        }, 4000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteOrder = (id: any) => {
    const newCart = cart.filter((product: IProducts) => product.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <main className="p-10">
      <h1 className="text-3xl font-mono font-bold mb-5">Your order</h1>
      <div className="flex justify-between">
        <h2>Added products: {cart.length}</h2>
        <h2 className="mr-28 inline">
          Total US$: {""}
          <span className="font-bold">
            {cart.reduce((acc: number, item: any) => acc + item.price, 0)}
          </span>
        </h2>
      </div>
      <div className="flex flex-col mt-10 space-y-6">
        {cart.map((product: IProducts) => (
          <div
            key={product.id}
            className="rounded flex items-center w-full border p-4"
          >
            <Image
              width={200}
              height={200}
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover mr-5 ml-10"
            />
            <div className="flex justify-around w-full">
              <span className="font-medium">{product.name}</span>
              <span className="font-bold">{`US$${product.price}`}</span>
              <button
                onClick={() => deleteOrder(product.id)}
                className="text-orange-950 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-trash"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" />
                  <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={handleOrder}
          className="bg-[#85c99c] text-[#ffffff] rounded p-2 hover:bg-[#239155] transition duration-300"
        >
          Buy 
        </button>
      </div>

      {notification && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded shadow-lg transition-transform transform ease-in-out duration-300 mb-20">
          {notification}
        </div>
      )}
    </main>
  );
};

export default Oreder;
