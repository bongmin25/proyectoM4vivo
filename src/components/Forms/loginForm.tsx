"use client";

// Validations
import { validateLogin } from "@/components/Validations/errorValidations";
// Interfaces
import { ValidationErrors } from "../../interfaces/validationErrors";
// Hooks
import { useState, useContext } from "react";

// React/Next
import React from "react";
import { AuthContext } from "@/context/authContext";

// Components
import Modal from "../Modal/Modal";
import Link from "next/link";

const LoginForm = () => {
  const { setUser } = useContext<any>(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<ValidationErrors>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateErrors = validateLogin(formData);
    const url = process.env.NEXT_PUBLIC_API_URL + "/users/login";

    if (Object.keys(validateErrors).length === 0) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          setModalMessage("Redirecting...");
          setIsModalOpen(true);
          setIsLoading(true);

          await new Promise((resolve) => setTimeout(resolve, 2000));
          setUser(data);

          window.location.href = "/products";
        } else {
          const data = await response.json();
          setModalMessage(data.message || "Error to login");
          setIsModalOpen(true);
          setError(validateErrors);
        }
      } catch (error) {
        setModalMessage("Error to login");
        setIsModalOpen(true);
        setError(validateErrors);
      }
    } else {
      setModalMessage(Object.values(validateErrors).join(", "));
      setIsModalOpen(true);
      setError(validateErrors);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center h-[60vh] w-[50vh] m-auto"
      >
        <h1 className="font-bold text-3xl flex justify-center items-center mb-10">
          Log In
        </h1>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            placeholder="mail@example.com"
            value={formData.email}
            onChange={handleChange}
            className="loginInput"
            type="text"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            placeholder="******"
            onChange={handleChange}
            value={formData.password}
            className="loginInput"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className="flex justify-center items-center ">
          <button type="submit" className="buttons mt-10">
            Log in
          </button>
          <Link
            href="/register"
            className="flex justify-center mt-10 items-center  p-2 text-black  rounded  text-center ml-10 hover:bg-slate-700 hover:text-white transition duration-300"
          >
            Sign in
          </Link>
        </div>
      </form>
      <Modal
        isModalOpen={isModalOpen}
        modalMessage={modalMessage}
        isLoading={isLoading}
        setIsModalOpen={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default LoginForm;
