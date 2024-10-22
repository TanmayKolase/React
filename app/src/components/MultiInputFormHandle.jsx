import React, { useState } from "react";

const MultiInputFormHandle = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted successfully! ${formData.name} | ${formData.email}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MultiInputFormHandle;
