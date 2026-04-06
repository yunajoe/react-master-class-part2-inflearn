import { useState } from "react";
import { FormContext } from "../contexts/FormContext.jsx";

function FormProvider({ children }) {
  const [formData, setFormData] = useState({ id: "", email: "" });

  const handleUserId = (userId) => {
    setFormData((prev) => {
      return {
        ...prev,
        id: userId,
      };
    });
  };

  const handleUserEmail = (userEmail) => {
    setFormData((prev) => {
      return {
        ...prev,
        email: userEmail,
      };
    });
  };

  const value = { formData, handleUserId, handleUserEmail };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export default FormProvider;
