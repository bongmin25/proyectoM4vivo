"use client";

// Validations
import { validateRegister } from "@/components/Validations/errorValidations";
// Interfaces
import { ValidationErrors } from "../../interfaces/validationErrors";
// Hooks
import { useState } from "react";

// React/Next
import Link from "next/link";
import React from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  });
  const [error, setError] = useState<ValidationErrors>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<React.ReactNode[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateErrors = validateRegister(formData);
    const url = process.env.NEXT_PUBLIC_API_URL + "/users/register";

    if (Object.keys(validateErrors).length === 0) {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setIsLoading(true);
      setIsModalOpen(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      window.location.href = "/login";
    } else {
      setModalMessage(
        Object.values(validateErrors).map((error, index) => (
          <div key={index}>
            {error}
            <br />
            <br />
          </div>
        ))
      );
      setIsModalOpen(true);
      setError(validateErrors);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center h-[70vh] w-[50vh] m-auto"
      >
        <h1 className="font-bold text-3xl flex justify-center items-center mb-8">
          Sign in
        </h1>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            onChange={handleChange}
            value={formData.name}
            className="loginInput"
            type="name"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            placeholder="mail@example.com"
            onChange={handleChange}
            value={formData.email}
            className="loginInput"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            placeholder="Minimum 6 characters and 1 number"
            onChange={handleChange}
            value={formData.password}
            className="loginInput"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input
            placeholder="Include street and height"
            onChange={handleChange}
            value={formData.address}
            className="loginInput"
            type="text"
            id="address"
            name="address"
          />
        </div>
        <div></div>
        <label htmlFor="phone">Phone: </label>
        <input
          placeholder="Include area code"
          onChange={handleChange}
          value={formData.phone}
          className="loginInput"
          type="phone"
          id="phone"
          name="phone"
        />
        <div className="flex justify-center items-center mt-10">
          <button type="submit" className="buttons mr-8">
            Sign in
          </button>
          <Link href="/login">
            <button className="border border-[#c2c2c2] rounded p-2 hover:bg-[#c2c2c2] transition duration-200">
              Log in
            </button>
          </Link>
        </div>
      </form>
      {isModalOpen && (
        <>
          <div className="modal-overlay"></div>
          <dialog open>
            {isLoading ? (
              <>
                <h1 className="text-center font-bold m-4">
                  ¡Sign up successful! ✅
                </h1>
                <br />
                <div className="loader"></div>
              </>
            ) : (
              <>
                <p className="text-center">
                  <div className="font-bold">⛔ Fix this errors: </div>
                  <br />
                  <div className="text-red-500">{modalMessage}</div>
                </p>
                <form method="dialog">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="modal-button"
                  >
                    OK
                  </button>
                </form>
              </>
            )}
          </dialog>
        </>
      )}
    </div>
  );
};

export default RegisterForm;
