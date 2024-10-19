import React from "react";
import UserList from "./UsersList";
const Parent = () => {
  const users = [
    {
      id: 1,
      name: "John",
      hobbies: ["coding", "gaming", "traveling"],
    },
    {
      id: 2,
      name: "Jane",
      hobbies: ["coding", "traveling"],
    },
    {
      id: 3,
      name: "Doe",
      hobbies: ["coding", "sleeping", "traveling"],
    },
  ];

  return <UserList users={users} />;
};

export default Parent;
