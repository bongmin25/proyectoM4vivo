import Hero from "@/components/Hero/Hero";
import Link from "next/link";
import React from "react";

const images = ["/1.jpg", "/iphone1.jpg", "/IPAD-PRO-M2-8.jpg", "/watch.jpg"];

const Home = () => {
  return (
    <div>
      <h1 className="text-center font-mono font-bold text-4xl mt-5 mb-10  text-white hover:text-black transition-all duration-200">
        TechMobile
      </h1>
      <Hero images={images} />

      <div className="text-center mt-10 mb-10">
        <p className="text-4xl font-mono font-bold mb-10">¡Welcome to TechMobile!</p>
        <Link href={"/products"}>
          <button className="buttons text-2xl font-mono font-bold mb-10">
            Explore Products
          </button>
        </Link>
        <p> © 2024 TechMobile. All rights reserved . </p>
      </div>
    </div>
  );
};

export default Home;
