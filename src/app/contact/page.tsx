import React from "react";

export default function Contact() {
  return (
    <div className="flex justify-center items-center h-[70vh] ">
      <div className="bg-gradient-to-r from-slate-50 to-neutral-600 flex flex-col items-center justify-center h-[40vh] rounded-xl w-[350px] p-6 shadow-lg hover:scale-[1.01] transition-all duration-300">
        <h2 className="text-center font-bold text-black text-3xl mb-2">
          TechMobile
        </h2>
        <div className="text-center text-black text-lg mb-4">
          <br />
          <p className="text-1xl text-black">
            Contact Number: +569 9111 2345 <br />
            Email: info@techmobile.com <br />
            Address: Street San Pedro, 123 <br />
          </p>
        </div>
        <p className="text-center text-black text-md">
          📱 New products every day <br />
          💻 Tech support <br />
          📈 Best prices <br />
          👥 Customer support <br />
        </p>
      </div>
    </div>
  );
}
