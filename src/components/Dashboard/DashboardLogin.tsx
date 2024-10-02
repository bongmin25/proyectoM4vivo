"use client";
import { AuthContext } from "@/context/authContext";
import React, { useContext } from "react";

const DashboardLogin = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1 className="ml-10 flex item-center mt-10 text-4xl font-bold">
        Dashboard
      </h1>
      <div className="flex justify-center items-center h-[50vh]">
        <div>
          <h1 className="font-mono font-bold text-3xl mb-5">My data</h1>
          <div className="bg-gradient-to-r from-slate-200 to-neutral-600 font-mono flex flex-col justify-center h-[20vh] w-[40vh] mx-auto rounded-lg  hover:text-slate-50 hover:scale-[1.03] transition-all duration-300">
            <div className="mx-auto">
              <h1 className="mb-2">Name: {user?.user.name}</h1>
              <h1 className="mb-2">Email: {user?.user.email}</h1>
              <h1 className="mb-2">Phone: {user?.user.phone}</h1>
              <h1 className="mb-2">Address: {user?.user.address}</h1>
            </div>
          </div>
        </div>
        <div className="ml-20">
          <h1 className="font-mono font-bold text-3xl mb-5">Orders</h1>
          <div className="bg-gradient-to-r from-slate-200 to-neutral-600 font-mono flex  justify-center h-auto w-[60vh] mx-auto rounded-lg  hover:text-slate-50 hover:scale-[1.03] transition-all duration-300">
            <div className="mx-auto text-center flex flex-col m-10">
              {user?.user.orders.map((order: any, i: number) => (
                <div key={i}>
                  <div className="mx-auto">
                    <h1 className="my-2">
                      N°: {order.id} Fecha: {order.date} Estado: {order.status}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLogin;
