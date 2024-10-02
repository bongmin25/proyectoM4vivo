"use client";
import { AuthContext } from "@/context/authContext";
import Link from "next/link";
import React, { useContext, useState, useRef, useEffect } from "react";

const UserLogo = () => {
  const { user, logout } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      {user ? (
        <div className="relative" ref={menuRef}>
          <button onClick={toggleMenu}>
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-user-check hover:text-[#235291]"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
              <path d="M15 19l2 2l4 -4" />
            </svg>
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <Link
                onClick={closeMenu}
                href="/dashboard"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <Link href="/login">
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Logout
                </button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="relative" ref={menuRef}>
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-user hover:text-[#235291]"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
              <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
            </svg>
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <Link
                onClick={closeMenu}
                href="/register"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Sign in
              </Link>
              <Link
                onClick={closeMenu}
                href="/login"
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Log in
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UserLogo;
