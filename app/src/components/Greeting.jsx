import React from "react";

const Greeting = ({ name, age }) => {
  return (
    <>
      <h1>You are champion {name}</h1>
      <p>And You are just {age} years old</p>
    </>
  );
};
export default Greeting;
