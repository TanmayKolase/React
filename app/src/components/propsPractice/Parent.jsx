import React from "react";
import Child from "./Child";
const Parent = () => {
  const users = [
    { id: 1, name: "John", email: "john@gmail.com" },
    { id: 2, name: "Jane", email: "jane@gmail.com" },
    { id: 3, name: "Doe", email: "doe@gmail.com" },
  ];

  return <Child users={users} />;
};

export default Parent;
