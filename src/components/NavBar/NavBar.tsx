import React from "react";
import Link from "next/link";
import UserLogo from "../UserLogo/UserLogo";

const NavBar = ({ onCartClick }: any) => {
  return (
    <nav className="bg-[#000000] text-white">
      <div className="container mx-auto px-4 py-2 flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="flex flex-row items-center mb-4 sm:mb-0">
          <Link className="linkNav mr-4" href={"/"}>
            Home
          </Link>
          <Link className="linkNav" href="/products">
            Products
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <UserLogo />
          <Link onClick={onCartClick} href={"/cart"}>
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag hover:text-[#235291]"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
              <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
            </svg>
          </Link>
          <Link href={"/contact"}>
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-info-square-rounded hover:text-[#235291]"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 9h.01" />
              <path d="M11 12h1v4h1" />
              <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;