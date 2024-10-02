"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import LoginForm from "../Forms/loginForm";
import { AuthContext } from "@/context/authContext";
import Oreder from "../Order/Oreder";
import ModalMessage from "../Modal/ModalMessage";

const CartLogin = () => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  React.useEffect(() => {
    if (!user) {
      setIsModalOpen(true);
    }
  }, [user]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {!user?.login ? (
        <>
          <LoginForm />
          <ModalMessage
            isOpen={isModalOpen}
            closeModal={closeModal}
            message="Log in to see your shop"
            buttonText="Log in"
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-login"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M21 12h-13l3 -3" />
                <path d="M11 15l-3 -3" />
              </svg>
            }
          />
        </>
      ) : (
        <>
          {cart && cart.length > 0 ? (
            <Oreder />
          ) : (
            <>
              <h1 className="font-mono font-extrabold text-3xl mt-10 ">
                Orders from {user?.user.name}
              </h1>
              <div className="flex items-center h-[50vh]  ">
                <div className="flex flex-col rounded justify-center h-[15vh] w-[60vh] hover:scale-[1.03] transition duration-300">
                  <h1 className="text-xl font-bold">
                    Your bag is empty, ready for start?
                  </h1>
                  <p className="mt-3">Once you add something it will appear here</p>
                  <Link href="/products">
                    <button className="bg-[#dfdddd80] text-[#000000] mt-3 rounded py-2 px-4 hover:bg-[#48db5b] hover:text-white transition duration-300 ">
                     Start here
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default CartLogin;
