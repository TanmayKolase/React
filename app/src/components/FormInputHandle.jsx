import React, { useState } from "react";

const FormInputHandle = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <p>Your name is:{name}</p>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={handleChange}
      />
    </>
  );
};

export default FormInputHandle;
