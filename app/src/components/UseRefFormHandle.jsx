import React, { useRef } from "react";

const UseRefFormHandle = () => {
  const inputRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    const user = {
      name: inputRef.current.value,
      password: parseInt(passwordRef.current.value),
    };
    e.preventDefault();
    console.log(user);
  };

  const handleChange = () => {
    passwordRef.current.type =
      passwordRef.current.type === "password" ? "text" : "password";
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" ref={inputRef} />{" "}
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />{" "}
        <br />
        <br />
        <button type="button" onClick={handleChange}>
          Show Password
        </button>{" "}
        <br />
        <button type="button" onClick={handleChange}>
          Hide Password
        </button>{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UseRefFormHandle;
