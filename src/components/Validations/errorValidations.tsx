import { ValidationErrors } from "../../interfaces/validationErrors";
export const validateRegister = (formData: ValidationErrors) => {
  const errors: ValidationErrors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d).{6,}$/;
  const addressRegex = /.*\d.*/;
  const phoneRegex = /^\d+$/;

  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = "Need email, must be valid";
  }
  if (!formData.password || !passwordRegex.test(formData.password)) {
    errors.password =
      "Need a password with at least 6 characters and 1 number";
  }
  if (!formData.address || !addressRegex.test(formData.address)) {
    errors.address = "Need address, must have street and height";
  }
  if (!formData.phone || !phoneRegex.test(formData.phone)) {
    errors.phone = "Need phone, must be only numbers";
  }

  return errors;
};

export const validateLogin = (formData: ValidationErrors) => {
  const errors: ValidationErrors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d).{6,}$/;

  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = "User not found";
  }
  if (!formData.password || !passwordRegex.test(formData.password)) {
    errors.password = "Password incorrect";
  }

  return errors;
};
